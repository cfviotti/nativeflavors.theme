$(document).foundation();

document.addEventListener('DOMContentLoaded', function () {
	objectFit.polyfill({
		selector: 'img',
		fittype: 'cover'
	});
});

$('.recipe').click(function () {
    $(this).addClass('active');
});

$('.recipe__close').click(function (e) {
    $(this).closest('.recipe.active').removeClass('active');
    e.stopPropagation();
});

$(document).ready(function() {
    $(function(){
 		$('#Container').mixItUp({
			animation: {
				duration: 400,
				effects: 'fade stagger(30ms) translateZ(-200px)',
				easing: 'cubic-bezier(.55,0,.1,1)'
			}
		});
    });
});