
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQVksV0FNWDtBQU5ELFdBQVksV0FBVztJQUNuQiw2Q0FBSSxDQUFBO0lBQ0osbURBQU8sQ0FBQTtJQUNQLHFEQUFRLENBQUE7SUFDUix1REFBUyxDQUFBO0lBQ1QsaURBQU0sQ0FBQTtBQUNWLENBQUMsRUFOVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU10QjtBQUVELElBQVksV0FVWDtBQVZELFdBQVksV0FBVztJQUNuQiwrQ0FBSyxDQUFBO0lBQ0wsMkNBQUcsQ0FBQTtJQUNILDZDQUFJLENBQUE7SUFDSix1REFBUyxDQUFBO0lBQ1QseURBQVUsQ0FBQTtJQUNWLHlEQUFVLENBQUE7SUFDVixpREFBTSxDQUFBO0lBQ04sNkRBQVksQ0FBQTtJQUNaLCtEQUFhLENBQUE7QUFDakIsQ0FBQyxFQVZXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBVXRCO0FBQ0QsSUFBWSxVQWtDWDtBQWxDRCxXQUFZLFVBQVU7SUFDbEIsK0JBQWlCLENBQUE7SUFDakIsaUNBQW1CLENBQUE7SUFDbkIscUNBQXVCLENBQUE7SUFDdkIsaUNBQW1CLENBQUE7SUFDbkIsbUNBQXFCLENBQUE7SUFDckIsdUNBQXlCLENBQUE7SUFDekIsaUNBQW1CLENBQUE7SUFDbkIsbUNBQXFCLENBQUE7SUFDckIsdUNBQXlCLENBQUE7SUFDekIsaUNBQW1CLENBQUE7SUFDbkIsbUNBQXFCLENBQUE7SUFDckIsdUNBQXlCLENBQUE7SUFDekIsK0JBQWlCLENBQUE7SUFDakIsaUNBQW1CLENBQUE7SUFDbkIscUNBQXVCLENBQUE7SUFDdkIsK0JBQWlCLENBQUE7SUFDakIsaUNBQW1CLENBQUE7SUFDbkIscUNBQXVCLENBQUE7SUFDdkIsK0JBQWlCLENBQUE7SUFDakIsaUNBQW1CLENBQUE7SUFDbkIscUNBQXVCLENBQUE7SUFDdkIscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIsMkNBQTZCLENBQUE7SUFDN0IsK0JBQWlCLENBQUE7SUFDakIsaUNBQW1CLENBQUE7SUFDbkIscUNBQXVCLENBQUE7SUFDdkIsbUNBQXFCLENBQUE7SUFDckIscUNBQXVCLENBQUE7SUFDdkIseUNBQTJCLENBQUE7SUFDM0IsK0JBQWlCLENBQUE7SUFDakIsMkJBQWEsQ0FBQTtBQUVqQixDQUFDLEVBbENXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBa0NyQjtBQUVEO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb0JDO1FBUEcseUJBQW1CLEdBQVcscUJBQXFCLENBQUM7UUFDcEQsc0JBQWdCLEdBQVcsa0JBQWtCLENBQUM7UUFDOUMsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyxvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLGlCQUFXLEdBQVcsYUFBYSxDQUFDOztRQUVwQyxpQkFBaUI7SUFDckIsQ0FBQztlQXBCb0IsTUFBTTtJQUt2QixzQkFBa0Isa0JBQVE7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxRQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksUUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7SUFYZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW9CMUI7SUFBRCxhQUFDO0NBcEJELEFBb0JDLENBcEJtQyxFQUFFLENBQUMsU0FBUyxHQW9CL0M7a0JBcEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gaW5HYW1lU3RhdGUge1xuICAgIE5PTkUsXG4gICAgUExBWUlORyxcbiAgICBDSEVDS0lORyxcbiAgICBDT01QTEVURUQsXG4gICAgRkFJTEVEXG59XG5cbmV4cG9ydCBlbnVtIHNwcml0ZVN0YXRle1xuICAgIEJlZ2luLFxuICAgIFdpbixcbiAgICBMb3NlLFxuICAgIEVuZXJteVdpbixcbiAgICBFbmVybXlMb3NlLFxuICAgIEVuZXJteUZpcmUsXG4gICAgV2VhcG9uLFxuICAgIEVuZXJteV8yX1dpbixcbiAgICBFbmVybXlfMl9Mb3NlLFxufVxuZXhwb3J0IGVudW0gRWFzaW5nRW51bSB7XG4gICAgcXVhZEluID0gXCJxdWFkSW5cIixcbiAgICBxdWFkT3V0ID0gXCJxdWFkT3V0XCIsXG4gICAgcXVhZEluT3V0ID0gXCJxdWFkSW5PdXRcIixcbiAgICBjdWJpY0luID0gXCJjdWJpY0luXCIsXG4gICAgY3ViaWNPdXQgPSBcImN1YmljT3V0XCIsXG4gICAgY3ViaWNJbk91dCA9IFwiY3ViaWNJbk91dFwiLFxuICAgIHF1YXJ0SW4gPSBcInF1YXJ0SW5cIixcbiAgICBxdWFydE91dCA9IFwicXVhcnRPdXRcIixcbiAgICBxdWFydEluT3V0ID0gXCJxdWFydEluT3V0XCIsXG4gICAgcXVpbnRJbiA9IFwicXVpbnRJblwiLFxuICAgIHF1aW50T3V0ID0gXCJxdWludE91dFwiLFxuICAgIHF1aW50SW5PdXQgPSBcInF1aW50SW5PdXRcIixcbiAgICBzaW5lSW4gPSBcInNpbmVJblwiLFxuICAgIHNpbmVPdXQgPSBcInNpbmVPdXRcIixcbiAgICBzaW5lSW5PdXQgPSBcInNpbmVJbk91dFwiLFxuICAgIGV4cG9JbiA9IFwiZXhwb0luXCIsXG4gICAgZXhwb091dCA9IFwiZXhwb091dFwiLFxuICAgIGV4cG9Jbk91dCA9IFwiZXhwb0luT3V0XCIsXG4gICAgY2lyY0luID0gXCJjaXJjSW5cIixcbiAgICBjaXJjT3V0ID0gXCJjaXJjT3V0XCIsXG4gICAgY2lyY0luT3V0ID0gXCJjaXJjSW5PdXRcIixcbiAgICBlbGFzdGljSW4gPSBcImVsYXN0aWNJblwiLFxuICAgIGVsYXN0aWNPdXQgPSBcImVsYXN0aWNPdXRcIixcbiAgICBlbGFzdGljSW5PdXQgPSBcImVsYXN0aWNJbk91dFwiLFxuICAgIGJhY2tJbiA9IFwiYmFja0luXCIsXG4gICAgYmFja091dCA9IFwiYmFja091dFwiLFxuICAgIGJhY2tJbk91dCA9IFwiYmFja0luT3V0XCIsXG4gICAgYm91bmNlSW4gPSBcImJvdW5jZUluXCIsXG4gICAgYm91bmNlT3V0ID0gXCJib3VuY2VPdXRcIixcbiAgICBib3VuY2VJbk91dCA9IFwiYm91bmNlSW5PdXRcIixcbiAgICBzbW9vdGggPSBcInNtb290aFwiLFxuICAgIGZhZGUgPSBcImZhZGVcIixcblxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIGNjLkNvbXBvbmVudHtcblxuICAgIHB1YmxpYyBzdGF0aWMgX2luczogQ29tbW9uO1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBDb21tb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBDb21tb247XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIENvbW1vbi5faW5zID0gdGhpcztcbiAgICB9XG5cbiAgICBDaGFuZ2VMYW5ndWFnZUV2ZW50OiBzdHJpbmcgPSBcIkNoYW5nZUxhbmd1YWdlRXZlbnRcIjtcbiAgICBTdGFydE1vdmluZ0V2ZW50OiBzdHJpbmcgPSBcIlN0YXJ0TW92aW5nRXZlbnRcIjtcbiAgICBGYWlsTGV2ZWxFdmVudDogc3RyaW5nID0gXCJGYWlsTGV2ZWxFdmVudFwiO1xuICAgIFBhc3NMZXZlbEV2ZW50OiBzdHJpbmcgPSBcIlBhc3NMZXZlbEV2ZW50XCI7XG4gICAgQ2xhaW1XZWFwb246IHN0cmluZyA9IFwiQ2xhaW1XZWFwb25cIjtcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=