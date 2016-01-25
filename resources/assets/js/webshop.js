var styling = require('./modules/form-styling-methods')
var scroll = require('./modules/scroll')
var prettyphoto = require('./modules/prettyphoto.js')

$(function () { // on document.ready()
    /******************************************* Start Webshop Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/shop/nl/list') {
        scroll.init();
        scroll.navigationScroll();
        scroll.smoothScrolling();
        prettyphoto.prettyPhoto();
   }

    /******************************************* End Webshop Scripts **********************************************/
});
