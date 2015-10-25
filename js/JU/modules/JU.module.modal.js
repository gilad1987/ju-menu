/**
 * Created by gtakoni on 14/10/2015.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    //#TODO add description
    function JUModalModule(){

        //#TODO alert if $modalWrapper.length == 0
        var $modalWrapper = $('#ju-modal #content'),
            modalContentCache = {};

        function getCurrentElement(e,element){
            var $elem;

            if(typeof element != 'undefined'){
                $elem =  $(element);
            }


            if(e!=null){
                var $target = $(e.target);
                if($target.hasClass('ju-modal-button')){
                    return $target;
                }
                $elem = $target.closest('.ju-modal-button');
            }

            return $elem.hasClass('ju-modal-button') ? $elem : null;
        }

        function innerContent(e,element){
            var $elem;

            $elem = getCurrentElement(e,element);
            if($elem==null)return;

            var contentSelector = $elem.data('modal-content-selector');
            var $content;

            if(typeof contentSelector == 'undefined'){
                return;
            }
            $content = $(contentSelector);
            if(typeof modalContentCache[contentSelector] == 'undefined'){
                modalContentCache[contentSelector] = $content;
            }
            $content = modalContentCache[contentSelector];
            if($content.length==0){
                return;
            }

            //#TODO add function after add content
            $modalWrapper.html('');
            $modalWrapper.html($content);

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

