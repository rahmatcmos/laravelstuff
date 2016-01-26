@extends('layouts.home')

@section('nav')
    @include('partials.home.nav') {{--Use the home navigation--}}
@stop

@section('content')
    @include('partials.verification.confirmation')
@stop

@section('footer')
    @include('partials.home.footer') {{--Use the home footer--}}
@stop

