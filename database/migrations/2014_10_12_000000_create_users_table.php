<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            // Form input
            $table->string('firstname');
            $table->string('lastname');
            $table->string('phonenumber');
            $table->string('companyname')->nullable();
            $table->string('country');
            $table->string('zip');
            $table->string('streetnumber');
            $table->string('town');
            $table->string('province');
            $table->string('email')->unique();
            $table->string('password');

            // Configurations & meta data
            $table->boolean('verified')->default(false);
            $table->string('token')->nullable();
            $table->timestampTz('activated_at')->nullable();
            $table->timestampTz('last_login')->nullable();
            $table->string('reset_password_code')->nullable();
            $table->rememberToken();

            $table->timestampsTz();

            // Indexes
            $table->index('token');
            $table->index('reset_password_code');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
