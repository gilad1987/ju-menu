/**
 * Created by gtakoni on 25/10/2015.
 */

function onModalFormsOpen($elem){
    JU.module.JUTabs.reset( $elem.find('.ju-tabset') );

}
//
//$(document).ready(function(){
//    var contactForm = new FormValidator('contact',[
//        {
//            name: 'first_name',
//            rules: 'required|alpha'
//        }
//    ],function(errors, event) {
//        if (errors.length > 0) {
//            if (errors.length > 0) {
//                var errorString = '';
//
//                for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
//                    $(errors[i].element).closest('.input-wrapper').addClass('error');
//                }
//            }
//        }
//    });
//
//});