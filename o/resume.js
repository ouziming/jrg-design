/**
 * Created by Administrator on 2016/7/23.
 */
//导航栏渐入效果
$(function(){
    $('html').removeClass('notInited');/*等js文件整个加载完*/
    var $moveAnimation = $('.nav, .per-title, .am-desigin, .am-tags,.bg');
    $moveAnimation.hide().addClass('hide');

    setTimeout(function(){
        $moveAnimation.show()
    },100);

    setTimeout(function(){
        $moveAnimation.removeClass('hide')
    },150);

});


//移动展示个人信息
$(function(){
    var $down = $('.mainNav .down>i');
    var $message = $('.mainNav .personMessage');
    $down.on('click',function(){
        $message.toggleClass('seleted')
    })
});



/*滚下导航栏display：none，滚上导航栏display：block*/
$(function(){
    var $nav = $('.nav')/*导航栏*/
    $(window).on('wheel',function(e){
         var decoration = e.originalEvent.deltaY;/*判断上下*/
         if (decoration>0) {
            $nav.css({"display":"none"})
         }else{
            $nav.css({"display":"block"})
         }
    })
})


//图片旋转展示信息
$(function(){//事件委托
    var $bgPublic = $(".am-desigin .bg");
   $bgPublic.on('mouseenter',function(e){
        e.stopPropagation();
        var bgTarget = e.target/*得到的是原生DOM*/
        $(bgTarget).addClass('transparent').siblings('.bg').removeClass('transparent')
    }).on('mouseleave',function(e){
        $(this).removeClass('transparent')
    })
})

//tag切换 方法一：jQuery 有 index API
$(function tagReplace(){
    var	$tag = $('.panel-wrap'),
        $panels = $('.panel'),
        $summarys = $('.summary-list');

    // $panel.each(function(){//无需遍历
    // 	console.log(this)
    // 	var currentIndex = $(this).index()
    // 	console.log(currentIndex)
    //	})

    $panels.on('mouseenter',function(){
        // console.log($(this))//进去的哪个item
        var currentIndex = $(this).index()
        // console.log(currentIndex)测试
        $panels.eq(currentIndex).addClass('active').siblings('.panel').removeClass('active')
        $summarys.eq(currentIndex).addClass('active').siblings('.summary-list').removeClass('active')
    })
});
