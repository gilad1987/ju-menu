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

    var DATA_SET = {

    };

    $document = $(document);


    /**
     * @JUdoc function
     * @name JUExpandableModule
     * @module JUExpandableModule write by Gilad Takoni
     * @kind function
     *
     * @description
     * - When call the document bind all click Event and when the target element has .ju-expandable | .ju-expander class
     * or the parent of element has .ju-expander then .ju-expandable | .ju-expandable(parent) toggle class .ju-expanded
     * when .ju-expanded you need in css to change state child element
     * one element can be have 'ju-expanded' class
     * - when the target element has dataset 'dependencies-selectors' This behavior will apply to the dependencies elements,
     * the dependencies elements need to separate with | like - nav.links|#mainWrapper ect..
     * - Isolated element - when you want this behavior apply only the element and isolate from other .ju-expandable elements,
     *   ELEMENT.data = '1'
     * - exclude element this behavior ignore from exclude elements when target has dataset 'exclude-expandable'
     * - if the element has callback dataset all callback will be apply, can be pass string of function or array of callback
     *
     * @example
     * 1. <div class="ju-expandable"></div>
     *
     * 2. <div class="ju-expandable">
     *     <div class="ju-expander">
     *         <i></i>
     *     </div>
     *     <div class="content"></div>
     *    </div>
     *
     * 3. <div class="ju-expandable" data-exclude-expandable="header.mobile-menu|nav.links">
     *     <div class="ju-expander">
     *         <i></i>
     *     </div>
     *     <div class="content"></div>
     *    </div>
     *
     *  4. <div class="ju-expandable" data-dependencies-selectors="nav.links|">
     *     <div class="ju-expander">
     *         <i></i>
     *     </div>
     *     <div class="content"></div>
     *    </div>
     *
     *  6. <div class="ju-expandable" data-callback="JU.module.JUMenu.onChangeSate">
     *     <div class="ju-expander">
     *         <i></i>
     *     </div>
     *     <div class="content"></div>
     *    </div>
     *
     *  7. <div class="ju-expandable" data-isolated="1">
     *     <div class="ju-expander">
     *         <i></i>
     *     </div>
     *     <div class="content"></div>
     *    </div>
     *
     * @returns {{collapse: collapse, expandable: expandable}}
     */
    function JUExpandableModule(){

        var i;

        /**
         * Parse string to selectors and return array of dom element (not jQuery)
         * @param string
         * @returns {Array}
         */
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

        /**
         * Find the element to apply the behavior of module
         * can call to function and pass in second argument DOM element the element need to .ju-expandable family
         * @param e
         * @param element
         * @returns {*}
         */
        function getCurrentElement(e,element){
            var $target = typeof element != 'undefined' ?
                $(element) :
                typeof e != null && $(e.target);

            if(!$target.hasClass(CLASS_NAMES.JUexpandable)){

                var $targetParentExpander = $target.closest('.'+CLASS_NAMES.JUexpander);

                if($targetParentExpander.length==0){
                    return null;
                }
                var $parenExpander;
                if($targetParentExpander.hasClass('.'+CLASS_NAMES.JUexpandable)){
                    $parenExpander = $targetParentExpander;
                }else{
                    $parenExpander = $targetParentExpander.closest('.'+CLASS_NAMES.JUexpandable);
                }

            }

            return (typeof $parenExpander != 'undefined') ? $parenExpander : $target;

        }

        /**
         * Remove class .ju-expanded from all elements .ju-expandable.ju-expanded
         * and add ju-expanded class to current element (e.target|element)
         * @param e
         * @param element
         */
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

                var isolatedElement  = element.dataset['isolated'];
                if(isolatedElement && parseInt(isolatedElement) && (element != $elem[0])){
                    return true;
                }

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