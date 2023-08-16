
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Prefabs/Levels/lvl2/Floating');
require('./assets/Prefabs/Levels/lvl3/begin/Spinning');
require('./assets/Prefabs/Levels/lvl7/BatScript');
require('./assets/Script/Common');
require('./assets/Script/CustomCharacter/Bullet');
require('./assets/Script/CustomCharacter/CantTouchObstacle');
require('./assets/Script/CustomCharacter/Chainsaw');
require('./assets/Script/CustomCharacter/Enermy');
require('./assets/Script/CustomCharacter/Player');
require('./assets/Script/Dialog/NoAds');
require('./assets/Script/DrawLine');
require('./assets/Script/GameConfig');
require('./assets/Script/GameManager');
require('./assets/Script/LineManager');
require('./assets/Script/StopSeperateEvent');
require('./assets/Script/UI/SettingGroup');
require('./assets/Script/UI/SoundManager');

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