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

        function expandableOrCollapse(e){

            var $target = $(e.target);

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
                for(var i=0; i<dependencies.length; i++){
                    var elem = $(dependencies[i]);
                    if(elem.length!=0){
                        $elementToExclude.push(elem[0]);
                    }
                }
            }


            var elementToExclude = $elem.data('exclude-expandable');
            var elementToExcludeArr = [];
            if(typeof elementToExclude != 'undefined'){
                elementToExclude = elementToExclude.split('|');
                for(var i=0; i<elementToExclude.length; i++){
                    var elem = $(elementToExclude[i]);
                    if(elem.length!=0){
                        elementToExcludeArr.push(elem[0]);
                    }
                }
            }

            function exclude(index,element){
                if(elementToExcludeArr.length){
                    console.log('g');
                    return $elementToExclude.indexOf(element) != -1 || elementToExcludeArr.indexOf(element) != -1;
                }
                return $elementToExclude.indexOf(element) != -1;
            }

            $('.'+CLASS_NAMES.JUexpandable + '.' + CLASS_NAMES.JUexpanded).not(exclude).removeClass(CLASS_NAMES.JUexpanded);
            $($elementToExclude).toggleClass(CLASS_NAMES.JUexpanded);
        }

        function expandable(element){
            console.log('Implement expandable');
        }

        function collapse(element){
            console.log('Implement collapse');
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