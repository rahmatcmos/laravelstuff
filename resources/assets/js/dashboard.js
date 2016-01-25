var styling     = require('./modules/form-styling-methods')
var scroll      = require('./modules/scroll')
var charts      = require('./modules/chartmaker')

$(function () { // on document.ready()
    /******************************************* Start Dashboard Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/dashboard') {
        scroll.init();
        scroll.navigationScroll();
        scroll.smoothScrolling();
        charts.init();
   }

    /******************************************* End Dashboard Scripts **********************************************/
});
