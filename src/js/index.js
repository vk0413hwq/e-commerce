//判断是否登录过，存在cookie与否  
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
            // location.href='./index.html?name=username'
            // return
        }
        else{
            alert('请先登录账号')
            location.href='./login.html'
        } 
        
    }
}
new Cookie();
$(function(){

    // 首页渲染数据
    $.get('./../php/index.php',function(data){
        var json = JSON.parse(data)
        var arr=json.data;

        $(arr).each(function(index,item){  
            var pid = $(this).attr('product_id');
            var pname = $(this).attr('product_name');
            var pimg = $(this).attr('product_img');
            var pprice = $(this).attr('product_price');
            var pnum = $(this).attr('product_pnum');
            
            var str12 = `
            <a href="./details.html?pid=${pid}">
            <img src="${pimg}" alt="">
            <p>${pname}</p>
            <div class="load"><span></span></div>
            <div class="cheap">
                ￥${pprice}
                <s class="original">${Number(pprice)+15}</s>
            </div>
            </a>'`   
            var $li = $("<li>"); 
            $li.html(str12)    
            $li.attr('pid',pid)  
            $('.tp-opc').after($li)
    })
})


    // 搜索栏——关键字搜索
    $('#search-right-text').on('input',function(){
        //1 获取输入的关键字
        console.log(2222)
       var text = $(this).val();
       //2 利用$.ajax发请求
       $.ajax({
           //callback=fn不能直接写在参数里面,要jquery帮助我们自动拼接
           url:"https://suggest.taobao.com/sug?code=utf-8&q="+text+"&_ksTS=1593314375249_483&k=1&area=c2c&bucketid=12",
           success:function(data){
               //获取数据要先打印
               var arr=data.result
               $('.cb_show').empty()
               $.each(arr,function(index,value){                     
                   $('.cb_show').append('<li>'+value[0]+'</li>')
                   $('.cb_show').css({'display':'block'})
                   lishow()
               })
           },dataType:"jsonp"})
            
            $('.search-right').mouseleave(function(){
                $('.cb_show').css({
                    'display':'none'
                })
            })
            }).click(function(){
                lishow()
                $('.cb_show').css({
                    'display':'block'
                })  
            })
            function lishow(){
                $('.cb_show').children().each(function(){
                    $(this).mouseenter(function(){
                        $(this).css({
                            'background':'#eee',
                            'cursor':'pointer'
                        })  
                    }).mouseleave(function(){
                        $(this).css({
                            'background':'#fff',
                            'cursor':'pointer'
                        }) 
                    })

                })
            }
            
        // 搜索栏 input hover
        $('#search-right-text').mouseenter(function(){
            $(this).css({'border-color':'red'})
            .next().css({'border-color':'red'})
        }).mouseleave(function(){
            $(this).css({'border-color':'#e2e2e2'})
            .next().css({'border-color':'#e2e2e2'})
        }).next().mouseenter(function(){
            $(this).css({'border-color':'red'})
            .prev().css({'border-color':'red'})
        }).mouseleave(function(){
            $(this).css({'border-color':'#e2e2e2'})
            .prev().css({'border-color':'#e2e2e2'})
        })



        //二级菜单
        $('#list_tar').mouseenter(function(){
            $(this).find('ol').css({'display':'block'})
        }).mouseleave(function () { 
            $(this).find('ol').css({'display':'none'})
        });

        // 二级菜单文字hover变色 
        $('.search-down_ahover').children().not('#list_tar').mouseenter(function(){
            $(this).children().css({'color':'red'})
        }).mouseleave(function(){
            $(this).children().css({'color':'#666'})
        })

        // 移动屏幕
        $(window).scroll( function() {
            if($(window).scrollTop()>=615){
                $('.one_fixed').slideDown(100)             
            }else{
                $('.one_fixed').stop().slideUp(10) 
                // $('.one_fixed').css({
                //     'display':'none'
                // })
            }

            // 二维码购物车
            // 返回顶部，top156px  
            if($(window).scrollTop()>=510){
                $('.code').css({
                    'position':'fixed',
                    'top':156
                })
            }else{
                $('.code').css({
                    'position':'absolute',
                    'top':0
                })
            }  
            // gotop显示隐藏
            if($(window).scrollTop()>=1000){
                $('.goTop').stop().fadeIn(100)              
            }else{
                $('.goTop').stop().fadeOut(100) 
            }
        } );
        
        // gotop返回顶部事件
        $('.goTop').mouseenter(function(){
            $(this).css({
                'cursor':'pointer'
            })
        }).click(function(){
            $('html,body').animate({
                scrollTop:0
            },500)
        })

        // 购物车变色
        // $('.code-shopcart').mouseenter(function(){
        //     $(this).css({
        //         'background':'#eee',
        //         'cursor':'pointer'
        //     })
        // }).mouseleave(function(){
        //     $(this).css({
        //         'background':'#fff',
        //         'cursor':'pointer'
        //     })
        // })
        $('.code-shopcart').hover(
            function(){
                $(this).css({
                    'background':'#eee',
                    'cursor':'pointer'
                })
            },function(){
                $(this).css({
                    'background':'#fff',
                    'cursor':'pointer'
                })
            }
        )

        $('.pro-left-bot-choose').find('a').hover(
            function(){
                $(this).css({
                    'background':'#b7e99f',
                    'cursor':'pointer'
                })
            },function(){
                $(this).css({
                    'background':'#b3e59a',
                    'cursor':'pointer'
                })
            }
        )

        $('.pro-01-div').hover(
            function(){
                $(this).css({
                    'background':'#fff',
                    'cursor':'pointer'
                })
            },function(){
                $(this).css({
                    'background':'#f6f8f5',
                    'cursor':'pointer'
                })
            }
        )

        $('.row').find('img').hover(
            function(){
                $(this).stop().animate({
                    'margin-right':'10px'
                },200)
            },function(){
                $(this).stop().animate({
                    'margin-right':'0px'
                },200)
            },
        )
})

