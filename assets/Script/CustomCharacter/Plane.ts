import Common from "../Common";
import Player from "./Player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    spawnMulti_Obj: cc.Prefab = null;

    // update (dt) {}
      
    protected start(): void {
        Common.instance.node.on(Common.instance.StartMovingEvent,this.onSpawnMulti,this);
    }
    onSpawnMulti()
    {
            this.schedule(function ()
            {
                let multiObj = cc.instantiate(this.spawnMulti_Obj);
                this.node.addChild(multiObj);
            },0.5, cc.macro.REPEAT_FOREVER)
        
    }
}
