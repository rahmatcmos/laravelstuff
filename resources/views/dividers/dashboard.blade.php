@extends('layouts.dashboard')

@section('title')
    Dashboard
@stop

@section('nav')
    @include('partials.dashboard.navbar')
    @include('partials.dashboard.sidebar')
@stop

@section('content')
    @include('partials.dashboard.header')
    @include('partials.dashboard.weather')
    @include('partials.dashboard.charts')
@stop

@section('footer')
@stop
