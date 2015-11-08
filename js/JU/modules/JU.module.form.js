/**
 * Created by gtakoni on 25/10/2015.
 */

 (function(JU){
 
     if(typeof JU == 'undefined'){
         throw new Error('JU object is missing');
     }
 
     var $document;
 
     $document = $(document);


 
     //#TODO add description
     function JUFormModule(){

         var forms = {};
         var validationTypes = {};
         validationTypes.rule  = function(value){
             var ex = new RegExp("^(.+?)\[(.+)\]$");
             return ex.exec(value)==null;
         };

         validationTypes.ip  = function(value){
             var ex =  new RegExp("^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$","i");
             return ex.exec(value)==null;
         };

         validationTypes.numeric  = function(value){
             var ex =  new RegExp("^[0-9]+$");
             return ex.exec(value)==null;
         };
         validationTypes.integer  = function(value){
             var ex =  new RegExp( "^\-?[0-9]+$");
             return ex.exec(value)==null;
         };
         validationTypes.decimal  = function(value){
             var ex =  new RegExp("^\-?[0-9]*\.?[0-9]+$");
             return ex.exec(value)==null;
         };
         validationTypes.email  = function(value,field){
             var ex =  new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
             return  (field.required==0 && value =='') || (field.required  && (ex.exec(value) != null) );
         };
         validationTypes.alpha  = function(value,field){
             var ex =  new RegExp("^[a-z]+$","i");
             return (field.required==0 && value =='') || (field.required  && (ex.exec(value) != null) );
         };
         validationTypes.alphaNumeric  = function(value){
             var ex =  new RegExp( "^[a-z0-9]+$","i");
             return ex.exec(value)==null;
         };
         validationTypes.alphaDash  = function(value){
             var ex =  new RegExp( "^[a-z0-9_\-]+$","i");
             return ex.exec(value)==null;
         };
         validationTypes.natural  = function(value){
             var ex =  new RegExp("^[0-9]+$","i");
             return ex.exec(value)==null;
         };
         validationTypes.naturalNoZero  = function(value){
             var ex =  new RegExp("^[1-9][0-9]*$","i");
             return ex.exec(value)==null;
         };
         validationTypes.base64  = function(value){
             var ex =  new RegExp( "[^a-zA-Z0-9\/\+=]","i");
             return ex.exec(value)==null;
         };
         validationTypes.numericDash  = function(value){
             var ex =   new RegExp("^[\d\-\s]+$");
             return ex.exec(value)==null;
         };
         validationTypes.url  = function(value){
             var ex =   new RegExp( "^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$");
             return ex.exec(value)==null;
         };
         validationTypes.date  = function(value){
             var ex =   new RegExp("\d{4}-\d{1,2}-\d{1,2}");
             return ex.exec(value)==null;
         };

         validationTypes.select = function(value){
             return  value!="noValid";
         };

         function getByName(name){

         }

         function getFormByName(name,$form){
             if(typeof forms[name] == 'undefined'){
                 forms[name] = {};
                 forms[name]['fields'] = {};
                 var i=0,
                     f=$form.find('.ju-validate'),
                     len= f.length;
                 for(;i<len;i++){
                     if(f[i]['name'] == ""){
                         console.warn('Name property is missing');
                         console.warn(f[i]);
                         continue;
                     }
                     var $elem = $(f[i]);
                     var field = {};
                     var vtype = $elem.data('ju-vtype');
                     field['wrapper'] = $elem.closest('.ju-input-wrapper');
                     field['isValid']=true;
                     field['element'] = f[i];
                     field['rules'] = typeof vtype != 'undefined' ? vtype : 'alpha';
                     field['messages'] = eval( $elem.data('ju-messages') );
                     field['required'] = parseInt( typeof $elem.data('ju-required') != 'undefined' ? $elem.data('ju-required') : 1 );
                     field['pattern'] = $elem.data('ju-pattern');
                     field['callbacks'] = eval( $elem.data('ju-callbacks') );
                     field['errorElement'] = field['wrapper'].find('.error-message');
                     forms[name].fields[f[i]['name']] = field;
                 }
             }

             return forms[name];
         }

         function defaultOnErrorField(field){
             if(field.errorElement.length!=0 && field.messages){
                 var val = $(field.element).val();

                 if(val=="" && field.required==0){
                     return;
                 }


                 var errorMessage = ( val=="" ) ? field.messages['empty'] : field.messages['error'] ;
                 field.errorElement.text( errorMessage );
             }
             field['wrapper'].toggleClass('error',!field.isValid);
         }

         function resetField(field){
             if(field['errorElement'].length){
                 field['errorElement'].text('');
             }
             field['wrapper'].toggleClass('error',!field.isValid);
         }

         function validateField(field){
             var $elem = $(field.element),
                 value = $.trim( $elem.val()),
                 isValidLastTime = field.isValid,
                 nodeType = field.element.type;

             field.isValid=true;

             switch (nodeType){
                 case "select-one":
                     field.isValid =  validationTypes['select'](value,field);
                     break;
                 default :
                     field.isValid =   validationTypes[field.rules](value,field);
             }

             if(!field.isValid){
                 var callback = field.callbacks && field.callbacks['error'] ? field.callbacks['error'] : defaultOnErrorField;
                 callback.call(field,field);
             }

             if(isValidLastTime==false && field.isValid==true){
                 resetField(field);
             }

             return false;
         }

         function onSubmit(e){

             var $form = $(e.target);

             if(!$form.hasClass('ju-form')){
                 return;
             }

             var formName = $form.attr('name');
             var currentForm = getFormByName(formName,$form);
             var fields = currentForm.fields;
             var key;

             var isValid = true;
             for(key in fields) {
                 if (fields[key].isValid) {
                     if (!validateField(fields[key])) {
                         isValid = false;
                     }
                 }
             }
            return false;
         }

         function onKeyDown(e){
             var $elem = $(e.target);
             if(!$elem.hasClass('ju-validate')){
                 return;
             }

             var form = getFormByName(e.currentTarget.forms[0].name,$(e.currentTarget.forms[0]));
             if(!form){
                 return;
             }

             var key;
             for(key in form.fields){
                 if(form.fields[key].element === $elem[0]){
                     validateField(form.fields[key]);
                     break;
                 }
             }
         }

         $document.on('submit',onSubmit);
         $document.on('keyup change',onKeyDown);
     }

     function onDOMReady(){
         JU.module.JUForm = JUFormModule();
     }
 
     $document.ready(onDOMReady);
 })(JU);
 
 