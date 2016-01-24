var homepage = require('./modules/homepage')
var styling = require('./modules/form-styling-methods')
var smoothscroll = require('./modules/smoothscroll')
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
        smoothscroll.init();
        smoothscroll.navigationScroll();
        smoothscroll.smoothScrolling();
        prettyphoto.prettyPhoto();
    }

    /******************************************* End Homepage Scripts **************************************************/
});
