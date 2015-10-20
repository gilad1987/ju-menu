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

        function getCurrentElement(e,element){
            var $elem;

            if(typeof element != 'undefined'){
                $elem =  $(element);
            }

            if(e!=null){
                var $target = $(e.target);
                if($target.hasClass('ju-modal')){
                    return $target;
                }
                $elem = $target.closest('ju-modal');
            }

            return $elem.hasClass('ju-modal') ? $elem : null;
        }

        function innerContent(e,element){
            var $elem;

            console.log('tt');
            $elem = getCurrentElement(e,element);
            if($elem==null)return;

            console.log('t');

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

