var elixir = require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;
elixir(function (mix) {

    // Set the paths to the libraries
    var paths = {
        'jquery': './node_modules/jquery/',
        'bootstrap': './node_modules/bootstrap-sass/assets/',
        'fawesome': './node_modules/font-awesome/',
        'alert': './node_modules/sweetalert/',
        'validator': './node_modules/jquery-validation/',
        'tooltipster': './node_modules/tooltipster/',
        'pwstrenght': './node_modules/pwstrength-bootstrap/',
        'zxcvbn': './node_modules/zxcvbn/',
        'shiv': './node_modules/html5shiv/',
        'isotope': './node_modules/isotope-layout/',
        'assets': './resources/assets/'
    }

    mix.browserify("main.js", "public/output/bundle.js")
        .sass("app.scss", "public/output/", {includePaths: [paths.bootstrap + "stylesheets/", paths.fawesome + "scss/"]})
        .copy(paths.bootstrap + "fonts/bootstrap/**", "public/fonts/bootstrap/") // Copy the bootstrap fonts/icons
        .copy(paths.fawesome + "fonts/**", "public/fonts/") // Copy the font awesome fonts/icons
        .copy(paths.assets + "images", "public/img")
        .scripts([ // Concat all scripts
            paths.jquery + "dist/jquery.js",
            paths.validator + "dist/jquery.validate.js",
            paths.validator + "dist/additional-methods.js",
            paths.validator + "dist/localization/messages_nl.js",
            paths.alert + "dist/sweetalert.min.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            paths.pwstrenght + "dist/pwstrength-bootstrap-1.2.6.js",
            paths.zxcvbn + "dist/zxcvbn.js",
            paths.shiv + "dist/html5shiv.js",
            paths.isotope + "dist/isotope.pkgd.js",
            paths.assets + "js/prettyphoto.js",
            paths.assets + "js/inview.min.js",
            paths.assets + "js/mousescroll.js",
            paths.assets + "js/owl.carousel.min.js",
            paths.assets + "js/respond.min.js",
            paths.assets + "js/modernizr.min.js",
            paths.assets + "js/wow.min.js",
            paths.assets + "js/webshop.js",
            "public/output/bundle.js", // Mix produced bundled output of browserify with all other scripts
            paths.tooltipster + "js/jquery.tooltipster.js",
        ], "public/output/final.js", "./") // Final js file
        .styles([ // Concat all styles
            "public/output/app.css", // Mix produced output of compiled sass with all other styles
            paths.tooltipster + "css/tooltipster.css",
            paths.tooltipster + "css/themes/tooltipster-light.css",
            paths.tooltipster + "css/themes/tooltipster-noir.css",
            paths.tooltipster + "css/themes/tooltipster-punk.css",
            paths.tooltipster + "css/themes/tooltipster-shadow.css",
            paths.assets + "css/animate.min.css",
            paths.assets + "css/owl.carousel.css",
            paths.assets + "css/owl.transitions.css",
            paths.assets + "css/prettyphoto.css",
            paths.assets + "css/main.css",
            paths.alert + "dist/sweetalert.css",
            paths.assets + "css/webshop.css"
        ], "public/output/final.css", "./") // Final css file
        .version(["public/output/final.css", "public/output/final.js"]); // Version the final files here
});

