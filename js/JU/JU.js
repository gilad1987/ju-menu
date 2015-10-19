/*
 * Created by gtakoni on 12/10/2015.
 */

(function (window){

    var $body;

    function JU(){

        var _this;

        this.cache = {};
        _this = this;

        $(document).ready(function(){
            _this.cache.$body = $('body');
        });
    }

    JU.prototype.module = {};

    window.JU = new JU();

})(window);
