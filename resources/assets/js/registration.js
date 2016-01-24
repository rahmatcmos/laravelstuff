var registration = require('./modules/registration.js')
var styling = require('./modules/form-styling-methods')

$(function () { // on document.ready()
    /******************************************* Start Registration Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/register') {
        registration.initTooltipsterRegistrationForm(registration.requiredFieldsIds()); // !! MUST CALLED BEFORE validateRegistrationForm !!
        registration.passwordStrenghtChecker(); // Checks the strength of your password
        registration.validateRegistrationForm(); // Validate with the jquery validator plugin
        registration.onResizeGrowOrShrink(); // Resize textfield to 100% if window < 1200
        registration.watchRadioGroupAndToggleTooltipster(); // Toggle hide/show tooltip
   }

    /******************************************* End Registration Scripts **********************************************/
});
