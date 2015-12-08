<?php

namespace App\Http\Controllers;

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
}

