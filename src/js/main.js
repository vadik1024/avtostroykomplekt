	new WOW().init();

	const mainSlider = new Swiper('.main-slider', {
	     // autoHeight: true
	     autoplay: {
	     	delay: 4000,
	     	disableOnInteraction: false,
	     },
	     loop: true
	 });



	var ourPartnerSlider = new Swiper(".our-partners__slider", {
		slidesPerView: 5,
		loop: true,
		autoHeight: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.our-partner-button-next',
			prevEl: '.our-partner-button-prev',
		},

		breakpoints: {


			992: {
				slidesPerView: 5,
				loop: true,
			},

			768: {
				slidesPerView: 3,
				centeredSlides: false,
			},

			340: {
				slidesPerView: 4,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			},

			300: {
				slidesPerView: 3,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			}

		}
	});

	$('select').niceSelect();



	var casesSlider = new Swiper(".cases-slider", {
		loop: true,
		spaceBetween: 30,

		navigation: {
			nextEl: '.cases-button-next',
			prevEl: '.cases-button-prev',
		},

	});


	var ourClientsSlider = new Swiper(".our-clients__slider", {
		slidesPerView: 5,
		loop: true,
		autoHeight: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.our-clients-button-next',
			prevEl: '.our-clients-button-prev',
		},  

		breakpoints: {


			992: {
				slidesPerView: 5,
				loop: true,
			},

			768: {
				slidesPerView: 3,
				centeredSlides: false,
			},

				340: {
				slidesPerView: 4,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			},

			300: {
				slidesPerView: 3,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			}


		}
	});


	var ourCertificateSlider = new Swiper(".our-certificate__slider", {
		slidesPerView: 5,
		loop: true,
		autoHeight: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.our-certificate-button-next',
			prevEl: '.our-certificate-button-prev',
		},

		breakpoints: {


			992: {
				slidesPerView: 5,
				loop: true,
			},

			768: {
				slidesPerView: 3,
				centeredSlides: false,
			},

			340: {
				slidesPerView: 4,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			},

			300: {
				slidesPerView: 3,
				centeredSlides: true,
				spaceBetween: 4,
				slidesPerGroup: 1,
			}

		}
	});



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
			didScroll = false;
		}
	}, 250);


	function hasScrolled() {
		var st = $(this).scrollTop();


		if (window.matchMedia('screen and (min-width: 768px)').matches) {

			if (window.pageYOffset < navbarSticky) {
				$('header').removeClass('menu-active__animation');
				document.querySelector("header .logo img").src = "img/logo-white.svg";
			} else {
				$('header').addClass('menu-active__animation');
				document.querySelector("header .logo img").src = "img/logo-dark.svg";
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






	document.querySelector(".cases button").addEventListener("click", function(){
		casesSlider.slideNext();
	});



	$(function(){
		$('a[href^="#"]').on('click', function(event) {

			event.preventDefault();

			var sc = $(this).attr("href"),
			dn = $(sc).offset().top;

			$('html, body').animate({scrollTop: dn}, 4000);

		});
	});



	// var droupdown_btn = $('.dropdown-btn');
	// var droupdown = $('.droupdown-menu');
	// var droupdown_link = $('.droupdown a');
	

	// droupdown_btn.click(function () {
	// 	droupdown.toggleClass('droupdown-active');
	// });

	// droupdown_link.click(function () {
	// 	droupdown.toggleClass('droupdown-active');
	// });








	// var droupdownFooter_btn = $('.dropdown-footer-btn');
	// var droupdownFooter = $('.droupdown-footer-menu');
	// var droupdownFooter_link = $('.droupdown-footer-menu a');

	// droupdownFooter_btn.click(function () {
	// 	droupdownFooter.toggleClass('droup-down-footer__active');
	// });

	// droupdownFooter_link.click(function () {
	// 	droupdownFooter.toggleClass('droup-down-footer__active');
	// });



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






	$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});
