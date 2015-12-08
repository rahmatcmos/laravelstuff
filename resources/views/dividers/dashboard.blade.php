@extends('layouts.dashboard')

@section('nav')
    @include('partials.home.nav')
@stop

@section('content')
    @include('sweet::alert')
    @can('manage_site')
        @include('partials.dashboard.admin')
    @else
        @include('partials.dashboard.user')
    @endcan
@stop

@section('footer')
    @include('partials.home.footer')
@stop
