$(function(){
    // 放大镜
    // 获取大中小盒子 
    var $cover = $('.cover');
    var $lgbox = $('.lg_show')
    var $midbox = $('.details_all_lg_img');
    var $fdlist = $('.lb_container').find('img');
    console.log(11111)
    $fdlist.each(function (index) {
            console.log($fdlist(index))
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


    













})