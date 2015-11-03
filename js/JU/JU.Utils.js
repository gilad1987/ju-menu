
/**
 * Created by giladtakoni on 10/21/15.
 */

(function(window){

    function Utils(){

        var _this;

        function register(key,_func){

            if(typeof _func == 'function' && typeof key == 'string'){
                _this[key] = _func;
            }
        }

        function isArray(_var){
            return Object.prototype.toString.call( _var ) === '[object Array]';
        }

        return {
            register:register,
            isArray:isArray
        }
    }

    Utils.prototype.getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    Utils.prototype.runCallback = function runCallback(data){

    };

    window.JU.Utils = Utils();
})(window);