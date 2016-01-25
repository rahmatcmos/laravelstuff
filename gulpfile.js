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
        // Stable libs can be grabbed from the node_modules directory
        'jquery'    : './node_modules/jquery/',
        'bootstrap' : './node_modules/bootstrap-sass/assets/',
        'fawesome'  : './node_modules/font-awesome/',
        'zxcvbn'    : './node_modules/zxcvbn/',

        // Non stable libs need to be copy pasted here
        'jsaddins'  : './resources/assets/js/addins/',
        'cssaddins' : './resources/assets/css/addins/',

        // Custom CSS & JS
        'css'       : './resources/assets/css/',
        'js'        : './resources/assets/js/',

        // Assets directory
        'assets'    : './resources/assets/',

        // Output directory
        'output'    : './public/output/',
    }

    // Global
    mix.browserify("global.js", "public/output/global_bundle.js")
        .sass("app.scss", "public/output/", {includePaths: [paths.bootstrap + "stylesheets/", paths.fawesome + "scss/"]})
        .copy(paths.bootstrap + "fonts/bootstrap/**", "public/fonts/bootstrap/")    // Copy the bootstrap fonts/icons
        .copy(paths.fawesome + "fonts/**", "public/fonts/")                         // Copy the font awesome fonts/icons
        .copy(paths.assets + "images", "public/img")
        .scripts([

                paths.jquery      + "dist/jquery.js",

                paths.jsaddins    + "sweetalert.js",
                paths.bootstrap   + "javascripts/bootstrap.js",

                paths.jsaddins    + "html5shiv.js",
                paths.jsaddins    + "isotope.pkgd.js",
                paths.jsaddins    + "prettyphoto.js",
                paths.jsaddins    + "inview.min.js",
                paths.jsaddins    + "mousescroll.js",
                paths.jsaddins    + "owl.carousel.min.js",
                paths.jsaddins    + "respond.min.js",
                paths.jsaddins    + "modernizr.min.js",
                paths.jsaddins    + "wow.min.js",

                paths.output      + "global_bundle.js",

        ], paths.output + "global.js", "./")
        .styles([

                paths.output      + "app.css",

                paths.cssaddins   + "animate.min.css",
                paths.cssaddins   + "owl.carousel.css",
                paths.cssaddins   + "owl.transitions.css",
                paths.cssaddins   + "prettyphoto.css",
                paths.cssaddins   + "sweetalert.css",
                paths.css         + "global.css",                 // Use the global.css


        ], paths.output + "global.css", "./");

    // Dashboard
    mix.browserify("dashboard.js", "public/output/dashboard_bundle.js")
        .scripts([

                paths.jsaddins    + "bootstrap-filestyle.js",
                paths.jsaddins    + "jquery.slimscroll.js",

                paths.output      + "dashboard_bundle.js",

        ], paths.output + "dashboard.js", "./")
        .styles([

                paths.css         + "dashboard.css",

        ], paths.output + "dashboard.css", "./")

        // Home
        mix.browserify("home.js", "public/output/home_bundle.js")
        .scripts([


                paths.jsaddins    + "tooltipster.js",
                paths.jsaddins    + "jquery.validate.js",        // jquery.validator
                paths.jsaddins    + "additional-methods.js",     // jquery.validator
                paths.jsaddins    + "messages_nl.js",            // jquery.validator

                paths.output      + "home_bundle.js",

        ], paths.output + "home.js", "./")
        .styles([


                paths.cssaddins   + "tooltipster.css",
                paths.cssaddins   + "tooltipster-light.css",

                paths.css         + "home.css",

        ], paths.output + "home.css", "./")

        // Webshop
        mix.browserify("webshop.js", "public/output/webshop_bundle.js")
        .scripts([

                paths.output      + "webshop_bundle.js",

        ], paths.output + "webshop.js", "./")
        .styles([


                paths.css         + "home.css",

                paths.css         + "webshop.css",

        ], paths.output + "webshop.css", "./");

    // Registration
    mix.browserify("registration.js", "public/output/registration_bundle.js")
        .scripts([

                paths.zxcvbn      + "dist/zxcvbn.js",            // Needs to be imported from the node_modules map
                paths.jsaddins    + "pwstrenght.js",             // Bootstrap password strength bar to be used in combinaton wth zxcvbn
                paths.jsaddins    + "jquery.validate.js",        // jquery.validator
                paths.jsaddins    + "additional-methods.js",     // jquery.validator
                paths.jsaddins    + "messages_nl.js",            // jquery.validator
                paths.jsaddins    + "tooltipster.js",

                paths.output      + "registration_bundle.js",

        ], paths.output + "registration.js", "./")
        .styles([

                paths.output      + "home.css",                  // Use the styles from the homepage

                paths.cssaddins   + "tooltipster.css",
                paths.cssaddins   + "tooltipster-light.css",


        ], paths.output + "registration.css", "./");

    // Login
    mix.browserify("login.js", "public/output/login_bundle.js")
        .scripts([ 

                paths.output      + "login_bundle.js",

        ], paths.output + "login.js", "./")
        .styles([


                paths.css         + "home.css",

        ], paths.output + "login.css", "./");

    // Version all the mixed files
    mix.version([
            "public/output/dashboard.css",
            "public/output/dashboard.js",

            "public/output/webshop.css",
            "public/output/webshop.js",

            "public/output/login.css",
            "public/output/login.js",

            "public/output/registration.css",
            "public/output/registration.js",

            "public/output/home.css",
            "public/output/home.js",

            "public/output/global.css",
            "public/output/global.js",
    ]);
});

