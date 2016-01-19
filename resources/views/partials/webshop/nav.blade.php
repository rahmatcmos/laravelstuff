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
                   href="#">
                    <span style="color: #ef662f"><strong>CityGis (Data verkoop)</strong></span>
                </a>
            </div>
            <!-- /logo -->
        </div>

        <!-- main nav -->
        <nav class="collapse navbar-collapse navbar-right" role="navigation">
            <div class="main-menu">
                <ul id="nav" class="nav navbar-nav">
                    <li class="scroll"><a href="#header-area">Shop</a></li>
                    <li class="scroll"><a href="#items-area">Data</a></li>
                    <li class="scroll"><a href="#contact-area">Contact</a></li>
                    <li class="scroll"><a href={{ (isset($page)) ? $page === 'Home' ? "#home" : "/" : false }}><span class="fa fa-home"></span> Terug</a></li>
                </ul>
            </div>
        </nav>
        <!-- /main nav -->
    </div>
</header>
