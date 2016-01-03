<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class WebshopController extends Controller
{

    protected $page;


    /**
     * @return \Illuminate\View\View
     */
    public function getWebshop()
    {
        $page = "Webshop";

        return view('dividers.webshop', compact('page'));
    }
}