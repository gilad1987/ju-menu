/**
 * Created by gtakoni on 14/10/2015.
 */

(function(JU){

    var isOpen = false;

    if(typeof JU == 'undefined'){
        throw new Error('JU object is missing');
    }

    var $document;

    $document = $(document);

    function closeSearchBar(){
        if(!isOpen){
            return false;
        }

        JU.cache.$body.removeClass('search-open');
        isOpen = false;
    }

    function openSearchBar(){

        if(isOpen){
            return false;
        }

        JU.cache.$body.addClass('search-open');
        JU.cache.$body.trigger(JU.events.searchOpen);
        isOpen = true;
    }

    function onModalOpen(){
        closeSearchBar();
    }

    function onNewsletterOpen(e){
        closeSearchBar();
    }

    function onDOMReady(){
        $('.search-bar-open-button').on('click',openSearchBar);
        $('.search-bar-close-button').on('click',closeSearchBar);
        $document.on(JU.events.newsletterOpen,onNewsletterOpen);
    }

    $document.ready(onDOMReady);
})(JU);


