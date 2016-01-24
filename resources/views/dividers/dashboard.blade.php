@extends('layouts.dashboard')

@section('nav')
    @include('partials.dashboard.nav')
@stop

@section('sidebar')
    @include('partials.dashboard.sidebar')
@stop

@section('content')
    @include('sweet::alert')
    @include('partials.dashboard.content')
@stop

@section('footer')
    {{-- @include('partials.dashboard.footer') --}}
@stop
