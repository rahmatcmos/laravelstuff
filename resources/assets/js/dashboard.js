var styling = require('./modules/form-styling-methods')
var smoothscroll = require('./modules/smoothscroll')
var prettyphoto = require('./modules/prettyphoto.js')

$(function () { // on document.ready()
    /******************************************* Start Dashboard Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/shop/nl/list') {
        smoothscroll.init();
        smoothscroll.navigationScroll();
        smoothscroll.smoothScrolling();
        prettyphoto.prettyPhoto();
   }

    /******************************************* End Dashboard Scripts **********************************************/
});
