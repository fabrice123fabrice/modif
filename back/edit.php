<?php

require ('DbConnect.php');

$data = json_decode(file_get_contents("php://input"));

if(isset($data->name)
	&& isset($data->adress) 
    && isset($data->city) 
	&& isset($data->country)
	&& isset($data->id) 
	&& !empty(trim($data->name))
	&& !empty(trim($data->adress))
    && !empty(trim($data->city))
	&& !empty(trim($data->country))
	&& !empty(trim($data->id))
	){
		
	$name = mysqli_real_escape_string($db_conn, trim($data->name));
	$adress = mysqli_real_escape_string($db_conn, trim($data->adress));
    $city = mysqli_real_escape_string($db_conn, trim($data->city));
	$country = mysqli_real_escape_string($db_conn, trim($data->country));
	$id = mysqli_real_escape_string($db_conn, trim($data->id));

  $add = mysqli_query($db_conn,"UPDATE students SET name ='$name', adress ='$adress' , city = '$city' , 
  country = '$country' WHERE id='$id'");

	if($add){
		echo json_encode(["success"=>true]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}



?>