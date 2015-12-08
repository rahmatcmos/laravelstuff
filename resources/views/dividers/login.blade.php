@extends('layouts.app')

@section('nav')
    @include('partials.home.nav')
@stop

@section('content')
    @include('sweet::alert')
    @include('partials.forms.login')
@stop

@section('footer')
    @include('partials.home.footer')
@stop
