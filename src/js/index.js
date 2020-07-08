$(function(){
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

