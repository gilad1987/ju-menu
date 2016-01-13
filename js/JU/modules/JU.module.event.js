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

         var _evetns = {};

         function on(key,func,context,target){
             if(typeof func != 'function'){
                 console.info(func);
                 console.info('Not a function');
             }
             if(typeof _evetns[key] == 'undefined'){
                 _evetns[key]=[];
             }
             _evetns[key].push({
                 func:func,
                 context:context,
                 target:target
             });
         }

         function off(){

         }

         function trigger(event){
             if(typeof _evetns[event.name] == 'undefined') {
                 return;
             }
             var callbacks = _evetns[event.name],
                 len=callbacks.length,
                 i = 0,
                 arg = arguments,
                 _target = event.target;

             for(;i<len;i++){
                 var currentTarget = callbacks[i]['target'];

                 if(_target !== currentTarget){
                     continue;
                 }

                 var context = callbacks[i]['context'] ? callbacks[i]['context'] : callbacks[i]['func'];
                 callbacks[i]['func'].apply(context,arg);
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

