<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- PDF title -->
    <title>@yield('title')</title>

    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{ elixir('output/final.css') }}"/>

</head>
<body>

<!-- Header -->
@yield('header')

<!-- Content -->
@yield('content')

<!-- Footer -->
@yield('footer')
</body>
</html>
