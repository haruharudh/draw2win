
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSVxcU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbURDO1FBaERXLHNCQUFnQixHQUFtQixJQUFJLENBQUM7UUFFeEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLHFCQUFlLEdBQW1CLEVBQUUsQ0FBQztRQUVyQyxrQkFBWSxHQUFtQixFQUFFLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQXdDNUMsQ0FBQztxQkFuRG9CLFlBQVk7SUFlN0IsNkJBQU0sR0FBTjtRQUVJLGNBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGNBQVksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsY0FBWSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLElBQWE7UUFFakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLElBQWE7UUFFN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixTQUFpQjtRQUU5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFFSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7O0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ3VCO0lBRWhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQ3FCO0lBRTlDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lEQUNvQjtJQUU3QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztzREFDaUI7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDaUI7SUFYdkIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1EaEM7SUFBRCxtQkFBQztDQW5ERCxBQW1EQyxDQW5EeUMsRUFBRSxDQUFDLFNBQVMsR0FtRHJEO2tCQW5Eb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnRcbntcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgcHJpdmF0ZSBtdXNpY0F1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIHByaXZhdGUgZWZ4QXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgcHJpdmF0ZSBkb25lTGV2ZWxTb3VuZHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxuICAgIHByaXZhdGUgZG9uZU1vdmVJdGVtOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSBjbGlja1NvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU291bmRNYW5hZ2VyO1xuXG4gICAgb25Mb2FkKClcbiAgICB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLlNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGZhbHNlKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLlNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGZhbHNlKTtcblxuICAgIH1cblxuICAgIFNldE9uT2ZmQmFja2dyb3VuZE11c2ljKGlzT246IGJvb2xlYW4pXG4gICAge1xuICAgICAgICB0aGlzLm11c2ljQXVkaW9Tb3VyY2UubXV0ZSA9ICFpc09uO1xuICAgIH1cblxuICAgIFNldE9uT2ZmU291bmRFZmZlY3QoaXNPbjogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UubXV0ZSA9ICFpc09uO1xuICAgIH1cblxuICAgIFBsYXlDbGlja1NvdW5kKClcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuY2xpY2tTb3VuZDtcbiAgICAgICAgdGhpcy5lZnhBdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgfVxuXG4gICAgUGxheURvbmVNb3ZlSXRlbShJdGVtSW5kZXg6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UuY2xpcCA9IHRoaXMuZG9uZU1vdmVJdGVtW0l0ZW1JbmRleF07XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UucGxheSgpO1xuICAgIH1cblxuICAgIFBsYXlEb25lTGV2ZWwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5lZnhBdWRpb1NvdXJjZS5jbGlwID0gdGhpcy5kb25lTGV2ZWxTb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kb25lTGV2ZWxTb3VuZHMubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuZWZ4QXVkaW9Tb3VyY2UucGxheSgpO1xuICAgIH1cbn1cbiJdfQ==