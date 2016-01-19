<?php

function flash($message)
{
    session()->flash('message', $message);
}

function countries()
{
    $countries = include_once(__DIR__.'/../vendor/umpirsky/country-list/country/icu/nl_NL/country.php');
    return $countries;
}
