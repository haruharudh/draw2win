
const {ccclass, property} = cc._decorator;

@ccclass
export default class SoundManager extends cc.Component
{
    @property(cc.AudioSource)
    private musicAudioSource: cc.AudioSource = null;
    @property(cc.AudioSource)
    private efxAudioSource: cc.AudioSource = null;
    @property([cc.AudioClip])
    private doneLevelSounds: cc.AudioClip[] = [];
    @property([cc.AudioClip])
    private doneMoveItem: cc.AudioClip[] = [];
    @property(cc.AudioClip)
    private clickSound: cc.AudioClip = null;

    public static instance: SoundManager;

    onLoad()
    {
        SoundManager.instance = this;
        SoundManager.instance.SetOnOffBackgroundMusic(false);
        SoundManager.instance.SetOnOffBackgroundMusic(false);

    }

    SetOnOffBackgroundMusic(isOn: boolean)
    {
        this.musicAudioSource.mute = !isOn;
    }

    SetOnOffSoundEffect(isOn: boolean)
    {
        this.efxAudioSource.mute = !isOn;
    }

    PlayClickSound()
    {
        this.efxAudioSource.clip = this.clickSound;
        this.efxAudioSource.play();
    }

    PlayDoneMoveItem(ItemIndex: number)
    {
        this.efxAudioSource.clip = this.doneMoveItem[ItemIndex];
        cc.audioEngine.setMusicVolume(0.3);
        this.efxAudioSource.play();
    }

    PlayDoneLevel()
    {
        this.efxAudioSource.clip = this.doneLevelSounds[Math.floor(Math.random() * this.doneLevelSounds.length)];
        let audioClip = this.efxAudioSource.clip
        cc.audioEngine.playMusic(audioClip,false);
        cc.audioEngine.setMusicVolume(0.2);
    }
}
