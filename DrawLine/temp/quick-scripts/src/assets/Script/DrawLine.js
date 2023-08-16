"use strict";
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