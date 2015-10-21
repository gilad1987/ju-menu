<?php
$version = rand(0,10000000000000);
?>
<!DOCTYPE html>
<html>
<head lang="en">

    <meta charset="UTF-8">
    <title>Contact</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/common.css?v=<?php echo $version;?>">

    <link rel="stylesheet" type="text/css" href="css/menu.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/modal.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/contact.css?v=<?php echo $version;?>">

    <script src="jquery-1.11.3.min.js"></script>
    <script src="login.js"></script>

    <script src="js/JU/JU.settingApp.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/JU.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/JU.Utils.js?v=<?php echo $version;?>"></script>

    <script src="js/JU/modules/JU.module.expandable.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.modal.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.menu.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.tabs.js?v=<?php echo $version;?>"></script>
    <script src="js/JU/modules/JU.module.input.js?v=<?php echo $version;?>"></script>
    <!--    <script src="js/JU/modules/JU.module.search.js?v=--><?php //echo $version;?><!--"></script>-->

</head>
<body class="">

<article class="max-width-content contact-page">

    <h1 class="blue">Contact us</h1>

    <h3 class="page sub-title blue">
        We’re here to help. Please choose from the contact options below. You can also find answers to frequently asked questions (FAQ) by clicking on the boxes below.
    </h3>

    <div class="form">
        <div class="title blue">
            Email us
        </div>

        <div class="form-wrapper">
            <div class="ju-input-wrapper">
                <label>First name</label>
                <input type="text">
            </div>

            <div class="ju-input-wrapper">
                <label>Last name</label>
                <input type="text">
            </div>

            <div class="ju-input-wrapper">
                <label>Email address</label>
                <input type="text">
            </div>

            <div class="ju-input-wrapper">
                <label>Subject</label>
                <input type="text">
            </div>

            <div class="ju-input-wrapper textarea">
                <label>Enter comment (1000 characters maximum)</label>
                <textarea></textarea>
            </div>
        </div>
    </div>

    <div class="details-contact">

        <div class="call-us">
            <div class="title blue">
                Call us
            </div>
            <div>
                Call toll free at:
            </div>
            <div>
                (888) 515 5292
            </div>
        </div>

        <div class="write-to-us">
            <div class="title blue">
                Write to us
            </div>

            <div>Jerusalem U</div>
            <div>11110 W Oakland Park Blvd Suite 288</div>
            <div>Sunrise, FL 33351 - 6808</div>
        </div>

    </div>

    <div class="clear"></div>

    <div class="note blue"><span class="bold">PLEASE NOTE:</span>  The answer to your question may already appear in our FAQ pages:</div>
</article>
</body>
</html>