$(document).ready(function() {
	// $('.enter').fadeOut(0);

	var $header = $('header');

	var headerSize = function() {
		var $windowHeight = $(window).height();
		$header.css({ 'height' : $windowHeight + 'px' });
	};

	$(window).resize(function() {
		headerSize();
	});

	$('.enter').click(function() {
		$('.loader').removeClass('loader-open').addClass('loader-close');
	});

	$('.nav__button').click(function() {
		$(this).toggleClass('open');
		$('header').toggleClass('active');
	})

	// $('.loader').delay(24500).addClass('loader-close');

	setTimeout(function() {
	  $('.loader').fadeOut().empty();
	}, 500);

	headerSize();

});

$(window).load(function() {
	// $('.enter').delay(10000).addClass('enter-show');
});