$(document).ready(function(){
    
    //Show dropdown on hover only for desktop devices
    var delay=0, setTimeoutConst;
    $('.site-navigation:not(.onclick) .navbar-nav>li.dropdown, .site-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
    function(){
      var $this = $(this);
      setTimeoutConst = setTimeout(function(){
        $this.addClass('open').slideDown();
        $this.find('.dropdown-toggle').addClass('disabled');
      }, delay);

    },  function(){ 
      clearTimeout(setTimeoutConst );
      $(this).removeClass('open');
      $(this).find('.dropdown-toggle').removeClass('disabled');
    });

    // Slicknav menu
    $('.navbar-nav').slicknav({
        allowParentLinks: true,
        label: "",
        closedSymbol: '<i class="fa fa-chevron-down" aria-hidden="true"></i>',
        openedSymbol :'<i class="fa fa-chevron-up" aria-hidden="true"></i>'
    });
  
  // menu click event
  $('.slicknav_btn').click(function() {
    $(this).toggleClass('act');
      if($(this).hasClass('act')) {
        $('.slicknav_menu').addClass('act');
      }
      else {
        $('.slicknav_menu').removeClass('act');
      }
  });
});

// Testimonials slick slider
$(function () {
    $(".testimonials").slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
                        {
                            breakpoint: 481,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                    ]
    });

    $("#PortfolioItemSlider").slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".post-img-slider").slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".section-clients-2-testimonials").slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    if ($(".section-counters [data-to]").length>0) {
        $(".section-counters [data-to]").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                stat_item.addClass('counting');
                stat_item.countTo();
            };
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

    if ($(".section-who-we-are [data-to]").length>0) {
        $(".section-who-we-are [data-to]").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                stat_item.addClass('counting');
                stat_item.countTo();
            };
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

    /* Scroll to specific #ID */
    var topoffset = 51;
    $(".scrollTo").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#main").offset().top - topoffset
        }, 500);
    });

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });


    //Featured Works Carousel
    $('#threeSlidesSlider').carousel({ interval: false });

    $('.three-slides-slider .item').each(function(){
      var itemToClone = $(this);

      for (var i=1;i<3;i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });

    //Team Carousel
    $('#oneSlidesSlider').carousel({ interval: false });
    $('#fourSlidesSlider').carousel({ interval: false });

    $('.carousel-sync').on('slide.bs.carousel', function(ev) {
        var dir = ev.direction == 'right' ? 'prev' : 'next';
      $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
    });
    
    $('.carousel-sync').on('slid.bs.carousel', function(ev) {
      $('.carousel-sync').removeClass('sliding');
    });

    $('.four-slides-slider .item').each(function(){
      var itemToClone = $(this);

      for (var i=1;i<4;i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });

    // Carousel touch support
    if($(".carousel-inner").length) {
      $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
          $(this).parent().carousel('next');
        },
        swipeRight: function () {
          $(this).parent().carousel('prev');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 50
      });
    }

    // Selectpicker
    $('select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;

      $this.addClass('selectpicker-hidden'); 
      $this.wrap('<div class="selectpicker"></div>');
      $this.after('<div class="selectpicker-styled"></div>');

      var $styledSelect = $this.next('div.selectpicker-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
          'class': 'selectpicker-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.selectpicker-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.selectpicker-options').hide();
          });
          $(this).toggleClass('active').next('ul.selectpicker-options').toggle();
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });

      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });

    });
    
}());

//shuffle.js
var shuffleme = (function( $ ) {
  'use strict';
      var $grid = $('#grid'), //locate what we want to sort 
      $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '[class*="col-"]', 
       group: Shuffle.ALL_ITEMS, 
    });
  },

    
  // Set up button clicks
  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Hide current label, show current label in title
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }

      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  // Re layout shuffle when images load. This is only needed
  // below 768 pixels because the .picture-item height is auto and therefore
  // the height of the picture-item is dependent on the image
  // I recommend using imagesloaded to determine when an image is loaded
  // but that doesn't support IE7
  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    // Get all images inside shuffle
    $grid.find('img').each(function() {
      var proxyImage;

      // Image already loaded
      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    // Because this method doesn't seem to be perfect.
    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };      

  return {
    init: init
  };
}( jQuery ));

if($('#grid').length >0 ) { 
  shuffleme.init(); //filter portfolio
};


// GoogleMap
if($('#map').length >0 ) {
  var google;
  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
      var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 7,
          // The latitude and longitude to center the map (always required)
          center: myLatlng,
          // How you would like to style the map. 
          scrollwheel: false,
          styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
      };

      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('map');
      // Create the Google Map using out element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);
      var addresses = ['Brooklyn'];
      for (var x = 0; x < addresses.length; x++) {
          $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
              var p = data.results[0].geometry.location
              var latlng = new google.maps.LatLng(p.lat, p.lng);
              new google.maps.Marker({
                  position: latlng,
                  map: map,
                  icon: 'images/loc.png'
              });

          });
      }
      
  }
  google.maps.event.addDomListener(window, 'load', init);
}