<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Dashboard - SB Admin</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="css/sb-admin.css" rel="stylesheet">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="http://cdn.oesmith.co.uk/morris-0.4.3.min.css">
</head>

<body>


<!-- <div id="wrapper"> -->
<!--     <!&#45;&#45; Sidebar &#45;&#45;> -->
<!--     <nav class="navbar navbar&#45;inverse navbar&#45;fixed&#45;top" role="navigation"> -->
<!--         <!&#45;&#45; Brand and toggle get grouped for better mobile display &#45;&#45;> -->
<!--         <div class="navbar&#45;header"> -->
<!--             <button type="button" class="navbar&#45;toggle" data&#45;toggle="collapse" data&#45;target=".navbar&#45;ex1&#45;collapse"> -->
<!--                 <span class="sr&#45;only">Toggle navigation</span> -->
<!--                 <span class="icon&#45;bar"></span> -->
<!--                 <span class="icon&#45;bar"></span> -->
<!--                 <span class="icon&#45;bar"></span> -->
<!--             </button> -->
<!--             <a class="navbar&#45;brand" href="index.html">SB Admin</a> -->
<!--         </div> -->
<!--  -->
<!--         <!&#45;&#45; Collect the nav links, forms, and other content for toggling &#45;&#45;> -->
<!--         <div class="collapse navbar&#45;collapse navbar&#45;ex1&#45;collapse"> -->
<!--             <ul class="nav navbar&#45;nav side&#45;nav"> -->
<!--                 <li class="active"><a href="index.html"><i class="fa fa&#45;dashboard"></i> Dashboard</a></li> -->
<!--                 <li><a href="charts.html"><i class="fa fa&#45;bar&#45;chart&#45;o"></i> Charts</a></li> -->
<!--                 <li><a href="tables.html"><i class="fa fa&#45;table"></i> Tables</a></li> -->
<!--                 <li><a href="forms.html"><i class="fa fa&#45;edit"></i> Forms</a></li> -->
<!--                 <li><a href="typography.html"><i class="fa fa&#45;font"></i> Typography</a></li> -->
<!--                 <li><a href="bootstrap&#45;elements.html"><i class="fa fa&#45;desktop"></i> Bootstrap Elements</a></li> -->
<!--                 <li><a href="bootstrap&#45;grid.html"><i class="fa fa&#45;wrench"></i> Bootstrap Grid</a></li> -->
<!--                 <li><a href="blank&#45;page.html"><i class="fa fa&#45;file"></i> Blank Page</a></li> -->
<!--                 <li class="dropdown"> -->
<!--                     <a href="#" class="dropdown&#45;toggle" data&#45;toggle="dropdown"><i class="fa fa&#45;caret&#45;square&#45;o&#45;down"></i> Dropdown <b class="caret"></b></a> -->
<!--                     <ul class="dropdown&#45;menu"> -->
<!--                         <li><a href="#">Dropdown Item</a></li> -->
<!--                         <li><a href="#">Another Item</a></li> -->
<!--                         <li><a href="#">Third Item</a></li> -->
<!--                         <li><a href="#">Last Item</a></li> -->
<!--                     </ul> -->
<!--                 </li> -->
<!--             </ul> -->
<!--  -->
<!--             <ul class="nav navbar&#45;nav navbar&#45;right navbar&#45;user"> -->
<!--                 <li class="dropdown messages&#45;dropdown"> -->
<!--                     <a href="#" class="dropdown&#45;toggle" data&#45;toggle="dropdown"><i class="fa fa&#45;envelope"></i> Messages <span class="badge">7</span> <b class="caret"></b></a> -->
<!--                     <ul class="dropdown&#45;menu"> -->
<!--                         <li class="dropdown&#45;header">7 New Messages</li> -->
<!--                         <li class="message&#45;preview"> -->
<!--                             <a href="#"> -->
<!--                                 <span class="avatar"><img src="http://placehold.it/50x50"></span> -->
<!--                                 <span class="name">John Smith:</span> -->
<!--                                 <span class="message">Hey there, I wanted to ask you something...</span> -->
<!--                                 <span class="time"><i class="fa fa&#45;clock&#45;o"></i> 4:34 PM</span> -->
<!--                             </a> -->
<!--                         </li> -->
<!--                         <li class="divider"></li> -->
<!--                         <li class="message&#45;preview"> -->
<!--                             <a href="#"> -->
<!--                                 <span class="avatar"><img src="http://placehold.it/50x50"></span> -->
<!--                                 <span class="name">John Smith:</span> -->
<!--                                 <span class="message">Hey there, I wanted to ask you something...</span> -->
<!--                                 <span class="time"><i class="fa fa&#45;clock&#45;o"></i> 4:34 PM</span> -->
<!--                             </a> -->
<!--                         </li> -->
<!--                         <li class="divider"></li> -->
<!--                         <li class="message&#45;preview"> -->
<!--                             <a href="#"> -->
<!--                                 <span class="avatar"><img src="http://placehold.it/50x50"></span> -->
<!--                                 <span class="name">John Smith:</span> -->
<!--                                 <span class="message">Hey there, I wanted to ask you something...</span> -->
<!--                                 <span class="time"><i class="fa fa&#45;clock&#45;o"></i> 4:34 PM</span> -->
<!--                             </a> -->
<!--                         </li> -->
<!--                         <li class="divider"></li> -->
<!--                         <li><a href="#">View Inbox <span class="badge">7</span></a></li> -->
<!--                     </ul> -->
<!--                 </li> -->
<!--                 <li class="dropdown alerts&#45;dropdown"> -->
<!--                     <a href="#" class="dropdown&#45;toggle" data&#45;toggle="dropdown"><i class="fa fa&#45;bell"></i> Alerts <span class="badge">3</span> <b class="caret"></b></a> -->
<!--                     <ul class="dropdown&#45;menu"> -->
<!--                         <li><a href="#">Default <span class="label label&#45;default">Default</span></a></li> -->
<!--                         <li><a href="#">Primary <span class="label label&#45;primary">Primary</span></a></li> -->
<!--                         <li><a href="#">Success <span class="label label&#45;success">Success</span></a></li> -->
<!--                         <li><a href="#">Info <span class="label label&#45;info">Info</span></a></li> -->
<!--                         <li><a href="#">Warning <span class="label label&#45;warning">Warning</span></a></li> -->
<!--                         <li><a href="#">Danger <span class="label label&#45;danger">Danger</span></a></li> -->
<!--                         <li class="divider"></li> -->
<!--                         <li><a href="#">View All</a></li> -->
<!--                     </ul> -->
<!--                 </li> -->
<!--                 <li class="dropdown user&#45;dropdown"> -->
<!--                     <a href="#" class="dropdown&#45;toggle" data&#45;toggle="dropdown"><i class="fa fa&#45;user"></i> John Smith <b class="caret"></b></a> -->
<!--                     <ul class="dropdown&#45;menu"> -->
<!--                         <li><a href="#"><i class="fa fa&#45;user"></i> Profile</a></li> -->
<!--                         <li><a href="#"><i class="fa fa&#45;envelope"></i> Inbox <span class="badge">7</span></a></li> -->
<!--                         <li><a href="#"><i class="fa fa&#45;gear"></i> Settings</a></li> -->
<!--                         <li class="divider"></li> -->
<!--                         <li><a href="#"><i class="fa fa&#45;power&#45;off"></i> Log Out</a></li> -->
<!--                     </ul> -->
<!--                 </li> -->
<!--             </ul> -->
<!--         </div><!&#45;&#45; /.navbar&#45;collapse &#45;&#45;> -->
<!--     </nav> -->
<!--  -->
<!--     <div id="page&#45;wrapper"> -->
<!--  -->
<!--         <div class="row"> -->
<!--             <div class="col&#45;lg&#45;12"> -->
<!--                 <h1>Dashboard <small>Statistics Overview</small></h1> -->
<!--                 <ol class="breadcrumb"> -->
<!--                     <li class="active"><i class="fa fa&#45;dashboard"></i> Dashboard</li> -->
<!--                 </ol> -->
<!--                 <div class="alert alert&#45;success alert&#45;dismissable"> -->
<!--                     <button type="button" class="close" data&#45;dismiss="alert" aria&#45;hidden="true">&#38;times;</button> -->
<!--                     Welcome to SB Admin by <a class="alert&#45;link" href="http://startbootstrap.com">Start Bootstrap</a>! Feel free to use this template for your admin needs! We are using a few different plugins to handle the dynamic tables and charts, so make sure you check out the necessary documentation links provided. -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div><!&#45;&#45; /.row &#45;&#45;> -->
<!--  -->
<!--         <div class="row"> -->
<!--             <div class="col&#45;lg&#45;3"> -->
<!--                 <div class="panel panel&#45;info"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <div class="row"> -->
<!--                             <div class="col&#45;xs&#45;6"> -->
<!--                                 <i class="fa fa&#45;comments fa&#45;5x"></i> -->
<!--                             </div> -->
<!--                             <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                 <p class="announcement&#45;heading">456</p> -->
<!--                                 <p class="announcement&#45;text">New Mentions!</p> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                     <a href="#"> -->
<!--                         <div class="panel&#45;footer announcement&#45;bottom"> -->
<!--                             <div class="row"> -->
<!--                                 <div class="col&#45;xs&#45;6"> -->
<!--                                     View Mentions -->
<!--                                 </div> -->
<!--                                 <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                     <i class="fa fa&#45;arrow&#45;circle&#45;right"></i> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </a> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="col&#45;lg&#45;3"> -->
<!--                 <div class="panel panel&#45;warning"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <div class="row"> -->
<!--                             <div class="col&#45;xs&#45;6"> -->
<!--                                 <i class="fa fa&#45;check fa&#45;5x"></i> -->
<!--                             </div> -->
<!--                             <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                 <p class="announcement&#45;heading">12</p> -->
<!--                                 <p class="announcement&#45;text">To&#45;Do Items</p> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                     <a href="#"> -->
<!--                         <div class="panel&#45;footer announcement&#45;bottom"> -->
<!--                             <div class="row"> -->
<!--                                 <div class="col&#45;xs&#45;6"> -->
<!--                                     Complete Tasks -->
<!--                                 </div> -->
<!--                                 <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                     <i class="fa fa&#45;arrow&#45;circle&#45;right"></i> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </a> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="col&#45;lg&#45;3"> -->
<!--                 <div class="panel panel&#45;danger"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <div class="row"> -->
<!--                             <div class="col&#45;xs&#45;6"> -->
<!--                                 <i class="fa fa&#45;tasks fa&#45;5x"></i> -->
<!--                             </div> -->
<!--                             <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                 <p class="announcement&#45;heading">18</p> -->
<!--                                 <p class="announcement&#45;text">Crawl Errors</p> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                     <a href="#"> -->
<!--                         <div class="panel&#45;footer announcement&#45;bottom"> -->
<!--                             <div class="row"> -->
<!--                                 <div class="col&#45;xs&#45;6"> -->
<!--                                     Fix Issues -->
<!--                                 </div> -->
<!--                                 <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                     <i class="fa fa&#45;arrow&#45;circle&#45;right"></i> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </a> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="col&#45;lg&#45;3"> -->
<!--                 <div class="panel panel&#45;success"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <div class="row"> -->
<!--                             <div class="col&#45;xs&#45;6"> -->
<!--                                 <i class="fa fa&#45;comments fa&#45;5x"></i> -->
<!--                             </div> -->
<!--                             <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                 <p class="announcement&#45;heading">56</p> -->
<!--                                 <p class="announcement&#45;text">New Orders!</p> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                     <a href="#"> -->
<!--                         <div class="panel&#45;footer announcement&#45;bottom"> -->
<!--                             <div class="row"> -->
<!--                                 <div class="col&#45;xs&#45;6"> -->
<!--                                     Complete Orders -->
<!--                                 </div> -->
<!--                                 <div class="col&#45;xs&#45;6 text&#45;right"> -->
<!--                                     <i class="fa fa&#45;arrow&#45;circle&#45;right"></i> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </a> -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div><!&#45;&#45; /.row &#45;&#45;> -->
<!--  -->
<!--         <div class="row"> -->
<!--             <div class="col&#45;lg&#45;12"> -->
<!--                 <div class="panel panel&#45;primary"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <h3 class="panel&#45;title"><i class="fa fa&#45;bar&#45;chart&#45;o"></i> Traffic Statistics: October 1, 2013 &#45; October 31, 2013</h3> -->
<!--                     </div> -->
<!--                     <div class="panel&#45;body"> -->
<!--                         <div id="morris&#45;chart&#45;area"></div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div><!&#45;&#45; /.row &#45;&#45;> -->
<!--  -->
<!--         <div class="row"> -->
<!--             <div class="col&#45;lg&#45;4"> -->
<!--                 <div class="panel panel&#45;primary"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <h3 class="panel&#45;title"><i class="fa fa&#45;long&#45;arrow&#45;right"></i> Traffic Sources: October 1, 2013 &#45; October 31, 2013</h3> -->
<!--                     </div> -->
<!--                     <div class="panel&#45;body"> -->
<!--                         <div id="morris&#45;chart&#45;donut"></div> -->
<!--                         <div class="text&#45;right"> -->
<!--                             <a href="#">View Details <i class="fa fa&#45;arrow&#45;circle&#45;right"></i></a> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="col&#45;lg&#45;4"> -->
<!--                 <div class="panel panel&#45;primary"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <h3 class="panel&#45;title"><i class="fa fa&#45;clock&#45;o"></i> Recent Activity</h3> -->
<!--                     </div> -->
<!--                     <div class="panel&#45;body"> -->
<!--                         <div class="list&#45;group"> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">just now</span> -->
<!--                                 <i class="fa fa&#45;calendar"></i> Calendar updated -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">4 minutes ago</span> -->
<!--                                 <i class="fa fa&#45;comment"></i> Commented on a post -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">23 minutes ago</span> -->
<!--                                 <i class="fa fa&#45;truck"></i> Order 392 shipped -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">46 minutes ago</span> -->
<!--                                 <i class="fa fa&#45;money"></i> Invoice 653 has been paid -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">1 hour ago</span> -->
<!--                                 <i class="fa fa&#45;user"></i> A new user has been added -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">2 hours ago</span> -->
<!--                                 <i class="fa fa&#45;check"></i> Completed task: "pick up dry cleaning" -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">yesterday</span> -->
<!--                                 <i class="fa fa&#45;globe"></i> Saved the world -->
<!--                             </a> -->
<!--                             <a href="#" class="list&#45;group&#45;item"> -->
<!--                                 <span class="badge">two days ago</span> -->
<!--                                 <i class="fa fa&#45;check"></i> Completed task: "fix error on sales page" -->
<!--                             </a> -->
<!--                         </div> -->
<!--                         <div class="text&#45;right"> -->
<!--                             <a href="#">View All Activity <i class="fa fa&#45;arrow&#45;circle&#45;right"></i></a> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="col&#45;lg&#45;4"> -->
<!--                 <div class="panel panel&#45;primary"> -->
<!--                     <div class="panel&#45;heading"> -->
<!--                         <h3 class="panel&#45;title"><i class="fa fa&#45;money"></i> Recent Transactions</h3> -->
<!--                     </div> -->
<!--                     <div class="panel&#45;body"> -->
<!--                         <div class="table&#45;responsive"> -->
<!--                             <table class="table table&#45;bordered table&#45;hover table&#45;striped tablesorter"> -->
<!--                                 <thead> -->
<!--                                 <tr> -->
<!--                                     <th>Order # <i class="fa fa&#45;sort"></i></th> -->
<!--                                     <th>Order Date <i class="fa fa&#45;sort"></i></th> -->
<!--                                     <th>Order Time <i class="fa fa&#45;sort"></i></th> -->
<!--                                     <th>Amount (USD) <i class="fa fa&#45;sort"></i></th> -->
<!--                                 </tr> -->
<!--                                 </thead> -->
<!--                                 <tbody> -->
<!--                                 <tr> -->
<!--                                     <td>3326</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>3:29 PM</td> -->
<!--                                     <td>$321.33</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3325</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>3:20 PM</td> -->
<!--                                     <td>$234.34</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3324</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>3:03 PM</td> -->
<!--                                     <td>$724.17</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3323</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>3:00 PM</td> -->
<!--                                     <td>$23.71</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3322</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>2:49 PM</td> -->
<!--                                     <td>$8345.23</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3321</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>2:23 PM</td> -->
<!--                                     <td>$245.12</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3320</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>2:15 PM</td> -->
<!--                                     <td>$5663.54</td> -->
<!--                                 </tr> -->
<!--                                 <tr> -->
<!--                                     <td>3319</td> -->
<!--                                     <td>10/21/2013</td> -->
<!--                                     <td>2:13 PM</td> -->
<!--                                     <td>$943.45</td> -->
<!--                                 </tr> -->
<!--                                 </tbody> -->
<!--                             </table> -->
<!--                         </div> -->
<!--                         <div class="text&#45;right"> -->
<!--                             <a href="#">View All Transactions <i class="fa fa&#45;arrow&#45;circle&#45;right"></i></a> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div><!&#45;&#45; /.row &#45;&#45;> -->
<!--  -->
<!--     </div><!&#45;&#45; /#page&#45;wrapper &#45;&#45;> -->
<!--  -->
<!-- </div><!&#45;&#45; /#wrapper &#45;&#45;> -->
<!--  -->
<!-- <!&#45;&#45; JavaScript &#45;&#45;> -->
<!-- <script src="js/jquery&#45;1.10.2.js"></script> -->
<!-- <script src="js/bootstrap.js"></script> -->
<!--  -->
<!-- <!&#45;&#45; Page Specific Plugins &#45;&#45;> -->
<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael&#45;min.js"></script> -->
<!-- <script src="http://cdn.oesmith.co.uk/morris&#45;0.4.3.min.js"></script> -->
<!-- <script src="js/morris/chart&#45;data&#45;morris.js"></script> -->
<!-- <script src="js/tablesorter/jquery.tablesorter.js"></script> -->
<!-- <script src="js/tablesorter/tables.js"></script> -->

</body>
</html>
