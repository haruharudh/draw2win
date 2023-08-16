
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/Enermy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXEVuZXJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXVFQztRQW5FVyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTNCLFNBQUcsR0FBWSxJQUFJLENBQUU7UUFFNUIsY0FBUSxHQUFZLEtBQUssQ0FBRTtRQUUzQixlQUFTLEdBQVksS0FBSyxDQUFFO1FBRTVCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsaUJBQVcsR0FBcUIsSUFBSSxDQUFDOztJQXVEekMsQ0FBQztJQXREYSx1QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUNTLHVCQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcs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NUI7UUFEQyxRQUFROzJDQUNnQjtJQUV6QjtRQURDLFFBQVE7OENBQ21CO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7K0NBQ1U7SUFoQnBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1RTFCO0lBQUQsYUFBQztDQXZFRCxBQXVFQyxDQXZFbUMsRUFBRSxDQUFDLFNBQVMsR0F1RS9DO2tCQXZFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZXJteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHlcbiAgICBwdWJsaWMgZGlyOiBjYy5WZWMyID0gbnVsbCA7XG4gICAgQHByb3BlcnR5XG4gICAgaXNBdHRhY2s6IGJvb2xlYW4gPSBmYWxzZSA7XG4gICAgQHByb3BlcnR5XG4gICAgaXNGYWxsaW5nOiBib29sZWFuID0gZmFsc2UgO1xuICAgIEBwcm9wZXJ0eVxuICAgIGhhc01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHlcbiAgICBpc01vdmluZ1VwOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbkNsaXApXG4gICAgZXhwbG9kZUFuaW06IGNjLkFuaW1hdGlvbkNsaXAgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cykuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc01vdmluZyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZyBpbiBlbmVybXkgc2NyaXB0XCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzModGhpcy5ub2RlLnBvc2l0aW9uLnggKyB0aGlzLmRpci54LzEwMCx0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMuZGlyLnkvMTAwLDApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNNb3ZpbmdVcCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuZXcgY2MuVmVjMyh0aGlzLm5vZGUucG9zaXRpb24ueCx0aGlzLm5vZGUucG9zaXRpb24ueSArMSwwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgc2V0RGlyKGRpcjogY2MuVmVjMil7XG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgIH1cbiAgICBzZXQgc2V0SXNNb3ZpbmcoaXNNb3Zpbmc6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gaXNNb3Zpbmc7XG4gICAgfVxuICAgIGdldCBnZXRJc0F0dGFjaygpe1xuICAgICAgICByZXR1cm4gdGhpcy5pc0F0dGFjaztcbiAgICB9XG4gICAgc2V0IHNldElzQXR0YWNrKGlzQXR0OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5pc0F0dGFjayA9IGlzQXR0O1xuICAgIH1cbiAgICBnZXQgZ2V0SXNGYWxsaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRmFsbGluZztcbiAgICB9XG4gICAgc2V0IHNldElzRmFsbGluZyhpc0ZhbGw6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuaXNGYWxsaW5nID0gaXNGYWxsO1xuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLHNlbGYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9uIEVuZXJteSBjb2xsaWRlXCIpO1xuICAgICAgICBpZih0aGlzLmlzTW92aW5nKXtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCByYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgIHJiLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmlzTW92aW5nVXApe1xuICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgcmIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cGxvZGVBbmltICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IGFuaW1Db20gPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICBhbmltQ29tLmFkZENsaXAodGhpcy5leHBsb2RlQW5pbSk7XG4gICAgICAgICAgICBhbmltQ29tLnBsYXkodGhpcy5leHBsb2RlQW5pbS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDI7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0sMC40MTYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=