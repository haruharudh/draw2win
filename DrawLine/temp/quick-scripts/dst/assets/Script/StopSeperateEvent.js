
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/StopSeperateEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTdG9wU2VwZXJhdGVFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDs7SUFtQ0EsQ0FBQztJQWpDYSxrQ0FBTSxHQUFoQjtRQUNJLDJEQUEyRDtRQUMzRCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEtBQVU7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQyxxQ0FBcUM7WUFDckMsMEJBQTBCO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN2QztRQUNELFNBQVM7UUFDVCwrRUFBK0U7UUFDL0UsSUFBSTtJQUNSLENBQUM7SUFDRCx1Q0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9DLHFDQUFxQztZQUNyQywwQkFBMEI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsU0FBUztRQUNULCtFQUErRTtRQUMvRSxJQUFJO0lBQ1IsQ0FBQztJQWxDZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FtQ3JDO0lBQUQsd0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzhDLEVBQUUsQ0FBQyxTQUFTLEdBbUMxRDtrQkFuQ29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BTZXBlcmF0ZUV2ZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnRBYm92ZSwgdGhpcyk7XG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnRBYm92ZShldmVudDogYW55KSB7XG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kIGhhcyBFdmVudFwiKTtcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMobG9jYWxQb3MpKSB7XG4gICAgICAgICAgICAvLyBY4butIGzDvSBz4buxIGtp4buHbiBjaG8gxJHhu5FpIHTGsOG7o25nIOG7nyB0csOqblxuICAgICAgICAgICAgLy9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTmfEg24gY2jhurduIHPhu7Ega2nhu4duIGxhbiB04buPYSBsw6puIMSR4buRaSB0xrDhu6NuZyBkxrDhu5tpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnQgTW92ZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuY29udGFpbnMobG9jYWxQb3MpKSB7XG4gICAgICAgICAgICAvLyBY4butIGzDvSBz4buxIGtp4buHbiBjaG8gxJHhu5FpIHTGsOG7o25nIOG7nyB0csOqblxuICAgICAgICAgICAgLy9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja2dyb3VuZCBoYXMgRXZlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gTmfEg24gY2jhurduIHPhu7Ega2nhu4duIGxhbiB04buPYSBsw6puIMSR4buRaSB0xrDhu6NuZyBkxrDhu5tpXG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=