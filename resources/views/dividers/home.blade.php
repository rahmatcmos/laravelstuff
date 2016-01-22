@extends('layouts.app')

@section('nav')
    @include('partials.home.nav')
@stop

@section('content')
    @include('partials.home.main-slider')
    @include('partials.home.about')
    @include('partials.home.features')
    @include('partials.home.shop')
    {{-- @include('partials.home.portfolio') --}}
    @include('partials.home.testimonials')
    @include('partials.home.contact')
@stop

@section('footer')
    @include('partials.home.footer')
@stop

