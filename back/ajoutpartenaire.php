<?php 
require ("DbConnect.php");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->nom)){
    $nom = mysqli_real_escape_string($db_conn, trim($data->nom));
    $objectif = mysqli_real_escape_string($db_conn, trim($data->objectif));
	$adresse = mysqli_real_escape_string($db_conn, trim($data->adresse));
    $contact = mysqli_real_escape_string($db_conn, trim($data->contact));
	$logo = mysqli_real_escape_string($db_conn, trim($data->logo));

    $add = mysqli_query($db_conn, "INSERT INTO `partenaire` (`nom`, `objectif`, `adresse`, `contact`, `logo`) VALUES ('$nom','$objectif', '$adresse', '$contact', '$logo')");
    if($add) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success"=>true,"insertid"=>$last_id]);
        return;
    }
    else{
        echo json_encode(["success"=>false,"msg"=>"Server problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?>