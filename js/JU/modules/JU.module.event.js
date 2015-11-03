/**
 * Created by giladtakoni on 11/2/15.
 */


 (function(JU){

     if(typeof JU == 'undefined'){
         throw new Error('JU object is missing');
     }

     var $document;

     $document = $(document);

     //#TODO add description
     function JUEventModule(){

         var evetns = {};

         function on(key,func,context){
             if(typeof func != 'function'){
                 console.info(func);
                 console.info('Not a function');
             }
             if(typeof evetns[key] == 'undefined'){
                 evetns[key]=[];
             }
             evetns[key].push({
                 func:func,
                 context:context
             });
         }

         function off(){

         }

         function trigger(event){
             if(typeof events[event] == 'undefined') {
                 return;
             }

             var callbacks = evetns[event],
                 len=callbacks.length,
                 i = 0,
                 arg = arguments.splice(-1,1);

             for(;i<len;i++){
                 var context = callbacks[i]['context'] ? callbacks[i]['context'] : callbacks[i]['func'];
                 callbacks.apply(context,arg);
             }
         }


         return{
             on:on,
             off:off,
             trigger:trigger
         }

     }

     function onDOMReady(){
         JU.module.event = JUEventModule();
     }

     $document.ready(onDOMReady);
 })(JU);

