<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Charts\Charts;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\QueryHandler\QueryHandler;

class DashboardController extends Controller
{
    public function getDashboard()
    {

        $this->createCharts();

        $QueryHandler = new QueryHandler();
        $ignitionids = $QueryHandler->getUnitIds('events');
        $connectionids = $QueryHandler->getUnitIds('connections');
        $speedids = $QueryHandler->getUnitIds('positions');

        $page = "Dashboard";

        // $fn = Auth::user()->firstname;
        // $page = $fn . ' - Dashboard';

        $old_path = getcwd();
        chdir('../CityGisProcess/scripts/');
        shell_exec('./launch');

        return view('dividers.dashboard', compact('page', 'ignitionids', 'speedids', 'connectionids'));
    }

    public function createCharts(){

        $ignitionLineChart = new Charts();
        $connectionLineChart = new Charts();
        $speedLineChart = new Charts();
        $ignitionColumnChart = new Charts();
        $connectionColumnChart = new Charts();
        $speedColumnChart = new Charts();

        $ignitionLineChart->createLineChart("ignitionLineChart");
        $connectionLineChart->createLineChart("connectionLineChart");
        $speedLineChart->createLineChart("speedLineChart");
        $ignitionColumnChart->createColumnChart("ignitionColumnChart");
        $connectionColumnChart->createColumnChart("connectionColumnChart");
        $speedColumnChart->createColumnChart("speedColumnChart");

    }
}
