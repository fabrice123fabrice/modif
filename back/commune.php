<?php
include('connect.php');
$sql = 'select * from liste_maire limit 5';
$result = mysqli_query($conn, $sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
	$json_array[] = $row;
}
echo json_encode($json_array);
mysqli_close($conn);
?> 
