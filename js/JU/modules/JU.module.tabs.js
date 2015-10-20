/**
 * Created by giladtakoni on 10/18/15.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    var JU_TAB_CLASS={
      JUtabsSet:'ju-tabset',
      JUtabsContent:'ju-tabs-content',
      JUtabsButton:'ju-tabs-button'
    };

    var JU_TAB_DATASET={
        JUtabsContentSelector:'ju-tabs-content-selector',
        JUtabsButtonSelector:'ju-tabs-button-selector'
    };

    function JUtabsModule(){

        function getCurrentElement(e,element){

            var $elem=null;

            if(typeof element != 'undefined'){
                $elem = $(element);
                if(!$elem.hasClass(JU_TAB_CLASS.JUtabsButton)){
                    return null;
                }
            }

            if(e!=null){
                var $target = $elem = $(e.target);
                if(!$target.hasClass(JU_TAB_CLASS.JUtabsButton)){
                    $elem = $target.closest('.'+JU_TAB_CLASS.JUtabsButton);
                    if($elem.length==0){
                        $elem=null;
                    }
                }
            }

            return $elem;
        }

        function toggeleTab(e,element){

            var $elem;

            $elem = getCurrentElement(e,element);
            if($elem==null)return;

            var $parentSet = $elem.closest('.'+JU_TAB_CLASS.JUtabsSet);
            if($parentSet.length==0){
                return;
            }

            var contentSelector = $elem.data(JU_TAB_DATASET.JUtabsContentSelector);
            if(typeof contentSelector == 'undefined'){
                return;
            }
            var $content = $(contentSelector);
            if($content.length==0){
                return;
            }

            $parentSet.find('.'+JU_TAB_CLASS.JUtabsButton).removeClass('active');
            $parentSet.find('.'+JU_TAB_CLASS.JUtabsContent).removeClass('active');

            $elem.addClass('active');
            $content.addClass('active');
        }

        function open(element){
            toggeleTab(null,element);
        }

        $document.on('click',toggeleTab);

        return{
            open:open
        }
    }


    function onDOMReady(){
        JU.module.JUTabs = JUtabsModule();
    }
    $document.ready(onDOMReady);
})(JU);