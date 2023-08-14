

const {ccclass, property} = cc._decorator;

@ccclass
export default class spin extends cc.Component {

  


    onLoad () {
       
    }

    start () {

    }

     update (dt) {
        this.node.rotation -= 200*dt
     }
}
