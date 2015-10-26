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
         validationTyps.alpha  = new RegExp("[a-z]+$","i");
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
                         console.info('Name property is missing');
                         console.info(f[i]);
                         continue;
                     }
                     var $elem = $(f[i]);
                     var field = {};
                     field['element'] = f[i];
                     field['rules'] = $elem.data('ju-vtype');
                     field['messages'] = eval( $elem.data('ju-messages') );
                     field['pattern'] = $elem.data('ju-pattern');
                     field['callbacks'] = eval( $elem.data('ju-callbacks') );
                     forms[name].fields[f[i]['name']] = field;
                 }
             }

             return forms[name];
         }

         function validateField(element){
             console.log(element);
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

             for(key in fields){
                 validateField(fields[key]);
             }

            return false;
         }

         function onKeyDown(e){

         }

         $document.on('submit',onSubmit);
         $document.on('keydown',onKeyDown);
     }

     JUFormModule.prototype.FormManager = function FormManager(options){


     };

     function onDOMReady(){
         JU.module.JUForm = JUFormModule();
     }
 
     $document.ready(onDOMReady);
 })(JU);
 
 