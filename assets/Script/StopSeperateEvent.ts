// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StopSeperateEvent extends cc.Component {

    protected onLoad(): void {
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        //this.node.on('touchmove', this.onTouchMove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
    }

    onTouchStartAbove(event: any) {
        let localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event");

        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    }
    onTouchMove(event: any) {
        let localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event Move");

        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    }
}
