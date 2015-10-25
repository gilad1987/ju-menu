
/**
 * Created by giladtakoni on 10/21/15.
 */

(function(window){


    var test;

    function Utils(){

        var _this;

        function register(key,_func){

            if(typeof _func == 'function' && typeof key == 'string'){
                _this[key] = _func;
            }
        }

        return {
            register:register
        }
    }

    Utils.prototype.getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    window.JU.Utils = Utils();
})(window);