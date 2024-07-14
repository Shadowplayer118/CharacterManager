<?php
$host = "localhost";
$user = "root";
$pass = "";
$db_name = "charactermanager";

$conn = mysqli_connect($host,$user,$pass,$db_name);
if(!$conn){
die(mysqli_error($conn));
}
?>