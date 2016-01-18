<?php

namespace App\Http\Controllers;

use App\Charts\Charts;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ChartController extends Controller
{
    public function createChart(){

        $barray = array(14100042, 14100064, 15030000);

        $this->testConnection();
        $chart = new Charts();
        $chart->createChart($barray, "events", "Line");
        return view('test');


    }

    public function testConnection(){
        if(\DB::connection()->getDatabaseName())
        {
            echo "Connected sucessfully to database \n".\DB::connection()->getDatabaseName().".";
        }
    }

}
