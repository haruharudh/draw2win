"use strict";
cc._RF.push(module, 'f4562aFxQlJTJ/Raa1P++s2', 'Player');
// Script/CustomCharacter/Player.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("../Common");
var GameConfig_1 = require("../GameConfig");
var GameManager_1 = require("../GameManager");
var Bullet_1 = require("./Bullet");
var Enermy_1 = require("./Enermy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.delayTime = 0;
        _this.isStartMoving = false;
        _this.initPos = new cc.Vec3(0, 0);
        _this.initVelocity = new cc.Vec2(0, 0);
        _this.charSprite = [];
        _this.aniNode = null;
        _this.enermyNode = null;
        _this.enermyNode_2 = null;
        _this.bullet = null;
        _this.posForBullet = null;
        _this.posForBullet_2 = null;
        _this.enermySprite = null;
        _this.enermySprite2 = null;
        _this.weaponSprite = null;
        _this.force = null;
        _this.forceBullet = 0;
        _this.positionAddForce = null;
        _this.sfxEnemyNode = null;
        _this.sfxEnemyNode_2 = null;
        _this.sfxPlayer = null;
        _this.elementPlayer = null;
        _this.isFalling = false;
        _this.isHasTeleport = false;
        _this.positionTele = null;
        _this.startLevelAnim = null;
        _this.spawnMulti_Obj = null;
        _this.isRemove = false;
        _this.counter = 0;
        return _this;
    }
    Player_1 = Player;
    Object.defineProperty(Player, "instance", {
        get: function () {
            return this._ins || new Player_1;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.onLoad = function () {
        Common_1.default.instance.node.on(Common_1.default.instance.StartMovingEvent, this.startMoving, this);
        Common_1.default.instance.node.on(Common_1.default.instance.PassLevelEvent, this.onPass, this);
        Common_1.default.instance.node.on(Common_1.default.instance.FailLevelEvent, this.onFail, this);
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
        this.initPos = this.node.position;
    };
    Player.prototype.onTouchStartAbove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("Player has Event");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    Player.prototype.onDisable = function () {
        Common_1.default.instance.node.off(Common_1.default.instance.StartMovingEvent, this.startMoving, this);
        Common_1.default.instance.node.off(Common_1.default.instance.PassLevelEvent, this.onPass, this);
        Common_1.default.instance.node.off(Common_1.default.instance.FailLevelEvent, this.onFail, this);
    };
    Player.prototype.startMoving = function () {
        if (this.sfxEnemyNode != undefined) {
            this.sfxEnemyNode.active = !this.sfxEnemyNode.active;
        }
        if (this.sfxEnemyNode_2 != undefined) {
            this.sfxEnemyNode_2.active = !this.sfxEnemyNode_2.active;
        }
        if (this.rb != null) {
            if (!this.isFalling) {
                this.rb.type = cc.RigidBodyType.Dynamic;
                this.rb.linearVelocity = this.initVelocity;
            }
            this.delayTime = GameManager_1.default.instance.lineMgr.timeChecking;
            this.counter = 0;
            this.isStartMoving = true;
        }
        if (this.enermyNode != undefined) {
            var rbEnermy = this.enermyNode.getComponent(cc.RigidBody);
            var enermyCom = this.enermyNode.getComponent(Enermy_1.default);
            if (rbEnermy != null) {
                if (!enermyCom.getIsFalling) {
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
            }
            else if (this.bullet != undefined) {
                this.AdddForceForBullet();
            }
            this.AddForceForEnermy();
            this.MovingEnermy();
            this.onSpawnMulti();
        }
        if (this.enermyNode_2 != undefined) {
            var rbEnermy = this.enermyNode_2.getComponent(cc.RigidBody);
            var enermyCom = this.enermyNode_2.getComponent(Enermy_1.default);
            if (rbEnermy != null) {
                if (!enermyCom.getIsFalling) {
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
            }
            else if (this.bullet != undefined) {
                this.AdddForceForBullet2();
            }
            this.AddForceForEnermy2();
            this.MovingEnermy2();
            this.onSpawnMulti();
        }
        if (this.weaponSprite != undefined) {
            if (this.charSprite[Common_1.spriteState.Weapon] != undefined) {
                var sprite = this.weaponSprite.getComponent(cc.Sprite);
                sprite.spriteFrame = this.charSprite[Common_1.spriteState.Weapon];
            }
        }
        if (this.startLevelAnim != null) {
            this.startLevelAnim.active = false;
        }
    };
    Player.prototype.MovingEnermy = function () {
        var x = this.node.position.x - this.enermyNode.position.x;
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("value of hasMove: " + enermyNodeCom.hasMove);
            if (enermyNodeCom.hasMove) {
                console.log("value of x: " + x);
                enermyNodeCom.setDir = new cc.Vec2(x, 0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    };
    Player.prototype.MovingEnermy2 = function () {
        var x = this.node.position.x - this.enermyNode_2.position.x;
        var enermyNodeCom = this.enermyNode_2.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("value of hasMove2: " + enermyNodeCom.hasMove);
            if (enermyNodeCom.hasMove) {
                console.log("value of x2: " + x);
                enermyNodeCom.setDir = new cc.Vec2(x, 0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    };
    Player.prototype.AddForceForEnermy = function () {
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("go in enermyCom");
            if (enermyNodeCom.getIsAttack) {
                console.log("attack");
                var x = this.node.position.x - this.enermyNode.position.x;
                var y = this.node.position.y - this.enermyNode.position.y;
                var rbEnermyNode = this.enermyNode.getComponent(cc.RigidBody);
                if (rbEnermyNode != null) {
                    console.log("rb is not null");
                    if (this.positionAddForce != null) {
                        console.log("add Force in positionAddForce");
                        rbEnermyNode.applyForce(new cc.Vec2(x * this.force.x, y * this.force.y), this.positionAddForce, true);
                    }
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x * this.force.x, y * this.force.y), true);
                }
            }
        }
    };
    Player.prototype.AddForceForEnermy2 = function () {
        var enermyNodeCom = this.enermyNode_2.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("go in enermyCom");
            if (enermyNodeCom.getIsAttack) {
                console.log("attack");
                var x = this.node.position.x - this.enermyNode_2.position.x;
                var y = this.node.position.y - this.enermyNode_2.position.y;
                var rbEnermyNode = this.enermyNode_2.getComponent(cc.RigidBody);
                if (rbEnermyNode != null) {
                    console.log("rb is not null");
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x * this.force.x, y * this.force.y), true);
                }
            }
        }
    };
    Player.prototype.StopEnermyMoving = function () {
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            enermyNodeCom.setIsMoving = false;
        }
    };
    Player.prototype.AdddForceForBullet = function () {
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyFire] != undefined) {
                console.log("change fire sprite");
                this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyFire];
            }
        }
        var m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode.position.x + this.posForBullet.x, this.enermyNode.position.y + this.posForBullet.y, 0);
        var m_bulletComp = m_bullet.getComponent(Bullet_1.default);
        var x = this.node.position.x - m_bullet.position.x;
        var y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x * this.forceBullet, y * this.forceBullet));
    };
    Player.prototype.AdddForceForBullet2 = function () {
        if (this.enermyNode_2 !== undefined) {
            console.log("value of spriteEnermy: " + Common_1.spriteState.EnermyFire);
            if (this.charSprite[Common_1.spriteState.EnermyFire] != undefined) {
                console.log("change fire sprite");
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyFire];
            }
        }
        var m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode_2.position.x + this.posForBullet_2.x, this.enermyNode_2.position.y + this.posForBullet_2.y, 0);
        var m_bulletComp = m_bullet.getComponent(Bullet_1.default);
        var x = this.node.position.x - m_bullet.position.x;
        var y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x * this.forceBullet, y * this.forceBullet));
    };
    Player.prototype.onSpawnMulti = function () {
        if (this.enermyNode != undefined && this.spawnMulti_Obj != undefined) {
            this.schedule(function () {
                console.log("bug is here");
                var multiObj = cc.instantiate(this.spawnMulti_Obj);
                this.enermyNode.addChild(multiObj);
            }, 0.5, cc.macro.REPEAT_FOREVER);
        }
        if (this.enermyNode_2 != undefined && this.spawnMulti_Obj != undefined) {
            this.schedule(function () {
                var multiObj = cc.instantiate(this.spawnMulti_Obj);
                this.enermyNode_2.addChild(multiObj);
            }, 0.5, cc.macro.REPEAT_FOREVER);
        }
    };
    Player.prototype.update = function (dt) {
        if (this.isStartMoving == undefined)
            return;
        this.counter += dt;
        if (this.counter >= 1) {
            this.counter--;
            this.counter--;
            if (this.delayTime == 0) {
                this.isStartMoving = true;
            }
        }
    };
    Player.prototype.Teleport = function () {
        if (this.isHasTeleport) {
            if (this.positionTele != null) {
                this.node.position = new cc.Vec3(this.positionTele.x, this.positionTele.y, 0);
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(50, 0), true);
            }
        }
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        if (GameConfig_1.default.gameState != Common_1.inGameState.CHECKING)
            return;
        if (other.node.group == "Target") {
            console.log("in Target pass");
            this.Teleport();
            GameConfig_1.default.gameState = Common_1.inGameState.COMPLETED;
            //this.node.getComponent(cc.PolygonCollider).enabled = false;
            Common_1.default.instance.node.emit("PassLevelEvent");
            return;
        }
        if (other.node.group == "Enemy") {
            console.log("in Enermy loss");
            GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            //this.MovingEnermy();
            // if (this.node.getChildByName("Bullet") != null)
            //     this.node.getChildByName("Bullet").removeFromParent();
            return;
        }
        if (other.node.name == "Line") {
            console.log("collide with line");
        }
        if (other.node.name == "Line" && !GameManager_1.default.instance.lineMgr.isCanTouchDrawLine) {
            GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            return;
        }
    };
    Player.prototype.onFail = function () {
        if (this.charSprite[Common_1.spriteState.Lose] !== undefined) {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Lose];
        }
        if (this.isRemove) {
            this.node.removeFromParent(true);
        }
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyWin] != undefined) {
                console.log("change fail sprite");
                if (this.enermySprite != undefined) {
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyWin];
                }
                else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyWin];
            }
        }
        if (this.charSprite[Common_1.spriteState.Enermy_2_Win] != undefined) {
            console.log("change fail sprite");
            if (this.enermySprite2 != undefined) {
                this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Win];
            }
            else
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Win];
        }
        if (this.elementPlayer != undefined) {
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if (this.sfxPlayer != undefined) {
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    };
    Player.prototype.onPass = function () {
        if (this.charSprite[Common_1.spriteState.Win] !== undefined) {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Win];
        }
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyLose] != undefined) {
                if (this.enermySprite != undefined) {
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyLose];
                    console.log("value of EnermyLose " + Common_1.spriteState.EnermyLose);
                    console.log("change sprite in onPass");
                }
                else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyLose];
            }
        }
        if (this.enermyNode_2 !== undefined) {
            if (this.charSprite[Common_1.spriteState.Enermy_2_Lose] != undefined) {
                if (this.enermySprite2 != undefined) {
                    this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Lose];
                }
                else
                    this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Lose];
            }
        }
        if (this.elementPlayer != undefined) {
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if (this.sfxPlayer != undefined) {
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    };
    Player.prototype.resetGravity = function () {
        this.rb.linearVelocity = this.initVelocity;
    };
    Player.prototype.updateNewGravity = function (newGravity) {
        if (this.rb != null) {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = newGravity;
        }
    };
    Player.prototype.updateNewLinear = function (newVelo) {
        if (this.rb != undefined) {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = new newVelo;
            this.isStartMoving = true;
        }
    };
    var Player_1;
    __decorate([
        property(cc.RigidBody)
    ], Player.prototype, "rb", void 0);
    __decorate([
        property
    ], Player.prototype, "initVelocity", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "charSprite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "aniNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermyNode_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "posForBullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "posForBullet_2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermySprite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermySprite2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "weaponSprite", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "force", void 0);
    __decorate([
        property
    ], Player.prototype, "forceBullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "positionAddForce", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxEnemyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxEnemyNode_2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "elementPlayer", void 0);
    __decorate([
        property
    ], Player.prototype, "isFalling", void 0);
    __decorate([
        property
    ], Player.prototype, "isHasTeleport", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "positionTele", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "spawnMulti_Obj", void 0);
    __decorate([
        property
    ], Player.prototype, "isRemove", void 0);
    Player = Player_1 = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();