class Cookie{
    constructor(){
        this.tz()
        // 判断是否存在cookie    
    }
    judge(key){
    var arr=(document.cookie).split(';');
    for (var i = 0; i < arr.length; i++) {
            var s = arr[i].split("=");
            if (s[0] == key) {
                return true
            }
        }   
        return false;
    }
    tz(){
        if(this.judge('username')){
            console.log('欢迎您登录')
            // location.href='./index.htmname=username'
            return
        }
        else{
            alert('请先登录账号')
            location.href='./login.html'
            return
        } 
        
    }
}
new Cookie();
(function(){
    //判断是否登录过，存在cookie与否  
    

    // 获取购物车所有数据
    $.get('./../php/showlist.php',function(data){
        var json = JSON.parse(data)
             if(json.code==0){
                alert('购物车空空如也');
                return
             }  
        var arr =json.data
        var pnum;
        var pprice;
        var pid;
        $.each(arr, function (index,value) { 
         pid = arr[index].product_id;
        var pname = arr[index].product_name;
        var pimg = arr[index].product_img;
         pprice = arr[index].product_price;
         pnum = arr[index].product_num;

        //事件尽量写在插入元素之后，避免获取不到
        var product = `<div class="sc_size" id="${pid}">
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
                        <button class="btn1" type="cut">-</button>
                        <input type="text" name="" id="sc_num" value="${pnum}">
                        <button class="btn2" type="add">+</button>
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

        //监听数量发生改变时
        $('#sc_num').each(function(){
            console.log($(this))
            $(this).change(function(){
                var scnum = $(this).val()
                var thisId = $(this).parents('.sc_size').attr('id');
                console.log(thisId)
                $.get('./../php/change.php?id=1&scnum='+scnum,function(data){
                    subtotal()   
                 })   
             })
        })
    });
        
        // 购物车删除商品功能
        $sc_del = $('.sc_del');
        $sc_del.click(function(){
        var $did = $(this).parents('.sc_size').attr('id');
        console.log($did)
                $.get('./../php/delwq.php?id='+$did,function(data){
                    if(data.code){
                        console.log('删除陈功')
                    }
            })
            subtotal()
        })

        //减少数量按钮功能
        $cutbtn = $('.btn1');
        $addbtn = $('.btn2');
        $cuttype = $('.btn1').attr('type');
        $addtype = $('.btn2').attr('type');

        $cutbtn.click(function(){
        var did = $(this).parents('.sc_size').attr('id');
        var $valnum = $(this).next()
        var $val = Number($(this).next().val())
            $.get('./../php/updatewq.php?id='+did+'&type='+$cuttype,function(data){
                var json = JSON.parse(data).code;   
                if(json){
                    //数据库判断有延迟
                    // $val--
                    // $valnum.val($val)
                }        
            }) 
            // 直接输出--但是不符合逻辑
            $valnum.val($val-1)
            subtotal() 
        })

        //  增加数量按钮功能
        $addbtn.click(function(){
            var did = $(this).parents('.sc_size').attr('id');
            var $valnum = $(this).prev()
            var $val = Number($(this).prev().val())
                $.get('./../php/updatewq.php?id='+did+'&type='+$addtype,function(data){
                    var json = JSON.parse(data).code;   
                    if(json){
                        //数据库判断有延迟
                        // $val++
                        // $valnum.val($val)
                    }        
                }) 
                console.log($val)
                // 直接输出--但是不符合逻辑
                $valnum.val($val+1)
            subtotal() 
        })
// _____当商品多的时候，需要根据id来循环，给各项数据赋值

        // 小计  // 总计
        function subtotal(){
            var a=0;
            $('.sc_size').each(function(index){
            // 单价*数量=小计
            var thisprice = $(this).find('.sm3').html();
            var thisnum = $(this).find('#sc_num').val();
            var $xiaoji = (thisprice*thisnum).toFixed(2);
            // 每个店铺的小计
            $(this).find('.sm5').html($xiaoji)
            // $('.sm5')[index].html()
            // 每个店铺的总计
            var $thisval = $(this).find('.sc_totalval');
            $thisval.html($xiaoji)
            // 所有店铺的总计
            var $totalval =  $('.sp4_total');
            
            var b=a+parseInt($thisval.html());
            a=b
            $totalval.html(b)
            })
            // var totalAll = pprice*pnum
            // var subtotal = $('.sm5').html(totalAll)
            // $('.p_tatol').html(totalAll)
            // $('.sp4_total').html($('.p_tatol').html())
        }
        subtotal()

        
        
})


    
    

   

   



})