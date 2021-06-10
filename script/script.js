$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,#menu').toggleClass('active')
    });
    // $("#wideo").fitVids();
});

// $(document).ready(function () {
//     let tre = document.getElementById("tre");
//     let slides = document.getElementsByClassName("tre");
//     let pageWidth = $(window).width();
//     if (slides.length > 3) {
//         tre.className += "sere";
//     }
//     if ($(window).width() <= 850) {
//         tre.className += "sere";
//     }
// });


$(document).ready(function () {
    $('#tre').slick({
        arrows:false,
        dots:true,
        infinite:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        // easing: '',
        // autoplay: true,
        // autoplaySpeed: 10000,
        // pauseOnFocus: true,
        // pauseOnDotsHover: true,
        // pauseOnHover: true,
        draggable: false,
        swipe: false,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        // centerMode: true,
        // variableWidth: true,
        // rows: 2,
        // slidesPerRow: 2,
        // vertical: true,
        // verticalSwiping: true,
        // asNavFor:".tre",
        responsive:[
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:true,
                    draggable: false,
                    swipe: true,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    draggable: false,
                    swipe: true,
                }
            }
        ],
    });

    if ($('#slick-slide-control00').attr('aria-label') == "1 of 1") {
        $('.slick-dots .slick-active button').css('display','none')
    };

    $('.slider').slick({
        arrows:false,
        dots:true,
        // infinite:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
    });

    $('.slider-mentors').slick({
        arrows:false,
        dots:true,
        // infinite:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: true,
    });

});

