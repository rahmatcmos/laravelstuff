var webshop = require('./modules/webshop')
var styling = require('./modules/form-styling-methods')
var smoothscroll = require('./modules/smoothscroll')
var prettyphoto = require('./modules/prettyphoto.js')

$(function () { // on document.ready()
    /******************************************* Start Webshop Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/shop/nl/list') {
        // webshop.setProductNumber(product);
        smoothscroll.init();
        smoothscroll.navigationScroll();
        smoothscroll.smoothScrolling();
        prettyphoto.prettyPhoto();
   }

    /******************************************* End Webshop Scripts **********************************************/
});
