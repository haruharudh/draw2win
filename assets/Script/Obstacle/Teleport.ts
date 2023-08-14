import Common, { inGameState } from "../Common";
import GameConfig from "../GameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Teleport extends cc.Component {

    @property(cc.RigidBody)
    character: cc.RigidBody = null;

    @property(cc.Node)
    left: cc.Node = null;

    @property(cc.Node)
    right: cc.Node = null;

    @property([cc.SpriteFrame])
    SpriteFrameList: cc.SpriteFrame[] = [];




    isStarted: boolean = false;
    pos : cc.Vec3 = null;
    countingTouch = 0;


    onLoad() {
        Common.instance.node.on(Common.instance.StartMovingEvent, this.startMoving, this);
        Common.instance.node.on(Common.instance.FailLevelEvent, this.onFailedLevel, this);
        Common.instance.node.on(Common.instance.PassLevelEvent, this.OnPassLevel, this);

    }

    start() {
    }

    private isLeft: boolean = true;

    update(dt: number) {
        let self = this;
        if (this.character.node.position.y <= this.right.position.y) {
            
            let newPos = this.isLeft? new cc.Vec3(this.right.position) : new cc.Vec3(this.left.position);
            
            this.character.node.position = newPos;
            
            console.log( " vi tri :" + newPos)
            // this.unknow = this.SpriteFrameList[1]
            this.character.linearVelocity = cc.v2(0, 500);
            this.isLeft = !this.isLeft;


            
            if (this.isStarted) {
                this.countingTouch++;
            }
        }

        
        if (this.countingTouch > 1) {
            if (GameConfig.gameState == inGameState.CHECKING) {
                GameConfig.gameState = inGameState.FAILED;
            }
        }

    }

    startMoving() {
        this.isStarted = true;
        this.countingTouch = 0
    }

    onFailedLevel() {

    }

    OnPassLevel() {
    }
}
