
$(document).ready(function () {

    $(".team-slider").owlCarousel({
        speed: 800,
        loop: true,
        margin: 23,
        autoplay: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        e.relatedTarge
        $(".team-slider").trigger('refresh.owl.carousel');
    });
});


$(document).ready(function () {
    $('.services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.homereviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function () {
    $('.presscoverage-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,
        navText: ["<div class='nav-btn prev-slide'>swfds</div><div id='slider-num'>", "</div><div class='nav-btn next-slide'>dgfdg</div>"],
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 569,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});



$(document).ready(function () {

    $(".partners-slider").owlCarousel({
        speed: 800,
        loop: true,
        margin: 23,
        autoplay: true,
        nav: false,
        navigation: false,
        dots: true,
        multipleRow: true,
        rows: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                rows: 2
            }
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target
        e.relatedTarge
        $(".team-slider").trigger('refresh.owl.carousel');
    });
    
});


$(document).ready(function () {
    $('.history-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        rows: 1,
        arrows: false,
        dots: true,
        nav: false,
        pauseOnHover: false,

    });
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
        once: true,
    });
});