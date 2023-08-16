
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Prefabs/Levels/lvl2/Floating');
require('./assets/Prefabs/Levels/lvl3/begin/Spinning');
require('./assets/Prefabs/Levels/lvl7/BatScript');
require('./assets/Script/Common');
require('./assets/Script/CustomCharacter/Bullet');
require('./assets/Script/CustomCharacter/CantTouchObstacle');
require('./assets/Script/CustomCharacter/Chainsaw');
require('./assets/Script/CustomCharacter/Enermy');
require('./assets/Script/CustomCharacter/Player');
require('./assets/Script/Dialog/NoAds');
require('./assets/Script/DrawLine');
require('./assets/Script/GameConfig');
require('./assets/Script/GameManager');
require('./assets/Script/LineManager');
require('./assets/Script/StopSeperateEvent');
require('./assets/Script/UI/SettingGroup');
require('./assets/Script/UI/SoundManager');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eb10rie4tI/peFFo2xGzGs', 'GameConfig');
// Script/GameConfig.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./Common");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.prototype.shuffle = function (array) {
        array.sort(function () {
            return Math.random() - .5;
        });
    };
    GameConfig.LevelOrder = [76, 12, 94, 54, 88, 59, 66, 42, 63, 26, 79, 40, 39, 50, 17, 97, 67, 22, 91, 19, 55, 64, 41, 4, 72, 43, 47, 58, 85, 7, 18, 32, 10, 70, 23, 98, 20, 21, 89, 60, 62, 96, 57, 25, 93, 81, 65, 83, 49, 77, 78, 38, 68, 80, 37, 71, 51, 87, 90, 15, 48, 14, 74, 84, 95, 5, 3, 13, 45, 28, 53, 2, 82, 8, 52, 29, 1, 31, 24, 16, 6, 33, 44, 92, 69, 86, 11, 9, 34, 0, 56, 35, 73, 27, 61, 46, 36, 75, 30, 99];
    GameConfig.sessionNumber = 0;
    GameConfig.gameState = Common_1.inGameState.PLAYING;
    GameConfig.LevelOrderz = [95, 100, 147, 56, 11, 144, 165, 171, 132, 108, 167, 31, 173, 177, 71, 110, 51, 3, 25, 68, 86, 16, 44, 126, 43, 37, 96, 48, 93, 149, 118, 75, 146, 85, 2, 180, 88, 49, 117, 122, 55, 179, 57, 94, 113, 154, 32, 121, 73, 50, 142, 9, 7, 77, 104, 70, 116, 34, 145, 141, 30, 89, 80, 112, 12, 64, 76, 138, 136, 61, 169, 83, 106, 62, 59, 63, 60, 127, 15, 47, 54, 46, 134, 140, 6, 176, 74, 137, 148, 66, 155, 135, 4, 101, 18, 20, 131, 39, 178, 163, 181, 99, 35, 125, 10, 102, 42, 26, 17, 175, 69, 170, 123, 13, 21, 22, 166, 90, 160, 87, 172, 157, 156, 52, 120, 158, 174, 92, 45, 79, 82, 91, 97, 105, 111, 150, 161, 53, 84, 23, 72, 153, 67, 78, 182, 33, 1, 152, 103, 19, 109, 151, 143, 164, 139, 65, 41, 58, 119, 28, 81, 159, 36, 107, 133, 24, 128, 168, 38, 162, 114, 27, 115, 183, 124, 5, 8, 129, 29, 130, 98, 40, 14];
    GameConfig = __decorate([
        ccclass
    ], GameConfig);
    return GameConfig;
}());
exports.default = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXVDO0FBRWpDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUFhQSxDQUFDO0lBTEcsNEJBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVhNLHFCQUFVLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5Wix3QkFBYSxHQUFXLENBQUMsQ0FBQztJQUUxQixvQkFBUyxHQUFnQixvQkFBVyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxzQkFBVyxHQUFhLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUx0ekIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWE5QjtJQUFELGlCQUFDO0NBYkQsQUFhQyxJQUFBO2tCQWJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5HYW1lU3RhdGUgfSBmcm9tIFwiLi9Db21tb25cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcbiAgICBzdGF0aWMgTGV2ZWxPcmRlcjogbnVtYmVyW10gPSBbNzYsIDEyLCA5NCwgNTQsIDg4LCA1OSwgNjYsIDQyLCA2MywgMjYsIDc5LCA0MCwgMzksIDUwLCAxNywgOTcsIDY3LCAyMiwgOTEsIDE5LCA1NSwgNjQsIDQxLCA0LCA3MiwgNDMsIDQ3LCA1OCwgODUsIDcsIDE4LCAzMiwgMTAsIDcwLCAyMywgOTgsIDIwLCAyMSwgODksIDYwLCA2MiwgOTYsIDU3LCAyNSwgOTMsIDgxLCA2NSwgODMsIDQ5LCA3NywgNzgsIDM4LCA2OCwgODAsIDM3LCA3MSwgNTEsIDg3LCA5MCwgMTUsIDQ4LCAxNCwgNzQsIDg0LCA5NSwgNSwgMywgMTMsIDQ1LCAyOCwgNTMsIDIsIDgyLCA4LCA1MiwgMjksIDEsIDMxLCAyNCwgMTYsIDYsIDMzLCA0NCwgOTIsIDY5LCA4NiwgMTEsIDksIDM0LCAwLCA1NiwgMzUsIDczLCAyNywgNjEsIDQ2LCAzNiwgNzUsIDMwLCA5OV07XG4gICAgc3RhdGljIHNlc3Npb25OdW1iZXI6IG51bWJlciA9IDA7XG5cbiAgICBzdGF0aWMgZ2FtZVN0YXRlOiBpbkdhbWVTdGF0ZSA9IGluR2FtZVN0YXRlLlBMQVlJTkc7XG4gICAgc3RhdGljIExldmVsT3JkZXJ6OiBudW1iZXJbXSA9IFs5NSwgMTAwLCAxNDcsIDU2LCAxMSwgMTQ0LCAxNjUsIDE3MSwgMTMyLCAxMDgsIDE2NywgMzEsIDE3MywgMTc3LCA3MSwgMTEwLCA1MSwgMywgMjUsIDY4LCA4NiwgMTYsIDQ0LCAxMjYsIDQzLCAzNywgOTYsIDQ4LCA5MywgMTQ5LCAxMTgsIDc1LCAxNDYsIDg1LCAyLCAxODAsIDg4LCA0OSwgMTE3LCAxMjIsIDU1LCAxNzksIDU3LCA5NCwgMTEzLCAxNTQsIDMyLCAxMjEsIDczLCA1MCwgMTQyLCA5LCA3LCA3NywgMTA0LCA3MCwgMTE2LCAzNCwgMTQ1LCAxNDEsIDMwLCA4OSwgODAsIDExMiwgMTIsIDY0LCA3NiwgMTM4LCAxMzYsIDYxLCAxNjksIDgzLCAxMDYsIDYyLCA1OSwgNjMsIDYwLCAxMjcsIDE1LCA0NywgNTQsIDQ2LCAxMzQsIDE0MCwgNiwgMTc2LCA3NCwgMTM3LCAxNDgsIDY2LCAxNTUsIDEzNSwgNCwgMTAxLCAxOCwgMjAsIDEzMSwgMzksIDE3OCwgMTYzLCAxODEsIDk5LCAzNSwgMTI1LCAxMCwgMTAyLCA0MiwgMjYsIDE3LCAxNzUsIDY5LCAxNzAsIDEyMywgMTMsIDIxLCAyMiwgMTY2LCA5MCwgMTYwLCA4NywgMTcyLCAxNTcsIDE1NiwgNTIsIDEyMCwgMTU4LCAxNzQsIDkyLCA0NSwgNzksIDgyLCA5MSwgOTcsIDEwNSwgMTExLCAxNTAsIDE2MSwgNTMsIDg0LCAyMywgNzIsIDE1MywgNjcsIDc4LCAxODIsIDMzLCAxLCAxNTIsIDEwMywgMTksIDEwOSwgMTUxLCAxNDMsIDE2NCwgMTM5LCA2NSwgNDEsIDU4LCAxMTksIDI4LCA4MSwgMTU5LCAzNiwgMTA3LCAxMzMsIDI0LCAxMjgsIDE2OCwgMzgsIDE2MiwgMTE0LCAyNywgMTE1LCAxODMsIDEyNCwgNSwgOCwgMTI5LCAyOSwgMTMwLCA5OCwgNDAsIDE0XTtcblxuICAgIFxuICAgIHNodWZmbGUoYXJyYXkpIHtcbiAgICAgICAgYXJyYXkuc29ydChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIC41O1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Dialog/NoAds.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47b5fK7RCJEg4qH+MBTiL1r', 'NoAds');
// Script/Dialog/NoAds.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEaWFsb2dcXE5vQWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb272jns7lAwqWey3R2baen', 'SoundManager');
// Script/UI/SoundManager.ts

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
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.musicAudioSource = null;
        _this.efxAudioSource = null;
        _this.doneLevelSounds = [];
        _this.doneMoveItem = [];
        _this.clickSound = null;
        return _this;
    }
    SoundManager_1 = SoundManager;
    SoundManager.prototype.onLoad = function () {
        SoundManager_1.instance = this;
        SoundManager_1.instance.SetOnOffBackgroundMusic(false);
        SoundManager_1.instance.SetOnOffBackgroundMusic(false);
    };
    SoundManager.prototype.SetOnOffBackgroundMusic = function (isOn) {
        this.musicAudioSource.mute = !isOn;
    };
    SoundManager.prototype.SetOnOffSoundEffect = function (isOn) {
        this.efxAudioSource.mute = !isOn;
    };
    SoundManager.prototype.PlayClickSound = function () {
        this.efxAudioSource.clip = this.clickSound;
        this.efxAudioSource.play();
    };
    SoundManager.prototype.PlayDoneMoveItem = function (ItemIndex) {
        this.efxAudioSource.clip = this.doneMoveItem[ItemIndex];
        this.efxAudioSource.play();
    };
    SoundManager.prototype.PlayDoneLevel = function () {
        this.efxAudioSource.clip = this.doneLevelSounds[Math.floor(Math.random() * this.doneLevelSounds.length)];
        this.efxAudioSource.play();
    };
    var SoundManager_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "musicAudioSource", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "efxAudioSource", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "doneLevelSounds", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "doneMoveItem", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundManager.prototype, "clickSound", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSVxcU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbURDO1FBaERXLHNCQUFnQixHQUFtQixJQUFJLENBQUM7UUFFeEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQXdDNUMsQ0FBQztxQkFuRG9CLFlBQVk7SUFlN0IsNkJBQU0sR0FBTjtRQUVJLGNBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGNBQVksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsY0FBWSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLElBQWE7UUFFakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLElBQWE7UUFFN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixTQUFpQjtRQUU5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFFSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7O0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ3VCO0lBRWhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQ3FCO0lBRTlDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lEQUNvQjtJQUU3QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztzREFDaUI7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDaUI7SUFYdkIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1EaEM7SUFBRCxtQkFBQztDQW5ERCxBQW1EQyxDQW5EeUMsRUFBRSxDQUFDLFNBQVMsR0FtRHJEO2tCQW5Eb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgcHJpdmF0ZSBtdXNpY0F1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIHByaXZhdGUgZWZ4QXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgcHJpdmF0ZSBkb25lTGV2ZWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxuICAgIHByaXZhdGUgZG9uZU1vdmVJdGVtOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBjbGlja1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU291bmRNYW5hZ2VyO1xuXG4gICAgb25Mb2FkKClcbiAgICB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLlNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGZhbHNlKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLlNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGZhbHNlKTtcblxuICAgIH1cblxuICAgIFNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGlzT246IGJvb2xlYW4pXG4gICAge1xuICAgICAgICB0aGlzLm11c2ljQXVkaW9Tb3VyY2UubXV0ZSA9ICFpc09uO1xuICAgIH1cblxuICAgIFNldE9uT2ZmU291bmRFZmZlY3QoaXNPbjogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UubXV0ZSA9ICFpc09uO1xuICAgIH1cblxuICAgIFBsYXlDbGlja1NvdW5kKClcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuY2xpY2tTb3VuZDtcbiAgICAgICAgdGhpcy5lZnhBdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgfVxuXG4gICAgUGxheURvbmVNb3ZlSXRlbShJdGVtSW5kZXg6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuZG9uZU1vdmVJdGVtW0l0ZW1JbmRleF07XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UucGxheSgpO1xuICAgIH1cblxuICAgIFBsYXlEb25lTGV2ZWwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5lZnhBdWRpb1NvdXJjZS5jbGlwID0gdGhpcy5kb25lTGV2ZWxTb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kb25lTGV2ZWxTb3VuZHMubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UucGxheSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8b1dMqeZRECJ9ACWexpJI5', 'GameManager');
// Script/GameManager.ts

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
var Common_1 = require("./Common");
var GameConfig_1 = require("./GameConfig");
var LineManager_1 = require("./LineManager");
var SoundManager_1 = require("./UI/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbgameOver = null;
        _this.lbgameWon = null;
        // @property(cc.Node)
        // obstacle: cc.Node = null;
        // @property(cc.Prefab)
        // linePrefabs: cc.Prefab = null;
        // @property(cc.Node)
        // canvas: cc.Node = null;
        // @property(cc.Prefab)
        // prefabToSpawn: cc.Prefab = null;
        _this.timeStart = null;
        // deltaTime: number = 1;
        // timeSinceLastSpawn: number = 0;
        // lastSpawnPosition: cc.Vec2 = null;
        // gameTime : number = 0;
        // currentTime: number = 10;
        // uiManager: UIManager = null;
        // isGameOver: boolean = false;
        // canSpawn: boolean = true;
        _this.brushPrefab = null;
        _this.brush = null;
        _this.reachLevel = 41;
        _this.maxLevel = 300;
        _this.countValue = 0;
        _this.lineMgr = null;
        // levelNode:cc.Node = null;
        _this.toggleWallNode = null;
        _this.levelContainer = null;
        _this.leftParticlePrefabs = null;
        _this.rightParticlePrefabs = null;
        _this.leftFireworkContainer = null;
        _this.rightFireworkContainer = null;
        _this.nextLevelButton = null;
        _this.completeDlg = null;
        _this.aniFailPrefab = null;
        _this.aniWinPrefab = null;
        _this.levelText = null;
        _this.hintText = null;
        return _this;
    }
    GameManager_1 = GameManager;
    Object.defineProperty(GameManager, "instance", {
        get: function () {
            return this._ins || new GameManager_1;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        GameManager_1._ins = this;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.nextLevelButton.on('click', this.NextLevel, this);
    };
    GameManager.prototype.start = function () {
        GameManager_1._ins.loadLevel(this.reachLevel);
    };
    GameManager.prototype.update = function (dt) {
        {
            if (GameConfig_1.default.gameState == Common_1.inGameState.CHECKING) {
                this.countValue += dt;
                if (this.countValue > 1) {
                    this.countValue = 0;
                    this.timeCheck -= 1;
                    this.updateTimeDisplay();
                }
            }
            else if (GameConfig_1.default.gameState == Common_1.inGameState.FAILED) {
                GameConfig_1.default.gameState = Common_1.inGameState.NONE;
                Common_1.default.instance.node.emit("FailLevelEvent");
            }
        }
    };
    GameManager.prototype.updateTimeDisplay = function () {
        this.timeStart.string = this.timeCheck + "";
        if (this.timeCheck == 0) {
            this.CheckIsMeetTargetLevel();
            if (!this.lineMgr.isMeetTargetLevel) {
                console.log("on node active false");
                this.timeStart.node.active = false;
                GameConfig_1.default.gameState = Common_1.inGameState.COMPLETED;
                Common_1.default._ins.node.emit("PassLevelEvent");
            }
            else {
                GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            }
        }
    };
    GameManager.prototype.CheckIsMeetTargetLevel = function () {
        if (this.reachLevel == 41 || this.reachLevel == 46 || this.reachLevel == 63 || this.reachLevel == 64
            || this.reachLevel == 65 || this.reachLevel == 66 || this.reachLevel == 67 || this.reachLevel == 68
            || this.reachLevel == 70 || this.reachLevel == 78 || this.reachLevel == 79 || this.reachLevel == 80) {
            this.lineMgr.isMeetTargetLevel = true;
        }
        else {
            this.lineMgr.isMeetTargetLevel = false;
            ;
        }
    };
    GameManager.prototype.startCounting = function (timeCheck) {
        this.timeCheck = timeCheck;
        this.timeStart.node.active = true;
        this.updateTimeDisplay();
    };
    GameManager.prototype.NextLevel = function () {
        GameConfig_1.default.sessionNumber += 1;
        this.loadLevel(this.reachLevel + 1);
        this.completeDlg.active = false;
    };
    GameManager.prototype.onCompleteAni = function () {
        SoundManager_1.default.instance.PlayDoneLevel();
        this.scheduleOnce(function () {
            this.leftParticle = cc.instantiate(this.leftParticlePrefabs);
            this.rightParticle = cc.instantiate(this.rightParticlePrefabs);
            this.rightParticle.parent = this.rightFireworkContainer;
            this.leftParticle.parent = this.leftFireworkContainer;
            this.leftParticle.position = cc.Vec2.ZERO;
            this.rightParticle.position = cc.Vec2.ZERO;
        }, 0.2);
        this.scheduleOnce(function () {
            if (this.leftParticle !== null || this.rightParticle !== null) {
                this.leftParticle.destroy();
                this.rightParticle.destroy();
            }
        }, 2.2);
    };
    GameManager.prototype.onCompleteLevel = function () {
        this.onCompleteAni();
        this.scheduleOnce(function () {
            // if(this.reachLevel < this.maxLevel)
            // {
            this.timeStart.node.active = false;
            this.completeDlg.active = true;
            // }
        }, 3);
    };
    GameManager.prototype.loadLevel = function (levelNum) {
        var self = this;
        if (levelNum >= 300)
            return;
        var LevelIndex = levelNum > 200 ? GameConfig_1.default.LevelOrder[levelNum - 200] : levelNum;
        cc.resources.load("LevelPrefab/Level" + LevelIndex, function (err, prefab) {
            if (err) {
                self.loadLevel(LevelIndex + 1);
            }
            else {
                GameManager_1.instance.onCheckingLevel(prefab, LevelIndex);
            }
        });
    };
    GameManager.prototype.onCheckingLevel = function (prefab, levelId) {
        this.reachLevel = levelId;
        this.levelText.string = "LEVEL " + ("" + levelId);
        var levelNode = cc.instantiate(prefab);
        levelNode.name = "LEVEL" + levelId;
        if (this.lineMgr != null) {
            cc.resources.release("LevelPrefab/Level" + (this.reachLevel - 1));
            this.lineMgr.node.destroy();
        }
        this.lineMgr = levelNode.getComponent(LineManager_1.default);
        this.toggleWallNode.active = this.lineMgr.isToggleOnWall;
        this.levelContainer.addChild(levelNode);
        levelNode.setPosition(0, 0, 0);
        this.hintText.string = this.lineMgr.hintText;
        GameConfig_1.default.gameState = Common_1.inGameState.PLAYING;
    };
    GameManager.prototype.restartLevel = function () {
        var self = this;
        this.timeStart.node.active = false;
        GameManager_1.instance.loadLevel(self.reachLevel);
    };
    var GameManager_1;
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "lbgameOver", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "lbgameWon", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "timeStart", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "brushPrefab", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "brush", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "toggleWallNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "levelContainer", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "leftParticlePrefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "rightParticlePrefabs", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "leftFireworkContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "rightFireworkContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nextLevelButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "completeDlg", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "aniFailPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "aniWinPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "levelText", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "hintText", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0M7QUFDL0MsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4QyxrREFBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE0T0M7UUF6T0csZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixxQkFBcUI7UUFDckIsNEJBQTRCO1FBRzVCLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFFakMscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUUxQix1QkFBdUI7UUFDdkIsbUNBQW1DO1FBR25DLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxxQ0FBcUM7UUFDckMseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFFL0IsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUdyQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksRUFBRSxDQUFDO1FBRXhCLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFDL0IsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixhQUFPLEdBQWlCLElBQUksQ0FBQztRQUU3Qiw0QkFBNEI7UUFHcEIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFdkMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRXRDLDBCQUFvQixHQUFjLElBQUksQ0FBQztRQUV2QywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFFdEMsNEJBQXNCLEdBQVksSUFBSSxDQUFDO1FB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QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTztJQTNFVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNE8vQjtJQUFELGtCQUFDO0NBNU9ELEFBNE9DLENBNU93QyxFQUFFLENBQUMsU0FBUyxHQTRPcEQ7a0JBNU9vQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1vbiwgeyBpbkdhbWVTdGF0ZSB9IGZyb20gXCIuL0NvbW1vblwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IExpbmVNYW5hZ2VyIGZyb20gXCIuL0xpbmVNYW5hZ2VyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuL1VJL1NvdW5kTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJnYW1lT3ZlcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmdhbWVXb246IGNjLkxhYmVsID0gbnVsbDtcbiAgICBcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBvYnN0YWNsZTogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gbGluZVByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBjYW52YXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIC8vIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgLy8gcHJlZmFiVG9TcGF3bjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGltZVN0YXJ0OmNjLkxhYmVsID0gbnVsbDtcbiAgICBcbiAgICAvLyBkZWx0YVRpbWU6IG51bWJlciA9IDE7XG4gICAgLy8gdGltZVNpbmNlTGFzdFNwYXduOiBudW1iZXIgPSAwO1xuICAgIC8vIGxhc3RTcGF3blBvc2l0aW9uOiBjYy5WZWMyID0gbnVsbDtcbiAgICAvLyBnYW1lVGltZSA6IG51bWJlciA9IDA7XG4gICAgLy8gY3VycmVudFRpbWU6IG51bWJlciA9IDEwO1xuICAgIC8vIHVpTWFuYWdlcjogVUlNYW5hZ2VyID0gbnVsbDtcbiAgICBcbiAgICAvLyBpc0dhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gY2FuU3Bhd246IGJvb2xlYW4gPSB0cnVlO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHVibGljIGJydXNoUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHB1YmxpYyBicnVzaDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHB1YmxpYyByZWFjaExldmVsIDogbnVtYmVyID0gNDE7IFxuICAgIFxuICAgIHByaXZhdGUgbWF4TGV2ZWw6IG51bWJlciA9IDMwMDtcbiAgICBjb3VudFZhbHVlID0gMDtcbiAgICBwcml2YXRlIHRpbWVDaGVjayA6IG51bWJlcjtcbiAgICBsaW5lTWdyIDogTGluZU1hbmFnZXIgPSBudWxsO1xuICAgIFxuICAgIC8vIGxldmVsTm9kZTpjYy5Ob2RlID0gbnVsbDtcbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIHRvZ2dsZVdhbGxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxldmVsQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxlZnRQYXJ0aWNsZVByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByaWdodFBhcnRpY2xlUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsZWZ0RmlyZXdvcmtDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJpZ2h0RmlyZXdvcmtDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5leHRMZXZlbEJ1dHRvbjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb21wbGV0ZURsZzogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBhbmlGYWlsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBhbmlXaW5QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxldmVsVGV4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBoaW50VGV4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIFxuICAgIGxlZnRQYXJ0aWNsZTogY2MuTm9kZSA7XG4gICAgcmlnaHRQYXJ0aWNsZTogY2MuTm9kZTtcbiAgICBcbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIF9pbnM6IEdhbWVNYW5hZ2VyO1xuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEdhbWVNYW5hZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucyB8fCBuZXcgR2FtZU1hbmFnZXI7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLl9pbnMgPSB0aGlzO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5leHRMZXZlbEJ1dHRvbi5vbignY2xpY2snLCB0aGlzLk5leHRMZXZlbCwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgR2FtZU1hbmFnZXIuX2lucy5sb2FkTGV2ZWwodGhpcy5yZWFjaExldmVsKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB7XG4gICAgICAgICAgICBpZihHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9PSBpbkdhbWVTdGF0ZS5DSEVDS0lORylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50VmFsdWUgKz0gZHQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudFZhbHVlID4gMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNoZWNrIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZURpc3BsYXkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoR2FtZUNvbmZpZy5nYW1lU3RhdGUgPT0gaW5HYW1lU3RhdGUuRkFJTEVEKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuZ2FtZVN0YXRlID0gaW5HYW1lU3RhdGUuTk9ORTtcbiAgICAgICAgICAgICAgICBDb21tb24uaW5zdGFuY2Uubm9kZS5lbWl0KFwiRmFpbExldmVsRXZlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXBkYXRlVGltZURpc3BsYXkoKVxuICAgIHtcbiAgICAgICAgdGhpcy50aW1lU3RhcnQuc3RyaW5nID0gdGhpcy50aW1lQ2hlY2sgKyBcIlwiO1xuICAgICAgICBpZih0aGlzLnRpbWVDaGVjayA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNoZWNrSXNNZWV0VGFyZ2V0TGV2ZWwoKTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmxpbmVNZ3IuaXNNZWV0VGFyZ2V0TGV2ZWwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbiBub2RlIGFjdGl2ZSBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuZ2FtZVN0YXRlID0gaW5HYW1lU3RhdGUuQ09NUExFVEVEO1xuICAgICAgICAgICAgICAgIENvbW1vbi5faW5zLm5vZGUuZW1pdChcIlBhc3NMZXZlbEV2ZW50XCIpO1xuICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9IGluR2FtZVN0YXRlLkZBSUxFRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBDaGVja0lzTWVldFRhcmdldExldmVsKCk6IHZvaWR7XG4gICAgICAgIGlmKHRoaXMucmVhY2hMZXZlbCA9PSA0MSB8fCB0aGlzLnJlYWNoTGV2ZWwgPT0gNDYgfHwgdGhpcy5yZWFjaExldmVsID09IDYzIHx8IHRoaXMucmVhY2hMZXZlbCA9PSA2NFxuICAgICAgICAgICAgfHwgdGhpcy5yZWFjaExldmVsID09IDY1IHx8IHRoaXMucmVhY2hMZXZlbCA9PSA2NiB8fCB0aGlzLnJlYWNoTGV2ZWwgPT0gNjcgfHwgdGhpcy5yZWFjaExldmVsID09IDY4IFxuICAgICAgICAgICAgfHwgdGhpcy5yZWFjaExldmVsID09IDcwIHx8IHRoaXMucmVhY2hMZXZlbCA9PSA3OCB8fCB0aGlzLnJlYWNoTGV2ZWwgPT0gNzkgfHwgdGhpcy5yZWFjaExldmVsID09IDgwKXtcbiAgICAgICAgICAgIHRoaXMubGluZU1nci5pc01lZXRUYXJnZXRMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGluZU1nci5pc01lZXRUYXJnZXRMZXZlbCA9IGZhbHNlOztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydENvdW50aW5nKHRpbWVDaGVjazogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy50aW1lQ2hlY2sgPSB0aW1lQ2hlY2s7XG4gICAgICAgIHRoaXMudGltZVN0YXJ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lRGlzcGxheSgpO1xuICAgIH1cbiAgICBwcml2YXRlIE5leHRMZXZlbCgpIHtcbiAgICAgICAgR2FtZUNvbmZpZy5zZXNzaW9uTnVtYmVyICs9IDE7XG4gICAgICAgIHRoaXMubG9hZExldmVsKHRoaXMucmVhY2hMZXZlbCArIDEpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlRGxnLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBvbkNvbXBsZXRlQW5pKClcbiAgICB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5QbGF5RG9uZUxldmVsKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubGVmdFBhcnRpY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZWZ0UGFydGljbGVQcmVmYWJzKTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQYXJ0aWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmlnaHRQYXJ0aWNsZVByZWZhYnMpXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGFydGljbGUucGFyZW50ID0gdGhpcy5yaWdodEZpcmV3b3JrQ29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5sZWZ0UGFydGljbGUucGFyZW50ID0gdGhpcy5sZWZ0RmlyZXdvcmtDb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLmxlZnRQYXJ0aWNsZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgICAgIHRoaXMucmlnaHRQYXJ0aWNsZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcbiAgICAgICAgfSwwLjIpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5sZWZ0UGFydGljbGUgIT09IG51bGwgfHwgdGhpcy5yaWdodFBhcnRpY2xlICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFBhcnRpY2xlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0UGFydGljbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LDIuMilcbiAgICB9XG5cbiAgICBvbkNvbXBsZXRlTGV2ZWwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlQW5pKClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBpZih0aGlzLnJlYWNoTGV2ZWwgPCB0aGlzLm1heExldmVsKVxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVN0YXJ0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZURsZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LDMpXG4gICAgfVxuXG4gICAgbG9hZExldmVsKGxldmVsTnVtOiBudW1iZXIpXG4gICAge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChsZXZlbE51bSA+PSAzMDApIHJldHVybjtcbiAgICAgICAgbGV0IExldmVsSW5kZXggPSBsZXZlbE51bSA+IDIwMCA/IEdhbWVDb25maWcuTGV2ZWxPcmRlcltsZXZlbE51bSAtIDIwMF0gOiBsZXZlbE51bTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYExldmVsUHJlZmFiL0xldmVsJHtMZXZlbEluZGV4fWAsIGZ1bmN0aW9uKGVyciAsIHByZWZhYjogY2MuUHJlZmFiKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihlcnIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkTGV2ZWwoTGV2ZWxJbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5vbkNoZWNraW5nTGV2ZWwocHJlZmFiLExldmVsSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBvbkNoZWNraW5nTGV2ZWwocHJlZmFiOiBjYy5QcmVmYWIsIGxldmVsSWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMucmVhY2hMZXZlbCA9IGxldmVsSWQ7XG4gICAgICAgIHRoaXMubGV2ZWxUZXh0LnN0cmluZyA9IFwiTEVWRUwgXCIgK2Ake2xldmVsSWR9YDtcbiAgICAgICAgbGV0IGxldmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgIGxldmVsTm9kZS5uYW1lID0gYExFVkVMJHtsZXZlbElkfWA7XG4gICAgICAgIGlmKHRoaXMubGluZU1nciAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMucmVsZWFzZShgTGV2ZWxQcmVmYWIvTGV2ZWwke3RoaXMucmVhY2hMZXZlbC0xfWApO1xuICAgICAgICAgICAgdGhpcy5saW5lTWdyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGluZU1nciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoTGluZU1hbmFnZXIpO1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxOb2RlLmFjdGl2ZSA9IHRoaXMubGluZU1nci5pc1RvZ2dsZU9uV2FsbDtcbiAgICAgICAgdGhpcy5sZXZlbENvbnRhaW5lci5hZGRDaGlsZChsZXZlbE5vZGUpO1xuICAgICAgICBsZXZlbE5vZGUuc2V0UG9zaXRpb24oMCwwLDApO1xuICAgICAgICB0aGlzLmhpbnRUZXh0LnN0cmluZyA9IHRoaXMubGluZU1nci5oaW50VGV4dDtcbiAgICAgICAgR2FtZUNvbmZpZy5nYW1lU3RhdGUgPSBpbkdhbWVTdGF0ZS5QTEFZSU5HO1xuICAgIH1cblxuICAgIHJlc3RhcnRMZXZlbCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbWVTdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5sb2FkTGV2ZWwoc2VsZi5yZWFjaExldmVsKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f39a3C/fydAz6liB2jFSALl', 'LineManager');
// Script/LineManager.ts

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
var Common_1 = require("./Common");
var DrawLine_1 = require("./DrawLine");
var GameConfig_1 = require("./GameConfig");
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LineCollider = /** @class */ (function (_super) {
    __extends(LineCollider, _super);
    function LineCollider() {
        // @property(cc.Node)
        // private includeNode: cc.Node = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handDrawNode = null;
        // @property(cc.Node)
        // private uiNode: cc.Node = null;
        _this.pointGraphicPrefab = null;
        _this.hintText = "";
        _this.timeChecking = 5;
        _this.characterNode = null;
        _this.isCanTouchDrawLine = true;
        //Character meet target to win
        _this.isMeetTargetLevel = false;
        _this.isToggleNewAnim = false;
        _this.toggleNode = null;
        _this.pointGraphic = null;
        // canShowTutorial: boolean = true;
        _this.pointNode = null;
        _this._posList = [];
        _this._drawNode = null;
        _this.isToggleOnWall = true;
        _this.hasDrawnLine = false;
        _this.isMoving = false;
        _this._tempPos = null;
        return _this;
    }
    LineCollider.prototype.onLoad = function () {
        this.handDrawNode.on('touchstart', this.StartTouch, this);
        this.handDrawNode.on('touchmove', this.TouchMove, this);
        this.handDrawNode.on('touchend', this.EndTouch, this);
        this.handDrawNode.on('touchcancel', this.EndTouch, this);
        Common_1.default._ins.node.on(Common_1.default._ins.PassLevelEvent, this.onPassLevel, this);
        Common_1.default._ins.node.on(Common_1.default._ins.FailLevelEvent, this.onFailedLevel, this);
        this.pointNode = cc.instantiate(GameManager_1.default.instance.brushPrefab);
        this.pointNode.setPosition(0, 0, 0);
    };
    LineCollider.prototype.StartTouch = function (event) {
        if (GameConfig_1.default.gameState != Common_1.inGameState.PLAYING)
            return;
        var pos = event.touch.getLocation();
        console.log("value of pos start: " + pos);
        var n_pos = this.handDrawNode.convertToNodeSpaceAR(pos);
        this.pointNode.parent = this.handDrawNode;
        this.pointNode.active = true;
        this.pointNode.setPosition(n_pos);
        this.createPointGraphics(n_pos);
        this.isMoving = true;
        this._drawNode.addComponent(cc.RigidBody);
        this._drawNode.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
    };
    LineCollider.prototype.TouchMove = function (event) {
        if (GameConfig_1.default.gameState != Common_1.inGameState.PLAYING)
            return;
        if (!this._drawNode)
            return;
        //console.log("value of isCollieWhilePlaying in LineManager: " + this.pointGraphic.isColliderWhilePlaying);
        if (this.pointGraphic.getIsCollideWhilePlaying) {
            //console.log("value of tempos: " + this._tempPos);
            var tmpPos = event.touch.getLocation();
            var pos1 = this.handDrawNode.convertToNodeSpaceAR(tmpPos);
            console.log("position of mouse: " + pos1);
            if (this.node.getChildByName(this.pointGraphic.getNameCollider) != null) {
                console.log("Has Player in LineManager");
                //this.CheckCutPolygonCollider(this._tempPos, event.getLocation());
                if (!this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), this.pointGraphic.getNameCollider)) {
                    this.pointGraphic.setIsCollierWhilePlaying = false;
                }
            }
            return;
        }
        var pos = event.touch.getLocation();
        var n_pos = this.handDrawNode.convertToNodeSpaceAR(pos);
        this.pointNode.active = true;
        this.pointNode.setPosition(n_pos);
        if (!this._tempPos) {
            this._tempPos = n_pos;
        }
        else {
            var distance = cc.Vec2.distance(this._tempPos, n_pos);
            if (distance >= 8) {
                distance = this._jugement(n_pos);
                if (distance >= 8) {
                    var check = false;
                    if (this.node.getChildByName("e") != null) {
                        if (this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), "e")) {
                            check = true;
                        }
                    }
                    if (this.node.getChildByName("e2") != null) {
                        if (this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), "e2")) {
                            check = true;
                        }
                    }
                    if (this.node.getChildByName("BG2") != null) {
                        if (this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), "BG2")) {
                            check = true;
                        }
                    }
                    if (this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), "Player")) {
                        check = true;
                    }
                    if (this.CheckCutPolygonCollider(this._tempPos, event.getLocation(), "BG")) {
                        check = true;
                    }
                    if (check == false) {
                        this.pointGraphic.updateDrawPoints(n_pos);
                        this._tempPos = n_pos;
                        this.addPhyscisComponent();
                    }
                    //console.log("value of n_pos: " + n_pos);
                }
            }
        }
    };
    LineCollider.prototype.EndTouch = function () {
        if (GameConfig_1.default.gameState != Common_1.inGameState.PLAYING)
            return;
        this.startMoving();
    };
    LineCollider.prototype.CheckCutPolygonCollider = function (point1, point2, name) {
        console.log("value of Point1: " + point1);
        console.log("value of Point2: " + point2);
        var objectWithCollider = this.node.getChildByName(name);
        var collider = objectWithCollider.getComponent(cc.PolygonCollider);
        if (collider) {
            var worldPoint = this.node.convertToWorldSpaceAR(point1);
            var mousePoint = objectWithCollider.convertToWorldSpaceAR(point2);
            console.log("value of worldPoint: " + worldPoint);
            console.log("value of mousePoint: " + mousePoint);
            var colliderWorldPoints = collider.world.points;
            console.log("length of colliderWorldPoint: " + colliderWorldPoints.length);
            for (var i = 0; i < colliderWorldPoints.length; i++) {
                var p1 = colliderWorldPoints[i];
                var p2 = colliderWorldPoints[(i + 1) % colliderWorldPoints.length];
                if (cc.Intersection.lineLine(p1, p2, point2, worldPoint)) {
                    console.log("Intersection detected with PolygonCollider!");
                    return true;
                }
            }
        }
        return false;
    };
    LineCollider.prototype._jugement = function (pos) {
        var distance = 100;
        for (var i = 0; i < this._posList.length; i++) {
            var dis = cc.Vec2.distance(pos, this._posList[i]);
            distance = dis < distance ? dis : distance;
        }
        return distance;
    };
    LineCollider.prototype.addPhyscisComponent = function () {
        this._posList = this.pointGraphic.getListPoint();
        if (this._posList.length > 2) {
            var post_1 = this._posList[this._posList.length - 1];
            var post_2 = this._posList[this._posList.length - 2];
            this.addRectangleBetweenPointsToBody(this._drawNode, post_1, post_2);
        }
    };
    LineCollider.prototype.startMoving = function () {
        //Add physical
        // let self = this;
        // this._posList = this.pointGraphic.getListPoint();
        // this._addPhysices(function () {
        //     self.DoCheckingComplete();
        // });
        this._drawNode.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        this.DoCheckingComplete();
    };
    LineCollider.prototype.DoCheckingComplete = function () {
        GameConfig_1.default.gameState = Common_1.inGameState.CHECKING;
        GameManager_1.default.instance.startCounting(this.timeChecking);
        Common_1.default.instance.node.emit("StartMovingEvent");
    };
    LineCollider.prototype._addPhysices = function (callback) {
        this._drawNode.removeAllChildren(true);
        // this._drawNode.removeComponent(cc.RigidBody);
        // this._drawNode.removeComponent(cc.PolygonCollider);
        // this._drawNode.removeComponent(cc.PhysicsPolygonCollider);
        this.addBoxPhysic(this._drawNode);
        callback();
    };
    LineCollider.prototype.addBoxPhysic = function (g) {
        try {
            g.addComponent(cc.RigidBody);
            g.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
            for (var i = 0; i < this._posList.length - 1; i++) {
                var point1 = this._posList[i];
                var point2 = this._posList[i + 1];
                this.addRectangleBetweenPointsToBody(g, point1, point2);
            }
        }
        catch (error) {
            this._drawNode.destroy();
            return;
        }
    };
    LineCollider.prototype.addRectangleBetweenPointsToBody = function (b2Body, start, end) {
        var distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        var sx = start.x;
        var sy = start.y;
        var ex = end.x;
        var ey = end.y;
        var dist_x = sx - ex;
        var dist_y = sy - ey;
        var angle = Math.atan2(dist_y, dist_x);
        var px = (sx + ex) / 2;
        var py = (sy + ey) / 2;
        var width = Math.abs(distance);
        var height = 20;
        var center = new cc.Vec2(px, py);
        var bc = b2Body.addComponent(cc.PhysicsPolygonCollider);
        bc.density = 1;
        bc.friction = 0.1;
        bc.restitution = 0.5;
        bc.points = this.getListPointFrom(center, angle, height, width);
        var polyCollier = b2Body.addComponent(cc.PolygonCollider);
        polyCollier.points = this.getListPointFrom(center, angle, height, width);
        bc.apply();
    };
    LineCollider.prototype.getListPointFrom = function (center, angle, height, width) {
        var Top_Right = new cc.Vec2();
        var Top_Left = new cc.Vec2();
        var Bot_Left = new cc.Vec2();
        var Bot_Right = new cc.Vec2();
        var halfW = width / 2;
        var halfH = height / 2;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        Top_Right.x = center.x + (halfW * cos) - (halfH * sin);
        Top_Right.y = center.y + (halfW * sin) + (halfH * cos);
        Top_Left.x = center.x - (halfW * cos) - (halfH * sin);
        Top_Left.y = center.y - (halfW * sin) + (halfH * cos);
        Bot_Left.x = center.x - (halfW * cos) + (halfH * sin);
        Bot_Left.y = center.y - (halfW * sin) - (halfH * cos);
        Bot_Right.x = center.x + (halfW * cos) + (halfH * sin);
        Bot_Right.y = center.y + (halfW * sin) - (halfH * cos);
        return [Top_Right, Top_Left, Bot_Left, Bot_Right];
    };
    LineCollider.prototype.createPointGraphics = function (pos) {
        var listRope = this.handDrawNode.children;
        for (var i = 0; i < listRope.length - 1; i++) {
            listRope[i].removeFromParent(true);
        }
        this._drawNode = cc.instantiate(this.pointGraphicPrefab);
        this.pointGraphic = this._drawNode.getComponent(DrawLine_1.default);
        this._drawNode.parent = this.handDrawNode;
        this._drawNode.setSiblingIndex(0);
        this.pointGraphic.splice();
        this.pointGraphic.updateDrawPoints(pos);
    };
    LineCollider.prototype.ClearGraphics = function () {
        for (var _i = 0, _a = this.handDrawNode.children; _i < _a.length; _i++) {
            var pointGraphic = _a[_i];
            if (pointGraphic.name === "Line") {
                pointGraphic.removeFromParent(true);
            }
        }
    };
    LineCollider.prototype.onFailedLevel = function () {
        this.playFailEffect();
        this.schedule(function () {
            this.ClearGraphics();
            GameManager_1.default.instance.restartLevel();
        }, 0.5);
    };
    LineCollider.prototype.playFailEffect = function () {
        var failAni = cc.instantiate(GameManager_1.default._ins.aniFailPrefab);
        failAni.parent = this.node;
    };
    LineCollider.prototype.playPassEffect = function () {
        var passAni = cc.instantiate(GameManager_1.default._ins.aniWinPrefab);
        passAni.parent = this.node;
    };
    LineCollider.prototype.onPassLevel = function () {
        this.playPassEffect();
        if (this.isToggleNewAnim == false) { }
        else {
            this.toggleNode.active == false;
        }
        GameManager_1.default.instance.onCompleteLevel();
    };
    __decorate([
        property(cc.Node)
    ], LineCollider.prototype, "handDrawNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], LineCollider.prototype, "pointGraphicPrefab", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "hintText", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "timeChecking", void 0);
    __decorate([
        property(cc.Node)
    ], LineCollider.prototype, "characterNode", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "isCanTouchDrawLine", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "isMeetTargetLevel", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "isToggleNewAnim", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "isToggleOnWall", void 0);
    __decorate([
        property
    ], LineCollider.prototype, "isMoving", void 0);
    LineCollider = __decorate([
        ccclass
    ], LineCollider);
    return LineCollider;
}(cc.Component));
exports.default = LineCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMaW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0M7QUFDL0MsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0Qyw2Q0FBd0M7QUFHbEMsSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFFSSxxQkFBcUI7UUFDckIsdUNBQXVDO1FBSDNDLHFFQStVQztRQXpVVyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQyxxQkFBcUI7UUFDckIsa0NBQWtDO1FBRzFCLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUd0QyxjQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBR2pDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUUxQyw4QkFBOEI7UUFFdkIsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBRXhDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQ3hDLG1DQUFtQztRQUUzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUV0QyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBNEJsQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQW9RNUIsQ0FBQztJQTdSRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVB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QUFpQixNQUFlLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFhO1FBQzFFLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLElBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUIsU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENB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QUE7UUFDckIsSUFBRyxJQUFJLENBQUMsZUFBZSxJQUFJLEtBQUssRUFDaEMsR0FBRTthQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1NBQ25DO1FBQ0QscUJBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFM0MsQ0FBQztJQXhVRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNtQjtJQU1yQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUN5QjtJQUc3QztRQURDLFFBQVE7a0RBQ29CO0lBRzdCO1FBREMsUUFBUTtzREFDdUI7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDc0I7SUFHeEM7UUFEQyxRQUFROzREQUNpQztJQUkxQztRQURDLFFBQVE7MkRBQ2lDO0lBRTFDO1FBREMsUUFBUTt5REFDK0I7SUFheEM7UUFEQyxRQUFRO3dEQUM2QjtJQUl0QztRQURDLFFBQVE7a0RBQ2lCO0lBL0NULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0ErVWhDO0lBQUQsbUJBQUM7Q0EvVUQsQUErVUMsQ0EvVXlDLEVBQUUsQ0FBQyxTQUFTLEdBK1VyRDtrQkEvVW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbW9uLCB7IGluR2FtZVN0YXRlIH0gZnJvbSBcIi4vQ29tbW9uXCI7XG5pbXBvcnQgRHJhd0xpbmUgZnJvbSBcIi4vRHJhd0xpbmVcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ29sbGlkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gcHJpdmF0ZSBpbmNsdWRlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGhhbmREcmF3Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBwcml2YXRlIHVpTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgcG9pbnRHcmFwaGljUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIGhpbnRUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIHRpbWVDaGVja2luZzogbnVtYmVyID0gNTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByb3RlY3RlZCBjaGFyYWN0ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyBpc0NhblRvdWNoRHJhd0xpbmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy9DaGFyYWN0ZXIgbWVldCB0YXJnZXQgdG8gd2luXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIGlzTWVldFRhcmdldExldmVsOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIGlzVG9nZ2xlTmV3QW5pbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgXG4gICAgdG9nZ2xlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgcG9pbnRHcmFwaGljOiBEcmF3TGluZSA9IG51bGw7XG4gICAgLy8gY2FuU2hvd1R1dG9yaWFsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgcG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBfcG9zTGlzdDogY2MuVmVjMltdID0gW107XG5cbiAgICBwcml2YXRlIF9kcmF3Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIGlzVG9nZ2xlT25XYWxsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgaGFzRHJhd25MaW5lOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmhhbmREcmF3Tm9kZS5vbigndG91Y2hzdGFydCcsIHRoaXMuU3RhcnRUb3VjaCwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZERyYXdOb2RlLm9uKCd0b3VjaG1vdmUnLCB0aGlzLlRvdWNoTW92ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZERyYXdOb2RlLm9uKCd0b3VjaGVuZCcsIHRoaXMuRW5kVG91Y2gsIHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmREcmF3Tm9kZS5vbigndG91Y2hjYW5jZWwnLCB0aGlzLkVuZFRvdWNoLCB0aGlzKTtcbiAgICAgICAgQ29tbW9uLl9pbnMubm9kZS5vbihDb21tb24uX2lucy5QYXNzTGV2ZWxFdmVudCx0aGlzLm9uUGFzc0xldmVsLHRoaXMpO1xuICAgICAgICBDb21tb24uX2lucy5ub2RlLm9uKENvbW1vbi5faW5zLkZhaWxMZXZlbEV2ZW50LHRoaXMub25GYWlsZWRMZXZlbCx0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludE5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lTWFuYWdlci5pbnN0YW5jZS5icnVzaFByZWZhYik7XG4gICAgICAgIHRoaXMucG9pbnROb2RlLnNldFBvc2l0aW9uKDAsIDAsIDApO1xuICAgIH1cbiAgICBcbiAgICBTdGFydFRvdWNoKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmdhbWVTdGF0ZSAhPSBpbkdhbWVTdGF0ZS5QTEFZSU5HKSByZXR1cm47XG4gICAgICAgIGxldCBwb3MgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHBvcyBzdGFydDogXCIgKyBwb3MpO1xuICAgICAgICBsZXQgbl9wb3MgPSB0aGlzLmhhbmREcmF3Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICB0aGlzLnBvaW50Tm9kZS5wYXJlbnQgPSB0aGlzLmhhbmREcmF3Tm9kZTtcbiAgICAgICAgdGhpcy5wb2ludE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2ludE5vZGUuc2V0UG9zaXRpb24obl9wb3MpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBvaW50R3JhcGhpY3Mobl9wb3MpO1xuICAgICAgICB0aGlzLmlzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZHJhd05vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMuX2RyYXdOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZW1wUG9zID0gbnVsbDtcblxuICAgIFRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5nYW1lU3RhdGUgIT0gaW5HYW1lU3RhdGUuUExBWUlORykgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuX2RyYXdOb2RlKSByZXR1cm47XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ2YWx1ZSBvZiBpc0NvbGxpZVdoaWxlUGxheWluZyBpbiBMaW5lTWFuYWdlcjogXCIgKyB0aGlzLnBvaW50R3JhcGhpYy5pc0NvbGxpZGVyV2hpbGVQbGF5aW5nKTtcbiAgICAgICBcbiAgICAgICAgaWYodGhpcy5wb2ludEdyYXBoaWMuZ2V0SXNDb2xsaWRlV2hpbGVQbGF5aW5nKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ2YWx1ZSBvZiB0ZW1wb3M6IFwiICsgdGhpcy5fdGVtcFBvcyk7XG4gICAgICAgICAgICBsZXQgdG1wUG9zID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBwb3MxID0gdGhpcy5oYW5kRHJhd05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG1wUG9zKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zaXRpb24gb2YgbW91c2U6IFwiICsgcG9zMSk7XG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUodGhpcy5wb2ludEdyYXBoaWMuZ2V0TmFtZUNvbGxpZGVyKSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhhcyBQbGF5ZXIgaW4gTGluZU1hbmFnZXJcIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLkNoZWNrQ3V0UG9seWdvbkNvbGxpZGVyKHRoaXMuX3RlbXBQb3MsIGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5DaGVja0N1dFBvbHlnb25Db2xsaWRlcih0aGlzLl90ZW1wUG9zLCBldmVudC5nZXRMb2NhdGlvbigpLHRoaXMucG9pbnRHcmFwaGljLmdldE5hbWVDb2xsaWRlciApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludEdyYXBoaWMuc2V0SXNDb2xsaWVyV2hpbGVQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBuX3BvcyA9IHRoaXMuaGFuZERyYXdOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgIHRoaXMucG9pbnROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9pbnROb2RlLnNldFBvc2l0aW9uKG5fcG9zKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RlbXBQb3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RlbXBQb3MgPSBuX3BvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGNjLlZlYzIuZGlzdGFuY2UodGhpcy5fdGVtcFBvcywgbl9wb3MpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID49IDgpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuX2p1Z2VtZW50KG5fcG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPj0gOCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlXCIpICE9IG51bGwgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2hlY2tDdXRQb2x5Z29uQ29sbGlkZXIodGhpcy5fdGVtcFBvcywgZXZlbnQuZ2V0TG9jYXRpb24oKSxcImVcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZTJcIikgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2hlY2tDdXRQb2x5Z29uQ29sbGlkZXIodGhpcy5fdGVtcFBvcywgZXZlbnQuZ2V0TG9jYXRpb24oKSxcImUyXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQkcyXCIpICE9IG51bGwgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNoZWNrQ3V0UG9seWdvbkNvbGxpZGVyKHRoaXMuX3RlbXBQb3MsIGV2ZW50LmdldExvY2F0aW9uKCksXCJCRzJcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5DaGVja0N1dFBvbHlnb25Db2xsaWRlcih0aGlzLl90ZW1wUG9zLCBldmVudC5nZXRMb2NhdGlvbigpLCBcIlBsYXllclwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5DaGVja0N1dFBvbHlnb25Db2xsaWRlcih0aGlzLl90ZW1wUG9zLCBldmVudC5nZXRMb2NhdGlvbigpLCBcIkJHXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNoZWNrID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRHcmFwaGljLnVwZGF0ZURyYXdQb2ludHMobl9wb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGVtcFBvcyA9IG5fcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQaHlzY2lzQ29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInZhbHVlIG9mIG5fcG9zOiBcIiArIG5fcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEVuZFRvdWNoKCkge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5nYW1lU3RhdGUgIT0gaW5HYW1lU3RhdGUuUExBWUlORykgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0YXJ0TW92aW5nKCk7IFxuICAgIH1cbiAgICBDaGVja0N1dFBvbHlnb25Db2xsaWRlcihwb2ludDE6IGNjLlZlYzIsIHBvaW50MjpjYy5WZWMyLCBuYW1lOiBzdHJpbmcpOiBib29sZWFue1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIFBvaW50MTogXCIgKyBwb2ludDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIFBvaW50MjogXCIgKyBwb2ludDIpO1xuICAgICAgICBjb25zdCBvYmplY3RXaXRoQ29sbGlkZXI6IGNjLk5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVyOiBjYy5Qb2x5Z29uQ29sbGlkZXIgPSBvYmplY3RXaXRoQ29sbGlkZXIuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XG5cbiAgICAgICAgaWYgKGNvbGxpZGVyKSB7XG4gICAgICAgICAgICBjb25zdCB3b3JsZFBvaW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwb2ludDEpO1xuICAgICAgICAgICAgY29uc3QgbW91c2VQb2ludCA9IG9iamVjdFdpdGhDb2xsaWRlci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9pbnQyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgb2Ygd29ybGRQb2ludDogXCIgKyB3b3JsZFBvaW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgb2YgbW91c2VQb2ludDogXCIgKyBtb3VzZVBvaW50KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGVyV29ybGRQb2ludHMgPSBjb2xsaWRlci53b3JsZC5wb2ludHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlbmd0aCBvZiBjb2xsaWRlcldvcmxkUG9pbnQ6IFwiICsgY29sbGlkZXJXb3JsZFBvaW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlcldvcmxkUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcDEgPSBjb2xsaWRlcldvcmxkUG9pbnRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gY29sbGlkZXJXb3JsZFBvaW50c1soaSArIDEpICUgY29sbGlkZXJXb3JsZFBvaW50cy5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUocDEsIHAyLCBwb2ludDIsIHdvcmxkUG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJzZWN0aW9uIGRldGVjdGVkIHdpdGggUG9seWdvbkNvbGxpZGVyIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfanVnZW1lbnQocG9zOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZSA9IDEwMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGlzID0gY2MuVmVjMi5kaXN0YW5jZShwb3MsIHRoaXMuX3Bvc0xpc3RbaV0pO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBkaXMgPCBkaXN0YW5jZSA/IGRpcyA6IGRpc3RhbmNlO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xuICAgIH1cblxuICAgIGFkZFBoeXNjaXNDb21wb25lbnQoKTogdm9pZHtcbiAgICAgICAgdGhpcy5fcG9zTGlzdCA9IHRoaXMucG9pbnRHcmFwaGljLmdldExpc3RQb2ludCgpO1xuICAgICAgICBpZiAodGhpcy5fcG9zTGlzdC5sZW5ndGggPiAyKXtcbiAgICAgICAgICAgIGxldCBwb3N0XzEgPSB0aGlzLl9wb3NMaXN0W3RoaXMuX3Bvc0xpc3QubGVuZ3RoLTFdO1xuICAgICAgICAgICAgbGV0IHBvc3RfMiA9IHRoaXMuX3Bvc0xpc3RbdGhpcy5fcG9zTGlzdC5sZW5ndGgtMl07XG4gICAgICAgICAgICB0aGlzLmFkZFJlY3RhbmdsZUJldHdlZW5Qb2ludHNUb0JvZHkodGhpcy5fZHJhd05vZGUscG9zdF8xLHBvc3RfMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRNb3ZpbmcoKSB7XG4gICAgICAgIC8vQWRkIHBoeXNpY2FsXG4gICAgICAgIC8vIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdGhpcy5fcG9zTGlzdCA9IHRoaXMucG9pbnRHcmFwaGljLmdldExpc3RQb2ludCgpO1xuICAgICAgICAvLyB0aGlzLl9hZGRQaHlzaWNlcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICBzZWxmLkRvQ2hlY2tpbmdDb21wbGV0ZSgpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy5fZHJhd05vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgdGhpcy5Eb0NoZWNraW5nQ29tcGxldGUoKTtcbiAgICB9XG4gICAgXG4gICAgRG9DaGVja2luZ0NvbXBsZXRlKClcbiAgICB7XG4gICAgICAgIEdhbWVDb25maWcuZ2FtZVN0YXRlID0gaW5HYW1lU3RhdGUuQ0hFQ0tJTkc7XG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLnN0YXJ0Q291bnRpbmcodGhpcy50aW1lQ2hlY2tpbmcpO1xuICAgICAgICBDb21tb24uaW5zdGFuY2Uubm9kZS5lbWl0KFwiU3RhcnRNb3ZpbmdFdmVudFwiKTtcbiAgICB9XG4gICAgcHVibGljIF9hZGRQaHlzaWNlcyhjYWxsYmFjazogYW55KSB7XG4gICAgICAgIHRoaXMuX2RyYXdOb2RlLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICAvLyB0aGlzLl9kcmF3Tm9kZS5yZW1vdmVDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgLy8gdGhpcy5fZHJhd05vZGUucmVtb3ZlQ29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XG4gICAgICAgIC8vIHRoaXMuX2RyYXdOb2RlLnJlbW92ZUNvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcbiAgICAgICAgdGhpcy5hZGRCb3hQaHlzaWModGhpcy5fZHJhd05vZGUpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBhZGRCb3hQaHlzaWMoZzogY2MuTm9kZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZy5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgICAgIGcuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb3NMaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwb2ludDEgPSB0aGlzLl9wb3NMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGxldCBwb2ludDIgPSB0aGlzLl9wb3NMaXN0W2kgKyAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFJlY3RhbmdsZUJldHdlZW5Qb2ludHNUb0JvZHkoZywgcG9pbnQxLCBwb2ludDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5fZHJhd05vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgXG4gICBcblxuXG4gICAgYWRkUmVjdGFuZ2xlQmV0d2VlblBvaW50c1RvQm9keShiMkJvZHk6IGNjLk5vZGUsIHN0YXJ0OiBjYy5WZWMyLCBlbmQ6IGNjLlZlYzIpIHtcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGVuZC54IC0gc3RhcnQueCwgMikgKyBNYXRoLnBvdyhlbmQueSAtIHN0YXJ0LnksIDIpKTtcbiAgICAgICAgbGV0IHN4ID0gc3RhcnQueDtcbiAgICAgICAgbGV0IHN5ID0gc3RhcnQueTtcbiAgICAgICAgbGV0IGV4ID0gZW5kLng7XG4gICAgICAgIGxldCBleSA9IGVuZC55O1xuICAgICAgICBsZXQgZGlzdF94ID0gc3ggLSBleDtcbiAgICAgICAgbGV0IGRpc3RfeSA9IHN5IC0gZXk7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZGlzdF95LCBkaXN0X3gpO1xuXG4gICAgICAgIGxldCBweCA9IChzeCArIGV4KSAvIDI7XG4gICAgICAgIGxldCBweSA9IChzeSArIGV5KSAvIDI7XG4gICAgICAgIGxldCB3aWR0aCA9IE1hdGguYWJzKGRpc3RhbmNlKTtcbiAgICAgICAgbGV0IGhlaWdodCA9IDIwO1xuXG5cbiAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBjYy5WZWMyKHB4LCBweSk7XG5cbiAgICAgICAgbGV0IGJjOiBjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyID0gYjJCb2R5LmFkZENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcbiAgICAgICAgYmMuZGVuc2l0eSA9IDE7XG4gICAgICAgIGJjLmZyaWN0aW9uID0gMC4xO1xuICAgICAgICBiYy5yZXN0aXR1dGlvbiA9IDAuNTtcbiAgICAgICAgYmMucG9pbnRzID0gdGhpcy5nZXRMaXN0UG9pbnRGcm9tKGNlbnRlciwgYW5nbGUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICBsZXQgcG9seUNvbGxpZXI6IGNjLlBvbHlnb25Db2xsaWRlciA9IGIyQm9keS5hZGRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcbiAgICAgICAgcG9seUNvbGxpZXIucG9pbnRzID0gdGhpcy5nZXRMaXN0UG9pbnRGcm9tKGNlbnRlciwgYW5nbGUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICBcbiAgICAgICAgYmMuYXBwbHkoKTtcbiAgICB9XG5cblxuICAgIGdldExpc3RQb2ludEZyb20oY2VudGVyOiBjYy5WZWMyLCBhbmdsZTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IGNjLlZlYzJbXSB7XG4gICAgICAgIGxldCBUb3BfUmlnaHQgPSBuZXcgY2MuVmVjMigpO1xuICAgICAgICBsZXQgVG9wX0xlZnQgPSBuZXcgY2MuVmVjMigpO1xuICAgICAgICBsZXQgQm90X0xlZnQgPSBuZXcgY2MuVmVjMigpO1xuICAgICAgICBsZXQgQm90X1JpZ2h0ID0gbmV3IGNjLlZlYzIoKTtcblxuICAgICAgICBsZXQgaGFsZlcgPSB3aWR0aCAvIDI7XG4gICAgICAgIGxldCBoYWxmSCA9IGhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgVG9wX1JpZ2h0LnggPSBjZW50ZXIueCArIChoYWxmVyAqIGNvcykgLSAoaGFsZkggKiBzaW4pO1xuICAgICAgICBUb3BfUmlnaHQueSA9IGNlbnRlci55ICsgKGhhbGZXICogc2luKSArIChoYWxmSCAqIGNvcyk7XG4gICAgICAgIFRvcF9MZWZ0LnggPSBjZW50ZXIueCAtIChoYWxmVyAqIGNvcykgLSAoaGFsZkggKiBzaW4pO1xuICAgICAgICBUb3BfTGVmdC55ID0gY2VudGVyLnkgLSAoaGFsZlcgKiBzaW4pICsgKGhhbGZIICogY29zKTtcbiAgICAgICAgQm90X0xlZnQueCA9IGNlbnRlci54IC0gKGhhbGZXICogY29zKSArIChoYWxmSCAqIHNpbik7XG4gICAgICAgIEJvdF9MZWZ0LnkgPSBjZW50ZXIueSAtIChoYWxmVyAqIHNpbikgLSAoaGFsZkggKiBjb3MpO1xuICAgICAgICBCb3RfUmlnaHQueCA9IGNlbnRlci54ICsgKGhhbGZXICogY29zKSArIChoYWxmSCAqIHNpbik7XG4gICAgICAgIEJvdF9SaWdodC55ID0gY2VudGVyLnkgKyAoaGFsZlcgKiBzaW4pIC0gKGhhbGZIICogY29zKTtcblxuICAgICAgICByZXR1cm4gW1RvcF9SaWdodCwgVG9wX0xlZnQsIEJvdF9MZWZ0LCBCb3RfUmlnaHRdO1xuICAgIH1cblxuICAgIGNyZWF0ZVBvaW50R3JhcGhpY3MocG9zOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBsaXN0Um9wZSA9IHRoaXMuaGFuZERyYXdOb2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RSb3BlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgbGlzdFJvcGVbaV0ucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmF3Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9pbnRHcmFwaGljUHJlZmFiKTtcbiAgICAgICAgdGhpcy5wb2ludEdyYXBoaWMgPSB0aGlzLl9kcmF3Tm9kZS5nZXRDb21wb25lbnQoRHJhd0xpbmUpO1xuICAgICAgICB0aGlzLl9kcmF3Tm9kZS5wYXJlbnQgPSB0aGlzLmhhbmREcmF3Tm9kZTtcbiAgICAgICAgdGhpcy5fZHJhd05vZGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICB0aGlzLnBvaW50R3JhcGhpYy5zcGxpY2UoKTtcbiAgICAgICAgdGhpcy5wb2ludEdyYXBoaWMudXBkYXRlRHJhd1BvaW50cyhwb3MpO1xuICAgIH1cblxuICAgIENsZWFyR3JhcGhpY3MoKSB7XG4gICAgICAgIGZvciAobGV0IHBvaW50R3JhcGhpYyBvZiB0aGlzLmhhbmREcmF3Tm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKHBvaW50R3JhcGhpYy5uYW1lID09PSBcIkxpbmVcIikge1xuICAgICAgICAgICAgICAgIHBvaW50R3JhcGhpYy5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgICBcbiAgICBvbkZhaWxlZExldmVsKCkge1xuICAgICAgICB0aGlzLnBsYXlGYWlsRWZmZWN0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5DbGVhckdyYXBoaWNzKCk7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG5cbiAgICBwbGF5RmFpbEVmZmVjdCgpXG4gICAge1xuICAgICAgICBsZXQgZmFpbEFuaT0gY2MuaW5zdGFudGlhdGUoR2FtZU1hbmFnZXIuX2lucy5hbmlGYWlsUHJlZmFiKTtcbiAgICAgICAgZmFpbEFuaS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgcGxheVBhc3NFZmZlY3QoKVxuICAgIHtcbiAgICAgICAgbGV0IHBhc3NBbmkgPSBjYy5pbnN0YW50aWF0ZShHYW1lTWFuYWdlci5faW5zLmFuaVdpblByZWZhYik7XG4gICAgICAgIHBhc3NBbmkucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIH1cbiAgICBvblBhc3NMZXZlbCgpXG4gICAge1xuICAgICAgICB0aGlzLnBsYXlQYXNzRWZmZWN0KClcbiAgICAgICAgaWYodGhpcy5pc1RvZ2dsZU5ld0FuaW0gPT0gZmFsc2UpXG4gICAgICAgIHt9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTm9kZS5hY3RpdmUgPT0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2Uub25Db21wbGV0ZUxldmVsKCk7XG4gICAgICAgIFxuICAgIH1cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/StopSeperateEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74193nki1REZZtHVlb5K/VP', 'StopSeperateEvent');
// Script/StopSeperateEvent.ts

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
var StopSeperateEvent = /** @class */ (function (_super) {
    __extends(StopSeperateEvent, _super);
    function StopSeperateEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopSeperateEvent.prototype.onLoad = function () {
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        //this.node.on('touchmove', this.onTouchMove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
    };
    StopSeperateEvent.prototype.onTouchStartAbove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    StopSeperateEvent.prototype.onTouchMove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event Move");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    StopSeperateEvent = __decorate([
        ccclass
    ], StopSeperateEvent);
    return StopSeperateEvent;
}(cc.Component));
exports.default = StopSeperateEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTdG9wU2VwZXJhdGVFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDs7SUFtQ0EsQ0FBQztJQWpDYSxrQ0FBTSxHQUFoQjtRQUNJLDJEQUEyRDtRQUMzRCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQVU7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQyxxQ0FBcUM7WUFDckMsMEJBQTBCO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN2QztRQUNELFNBQVM7UUFDVCwrRUFBK0U7UUFDL0UsSUFBSTtJQUNSLENBQUM7SUFDRCx1Q0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9DLHFDQUFxQztZQUNyQywwQkFBMEI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsU0FBUztRQUNULCtFQUErRTtRQUMvRSxJQUFJO0lBQ1IsQ0FBQztJQWxDZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FtQ3JDO0lBQUQsd0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzhDLEVBQUUsQ0FBQyxTQUFTLEdBbUMxRDtrQkFuQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BTZXBlcmF0ZUV2ZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnRBYm92ZSwgdGhpcyk7XG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnRBYm92ZShldmVudDogYW55KSB7XG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kIGhhcyBFdmVudFwiKTtcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMobG9jYWxQb3MpKSB7XG4gICAgICAgICAgICAvLyBY4butIGzDvSBz4buxIGtp4buHbiBjaG8gxJHhu5FpIHTGsOG7o25nIOG7nyB0csOqblxuICAgICAgICAgICAgLy9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTmfEg24gY2jhurduIHPhu7Ega2nhu4duIGxhbiB04buPYSBsw6puIMSR4buRaSB0xrDhu6NuZyBkxrDhu5tpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnQgTW92ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMobG9jYWxQb3MpKSB7XG4gICAgICAgICAgICAvLyBY4butIGzDvSBz4buxIGtp4buHbiBjaG8gxJHhu5FpIHTGsOG7o25nIOG7nyB0csOqblxuICAgICAgICAgICAgLy9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTmfEg24gY2jhurduIHPhu7Ega2nhu4duIGxhbiB04buPYSBsw6puIMSR4buRaSB0xrDhu6NuZyBkxrDhu5tpXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CustomCharacter/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4562aFxQlJTJ/Raa1P++s2', 'Player');
// Script/CustomCharacter/Player.ts

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
var GameManager_1 = require("../GameManager");
var Bullet_1 = require("./Bullet");
var Enermy_1 = require("./Enermy");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.delayTime = 0;
        _this.isStartMoving = false;
        _this.initPos = new cc.Vec3(0, 0);
        _this.initVelocity = new cc.Vec2(0, 0);
        _this.charSprite = [];
        _this.aniNode = null;
        _this.enermyNode = null;
        _this.enermyNode_2 = null;
        _this.bullet = null;
        _this.posForBullet = null;
        _this.posForBullet_2 = null;
        _this.enermySprite = null;
        _this.enermySprite2 = null;
        _this.weaponSprite = null;
        _this.force = null;
        _this.forceBullet = 0;
        _this.positionAddForce = null;
        _this.sfxEnemyNode = null;
        _this.sfxEnemyNode_2 = null;
        _this.sfxPlayer = null;
        _this.elementPlayer = null;
        _this.isFalling = false;
        _this.isHasTeleport = false;
        _this.positionTele = null;
        _this.startLevelAnim = null;
        _this.spawnMulti_Obj = null;
        _this.isRemove = false;
        _this.counter = 0;
        return _this;
    }
    Player_1 = Player;
    Object.defineProperty(Player, "instance", {
        get: function () {
            return this._ins || new Player_1;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.onLoad = function () {
        Common_1.default.instance.node.on(Common_1.default.instance.StartMovingEvent, this.startMoving, this);
        Common_1.default.instance.node.on(Common_1.default.instance.PassLevelEvent, this.onPass, this);
        Common_1.default.instance.node.on(Common_1.default.instance.FailLevelEvent, this.onFail, this);
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
        this.initPos = this.node.position;
    };
    Player.prototype.onTouchStartAbove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("Player has Event");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    Player.prototype.onDisable = function () {
        Common_1.default.instance.node.off(Common_1.default.instance.StartMovingEvent, this.startMoving, this);
        Common_1.default.instance.node.off(Common_1.default.instance.PassLevelEvent, this.onPass, this);
        Common_1.default.instance.node.off(Common_1.default.instance.FailLevelEvent, this.onFail, this);
    };
    Player.prototype.startMoving = function () {
        if (this.sfxEnemyNode != undefined) {
            this.sfxEnemyNode.active = !this.sfxEnemyNode.active;
        }
        if (this.sfxEnemyNode_2 != undefined) {
            this.sfxEnemyNode_2.active = !this.sfxEnemyNode_2.active;
        }
        if (this.rb != null) {
            if (!this.isFalling) {
                this.rb.type = cc.RigidBodyType.Dynamic;
                this.rb.linearVelocity = this.initVelocity;
            }
            this.delayTime = GameManager_1.default.instance.lineMgr.timeChecking;
            this.counter = 0;
            this.isStartMoving = true;
        }
        if (this.enermyNode != undefined) {
            var rbEnermy = this.enermyNode.getComponent(cc.RigidBody);
            var enermyCom = this.enermyNode.getComponent(Enermy_1.default);
            if (rbEnermy != null) {
                if (!enermyCom.getIsFalling) {
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
            }
            else if (this.bullet != undefined) {
                this.AdddForceForBullet();
            }
            this.AddForceForEnermy();
            this.MovingEnermy();
            this.onSpawnMulti();
        }
        if (this.enermyNode_2 != undefined) {
            var rbEnermy = this.enermyNode_2.getComponent(cc.RigidBody);
            var enermyCom = this.enermyNode_2.getComponent(Enermy_1.default);
            if (rbEnermy != null) {
                if (!enermyCom.getIsFalling) {
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
            }
            else if (this.bullet != undefined) {
                this.AdddForceForBullet2();
            }
            this.AddForceForEnermy2();
            this.MovingEnermy2();
            this.onSpawnMulti();
        }
        if (this.weaponSprite != undefined) {
            if (this.charSprite[Common_1.spriteState.Weapon] != undefined) {
                var sprite = this.weaponSprite.getComponent(cc.Sprite);
                sprite.spriteFrame = this.charSprite[Common_1.spriteState.Weapon];
            }
        }
        if (this.startLevelAnim != null) {
            this.startLevelAnim.active = false;
        }
    };
    Player.prototype.MovingEnermy = function () {
        var x = this.node.position.x - this.enermyNode.position.x;
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("value of hasMove: " + enermyNodeCom.hasMove);
            if (enermyNodeCom.hasMove) {
                console.log("value of x: " + x);
                enermyNodeCom.setDir = new cc.Vec2(x, 0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    };
    Player.prototype.MovingEnermy2 = function () {
        var x = this.node.position.x - this.enermyNode_2.position.x;
        var enermyNodeCom = this.enermyNode_2.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("value of hasMove2: " + enermyNodeCom.hasMove);
            if (enermyNodeCom.hasMove) {
                console.log("value of x2: " + x);
                enermyNodeCom.setDir = new cc.Vec2(x, 0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    };
    Player.prototype.AddForceForEnermy = function () {
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("go in enermyCom");
            if (enermyNodeCom.getIsAttack) {
                console.log("attack");
                var x = this.node.position.x - this.enermyNode.position.x;
                var y = this.node.position.y - this.enermyNode.position.y;
                var rbEnermyNode = this.enermyNode.getComponent(cc.RigidBody);
                if (rbEnermyNode != null) {
                    console.log("rb is not null");
                    if (this.positionAddForce != null) {
                        console.log("add Force in positionAddForce");
                        rbEnermyNode.applyForce(new cc.Vec2(x * this.force.x, y * this.force.y), this.positionAddForce, true);
                    }
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x * this.force.x, y * this.force.y), true);
                }
            }
        }
    };
    Player.prototype.AddForceForEnermy2 = function () {
        var enermyNodeCom = this.enermyNode_2.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            console.log("go in enermyCom");
            if (enermyNodeCom.getIsAttack) {
                console.log("attack");
                var x = this.node.position.x - this.enermyNode_2.position.x;
                var y = this.node.position.y - this.enermyNode_2.position.y;
                var rbEnermyNode = this.enermyNode_2.getComponent(cc.RigidBody);
                if (rbEnermyNode != null) {
                    console.log("rb is not null");
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x * this.force.x, y * this.force.y), true);
                }
            }
        }
    };
    Player.prototype.StopEnermyMoving = function () {
        var enermyNodeCom = this.enermyNode.getComponent(Enermy_1.default);
        if (enermyNodeCom != null) {
            enermyNodeCom.setIsMoving = false;
        }
    };
    Player.prototype.AdddForceForBullet = function () {
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyFire] != undefined) {
                console.log("change fire sprite");
                this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyFire];
            }
        }
        var m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode.position.x + this.posForBullet.x, this.enermyNode.position.y + this.posForBullet.y, 0);
        var m_bulletComp = m_bullet.getComponent(Bullet_1.default);
        var x = this.node.position.x - m_bullet.position.x;
        var y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x * this.forceBullet, y * this.forceBullet));
    };
    Player.prototype.AdddForceForBullet2 = function () {
        if (this.enermyNode_2 !== undefined) {
            console.log("value of spriteEnermy: " + Common_1.spriteState.EnermyFire);
            if (this.charSprite[Common_1.spriteState.EnermyFire] != undefined) {
                console.log("change fire sprite");
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyFire];
            }
        }
        var m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode_2.position.x + this.posForBullet_2.x, this.enermyNode_2.position.y + this.posForBullet_2.y, 0);
        var m_bulletComp = m_bullet.getComponent(Bullet_1.default);
        var x = this.node.position.x - m_bullet.position.x;
        var y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x * this.forceBullet, y * this.forceBullet));
    };
    Player.prototype.onSpawnMulti = function () {
        if (this.enermyNode != undefined && this.spawnMulti_Obj != undefined) {
            this.schedule(function () {
                console.log("bug is here");
                var multiObj = cc.instantiate(this.spawnMulti_Obj);
                this.enermyNode.addChild(multiObj);
            }, 0.5, cc.macro.REPEAT_FOREVER);
        }
        if (this.enermyNode_2 != undefined && this.spawnMulti_Obj != undefined) {
            this.schedule(function () {
                var multiObj = cc.instantiate(this.spawnMulti_Obj);
                this.enermyNode_2.addChild(multiObj);
            }, 0.5, cc.macro.REPEAT_FOREVER);
        }
    };
    Player.prototype.update = function (dt) {
        if (this.isStartMoving == undefined)
            return;
        this.counter += dt;
        if (this.counter >= 1) {
            this.counter--;
            this.counter--;
            if (this.delayTime == 0) {
                this.isStartMoving = true;
            }
        }
    };
    Player.prototype.Teleport = function () {
        if (this.isHasTeleport) {
            if (this.positionTele != null) {
                this.node.position = new cc.Vec3(this.positionTele.x, this.positionTele.y, 0);
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(50, 0), true);
            }
        }
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        if (GameConfig_1.default.gameState != Common_1.inGameState.CHECKING)
            return;
        if (other.node.group == "Target") {
            console.log("in Target pass");
            this.Teleport();
            GameConfig_1.default.gameState = Common_1.inGameState.COMPLETED;
            //this.node.getComponent(cc.PolygonCollider).enabled = false;
            Common_1.default.instance.node.emit("PassLevelEvent");
            return;
        }
        if (other.node.group == "Enemy") {
            console.log("in Enermy loss");
            GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            //this.MovingEnermy();
            // if (this.node.getChildByName("Bullet") != null)
            //     this.node.getChildByName("Bullet").removeFromParent();
            return;
        }
        if (other.node.name == "Line") {
            console.log("collide with line");
        }
        if (other.node.name == "Line" && !GameManager_1.default.instance.lineMgr.isCanTouchDrawLine) {
            GameConfig_1.default.gameState = Common_1.inGameState.FAILED;
            return;
        }
    };
    Player.prototype.onFail = function () {
        if (this.charSprite[Common_1.spriteState.Lose] !== undefined) {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Lose];
        }
        if (this.isRemove) {
            this.node.removeFromParent(true);
        }
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyWin] != undefined) {
                console.log("change fail sprite");
                if (this.enermySprite != undefined) {
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyWin];
                }
                else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyWin];
            }
        }
        if (this.charSprite[Common_1.spriteState.Enermy_2_Win] != undefined) {
            console.log("change fail sprite");
            if (this.enermySprite2 != undefined) {
                this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Win];
            }
            else
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Win];
        }
        if (this.elementPlayer != undefined) {
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if (this.sfxPlayer != undefined) {
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    };
    Player.prototype.onPass = function () {
        if (this.charSprite[Common_1.spriteState.Win] !== undefined) {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Win];
        }
        if (this.enermyNode !== undefined) {
            if (this.charSprite[Common_1.spriteState.EnermyLose] != undefined) {
                if (this.enermySprite != undefined) {
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyLose];
                    console.log("value of EnermyLose " + Common_1.spriteState.EnermyLose);
                    console.log("change sprite in onPass");
                }
                else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.EnermyLose];
            }
        }
        if (this.enermyNode_2 !== undefined) {
            if (this.charSprite[Common_1.spriteState.Enermy_2_Lose] != undefined) {
                if (this.enermySprite2 != undefined) {
                    this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Lose];
                }
                else
                    this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[Common_1.spriteState.Enermy_2_Lose];
            }
        }
        if (this.elementPlayer != undefined) {
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if (this.sfxPlayer != undefined) {
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    };
    Player.prototype.resetGravity = function () {
        this.rb.linearVelocity = this.initVelocity;
    };
    Player.prototype.updateNewGravity = function (newGravity) {
        if (this.rb != null) {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = newGravity;
        }
    };
    Player.prototype.updateNewLinear = function (newVelo) {
        if (this.rb != undefined) {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = new newVelo;
            this.isStartMoving = true;
        }
    };
    var Player_1;
    __decorate([
        property(cc.RigidBody)
    ], Player.prototype, "rb", void 0);
    __decorate([
        property
    ], Player.prototype, "initVelocity", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "charSprite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "aniNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermyNode_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "posForBullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "posForBullet_2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermySprite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "enermySprite2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "weaponSprite", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "force", void 0);
    __decorate([
        property
    ], Player.prototype, "forceBullet", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "positionAddForce", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxEnemyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxEnemyNode_2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "sfxPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "elementPlayer", void 0);
    __decorate([
        property
    ], Player.prototype, "isFalling", void 0);
    __decorate([
        property
    ], Player.prototype, "isHasTeleport", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "positionTele", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "spawnMulti_Obj", void 0);
    __decorate([
        property
    ], Player.prototype, "isRemove", void 0);
    Player = Player_1 = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdXN0b21DaGFyYWN0ZXJcXFBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBNkQ7QUFDN0QsNENBQXVDO0FBQ3ZDLDhDQUF5QztBQUN6QyxtQ0FBOEI7QUFDOUIsbUNBQThCO0FBR3hCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeWJDO1FBdGJHLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsYUFBTyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckMsa0JBQVksR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUVqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMs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LEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFHakM7UUFEQyxRQUFROzRDQUNpQjtJQXZEVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeWIxQjtJQUFELGFBQUM7Q0F6YkQsQUF5YkMsQ0F6Ym1DLEVBQUUsQ0FBQyxTQUFTLEdBeWIvQztrQkF6Ym9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb21tb24sIHsgaW5HYW1lU3RhdGUsIHNwcml0ZVN0YXRlIH0gZnJvbSBcIi4uL0NvbW1vblwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0dhbWVDb25maWdcIjtcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vR2FtZU1hbmFnZXJcIjtcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XG5pbXBvcnQgRW5lcm15IGZyb20gXCIuL0VuZXJteVwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gICAgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XG4gICAgZGVsYXlUaW1lOiBudW1iZXIgPSAwO1xuICAgIGlzU3RhcnRNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbml0UG9zOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoMCwgMCk7XG4gICAgQHByb3BlcnR5XG4gICAgaW5pdFZlbG9jaXR5OiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNoYXJTcHJpdGU6Y2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFuaU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZXJteU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZXJteU5vZGVfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXG4gICAgcG9zRm9yQnVsbGV0OiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBwb3NGb3JCdWxsZXRfMjogY2MuVmVjMiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZW5lcm15U3ByaXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmVybXlTcHJpdGUyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3ZWFwb25TcHJpdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIGZvcmNlOiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBmb3JjZUJ1bGxldDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBwb3NpdGlvbkFkZEZvcmNlOiBjYy5WZWMyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZnhFbmVteU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNmeEVuZW15Tm9kZV8yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzZnhQbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVsZW1lbnRQbGF5ZXI6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgaXNGYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5XG4gICAgaXNIYXNUZWxlcG9ydDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIHBvc2l0aW9uVGVsZTogY2MuVmVjMiA9IG51bGw7XG4gICAgc3RhcnRMZXZlbEFuaW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzcGF3bk11bHRpX09iajogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGlzUmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIF9pbnM6IFBsYXllcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zIHx8IG5ldyBQbGF5ZXI7XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub24oQ29tbW9uLmluc3RhbmNlLlN0YXJ0TW92aW5nRXZlbnQsIHRoaXMuc3RhcnRNb3ZpbmcsIHRoaXMpO1xuICAgICAgICBDb21tb24uaW5zdGFuY2Uubm9kZS5vbihDb21tb24uaW5zdGFuY2UuUGFzc0xldmVsRXZlbnQsdGhpcy5vblBhc3MsdGhpcyk7XG4gICAgICAgIENvbW1vbi5pbnN0YW5jZS5ub2RlLm9uKENvbW1vbi5pbnN0YW5jZS5GYWlsTGV2ZWxFdmVudCx0aGlzLm9uRmFpbCx0aGlzKTtcbiAgICAgICAgLy90aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydEFib3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuXG4gICAgfVxuICAgIG9uVG91Y2hTdGFydEFib3ZlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBoYXMgRXZlbnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpLmNvbnRhaW5zKGxvY2FsUG9zKSkge1xuICAgICAgICAgICAgLy8gWOG7rSBsw70gc+G7sSBraeG7h24gY2hvIMSR4buRaSB0xrDhu6NuZyDhu58gdHLDqm5cbiAgICAgICAgICAgIC8vZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhY2tncm91bmQgaGFzIEV2ZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIE5nxINuIGNo4bq3biBz4buxIGtp4buHbiBsYW4gdOG7j2EgbMOqbiDEkeG7kWkgdMaw4bujbmcgZMaw4bubaVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5TdGFydE1vdmluZ0V2ZW50LCB0aGlzLnN0YXJ0TW92aW5nLCB0aGlzKTtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5QYXNzTGV2ZWxFdmVudCx0aGlzLm9uUGFzcyx0aGlzKTtcbiAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUub2ZmKENvbW1vbi5pbnN0YW5jZS5GYWlsTGV2ZWxFdmVudCx0aGlzLm9uRmFpbCx0aGlzKTtcbiAgICB9XG4gICAgY291bnRlcjogbnVtYmVyID0gMDtcbiAgICBzdGFydE1vdmluZygpXG4gICAge1xuXG4gICAgICAgIGlmKHRoaXMuc2Z4RW5lbXlOb2RlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnNmeEVuZW15Tm9kZS5hY3RpdmUgPSAhdGhpcy5zZnhFbmVteU5vZGUuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2Z4RW5lbXlOb2RlXzIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuc2Z4RW5lbXlOb2RlXzIuYWN0aXZlID0gIXRoaXMuc2Z4RW5lbXlOb2RlXzIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmIgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgdGhpcy5yYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSB0aGlzLmluaXRWZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZWxheVRpbWUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5saW5lTWdyLnRpbWVDaGVja2luZztcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZW5lcm15Tm9kZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHJiRW5lcm15ID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgbGV0IGVuZXJteUNvbSA9IHRoaXMuZW5lcm15Tm9kZS5nZXRDb21wb25lbnQoRW5lcm15KTtcblxuICAgICAgICAgICAgaWYocmJFbmVybXkgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIGlmICghZW5lcm15Q29tLmdldElzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMuYnVsbGV0ICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHRoaXMuQWRkZEZvcmNlRm9yQnVsbGV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkFkZEZvcmNlRm9yRW5lcm15KCk7XG4gICAgICAgICAgICB0aGlzLk1vdmluZ0VuZXJteSgpO1xuICAgICAgICAgICAgdGhpcy5vblNwYXduTXVsdGkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVuZXJteU5vZGVfMiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHJiRW5lcm15ID0gdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlbmVybXlDb20gPSB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoRW5lcm15KTtcblxuICAgICAgICAgICAgaWYocmJFbmVybXkgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIGlmICghZW5lcm15Q29tLmdldElzRmFsbGluZyl7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15LmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIHRoaXMuYnVsbGV0ICE9IHVuZGVmaW5lZCApe1xuICAgICAgICAgICAgICAgIHRoaXMuQWRkZEZvcmNlRm9yQnVsbGV0MigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5BZGRGb3JjZUZvckVuZXJteTIoKTtcbiAgICAgICAgICAgIHRoaXMuTW92aW5nRW5lcm15MigpO1xuICAgICAgICAgICAgdGhpcy5vblNwYXduTXVsdGkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHRoaXMud2VhcG9uU3ByaXRlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldlYXBvbl0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy53ZWFwb25TcHJpdGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldlYXBvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGFydExldmVsQW5pbSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGV2ZWxBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgTW92aW5nRW5lcm15KCk6IHZvaWR7XG4gICAgICAgIFxuICAgICAgICBsZXQgeCA9IHRoaXMubm9kZS5wb3NpdGlvbi54IC0gdGhpcy5lbmVybXlOb2RlLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCBlbmVybXlOb2RlQ29tID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChFbmVybXkpO1xuICAgICAgICBpZiAoIGVuZXJteU5vZGVDb20gIT0gbnVsbCApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBvZiBoYXNNb3ZlOiBcIiArIGVuZXJteU5vZGVDb20uaGFzTW92ZSk7XG4gICAgICAgICAgICBpZiAoIGVuZXJteU5vZGVDb20uaGFzTW92ZSl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHg6IFwiKyB4KTtcbiAgICAgICAgICAgICAgICBlbmVybXlOb2RlQ29tLnNldERpciA9IG5ldyBjYy5WZWMyKHgsMCk7XG4gICAgICAgICAgICAgICAgZW5lcm15Tm9kZUNvbS5zZXRJc01vdmluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgTW92aW5nRW5lcm15MigpOiB2b2lke1xuICAgICAgICBcbiAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCBlbmVybXlOb2RlQ29tID0gdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KEVuZXJteSk7XG4gICAgICAgIGlmICggZW5lcm15Tm9kZUNvbSAhPSBudWxsICl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIGhhc01vdmUyOiBcIisgZW5lcm15Tm9kZUNvbS5oYXNNb3ZlKTtcbiAgICAgICAgICAgIGlmICggZW5lcm15Tm9kZUNvbS5oYXNNb3ZlKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHgyOiBcIisgeCk7XG4gICAgICAgICAgICAgICAgZW5lcm15Tm9kZUNvbS5zZXREaXIgPSBuZXcgY2MuVmVjMih4LDApO1xuICAgICAgICAgICAgICAgIGVuZXJteU5vZGVDb20uc2V0SXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEFkZEZvcmNlRm9yRW5lcm15KCk6IHZvaWR7XG4gICAgICAgIFxuICAgICAgICBsZXQgZW5lcm15Tm9kZUNvbSA9IHRoaXMuZW5lcm15Tm9kZS5nZXRDb21wb25lbnQoRW5lcm15KTtcbiAgICAgICAgaWYgKCBlbmVybXlOb2RlQ29tICE9IG51bGwgKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gaW4gZW5lcm15Q29tXCIpO1xuICAgICAgICAgICBpZiAoZW5lcm15Tm9kZUNvbS5nZXRJc0F0dGFjayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnkgLSB0aGlzLmVuZXJteU5vZGUucG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBsZXQgcmJFbmVybXlOb2RlID0gdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgICAgIGlmIChyYkVuZXJteU5vZGUgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJiIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbkFkZEZvcmNlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgRm9yY2UgaW4gcG9zaXRpb25BZGRGb3JjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJiRW5lcm15Tm9kZS5hcHBseUZvcmNlKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZS54LHkqdGhpcy5mb3JjZS55KSwgdGhpcy5wb3NpdGlvbkFkZEZvcmNlLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJiRW5lcm15Tm9kZS5hcHBseUZvcmNlVG9DZW50ZXIobmV3IGNjLlZlYzIoeCp0aGlzLmZvcmNlLngseSp0aGlzLmZvcmNlLnkpLHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIEFkZEZvcmNlRm9yRW5lcm15MigpOiB2b2lke1xuICAgICAgICBcbiAgICAgICAgbGV0IGVuZXJteU5vZGVDb20gPSB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoRW5lcm15KTtcbiAgICAgICAgaWYgKCBlbmVybXlOb2RlQ29tICE9IG51bGwgKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ28gaW4gZW5lcm15Q29tXCIpO1xuICAgICAgICAgICBpZiAoZW5lcm15Tm9kZUNvbS5nZXRJc0F0dGFjayl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLm5vZGUucG9zaXRpb24ueCAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSAtIHRoaXMuZW5lcm15Tm9kZV8yLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgbGV0IHJiRW5lcm15Tm9kZSA9IHRoaXMuZW5lcm15Tm9kZV8yLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICAgICAgICAgIGlmIChyYkVuZXJteU5vZGUgIT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJiIGlzIG5vdCBudWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICByYkVuZXJteU5vZGUuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZS54LHkqdGhpcy5mb3JjZS55KSx0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFN0b3BFbmVybXlNb3ZpbmcoKTogdm9pZHtcbiAgICAgICAgbGV0IGVuZXJteU5vZGVDb20gPSB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KEVuZXJteSk7XG4gICAgICAgIGlmICggZW5lcm15Tm9kZUNvbSAhPSBudWxsKXtcbiAgICAgICAgICAgIGVuZXJteU5vZGVDb20uc2V0SXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgQWRkZEZvcmNlRm9yQnVsbGV0KCk6IHZvaWR7XG4gICAgICAgIGlmKCB0aGlzLmVuZXJteU5vZGUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmaXJlIHNwcml0ZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1fYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobV9idWxsZXQpO1xuICAgICAgICBtX2J1bGxldC5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHRoaXMuZW5lcm15Tm9kZS5wb3NpdGlvbi54ICsgdGhpcy5wb3NGb3JCdWxsZXQueCwgdGhpcy5lbmVybXlOb2RlLnBvc2l0aW9uLnkgKyB0aGlzLnBvc0ZvckJ1bGxldC55LDApO1xuICAgICAgICBsZXQgbV9idWxsZXRDb21wID0gbV9idWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XG4gICAgICAgIGxldCB4ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnggLSBtX2J1bGxldC5wb3NpdGlvbi54O1xuICAgICAgICBsZXQgeSA9IHRoaXMubm9kZS5wb3NpdGlvbi55IC0gbV9idWxsZXQucG9zaXRpb24ueTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGQgRm9yY2VcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZSBvZiBidWxsZXQgbm9kZTogXCIgKyBtX2J1bGxldC5uYW1lKTtcbiAgICAgICAgbV9idWxsZXRDb21wLkFkZEZvcmNlKG5ldyBjYy5WZWMyKHgqdGhpcy5mb3JjZUJ1bGxldCx5KnRoaXMuZm9yY2VCdWxsZXQpKTtcbiAgICB9XG4gICAgQWRkZEZvcmNlRm9yQnVsbGV0MigpOiB2b2lke1xuICAgICAgICBpZiggdGhpcy5lbmVybXlOb2RlXzIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIHNwcml0ZUVuZXJteTogXCIgKyBzcHJpdGVTdGF0ZS5FbmVybXlGaXJlKTtcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15RmlyZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmaXJlIHNwcml0ZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGVfMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlGaXJlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbV9idWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtX2J1bGxldCk7XG4gICAgICAgIG1fYnVsbGV0LnBvc2l0aW9uID0gbmV3IGNjLlZlYzModGhpcy5lbmVybXlOb2RlXzIucG9zaXRpb24ueCArIHRoaXMucG9zRm9yQnVsbGV0XzIueCwgdGhpcy5lbmVybXlOb2RlXzIucG9zaXRpb24ueSArIHRoaXMucG9zRm9yQnVsbGV0XzIueSwwKTtcbiAgICAgICAgbGV0IG1fYnVsbGV0Q29tcCA9IG1fYnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xuICAgICAgICBsZXQgeCA9IHRoaXMubm9kZS5wb3NpdGlvbi54IC0gbV9idWxsZXQucG9zaXRpb24ueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLm5vZGUucG9zaXRpb24ueSAtIG1fYnVsbGV0LnBvc2l0aW9uLnk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIEZvcmNlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWUgb2YgYnVsbGV0IG5vZGU6IFwiICsgbV9idWxsZXQubmFtZSk7XG4gICAgICAgIG1fYnVsbGV0Q29tcC5BZGRGb3JjZShuZXcgY2MuVmVjMih4KnRoaXMuZm9yY2VCdWxsZXQseSp0aGlzLmZvcmNlQnVsbGV0KSk7XG4gICAgfVxuXG4gICAgb25TcGF3bk11bHRpKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZW5lcm15Tm9kZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5zcGF3bk11bHRpX09iaiE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnVnIGlzIGhlcmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG11bHRpT2JqID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGF3bk11bHRpX09iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlLmFkZENoaWxkKG11bHRpT2JqKTtcbiAgICAgICAgICAgIH0sMC41LCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5lbmVybXlOb2RlXzIgIT0gdW5kZWZpbmVkICYmIHRoaXMuc3Bhd25NdWx0aV9PYmohPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbXVsdGlPYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNwYXduTXVsdGlfT2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGVfMi5hZGRDaGlsZChtdWx0aU9iaik7XG4gICAgICAgICAgICB9LDAuNSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0OiBudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzU3RhcnRNb3ZpbmcgPT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHRoaXMuY291bnRlciArPSBkdDtcbiAgICAgICAgaWYodGhpcy5jb3VudGVyID49IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyIC0tO1xuICAgICAgICAgICAgaWYodGhpcy5kZWxheVRpbWUgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRlbGVwb3J0KCk6dm9pZHtcbiAgICAgICAgaWYgKHRoaXMuaXNIYXNUZWxlcG9ydCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMucG9zaXRpb25UZWxlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKHRoaXMucG9zaXRpb25UZWxlLngsIHRoaXMucG9zaXRpb25UZWxlLnksMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmFwcGx5Rm9yY2VUb0NlbnRlcihuZXcgY2MuVmVjMig1MCwwKSx0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLHNlbGYpXG4gICAge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5nYW1lU3RhdGUgIT0gaW5HYW1lU3RhdGUuQ0hFQ0tJTkcpIHJldHVybjtcblxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiVGFyZ2V0XCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gVGFyZ2V0IHBhc3NcIik7XG4gICAgICAgICAgICB0aGlzLlRlbGVwb3J0KCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9IGluR2FtZVN0YXRlLkNPTVBMRVRFRFxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgQ29tbW9uLmluc3RhbmNlLm5vZGUuZW1pdChcIlBhc3NMZXZlbEV2ZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJFbmVteVwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluIEVuZXJteSBsb3NzXCIpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5nYW1lU3RhdGUgPSBpbkdhbWVTdGF0ZS5GQUlMRUQ7XG4gICAgICAgICAgIC8vdGhpcy5Nb3ZpbmdFbmVybXkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1bGxldFwiKSAhPSBudWxsKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1bGxldFwiKS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwiTGluZVwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlkZSB3aXRoIGxpbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3RoZXIubm9kZS5uYW1lID09IFwiTGluZVwiICYmICFHYW1lTWFuYWdlci5pbnN0YW5jZS5saW5lTWdyLmlzQ2FuVG91Y2hEcmF3TGluZSlcbiAgICAgICAge1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5nYW1lU3RhdGUgPSBpbkdhbWVTdGF0ZS5GQUlMRUQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZhaWwoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkxvc2VdICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuTG9zZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5pc1JlbW92ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlXaW5dICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgZmFpbCBzcHJpdGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmVuZXJteVNwcml0ZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJteVNwcml0ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlXaW5dO1xuXG4gICAgICAgICAgICAgICAgfWVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteVdpbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9XaW5dICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBmYWlsIHNwcml0ZVwiKTtcbiAgICAgICAgICAgIGlmICggdGhpcy5lbmVybXlTcHJpdGUyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlTcHJpdGUyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteV8yX1dpbl07XG5cbiAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVybXlOb2RlXzIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15XzJfV2luXTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVsZW1lbnRQbGF5ZXIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFBsYXllci5hY3RpdmUgPSAhdGhpcy5lbGVtZW50UGxheWVyLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnNmeFBsYXllciAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5zZnhQbGF5ZXIuYWN0aXZlID0gIXRoaXMuc2Z4UGxheWVyLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFzcygpXG4gICAge1xuICAgICAgICBpZih0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuV2luXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLldpbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKCB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15TG9zZV0gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuZW5lcm15U3ByaXRlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15U3ByaXRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteUxvc2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG9mIEVuZXJteUxvc2UgXCIgKyBzcHJpdGVTdGF0ZS5FbmVybXlMb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2Ugc3ByaXRlIGluIG9uUGFzc1wiKTtcbiAgICAgICAgICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJteU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmNoYXJTcHJpdGVbc3ByaXRlU3RhdGUuRW5lcm15TG9zZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuZW5lcm15Tm9kZV8yICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYoIHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9Mb3NlXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5lbmVybXlTcHJpdGUyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15U3ByaXRlMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2hhclNwcml0ZVtzcHJpdGVTdGF0ZS5FbmVybXlfMl9Mb3NlXTtcblxuICAgICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcm15Tm9kZV8yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5jaGFyU3ByaXRlW3Nwcml0ZVN0YXRlLkVuZXJteV8yX0xvc2VdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZWxlbWVudFBsYXllciAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50UGxheWVyLmFjdGl2ZSA9ICF0aGlzLmVsZW1lbnRQbGF5ZXIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2Z4UGxheWVyICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnNmeFBsYXllci5hY3RpdmUgPSAhdGhpcy5zZnhQbGF5ZXIuYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0R3Jhdml0eSgpXG4gICAge1xuICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gdGhpcy5pbml0VmVsb2NpdHk7XG4gICAgfVxuXG4gICAgdXBkYXRlTmV3R3Jhdml0eShuZXdHcmF2aXR5OiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5yYiAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJiLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gbmV3R3Jhdml0eTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU5ld0xpbmVhcihuZXdWZWxvKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5yYiAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBuZXcgbmV3VmVsbztcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydE1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/SettingGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bb1cj/TUdMHqkW2/vTs035', 'SettingGroup');
// Script/UI/SettingGroup.ts

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
var SoundManager_1 = require("./SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingGroup = /** @class */ (function (_super) {
    __extends(SettingGroup, _super);
    function SettingGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnSetting = null;
        _this.btnBGM = null;
        _this.btnSoundEffect = null;
        _this.btnShake = null;
        _this.btnBGM_OnOff = [];
        _this.btnSoundEffect_OnOff = [];
        _this.btnShake_OnOff = [];
        _this.btnLayout = null;
        _this.showTween = new cc.Tween();
        _this.isShow = false;
        _this.isBGM = true;
        _this.isSoundEffect = true;
        _this.isShake = true;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    SettingGroup.prototype.start = function () {
        this.btnSetting.on('click', this.showListBtn, this);
        this.btnBGM.on('click', this.onBtnBGM, this);
        this.btnSoundEffect.on('click', this.onBtnSound, this);
        this.btnShake.on('click', this.onBtnShake, this);
    };
    SettingGroup.prototype.showListBtn = function () {
        this.isShow = !this.isShow;
        if (this.isShow) {
            this.showTween.stop();
            this.showTween =
                cc.tween(this.btnLayout)
                    .to(0.25, { position: cc.Vec2.ZERO }, { easing: 'linear' })
                    .start();
        }
        else {
            this.showTween.stop();
            this.showTween =
                cc.tween(this.btnLayout)
                    .to(0.25, { position: cc.v2(0, 500) }, { easing: 'linear' })
                    .start();
        }
    };
    SettingGroup.prototype.onBtnBGM = function () {
        this.isBGM = !this.isBGM;
        this.btnBGM.getComponent(cc.Sprite).spriteFrame = this.btnBGM_OnOff[!this.isBGM ? 1 : 0];
        SoundManager_1.default.instance.SetOnOffBackgroundMusic(this.isBGM);
    };
    SettingGroup.prototype.onBtnSound = function () {
        this.isSoundEffect = !this.isSoundEffect;
        this.btnSoundEffect.getComponent(cc.Sprite).spriteFrame = this.btnSoundEffect_OnOff[!this.isSoundEffect ? 1 : 0];
        SoundManager_1.default.instance.SetOnOffSoundEffect(this.isSoundEffect);
    };
    SettingGroup.prototype.onBtnShake = function () {
        this.isShake = !this.isShake;
        this.btnShake.getComponent(cc.Sprite).spriteFrame = this.btnShake_OnOff[!this.isShake ? 1 : 0];
    };
    __decorate([
        property(cc.Node)
    ], SettingGroup.prototype, "btnSetting", void 0);
    __decorate([
        property(cc.Node)
    ], SettingGroup.prototype, "btnBGM", void 0);
    __decorate([
        property(cc.Node)
    ], SettingGroup.prototype, "btnSoundEffect", void 0);
    __decorate([
        property(cc.Node)
    ], SettingGroup.prototype, "btnShake", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SettingGroup.prototype, "btnBGM_OnOff", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SettingGroup.prototype, "btnSoundEffect_OnOff", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SettingGroup.prototype, "btnShake_OnOff", void 0);
    __decorate([
        property(cc.Node)
    ], SettingGroup.prototype, "btnLayout", void 0);
    SettingGroup = __decorate([
        ccclass
    ], SettingGroup);
    return SettingGroup;
}(cc.Component));
exports.default = SettingGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSVxcU2V0dGluZ0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUVwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXFGQztRQWxGRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBR3BDLDBCQUFvQixHQUFxQixFQUFFLENBQUM7UUFHNUMsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFhLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixhQUFPLEdBQVksSUFBSSxDQUFDOztRQXVEaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFyREcsd0JBQXdCO0lBQ3hCLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMs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QVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhEQUNtQjtJQUc1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2dCO0lBeEJqQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUZoQztJQUFELG1CQUFDO0NBckZELEFBcUZDLENBckZ5QyxFQUFFLENBQUMsU0FBUyxHQXFGckQ7a0JBckZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi9Tb3VuZE1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nR3JvdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5CR006IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU291bmRFZmZlY3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuU2hha2U6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGJ0bkJHTV9Pbk9mZjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGJ0blNvdW5kRWZmZWN0X09uT2ZmOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgYnRuU2hha2VfT25PZmY6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYnRuTGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHNob3dUd2VlbjogY2MuVHdlZW4gPSBuZXcgY2MuVHdlZW4oKTtcbiAgICBwcml2YXRlIGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNCR006IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgaXNTb3VuZEVmZmVjdDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpc1NoYWtlOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmJ0blNldHRpbmcub24oJ2NsaWNrJywgdGhpcy5zaG93TGlzdEJ0bix0aGlzKTtcbiAgICAgICAgdGhpcy5idG5CR00ub24oJ2NsaWNrJyx0aGlzLm9uQnRuQkdNLHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blNvdW5kRWZmZWN0Lm9uKCdjbGljaycsdGhpcy5vbkJ0blNvdW5kLHRoaXMpO1xuICAgICAgICB0aGlzLmJ0blNoYWtlLm9uKCdjbGljaycsIHRoaXMub25CdG5TaGFrZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0xpc3RCdG4oKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc1Nob3cgPSAhdGhpcy5pc1Nob3c7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvdylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zaG93VHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93VHdlZW4gPVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuTGF5b3V0KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwge3Bvc2l0aW9uOiBjYy5WZWMyLlpFUk99LCB7ZWFzaW5nOiAnbGluZWFyJ30pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNob3dUd2Vlbi5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dUd2VlbiA9XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5MYXlvdXQpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjI1LCB7cG9zaXRpb246IGNjLnYyKDAsIDUwMCl9LCB7ZWFzaW5nOiAnbGluZWFyJ30pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBvbkJ0bkJHTSgpXG4gICAge1xuICAgICAgICB0aGlzLmlzQkdNID0gIXRoaXMuaXNCR007XG4gICAgICAgIHRoaXMuYnRuQkdNLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5idG5CR01fT25PZmZbIXRoaXMuaXNCR00gPyAxOiAwXTtcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLlNldE9uT2ZmQmFja2dyb3VuZE11c2ljKHRoaXMuaXNCR00pO1xuICAgIH1cbiAgICBvbkJ0blNvdW5kKClcbiAgICB7XG4gICAgICAgIHRoaXMuaXNTb3VuZEVmZmVjdCA9ICF0aGlzLmlzU291bmRFZmZlY3Q7XG4gICAgICAgIHRoaXMuYnRuU291bmRFZmZlY3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJ0blNvdW5kRWZmZWN0X09uT2ZmWyF0aGlzLmlzU291bmRFZmZlY3QgPyAxOjBdO1xuICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UuU2V0T25PZmZTb3VuZEVmZmVjdCh0aGlzLmlzU291bmRFZmZlY3QpO1xuICAgIH1cblxuICAgIG9uQnRuU2hha2UoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pc1NoYWtlID0gIXRoaXMuaXNTaGFrZTtcbiAgICAgICAgdGhpcy5idG5TaGFrZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnRuU2hha2VfT25PZmZbIXRoaXMuaXNTaGFrZSA/IDE6MF07XG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DrawLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58915ODpb1NB6C/SSbwtcki', 'DrawLine');
// Script/DrawLine.ts

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
var Common_1 = require("./Common");
var GameConfig_1 = require("./GameConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DrawLine = /** @class */ (function (_super) {
    __extends(DrawLine, _super);
    function DrawLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Node)
        // canvas: cc.Node = null;
        _this.drawLine = null;
        _this.line = null;
        _this.disBtw2Points = 2;
        _this.listPoint = [];
        _this.lastPointPos = cc.v2(0, 0);
        _this.isColliderWhilePlaying = false;
        _this.positionCollide = null;
        _this.nameCollider = "";
        return _this;
    }
    DrawLine.prototype.UpdateGraphics = function () {
        this.lastPointPos = cc.v2(this.listPoint[this.listPoint.length - 1].x, this.listPoint[this.listPoint.length - 1].y);
        this.line.moveTo(this.listPoint[0].x, this.listPoint[0].y);
        this.line.lineTo(0.5 * (this.listPoint[0].x + this.listPoint[1].x), 0.5 * (this.listPoint[0].y + this.listPoint[1].y));
        for (var j = 1; j <= this.listPoint.length - 1; j++) {
            this.line.lineTo(this.listPoint[j].x, this.listPoint[j].y);
        }
        this.line.lineTo(this.lastPointPos.x, this.lastPointPos.y);
    };
    DrawLine.prototype.splice = function () {
        this.listPoint = [];
    };
    DrawLine.prototype.updateDrawPoints = function (point) {
        this.listPoint.push(point);
    };
    DrawLine.prototype.getListPoint = function () {
        return this.listPoint;
    };
    DrawLine.prototype.update = function (dt) {
        this.line.lineWidth = 10;
        this.line.clear();
        this.line.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.line.lineCap = cc.Graphics.LineCap.BUTT;
        if (this.listPoint.length <= 1) {
            return;
        }
        this.UpdateGraphics();
        this.line.stroke();
    };
    DrawLine.prototype.onCollisionEnter = function (other, self) {
        console.log("name of collision that collide with line: " + other.node.name);
        console.log("position collide another " + other.node.position);
        if (GameConfig_1.default.gameState == Common_1.inGameState.PLAYING) {
            console.log("is Playing in DrawNode");
            this.nameCollider = other.node.name;
            this.positionCollide = other.node.position;
            this.isColliderWhilePlaying = true;
        }
    };
    DrawLine.prototype.onCollisionExit = function (other, self) {
        console.log("onCollisionExit enable");
        this.isColliderWhilePlaying = false;
    };
    Object.defineProperty(DrawLine.prototype, "getIsCollideWhilePlaying", {
        get: function () {
            return this.isColliderWhilePlaying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLine.prototype, "setIsCollierWhilePlaying", {
        set: function (isCollide) {
            this.isColliderWhilePlaying = isCollide;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLine.prototype, "getNameCollider", {
        get: function () {
            return this.nameCollider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLine.prototype, "setNameCollider", {
        set: function (nameColl) {
            this.nameCollider = nameColl;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Node)
    ], DrawLine.prototype, "drawLine", void 0);
    __decorate([
        property(cc.Graphics)
    ], DrawLine.prototype, "line", void 0);
    __decorate([
        property
    ], DrawLine.prototype, "isColliderWhilePlaying", void 0);
    __decorate([
        property
    ], DrawLine.prototype, "positionCollide", void 0);
    __decorate([
        property
    ], DrawLine.prototype, "nameCollider", void 0);
    DrawLine = __decorate([
        ccclass
    ], DrawLine);
    return DrawLine;
}(cc.Component));
exports.default = DrawLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEcmF3TGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBdUM7QUFDdkMsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0ZDO1FBdEZHLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUIsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRWhELHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQVcsRUFBRSxDQUFDOztJQXFFdEMsQ0FBQztJQW5FRyxpQ0FBYyxHQUFkO1FBQ1EsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2SCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFHRCx5QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUVMLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFN0MsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQzdCO1lBQ0ksT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUMsSUFBSTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELElBQUksb0JBQVUsQ0FBQyxTQUFTLElBQUksb0JBQVcsQ0FBQyxPQUFPLEVBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMzQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUNELGtDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELHNCQUFJLDhDQUF3QjthQUE1QjtZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQXdCO2FBQTVCLFVBQTZCLFNBQWtCO1lBQzNDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBZTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFlO2FBQW5CLFVBQW9CLFFBQWdCO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBbEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRztJQVF6QjtRQURDLFFBQVE7NERBQ3VDO0lBRWhEO1FBREMsUUFBUTtxREFDdUI7SUFFaEM7UUFEQyxRQUFRO2tEQUN5QjtJQW5CakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdGNUI7SUFBRCxlQUFDO0NBeEZELEFBd0ZDLENBeEZxQyxFQUFFLENBQUMsU0FBUyxHQXdGakQ7a0JBeEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5HYW1lU3RhdGUgfSBmcm9tIFwiLi9Db21tb25cIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBjYW52YXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyYXdMaW5lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgbGluZTogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgZGlzQnR3MlBvaW50czogbnVtYmVyID0gMjtcblxuICAgIGxpc3RQb2ludDogY2MuVmVjMltdID0gW107XG5cbiAgICBsYXN0UG9pbnRQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIGlzQ29sbGlkZXJXaGlsZVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHlcbiAgICBwb3NpdGlvbkNvbGxpZGU6IGNjLlZlYzMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbmFtZUNvbGxpZGVyOiBzdHJpbmcgPSBcIlwiO1xuICAgXG4gICAgVXBkYXRlR3JhcGhpY3MoKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb2ludFBvcyA9IGNjLnYyKHRoaXMubGlzdFBvaW50W3RoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDFdLngsIHRoaXMubGlzdFBvaW50W3RoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDFdLnkpO1xuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGluZS5tb3ZlVG8odGhpcy5saXN0UG9pbnRbMF0ueCwgdGhpcy5saXN0UG9pbnRbMF0ueSk7XG4gICAgICAgICAgICB0aGlzLmxpbmUubGluZVRvKDAuNSAqICh0aGlzLmxpc3RQb2ludFswXS54ICsgdGhpcy5saXN0UG9pbnRbMV0ueCksIDAuNSAqICh0aGlzLmxpc3RQb2ludFswXS55ICsgdGhpcy5saXN0UG9pbnRbMV0ueSkpO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgdGhpcy5saW5lLmxpbmVUbyh0aGlzLmxpc3RQb2ludFtqXS54LCB0aGlzLmxpc3RQb2ludFtqXS55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmUubGluZVRvKHRoaXMubGFzdFBvaW50UG9zLngsIHRoaXMubGFzdFBvaW50UG9zLnkpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBzcGxpY2UoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0UG9pbnQgPSBbXTtcbiAgICB9XG5cbiAgICB1cGRhdGVEcmF3UG9pbnRzKHBvaW50OiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMubGlzdFBvaW50LnB1c2gocG9pbnQpO1xuICAgIH1cbiAgICBnZXRMaXN0UG9pbnQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFBvaW50O1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICB0aGlzLmxpbmUubGluZVdpZHRoID0gMTA7XG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmxpbmUubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgdGhpcy5saW5lLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLkJVVFQ7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxpc3RQb2ludC5sZW5ndGggPD0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVHcmFwaGljcygpXG4gICAgICAgIHRoaXMubGluZS5zdHJva2UoKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcixzZWxmKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIG9mIGNvbGxpc2lvbiB0aGF0IGNvbGxpZGUgd2l0aCBsaW5lOiBcIiArIG90aGVyLm5vZGUubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zaXRpb24gY29sbGlkZSBhbm90aGVyIFwiICsgb3RoZXIubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9PSBpbkdhbWVTdGF0ZS5QTEFZSU5HKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgUGxheWluZyBpbiBEcmF3Tm9kZVwiKTtcbiAgICAgICAgICAgIHRoaXMubmFtZUNvbGxpZGVyID0gb3RoZXIubm9kZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkNvbGxpZGUgPSBvdGhlci5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGVyV2hpbGVQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ29sbGlzaW9uRXhpdCBlbmFibGVcIik7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRlcldoaWxlUGxheWluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgZ2V0SXNDb2xsaWRlV2hpbGVQbGF5aW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29sbGlkZXJXaGlsZVBsYXlpbmc7XG4gICAgfVxuICAgIHNldCBzZXRJc0NvbGxpZXJXaGlsZVBsYXlpbmcoaXNDb2xsaWRlOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGVyV2hpbGVQbGF5aW5nID0gaXNDb2xsaWRlO1xuICAgIH1cbiAgICBnZXQgZ2V0TmFtZUNvbGxpZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVDb2xsaWRlcjtcbiAgICB9XG4gICAgc2V0IHNldE5hbWVDb2xsaWRlcihuYW1lQ29sbDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5uYW1lQ29sbGlkZXIgPSBuYW1lQ29sbDtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Prefabs/Levels/lvl7/BatScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e42f7RoziRMW5tOxHAxhjxR', 'BatScript');
// Prefabs/Levels/lvl7/BatScript.ts

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
var BatScript = /** @class */ (function (_super) {
    __extends(BatScript, _super);
    function BatScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatScript.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === "character") {
            this.node.children[0].active = true;
            return;
        }
    };
    BatScript.prototype.onCollisionExit = function (other, self) {
        if (other.node.group === "character") {
            this.node.children[0].active = false;
            return;
        }
    };
    BatScript = __decorate([
        ccclass
    ], BatScript);
    return BatScript;
}(cc.Component));
exports.default = BatScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUHJlZmFic1xcTGV2ZWxzXFxsdmw3XFxCYXRTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7O0lBZUEsQ0FBQztJQWJHLG9DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLE9BQU87U0FDVjtJQUNMLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLEtBQUssRUFBRSxJQUFJO1FBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQWRnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZTdCO0lBQUQsZ0JBQUM7Q0FmRCxBQWVDLENBZnNDLEVBQUUsQ0FBQyxTQUFTLEdBZWxEO2tCQWZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXRTY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gXCJjaGFyYWN0ZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gXCJjaGFyYWN0ZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
