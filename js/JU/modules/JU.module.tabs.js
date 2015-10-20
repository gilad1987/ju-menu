/**
 * Created by giladtakoni on 10/18/15.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    var JU_TAB_CLASS={
      JUtabsWrapper:'ju-tabs-wrapper',
      JUtabsContentSelector:'ju-tabs-content-selector',
      JUtabsButtonSelector:'ju-tabs-button-selector'
    };

    function JUtabsModule(){

    }


    function onDOMReady(){
        JU.module.JUTabs = JUtabsModule();
    }
    $document.ready(onDOMReady);
})(JU);