$(function() {

    $('.header__burger').on('click', function(){
        $(this).toggleClass('header__burger-active');
        $('.mobile__menu').stop().slideToggle(400);
    });

    $('.mobile__items li').on('click', function () {
        $(this).toggleClass('mobile__item-active');
        $(this).children('.mobile__submenu').stop().slideToggle(400);
    });

    let menu;
    $('.header__menu li').hover(function () {
        clearTimeout(menu);
        $(this).addClass('menu__item-active');
        $(this).children('.header__submenu').stop().fadeIn(400)
    }, function(){
        menu = setTimeout(function(item){
            $('.menu__item-active').removeClass('menu__item-active');
            $('.header__submenu').stop().fadeOut(400)
        }, 300)});

    $('.main__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

