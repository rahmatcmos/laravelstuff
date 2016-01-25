(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var homepage = require('./modules/homepage');
var styling = require('./modules/form-styling-methods');
var scroll = require('./modules/scroll');
var prettyphoto = require('./modules/prettyphoto.js');

$(function () {
    // on document.ready()

    /******************************************* Start Homepage Scripts ************************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/') {
        homepage.initTooltipsterContactForm(); // !! MUST CALLED BEFORE validateRegistrationForm !!
        homepage.validateContactForm(); // Validate with the jquery validator plugin
        homepage.portfolioFilter();
        scroll.init();
        scroll.navigationScroll();
        scroll.smoothScrolling();
        prettyphoto.prettyPhoto();
    }

    /******************************************* End Homepage Scripts **************************************************/
});

},{"./modules/form-styling-methods":2,"./modules/homepage":3,"./modules/prettyphoto.js":4,"./modules/scroll":5}],2:[function(require,module,exports){
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
var scroll = require('./scroll');
var prettyphoto = require('./prettyphoto');

/**
 * JQuery validator validate method for form validation
 */

/******************************************* Start Homepage Functions ********************************************/

exports.validateContactForm = function () {
    $('#main-contact-form').validate({
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
        submitHandler: function submitHandler(form) {
            contactForm();
        },
        rules: {
            name: 'required',
            subject: 'required',
            message: 'required',
            email: {
                required: true,
                email: true
            }
        }
    });
};

exports.initTooltipsterContactForm = function (ids) {
    // Initialize tooltipster on form input elements
    styling.tooltipsterConfig('message', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('name', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('email', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('subject', 'tooltipster-light', 'top-right');
};

// Slider
$(document).ready(function () {
    var time = 7; // Time in seconds

    var $progressBar, $bar, $elem, isPause, tick, percentTime;

    // Init the carousel
    $("#main-slider").find('.owl-carousel').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging,
        //autoHeight : true,
        transitionStyle: "fadeUp"
    });

    // Init progressBar where elem is $("#owl-demo")
    function progressBar(elem) {
        $elem = elem;
        //build progress bar elements
        buildProgressBar();
        //start counting
        start();
    }

    // Create div#progressBar and div#bar then append to $(".owl-carousel")
    function buildProgressBar() {
        $progressBar = $("<div>", {
            id: "progressBar"
        });
        $bar = $("<div>", {
            id: "bar"
        });
        $progressBar.append($bar).appendTo($elem);
    }

    function start() {
        // Reset timer
        percentTime = 0;
        isPause = false;
        // Run interval every 0.01 second
        tick = setInterval(interval, 10);
    };

    function interval() {
        if (isPause === false) {
            percentTime += 1 / time;
            $bar.css({
                width: percentTime + "%"
            });
            // If percentTime is equal or greater than 100
            if (percentTime >= 100) {
                // Slide to next item
                $elem.trigger('owl.next');
            }
        }
    }

    //pause while dragging
    function pauseOnDragging() {
        isPause = true;
    }

    //moved callback
    function moved() {
        //clear interval
        clearTimeout(tick);
        //start again
        start();
    }
});

// Initiate WOW JS
new WOW().init();

// Portfolio filter
exports.portfolioFilter = function () {
    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    });
};

// Contact form
var contactForm = function contactForm() {
    var form = $('#main-contact-form');
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
        url: $(this).attr('action'),
        beforeSend: function beforeSend() {
            form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email word verzonden...</p>').fadeIn());
        }
    }).done(function (data) {
        form_status.html('<p class="text-success">Bedankt voor uw bericht, wij nemen zo spoedig mogelijk contact op...</p>').delay(3000).fadeOut();
        clearFields();
    });
};

var clearFields = function clearFields() {
    $('#main-contact-form').find("input[type=text], input[type=email], textarea").val("");
    $('#main-contact-form').find("input[type=text], input[type=email], textarea").removeClass("has-error");
    $('#name1').removeClass('glyphicon-ok');
    $('#email1').removeClass('glyphicon-ok');
    $('#subject1').removeClass('glyphicon-ok');
};

/******************************************* End Homepage Functions ********************************************/

},{"./form-styling-methods":2,"./prettyphoto":4,"./scroll":5}],4:[function(require,module,exports){
// Pretty Photo
"use strict";

exports.prettyPhoto = function () {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
};

},{}],5:[function(require,module,exports){
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
