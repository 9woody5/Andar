$(function(){

    /////header 스크롤 이벤트
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
        if (curr > 0) {
            $('.header-inner').addClass('fixed');
        } else {
            $('.header-inner').removeClass('fixed');
        }
    })
    $(window).trigger('scroll');//스크롤 이벤트 강제 실행



    /////헤더 검정색 광고 영역
    var adSlide = new Swiper(".ad-top", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });



    /////퀵메뉴 영역
    $('body').on('mousewheel', function(e){

        var wheel = e.originalEvent.wheelDelta;
        curr = $(window).scrollTop();

        if(wheel > 0) {
        //스크롤 올릴 때(양수)
        if(curr < 1){
            $('.quickmenu-area').removeClass('on')
        } else{
            $('.quickmenu-area').addClass('on')
        }
        } else{
        //스크롤 내릴 때(음수)
        $('.quickmenu-area').removeClass('on')
        }
        
    });
    
})