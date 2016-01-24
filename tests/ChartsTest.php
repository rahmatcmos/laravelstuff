<?php

use App\Charts\Charts;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ChartsTest extends TestCase
{

    public function testCreateDataTable(){

        $pages = new App\Charts\Charts();

        $expected = \Lava::DataTable();

        $this->assertEquals($expected, $pages->createDataTable());

    }

}
