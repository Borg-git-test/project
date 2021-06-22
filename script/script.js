$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.menu').toggleClass('active')
        // $('.burger,.lin').removeClass('active')
    });
    $('.lin').click(function (event) {
        $('.burger,.menu').removeClass('active')
    });
    // $("#wideo").fitVids();
});
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
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots:true,
                    // draggable: false,
                    swipe: true,
                }
            }],
    });
});
