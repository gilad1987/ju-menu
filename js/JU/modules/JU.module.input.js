/**
 * Created by gtakoni on 21/10/2015.
 */
(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function JUinputModule(){



        var inputsManager = (function(){

            var $this,
                id,
                isDirty,
                inputsMap={};


            return {
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
                        inputsMap[id]['parent'] = $this.closest('.input-wrapper');
                        inputsMap[id]['input'] = $this;
                    }

                    if(inputsMap['isDirty'] == isDirty){return}

                    inputsMap[id].parent.toggleClass('dirty',isDirty);
                    inputsMap[id]['isDirty'] = isDirty;

                },

                reset:function (wrapper){

                    if(typeof wrapper == 'object'){
                        var $wrapper = $(wrapper);
                        if($wrapper.length==0){
                            return;
                        }

                        $wrapper.find('input').val('').trigger('change');
                        $wrapper.find('textarea').val('').trigger('change');

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
            inputsManager.setIsDirty.apply(elem);
        }

        //$('input').on('keyup keydown input change',inputsManager.setIsDirty);
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