<!DOCTYPE html>
<html lang="nl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $page }}</title>

        <!-- Web font -->
            <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" href="{{ elixir('output/dashboard.css') }}"/>
            <script src="{{elixir('output/dashboard.js')}}"></script>

            <link rel="shortcut icon" href={{ URL::asset("img/ico/favicon.ico") }}>
            <link rel="apple-touch-icon-precomposed" sizes="144x144"
                                                     href={{ URL::asset("img/ico/apple-touch-icon-144-precomposed.png") }}>
            <link rel="apple-touch-icon-precomposed" sizes="114x114"
                                                     href={{ URL::asset("img/ico/apple-touch-icon-114-precomposed.png") }}>
            <link rel="apple-touch-icon-precomposed" sizes="72x72"
                                                     href={{ URL::asset("img/ico/apple-touch-icon-72-precomposed.png") }}>
            <link rel="apple-touch-icon-precomposed" href={{ URL::asset("img/ico/apple-touch-icon-57-precomposed.png") }}>
    </head>
<body id="{{ $page }}" class="{{ $page }}">
    @yield('nav')

<!-- #wrapper -->
<div id="wrapper">
    @yield('sidebar')

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="content">
                        @yield('content')
                        <div class="push"></div>
                    </div>
                        @yield('footer')
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->
    </div>
</div>
<!-- /#wrapper -->

<!-- Menu Toggle Script -->
<script>
$(".left-sidebar-toggled").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
</script>

<script src="{{elixir('output/global.js')}}"></script>
 </body>
</html>
