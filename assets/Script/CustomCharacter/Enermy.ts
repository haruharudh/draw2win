// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Enermy extends cc.Component {


    @property
    private isMoving: boolean = false;
    @property
    public dir: cc.Vec2 = null ;
    @property
    isAttack: boolean = false ;
    @property
    isFalling: boolean = false ;
    @property
    hasMove: boolean = false;
    @property
    isMovingUp: boolean = false;
    @property(cc.AnimationClip)
    explodeAnim: cc.AnimationClip = null;
    protected onLoad(): void {
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
    }
    protected update(dt: number): void {
        if (this.isMoving){
            console.log("moving in enermy script");
            this.node.position = new cc.Vec3(this.node.position.x + this.dir.x/100,this.node.position.y + this.dir.y/100,0);
        }
        if(this.isMovingUp){
            this.node.position = new cc.Vec3(this.node.position.x,this.node.position.y +1,0);
        }
    }
    set setDir(dir: cc.Vec2){
        this.dir = dir;
    }
    set setIsMoving(isMoving: boolean){
        this.isMoving = isMoving;
    }
    get getIsAttack(){
        return this.isAttack;
    }
    set setIsAttack(isAtt: boolean){
        this.isAttack = isAtt;
    }
    get getIsFalling(){
        return this.isFalling;
    }
    set setIsFalling(isFall:boolean){
        this.isFalling = isFall;
    }
    onCollisionEnter(other,self){
        console.log("On Enermy collide");
        if(this.isMoving){
            this.isMoving = false;
            let rb = this.node.getComponent(cc.RigidBody);
            rb.type = cc.RigidBodyType.Static;
        }
        if(this.isMovingUp){
            this.isMovingUp = false;
            let rb = this.node.getComponent(cc.RigidBody);
            rb.type = cc.RigidBodyType.Dynamic;
        }
        if (this.explodeAnim != null){
            let animCom = this.node.addComponent(cc.Animation);
            animCom.addClip(this.explodeAnim);
            animCom.play(this.explodeAnim.name);
            this.node.scale = 2;
            this.scheduleOnce(function()
            {
                this.node.removeFromParent();
            },0.416);
        }
    }
}

