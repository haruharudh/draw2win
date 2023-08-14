
const {ccclass, property} = cc._decorator;
const interval = 0.07;
@ccclass
export default class QuatScript extends cc.Component {
    isOn: boolean = false;
    toggleSprites () {
        this.node.children[0].active = this.isOn;
        this.isOn = !this.isOn;
    }
    time: number = 0;
    update (dt) {
        this.time += dt;
        if (this.time > interval) {
            this.time -= interval;
            this.toggleSprites();
        }
    }
}
