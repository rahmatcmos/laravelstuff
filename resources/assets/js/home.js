var homepage = require('./modules/homepage')
var styling = require('./modules/form-styling-methods')
var scroll = require('./modules/scroll')
var prettyphoto = require('./modules/prettyphoto.js')

$(function () { // on document.ready()

    /******************************************* Start Homepage Scripts ************************************************/


    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/') {
        homepage.initTooltipsterContactForm(); // !! MUST CALLED BEFORE validateRegistrationForm !!
        homepage.validateContactForm();// Validate with the jquery validator plugin
        homepage.portfolioFilter();
        scroll.init();
        scroll.navigationScroll();
        scroll.smoothScrolling();
        prettyphoto.prettyPhoto();
    }

    /******************************************* End Homepage Scripts **************************************************/
});
