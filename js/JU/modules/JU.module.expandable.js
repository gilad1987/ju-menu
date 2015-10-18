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

    function JUExpandableModule(e){

        var $target,
            targetExpandable;

        targetExpandable = true;
        $target = $(e.target);

        if(!$target.hasClass(CLASS_NAMES.JUexpandable)){
            var $targetParent;

            $targetParent = $target.closest('.'+CLASS_NAMES.JUexpander);
            if($targetParent.length==0){
                targetExpandable = false;
            }else{
                var $parenExpander;
                $parenExpander = $targetParent.closest('.'+CLASS_NAMES.JUexpandable);
            }
        }

        if(targetExpandable==false){
            return;
        }

        var $elem = (typeof $parenExpander != 'undefined') ? $parenExpander : $target;
        $('.expandable.expanded').not($elem).removeClass(CLASS_NAMES.JUexpanded);
        $elem.toggleClass(CLASS_NAMES.JUexpanded);
    }


    function onDOMReady(){
        $document.on('click',JUExpandableModule);
    }


    $document.ready(onDOMReady);


})(JU);