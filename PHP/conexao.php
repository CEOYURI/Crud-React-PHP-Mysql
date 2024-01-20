<?php
$localhost ="localhost";
$user = "root";
$pass = "";
$dbname = "metting";
$port = "3306";

$conn = new PDO ("mysql:host=$localhost;port=$port;dbname=". $dbname, $user,$pass);
?> 