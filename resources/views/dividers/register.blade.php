@extends('layouts.app')

@section('nav')
    @include('partials.home.nav')
@stop

@section('content')
    @include('partials.forms.registration')
@stop

@section('footer')
    @include('partials.home.footer')
@stop

