<?php
header('content-type:text/html;charset=utf-8');

$name = $_REQUEST['username'];
$psd = $_REQUEST['password'];


// 链接数据库
$link = mysqli_connect('localhost','root','root','project');

// 书写sql条件语句
$sql = "SELECT * FROM `user` WHERE `username`='$name' AND `password`='$psd'";
$res = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($res);

if($row){
    setcookie('username', $name, time()+10800,'/');
    $arr=array("code"=>1);
    $json = json_encode($arr);
    echo $json;
}else{
    $arr=array("code"=>0);
    $json = json_encode($arr);
    echo $json;
}




?>