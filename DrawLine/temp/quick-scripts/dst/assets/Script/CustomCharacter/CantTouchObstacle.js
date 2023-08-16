
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/CantTouchObstacle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ccbbpOQ4tGMbOv4Atgz8Re', 'CantTouchObstacle');
// Script/CustomCharacter/CantTouchObstacle.ts

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
var Common_1 = require("../Common");
var GameConfig_1 = require("../GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CantTouchObstacle = /** @class */ (function (_super) {
    __extends(CantTouchObstacle, _super);
    function CantTouchObstacle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CantTouchObstacle.prototype.onLoad = function () {
        Common_1.default.instance.node.on(Common_1.default.instance.StartMovingEvent, this.startMoving, this);
    };
    CantTouchObstacle.prototype.startMoving = function () {
        this.scheduleOnce(function () {
            this.node.removeFromParent(true);
        }, 0.1);
    };
    CantTouchObstacle.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name == "Line") {
            GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            console.log("failed");
            return;
        }
    };
    CantTouchObstacle = __decorate([
        ccclass
    ], CantTouchObstacle);
    return CantTouchObstacle;
}(cc.Component));
exports.default = CantTouchObstacle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXENhbnRUb3VjaE9ic3RhY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFnRDtBQUNoRCw0Q0FBdUM7QUFHakMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7O0lBb0JBLENBQUM7SUFqQkcsa0NBQU0sR0FBTjtRQUNJLGdCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDM0Isb0JBQVUsQ0FBQyxTQUFTLEdBQUcsb0JBQVcsQ0FBQyxNQUFNLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7SUFDTCxDQUFDO0lBbkJnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW9CckM7SUFBRCx3QkFBQztDQXBCRCxBQW9CQyxDQXBCOEMsRUFBRSxDQUFDLFNBQVMsR0FvQjFEO2tCQXBCb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1vbiwgeyBpbkdhbWVTdGF0ZSB9IGZyb20gXCIuLi9Db21tb25cIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9HYW1lQ29uZmlnXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW50VG91Y2hPYnN0YWNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub24oQ29tbW9uLmluc3RhbmNlLlN0YXJ0TW92aW5nRXZlbnQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0TW92aW5nKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgfSwgMC4xKTtcbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJMaW5lXCIpIHtcbiAgICAgICAgICAgIEdhbWVDb25maWcuZ2FtZVN0YXRlID0gaW5HYW1lU3RhdGUuRkFJTEVEO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=