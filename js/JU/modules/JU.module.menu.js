/**
 * Created by gtakoni on 14/10/2015.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function JUMenuModule(){

        function onChangeSate(elem){
            $('body').toggleClass('menu-open');
        }

        return{
            onChangeSate:onChangeSate
        }
    }

    function onDOMReady(){
        JU.module.JUMenu = JUMenuModule();
    }

    $document.ready(onDOMReady);
})(JU);
