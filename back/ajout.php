<?php 
require ("DbConnect.php");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name)){
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
	$adress = mysqli_real_escape_string($db_conn, trim($data->adress));
    $city = mysqli_real_escape_string($db_conn, trim($data->city));
	$country = mysqli_real_escape_string($db_conn, trim($data->country));

    $add = mysqli_query($db_conn, "INSERT INTO students (name, adress, city, country) VALUES ('$name','$adress','$city','$country')");
    if($add) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success"=>true,"insertid"=>$last_id]);
        return;
    }
    else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>
/*
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch ($method) {
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO students (id, name, adress, city, country) VALUES (null, :name, :adress, :city, :country)";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':adress', $user->adress);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':country', $user->country);
            if($stmt->execute()){
                $data = ['status' => 1, 'message' => "Record succes"];
            } else{
                $data = ['status' => 0, 'message' => "Failed."];
            }
            echo json_encode($data);
            break;
    }*/
