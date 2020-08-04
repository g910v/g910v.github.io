
// function openMenu(menu) {
// 	display = document.getElementById('menu').style.display;
// 	if (display==none) {
// 		document.getElementById('menu').style.display = "block";
// 	}
// 	else {
// 		document.getElementById('menu').style.display = "none";
// 	}
// }

$(document).ready(function(){

	








//-----------------------------------------------------------------

	$('.button-menu').on('click', function() {
		// $('.menu').toggleClass('menu-display-none menu-display-block');
		$('.about').toggleClass('about-trl-close about-trl-open');
		$('.episodes').toggleClass('episodes-trl-close episodes-trl-open');
		$('.creating').toggleClass('creating-trl-close creating-trl-open');
		$('.cast').toggleClass('cast-trl-close cast-trl-open');
		$('.back').toggleClass('close');
		$('.menu').toggleClass('menu-pos-close menu-pos-open')
	});


	var num = 1;
	$('.button-next').on('click', function(){
		num++;
		if (num == 2) {
			$('.number-one').removeClass('translate-new');
			$('.number-one').addClass('translate-old');
			$('.number-two').addClass('translate-new');
			$('.number-four').addClass('hidden');
			$('.number-four').removeClass('translate-old');
			$('.number-three').removeClass('hidden');
		} else if (num == 3) {
			$('.number-one').addClass('hidden start-pos');
			$('.number-one').removeClass('translate-old');
			$('.number-three').addClass('translate-new');
			$('.number-two').toggleClass('translate-old translate-new');
			$('.number-four').removeClass('hidden');
		} else if (num == 4) {
			$('.number-one').removeClass('hidden');
			$('.number-four').addClass('translate-new');
			$('.number-three').toggleClass('translate-old translate-new');
			$('.number-two').addClass('hidden');
			$('.number-two').toggleClass('translate-old');
			num = 0;
		} else if (num == 1) {
			$('.number-one').addClass('translate-new');
			$('.number-four').toggleClass('translate-old translate-new');
			$('.number-three').addClass('hidden');
			$('.number-three').toggleClass('translate-old');
			$('.number-two').removeClass('hidden');
		} 

	});

	var img = 1;
	$('.button-next').on('click', function(){
		img++;
		if (img == 2){
			$('.bi1').addClass('trl-im');
			$('.bi2').removeClass('hidden');
			$('.bi3').removeClass('trl-im');
			$('.bi4').addClass('hidden');
		} else if (img == 3) {
			$('.bi1').addClass('hidden');
			$('.bi2').addClass('trl-im');
			$('.bi3').removeClass('hidden');
			$('.bi4').removeClass('trl-im');
		} else if (img == 4) {
			$('.bi1').removeClass('trl-im');
			$('.bi2').addClass('hidden');
			$('.bi3').addClass('trl-im');
			$('.bi4').removeClass('hidden');
			img = 0;
		} else if (img == 1) {
			$('.bi1').removeClass('hidden');
			$('.bi2').removeClass('trl-im');
			$('.bi3').addClass('hidden');
			$('.bi4').addClass('trl-im');
			$('.bi4').addClass('hidden'); //скрываю сразу тк картинка 1 закрывает 4
		}
	});



//----------------------------------------------------------------------------------

	//отвечает за изменение текста при прокрутке
	var scrollPrev = 0;
	$(window).scroll(function() {
		$('.text-scroll').each(function(){ 
			var pos_object = $(this).offset().top; 
			var pos_object_bottom = $('body').height() - pos_object;
			var top_of_window = $(window).scrollTop(); 
			var bottom_of_windovs = $('body').height() - top_of_window;
			if(top_of_window + 730 > pos_object) {  
				$(this).toggleClass('text-scroll-down text-scroll');  
			} 
			else if (top_of_window < scrollPrev && bottom_of_windovs + 600 > pos_object_bottom) {
				// $(this).toggleClass('text-scroll-down text-scroll');
				$('.main-t-s').addClass('text-scroll333');
				$('.main-t-s').removeClass('text-scroll-down1');
			}
			scrollPrev = top_of_window;
		});
	});


	//отвечает за то чтобы при скроуле вверх надпись возвращалась в исходное положение
	var scrollPrev1 = 0;
	$(window).scroll(function() {
		$('.main-t-s').each(function(){  
			var pos_object2 = $(this).offset().top; 
			var scrollPos = $(window).scrollTop(); 
			if (scrollPos < scrollPrev1 && pos_object2 > scrollPos + 700) {
				$('.main-t-s').addClass('text-scroll');
				$('.main-t-s').removeClass('text-scroll-down');
			} else if (pos_object2 < scrollPos - 750) {
				$('.main-t-s').addClass('text-scroll');
				$('.main-t-s').removeClass('text-scroll-down');
			}
			scrollPrev1 = scrollPos;
		});
	});



//---------------------------------------------------------------

	var scrollPrev2 = 0;
	$(window).scroll(function() {
		$('body').each(function(){
			var scrolled = $(window).scrollTop();
			if ( scrolled > 50 && scrolled > scrollPrev2 ) {
				$('header').addClass('h');
			} else {
				$('header').removeClass('h');
			}
			scrollPrev2 = scrolled;  //если начинается скроулинг вверх, то после присваивания скроллед уменьшается
		});
	});



//-------------------------------------------------------------------

	$(window).scroll(function() {
		$('.text-scroll-2').each(function(){  
			var pos_object = $(this).offset().top; 
			var top_of_window = $(window).scrollTop(); 
			if(top_of_window + 650 > pos_object) {  
				$(this).toggleClass('text-scroll-down-2 text-scroll-2');  
			}
		});
	});

});

var scrollPrev3 = 0;
	$(window).scroll(function() {
		$('.t-e').each(function(){  
			var pos_object3 = $(this).offset().top; 
			var scrollPos3 = $(window).scrollTop(); 
			if (scrollPos3 < scrollPrev3 && pos_object3 > scrollPos3 + 700) {
				$('.t-e').addClass('text-scroll-2');
				$('.t-e').removeClass('text-scroll-down-2');
			} else if (pos_object3 < scrollPos3 - 750) {
				$('.t-e').addClass('text-scroll');
				$('.t-e').removeClass('text-scroll-down-2');
			}
			scrollPrev3 = scrollPos3;
		});
	});