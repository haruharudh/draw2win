"use strict";
cc._RF.push(module, '3b287TBPktCCoAdAi0QlDVd', 'Bullet');
// Script/CustomCharacter/Bullet.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rbBullet = null;
        _this.explodeAnim = null;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
        this.rbBullet = this.node.getComponent(cc.RigidBody);
    };
    Bullet.prototype.AddForce = function (dir) {
        this.rbBullet = this.node.getComponent(cc.RigidBody);
        if (this.rbBullet == null) {
            console.log("rbBullet is null");
            return;
        }
        this.rbBullet.applyForceToCenter(dir, true);
    };
    Bullet.prototype.onCollisionEnter = function (other, self) {
        console.log("name of collision bullet: " + other.node.name);
        console.log("On Bullet collide");
        if (self.node.getParent() != null) {
            //let sprite = this.node.getComponent(cc.Sprite);
            this.node.scale = 2;
            //sprite.spriteFrame = null;
            if (this.explodeAnim != null) {
                var animCom = this.node.addComponent(cc.Animation);
                animCom.addClip(this.explodeAnim);
                animCom.play(this.explodeAnim.name);
            }
            this.scheduleOnce(function () {
                this.node.removeFromParent();
            }, 0.416);
        }
    };
    __decorate([
        property
    ], Bullet.prototype, "rbBullet", void 0);
    __decorate([
        property(cc.AnimationClip)
    ], Bullet.prototype, "explodeAnim", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();