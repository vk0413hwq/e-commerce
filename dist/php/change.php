<?php
require('./model/_connect.php');

$id = $_REQUEST['id'];
$scnum =$_REQUEST['scnum'];

$sql = "SELECT * FROM `cart` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
$num = $row['product_num'];

	$num = $scnum;
	$sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_id`='$id'";


$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>