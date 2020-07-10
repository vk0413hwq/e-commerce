<?php
header('content-type:text/html;charset=utf-8');

$name = $_REQUEST['username'];
$psd = $_REQUEST['password'];

$link = mysqli_connect('localhost','root','root','project');
// 分别书写一个查询重名一个添加的语句，先判断是否存在此用户名，存在即返回code：0，不存在则添加数据到数据库，并返回code：1，表示添加成功，并转至登录页面
$sql = "SELECT * FROM `user` WHERE `username`='$name'";
$sql_into = "INSERT INTO `user` VALUES(null,'$name','$psd')";

$res = mysqli_query($link,$sql);
// $row = mysqli_fetch_all($res,MYSQLI_ASSOC);
$row = mysqli_fetch_assoc($res);

$json = json_encode($row);

if($row){
    $arr=array("code"=>0);
    $json = json_encode($arr);
    echo $json;
}
else{
    $res = mysqli_query($link,$sql_into);
    $arr=array("code"=>1);
    $json = json_encode($arr);
    echo $json;
}

?>