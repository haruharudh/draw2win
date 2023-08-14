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
    protected start(): void {
        
    }
    protected update(dt: number): void {
        if (this.isMoving){
            console.log("moving in enermy script");
            this.node.position = new cc.Vec3(this.node.position.x + this.dir.x/100,this.node.position.y + this.dir.y/100,0);
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
       
    }
}
