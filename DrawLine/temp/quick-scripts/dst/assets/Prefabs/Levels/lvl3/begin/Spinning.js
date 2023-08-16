
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Prefabs/Levels/lvl3/begin/Spinning.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a38bxBVpBC5JzLHrVS6I5n', 'Spinning');
// Prefabs/Levels/lvl3/begin/Spinning.ts

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
var Spinning = /** @class */ (function (_super) {
    __extends(Spinning, _super);
    function Spinning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinning.prototype.start = function () {
        this.Spinning();
    };
    Spinning.prototype.Spinning = function () {
        var spinningTween = cc.tween()
            .by(2, { angle: -360 });
        cc.tween(this.node).then(spinningTween).repeatForever().start();
    };
    Spinning = __decorate([
        ccclass
    ], Spinning);
    return Spinning;
}(cc.Component));
exports.default = Spinning;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUHJlZmFic1xcTGV2ZWxzXFxsdmwzXFxiZWdpblxcU3Bpbm5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBY0EsQ0FBQztJQVpHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUlPLDJCQUFRLEdBQWhCO1FBRUksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTthQUN6QixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQTtRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbkUsQ0FBQztJQWJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBYzVCO0lBQUQsZUFBQztDQWRELEFBY0MsQ0FkcUMsRUFBRSxDQUFDLFNBQVMsR0FjakQ7a0JBZG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5uaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuU3Bpbm5pbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIFNwaW5uaW5nKClcclxuICAgIHtcclxuICAgICAgICBsZXQgc3Bpbm5pbmdUd2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgLmJ5KDIsIHthbmdsZTogLTM2MH0pXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKHNwaW5uaW5nVHdlZW4pLnJlcGVhdEZvcmV2ZXIoKS5zdGFydCgpXHJcbiAgICB9XHJcbn1cclxuIl19