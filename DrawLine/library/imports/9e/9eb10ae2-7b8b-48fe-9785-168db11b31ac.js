"use strict";
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