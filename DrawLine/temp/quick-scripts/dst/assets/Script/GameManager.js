
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