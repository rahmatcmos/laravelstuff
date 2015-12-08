<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{

    public function adminDashboard()
    {
        $page = 'Administrator - Dashboard';

        return view('dividers.dashboard', compact('page'));
    }


    public function userDashboard()
    {
        $page = 'Users - Dashboard';

        return view('dividers.dashboard', compact('page'));
    }

    public function inbox()
    {
        $page = 'Users - Inbox';

        return view('partials.dashboard..mail', compact('pages'));
    }
}
