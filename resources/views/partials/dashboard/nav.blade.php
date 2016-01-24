<header id="top-header" class="navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <ul class="list-unstyled">
                <li>
                    <a href="javascript:;" class="left-sidebar-toggled"><i class="fa fa-align-left"></i></a>
                </li>
                <li>
                    <a class="smooth-scroll site-name" data-section="#about" href="{{ (isset($page)) ? $page === 'Home' ? "#home" : "/" : false }} ">Citygis</a>
                </li>
            </ul>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li>
                <form class="navbar-form form-input-flat">
                    <div class="form-group">
                        <input type="search" class="form-control" placeholder="Enter keyword...">
                        <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </li>

            <li class="dropdown navbar-user">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="image">
                        <img class="img-circle img-thumbnail wow flipInX animated"
                             src={{ URL::asset("img/testimonial/01.jpg") }} alt="Mugshot_Sjors-Sparreboom">
                    </span>
                    <span class="hidden-xs" styl>Sjors Sparreboom</span> <b class="caret"></b>
                </a>
                <ul class="dropdown-menu pull-right">
                    <li><a href="javascript:;">Edit Profile</a></li>
                    <!-- <li><a href="javascript:;"><span class="badge badge&#45;danger pull&#45;right">2</span> Inbox</a></li> -->
                        <li><a href="javascript:;">Calendar</a></li>
                        <li><a href="javascript:;">Setting</a></li>
                        <li class="divider"></li>
                        <li><a href="javascript:;">Log Out</a></li>
                </ul>
            </li>
        </ul>
    </div>
</header>
