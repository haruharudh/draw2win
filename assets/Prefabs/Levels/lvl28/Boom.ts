// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Boom extends cc.Component {

    @property(cc.Node)
    animBoom: cc.Node = null;

    @property(cc.Node)
    imgBoom: cc.Node = null;
    start () {

    }

    onCollisionEnter(other,self)
    {
        this.imgBoom.active = false;
        this.animBoom.active = true;
    }
}
