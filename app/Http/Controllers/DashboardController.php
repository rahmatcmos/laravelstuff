<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function getDashboard()
    {
        $page = "Dashboard";

        // $fn = Auth::user()->firstname;
        // $page = $fn . ' - Dashboard';

        $old_path = getcwd();
        chdir('../CityGisProcess/scripts/');
        shell_exec('./launch');

        return view('dividers.dashboard', compact('page'));
    }
}
