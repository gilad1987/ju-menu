/**
 * Created by gtakoni on 21/10/2015.
 */
(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    /**
     * @JUdoc function
     * @name JUinputModule
     * @module JUinputModule
     * @writeBy Gilad Takoni
     * @kind function
     *
     * @description
     * Check if the input|textarea (only element has 'ju-input' class) not empty if the condition is true add to parent '.input-wrapper'
     * 'dirty' class
     *
     * @example
     * <div class="ju-input-wrapper">
     *      <input class='ju-input'>
     * </div>
     *
     * @returns {{reset: Function}}
     * @constructor
     */
    function JUinputModule(){

        var CSS_CLASS_NAME = {
            'input':'ju-input',
            'dirty':'ju-dirty',
            'input_wrapper':'ju-input-wrapper'
        };

        /**
         *
         * @returns {{ setIsDirty:Function , reset: Function }}
         * setIsDirty: context must be input|textarea
         * reset: optional to pass wrapper to reset only his child
         */
        var inputsManager = (function(){

            var $this,
                id,
                isDirty,
                inputsMap={};


            return {
                /**
                 * if his value of context (this) element not empty will add to parent with 'input-wrapper' class
                 * 'dirty' class
                 */
                setIsDirty : function(){
                    $this = $(this);
                    isDirty = $this.val() != '';
                    id = $this[0]['id'];

                    if(id==''){
                        id='id_'+JU.Utils.getRandomInt(10000000,100);
                    }

                    if(typeof inputsMap[id] == 'undefined'){
                        $this.attr('id',id);
                        inputsMap[id] = {};
                        inputsMap[id]['isDirty'] = false;
                        inputsMap[id]['parent'] = $this.closest('.'+CSS_CLASS_NAME.input_wrapper);
                        inputsMap[id]['input'] = $this;
                    }

                    if(inputsMap['isDirty'] == isDirty){return}

                    inputsMap[id].parent.toggleClass(CSS_CLASS_NAME.dirty,isDirty);
                    inputsMap[id]['isDirty'] = isDirty;

                },

                /**
                 * Clean all elements that have 'ju-input' class
                 * if pass wrapper it is clean all only child have 'ju-input' class
                 * @param wrapper
                 */
                reset:function (wrapper){

                    if(typeof wrapper == 'object'){
                        var $wrapper = $(wrapper);
                        if($wrapper.length==0){
                            return;
                        }

                        $wrapper.find('input'+'.'+CSS_CLASS_NAME.input).val('').trigger('change');
                        $wrapper.find('textarea'+'.'+CSS_CLASS_NAME.input).val('').trigger('change');
                        return;
                    }


                    var key;
                    for(key in inputsMap){
                        if(inputsMap[key]['isDirty']){
                            inputsMap[key].input.val('').trigger('change');
                        }
                    }
                }
            };

        })();


        function onClick(e){
            if(e.target.tagName.toLowerCase() != 'input'){
                return;
            }
            var elem = e.target;
            if(!$(elem).hasClass(CSS_CLASS_NAME.input)){
                return;
            }

            inputsManager.setIsDirty.apply(elem);
        }

        $document.on('click keyup keydown input change',onClick);

        return{
            reset:inputsManager.reset
        }
    }


    function onDOMReady(){
        JU.module.JUInputs = JUinputModule();
    }

    $document.ready(onDOMReady);
})(JU);