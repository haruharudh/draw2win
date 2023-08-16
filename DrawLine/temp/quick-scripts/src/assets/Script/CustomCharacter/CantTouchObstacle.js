"use strict";
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