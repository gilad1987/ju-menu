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

    /**
     *
     * @returns {{collapse: collapse, expandable: expandable}}
     * @constructor
     */
    function JUExpandableModule(){

        function expandableOrCollapse(e,element){

            var $target = typeof element != 'undefined' ? $(element) : typeof e != null && $(e.target);
            var i=0;
            var elem;

            if(!$target.hasClass(CLASS_NAMES.JUexpandable)){

                var $targetParentExpander = $target.closest('.'+CLASS_NAMES.JUexpander);

                if($targetParentExpander.length==0){
                    return;
                }
                var $parenExpander = $targetParentExpander.closest('.'+CLASS_NAMES.JUexpandable);
            }

            var $elem = (typeof $parenExpander != 'undefined') ? $parenExpander : $target;
            var $elementToExclude=[];
            var dependencies;

            dependencies = $elem.data('dependencies-selectors');
            $elementToExclude.push($elem[0]);

            if(typeof dependencies != 'undefined'){
                dependencies = dependencies.split('|');
                for(; i<dependencies.length; i++){
                    elem = $(dependencies[i]);
                    if(elem.length!=0){
                        $elementToExclude.push(elem[0]);
                    }
                }
            }


            var elementToExclude = $elem.data('exclude-expandable');
            var elementToExcludeArr = [];
            if(typeof elementToExclude != 'undefined'){
                elementToExclude = elementToExclude.split('|');
                i=0;
                for(; i<elementToExclude.length; i++){
                    elem = $(elementToExclude[i]);
                    if(elem.length!=0){
                        elementToExcludeArr.push(elem[0]);
                    }
                }
            }

            var hasExcludeElements = elementToExcludeArr.length>0;

            function exclude(index,element){
                if(hasExcludeElements){
                    return $elementToExclude.indexOf(element) != -1 || elementToExcludeArr.indexOf(element) != -1;
                }
                return $elementToExclude.indexOf(element) != -1;
            }

            //#TODO add option to run array of callback
            function runCallback(elem){

                var callback = $(elem).data('callback');
                callback = eval(callback);
                if(typeof callback == 'function'){
                    callback(elem);
                }
            }

            function onFinish(collectionDomElement){
                i=0;
                var len=collectionDomElement.length;
                for(;i<len;i++){
                    runCallback(collectionDomElement[i]);
                }
            }

            //#TODO add option to change state only element as clicked
            $('.'+CLASS_NAMES.JUexpandable + '.' + CLASS_NAMES.JUexpanded).not(exclude).removeClass(CLASS_NAMES.JUexpanded).promise().done(onFinish);
            $($elementToExclude).toggleClass(CLASS_NAMES.JUexpanded).promise().done(onFinish);
        }


        function expandable(element){
            expandableOrCollapse(null,element);
        }

        function collapse(element){
            expandableOrCollapse(null,element);
        }

        $document.on('click',expandableOrCollapse);

        return {
            collapse:collapse,
            expandable:expandable
        }
    }

    function onDOMReady(){
        JU.module.JUExpandable = JUExpandableModule();

    }
    $document.ready(onDOMReady);


})(JU);