@extends('layouts.app')

@section('nav')
    @include('partials.home.nav') {{--Use the home navigation--}}
@stop

@section('content')
    @include('sweet::alert')
    @include('partials.forms.upload')
@stop

@section('footer')
    @include('partials.home.footer') {{--Use the home footer--}}
@stop
