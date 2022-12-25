
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


$(document).ready(function() {
    var el = $('.team-slider');
    
    var carousel;
    var carouselOptions = {
      margin: 20,
      nav: true,
      dots: true,
      slideBy: 'page',
      responsive: {
        0: {
          items: 1,
          rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
        },
        768: {
          items: 2,
          rows: 3 //custom option not used by Owl Carousel, but used by the algorithm below
        },
        991: {
          items: 3,
          rows: 2 //custom option not used by Owl Carousel, but used by the algorithm below
        }
      }
    };
  
    //Taken from Owl Carousel so we calculate width the same way
    var viewport = function() {
      var width;
      if (carouselOptions.responsiveBaseElement && carouselOptions.responsiveBaseElement !== window) {
        width = $(carouselOptions.responsiveBaseElement).width();
      } else if (window.innerWidth) {
        width = window.innerWidth;
      } else if (document.documentElement && document.documentElement.clientWidth) {
        width = document.documentElement.clientWidth;
      } else {
        console.warn('Can not detect viewport width.');
      }
      return width;
    };
  
    var severalRows = false;
    var orderedBreakpoints = [];
    for (var breakpoint in carouselOptions.responsive) {
      if (carouselOptions.responsive[breakpoint].rows > 1) {
        severalRows = true;
      }
      orderedBreakpoints.push(parseInt(breakpoint));
    }
    
    //Custom logic is active if carousel is set up to have more than one row for some given window width
    if (severalRows) {
      orderedBreakpoints.sort(function (a, b) {
        return b - a;
      });
      var slides = el.find('[data-slide-index]');
      var slidesNb = slides.length;
      if (slidesNb > 0) {
        var rowsNb;
        var previousRowsNb = undefined;
        var colsNb;
        var previousColsNb = undefined;
  
        //Calculates number of rows and cols based on current window width
        var updateRowsColsNb = function () {
          var width =  viewport();
          for (var i = 0; i < orderedBreakpoints.length; i++) {
            var breakpoint = orderedBreakpoints[i];
            if (width >= breakpoint || i == (orderedBreakpoints.length - 1)) {
              var breakpointSettings = carouselOptions.responsive['' + breakpoint];
              rowsNb = breakpointSettings.rows;
              colsNb = breakpointSettings.items;
              break;
            }
          }
        };
  
        var updateCarousel = function () {
          updateRowsColsNb();
  
          //Carousel is recalculated if and only if a change in number of columns/rows is requested
          if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
            var reInit = false;
            if (carousel) {
              //Destroy existing carousel if any, and set html markup back to its initial state
              carousel.trigger('destroy.owl.carousel');
              carousel = undefined;
              slides = el.find('[data-slide-index]').detach().appendTo(el);
              el.find('.fake-col-wrapper').remove();
              reInit = true;
            }
  
  
            //This is the only real 'smart' part of the algorithm
  
            //First calculate the number of needed columns for the whole carousel
            var perPage = rowsNb * colsNb;
            var pageIndex = Math.floor(slidesNb / perPage);
            var fakeColsNb = pageIndex * colsNb + (slidesNb >= (pageIndex * perPage + colsNb) ? colsNb : (slidesNb % colsNb));
  
            //Then populate with needed html markup
            var count = 0;
            for (var i = 0; i < fakeColsNb; i++) {
              //For each column, create a new wrapper div
              var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(el);
              for (var j = 0; j < rowsNb; j++) {
                //For each row in said column, calculate which slide should be present
                var index = Math.floor(count / perPage) * perPage + (i % colsNb) + j * colsNb;
                if (index < slidesNb) {
                  //If said slide exists, move it under wrapper div
                  slides.filter('[data-slide-index=' + index + ']').detach().appendTo(fakeCol);
                }
                count++;
              }
            }
            //end of 'smart' part
  
            previousRowsNb = rowsNb;
            previousColsNb = colsNb;
  
            if (reInit) {
              //re-init carousel with new markup
              carousel = el.owlCarousel(carouselOptions);
            }
          }
        };
  
        //Trigger possible update when window size changes
        $(window).on('resize', updateCarousel);
  
        //We need to execute the algorithm once before first init in any case
        updateCarousel();
      }
    }
  
    //init
    carousel = el.owlCarousel(carouselOptions);
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