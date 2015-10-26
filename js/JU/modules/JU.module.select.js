/**
 * Created by gtakoni on 25/10/2015.
 */

(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    //#TODO  write documentation
    //#TODO  add cache
    function JUSelectModule(){

        var selectOpen = [];

        function onSelectClick(e){

            var $target = $(e.target);
            if(!$target.hasClass('ju-option')){
                return;
            }

            var $parent = $target.closest('.ju-select');
            var $select = $parent.find('select');
            var $expander = $parent.find('.ju-expander');

            $select.val($target.data('value'));
            $parent.find('.ju-option').removeClass('active');
            $target.addClass('active');
            $expander.text($target.text());
            $expander.trigger('click');
        }

        $document.on('click',onSelectClick);
    }

    function onDOMReady(){
        JU.module.JUSelect = JUSelectModule();

    }

    $document.ready(onDOMReady);
})(JU);