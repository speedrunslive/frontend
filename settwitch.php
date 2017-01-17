<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<?php 


$body = @file_get_contents('php://input');

$array = json_decode($body, true);

$array["avatar"] = str_replace("300x300", "50x50", $array["avatar"]);

$_SESSION["avatar"] = $array["avatar"];


 ?>