"use strict";
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