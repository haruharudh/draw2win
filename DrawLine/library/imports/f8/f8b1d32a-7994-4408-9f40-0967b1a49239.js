"use strict";
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