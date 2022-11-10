<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("localhost", "root", "", "infocommunale");
 
if ($db_conn == false){
    die ("ERROR: could not connect." . mysqli_connect_error());
}
echo "connection ok";
error_reporting(E_ALL);
ini_set('display_errors','off');
?>