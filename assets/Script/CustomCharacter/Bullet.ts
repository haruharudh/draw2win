

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property
    rbBullet: cc.RigidBody = null;
    @property(cc.AnimationClip)
    explodeAnim: cc.AnimationClip = null;
    protected onLoad(): void {
        this.rbBullet = this.node.getComponent(cc.RigidBody);
    }
    public AddForce(dir: cc.Vec2): void{
        this.rbBullet = this.node.getComponent(cc.RigidBody);
        if( this.rbBullet == null){
            console.log("rbBullet is null");
            return;
        }
        this.rbBullet.applyForceToCenter(dir,true);
    }
    onCollisionEnter(other,self){
        console.log("name of collision bullet: " + other.node.name);
        console.log("On Bullet collide");
        if ( self.node.getParent() != null ){
            //let sprite = this.node.getComponent(cc.Sprite);
            this.node.scale = 2;
            //sprite.spriteFrame = null;
            if (this.explodeAnim != null ){
                let animCom = this.node.addComponent(cc.Animation);
                animCom.addClip(this.explodeAnim);
                animCom.play(this.explodeAnim.name);
            }
            this.scheduleOnce(function()
            {
                this.node.removeFromParent();
            },0.416);
        }
    }
}
