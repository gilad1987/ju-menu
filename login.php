<?php
$version = rand(0,10000000000000);
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>jerusalem U - Login </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/common.css?v=<?php echo $version;?>">


    <link rel="stylesheet" type="text/css" href="css/menu.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/modal.css?v=<?php echo $version;?>">
    <link rel="stylesheet" type="text/css" href="css/login.css?v=<?php echo $version;?>">

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

<body class="login-page">
<?php $page = '' ?>
<?php require_once 'tpl/forms.php'; ?>


</body>

<script src="jquery-1.11.3.min.js"></script>
<script src="login.js"></script>

</html>