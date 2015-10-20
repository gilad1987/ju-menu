/**
 * Created by giladtakoni on 10/17/15.
 */

//# TODO write documentation with example
(function(JU,$){

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

        var i;

        function getCollectionElements(string){
            
            var collection = [];
            
            if(typeof string != 'undefined'){
                var elem;

                i=0;
                
                string = string.split('|');
                
                for(; i<string.length; i++){
                    elem = $(string[i]);
                    if(elem.length!=0){
                        collection.push(elem[0]);
                    }
                }
            }
            return collection;
        }

        function getCurrentElement(e,element){
            var $target = typeof element != 'undefined' ?
                $(element) :
                typeof e != null && $(e.target);

            if(!$target.hasClass(CLASS_NAMES.JUexpandable)){

                var $targetParentExpander = $target.closest('.'+CLASS_NAMES.JUexpander);

                if($targetParentExpander.length==0){
                    return null;
                }
                var $parenExpander = $targetParentExpander.closest('.'+CLASS_NAMES.JUexpandable);
            }

            return (typeof $parenExpander != 'undefined') ? $parenExpander : $target;

        }

        
        function expandableOrCollapse(e,element){

            var $elem,
                isIsolated;

            $elem = getCurrentElement(e,element);
            if($elem==null) return;

            isIsolated = $elem.data('isolated');
            isIsolated = (typeof isIsolated != 'undefined' && isIsolated);

            var elementsToAddClass = getCollectionElements( $elem.data('dependencies-selectors') );
            elementsToAddClass.push($elem[0]);
            
            var elementsToExclude = getCollectionElements( $elem.data('exclude-expandable') );

            var hasExcludeElements = elementsToExclude.length>0;

            function exclude(index,element){

                if(hasExcludeElements){
                    return elementsToAddClass.indexOf(element) != -1 || elementsToExclude.indexOf(element) != -1;
                }
                return elementsToAddClass.indexOf(element) != -1;
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

            //#TODO add option to change state only element as clicked (isolated option)
            if(!isIsolated){
                $('.'+CLASS_NAMES.JUexpandable + '.' + CLASS_NAMES.JUexpanded)
                    .not(exclude)
                    .removeClass(CLASS_NAMES.JUexpanded)
                    .promise()
                    .done(onFinish);
            }


            $(elementsToAddClass)
                .toggleClass(CLASS_NAMES.JUexpanded)
                .promise()
                .done(onFinish);
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

})(JU,$);