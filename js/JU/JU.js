/*
 * Created by gtakoni on 12/10/2015.
 */

(function (window){

    var $body;

    function JU(JUsettingApp){

        var _this;

        this.cache = {};
        _this = this;

        $(document).ready(function(){
            _this.cache.$body = $('body');
        });

        this.module = {};
    }

    JU.prototype.registerModule = function register(key,_func){
        if(typeof _func == 'function' && typeof key == 'string'){
            this.module[key] = _func;
        }
    };



    window.JU = new JU(JUsettingApp);

})(window);
