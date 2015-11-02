/**
 * Created by gtakoni on 25/10/2015.
 */

var validationTyps;
 (function(JU){
 
     if(typeof JU == 'undefined'){
         throw new Error('JU object is missing');
     }
 
     var $document;
 
     $document = $(document);


 
     //#TODO add description
     function JUFormModule(){

         var forms = {};
         validationTyps = {};
         validationTyps.rule  = new RegExp("^(.+?)\[(.+)\]$");
         validationTyps.ip  = new RegExp("^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$","i");
         validationTyps.numeric  = new RegExp("^[0-9]+$");
         validationTyps.integer  =new RegExp( "^\-?[0-9]+$");
         validationTyps.decimal  = new RegExp("^\-?[0-9]*\.?[0-9]+$");
         validationTyps.email  =new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
         validationTyps.alpha  = new RegExp("^[a-z]+$","i");
         validationTyps.alphaNumeric  =new RegExp( "^[a-z0-9]+$","i");
         validationTyps.alphaDash  =new RegExp( "^[a-z0-9_\-]+$","i");
         validationTyps.natural  =new RegExp("^[0-9]+$","i");
         validationTyps.naturalNoZero = new RegExp("^[1-9][0-9]*$","i");
         validationTyps.base64  =new RegExp( "[^a-zA-Z0-9\/\+=]","i");
         validationTyps.numericDash  = new RegExp("^[\d\-\s]+$");
         validationTyps.url  =new RegExp( "^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$");
         validationTyps.date  =new RegExp("\d{4}-\d{1,2}-\d{1,2}");

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
                     field['wrapper'] = $elem.closest('.ju-input-wrapper');
                     field['isValid']=true;
                     field['element'] = f[i];
                     field['rules'] = $elem.data('ju-vtype');
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

         function defaultCleanErrorField(field){
             if(field['errorElement'].length){
                 field['errorElement'].text('');
             }
             field['wrapper'].toggleClass('error',!field.isValid);
         }

         function validateField(field){
             var $elem = $(field.element);
             var value = $.trim( $elem.val() );
             var lastTime = field.isValid;
             field.isValid=true;

             if(field.element.nodeName.toLocaleLowerCase() == "select" && value=="noValid"){
                 field.isValid =  false;
             }

             if(field.rules &&  validationTyps[field.rules].exec(value)==null){
                 if(field.required || ( field.required==0 && value !='' ))
                 field.isValid =  false;
             }

             if(!field.isValid){
                 var callback = field.callbacks && field.callbacks['error'] ? field.callbacks['error'] : defaultOnErrorField;
                 callback.call(field,field);
             }

             if(lastTime != field.isValid && lastTime==false && field.isValid==true){
                 defaultCleanErrorField(field);
             }

             return field.isValid;
         }

         function validate(){

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
             for(key in fields){
                 isValid = validateField(fields[key]);
             }

            return false;
         }

         function onKeyDown(e){
             var $elem = $(e.target);
             var form = getFormByName(e.currentTarget.forms[0].name,$(e.currentTarget.forms[0]));
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
 
 