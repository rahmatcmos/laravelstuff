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

Route::get('dashboard', 'DashboardController@userDashboard');
Route:: get('dashboard/mail', 'DashboardController@inbox');

Route:;get('error', function() {
    return view('test');
});

// Registration specific routes
Route::get('register', 'RegistrationController@getRegister');
Route::get('register/confirm', 'RegistrationController@confirmAccount');
Route::get('register/confirm/{token}', 'RegistrationController@confirmEmail');
Route::post('register', 'RegistrationController@postRegister');

// Session/login specific routes
Route::get('login', 'SessionsController@login');
Route::post('login', 'SessionsController@postLogin');
Route::get('logout', 'SessionsController@logout');

//Route::get('dashboard', ['middleware' => 'auth', function() {
//    $page = 'User dashboard';
//    return view('dashboard.user', compact('page'));
//}]);

Route::get('admin', 'AdminController@getAdmin');
Route::post('admin', 'AdminController@postAdmin');

// Upload specific routes
Route::get('/upload', 'UploadController@getUpload');
Route::post('/upload', 'UploadController@postUpload');

