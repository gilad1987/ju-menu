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

         var validators ={};


         function JUvalidate(form){

         }

         JUvalidate.prototype.addValidation = function(key,func){
             if(typeof func != 'function'){
                 return false;
             }

             validators[key]=func;
         };


         JUvalidate.prototype.validators = validators;



         function onSubmit(e){

            return false;
         }

         $document.on('submit',onSubmit);
     }

     function onDOMReady(){
         JU.module.JUForm = JUFormModule();
     }
 
     $document.ready(onDOMReady);
 })(JU);
 
 