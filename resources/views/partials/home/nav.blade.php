<header id="top-header" class="navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <!-- responsive nav button -->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- /responsive nav button -->

            <!-- logo -->
            <div class="navbar-brand" style="margin-top: 15px;">
                <a class="smooth-scroll" data-section="#main-slider"
                   href={{ (isset($page)) ? $page === 'Home' ? "#home" : "/" : false }} >
                    <span style="color: #ef662f"><strong>CityGis</strong></span>
                    {{--                    <img src={{ URL::asset('img/logo.png') }} alt="">--}}
                </a>
            </div>
            <!-- /logo -->
        </div>

        <!-- main nav -->
        <nav class="collapse navbar-collapse navbar-right" role="navigation">
            <div class="main-menu">
                <ul id="nav" class="nav navbar-nav">
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#home" : "/" }} data-section="#main-slider">Home</a>
                    </li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#about" : "/#about" }} data-section="#about">About</a>
                    </li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#features" : "/#features" }} data-section="#features">Features</a>
                    </li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#cta2" : "/#cta2" }} data-section="#cta2">Shop</a>
                    </li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#upload" : "/#upload" }} data-section="#upload">Upload</a>
                    </li>
                    <!-- <li class="scroll"><a class='apply&#45;smooth&#45;scroll' -->
                    <!--                       href={{ $page === 'Home' ? "#portfolio" : "/#portfolio" }} data&#45;section="#portfolio">Portfolio</a> -->
                    </li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                                          href={{ $page === 'Home' ? "#contact-area" : "/#contact-area" }} data-section="#contact-area">Contact</a>
                    </li> @if (Auth::guest())
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class=""></span> Account <b
                                        class="caret"></b></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="/login"><span class="fa fa-sign-in fa-lg"></span> Login</a></li>
                                <li><a href="/register"><span class="fa fa-user fa-lg"></span> Registreer</a></li>
                            </ul>
                        </li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span
                                        class="glyphicon fa fa-user fa-md"></span> {{'Hello ' . Auth::user()->firstname }}
                                <b class="caret"></b></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="/dashboard"><span class="fa fa-gear fa-md"> Settings</span></a></li>
                                <li><a href="/dashboard/mail"><span class="fa fa-envelope fa-md"> Inbox</span></a></li>
                                <li class="divider"></li>
                                <li><a href="/logout"><span class="fa fa-power-off fa-md"> Logout</span></a></li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </nav>
        <!-- /main nav -->
    </div>
</header>
