/**
 * Geinuine Template Scripts
 * Author: Md Rabiul Islam Robi
 * @since  v1.0.0
 */

// DOM Ready Function
(function($) {

    // Smooth Scrolling Effect
    $( '.navbar-nav .nav-item .nav-scroll' ).addClass( 'smoothscroll' );
    $( '.smoothscroll' ).on( 'click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var navHeight = $( '.header-navbar-area .navbar' ).height();

        $( 'html, body' ).stop().animate({
            'scrollTop': $( target ).offset().top - 80
        }, 1200);
    });

    // Adjust Header Menu On Scroll Down
    $( window ).scroll( function () {
        var wScroll = $(this).scrollTop();
        var wh = $(window).height();
        if (wScroll > 150) {
            $( '.header-navbar-area .navbar' ).addClass( 'bg-dark' );
        } else {
            $( '.header-navbar-area .navbar' ).removeClass( 'bg-dark' );
        }
    });

    // Mobile Menu:: Hiding Nav after scroll
    $( '.header-navbar-area .navbar .navbar-nav .nav-item .nav-link' ).on( 'click', function() {
        $( '.navbar-collapse' ).removeClass( 'show' );
    });

    // jQuery Countdown Init
    $('.event-timer').countdown( '2018/02/27', function(e) {
        $( this ).html( e.strftime( '<h3>%d: <span>Days</span></h3> <h3>%H: <span>hr</span></h3> <h3>%M: <span>min</span></h3> <h3>%S: <span>sec</span></h3>' ) );
    });

	// Dynamic Speaker Background Image
	function dymanicBackground( container, imgContainer ) {
	    var findGrid = $( container );
		findGrid.each( function() {
			var getSpeakerBg = $(this).data( imgContainer );
			$(this).css( 'background', 'url("'+getSpeakerBg+'")' );
		});
	}
    // Dynamic Speaker Background
    dymanicBackground( '.geinuine-speakers', 'speakers' );
    // Dynamic Event Background
	dymanicBackground( '.event-show-grid .event-show-img', 'event-img' );
	
	// Testimonial Carousel
	function testimonial_carousel() {
        var owl = $('.js-testimonial-carousel');
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i> ", "<i class='fa fa-angle-right'></i>"],
            items: 3,
            smartSpeed: 2000,
            addClassActive: true,
            dots: false,
            autoplay: true,
            center: true,
            autoplayTimeout: 5000,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                992: {
                    items: 3
                }
            }
        });
    }
    testimonial_carousel();
    // Event Carousel
    function event_carousel() {
        var owl = $('.js-event-carousel');
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i> ", "<i class='fa fa-angle-right'></i>"],
            items: 3,
            smartSpeed: 2000,
            addClassActive: true,
            dots: true,
            autoplay: true,
            center: true,
            autoplayTimeout: 5000,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    event_carousel();
})(jQuery);

// Post Grid Background Image Settings


