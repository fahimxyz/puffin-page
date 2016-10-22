(function ($) {
 "use strict";

// Jquery code for contact-area height
var x=$( window ).height();
$(".g-map").css("height", x-60);
$(".contact-area").css("height", x-137);


// about us grid activation
$('#ri-grid').gridrotator( {
    rows		: 3,
    columns		: 3,
    animType	: 'fadeInOut',
    animSpeed	: 2000,
    interval	: 3000,
    step		: 3,
    w320		: {
    	rows	: 3,
    	columns	: 3
    },
    w240		: {
    	rows	: 3,
    	columns	: 3
    },
    w480		: {
     rows	: 3,
     columns	: 4
    },
    w768		: {
     rows	: 3,
     columns	:4
    }
} );

// pagepiling activation
 $('#page-wrapper').pagepiling({
         menu: null,
         direction: 'vertical',
         verticalCentered: true,
         sectionsColor: [],
         anchors: [],
         scrollingSpeed: 700,
         loopBottom: true,
         loopTop: false,
         css3: true,
         navigation: {
             'textColor': '#3c948b',
             'bulletsColor': '#3c948b',
             'position': 'right',
             'tooltips': ['Home', 'About', 'Our Team', 'Contact']
         },
         normalScrollElements: null,
         normalScrollElementTouchThreshold: 5,
         touchSensitivity: 5,
         keyboardScrolling: true,
         sectionSelector: '.page-section',
         animateAnchor: false,

         //events
         onLeave: function(index, nextIndex, direction){},
         afterLoad: function(anchorLink, index){},
         afterRender: function(){},
     });


   /*----------------------------
   team carousel active
  ------------------------------ */
    $(".page-section.third-layer .carousel-active").owlCarousel({
        autoPlay: false,
  	  slideSpeed:2000,
  	  pagination:false,
  	  navigation:true,
        items : 4,
  	  /* transitionStyle : "fade", */    /* [This code for animation ] */
  	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,3],
  	  itemsDesktopSmall : [980,2],
  	  itemsTablet: [768,2],
  	  itemsMobile : [479,1],
    });



 /*---------------------
	 countdown  activation
	--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});


})(jQuery);

// preloader activation
jQuery(document).ready(function($) {
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
});
