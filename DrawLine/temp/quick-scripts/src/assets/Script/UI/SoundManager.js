"use strict";
cc._RF.push(module, 'cb272jns7lAwqWey3R2baen', 'SoundManager');
// Script/UI/SoundManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.musicAudioSource = null;
        _this.efxAudioSource = null;
        _this.doneLevelSounds = [];
        _this.doneMoveItem = [];
        _this.clickSound = null;
        return _this;
    }
    SoundManager_1 = SoundManager;
    SoundManager.prototype.onLoad = function () {
        SoundManager_1.instance = this;
        SoundManager_1.instance.SetOnOffBackgroundMusic(false);
        SoundManager_1.instance.SetOnOffBackgroundMusic(false);
    };
    SoundManager.prototype.SetOnOffBackgroundMusic = function (isOn) {
        this.musicAudioSource.mute = !isOn;
    };
    SoundManager.prototype.SetOnOffSoundEffect = function (isOn) {
        this.efxAudioSource.mute = !isOn;
    };
    SoundManager.prototype.PlayClickSound = function () {
        this.efxAudioSource.clip = this.clickSound;
        this.efxAudioSource.play();
    };
    SoundManager.prototype.PlayDoneMoveItem = function (ItemIndex) {
        this.efxAudioSource.clip = this.doneMoveItem[ItemIndex];
        this.efxAudioSource.play();
    };
    SoundManager.prototype.PlayDoneLevel = function () {
        this.efxAudioSource.clip = this.doneLevelSounds[Math.floor(Math.random() * this.doneLevelSounds.length)];
        this.efxAudioSource.play();
    };
    var SoundManager_1;
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "musicAudioSource", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "efxAudioSource", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "doneLevelSounds", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "doneMoveItem", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SoundManager.prototype, "clickSound", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

cc._RF.pop();