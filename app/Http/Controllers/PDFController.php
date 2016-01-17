<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\User;
use PDF;

class PDFController extends Controller
{

    /**
     * @return \Illuminate\View\View
     */
    public function generatePDF()
    {
        $data = User::all();
        $pdf = PDF::loadView('dividers.report', compact('data'));
        return $pdf->stream();
    }
}