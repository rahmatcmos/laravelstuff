/**
 * Change the autocomplete color for a single element
 * @param element
 */
exports.changeAutoCompleteColor = function (element) {
    $(element).attr('style', '-webkit-box-shadow: inset 0 0 0 1000px white !important; width: 100%;');
}

/**
 * Remove the autocomplete color for a single element
 * @param element
 */
exports.removeAutoCompleteColor = function (element) {
    $(element).css('-webkit-box-shadow', '');
}

/**
 * Used to change autocomplete color to white for all input fields
 */
exports.changeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
}

/**
 * Used to remove autocomplete color from all input fields
 */
exports.removeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
}

/**
 * Configuration for the tooltips
 * @param id
 * @param theme
 * @param position
 */
exports.tooltipsterConfig = function (id, theme, position) {
    var tooltip = $('#' + id).tooltipster({
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false,    // allow multiple tips to be open at a time
        position: position,  // display the tips on a specific position
        theme: theme, // set the theme
        touchDevices: false, // Don't show tooltips on touch devices
        delay: 100, // set the delay in milliseconds for the animation to kick in
        speed: 300, // se the speed of the animation
        animation: 'grow' // set the animation
    });
}
