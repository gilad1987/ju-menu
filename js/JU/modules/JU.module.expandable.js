/**
 * Created by giladtakoni on 10/17/15.
 */


(function(JU){

    var $document;

    $document = $(document);

    function onDOMReady(){

        function expandable(e){
            var $target;

            $target = $(e.target);

            $('.expandable.expanded').removeClass('expanded');

            if(!$target.hasClass('expandable')){
                $target = $(e.target).closest('.expandable');
            }

            $target.toggleClass('expanded');

        }

        $document.on('click',expandable);
    }


    $document.ready(onDOMReady);


})(JU);