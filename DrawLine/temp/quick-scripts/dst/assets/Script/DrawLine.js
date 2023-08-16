
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEcmF3TGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBdUM7QUFDdkMsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd0ZDO1FBdEZHLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFNUIsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBRWhELHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQVcsRUFBRSxDQUFDOztJQXFFdEMsQ0FBQztJQW5FRyxpQ0FBYyxHQUFkO1FBQ1EsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFB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LDhDQUF3QjthQUE1QjtZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQXdCO2FBQTVCLFVBQTZCLFNBQWtCO1lBQzNDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBZTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFlO2FBQW5CLFVBQW9CLFFBQWdCO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBbEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQ0FDRztJQVF6QjtRQURDLFFBQVE7NERBQ3VDO0lBRWhEO1FBREMsUUFBUTtxREFDdUI7SUFFaEM7UUFEQyxRQUFRO2tEQUN5QjtJQW5CakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdGNUI7SUFBRCxlQUFDO0NBeEZELEFBd0ZDLENBeEZxQyxFQUFFLENBQUMsU0FBUyxHQXdGakQ7a0JBeEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5HYW1lU3RhdGUgfSBmcm9tIFwiLi9Db21tb25cIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBjYW52YXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyYXdMaW5lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgbGluZTogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgZGlzQnR3MlBvaW50czogbnVtYmVyID0gMjtcblxuICAgIGxpc3RQb2ludDogY2MuVmVjMltdID0gW107XG5cbiAgICBsYXN0UG9pbnRQb3M6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIGlzQ29sbGlkZXJXaGlsZVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAcHJvcGVydHlcbiAgICBwb3NpdGlvbkNvbGxpZGU6IGNjLlZlYzMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbmFtZUNvbGxpZGVyOiBzdHJpbmcgPSBcIlwiO1xuICAgXG4gICAgVXBkYXRlR3JhcGhpY3MoKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb2ludFBvcyA9IGNjLnYyKHRoaXMubGlzdFBvaW50W3RoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDFdLngsIHRoaXMubGlzdFBvaW50W3RoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDFdLnkpO1xuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGluZS5tb3ZlVG8odGhpcy5saXN0UG9pbnRbMF0ueCwgdGhpcy5saXN0UG9pbnRbMF0ueSk7XG4gICAgICAgICAgICB0aGlzLmxpbmUubGluZVRvKDAuNSAqICh0aGlzLmxpc3RQb2ludFswXS54ICsgdGhpcy5saXN0UG9pbnRbMV0ueCksIDAuNSAqICh0aGlzLmxpc3RQb2ludFswXS55ICsgdGhpcy5saXN0UG9pbnRbMV0ueSkpO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMubGlzdFBvaW50Lmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgdGhpcy5saW5lLmxpbmVUbyh0aGlzLmxpc3RQb2ludFtqXS54LCB0aGlzLmxpc3RQb2ludFtqXS55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmUubGluZVRvKHRoaXMubGFzdFBvaW50UG9zLngsIHRoaXMubGFzdFBvaW50UG9zLnkpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBzcGxpY2UoKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0UG9pbnQgPSBbXTtcbiAgICB9XG5cbiAgICB1cGRhdGVEcmF3UG9pbnRzKHBvaW50OiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMubGlzdFBvaW50LnB1c2gocG9pbnQpO1xuICAgIH1cbiAgICBnZXRMaXN0UG9pbnQoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFBvaW50O1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICB0aGlzLmxpbmUubGluZVdpZHRoID0gMTA7XG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xuICAgICAgICB0aGlzLmxpbmUubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgdGhpcy5saW5lLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLkJVVFQ7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxpc3RQb2ludC5sZW5ndGggPD0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVHcmFwaGljcygpXG4gICAgICAgIHRoaXMubGluZS5zdHJva2UoKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcixzZWxmKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lIG9mIGNvbGxpc2lvbiB0aGF0IGNvbGxpZGUgd2l0aCBsaW5lOiBcIiArIG90aGVyLm5vZGUubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zaXRpb24gY29sbGlkZSBhbm90aGVyIFwiICsgb3RoZXIubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmdhbWVTdGF0ZSA9PSBpbkdhbWVTdGF0ZS5QTEFZSU5HKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgUGxheWluZyBpbiBEcmF3Tm9kZVwiKTtcbiAgICAgICAgICAgIHRoaXMubmFtZUNvbGxpZGVyID0gb3RoZXIubm9kZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkNvbGxpZGUgPSBvdGhlci5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgdGhpcy5pc0NvbGxpZGVyV2hpbGVQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ29sbGlzaW9uRXhpdCBlbmFibGVcIik7XG4gICAgICAgIHRoaXMuaXNDb2xsaWRlcldoaWxlUGxheWluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgZ2V0SXNDb2xsaWRlV2hpbGVQbGF5aW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29sbGlkZXJXaGlsZVBsYXlpbmc7XG4gICAgfVxuICAgIHNldCBzZXRJc0NvbGxpZXJXaGlsZVBsYXlpbmcoaXNDb2xsaWRlOiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5pc0NvbGxpZGVyV2hpbGVQbGF5aW5nID0gaXNDb2xsaWRlO1xuICAgIH1cbiAgICBnZXQgZ2V0TmFtZUNvbGxpZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVDb2xsaWRlcjtcbiAgICB9XG4gICAgc2V0IHNldE5hbWVDb2xsaWRlcihuYW1lQ29sbDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5uYW1lQ29sbGlkZXIgPSBuYW1lQ29sbDtcbiAgICB9XG59XG5cbiJdfQ==