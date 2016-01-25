var styling = require('./form-styling-methods')
var scroll = require('./scroll')
var prettyphoto = require('./prettyphoto')

/**
 * JQuery validator validate method for form validation
 */

/******************************************* Start Homepage Functions ********************************************/

exports.validateContactForm = function () {
    $('#main-contact-form').validate({
        errorPlacement: function (error, element) {
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
        success: function (label, element) {
            $(element).tooltipster('hide');
            var id_attr = "#" + $(element).attr("id") + "1";
            $(element).closest('.form-group').removeClass('has-error');
            $(id_attr).removeClass('glyphicon-remove').addClass('glyphicon-ok');
            styling.changeAutoCompleteColor(element);
        },
        submitHandler: function (form) {
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
}

exports.initTooltipsterContactForm = function (ids) {
    // Initialize tooltipster on form input elements
    styling.tooltipsterConfig('message', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('name', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('email', 'tooltipster-light', 'top-right');
    styling.tooltipsterConfig('subject', 'tooltipster-light', 'top-right');
}

// Slider
$(document).ready(function () {
    var time = 7; // Time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;

    // Init the carousel
    $("#main-slider").find('.owl-carousel').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
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
                $elem.trigger('owl.next')
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
            $portfolio.isotope({filter: selector});
            return false;
        });
    });
}


// Contact form
var contactForm = function () {
    var form = $('#main-contact-form');
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
        url: $(this).attr('action'),
        beforeSend: function () {
            form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email word verzonden...</p>').fadeIn());
        }
    }).done(function (data) {
        form_status.html('<p class="text-success">Bedankt voor uw bericht, wij nemen zo spoedig mogelijk contact op...</p>').delay(3000).fadeOut();
        clearFields();
    });
}

var clearFields = function () {
    $('#main-contact-form').find("input[type=text], input[type=email], textarea").val("");
    $('#main-contact-form').find("input[type=text], input[type=email], textarea").removeClass("has-error");
    $('#name1').removeClass('glyphicon-ok');
    $('#email1').removeClass('glyphicon-ok');
    $('#subject1').removeClass('glyphicon-ok');
}

/******************************************* End Homepage Functions ********************************************/
