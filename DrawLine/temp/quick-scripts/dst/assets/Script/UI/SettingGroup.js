
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