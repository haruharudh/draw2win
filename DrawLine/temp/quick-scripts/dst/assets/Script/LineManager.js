
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