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

        var $target = $(e.target),
            targetExpandable  = true;

        if(!$target.hasClass(CLASS_NAMES.JUexpandable)){

            var $targetParent = $target.closest('.'+CLASS_NAMES.JUexpander);

            if($targetParent.length==0){
                targetExpandable = false;
            }else{
                var $parenExpander = $targetParent.closest('.'+CLASS_NAMES.JUexpandable);
            }
        }

        if(targetExpandable==false){
            return;
        }

        var $elem = (typeof $parenExpander != 'undefined') ? $parenExpander : $target;
        var $elementToExclude=[];
        var dependencies;

        dependencies = $elem.data('dependencies-selectors');
        $elementToExclude.push($elem[0]);

        if(typeof dependencies != 'undefined'){
            dependencies = dependencies.split('|');
            for(var i=0; i<dependencies.length; i++){
                var elem = $(dependencies[i]);
                if(elem.length!=0){
                    $elementToExclude.push(elem[0]);
                }
            }
        }

        function exclude(index,element){
            return $elementToExclude.indexOf(element) != -1;
        }

        $('.'+CLASS_NAMES.JUexpandable + '.' + CLASS_NAMES.JUexpanded).not(exclude).removeClass(CLASS_NAMES.JUexpanded);
        $($elementToExclude).toggleClass(CLASS_NAMES.JUexpanded);
    }


    function onDOMReady(){
        $document.on('click',JUExpandableModule);
    }


    $document.ready(onDOMReady);


})(JU);