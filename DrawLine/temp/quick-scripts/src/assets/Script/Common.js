"use strict";
cc._RF.push(module, '69e24J9F/dN/bxzdx2Bnd8v', 'Common');
// Script/Common.ts

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
exports.EasingEnum = exports.spriteState = exports.inGameState = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var inGameState;
(function (inGameState) {
    inGameState[inGameState["NONE"] = 0] = "NONE";
    inGameState[inGameState["PLAYING"] = 1] = "PLAYING";
    inGameState[inGameState["CHECKING"] = 2] = "CHECKING";
    inGameState[inGameState["COMPLETED"] = 3] = "COMPLETED";
    inGameState[inGameState["FAILED"] = 4] = "FAILED";
})(inGameState = exports.inGameState || (exports.inGameState = {}));
var spriteState;
(function (spriteState) {
    spriteState[spriteState["Begin"] = 0] = "Begin";
    spriteState[spriteState["Win"] = 1] = "Win";
    spriteState[spriteState["Lose"] = 2] = "Lose";
    spriteState[spriteState["EnermyWin"] = 3] = "EnermyWin";
    spriteState[spriteState["EnermyLose"] = 4] = "EnermyLose";
    spriteState[spriteState["EnermyFire"] = 5] = "EnermyFire";
    spriteState[spriteState["Weapon"] = 6] = "Weapon";
    spriteState[spriteState["Enermy_2_Win"] = 7] = "Enermy_2_Win";
    spriteState[spriteState["Enermy_2_Lose"] = 8] = "Enermy_2_Lose";
})(spriteState = exports.spriteState || (exports.spriteState = {}));
var EasingEnum;
(function (EasingEnum) {
    EasingEnum["quadIn"] = "quadIn";
    EasingEnum["quadOut"] = "quadOut";
    EasingEnum["quadInOut"] = "quadInOut";
    EasingEnum["cubicIn"] = "cubicIn";
    EasingEnum["cubicOut"] = "cubicOut";
    EasingEnum["cubicInOut"] = "cubicInOut";
    EasingEnum["quartIn"] = "quartIn";
    EasingEnum["quartOut"] = "quartOut";
    EasingEnum["quartInOut"] = "quartInOut";
    EasingEnum["quintIn"] = "quintIn";
    EasingEnum["quintOut"] = "quintOut";
    EasingEnum["quintInOut"] = "quintInOut";
    EasingEnum["sineIn"] = "sineIn";
    EasingEnum["sineOut"] = "sineOut";
    EasingEnum["sineInOut"] = "sineInOut";
    EasingEnum["expoIn"] = "expoIn";
    EasingEnum["expoOut"] = "expoOut";
    EasingEnum["expoInOut"] = "expoInOut";
    EasingEnum["circIn"] = "circIn";
    EasingEnum["circOut"] = "circOut";
    EasingEnum["circInOut"] = "circInOut";
    EasingEnum["elasticIn"] = "elasticIn";
    EasingEnum["elasticOut"] = "elasticOut";
    EasingEnum["elasticInOut"] = "elasticInOut";
    EasingEnum["backIn"] = "backIn";
    EasingEnum["backOut"] = "backOut";
    EasingEnum["backInOut"] = "backInOut";
    EasingEnum["bounceIn"] = "bounceIn";
    EasingEnum["bounceOut"] = "bounceOut";
    EasingEnum["bounceInOut"] = "bounceInOut";
    EasingEnum["smooth"] = "smooth";
    EasingEnum["fade"] = "fade";
})(EasingEnum = exports.EasingEnum || (exports.EasingEnum = {}));
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ChangeLanguageEvent = "ChangeLanguageEvent";
        _this.StartMovingEvent = "StartMovingEvent";
        _this.FailLevelEvent = "FailLevelEvent";
        _this.PassLevelEvent = "PassLevelEvent";
        _this.ClaimWeapon = "ClaimWeapon";
        return _this;
        // update (dt) {}
    }
    Common_1 = Common;
    Object.defineProperty(Common, "instance", {
        get: function () {
            return this._ins || new Common_1;
        },
        enumerable: false,
        configurable: true
    });
    Common.prototype.onLoad = function () {
        Common_1._ins = this;
    };
    var Common_1;
    Common = Common_1 = __decorate([
        ccclass
    ], Common);
    return Common;
}(cc.Component));
exports.default = Common;

cc._RF.pop();