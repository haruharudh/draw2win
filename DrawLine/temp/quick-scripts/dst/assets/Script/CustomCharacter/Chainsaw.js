
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/Chainsaw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c451aapJbJJlaqvYxajj166', 'Chainsaw');
// Script/CustomCharacter/Chainsaw.ts

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
var Chainsaw = /** @class */ (function (_super) {
    __extends(Chainsaw, _super);
    function Chainsaw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chainsaw.prototype.start = function () {
        this.Spinning();
    };
    Chainsaw.prototype.Spinning = function () {
        var spinningTween = cc.tween()
            .by(2, { angle: -360 });
        cc.tween(this.node).then(spinningTween).repeatForever().start();
    };
    Chainsaw = __decorate([
        ccclass
    ], Chainsaw);
    return Chainsaw;
}(cc.Component));
exports.default = Chainsaw;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXENoYWluc2F3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWNBLENBQUM7SUFaRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFJTywyQkFBUSxHQUFoQjtRQUVJLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDekIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7UUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFiZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWM1QjtJQUFELGVBQUM7Q0FkRCxBQWNDLENBZHFDLEVBQUUsQ0FBQyxTQUFTLEdBY2pEO2tCQWRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFpbnNhdyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLlNwaW5uaW5nKCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBwcml2YXRlIFNwaW5uaW5nKClcbiAgICB7XG4gICAgICAgIGxldCBzcGlubmluZ1R3ZWVuID0gY2MudHdlZW4oKVxuICAgICAgICAgICAgLmJ5KDIsIHthbmdsZTogLTM2MH0pXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihzcGlubmluZ1R3ZWVuKS5yZXBlYXRGb3JldmVyKCkuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=