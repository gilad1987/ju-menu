/**
 * Created by gtakoni on 25/10/2015.
 */

function onModalFormsOpen(){
    JU.module.JUTabs.reset( $(this).find('.ju-tabset') );

}


//
$(document).ready(function(){
    //var $openModalLoginBtn =$('#open-modal-login')[0];
    //JU.module.event.on('expanded.close',function(){},$openModalLoginBtn,$openModalLoginBtn);
    var $loginModal = $('#login')[0];
    JU.module.event.on('modal.beforeOpen',onModalFormsOpen,$loginModal,$loginModal);

    var openMobileMenuElement = $('nav.links')[0];
    JU.module.event.on('expanded.open',JU.module.JUMenu.onChangeSate,openMobileMenuElement,openMobileMenuElement);
});