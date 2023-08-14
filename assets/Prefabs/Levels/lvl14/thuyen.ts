// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class thuyen extends cc.Component {

    static _ins: thuyen
    static get Instance(): thuyen {
        return this._ins || new thuyen;
    }
  


    onload(){ 
    thuyen._ins = this;
    
    }

 
}
