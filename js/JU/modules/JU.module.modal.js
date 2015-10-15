/**
 * Created by gtakoni on 14/10/2015.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function onDOMReady(){

        function onModalButtonClick(e){

            e.stopPropagation();
            e.preventDefault();
        }


        $('a.modal-button').on('click',onModalButtonClick);
    }

    $document.ready(onDOMReady);
})(JU);

