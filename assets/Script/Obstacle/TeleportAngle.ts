
import Common from "../Common";
import Player from "../CustomCharacter/Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    character: cc.Node = null;

    @property(cc.Node)
    tele1: cc.Node = null;

    @property(cc.Node)
    tele2: cc.Node = null;

    isStarted: boolean = false;

    countingTouch = 0;

    @property
    initVelocityTel1: cc.Vec2 = new cc.Vec2(0, 0);

    @property
    initVelocityTel2: cc.Vec2 = new cc.Vec2(0, 0);


    onLoad() {
        Common.instance.node.on(Common.instance.StartMovingEvent, this.startMoving, this);
        Common.instance.node.on(Common.instance.FailLevelEvent, this.onFailedLevel, this);
        Common.instance.node.on(Common.instance.PassLevelEvent, this.OnPassLevel, this);
        // cc.director.getPhysicsManager().enabled=true;
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |cc.PhysicsManager.DrawBits.e_jointBit |cc.PhysicsManager.DrawBits.e_shapeBit;
    }

    start() {
    }

    cb: () => void;

    update(dt: number) {
        if (!this.isStarted) return;
        if (this.character.position.y < this.tele1.position.y && this.countingTouch < 1) {
            this.character.position = new cc.Vec3(this.tele2.position.x, this.tele2.position.y);
            this.character.getComponent(Player).updateNewGravity(this.initVelocityTel2);
            this.countingTouch++;
        }

        // if (this.countingTouch > 1) {
        //     CustomEventManager.Instance.PostEvent(CustomEventManager.Instance.FailLevelEvent);
        //     GameConfig.gameState = EGameState.PLAYING;
        // }
    }

    startMoving() {
        this.isStarted = true;
    }

    onFailedLevel() {

    }

    PlayAnimCharacter(isWin) {

    }

    OnPassLevel() {
        this.PlayAnimCharacter(true);
    }
}
