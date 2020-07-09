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
    console.log($cw.left)
    console.log($cw.top)
    
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
           console.log(x,y)
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
    $.get('./../php/showlist.php',function(data){
        var json = JSON.parse(data).data
        var arr = json[0]
        var p_id = arr.product_id;
        var p_name = arr.product_name;
        var p_img = arr.product_img;
        var p_price = arr.product_price;
        var p_num = arr.product_num;

        // ${pid} ${pname} ${pimg} ${pprice} ${pnum}
        $('.details_price01').html(p_price);
        $('.details_name01').html(p_name); 

       
        })
      // 详情页添加商品
      var $btn_addcart = $('.join-sc');
      var $num = $('#pro_num');
      $btn_addcart.click(function(){
      console.log($num.val())
          $.get('./../php/addwq.php?id=1&name=牛油果&img=./../images/nyg (1).jpg&price=25',function(data){
              var json = JSON.parse(data);
              if(json.code){
                  // 如果添加成功弹出隐藏底幕
                  $('.shop_hid').css({
                      'display':'block'
                  })
                  $('.sh_lt').click(function(){
                      location.href = './details.html'
                  })
                  $('.sh_gt').click(function(){
                      location.href = './shopcart.html'
                  })
              }
          })
 })   


    













})