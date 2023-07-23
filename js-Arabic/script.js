
// =====================================================================================================================================
// color and backgroundColor Browser 

if (JSON.parse(localStorage.getItem("myCr")) && JSON.parse(localStorage.getItem("mybg")) && JSON.parse(localStorage.getItem("dN")) && JSON.parse(localStorage.getItem("dB"))) {
	// icon Hide and show ---------------------------------

	$(".sun-moon-sun").css("display", JSON.parse(localStorage.getItem("dN")));
	$(".moon-sun-moon ").css("display", JSON.parse(localStorage.getItem("dB")));

	//color and backgroundColor Browser ---------------------------------


	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", JSON.parse(localStorage.getItem("myCr")));
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", JSON.parse(localStorage.getItem("mybg")));
}
else {
	console.log('no')
}


$(".sun-moon-sun").click(function () {
	// icon Hide and show ---------------------------------
	localStorage.setItem('dN', JSON.stringify(`none`));
	localStorage.setItem('dB', JSON.stringify(`block`));
	$(".sun-moon-sun").css({ "display": 'none' });
	$(".moon-sun-moon").css({ "display": 'block' });

	//color and backgroundColor Browser ---------------------------------
	localStorage.setItem('myCr', JSON.stringify(`#323031`));
	localStorage.setItem('mybg', JSON.stringify(`#f4f4f4`));
	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", `#323031`);
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", `#f4f4f4`);
	// $(".box-SERVICES-SERVICES .swiper-slide ,.bg-services-section2,.box-img-index").css("backgroundColor", cr);
})


$(".moon-sun-moon").click(function () {

	//icon Hide and show ---------------------------------
	localStorage.setItem('dN', JSON.stringify(`block`));
	localStorage.setItem('dB', JSON.stringify(`none`));
	$(".sun-moon-sun").css({ 'display': 'block' });
	$(".moon-sun-moon").css({ 'display': 'none' });

	// color and backgroundColor Browser---------------------------------
	localStorage.setItem('myCr', JSON.stringify(`#f4f4f4`));
	localStorage.setItem('mybg', JSON.stringify(`#323031`));
	$("body ,.box-nav-all a,.color-js-css ,.box-SERVICES-SERVICES .swiper-slide .service-details p ").css("color", `#f4f4f4`);
	$("body ,.navbar,.navbar.animate , .box-nav-all ,.box-cilsh-nav ,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul ").css("backgroundColor", `#323031`);

})




// $(".sun-moon-sun").click(function () {




// 	$(".box-SERVICES-SERVICES .swiper-slide ,.bg-services-section2,.box-img-index").css("backgroundColor", "#323031");


// 	$(".box-SERVICES-SERVICES .swiper-slide .service-details p ,.bg-services-section2 p ,.box-img-index,.news-content p").css("color", "#f4f4f4");
// 	$(".project-block .inner-box .content-box").css("backgroundColor", "#323031");

// 	$(".img-app-scr img").attr("src", "images/app/app-wit.png");

// 	$("p").css("color", "#929292 ");

// 	$(".bg-app").css("backgroundImage", "url('images/app/bg-w.png')");

// });


// $(".moon-sun-moon").click(function () {
// 	$(".sun-moon-sun").fadeToggle(500);
// 	$(".moon-sun-moon").fadeToggle(500);

// 	$("body, .navbar ,.navbar.animate ,.box-nav-all ,.box-cilsh-nav,.box-SERVICES-SERVICES .swiper-slide ,.Services-nav ul").css("backgroundColor", "#323031");
// 	$(".box-SERVICES-SERVICES .swiper-slide ,.box-img-index").css("backgroundColor", "#f4f4f4");
// 	$(".project-block .inner-box .content-box , .bg-services-section2  ").css("backgroundColor", "#fff");

// 	$("body ,.box-nav-all a , .color-js-css , p , .box-img-index").css("color", "#f4f4f4 ");
// 	$(".box-SERVICES-SERVICES .swiper-slide .service-details p ,.bg-services-section2 p,.news-content p ").css("color", "#323031");


// 	$(".img-app-scr img").attr("src", "images/app/app-dark.png");

// 	$(".bg-app").css("backgroundImage", "url('images/app/bg-d.png')");

// });



// --------------------------------------------------------------------
$(function () {
	let scroll = $(document).scrollTop();
	let navHeight = $('.box-nav-all').outerHeight();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();

		if (scrolled > navHeight) {
			$('.box-nav-all').addClass('animate');
		} else {
			$('.box-nav-all').removeClass('animate');
		}

		if (scrolled > scroll) {
			$('.box-nav-all').removeClass('sticky');

		} else {
			$('.box-nav-all').addClass('sticky');
		}
		scroll = $(document).scrollTop();



	});

});




// ----------------------------------------------------------------------------------------------

let maunn = document.querySelector('.maunn');

maunn.addEventListener('click', function () {
	this.classList.toggle('is-active');
})





$(document).ready(function () {
	$('.mun-align').click(function () {
		$('.box-cilsh-nav').toggleClass('active')
		// $(window.alert('lskclfsjk'))
	})
})




/* ==============================================================================================================================  */
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 150,
		modifier: 1,
		slideShadows: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// pagination: {
	//   el: ".swiper-pagination",
	// },
});





//   =========================================================================================================
// slider hover
(function () {


	$(".flex-slide").each(function () {
		$(this).hover(function () {
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function () {
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();


// ============================================================================================================================================










//   =========================================================================================================
// zoom img












// ===============================================================================================================


$(document).ready(function () {

	let aboutOffsetTop = $(".section2").offset().top;

	$(window).scroll(function () {
		let wScroll = $(window).scrollTop();

		if (wScroll > aboutOffsetTop - 50) {
			$(".arrow-buton-2").fadeIn(200);
		}
		else {
			$(".arrow-buton-2").fadeOut(200);
		}
	})

	$(".arrow-buton-2").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 500);
	})

})


// ============================================================================================================================================











$('.slider-1').owlCarousel({
	nav: true,
	dots: false,
	center: true,
	loop: false,
	margin: 50,
	rtl: true,
	responsiveClass: true,
	// animateOut: 'fadeOut',

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 2,
		}
	}
});



$('.slider-2').owlCarousel({
	nav: false,
	dots: false,
	center: true,
	loop: true,
	margin: 50,
	responsiveClass: true,
	animateOut: 'fadeOut',
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	rtl: true,
	responsive: {

		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		}
	}
});


// =======================================================================

// ======================================================================
//   =========================================================================================================
// zoom img

var imgs = Array.from(document.querySelectorAll(".item-GALLERY img"));

var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");

var currentIndex = 0;


var closeBtn = document.getElementById("close");

for (var i = 0; i < imgs.length; i++) {

	imgs[i].addEventListener("click", function (eventInfo) {

		lightBoxContainer.style.display = "flex";

		var imgSrc = eventInfo.target.getAttribute("src");

		lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
		currentIndex = imgs.indexOf(eventInfo.target);
	})
}

//===================================

$("#next").click(function () {
	function nextSlide() {
		currentIndex++;

		if (currentIndex == imgs.length) {
			currentIndex = 0;
		}

		var imgSrc = imgs[currentIndex].getAttribute("src");
		lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
	}
});

$("#prev").click(function () {
	function prevSlide() {
		currentIndex--;

		if (currentIndex < 0) {
			currentIndex = imgs.length - 1;
		}

		var imgSrc = imgs[currentIndex].getAttribute("src");
		lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
	}
});
// ----------------------

$("#close").click(function () {
	function closeSlide() {
		lightBoxContainer.style.display = "none";
	}
});




//============================
//16	//انا كده بقول لم اضغط ب الكيبورد سهم يمين او شمال يحرك الصور 
document.addEventListener("keydown", function (eventInfo) {
	//console.log(eventInfo)
	if (eventInfo.code == "ArrowRight") { //سهم يمين في الكيبورد ArrowRightال
		nextSlide();
	}

	else if (eventInfo.code == "ArrowLeft") { //سهم شمال في الكيبورد ArrowLeftال
		prevSlide();
	}

	else if (eventInfo.code == "Escape") { //اللي بيعمل خروج للعنصر Escده الEscapeال
		closeSlide();
	}
})

//============================
// ده علشان لم اضغط في اي مكان بره الصوره ب الماوس يلاغي الصوره 
document.addEventListener("click", test)
function test(e) {
	//console.log(e.target)
	if (e.target == lightBoxContainer) {
		lightBoxContainer.style.display = "none";
	}
}


// =========================================================================================================



$(".Arabic-Einglish").click(function () {
	$(".Arabic-Einglish ul").slideToggle(500);
});


// ========================================================================================
// hover-slider-width


jQuery(document).ready(function ($) {
	// instantiate the accordion
	$('#example1').accordionSlider({
		width: 'auto',
		height: 500,
		responsiveMode: 'auto',
		visiblePanels: 5,
		closePanelsOnMouseOut: false,
		autoplay: true,
		rtl:true,
	});

	// change the responsive mode
	$('.controls a').click(function (event) {
		event.preventDefault();

		if ($(this).hasClass('auto')) {
			// change the responsive mode to 'auto' and remove the 'custom-responsive' class
			$('#example1').removeClass('custom-responsive');
			$('#example1').accordionSlider('responsiveMode', 'auto');

			// change the arrows' visibility
			$('.auto-arrow').show();
			$('.custom-arrow').hide();
		} else if ($(this).hasClass('custom')) {
			// change the responsive mode to 'custom' and add the 'custom-responsive' 
			// class in order to use it as a reference in the CSS code
			$('#example1').addClass('custom-responsive');
			$('#example1').accordionSlider('responsiveMode', 'custom');

			// change the arrows' visibility
			$('.custom-arrow').show();
			$('.auto-arrow').hide();
		}
	});
});

// ===================================================================================================
// loading
$("#loading").fadeOut(3000 , function(){
	$("body").css("overflow-y" , "auto");
});
