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

         function onSubmit(e){

             var $form = $(e.target).closest('form');
            return false;
         }

         $document.on('click',onSubmit);
     }
 
     function onDOMReady(){
         JU.module.JUForm = JUFormModule();
     }
 
     $document.ready(onDOMReady);
 })(JU);
 
 