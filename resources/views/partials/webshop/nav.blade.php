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
            <div class="navbar-brand">
                <a class="smooth-scroll site-name" data-section="#about" href="{{ (isset($page)) ? $page === 'Home' ? "#home" : "/" : false }} ">Citygis</a>
            </div>
            <!-- /logo -->
        </div>

        <!-- main nav -->
        <nav class="collapse navbar-collapse navbar-right" role="navigation">
            <div class="main-menu">
                <ul id="nav" class="nav navbar-nav">
                    <li class="scroll"><a class="apply-smooth-scroll"
                            href="#header-area" data-section="#header-area">Shop</a>
                    <li class="scroll"><a class='apply-smooth-scroll'
                            href="#items-area" data-section="#items-area">Data</a></li>
                    <li class="scroll"><a class='apply-smooth-scroll'
                            href="#contact-area" data-section="#contact-area">Contact</a></li>
                    <li><a href={{ (isset($page)) ? $page === 'Home' ? "#home" : "/" : false }}><span class="fa fa-home"></span> Terug</a></li>
                </ul>
            </div>
        </nav>
        <!-- /main nav -->
    </div>
</header>
