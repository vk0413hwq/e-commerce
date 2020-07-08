$(function(){
// load后执行
    console.log(11111)
    var $name = $('.text');
    var $psd = $('.psd');
    var $btn = $('button');

    $btn.click(function(){
        $.get('./../php/login.php?username='+$name.val()+'&password='+$psd.val(),function(data){  
            var json = JSON.parse(data)
            if(json.code){
            // document.cookie="username="+$name.val()+"; password="+$psd.val();
            location.href="./index.html?name="+$name.val()
            }else{
                alert('账号或者密码错误')
                $psd.val(null);
                $name.val(null);
            }
        })
    })
    






























})