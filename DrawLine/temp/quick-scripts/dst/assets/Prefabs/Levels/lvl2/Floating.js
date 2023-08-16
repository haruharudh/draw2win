
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Prefabs/Levels/lvl2/Floating.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0635bxmlYdKHaj07BXP2keJ', 'Floating');
// Prefabs/Levels/lvl2/Floating.ts

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
var Floating = /** @class */ (function (_super) {
    __extends(Floating, _super);
    function Floating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Floating.prototype.start = function () {
        this.CloudFloatingAnim();
    };
    Floating.prototype.CloudFloatingAnim = function () {
        var floatingTween = cc.tween()
            .by(1.5, { scaleY: 0.1 })
            .by(1.5, { scaleY: -0.1 });
        cc.tween(this.node).then(floatingTween).repeatForever().start();
    };
    Floating = __decorate([
        ccclass
    ], Floating);
    return Floating;
}(cc.Component));
exports.default = Floating;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUHJlZmFic1xcTGV2ZWxzXFxsdmwyXFxGbG9hdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFnQkEsQ0FBQztJQWRHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBSU8sb0NBQWlCLEdBQXpCO1FBRUksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTthQUN6QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2FBQ3RCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFBO1FBRTVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNuRSxDQUFDO0lBZmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQjVCO0lBQUQsZUFBQztDQWhCRCxBQWdCQyxDQWhCcUMsRUFBRSxDQUFDLFNBQVMsR0FnQmpEO2tCQWhCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc2luZ0VudW0gfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0cy9Db21tb24vRW51bVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuQ2xvdWRGbG9hdGluZ0FuaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIENsb3VkRmxvYXRpbmdBbmltKClcclxuICAgIHtcclxuICAgICAgICBsZXQgZmxvYXRpbmdUd2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgLmJ5KDEuNSwge3NjYWxlWTogMC4xfSlcclxuICAgICAgICAgICAgLmJ5KDEuNSwge3NjYWxlWTogLTAuMX0pXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihmbG9hdGluZ1R3ZWVuKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==