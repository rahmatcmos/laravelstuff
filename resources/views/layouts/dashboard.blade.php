<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ isset($page) ? $page : "" }}</title>
    <!-- Stylesheets -->
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
    <title></title>
    <!-- Bootstrap -->
</head>
<body>
<div class="container">
    @yield('content')
</div>

</body>
</html>