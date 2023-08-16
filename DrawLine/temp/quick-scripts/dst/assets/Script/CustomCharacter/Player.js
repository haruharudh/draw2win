
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXFBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBNkQ7QUFDN0QsNENBQXVDO0FBQ3ZDLDhDQUF5QztBQUN6QyxtQ0FBOEI7QUFDOUIsbUNBQThCO0FBR3hCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeWJDO1FBdGJHLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsYUFBTyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckMsa0JBQVksR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUVqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMs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LEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFHakM7UUFEQyxRQUFROzRDQUNpQjtJQXZEVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeWIxQjtJQUFELGFBQUM7Q0F6YkQsQUF5YkMsQ0F6Ym1DLEVBQUUsQ0FBQyxTQUFTLEdBeWIvQztrQkF6Ym9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb21tb24sIHsgaW5HYW1lU3RhdGUsIHNwcml0ZVN0YXRlIH0gZnJvbSBcIi4uL0NvbW1vblwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XG5pbXBvcnQgRW5lcm15IGZyb20gXCIuL0VuZXJteVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gICAgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG4gICAgZGVsYXlUaW1lOiBudW1iZXIgPSAwO1xuICAgIGlzU3RhcnRNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbml0UG9zOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgMCk7XG4gICAgQHByb3BlcnR5XG4gICAgaW5pdFZlbG9jaXR5OiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNoYXJTcHJpdGU6Y2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFuaU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZXJteU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZXJteU5vZGVfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXG4gICAgcG9zRm9yQnVsbGV0OiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBwb3NGb3JCdWxsZXRfMjogY2MuVmVjMiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lcm15U3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVybXlTcHJpdGUyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3ZWFwb25TcHJpdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIGZvcmNlOiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBmb3JjZUJ1bGxldDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBwb3NpdGlvbkFkZEZvcmNlOiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZnhFbmVteU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNmeEVuZW15Tm9kZV8yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZnhQbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVsZW1lbnRQbGF5ZXI6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgaXNGYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgaXNIYXNUZWxlcG9ydDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIHBvc2l0aW9uVGVsZTogY2MuVmVjMiA9IG51bGw7XG4gICAgc3RhcnRMZXZlbEFuaW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzcGF3bk11bHRpX09iajogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGlzUmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIF9pbnM6IFBsYXllcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBQbGF5ZXI7XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub24oQ29tbW9uLmluc3RhbmNlLlN0YXJ0TW92aW5nRXZlbnQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgICAgICBDb21tb24uaW5zdGFuY2Uubm9kZS5vbihDb21tb24uaW5zdGFuY2UuUGFzc0xldmVsRXZlbnQsdGhpcy5vblBhc3MsdGhpcyk7XG4gICAgICAgIENvbW1vbi5pbnN0YW5jZS5ub2RlLm9uKENvbW1vbi5pbnN0YW5jZS5GYWlsTGV2ZWxFdmVudCx0aGlzLm9uRmFpbCx0aGlzKTtcbiAgICAgICAgLy90aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydEFib3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuXG4gICAgfVxuICAgIG9uVG91Y2hTdGFydEFib3ZlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBoYXMgRXZlbnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKGxvY2FsUG9zKSkge1xuICAgICAgICAgICAgLy8gWOG7rSBsw70gc+G7sSBraeG7h24gY2hvIMSR4buRaSB0xrDhu6NuZyDhu58gdHLDqm5cbiAgICAgICAgICAgIC8vZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhY2tncm91bmQgaGFzIEV2ZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIE5nxINuIGNo4bq3biBz4buxIGtp4buHbiBsYW4gdOG7j2EgbMOqbiDEkeG7kWkgdMaw4bujbmcgZMaw4bubaVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5TdGFydE1vdmluZ0V2ZW50LCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5QYXNzTGV2ZWxFdmVudCx0aGlzLm9uUGFzcyx0aGlzKTtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5GYWlsTGV2ZWxFdmVudCx0aGlzLm9uRmFpbCx0aGlzKTtcbiAgICB9XG4gICAgY291bnRlcjogbnVtYmVyID0gMDtcbiAgICBzdGFydE1vdmluZygpXG4gICAge1xuXG4gICAgICAgIGlmKHRoaXMuc2Z4RW5lbXlOb2RlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnNmeEVuZW15Tm9kZS5hY3RpdmUgPSAhdGhpcy5zZnhFbmVteU5vZGUuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2Z4RW5lbXlOb2RlXzIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuc2Z4RW5lbXlOb2RlXzIuYWN0aXZlID0gIXRoaXMuc2Z4RW5lbXlOb2RlXzIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmIgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSB0aGlzLmluaXRWZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZWxheVRpbWUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5saW5lTWdyLnRpbWVDaGVja2luZztcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZW5lcm15Tm9kZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHJiRW5lcm15ID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgbGV0IGVuZXJteUNvbSA9IHRoaXMuZW5lcm15Tm9kZS5nZXRDb21wb25lbnQoRW5lcm15KTtcblxuICAgICAgICAgICAgaWYocmJFbmVybXkgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIGlmICghZW5lcm15Q29tLmdldElzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMuYnVsbGV0ICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHRoaXMuQWRkZEZvcmNlRm9yQnVsbGV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkFkZEZvcmNlRm9yRW5lcm15KCk7XG4gICAgICAgICAgICB0aGlzLk1vdmluZ0VuZXJteSgpO1xuICAgICAgICAgICAgdGhpcy5vblNwYXduTXVsdGkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVuZXJteU5vZGVfMiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHJiRW5lcm15ID0gdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlbmVybXlDb20gPSB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoRW5lcm15KTtcblxuICAgICAgICAgICAgaWYocmJFbmVybXkgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIGlmICghZW5lcm15Q29tLmdldElzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMuYnVsbGV0ICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHRoaXMuQWRkZEZvcmNlRm9yQnVsbGV0MigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5BZGRGb3JjZUZvckVuZXJteTIoKTtcbiAgICAgICAgICAgIHRoaXMuTW92aW5nRW5lcm15MigpO1xuICAgICAgICAgICAgdGhpcy5vblNwYXduTXVsdGkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMud2VhcG9uU3ByaXRlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldlYXBvbl0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy53ZWFwb25TcHJpdGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldlYXBvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGFydExldmVsQW5pbSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGV2ZWxBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgTW92aW5nRW5lcm15KCk6IHZvaWR7XG4gICAgICAgIFxuICAgICAgICBsZXQgeCA9IHRoaXMubm9kZS5wb3NpdGlvbi54IC0gdGhpcy5lbmVybXlOb2RlLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCBlbmVybXlOb2RlQ29tID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChFbmVybXkpO1xuICAgICAgICBpZiAoIGVuZXJteU5vZGVDb20gIT0gbnVsbCApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBvZiBoYXNNb3ZlOiBcIiArIGVuZXJteU5vZGVDb20uaGFzTW92ZSk7XG4gICAgICAgICAgICBpZiAoIGVuZXJteU5vZGVDb20uaGFzTW92ZSl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHg6IFwiKyB4KTtcbiAgICAgICAgICAgICAgICBlbmVybXlOb2RlQ29tLnNldERpciA9IG5ldyBjYy5WZWMyKHgsMCk7XG4gICAgICAgICAgICAgICAgZW5lcm15Tm9kZUNvbS5zZXRJc01vdmluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTW92aW5nRW5lcm15MigpOiB2b2lke1xuICAgICAgICBcbiAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCBlbmVybXlOb2RlQ29tID0gdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KEVuZXJteSk7XG4gICAgICAgIGlmICggZW5lcm15Tm9kZUNvbSAhPSBudWxsICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIGhhc01vdmUyOiBcIisgZW5lcm15Tm9kZUNvbS5oYXNNb3ZlKTtcbiAgICAgICAgICAgIGlmICggZW5lcm15Tm9kZUNvbS5oYXNNb3ZlKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHgyOiBcIisgeCk7XG4gICAgICAgICAgICAgICAgZW5lcm15Tm9kZUNvbS5zZXREaXIgPSBuZXcgY2MuVmVjMih4LDApO1xuICAgICAgICAgICAgICAgIGVuZXJteU5vZGVDb20uc2V0SXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEFkZEZvcmNlRm9yRW5lcm15KCk6IHZvaWR7XG4gICAgICAgIFxuICAgICAgICBsZXQgZW5lcm15Tm9kZUNvbSA9IHRoaXMuZW5lcm15Tm9kZS5nZXRDb21wb25lbnQoRW5lcm15KTtcbiAgICAgICAgaWYgKCBlbmVybXlOb2RlQ29tICE9IG51bGwgKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gaW4gZW5lcm15Q29tXCIpO1xuICAgICAgICAgICBpZiAoZW5lcm15Tm9kZUNvbS5nZXRJc0F0dGFjayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLmVuZXJteU5vZGUucG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBsZXQgcmJFbmVybXlOb2RlID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgICAgIGlmIChyYkVuZXJteU5vZGUgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJiIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbkFkZEZvcmNlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgRm9yY2UgaW4gcG9zaXRpb25BZGRGb3JjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJiRW5lcm15Tm9kZS5hcHBseUZvcmNlKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZS54LHkqdGhpcy5mb3JjZS55KSwgdGhpcy5wb3NpdGlvbkFkZEZvcmNlLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15Tm9kZS5hcHBseUZvcmNlVG9DZW50ZXIobmV3IGNjLlZlYzIoeCp0aGlzLmZvcmNlLngseSp0aGlzLmZvcmNlLnkpLHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIEFkZEZvcmNlRm9yRW5lcm15MigpOiB2b2lke1xuICAgICAgICBcbiAgICAgICAgbGV0IGVuZXJteU5vZGVDb20gPSB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoRW5lcm15KTtcbiAgICAgICAgaWYgKCBlbmVybXlOb2RlQ29tICE9IG51bGwgKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gaW4gZW5lcm15Q29tXCIpO1xuICAgICAgICAgICBpZiAoZW5lcm15Tm9kZUNvbS5nZXRJc0F0dGFjayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgbGV0IHJiRW5lcm15Tm9kZSA9IHRoaXMuZW5lcm15Tm9kZV8yLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgICAgIGlmIChyYkVuZXJteU5vZGUgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJiIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICByYkVuZXJteU5vZGUuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZS54LHkqdGhpcy5mb3JjZS55KSx0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFN0b3BFbmVybXlNb3ZpbmcoKTogdm9pZHtcbiAgICAgICAgbGV0IGVuZXJteU5vZGVDb20gPSB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KEVuZXJteSk7XG4gICAgICAgIGlmICggZW5lcm15Tm9kZUNvbSAhPSBudWxsKXtcbiAgICAgICAgICAgIGVuZXJteU5vZGVDb20uc2V0SXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgQWRkZEZvcmNlRm9yQnVsbGV0KCk6IHZvaWR7XG4gICAgICAgIGlmKCB0aGlzLmVuZXJteU5vZGUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmaXJlIHNwcml0ZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1fYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobV9idWxsZXQpO1xuICAgICAgICBtX2J1bGxldC5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHRoaXMuZW5lcm15Tm9kZS5wb3NpdGlvbi54ICsgdGhpcy5wb3NGb3JCdWxsZXQueCwgdGhpcy5lbmVybXlOb2RlLnBvc2l0aW9uLnkgKyB0aGlzLnBvc0ZvckJ1bGxldC55LDApO1xuICAgICAgICBsZXQgbV9idWxsZXRDb21wID0gbV9idWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XG4gICAgICAgIGxldCB4ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnggLSBtX2J1bGxldC5wb3NpdGlvbi54O1xuICAgICAgICBsZXQgeSA9IHRoaXMubm9kZS5wb3NpdGlvbi55IC0gbV9idWxsZXQucG9zaXRpb24ueTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGQgRm9yY2VcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZSBvZiBidWxsZXQgbm9kZTogXCIgKyBtX2J1bGxldC5uYW1lKTtcbiAgICAgICAgbV9idWxsZXRDb21wLkFkZEZvcmNlKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZUJ1bGxldCx5KnRoaXMuZm9yY2VCdWxsZXQpKTtcbiAgICB9XG4gICAgQWRkZEZvcmNlRm9yQnVsbGV0MigpOiB2b2lke1xuICAgICAgICBpZiggdGhpcy5lbmVybXlOb2RlXzIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHNwcml0ZUVuZXJteTogXCIgKyBzcHJpdGVTdGF0ZS5FbmVybXlGaXJlKTtcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmaXJlIHNwcml0ZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlGaXJlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbV9idWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtX2J1bGxldCk7XG4gICAgICAgIG1fYnVsbGV0LnBvc2l0aW9uID0gbmV3IGNjLlZlYzModGhpcy5lbmVybXlOb2RlXzIucG9zaXRpb24ueCArIHRoaXMucG9zRm9yQnVsbGV0XzIueCwgdGhpcy5lbmVybXlOb2RlXzIucG9zaXRpb24ueSArIHRoaXMucG9zRm9yQnVsbGV0XzIueSwwKTtcbiAgICAgICAgbGV0IG1fYnVsbGV0Q29tcCA9IG1fYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xuICAgICAgICBsZXQgeCA9IHRoaXMubm9kZS5wb3NpdGlvbi54IC0gbV9idWxsZXQucG9zaXRpb24ueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSAtIG1fYnVsbGV0LnBvc2l0aW9uLnk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIEZvcmNlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWUgb2YgYnVsbGV0IG5vZGU6IFwiICsgbV9idWxsZXQubmFtZSk7XG4gICAgICAgIG1fYnVsbGV0Q29tcC5BZGRGb3JjZShuZXcgY2MuVmVjMih4KnRoaXMuZm9yY2VCdWxsZXQseSp0aGlzLmZvcmNlQnVsbGV0KSk7XG4gICAgfVxuXG4gICAgb25TcGF3bk11bHRpKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZW5lcm15Tm9kZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5zcGF3bk11bHRpX09iaiE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVnIGlzIGhlcmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG11bHRpT2JqID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGF3bk11bHRpX09iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlLmFkZENoaWxkKG11bHRpT2JqKTtcbiAgICAgICAgICAgIH0sMC41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5lbmVybXlOb2RlXzIgIT0gdW5kZWZpbmVkICYmIHRoaXMuc3Bhd25NdWx0aV9PYmohPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbXVsdGlPYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNwYXduTXVsdGlfT2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGVfMi5hZGRDaGlsZChtdWx0aU9iaik7XG4gICAgICAgICAgICB9LDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0OiBudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzU3RhcnRNb3ZpbmcgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRoaXMuY291bnRlciArPSBkdDtcbiAgICAgICAgaWYodGhpcy5jb3VudGVyID49IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyIC0tO1xuICAgICAgICAgICAgaWYodGhpcy5kZWxheVRpbWUgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRlbGVwb3J0KCk6dm9pZHtcbiAgICAgICAgaWYgKHRoaXMuaXNIYXNUZWxlcG9ydCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMucG9zaXRpb25UZWxlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHRoaXMucG9zaXRpb25UZWxlLngsIHRoaXMucG9zaXRpb25UZWxlLnksMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmFwcGx5Rm9yY2VUb0NlbnRlcihuZXcgY2MuVmVjMig1MCwwKSx0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLHNlbGYpXG4gICAge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5nYW1lU3RhdGUgIT0gaW5HYW1lU3RhdGUuQ0hFQ0tJTkcpIHJldHVybjtcblxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiVGFyZ2V0XCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gVGFyZ2V0IHBhc3NcIik7XG4gICAgICAgICAgICB0aGlzLlRlbGVwb3J0KCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9IGluR2FtZVN0YXRlLkNPTVBMRVRFRFxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUuZW1pdChcIlBhc3NMZXZlbEV2ZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJFbmVteVwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluIEVuZXJteSBsb3NzXCIpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5nYW1lU3RhdGUgPSBpbkdhbWVTdGF0ZS5GQUlMRUQ7XG4gICAgICAgICAgIC8vdGhpcy5Nb3ZpbmdFbmVybXkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1bGxldFwiKSAhPSBudWxsKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1bGxldFwiKS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwiTGluZVwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZSB3aXRoIGxpbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwiTGluZVwiICYmICFHYW1lTWFuYWdlci5pbnN0YW5jZS5saW5lTWdyLmlzQ2FuVG91Y2hEcmF3TGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5nYW1lU3RhdGUgPSBpbkdhbWVTdGF0ZS5GQUlMRUQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZhaWwoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkxvc2VdICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuTG9zZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pc1JlbW92ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlXaW5dICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgZmFpbCBzcHJpdGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmVuZXJteVNwcml0ZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJteVNwcml0ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlXaW5dO1xuXG4gICAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteVdpbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9XaW5dICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmYWlsIHNwcml0ZVwiKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5lbmVybXlTcHJpdGUyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlTcHJpdGUyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteV8yX1dpbl07XG5cbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15XzJfV2luXTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVsZW1lbnRQbGF5ZXIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFBsYXllci5hY3RpdmUgPSAhdGhpcy5lbGVtZW50UGxheWVyLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnNmeFBsYXllciAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5zZnhQbGF5ZXIuYWN0aXZlID0gIXRoaXMuc2Z4UGxheWVyLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFzcygpXG4gICAge1xuICAgICAgICBpZih0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuV2luXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldpbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15TG9zZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuZW5lcm15U3ByaXRlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15U3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteUxvc2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIEVuZXJteUxvc2UgXCIgKyBzcHJpdGVTdGF0ZS5FbmVybXlMb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2Ugc3ByaXRlIGluIG9uUGFzc1wiKTtcbiAgICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15TG9zZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZV8yICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9Mb3NlXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5lbmVybXlTcHJpdGUyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15U3ByaXRlMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9Mb3NlXTtcblxuICAgICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15Tm9kZV8yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteV8yX0xvc2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZWxlbWVudFBsYXllciAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UGxheWVyLmFjdGl2ZSA9ICF0aGlzLmVsZW1lbnRQbGF5ZXIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2Z4UGxheWVyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnNmeFBsYXllci5hY3RpdmUgPSAhdGhpcy5zZnhQbGF5ZXIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0R3Jhdml0eSgpXG4gICAge1xuICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgfVxuXG4gICAgdXBkYXRlTmV3R3Jhdml0eShuZXdHcmF2aXR5OiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5yYiAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJiLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gbmV3R3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU5ld0xpbmVhcihuZXdWZWxvKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5yYiAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBuZXcgbmV3VmVsbztcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydE1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=