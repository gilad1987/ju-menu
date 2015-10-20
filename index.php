<?php
$version = rand(0,10000000000000);
?>
<!DOCTYPE html>
<html>
<head lang="en">

    <meta charset="UTF-8">
    <title>jerusalem U Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/common.css?v=<?php echo $version;?>">

    <link rel="stylesheet" type="text/css" href="css/login.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/menu.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/modal.css?v=<?php echo $version;?>">

    <script src="jquery-1.11.3.min.js"></script>
    <script src="login.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/JU.settingApp.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/JU.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.expandable.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.modal.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.menu.js?v=<?php echo $version;?>"></script>
<!--    <script src="js/JU/modules/JU.module.search.js?v=--><?php //echo $version;?><!--"></script>-->

</head>
<body class="">

<div id="ju-modal" class="ju-modal ju-expandable">
    <div class="inner">
        <i class="fa fa-times close-modal-area ju-expandable"></i>
        <div id="content" class="wrapper-content">

        </div>
    </div>
</div>

<div class="mask"></div>
<button id="back-to-top" class="scroll-top"><i class="fa fa-angle-up"></i></button>

<nav class="social-and-login">
    <div class="max-width-content">
        <ul class="login">
            <li class="ju-expandable test-login ju-modal-button" data-dependencies-selectors="#ju-modal|" data-callback="JU.module.JUModal.onChangeSate" data-modal-content-selector="#login">
                <a class="ju-expander">
                    <span class="table">
                        <span class="cell">
                            <i class="fa fa-user"></i>
                            <span>User Login</span>
                        </span>
                    </span>
                </a>

            </li>
            <li  class="sign-up-to-newsletter ju-expandable" >
                <a class=" ju-expander">
                    <span class="table">
                        <span class="cell">
                            <i class="fa fa-envelope-o"></i>
                            <i class="fa fa-times"></i>
                            <span>Sign Up for JU News</span>
                        </span>
                    </span>
                </a>

                <div class="wrapper">
                    <input type="text" placeholder="Enter Your Email Address Here">
                    <button class="btn orange"><span>KEEP ME UPDATED!</span></button>
                </div>
            </li>
        </ul>

        <?php require_once 'social-buttons.php'?>
    </div>
</nav>

<header class="mobile-menu ju-expandable" data-dependencies-selectors="nav.links|" data-callback="JU.module.JUMenu.onChangeSate">
    <button id="open-mobile-menu-btn" class="ju-expander" >
        <i class="fa fa-bars"></i>
        <i class="fa fa-times"></i>
    </button>

    <a href="" class="donate-btn tablet-only">Donate</a>

    <div class="ju-logo">
        <div class="table">
            <div class="cell">
                <a>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 262.3 303.9" enable-background="new 0 0 262.3 303.9" xml:space="preserve">
                        <g>
                            <polygon fill="#228ACB" points="249,34.8 259.1,17.4 239,17.4 238.6,17.4 228.5,0 218.4,17.4 197.9,17.4 208.4,35.5 198.3,52.8
                                218.4,52.8 228.5,70.2 238.6,52.8 259.4,52.8 	"/>
                            <path fill="#154D9C" d="M173.1,183.6c0,22.9-18.6,41.5-41.5,41.5c-22.9,0-41.5-18.6-41.5-41.5c0-22.9,18.6-41.5,41.5-41.5
                                C154.5,142,173.1,160.6,173.1,183.6"/>
                            <path fill="#154D9C" d="M59,169.6v-33.2H8.4v35.2c0,80,43.9,123,113.4,126.5v-46.8C82.5,247.4,59,219,59,169.6"/>
                            <path fill="#228ACB" d="M204.2,84.8v86.9c0,49.1-23.7,76.1-62.8,79.8v46.6c69.3-3.9,113.4-46.9,113.4-128.9V84.8H204.2z"/>
                        </g>
                    </svg>

                       <span class="text">
                           <span class="company-name">
                               <span class="azure">Jerusalem</span>
                               <span class="blue">U</span>
                           </span>
                           <span class="slogan">Get Educated. Get Empowered.</span>
                       </span>
                </a>

            </div>
        </div>



    </div>
</header>

<nav class="links ju-expandable">
   <div class="relative">
       <div class="main-menu">
           <div class="max-width-content">

               <div class="mobile-search-bar tablet-only mobile-only">
                   <i class="fa fa-search"></i>
                   <input name="q" placeholder="Search the site">
                   <i class="fa fa-times-circle"></i>
               </div>

               <div id="search-bar" class="search-bar desktop-only ju-expandable">
                   <a   class="search-bar-open-button open-search-btn ju-expander" title="Search bar">
                       <span class="table">
                           <span class="cell">
                               <span class="center">
                                   <i class="fa fa-search"></i>
                               </span>
                           </span>
                       </span>
                   </a>

                   <div class="input-wrapper">
                       <input type="text" placeholder="Insert text to search....">
                   </div>

                   <div id="close-btn" class="close-btn search-bar-close-button ju-expander">
                          <div class="table">
                              <div class="cell">
                                  <div class="center">
                                      <i class="fa fa-times"></i>
                                  </div>
                              </div>
                          </div>

                   </div>
               </div>


               <div class="ju-logo">
                   <div class="table">
                       <div class="cell">
                           <a>
                               <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 262.3 303.9" enable-background="new 0 0 262.3 303.9" xml:space="preserve">
                        <g>
                            <polygon fill="#228ACB" points="249,34.8 259.1,17.4 239,17.4 238.6,17.4 228.5,0 218.4,17.4 197.9,17.4 208.4,35.5 198.3,52.8
                                218.4,52.8 228.5,70.2 238.6,52.8 259.4,52.8 	"/>
                            <path fill="#154D9C" d="M173.1,183.6c0,22.9-18.6,41.5-41.5,41.5c-22.9,0-41.5-18.6-41.5-41.5c0-22.9,18.6-41.5,41.5-41.5
                                C154.5,142,173.1,160.6,173.1,183.6"/>
                            <path fill="#154D9C" d="M59,169.6v-33.2H8.4v35.2c0,80,43.9,123,113.4,126.5v-46.8C82.5,247.4,59,219,59,169.6"/>
                            <path fill="#228ACB" d="M204.2,84.8v86.9c0,49.1-23.7,76.1-62.8,79.8v46.6c69.3-3.9,113.4-46.9,113.4-128.9V84.8H204.2z"/>
                        </g>
                    </svg>

                       <span class="text">
                           <span class="company-name">
                               <span class="azure">Jerusalem</span>
                               <span class="blue">U</span>
                           </span>
                           <span class="slogan">Get Educated. Get Empowered.</span>
                       </span>
                           </a>

                       </div>
                   </div>



               </div>

               <ul class="main-menu-ul">
                   <li >
                       <a class="main-menu-link">
                            <span class="table">
                                <span class="cell">
                                  Home
                                </span>
                            </span>
                       </a>
                   </li>

                   <li >
                       <a class="main-menu-link">
                    <span class="table">
                        <span class="cell">
                          About us
                        </span>
                    </span>
                       </a>
                   </li>

                   <li class="films has-sub-menu ju-expandable" data-exclude-expandable="header.mobile-menu|nav.links">
                       <a class="main-menu-link ju-expander">
                            <span class="table">
                                <span class="cell">
                                   Films <i class="fa fa-angle-down"></i>
                                </span>
                            </span>
                       </a>

                       <div class="sub-menu" >


                           <div class="parent-ul-wrapper">
                               <?php require_once 'films-menu.php'; ?>
                           </div>
                       </div>
                   </li>

                   <li class="video-course has-sub-menu ju-expandable" data-exclude-expandable="header.mobile-menu|nav.links">
                       <a class="main-menu-link ju-expander">
                            <span class="table">
                                <span class="cell">
                                   Video Courses <i class="fa fa-angle-down"></i>
                                </span>
                            </span>
                       </a>

                       <div class="sub-menu" >
                           <div class="search-place">
                               <i class="fa fa-search blue"></i>

                               <div class="blue title">Not sure where to Start?</div>
                               <div class="azure sub-title">Click here to find the <br/>best program for you</div>

                               <a>Find a Program <i class="fa fa-angle-right"></i> </a>
                           </div>

                           <div class="parent-ul-wrapper">
                               <?php for($i=1; $i<5; $i++):?>
                                   <ul class="parent">
                                       <li>
                                           <ul class="child">
                                               <li class="title blue">
                                                   <a>STIPEND 18-26</a>
                                               </li>
                                               <li >
                                                   <a>Video Series</a>
                                               </li>
                                               <li >
                                                   <a>Video Series</a>
                                               </li>
                                               <li >
                                                   <a>Video Series</a>
                                               </li>
                                               <li >
                                                   <a>Video Series</a>
                                               </li>

                                           </ul>
                                       </li>
                                   </ul>
                               <?php endfor; ?>
                           </div>
                       </div>
                   </li>

                   <li class="donate">
                       <a>
                            <span class="table">
                                <span class="cell">
                                  <i class="icon donate tablet-only mobile-only"><span>.</span></i>  Donate
                                </span>
                            </span>
                       </a>
                   </li>

                   <li class="tablet-only mobile-only login ju-expandable ju-modal-button" data-dependencies-selectors="#ju-modal|" data-modal-content-selector="#login">
                       <a class="ju-expander">
                            <span class="table">
                                <span class="cell">
                                    <i class="fa fa-user"></i>
                                    <span>User Login</span>
                                </span>
                            </span>
                       </a>
                   </li>

                   <li  class="ju-expandable sign-up-to-newsletter tablet-only mobile-only" data-exclude-expandable="header.mobile-menu|nav.links" >
                       <a class="ju-expander">
                            <span class="table">
                                <span class="cell">
                                    <i class="fa fa-envelope-o"></i>
                                    <i class="fa fa-times"></i>
                                    <span>Sign Up for JU News</span>
                                </span>
                            </span>
                       </a>

                       <div class="wrapper">
                           <input type="text" placeholder="Enter Your Email Address Here">
                           <button class="btn orange"><span>KEEP ME UPDATED!</span></button>
                       </div>
                   </li>

                   <li class="contact tablet-only mobile-only ">
                       <a>
                        <span class="table">
                            <span class="cell">
                                   <i class="fa fa-comments tablet-only mobile-only"></i>
                               Contact Us
                            </span>
                        </span>
                       </a>
                   </li>
               </ul>

               <div class="social-and-login mobile-only">
                   <?php require 'social-buttons.php'?>
               </div>

           </div>
       </div>

       <div class="third-menu">
           <div class="max-width-content">
               <ul>
                   <li>
                       <a>
                        <span class="table">
                            <span class="cell">
                              18-26
                            </span>
                        </span>
                       </a>
                   </li>

                   <li class="video-series ">
                       <a>
                        <span class="table">
                            <span class="cell">
                              Home <i class="fa fa-angle-down"></i>
                            </span>
                        </span>
                       </a>

                       <div class="sub-menu" >


                           <div class="parent-ul-wrapper">
                               <?php for($i=0; $i<5; $i++):?>
                                   <ul class="parent">
                                       <li>
                                           <ul class="child">
                                               <li class="title blue" style="background-image: url('images/menu/videos/third/CINEMA_THE_JEWISH_LENs.jpg')">
                                                   <a >
                                                       <span class="title">HABITS OF HAPPINESS</span>
                                                       <span class="sub-title">The Science of Happiness taught by Harvard's most popular professor </span>
                                                   </a>
                                               </li>

                                           </ul>
                                       </li>
                                   </ul>
                               <?php endfor; ?>
                           </div>
                       </div>
                   </li>

                   <li>
                       <a>
                        <span class="table">
                            <span class="cell">
                              ju max
                            </span>
                        </span>
                       </a>
                   </li>
                   <li>
                       <a>
                        <span class="table">
                            <span class="cell">
                             gap your ...
                            </span>
                        </span>
                       </a>
                   </li>
               </ul>
           </div>
       </div>
   </div>
</nav>


<div id="page">
    <div class="max-width-content">
       <div style="    height: 1200px;font-size: 50px;text-align: center;color: white; text-shadow: 3px 5px 0px #000;">
           <div class="table">
               <div class="cell">
                   Site under construction
               </div>
           </div>
       </div>
    </div>

</div>


<div class="hideElements">
    <?php require_once 'modal-content.php'; ?>
</div>

</body>
</html>