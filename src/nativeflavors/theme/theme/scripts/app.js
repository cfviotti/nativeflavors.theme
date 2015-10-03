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
});

$('.recipe__close').click(function (e) {
    $(this).closest('.recipe.active').removeClass('active');
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