<?php

use Illuminate\Database\Schema\Blueprint;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->timestampsTz();
        });

        // Insert 3 standard roles
        DB::table('roles')->insert([
            'name' => 'admin',
            'label' => 'Administrator',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('roles')->insert([
            'name' => 'user',
            'label' => 'CityGis User',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('roles')->insert([
            'name' => 'client',
            'label' => 'CityGis Client',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('roles')->insert([
            'name' => 'curator',
            'label' => 'Vehicle curator',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);

        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('label')->nullable();
            $table->timestampsTz();
        });

        // Insert the basic permissions
        DB::table('permissions')->insert([
            'name' => 'manage_site',
            'label' => 'Manage the site',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('permissions')->insert([
            'name' => 'upload_file',
            'label' => 'Upload a file',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('permissions')->insert([
            'name' => 'purchase_orders',
            'label' => 'Purchase order from the shop',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('permissions')->insert([
            'name' => 'manage_vehicles',
            'label' => 'Manage the CityGis vehicles',
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);

        Schema::create('permission_role', function (Blueprint $table) {
            $table->integer('permission_id')->unsigned();
            $table->integer('role_id')->unsigned();

            $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->primary([ 'permission_id', 'role_id' ]);
        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->integer('role_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->primary([ 'role_id', 'user_id' ]);
        });

        // Set administrator permissions
        for ($i = 1; $i < 5; $i++)
        {
            DB::table('permission_role')->insert([
                'permission_id' => $i,
                'role_id' => 1
            ]);
        }

        // Set user permissions
        DB::table('permission_role')->insert([
            'permission_id' => 2,
            'role_id' => 2
        ]);

        // Set client permissions
        DB::table('permission_role')->insert([
            'permission_id' => 3,
            'role_id' => 3
        ]);

        // Set curator permissions
        DB::table('permission_role')->insert([
            'permission_id' => 4,
            'role_id' => 3
        ]);
        DB::table('permission_role')->insert([
            'permission_id' => 4,
            'role_id' => 4
        ]);
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('permission_role');
        Schema::drop('role_user');
        Schema::drop('permissions');
        Schema::drop('roles');
    }
}
