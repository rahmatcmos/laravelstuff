var registration = require('./registration')
var homepage = require('./homepage')
var styling = require('./form-styling-methods')
var admin = require('./admin')

$(function () { // on document.ready()

    /******************************************* Start Homepage Scripts ************************************************/


    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/') {
        homepage.initTooltipsterContactForm(); // !! MUST CALLED BEFORE validateRegistrationForm !!
        homepage.validateContactForm();// Validate with the jquery validator plugin
        homepage.initPlugins();
        homepage.navigationScroll();
        homepage.smoothScrolling();
        homepage.portfolioFilter();
        homepage.prettyPhoto();
    }

    /******************************************* End Homepage Scripts **************************************************/

    /******************************************* Start Registration Scripts ********************************************/

    if (top.location.pathname === '/register') {
        registration.initTooltipsterRegistrationForm(registration.requiredFieldsIds()); // !! MUST CALLED BEFORE validateRegistrationForm !!
        registration.passwordStrenghtChecker(); // Checks the strength of your password
        registration.validateRegistrationForm(); // Validate with the jquery validator plugin
        registration.onResizeGrowOrShrink(); // Resize textfield to 100% if window < 1200
        registration.watchRadioGroupAndToggleTooltipster(); // Toggle hide/show tooltip
   }

    /******************************************* End Registration Scripts **********************************************/
});
