<?php

namespace App\Http\Controllers;

use App\Charts\Charts;
use App\QueryHandler\QueryHandler;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ChartController extends Controller
{

    public function createChart()
    {
        $linechart = new Charts();
        $linechart->createLineChart();

        $columnchart = new Charts();
        $columnchart->createColumnChart();

        $QueryHandler = new QueryHandler();
        $unitids = $QueryHandler->getUnitIds();
        $page = "test";
        return view('test', compact('page', 'unitids'));

    }
}
