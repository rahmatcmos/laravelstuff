var styling     = require('./modules/form-styling-methods')
var scroll      = require('./modules/scroll')
var prettyphoto = require('./modules/prettyphoto.js')
var charts      = require('./modules/chartmaker.js')

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
        prettyphoto.prettyPhoto();
        charts.initCharts();
   }

    /******************************************* End Dashboard Scripts **********************************************/
});
