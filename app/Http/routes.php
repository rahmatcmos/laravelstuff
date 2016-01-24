<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Home route controller
Route::get('/', 'HomeController@getHome');

// Webshop route
Route::get('/shop/nl/list', 'WebshopController@getWebshop');

// Registration specific routes
Route::get('register', 'RegistrationController@getRegister');
Route::get('register/confirm', 'RegistrationController@confirmAccount');
Route::get('register/confirm/{token}', 'RegistrationController@confirmEmail');
Route::post('register', 'RegistrationController@postRegister');

// Session/login specific routes
Route::get('login', 'SessionsController@login');
Route::post('login', 'SessionsController@postLogin');
Route::get('logout', 'SessionsController@logout');

// Dashboard
Route::get('dashboard', 'DashboardController@getDashboard');
// Upload specific routes
Route::post('dashboard', 'UploadController@postUpload');

// Admin
Route::get('admin', 'AdminController@getAdmin');
Route::post('admin', 'AdminController@postAdmin');

// PDF Reports
Route::get('/test/rapport', 'PDFController@generatePDF');

//Generate Charts
Route::get('/charts', 'ChartController@createChart');

// Test
Route::get('test',function(){
    return view('test');
});

//Generate Charts
Route::get('/charts', 'ChartController@createChart');
Route::get('/getJson', 'JsonController@getJson');

