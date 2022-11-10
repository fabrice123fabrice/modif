<?php
require ("DbConnect.php");

$sql = "SELECT * FROM partenaire";
$mysqli = mysqli_query($db_conn,$sql);
$json_data = array();

while($row = mysqli_fetch_assoc($mysqli ))
{
    $json_data[] = $row;
}
echo json_encode(['phpresult'=>$json_data]);

?>