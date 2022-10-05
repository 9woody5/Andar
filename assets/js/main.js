$(function(){


    ////검색영역
    $('.group-row .btn-search').click(function(e){
      e.preventDefault();
      $('.search-wrap').addClass('on');
      $('body').css('overflow','hidden');
    })

    $('.close').click(function(e){
        e.preventDefault();
        $('.search-wrap').removeClass('on');
        $('body').css('overflow','visible');
    })



    ////메인슬라이드
    var mainSlide = new Swiper(".visual-slide", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

        pagination: {
          el: ".swiper-pagination",
        },
      });



    ////gnb영역
    $('.menu-all').click(function(e){
      e.preventDefault();

      if ($('.nav-wrap').hasClass('active')) {
          $('.nav-wrap').removeClass('active')
          $('.gnb-all').stop().slideUp();
          
      } else {
          $('.nav-wrap').addClass('active')
          $('.gnb-all').stop().slideDown();
      }
  }) 



    ////제품 영역 슬라이드
    var prodSlide = new Swiper(".prod-slide", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
      });



  ////aside 메뉴 영역
    $('.header .btn-menu').click(function(e){
        e.preventDefault();

        $('.menu-left').addClass('active');
        $('body').addClass('hidden')
    })

    $('.header .btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.menu-left').removeClass('active');
        $('body').removeClass('hidden')
    })


  ////aside depth영역
  $('.category-wrap .btn-cate').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).siblings().stop().fadeOut();
        $(this).siblings().find('ul').stop().slideUp();
    }else {
        $(this).addClass('active');
        $(this).siblings().stop().fadeIn();
        $(this).siblings().find('ul').stop().slideDown();
    }

  });


})