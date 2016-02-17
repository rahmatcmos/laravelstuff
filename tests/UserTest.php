<?php

use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{

    /** @test */
    public function testHome()
    {
        $this->visit('/')
             ->see('CityGis');
    }


    /** @test */
    public function testError()
    {
        $respons = $this->call('GET', '/about/');
        $this->assertEquals(200, $response->status());
    }

    /** @test */
    public function testHash()
    {
        $this->visit('/')
             ->click('LEES MEER')
             ->seePageIs('/');
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
