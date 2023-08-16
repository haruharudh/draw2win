"use strict";
cc._RF.push(module, '74193nki1REZZtHVlb5K/VP', 'StopSeperateEvent');
// Script/StopSeperateEvent.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StopSeperateEvent = /** @class */ (function (_super) {
    __extends(StopSeperateEvent, _super);
    function StopSeperateEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StopSeperateEvent.prototype.onLoad = function () {
        //this.node.on('touchstart', this.onTouchStartAbove, this);
        //this.node.on('touchmove', this.onTouchMove, this);
        this.node.addComponent(cc.BlockInputEvents);
        this.node.getComponent(cc.BlockInputEvents).enabled = true;
    };
    StopSeperateEvent.prototype.onTouchStartAbove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    StopSeperateEvent.prototype.onTouchMove = function (event) {
        var localPos = this.node.convertToNodeSpaceAR(event.getLocation());
        console.log("background has Event Move");
        if (this.node.getBoundingBox().contains(localPos)) {
            // Xử lý sự kiện cho đối tượng ở trên
            //event.stopPropagation();
            console.log("background has Event");
        }
        // else {
        //     event.stopPropagation(); // Ngăn chặn sự kiện lan tỏa lên đối tượng dưới
        // }
    };
    StopSeperateEvent = __decorate([
        ccclass
    ], StopSeperateEvent);
    return StopSeperateEvent;
}(cc.Component));
exports.default = StopSeperateEvent;

cc._RF.pop();