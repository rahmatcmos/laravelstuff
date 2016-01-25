<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCsvsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('csvs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('size')->unsigned()->nullable();
            $table->timestampsTz();
        });

        // Insert 4 files
        DB::table('csvs')->insert([
            'name' => 'Connections.csv',
            'size' => null,
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);

        DB::table('csvs')->insert([
            'name' => 'Positions.csv',
            'size' => null,
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('csvs')->insert([
            'name' => 'Monitoring.csv',
            'size' => null,
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);
        DB::table('csvs')->insert([
            'name' => 'Events.csv',
            'size' => null,
            'created_at' => Carbon\Carbon::now('Europe/Amsterdam'),
            'updated_at' => Carbon\Carbon::now('Europe/Amsterdam')
        ]);

        Schema::create('csv_user', function (Blueprint $table) {
            $table->integer('csv_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('csv_id')->references('id')->on('csvs')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->primary([ 'csv_id', 'user_id' ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('csv_user');
        Schema::drop('csvs');
    }
}
