<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<?php 


$body = @file_get_contents('php://input');

$array = json_decode($body, true);

$_SESSION["name"] = $array["name"];
$_SESSION["token"] = $array["token"];
$_SESSION["channel"] = $array["channel"];


 ?>