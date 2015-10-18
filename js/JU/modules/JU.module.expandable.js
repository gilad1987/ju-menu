/**
 * Created by giladtakoni on 10/17/15.
 */


(function(JU){

    var $document;

    var CLASS_NAMES = {
        JUexpandable:"ju-expandable",
        JUexpander:"ju-expander",
        JUexpanded:"ju-expanded"
    };

    $document = $(document);

    function onDOMReady(){

        function JUExpandableModule(e){

            var $target,
                targetNotExpandable;

            targetNotExpandable = false;
            $target = $(e.target);

            if(!$target.hasClass(CLASS_NAMES.JUexpandable)){
                var $targetParent;

                $targetParent = $target.closest('.'+CLASS_NAMES.JUexpander);
                if($targetParent.length==0){
                    targetNotExpandable = true;
                }else{
                    var $parenExpander;
                    $parenExpander = $targetParent.closest('.'+CLASS_NAMES.JUexpandable);
                }
            }

            if(targetNotExpandable){
                return;
            }

            var $elem = (typeof $parenExpander != 'undefined') ? $parenExpander : $target;
            $('.expandable.expanded').not($elem).removeClass(CLASS_NAMES.JUexpanded);
            $elem.toggleClass(CLASS_NAMES.JUexpanded);
        }

        $document.on('click',JUExpandableModule);
    }


    $document.ready(onDOMReady);


})(JU);