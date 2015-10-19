/**
 * Created by gtakoni on 14/10/2015.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function JUModalModule(){

        function innerContent(e){

        }

        function onChangeSate(elem){
            $('body').toggleClass('open-modal');
        }


        $document.on('click',innerContent);

        return{
            onChangeSate:onChangeSate
        }
    }

    function onDOMReady(){
        JU.module.JUModal = JUModalModule();
    }

    $document.ready(onDOMReady);
})(JU);

