
import Common, { inGameState, spriteState } from "../Common";
import GameConfig from "../GameConfig";
import GameManager from "../GameManager";
import Bullet from "./Bullet";
import Enermy from "./Enermy";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.RigidBody)
    rb: cc.RigidBody = null;
    delayTime: number = 0;
    isStartMoving: boolean = false;
    initPos: cc.Vec3 = new cc.Vec3(0, 0);
    @property
    initVelocity: cc.Vec2 = new cc.Vec2(0, 0);
    @property(cc.SpriteFrame)
    charSprite:cc.SpriteFrame[] = [];
    @property(cc.Node)
    aniNode: cc.Node = null;
    @property(cc.Node)
    enermyNode: cc.Node = null;
    @property(cc.Node)
    enermyNode_2: cc.Node = null;
    @property(cc.Prefab)
    bullet: cc.Prefab = null;
    @property(cc.Vec2)
    posForBullet: cc.Vec2 = null;
    @property(cc.Vec2)
    posForBullet_2: cc.Vec2 = null;
    @property(cc.Node)
    enermySprite: cc.Node = null;
    @property(cc.Node)
    enermySprite2: cc.Node = null;
    @property(cc.Node)
    weaponSprite: cc.Node = null;
    @property(cc.Vec2)
    force: cc.Vec2 = null;
    @property
    forceBullet: number = 0;
    @property(cc.Vec2)
    positionAddForce: cc.Vec2 = null;
    @property(cc.Node)
    sfxEnemyNode: cc.Node = null;
    @property(cc.Node)
    sfxEnemyNode_2: cc.Node = null;
    @property(cc.Node)
    sfxPlayer: cc.Node = null;
    @property(cc.Node)
    elementPlayer:cc.Node = null;
    @property
    isFalling: boolean = false;
    @property
    isHasTeleport: boolean = false;
    @property(cc.Vec2)
    positionTele: cc.Vec2 = null;
    startLevelAnim: cc.Node = null;

    @property
    isRemove: boolean = false;

    public static _ins: Player;
    public static get instance(): Player {
        return this._ins || new Player;
    }

    onLoad () {
        Common.instance.node.on(Common.instance.StartMovingEvent, this.startMoving, this);
        Common.instance.node.on(Common.instance.PassLevelEvent,this.onPass,this);
        Common.instance.node.on(Common.instance.FailLevelEvent,this.onFail,this);
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
        this.initPos = this.node.position;

    }
    onTouchStartAbove(event: any) {
        let localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("Player has Event");

        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    }
    onDisable() {
        Common.instance.node.off(Common.instance.StartMovingEvent, this.startMoving, this);
        Common.instance.node.off(Common.instance.PassLevelEvent,this.onPass,this);
        Common.instance.node.off(Common.instance.FailLevelEvent,this.onFail,this);
    }
    counter: number = 0;
    startMoving()
    {

        if(this.sfxEnemyNode != undefined){
            this.sfxEnemyNode.active = !this.sfxEnemyNode.active;
        }
        if(this.sfxEnemyNode_2 != undefined){
            this.sfxEnemyNode_2.active = !this.sfxEnemyNode_2.active;
        }
        if(this.rb != null)
        {
            if (!this.isFalling){
                this.rb.type = cc.RigidBodyType.Dynamic;
                this.rb.linearVelocity = this.initVelocity;
            }
            
            this.delayTime = GameManager.instance.lineMgr.timeChecking;
            this.counter = 0;
            this.isStartMoving = true;
        }
        if(this.enermyNode != undefined){
            let rbEnermy = this.enermyNode.getComponent(cc.RigidBody);
            let enermyCom = this.enermyNode.getComponent(Enermy);

            if(rbEnermy != null ){
                if (!enermyCom.getIsFalling){
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
                
            }
            else if ( this.bullet != undefined ){
                this.AdddForceForBullet();
            }
            this.AddForceForEnermy();
            this.MovingEnermy();
        }
        if(this.enermyNode_2 != undefined){
            let rbEnermy = this.enermyNode_2.getComponent(cc.RigidBody);
            
            let enermyCom = this.enermyNode_2.getComponent(Enermy);

            if(rbEnermy != null ){
                if (!enermyCom.getIsFalling){
                    rbEnermy.type = cc.RigidBodyType.Dynamic;
                    rbEnermy.linearVelocity = this.initVelocity;
                }
                
            }
            else if ( this.bullet != undefined ){
                this.AdddForceForBullet2();
            }
            this.AddForceForEnermy2();
            this.MovingEnermy2();
        }
        if ( this.weaponSprite != undefined){
            if (this.charSprite[spriteState.Weapon] != undefined){
                let sprite = this.weaponSprite.getComponent(cc.Sprite);
                sprite.spriteFrame = this.charSprite[spriteState.Weapon];
            }
        }
        if(this.startLevelAnim != null)
        {
            this.startLevelAnim.active = false;
        }

    }
    MovingEnermy(): void{
        
        let x = this.node.position.x - this.enermyNode.position.x;
        let enermyNodeCom = this.enermyNode.getComponent(Enermy);
        if ( enermyNodeCom != null ){
            console.log("value of hasMove: " + enermyNodeCom.hasMove);
            if ( enermyNodeCom.hasMove){
               
                console.log("value of x: "+ x);
                enermyNodeCom.setDir = new cc.Vec2(x,0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    }
    MovingEnermy2(): void{
        
        let x = this.node.position.x - this.enermyNode_2.position.x;
        let enermyNodeCom = this.enermyNode_2.getComponent(Enermy);
        if ( enermyNodeCom != null ){
            console.log("value of hasMove2: "+ enermyNodeCom.hasMove);
            if ( enermyNodeCom.hasMove){
                
                console.log("value of x2: "+ x);
                enermyNodeCom.setDir = new cc.Vec2(x,0);
                enermyNodeCom.setIsMoving = true;
            }
        }
    }
    AddForceForEnermy(): void{
        
        let enermyNodeCom = this.enermyNode.getComponent(Enermy);
        if ( enermyNodeCom != null ){
            console.log("go in enermyCom");
           if (enermyNodeCom.getIsAttack){
                console.log("attack");
                let x = this.node.position.x - this.enermyNode.position.x;
                let y = this.node.position.y - this.enermyNode.position.y;
                let rbEnermyNode = this.enermyNode.getComponent(cc.RigidBody);
                if (rbEnermyNode != null ){
                    console.log("rb is not null");
                    if (this.positionAddForce != null){
                        console.log("add Force in positionAddForce");
                        rbEnermyNode.applyForce(new cc.Vec2(x*this.force.x,y*this.force.y), this.positionAddForce,true);
                    }
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x*this.force.x,y*this.force.y),true);
                }

                    
           }
        }
       
    }
    AddForceForEnermy2(): void{
        
        let enermyNodeCom = this.enermyNode_2.getComponent(Enermy);
        if ( enermyNodeCom != null ){
            console.log("go in enermyCom");
           if (enermyNodeCom.getIsAttack){
                console.log("attack");
                let x = this.node.position.x - this.enermyNode_2.position.x;
                let y = this.node.position.y - this.enermyNode_2.position.y;
                let rbEnermyNode = this.enermyNode_2.getComponent(cc.RigidBody);
                if (rbEnermyNode != null ){
                    console.log("rb is not null");
                    rbEnermyNode.applyForceToCenter(new cc.Vec2(x*this.force.x,y*this.force.y),true);
                }
                    
           }
        }
        
    }
    StopEnermyMoving(): void{
        let enermyNodeCom = this.enermyNode.getComponent(Enermy);
        if ( enermyNodeCom != null){
            enermyNodeCom.setIsMoving = false;
        }
        
    }
    AdddForceForBullet(): void{
        if( this.enermyNode !== undefined){
            
            if( this.charSprite[spriteState.EnermyFire] != undefined){
                console.log("change fire sprite");
                this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyFire];
            }
        }
        let m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode.position.x + this.posForBullet.x, this.enermyNode.position.y + this.posForBullet.y,0);
        let m_bulletComp = m_bullet.getComponent(Bullet);
        let x = this.node.position.x - m_bullet.position.x;
        let y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x*this.forceBullet,y*this.forceBullet));
    }
    AdddForceForBullet2(): void{
        if( this.enermyNode_2 !== undefined){
            console.log("value of spriteEnermy: " + spriteState.EnermyFire);
            if( this.charSprite[spriteState.EnermyFire] != undefined){
                console.log("change fire sprite");
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyFire];
            }
        }
        let m_bullet = cc.instantiate(this.bullet);
        this.node.addChild(m_bullet);
        m_bullet.position = new cc.Vec3(this.enermyNode_2.position.x + this.posForBullet_2.x, this.enermyNode_2.position.y + this.posForBullet_2.y,0);
        let m_bulletComp = m_bullet.getComponent(Bullet);
        let x = this.node.position.x - m_bullet.position.x;
        let y = this.node.position.y - m_bullet.position.y;
        console.log("add Force");
        console.log("name of bullet node: " + m_bullet.name);
        m_bulletComp.AddForce(new cc.Vec2(x*this.forceBullet,y*this.forceBullet));
    }

    update(dt: number){
        if(this.isStartMoving == undefined) return;
        this.counter += dt;
        if(this.counter >= 1)
        {
            this.counter--;
            this.counter --;
            if(this.delayTime == 0)
            {
                this.isStartMoving = true;
            }
        }
    }
    Teleport():void{
        if (this.isHasTeleport){
            if ( this.positionTele != null){
                this.node.position = new cc.Vec3(this.positionTele.x, this.positionTele.y,0);
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(50,0),true);
            }
        }
    }
    onCollisionEnter(other,self)
    {
        if (GameConfig.gameState != inGameState.CHECKING) return;

        if(other.node.group == "Target")
        {
            console.log("in Target pass");
            this.Teleport();
            GameConfig.gameState = inGameState.COMPLETED
            //this.node.getComponent(cc.PolygonCollider).enabled = false;
            Common.instance.node.emit("PassLevelEvent");
            return;
        }
        if(other.node.group == "Enemy")
        {
            console.log("in Enermy loss");
            GameConfig.gameState = inGameState.FAILED;
           //this.MovingEnermy();
            
            // if (this.node.getChildByName("Bullet") != null)
            //     this.node.getChildByName("Bullet").removeFromParent();
            return;
        }
        if(other.node.name == "Line"){
            console.log("collide with line");
        }
        if(other.node.name == "Line" && !GameManager.instance.lineMgr.isCanTouchDrawLine)
        {
            GameConfig.gameState = inGameState.FAILED;
            return;
        }
    }

    onFail()
    {
        if(this.charSprite[spriteState.Lose] !== undefined)
        {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Lose];
        }
        if(this.isRemove)
        {
            this.node.removeFromParent(true);
        }
        if( this.enermyNode !== undefined){
            
            if( this.charSprite[spriteState.EnermyWin] != undefined){
                console.log("change fail sprite");
                if ( this.enermySprite != undefined){
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyWin];

                }else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyWin];
            }
        }
        if( this.charSprite[spriteState.Enermy_2_Win] != undefined){
            console.log("change fail sprite");
            if ( this.enermySprite2 != undefined){
                this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Enermy_2_Win];

            }else
                this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Enermy_2_Win];
        }
        if(this.elementPlayer != undefined){
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if(this.sfxPlayer != undefined){
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    }

    onPass()
    {
        if(this.charSprite[spriteState.Win] !== undefined)
        {
            this.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Win];
        }
        if( this.enermyNode !== undefined){
            if( this.charSprite[spriteState.EnermyLose] != undefined){
                if ( this.enermySprite != undefined){
                    this.enermySprite.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyLose];
                    console.log("value of EnermyLose " + spriteState.EnermyLose);
                    console.log("change sprite in onPass");
                }else
                    this.enermyNode.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.EnermyLose];
            }
        }
        if( this.enermyNode_2 !== undefined){
            if( this.charSprite[spriteState.Enermy_2_Lose] != undefined){
                if ( this.enermySprite2 != undefined){
                    this.enermySprite2.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Enermy_2_Lose];

                }else
                    this.enermyNode_2.getComponent(cc.Sprite).spriteFrame = this.charSprite[spriteState.Enermy_2_Lose];
            }
        }
        if(this.elementPlayer != undefined){
            this.elementPlayer.active = !this.elementPlayer.active;
        }
        if(this.sfxPlayer != undefined){
            this.sfxPlayer.active = !this.sfxPlayer.active;
        }
    }
    resetGravity()
    {
        this.rb.linearVelocity = this.initVelocity;
    }

    updateNewGravity(newGravity: cc.Vec2)
    {
        if(this.rb != null)
        {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = newGravity;
        }
    }

    updateNewLinear(newVelo)
    {
        if(this.rb != undefined)
        {
            this.rb.type = cc.RigidBodyType.Dynamic;
            this.rb.linearVelocity = new newVelo;
            this.isStartMoving = true;
        }
    }
}
