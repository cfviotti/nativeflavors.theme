$(document).foundation();

document.addEventListener('DOMContentLoaded', function () {
	objectFit.polyfill({
		selector: 'img',
		fittype: 'cover'
	});
});

var animating = false;

$('.c-hamburger').click(function () {
	if (animating) {
		return;
	} else {
		animating = true;

	    $(this).toggleClass('is-active');
	    $(this).closest('#header').toggleClass('active');

	    if ($('#header').hasClass('active')) {
		    $(this).siblings('#pages').delay(350).fadeIn();
		    $(this).siblings('.menu--right').delay(350).fadeIn(function() {
		    	animating = false;
		    });
	    } else {
	    	$(this).siblings('#pages').fadeOut();
	    	$(this).siblings('.menu--right').fadeOut(function() {
	    		animating = false;
	    	});
	    }
	    
	}
});


$('.recipe').click(function () {
    $(this).addClass('active');
    var modalContent = $(this).find('.recipe__description').children().clone();
    $('.native-modal').html(modalContent);
    $('.native-modal').addClass('active');
    $('.native-modal-bg').addClass('active');

});

$('.recipe__close').click(function () {	
    $('.recipe.active').removeClass('active');
    $('.native-modal').removeClass('active');
    $('.native-modal-bg').removeClass('active');
    $('.native-modal').empty();
    
});

$('.product__item').click(function () {
    $(this).addClass('active');
    $('body').addClass('no-scroll');
});

$('.more-info__close').click(function (e) {
    $(this).closest('.product__item.active').removeClass('active');
    $('body').removeClass('no-scroll');
    e.stopPropagation();
});

$('.question__title').click(function () {
    $(this).closest('.faq__question').toggleClass('active');
    $(this).siblings('.question__answer').slideToggle();
});

$('.faq__category').click(function () {
	var currentCategory = $(this).text();
	$('.faq__title--category').text(currentCategory);
});

window.onresize = function() {
	if (Foundation.utils.is_small_only()) {
		$('.faq__bar').addClass('is-small');
		$('.faq__bar').removeClass('active');
		$('.faq__categories').hide();	
	} else {
		$('.faq__bar').removeClass('is-small');
		$('.faq__bar').removeClass('active');
		$('.faq__categories').show();	
	}

	$('.product__more-info').each(function(){
	      var setHeight = $(window).innerHeight();
	      $(this).height(setHeight * 0.8 - 100);    
	});
}

$('.faq__title').click(function () {
    $(this).closest('.faq__bar.is-small').toggleClass('active');
    $(this).siblings('.faq__categories').slideToggle();
});

$('.faq__category').click(function () {
	$(this).closest('.faq__bar.active .faq__categories').slideToggle();
	$(this).closest('.faq__bar.active').removeClass('active');

});


$(document).ready(function() {
	$('body').bind('touchstart', function() {});
    $(function(){
 		$('#recipes-mixitup').mixItUp({
			animation: {
				duration: 400,
				effects: 'fade stagger(30ms) translateZ(-200px)',
				easing: 'cubic-bezier(.55,0,.1,1)'
			}
		});

 		$('#faq-mixitup').mixItUp({
			load: {
			filter: 'none'
			},
			animation: {
			duration: 700,
			effects: 'translateX(-180%) stagger(80ms)',
			easing: 'cubic-bezier(.55,0,.1,1)'
			}
 		});


    });

});

// Simple Parallax


(function($) {

  $.fn.parallax = function(options) {

    var windowHeight = $(window).height();

    // Establish default settings
    var settings = $.extend({
      speed: 0.15,
      direction: 'up'
    }, options);

    // Iterate over each object in collection
    return this.each(function() {

      // Save a reference to the element
      var $this = $(this);

      // Set up Scroll Handler
      $(document).scroll(function() {

        var scrollTop = $(window).scrollTop();
        var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
        var offset = $this.offset().top;
        var offsetBottom = $(window).height() - $this.offset().top; - $this.height();
        var height = $this.outerHeight();

        // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }

        

        // Set direction of parallax
        if (settings.direction == 'down') {
        	var yBgPosition = Math.round((offset + scrollTop) * settings.speed);
        } else if (settings.direction == 'up') {
        	var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
        } else console.log('Direction not valid!')

        // Apply the Y Background Position to Set the Parallax Effect
        $this.css('background-position', 'center ' + yBgPosition + 'px');

      });

    });

  }
}(jQuery));
$('.parallax-section').parallax({
	speed : 0.5
});

$('.parallax-section-product-bg').parallax({
	speed : 0.3
});

$('.parallax-section-product').parallax({
	speed : 0.2 ,
	direction : 'down'
});