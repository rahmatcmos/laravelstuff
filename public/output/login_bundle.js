(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var styling = require('./modules/form-styling-methods');

$(function () {
  // on document.ready()
  /******************************************* Start Login Scripts ********************************************/

  /**
   * global
   */
  styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

  if (top.location.pathname === '/login') {}
  // Add methods

  /******************************************* End Login Scripts **********************************************/
});

},{"./modules/form-styling-methods":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
