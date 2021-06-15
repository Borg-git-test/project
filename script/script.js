$(document).ready(function () {
    $('.slider').slick({
        arrows:false,
        dots:true,
        // infinite:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        initialSlide: 2,
        // autoplay: true,
        // autoplaySpeed: 10000,
        // pauseOnFocus: true,
        // pauseOnDotsHover: true,
        // pauseOnHover: true,
    });
});