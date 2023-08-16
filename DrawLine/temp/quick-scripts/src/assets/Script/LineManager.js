"use strict";
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