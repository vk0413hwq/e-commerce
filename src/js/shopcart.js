$(function(){
    // var id=$('sc_size').attr('id');
    // console.log(id);
    // 获取购物车所有数据
    $.get('./../php/showlist.php',function(data){
        var jso = JSON.parse(data)
             if(jso.code==0){
                alert('购物车空空如也');
                return
             }  
        var arr = jso.data[0]
        console.log(arr)
        var pid = arr.product_id;
        var pname = arr.product_name;
        var pimg = arr.product_img;
        var pprice = arr.product_price;
        var pnum = arr.product_num;

        //事件尽量写在插入元素之后，避免获取不到
        var product = `<div class="sc_size id="11">
        <!-- 商品门店 -->
        <div class="sc_details">
            <span class="sd1">
                <input type="checkbox" name="" id="">自营
            </span>
            <span class="sd2">运费￥6.00，再买￥34.20 (10kg以内)免邮</span>
            <span class="sd3">立刻凑单</span>
        </div>
         <!-- 购买数量 -->
        <div class="sc_num">
            <ul>
                <li class="li_up">
                    <span class="sn1">
                        <input type="checkbox" name="" id="">
                        <i>换购</i>
                        指定商品购买1件可优惠换购热销商品
                    </span>|
                    <span class="sn2">
                        已购满1件,可优惠换购
                        <i>换购商品</i>
                    </span>
                </li>
                <li class="li_down">
                    <span class="sm1">
                        <input type="checkbox" name="" id="">
                        <a href=""><img src="${pimg}" alt=""></a>
                    </span>
                    <span class="sm2">
                        <a href="">${pname}</a>
                        <i>7</i><em>${pname}</em>
                    </span>
                    <span class="sm3">${pprice}</span>
                    <span class="sm4">
                        <button class="btn1" type="">-</button>
                        <input type="text" name="" id="sc_num" value="${pnum}">
                        <button class="btn2" type="">+</button>
                    </span>
                    <span class="sm5">
                        64.80
                    </span>
                    <span class="sm6">
                        <a href="" class="sc_del">删除</a>
                    </span>
                </li>
            </ul>
        </div>
        <!-- 总价格 -->
        <div class="sc_totalval">
            <span class="sl1">
                商品总价：<i>￥<em class="p_tatol"></em></i>
            </span>
        </div>
    </div>`;
        $('.sc_checked').after(product)

       // 监听数量发生改变时
       $('#sc_num').change(function(){
        var scnum = $(this).val()
        $.get('./../php/change.php?id=1&scnum='+scnum,function(data){
            pnum = scnum
            subtotal()
            return pnum          
           })
          
        })      
        // 购物车删除商品功能
        $sc_del = $('.sc_del');
        $sc_del.click(function(){
                $.get('./../php/delwq.php?id=1',function(data){
                    console.log('删除商品成功')
            })
        })

        //减少数量按钮功能
        $cut = $('.btn1');
        $add = $('.btn2');
        $cut.click(function(){
            $.get('./../php/updatewq.php?id=1&type=cut',function(data){
                $('#sc_num').val(--pnum)
                subtotal()
            })
        })

        //  增加数量按钮功能
        $add.click(function(){
            $.get('./../php/updatewq.php?id=1&type=add',function(data){
                $('#sc_num').val(++pnum)
                subtotal()
            })
        })
// _____当商品多的时候，需要根据id来循环，给各项数据赋值

        // 小计  // 总计
        function subtotal(){
            var totalAll = pprice*pnum
            var subtotal = $('.sm5').html(totalAll)
            $('.p_tatol').html(totalAll)
            $('.sp4_total').html($('.p_tatol').html())
        }
        subtotal()

        
        
})


    
    

   

   



})