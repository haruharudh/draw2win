// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class tutorialDlg extends cc.Component {

    @property(cc.Node)
    private btnClose: cc.Node = null;

    @property(cc.Node)
    private btnPlay: cc.Node = null;

    @property(cc.Node)
    private btnInvite: cc.Node = null;

    public static instance: tutorialDlg;

    protected onLoad() {
        tutorialDlg.instance = this;
    }
    start () {
        this.btnClose.on('click', this.onButtonClose, this);
        this.btnPlay.on('click', this.onButtonPlay, this);
        this.btnInvite.on('click', this.onButtonInviteFriend, this);
    }
    onButtonClose() {
        this.node.active = false;
    }

    onButtonPlay() {
        this.node.active = false;
    }

    onButtonInviteFriend() {
    }
    // update (dt) {}
}
