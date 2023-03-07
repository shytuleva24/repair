$(function () {
    "use strict";
    $('.home').css('height', window.innerHeight + "px");
    $('.slider').css('height', $('.slider .slides.activeSlide').height() + "px");
    projectSlider();

    $(window).scroll(function () {
        $('.animated-element').each(function () {
            var elementTop = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();
            if (scrollPosition > elementTop - windowHeight + 200) {
                $(this).css({
                    'transform': 'scale(1)',
                    'opacity': 1
                });
            }
        });
    });

    $('.flowing-scroll').on( 'click', function(){ 
        let el = $(this);
        let dest = el.attr('href');
        if(dest !== undefined && dest !== '') { 
            $('html').animate({ 
                scrollTop: $(dest).offset().top - $('header').outerHeight()// прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });




});

function projectSlider() {
    $('.projects__item').each(function (i) {
        $(this).on('click', function () {
            for (let j = 0; j < $('.slides').length; j++) {
                $('.projects__item').eq(j).removeClass('activeSlide')
                $('.projects-dots__item').eq(j).removeClass('activeSlide')
                $('.slides').eq(j).removeClass('activeSlide')
            }
            $(this).addClass('activeSlide')
            $('.projects-dots__item').eq(i).addClass('activeSlide')
            $('.slides').eq(i).addClass('activeSlide')
        });
    });

    $('.projects-dots__item').each(function (i) {
        $(this).on('click', function () {
            for (let j = 0; j < $('.slides').length; j++) {
                $('.projects__item').eq(j).removeClass('activeSlide')
                $('.projects-dots__item').eq(j).removeClass('activeSlide')
                $('.slides').eq(j).removeClass('activeSlide')
            }
            $(this).addClass('activeSlide')
            $('.projects__item').eq(i).addClass('activeSlide')
            $('.slides').eq(i).addClass('activeSlide')

        });
    });
    $('.projects-arrow__right').on('click', function () {
        let currentSlide = $('.slider .activeSlide');
        let currentLinck = $('.projects__nav .activeSlide');
        let currentDot = $('.projects-dots .activeSlide');
        let nextSlide = currentSlide.next().length ? currentSlide.next() : currentSlide.siblings().first();
        let nextLinck = currentLinck.next().length ? currentLinck.next() : currentLinck.siblings().first();
        let nextDot = currentDot.next().length ? currentDot.next() : currentDot.siblings().first();

        currentSlide.removeClass('activeSlide');
        nextSlide.fadeIn(0).addClass('activeSlide');

        currentLinck.removeClass('activeSlide');
        nextLinck.fadeIn(0).addClass('activeSlide');

        currentDot.removeClass('activeSlide');
        nextDot.fadeIn(0).addClass('activeSlide');
    });

    $('.projects-arrow__left').on('click', function () {
        let currentSlide = $('.slider .activeSlide');
        let currentLinck = $('.projects__nav .activeSlide');
        let currentDot = $('.projects-dots .activeSlide');
        let prevSlide = currentSlide.prev().length ? currentSlide.prev() : currentSlide.siblings().last();
        let prevLinck = currentLinck.prev().length ? currentLinck.prev() : currentLinck.siblings().last();
        let prevDot = currentDot.prev().length ? currentDot.prev() : currentDot.siblings().last();

        currentSlide.removeClass('activeSlide');
        prevSlide.fadeIn(0).addClass('activeSlide');

        currentLinck.removeClass('activeSlide');
        prevLinck.fadeIn(0).addClass('activeSlide');

        currentDot.removeClass('activeSlide');
        prevDot.fadeIn(0).addClass('activeSlide');
    });
}