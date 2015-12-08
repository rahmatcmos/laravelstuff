<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'firstname' => $faker->firstName,
        'lastname' => $faker->lastName,
        'phonenumber' => $faker->phoneNumber,
        'companyname' => $faker->company,
        'country' => $faker->country,
        'zip' => $faker->address,
        'streetnumber' => $faker->numberBetween(1, 999999),
        'town' => $faker->city,
        'province' => str_random(40),
        'email' => $faker->email,
        'verified' => true,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});
