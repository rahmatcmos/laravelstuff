(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var styling = require('./modules/form-styling-methods');
var scroll = require('./modules/scroll');
var prettyphoto = require('./modules/prettyphoto.js');

$(function () {
    // on document.ready()
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

},{"./modules/form-styling-methods":2,"./modules/prettyphoto.js":3,"./modules/scroll":4}],2:[function(require,module,exports){
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
// Pretty Photo
"use strict";

exports.prettyPhoto = function () {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
};

},{}],4:[function(require,module,exports){
'use strict';

exports.smoothScrolling = function () {
    $('.main-menu ul li .apply-smooth-scroll,.smooth-scroll').scrollingTo();
};

// Navigation Scroll
exports.navigationScroll = function () {
    (function ($) {
        $.fn.scrollingTo = function (opts) {
            var defaults = {
                animationTime: 1000,
                easing: '',
                callbackBeforeTransition: function callbackBeforeTransition() {},
                callbackAfterTransition: function callbackAfterTransition() {}
            };

            var config = $.extend({}, defaults, opts);

            $(this).click(function (e) {
                var eventVal = e;
                e.preventDefault();

                var $section = $(document).find($(this).data('section'));
                if ($section.length < 1) {
                    return false;
                }

                if ($('html, body').is(':animated')) {
                    $('html, body').stop(true, true);
                }

                var scrollPos = $section.offset().top;

                if ($(window).scrollTop() == scrollPos) {
                    return false;
                }

                config.callbackBeforeTransition(eventVal, $section);

                $('html, body').animate({
                    'scrollTop': scrollPos + 'px'
                }, config.animationTime, config.easing, function () {
                    config.callbackAfterTransition(eventVal, $section);
                });
            });
        };
    })(jQuery);
};

// init
exports.init = function () {
    // SmoothScroll
    smoothScroll.init();
};

},{}]},{},[1]);
