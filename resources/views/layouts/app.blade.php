<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ isset($page) ? $page : "" }}</title>

    <!-- Web font -->
    <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet' type='text/css'>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }}"/>
    <link rel="stylesheet" href="{{ elixir('output/final.css') }}"/>
    <script src="{{elixir('output/final.js')}}"></script>
    <link rel="shortcut icon" href={{ URL::asset("img/ico/favicon.ico") }}>
    <link rel="apple-touch-icon-precomposed" sizes="144x144"
          href={{ URL::asset("img/ico/apple-touch-icon-144-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" sizes="114x114"
          href={{ URL::asset("img/ico/apple-touch-icon-114-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" sizes="72x72"
          href={{ URL::asset("img/ico/apple-touch-icon-72-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" href={{ URL::asset("img/ico/apple-touch-icon-57-precomposed.png") }}>
</head>
<body id="{{isset($page) ? $page : ""}}" class="{{isset($page) ? $page : ""}}">
@yield('nav')
@can('can_test')
    <h1>Hello world</h1>
@endcan
<div class="content">
    @yield('content')
    <div class="push"></div>
</div>
@yield('footer')
</body>
</html>
