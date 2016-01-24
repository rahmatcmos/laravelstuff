<?php

namespace App\Http\Controllers;

use App\Charts\Charts;
use App\QueryHandler\QueryHandler;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    protected $page;


    /**
     * @return \Illuminate\View\View
     */
    public function getHome()
    {
        $page = "Home";

        // \Auth::loginUsingId(1);
        return view('dividers.home', compact('page'));
    }

    public function getTest()
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

