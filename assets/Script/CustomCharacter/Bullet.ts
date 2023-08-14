const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property
    rbBullet: cc.RigidBody = null;
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
        console.log("On Bullet collide");
        if ( self.node.getParent() != null ){
            this.scheduleOnce(function()
            {
                
                this.node.removeFromParent();
            },0.1);
        }
    }
}