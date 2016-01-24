@extends('layouts.login')

@section('nav')
    @include('partials.login.nav')
@stop

@section('content')
    @include('sweet::alert')
    @include('partials.login.form')
@stop

@section('footer')
    @include('partials.login.footer')
@stop
