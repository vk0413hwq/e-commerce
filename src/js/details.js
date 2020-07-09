$(function(){
    // 放大镜
    // 获取大中小盒子 
    var $cover = $('.cover');
    var $lgbox = $('.lg_show')
    var $sp1 = $('.sp1');
    var $sp2 = $('.sp2');
    var $midbox = $('.details_all_lg_img');
    var $fdlist = $('.lb_container').find('img');

    // 遮蔽层的文档宽高
    var $cw = $midbox.offset()

    
    // 下面轮播图片发生变动时，循环给图片地址
    $fdlist.each(function () {
       $(this).mouseenter(function(){
       $($fdlist).removeClass("lg_clean");
       $(this).addClass('lg_clean')
         var src = $(this).attr('src')
         $sp1.attr('src',src)
    })
       $midbox.mousemove(function(e){
           var e = e || window.event;
        //  top要设置值，不然滚动条移动，光标坐标会变
           J= $cw.top - $(window).scrollTop();
        //  设置光标点  赋值给遮蔽层
           var x = e.clientX - $cw.left-$cover.innerWidth()/2-19;
           var y = e.clientY - J-$cover.innerHeight()/2-19;
        //  设置偏移边界
           if(x<0){
            x=0
            }else if(x>$sp1.innerWidth()-$cover.innerWidth()){
                x=$sp1.innerWidth()-$cover.innerWidth()
            }
           if(y<0){
            y=0
            }else if(y>$sp1.innerHeight()-$cover.innerHeight()){
                y=$sp1.innerHeight()-$cover.innerHeight()
            }

        //给遮蔽层设置偏移值 
           $cover.css({
               'display':'block',
               'margin-left':x+'px',
               'margin-top':y+'px'
           })
           $lgbox.css({
            'display':'block',    
             })
           var src = $sp1.attr('src')
           $sp2.attr('src',src)
           $sp2.css({
               'width':$sp1.innerWidth()*4,
               'heigt':$sp1.innerHeight()*4,
               'margin-left':-x*4+'px',
               'margin-top':-y*4+'px'
           })
           
        })
      })
      $midbox.mouseleave(function(){
        $cover.css({'display':'none'})
        $lgbox.css({
            'display':'none'
        })
      })

    // 渲染页面
    var strPid = location.href.split('?')[1]
    var pid = strPid.split('=')[1]
    
    $.get('./../php/details.php?pid='+pid,function(data){
        var json = JSON.parse(data)
        var arr=json.data[0];
        

        $('.details_price01').html(arr.product_price);
        $('.details_name01').html(arr.product_name); 
        $('.lb_container').find('img').attr('src',arr.product_img); 
        $('.sp1').attr('src',arr.product_img); 
         
        
    // 详情页添加商品
    //   监听数量变化
      var $numbtn =  $('#pro_num');
      $numbtn.on('change',function(){
      var $num = $('#pro_num').val();
      var $btn_addcart = $('.join-sc');
      $btn_addcart.click(function(){
          $.get('./../php/addwq.php?id='+pid+'&name='+arr.product_name+'&img='+arr.product_img+'&price='+arr.product_price+'&num='+$num,function(data){
              console.log(data)
              var json = JSON.parse(data);
              if(json.code){
                  // 如果添加成功弹出隐藏底幕
                  $('.shop_hid').css({
                      'display':'block'
                  })
                  $('.sh_lt').click(function(){
                      location.href = './details.html?pid='+pid
                  })
                  $('.sh_gt').click(function(){
                      location.href = './shopcart.html'
                  })
              }
          })
       })
    })
      
   
       
     
     
 })
        
      


    













})