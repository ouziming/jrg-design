/**
 * Created by Administrator on 2016/7/26.
 */

$(function(){
    // var viewH = document.documentElement.clientHeight;//网页可见窗口的高度，注意：这个包含控制台的
    var $bullet = $('.paging-button');//父容器
    var $buttom = $('.abouts-me .paging-button .item');//光标按钮
    var moving = false;//动画开关指标
    var current = 0;//默认开始是0
    var firstHash = window.location.hash ;//初始描点值
    var $bar = $('.bar-chart')//树状条
    var $canvas = $('.canvas-wrap')//canvas图

    bb = firstHash.substr(5,1)
    cc = parseInt(bb)

    //刷新重置hash函数，并且让current跟随当前的hash的序号
    function setReplace(){
        if (firstHash !== "") {
            current = cc
            firstHash = "";
            setBullet()
            barAnimation()
        }
    }
    setReplace()

    //距离函数
    function fullPage(){
        $(window).on('wheel',function(e){
            var deltaY = e.originalEvent.deltaY;
             if (!moving){
                moving = true;
                if(deltaY>0){
                    go(current+1)
                }else{
                    go(current-1)
                }
             }
        })
    }
    fullPage();

    function go(n){
        if (n>4) {
            n=0
        }
        if(n<0){
            n=4
        }

        var pageH = $(".carousel-wrap").children().eq(n).offset().top;
        $('body').stop(true,true).animate({
            scrollTop:pageH
        },1000,function(){
            current = n;
            setBullet()
            barAnimation()
            hash(current)
            moving = false
        });
    }

    /*第二页树状条 和 第三页的canvas 的动态效果*/
    function barAnimation(){
        if(current===1){
            $bar.addClass('start')
        }
        if(current===0||current===2||current===3||current===4){
             $bar.removeClass('start')
        }
        if (current===2) {
             $canvas.fadeIn(1000)
        }
        if (current===0||current===1||current===3||current===4) {
            $canvas.fadeOut(100)
        }

    }


    // 如何在刷新页面，光标能自动回到刷新前的状态，方法：（url+bash） JavaScript Location 对象：获取或设置当前的 URL 信息
    function hash(numId){
        window.location.hash = firstHash + "page"+ numId
    }

    //光标
    function setBullet(){
        $bullet.children().removeClass('active').eq(current).addClass('active')
    }



    //按钮换页键效果 ，方法一 ，直接用传参数 pageNumber
    $bullet.find('.item').on('click',function(){
        var pageNumber = $(this).index();
        $(this).addClass('active').siblings('.item').removeClass('active');
        go(pageNumber)
        current = pageNumber;
    });

});