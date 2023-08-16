"use strict";
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