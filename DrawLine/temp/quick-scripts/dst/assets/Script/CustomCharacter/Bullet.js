
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXEJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQW1DQztRQWhDRyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFxQixJQUFJLENBQUM7O0lBOEJ6QyxDQUFDO0lBN0JhLHVCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLHlCQUFRLEdBQWYsVUFBZ0IsR0FBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNoQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBQyxJQUFJO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNoQyxpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLDRCQUE0QjtZQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNqQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUEvQkQ7UUFEQyxRQUFROzRDQUNxQjtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDOytDQUNVO0lBTHBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtQzFCO0lBQUQsYUFBQztDQW5DRCxBQW1DQyxDQW5DbUMsRUFBRSxDQUFDLFNBQVMsR0FtQy9DO2tCQW5Db0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICByYkJ1bGxldDogY2MuUmlnaWRCb2R5ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uQ2xpcClcbiAgICBleHBsb2RlQW5pbTogY2MuQW5pbWF0aW9uQ2xpcCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yYkJ1bGxldCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICB9XG4gICAgcHVibGljIEFkZEZvcmNlKGRpcjogY2MuVmVjMik6IHZvaWR7XG4gICAgICAgIHRoaXMucmJCdWxsZXQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGlmKCB0aGlzLnJiQnVsbGV0ID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyYkJ1bGxldCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmJCdWxsZXQuYXBwbHlGb3JjZVRvQ2VudGVyKGRpcix0cnVlKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcixzZWxmKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIG9mIGNvbGxpc2lvbiBidWxsZXQ6IFwiICsgb3RoZXIubm9kZS5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbiBCdWxsZXQgY29sbGlkZVwiKTtcbiAgICAgICAgaWYgKCBzZWxmLm5vZGUuZ2V0UGFyZW50KCkgIT0gbnVsbCApe1xuICAgICAgICAgICAgLy9sZXQgc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMjtcbiAgICAgICAgICAgIC8vc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGxvZGVBbmltICE9IG51bGwgKXtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbUNvbSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICBhbmltQ29tLmFkZENsaXAodGhpcy5leHBsb2RlQW5pbSk7XG4gICAgICAgICAgICAgICAgYW5pbUNvbS5wbGF5KHRoaXMuZXhwbG9kZUFuaW0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0sMC40MTYpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19