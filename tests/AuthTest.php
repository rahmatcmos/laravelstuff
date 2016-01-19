<?php

use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthTest extends TestCase
{

    /** @test */
    public function a_user_may_register_for_an_account_but_must_confirm_their_email()
    {
        $faker = Faker\Factory::create();
        $fn = $faker->firstName;
        $ln = $faker->lastName;
        $email = $faker->email;
        $cmp = $faker->company;
        $city = $faker->city;
        $state = $faker->state;

        $this->visit('/register')->type($fn, 'firstname')->type($ln, 'lastname')->type('0641774422',
            'phonenumber')->type($cmp, 'companyname')->type('2926PK', 'zip')->type('7',
            'streetnumber')->type($city, 'town')->type($state,
            'province')->type($email, 'email')->type('secret', 'password')->type('secret',
            'password_confirmation')->press('Verzenden');

        $this->seePageIs('register/confirm')//->see('')
        ->seeInDatabase('users', [ 'firstname' => $fn, 'verified' => 0 ]);

        $user = User::where('firstname', $fn)->first();

        $this->visit("register/confirm/{$user->token}")->seeInDatabase('users',
            [ 'firstname' => $fn, 'verified' => 1 ]);
    }


    /** @test */
    public function a_user_may_login()
    {
        $this->login()->seePageIs('dashboard');
    }


    /**
     * @param null $user
     * @return $this
     */
    protected function login($user = null)
    {
        $user = $user ?: factory(App\User::class)->create([ 'Password' => 'secret' ]);

        return $this->visit('login')->type($user->email, 'email')->type('secret', 'password')->press('Login');
    }
}
