"use strict";
cc._RF.push(module, 'cedffQPbRhFGrTIJOUkpqgc', 'Enermy');
// Script/CustomCharacter/Enermy.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enermy = /** @class */ (function (_super) {
    __extends(Enermy, _super);
    function Enermy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMoving = false;
        _this.dir = null;
        _this.isAttack = false;
        _this.isFalling = false;
        _this.hasMove = false;
        _this.isMovingUp = false;
        _this.explodeAnim = null;
        return _this;
    }
    Enermy.prototype.onLoad = function () {
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
    };
    Enermy.prototype.update = function (dt) {
        if (this.isMoving) {
            console.log("moving in enermy script");
            this.node.position = new cc.Vec3(this.node.position.x + this.dir.x / 100, this.node.position.y + this.dir.y / 100, 0);
        }
        if (this.isMovingUp) {
            this.node.position = new cc.Vec3(this.node.position.x, this.node.position.y + 1, 0);
        }
    };
    Object.defineProperty(Enermy.prototype, "setDir", {
        set: function (dir) {
            this.dir = dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enermy.prototype, "setIsMoving", {
        set: function (isMoving) {
            this.isMoving = isMoving;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enermy.prototype, "getIsAttack", {
        get: function () {
            return this.isAttack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enermy.prototype, "setIsAttack", {
        set: function (isAtt) {
            this.isAttack = isAtt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enermy.prototype, "getIsFalling", {
        get: function () {
            return this.isFalling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enermy.prototype, "setIsFalling", {
        set: function (isFall) {
            this.isFalling = isFall;
        },
        enumerable: false,
        configurable: true
    });
    Enermy.prototype.onCollisionEnter = function (other, self) {
        console.log("On Enermy collide");
        if (this.isMoving) {
            this.isMoving = false;
            var rb = this.node.getComponent(cc.RigidBody);
            rb.type = cc.RigidBodyType.Static;
        }
        if (this.isMovingUp) {
            this.isMovingUp = false;
            var rb = this.node.getComponent(cc.RigidBody);
            rb.type = cc.RigidBodyType.Dynamic;
        }
        if (this.explodeAnim != null) {
            var animCom = this.node.addComponent(cc.Animation);
            animCom.addClip(this.explodeAnim);
            animCom.play(this.explodeAnim.name);
            this.node.scale = 2;
            this.scheduleOnce(function () {
                this.node.removeFromParent();
            }, 0.416);
        }
    };
    __decorate([
        property
    ], Enermy.prototype, "isMoving", void 0);
    __decorate([
        property
    ], Enermy.prototype, "dir", void 0);
    __decorate([
        property
    ], Enermy.prototype, "isAttack", void 0);
    __decorate([
        property
    ], Enermy.prototype, "isFalling", void 0);
    __decorate([
        property
    ], Enermy.prototype, "hasMove", void 0);
    __decorate([
        property
    ], Enermy.prototype, "isMovingUp", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], Enermy.prototype, "explodeAnim", void 0);
    Enermy = __decorate([
        ccclass
    ], Enermy);
    return Enermy;
}(cc.Component));
exports.default = Enermy;

cc._RF.pop();