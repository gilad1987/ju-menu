/**
 * Created by gtakoni on 14/10/2015.
 */


(function(JU){

    var isOpen;

    isOpen = false;

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function onDOMReady(){

        function changeState(e,open){
            var $parent;

            if(typeof open == 'boolean' && ( (isOpen && open) || (!isOpen && !open) )){
                return false;
            }
            if(typeof open == 'boolean'){
                $parent = $('.sign-up-to-newsletter');
            }

            if(!$parent){
                $parent = $(this).closest('.sign-up-to-newsletter');
            }

            $parent.trigger(JU.events.newsletterOpen);
            isOpen = !open;
            $parent.toggleClass('open',open);

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