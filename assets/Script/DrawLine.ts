import { inGameState } from "./Common";
import GameConfig from "./GameConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DrawLine extends cc.Component {

    // @property(cc.Node)
    // canvas: cc.Node = null;
    @property(cc.Node)
    drawLine: cc.Node = null;
    @property(cc.Graphics)
    line: cc.Graphics = null;

    disBtw2Points: number = 2;

    listPoint: cc.Vec2[] = [];

    lastPointPos: cc.Vec2 = cc.v2(0, 0);
    @property
    private isColliderWhilePlaying: boolean = false;
    @property
    positionCollide: cc.Vec3 = null;
    @property
    private nameCollider: string = "";
   
    UpdateGraphics() {
            this.lastPointPos = cc.v2(this.listPoint[this.listPoint.length - 1].x, this.listPoint[this.listPoint.length - 1].y);
        
            this.line.moveTo(this.listPoint[0].x, this.listPoint[0].y);
            this.line.lineTo(0.5 * (this.listPoint[0].x + this.listPoint[1].x), 0.5 * (this.listPoint[0].y + this.listPoint[1].y));
        
            for (let j = 1; j <= this.listPoint.length - 1; j++) {
            this.line.lineTo(this.listPoint[j].x, this.listPoint[j].y);
        }
        this.line.lineTo(this.lastPointPos.x, this.lastPointPos.y);
    }
    
    
    splice()
    {
        this.listPoint = [];
    }

    updateDrawPoints(point: cc.Vec2) {
        this.listPoint.push(point);
    }
    getListPoint()
    {
        return this.listPoint;
    }
    
    update(dt)
    {
        this.line.lineWidth = 10;
        this.line.clear();
        this.line.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.line.lineCap = cc.Graphics.LineCap.BUTT;
        
        if(this.listPoint.length <= 1)
        {
            return;
        }

        this.UpdateGraphics()
        this.line.stroke();
    }
    onCollisionEnter(other,self){
        console.log("name of collision that collide with line: " + other.node.name);
        console.log("position collide another " + other.node.position);
        if (GameConfig.gameState == inGameState.PLAYING){
            console.log("is Playing in DrawNode");
            this.nameCollider = other.node.name;
            this.positionCollide = other.node.position;
            this.isColliderWhilePlaying = true;
        }
    }
    onCollisionExit(other, self){
        console.log("onCollisionExit enable");
        this.isColliderWhilePlaying = false;
    }
    get getIsCollideWhilePlaying(){
        return this.isColliderWhilePlaying;
    }
    set setIsCollierWhilePlaying(isCollide: boolean){
        this.isColliderWhilePlaying = isCollide;
    }
    get getNameCollider(){
        return this.nameCollider;
    }
    set setNameCollider(nameColl: string){
        this.nameCollider = nameColl;
    }
}

