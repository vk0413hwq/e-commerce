$(function(){

    var $name = $('.username');
    var $psd = $('.psd');
    var $psd_copy = $('.psd_copy');
    var $btn = $('button');

    $btn.click(function(){
        if($psd_copy.val()==$psd.val()){
           
        $.get('./../php/register.php?username='+$name.val()+'&password='+$psd.val(),function(data){  
            // console.log(data)
            var json = JSON.parse(data)
            console.log(json)
            // code返回1则表示用户名已经存在
            if(json.code){
            alert('注册成功，点击登录')
            location.href="./login.html"
            }else{
                alert('该用户名已被注册')
                $('input').val(null);
            }
        })  
      }
        else{
            alert('输入的密码不一致');
            $psd_copy.val(null);
            $psd.val(null);
            return;
        }  
    })
})