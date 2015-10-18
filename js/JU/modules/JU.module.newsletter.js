/**
 * Created by gtakoni on 14/10/2015.
 */


(function(JU){

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;
    var isOpen;

    isOpen = false;

    $document = $(document);

    function onDOMReady(){

        var addClass;

        function changeState(e,open){
            var $parent;

            if(typeof open == 'boolean' && !open && !isOpen){
                return false;
            }

            if(typeof open == 'boolean'){
                $parent = $('.sign-up-to-newsletter');
            }

            if(!$parent){
                $parent = $(this).closest('.sign-up-to-newsletter');
            }

            isOpen = addClass = !isOpen;

            $parent.toggleClass('open',addClass);
            $parent.trigger(JU.events.newsletterOpen);
        }

        function onModalOpen(e){
            changeState(e,false);
        }

        function onSearchOpen(e){
            changeState(e,false);
        }

        $document.on(JU.events.modalOpen,onModalOpen);
        $document.on(JU.events.searchOpen,onSearchOpen);

        $('.newsletter-btn').on('click',changeState);
    }

    $document.ready(onDOMReady);
})(JU);