$(document).ready(function () {
		$(".phone-number").mask("+7 (999) 999-99-99");
	});



	let modal = document.querySelector(".modal"),
	closePopup = $(".close-modal"),
	modalBtn = $(".open-popup, .open-modal");

	modalBtn.click(function() {
		modal.classList.add("fadeIn");
		$("body").toggleClass("overflow-hidden");
	});


	closePopup.click(function() {

		modal.classList.remove("fadeIn");
		modal.classList.add("fadeOut");

		$("body").toggleClass("overflow-hidden");

		modal.addEventListener('animationend', function() {
			modal.classList.remove("fadeOut");
		});

	});



	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	var navbar = document.getElementsByTagName("header")[0];
	var navbarSticky = navbar.offsetTop;


	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = true;
		}
	}, 250);


	function hasScrolled() {
		var st = $(this).scrollTop();


		if (window.matchMedia('screen and (min-width: 768px)').matches) {

			if (window.pageYOffset - 70 < navbarSticky) {
				$('header').removeClass('menu-active__animation');
			} else {
				$('header').addClass('menu-active__animation');
			}

			if(Math.abs(lastScrollTop - st) <= delta)
				return;

			if (st > lastScrollTop && st > navbarHeight){

				$('header').addClass('menu-active');
				$('.droupdown-menu').removeClass('droupdown-active');

			} else {

				if(st + $(window).height() < $(document).height()) {
					$('header').removeClass('menu-active');
				}
			}

			lastScrollTop = st;
		}

	}




var link = $('.menu-icon__block');
	var link_active = $('.menu-link_active');
	var menu = $('.mobile-menu');
	var nav_link = $('.mobile-menu li a[href^="#"]');

	link.click(function () {
		link.toggleClass('menu-icon__active');
		menu.toggleClass('mob-menu__active');
	});

	nav_link.click(function () {
		link.removeClass('menu-icon__active');
		menu.toggleClass('mob-menu__active');
	});
