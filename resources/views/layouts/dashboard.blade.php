<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        @yield('title')
    </title>

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="{{ asset('css/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">

    <!-- App CSS file -->
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">

    <!-- Charts CSS -->
    <link href="{{ asset('css/morris.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link rel="shortcut icon" href={{ URL::asset("img/ico/favicon.ico") }}>
    <link rel="apple-touch-icon-precomposed" sizes="144x144"
          href={{ URL::asset("img/ico/apple-touch-icon-144-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" sizes="114x114"
          href={{ URL::asset("img/ico/apple-touch-icon-114-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" sizes="72x72"
          href={{ URL::asset("img/ico/apple-touch-icon-72-precomposed.png") }}>
    <link rel="apple-touch-icon-precomposed" href={{ URL::asset("img/ico/apple-touch-icon-57-precomposed.png") }}>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>

<div id="wrapper">
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        @yield('nav')
    </nav>

    <div id="page-wrapper">
        <div class="container-fluid">
            @yield('content')

            @yield('footer')
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->

<!-- jQuery -->
<script src="{{ asset('js/jquery-2.1.4.min.js') }}"></script>

<!-- Bootstrap Core JavaScript -->
<script src="{{ asset('js/bootstrap.min.js') }}"></script>

<!-- Charts JavaScript -->
<script src="{{ asset('js/raphael.min.js') }}"></script>
<script src="{{ asset('js/morris.min.js') }}"></script>
<script src="{{ asset('js/morris-data.js') }}"></script>

</body>
</html>