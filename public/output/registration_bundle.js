(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var registration = require('./modules/registration.js');
var styling = require('./modules/form-styling-methods');

$(function () {
    // on document.ready()
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

},{"./modules/form-styling-methods":2,"./modules/registration.js":3}],2:[function(require,module,exports){
/**
 * Change the autocomplete color for a single element
 * @param element
 */
'use strict';

exports.changeAutoCompleteColor = function (element) {
    $(element).attr('style', '-webkit-box-shadow: inset 0 0 0 1000px white !important; width: 100%;');
};

/**
 * Remove the autocomplete color for a single element
 * @param element
 */
exports.removeAutoCompleteColor = function (element) {
    $(element).css('-webkit-box-shadow', '');
};

/**
 * Used to change autocomplete color to white for all input fields
 */
exports.changeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
};

/**
 * Used to remove autocomplete color from all input fields
 */
exports.removeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
};

/**
 * Configuration for the tooltips
 * @param id
 * @param theme
 * @param position
 */
exports.tooltipsterConfig = function (id, theme, position) {
    var tooltip = $('#' + id).tooltipster({
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: position, // display the tips on a specific position
        theme: theme, // set the theme
        touchDevices: false, // Don't show tooltips on touch devices
        delay: 100, // set the delay in milliseconds for the animation to kick in
        speed: 300, // se the speed of the animation
        animation: 'grow' // set the animation
    });
};

},{}],3:[function(require,module,exports){
'use strict';

var styling = require('./form-styling-methods');
/**
 * Created by jls on 7/30/15.
 */

/******************************************* Start Registration Functions ********************************************/

/**
 * JQuery validator validate method for form validation
 */
exports.validateRegistrationForm = function () {
    $('#registration-form').validate({
        errorPlacement: function errorPlacement(error, element) {
            var lastError = $(element).data('lastError'),
                newError = $(error).text();

            $(element).data('lastError', newError);

            if (newError !== '' && newError !== lastError) {
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');

                var id_attr = "#" + $(element).attr("id") + "1";
                $(element).closest('.form-group').addClass('has-error');
                $(id_attr).removeClass('glyphicon-ok').addClass('glyphicon-remove');
                styling.removeAutoCompleteColor(element);
            }
        },
        success: function success(label, element) {
            $(element).tooltipster('hide');
            var id_attr = "#" + $(element).attr("id") + "1";
            $(element).closest('.form-group').removeClass('has-error');
            $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
            styling.changeAutoCompleteColor(element);
        },
        rules: {
            firstname: 'required',
            lastname: 'required',
            town: 'required',
            province: 'required',
            phonenumber: {
                required: {
                    depends: function depends() {
                        $('#phonenumber').val().replace(/ /g, '');
                        return true;
                    }
                },
                phoneNL: {
                    depends: function depends() {
                        if (!$('#else').is(':checked')) return true;else return false;
                    }
                }
            },
            zip: {
                postalcodeNL: {
                    depends: function depends() {
                        if (!$('#else').is(':checked')) return true;else return false;
                    }
                },
                required: true,
                onkeyup: false,
                remote: {
                    depends: function depends() {
                        if ($(this).val() !== "" && $('#streetnumber').val() !== '' && !$('#else').is(':checked')) {
                            getZipCode($(this).val().replace(/ /g, ''));
                        }
                    }
                }
            },
            streetnumber: {
                required: true,
                streetnumber: true,
                onkeyup: false,
                remote: {
                    depends: function depends() {
                        if ($(this).val() !== '' && $('#zip').val() !== '' && !$('#else').is(':checked')) {
                            getZipCode($('#zip').val().replace(/ /g, ''));
                        }
                    }
                }
            },
            password: {
                required: true,
                minlength: 6
            },
            password_confirmation: {
                required: true,
                minlength: 6,
                equalTo: '#password'
            },
            email: {
                required: true,
                email: true
            },
            countries: {
                required: '#else:checked'
            }
        }
    });
    setupAutoCompleteFields();
    toggleHiddenFields();
};

var setupAutoCompleteFields = function setupAutoCompleteFields() {
    $('.autocomplete').hide();
    //$("#province, #town").prop('disabled', false);
};

jQuery.validator.addMethod("streetnumber", function (value, element) {
    return this.optional(element) || /^\d+[a-zA-Z]?$/.test(value);
}, "Voer een gelding huisnummer in Bijv. 10C of 7.");

/**
 * Toggle hidden part of the registration form
 */
var toggleHiddenFields = function toggleHiddenFields() {
    var element = $('#else');
    var initial = element.is(':checked');
    var countries = $('#countries')[initial ? 'removeClass' : 'addClass']('hide');
    // var inputs = countries.find('option').attr('disabled', !initial);
    $('#NL, #else').change(function () {
        $('.tooltipstered').tooltipster('reposition');
        countries[$('#NL').is(':checked') ? 'addClass' : 'removeClass']('hide');
        $('#NL').is(':checked') ? $('#countries').val('') : '';
        $('#else').is(':checked') ? 'addClass' : 'removeClass';
        $('#town, #province, #zip, #streetnumber').val('');
        if ($('#else').is(':checked')) {
            if ($('#province').val() == '' && $('#province1').hasClass('glyphicon-ok')) $("#province1").removeClass('glyphicon-ok');
            if ($('#town').val() == '' && $('#town1').hasClass('glyphicon-ok')) $("#town1").removeClass('glyphicon-ok');
            if ($('#zip').val() == '' && $('#zip1').hasClass('glyphicon-ok')) $("#zip1").removeClass('glyphicon-ok');
            if ($('#streetnumber').val() == '' && $('#streetnumber1').hasClass('glyphicon-ok')) $("#streetnumber1").removeClass('glyphicon-ok');
            //$("#province, #town").prop('readonly', false);
            $(".autocomplete").show();
        }
        if ($('#NL').is(':checked')) {
            if ($('#province').val() == '' && $('#province1').hasClass('glyphicon-ok')) $("#province1").removeClass('glyphicon-ok');
            if ($('#town').val() == '' && $('#town1').hasClass('glyphicon-ok')) $("#town1").removeClass('glyphicon-ok');
            if ($('#zip').val() == '' && $('#zip1').hasClass('glyphicon-ok')) $("#zip1").removeClass('glyphicon-ok');
            if ($('#streetnumber').val() == '' && $('#streetnumber1').hasClass('glyphicon-ok')) $("#streetnumber1").removeClass('glyphicon-ok');
            //$("#province, #town").prop('readonly', true);
            $(".autocomplete").hide();
        }
        $('#choice-select').prop('disabled', true);
    });
};

/**
 * Initialize Tooltipster library
 * @param ids
 */
exports.initTooltipsterRegistrationForm = function (ids) {
    // Initialize tooltipster on form input elements
    $.each(ids, function (index, value) {
        switch (value) {
            case 'zip':
                styling.tooltipsterConfig(value, 'tooltipster-light', 'top-right');
                break;
            case 'town':
                styling.tooltipsterConfig(value, 'tooltipster-light', 'bottom-right');
                break;
            case 'NL':
                break;
            case 'else':
                break;
            default:
                styling.tooltipsterConfig(value, 'tooltipster-light', 'top-right');
                break;
        }
    });
};

/**
 * Implementation for the password strength checker
 */
exports.passwordStrenghtChecker = function () {
    "use strict";
    var options = {};
    options.ui = {
        container: "#pwd-container",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };
    $('#password').pwstrength(options);
};

/**
 * The id of the required fields
 * @returns {string[]}
 */
exports.requiredFieldsIds = function () {
    var ids = ['firstname', 'lastname', 'phonenumber', 'NL', 'else', 'zip', 'streetnumber', 'town', 'province', 'email', 'countries', 'password', 'password_confirmation'];
    return ids;
};

/**
 * Make a call to the postcode API and returns address information in json
 * @param zipcode
 */
var getZipCode = function getZipCode(zipcode) {
    $.ajax({
        type: "GET",
        url: "http://api.postcodeapi.nu/" + zipcode,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        headers: {
            'Accept-Language': 'nl',
            'Api-key': '9bff6cf81e53a05567538da8bb93e84b30704e78'
        },
        dataType: "json"
    }).done(function (data) {
        $('#town1, #province1').addClass('glyphicon-ok').removeClass('glyphicon-remove');
        $('#province').val(data['resource'].province);
        $('#town').val(data['resource'].town);
        $('.autocomplete').show();
    }).fail(function () {
        $('#zip').tooltipster('show');
        $('#zip').css('-webkit-box-shadow', '');
        $('#zip').closest('.form-group').addClass('has-error');
        $('#zip').removeClass('valid').addClass('error');
        $('#zip1, #town1, #province1').removeClass('glyphicon-ok').addClass('glyphicon-remove');
        $('#province').val('');
        $('#town').val('');
        $('.autocomplete').hide();
        console.clear();
    });
};

/**
 * When resizing execute to manipulate fields
 */
exports.onResizeGrowOrShrink = function () {
    $(window).resize(function () {
        growOrShrink();
    });
    growOrShrink();
};

/**
 * Used to manipulate the size of certain fields
 */
var growOrShrink = function growOrShrink() {
    var countries = $('#countries');
    var zip = $('#zip');
    var streetnumber = $('#streetnumber');
    var province = $('#province');
    var town = $('#town');
    if ($(window).width() < 1200) {
        $(countries).css({ 'width': '100%', 'border-radius': '0px' });
        $(zip).parent().removeClass('registration-form-shrink-field-60').addClass('registration-form-grow-field-max');
        $(streetnumber).parent().removeClass('registration-form-shrink-field-35').addClass('registration-form-grow-field-max');
        $(town).parent().removeClass('registration-form-shrink-field-60').addClass('registration-form-grow-field-max');
        $(province).parent().removeClass('registration-form-shrink-field-35').addClass('registration-form-grow-field-max');
    } else {
        $(countries).css({ 'width': '100%', 'border-radius': '0px' });
        $(zip).parent().removeClass('registration-form-grow-field-max').addClass('registration-form-shrink-field-60');
        $(streetnumber).parent().removeClass('registration-form-grow-field-max').addClass('registration-form-shrink-field-35');
        $(town).parent().removeClass('registration-form-grow-field-max').addClass('registration-form-shrink-field-60');
        $(province).parent().removeClass('registration-form-grow-field-max').addClass('registration-form-shrink-field-35');
    }
};

exports.watchRadioGroupAndToggleTooltipster = function () {
    if ($('#NL').click(function () {
        $('#countries').tooltipster('hide');
        $('#province').tooltipster('hide');
        $('#town').tooltipster('hide');
    })) ;
    if ($('#else').click(function () {
        $('#countries').tooltipster('show');
        $('#province').tooltipster('show');
        $('#town').tooltipster('show');
        $('.tooltipstered').tooltipster('reposition');
    })) ;
};

/******************************************* End Registration Functions ********************************************/

},{"./form-styling-methods":2}]},{},[1]);
