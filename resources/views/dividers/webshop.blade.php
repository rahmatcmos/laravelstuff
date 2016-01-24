@extends('layouts.webshop')

@section('nav')
    @include('partials.webshop.nav')
@stop

@section('content')
    @include('partials.webshop.header')
    @include('partials.webshop.items')
    @include('partials.webshop.contact')
@stop

@section('footer')
    @include('partials.webshop.footer')
    @include('partials.webshop.modals')
@stop
