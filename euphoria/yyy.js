
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





//---------------------------СЖАТИЕ ШАПКИ------------------------------------

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



//----------------------------------НАЧАЛО-------------------------------------------------
	
	$(window).scroll(function() {
		$('body').each(function(){

			var scroll0 = $(window).scrollTop();
			if (scroll0 < 2050) {
				$(this).addClass('body-bc-1');
				$(this).removeClass('body-bc-2');
				$('header').addClass('h-bc-1');
				$('header').removeClass('h-bc-2');
			} else {
				$(this).addClass('body-bc-2');
				$(this).removeClass('body-bc-1');
				$('header').addClass('h-bc-2');
				$('header').removeClass('h-bc-1');
			}
		});
	});


	$(window).scroll(function() {
		$('.column-picturs-left').each(function(){

			var scroll1 = $(window).scrollTop();

			if (scroll1 > 50 && scroll1 < 100) {
				$(this).css("left", "-22%");
				$(this).css("top", "-172.5%");
			} else if (scroll1 > 100 && scroll1 < 250) {
				$(this).css("left", "-14%");
				$(this).css("top", "-145%");
			} else if (scroll1 > 250 && scroll1 < 400) {
				$(this).css("left", "-6%");
				$(this).css("top", "-117.5%");
			} else if (scroll1 > 400 && scroll1 < 550) {
				$(this).css("left", "2%");
				$(this).css("top", "-90%");
			} else if (scroll1 > 550 && scroll1 < 700) {
				$(this).css("left", "10%");
				$(this).css("top", "-62.5%");
			} else if (scroll1 > 700 && scroll1 < 850) {
				$(this).css("left", "10%");
				$(this).css("top", "-35%");
			} else if (scroll1 > 850 && scroll1 < 1000) {
				$(this).css("left", "10%");
				$(this).css("top", "-7.5%");
			} else if (scroll1 > 1000 && scroll1 < 1150) {
				$(this).css("left", "10%");
				$(this).css("top", "19.5%");
			} else if (scroll1 > 0 && scroll1 < 50){
				$(this).css("left", "-30%");
				$(this).css("top", "-200%");
			}
			if (scroll1 > 1300) {
				$(this).css("opacity", 0)
			} else if (scroll1 < 1300) {
				$(this).css("opacity", 0.7)
			}
		});
	});


	$(window).scroll(function() {
		$('.column-picturs-right').each(function(){ 

			var scroll2 = $(window).scrollTop();

			if (scroll2 > 50 && scroll2 < 100) {
				$(this).css("right", "-22%");
				$(this).css("bottom", "-172.5%");
			} else if (scroll2 > 100 && scroll2 < 250) {
				$(this).css("right", "-14%");
				$(this).css("bottom", "-145%");
			} else if (scroll2 > 250 && scroll2 < 400) {
				$(this).css("right", "-6%");
				$(this).css("bottom", "-117.5%");
			} else if (scroll2 > 400 && scroll2 < 550) {
				$(this).css("right", "2%");
				$(this).css("bottom", "-90%");
			} else if (scroll2 > 550 && scroll2 < 700) {
				$(this).css("right", "10%");
				$(this).css("bottom", "-62.5%");
			} else if (scroll2 > 700 && scroll2 < 850) {
				$(this).css("right", "10%");
				$(this).css("bottom", "-35%");
			} else if (scroll2 > 850 && scroll2 < 1000) {
				$(this).css("right", "10%");
				$(this).css("bottom", "-7.5%");
			} else if (scroll2 > 1000 && scroll2 < 1150) {
				$(this).css("right", "10%");
				$(this).css("bottom", "19.5%");
			} else if (scroll2 > 0 && scroll2 < 10){
				$(this).css("right", "-30%");
				$(this).css("bottom", "-200%");
			}
			if (scroll2 > 1300) {
				$(this).css("opacity", 0)
			} else if (scroll2 < 1300) {
				$(this).css("opacity", 0.7)
			}
		});
	});

	$(window).scroll(function() {
		$('.main-text').each(function(){

			var scroll3 = $(window).scrollTop();

			if (scroll3 > 500 && scroll3 < 999) {
				$('.main-text-1').addClass('main-text-decore-old');
				$('.main-text-1').removeClass('main-text-decore-new');
				$('.main-text-2').addClass('main-text-decore-new');
				$('.main-text-2').removeClass('main-text-decore-old');
				$('.main-text-3').addClass('main-text-decore-old');
				$('.main-text-3').removeClass('main-text-decore-new');
			} else if (scroll3 > 1000 && scroll3 < 1349) {
				$('.main-text-2').addClass('main-text-decore-old');
				$('.main-text-2').removeClass('main-text-decore-new');
				$('.main-text-3').addClass('main-text-decore-new');
				$('.main-text-3').removeClass('main-text-decore-old');
			} else if (scroll3 > 1350 && scroll3 < 1400) {
				$('.main-text-3').addClass('main-text-decore-old');
				$('.main-text-3').removeClass('main-text-decore-new');
			} else if (scroll3 < 500) {
				$('.main-text-1').addClass('main-text-decore-new');
				$('.main-text-1').removeClass('main-text-decore-old');
				$('.main-text-2').addClass('main-text-decore-old');
				$('.main-text-2').removeClass('main-text-decore-new');
			} else if (scroll3 > 1400) {
				$('.main-text-1').addClass('main-text-decore-old');
				$('.main-text-1').removeClass('main-text-decore-new');
				$('.main-text-2').addClass('main-text-decore-old');
				$('.main-text-2').removeClass('main-text-decore-new');
				$('.main-text-3').addClass('main-text-decore-old');
				$('.main-text-3').removeClass('main-text-decore-new');
			}
		});
	});


	$(window).scroll(function() {
		$('.gif-title').each(function(){

			var scroll4 = $(window).scrollTop();

			if (scroll4 > 1400 && scroll4 < 2100) {
				$(this).addClass('gif-title-opacity-1');
				$(this).removeClass('gif-title-opacity-0');
			} else {
				$(this).addClass('gif-title-opacity-0');
				$(this).removeClass('gif-title-opacity-1');
			}
		});
	});




//--------------------------------МЕНЮ---------------------------------

	$('.button-menu').on('click', function() {
		// $('.menu').toggleClass('menu-display-none menu-display-block');
		$('.about').toggleClass('about-trl-close about-trl-open');
		$('.episodes').toggleClass('episodes-trl-close episodes-trl-open');
		$('.creating').toggleClass('creating-trl-close creating-trl-open');
		$('.cast').toggleClass('cast-trl-close cast-trl-open');
		$('.back').toggleClass('close');
		$('.menu').toggleClass('menu-pos-close menu-pos-open')
	});



//--------------------------------КАРТИНКИ С ЦИФРАМИ-----------------------------------
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



//-------------------------------------ABOUT--------------------------------------------------

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
			// else if (top_of_window < scrollPrev && bottom_of_windovs + 600 > pos_object_bottom) {
			//  $(this).toggleClass('text-scroll-down text-scroll');
			// 	$('.main-t-s').addClass('text-scroll333');
			// 	$('.main-t-s').removeClass('text-scroll-down1');
			// }
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


//---------------------------------------КАСТ-------------------------------------------


	$('.button-right-cast').on('click', function(){

		var PosWithPX1 = $('.cast-menu-1').css('left');
		dlinaPosWithPX1 = - PosWithPX1.length;
		Pos1 = parseInt(PosWithPX1.slice(dlinaPosWithPX1, -2));
		if (Pos1 < -1050) {
			$('.cast-menu-1').css("opacity", "0");
			$('.cast-menu-1').css("left", "+=2800");
		} else {
			$('.cast-menu-1').css("opacity", "1");
			$('.cast-menu-1').css("left", "-=350");
		}

		var PosWithPX2 = $('.cast-menu-2').css('left');
		dlinaPosWithPX2 = - PosWithPX2.length;
		Pos2 = parseInt(PosWithPX2.slice(dlinaPosWithPX2, -2));
		if (Pos2 < -1050) {
			$('.cast-menu-2').css("opacity", "0");
			$('.cast-menu-2').css("left", "+=2800");
		} else {
			$('.cast-menu-2').css("opacity", "1");
			$('.cast-menu-2').css("left", "-=350");
		}

		var PosWithPX3 = $('.cast-menu-3').css('left');
		dlinaPosWithPX3 = - PosWithPX3.length;
		Pos3 = parseInt(PosWithPX3.slice(dlinaPosWithPX3, -2));
		if (Pos3 < -1050) {
			$('.cast-menu-3').css("opacity", "0");
			$('.cast-menu-3').css("left", "+=2800");
		} else {
			$('.cast-menu-3').css("opacity", "1");
			$('.cast-menu-3').css("left", "-=350");
		}

	});


	$('.button-left-cast').on('click', function(){
		
		var PosWithPX1 = $('.cast-menu-1').css('left');
		dlinaPosWithPX1 = - PosWithPX1.length;
		Pos1 = parseInt(PosWithPX1.slice(dlinaPosWithPX1, -2));
		if (Pos1 > 1050) {
			$('.cast-menu-1').css("opacity", "0");
			$('.cast-menu-1').css("left", "-=2800");
		} else {
			$('.cast-menu-1').css("opacity", "1");
			$('.cast-menu-1').css("left", "+=350");
		}

		var PosWithPX2 = $('.cast-menu-2').css('left');
		dlinaPosWithPX2 = - PosWithPX2.length;
		Pos2 = parseInt(PosWithPX2.slice(dlinaPosWithPX2, -2));
		if (Pos2 > 1050) {
			$('.cast-menu-2').css("opacity", "0");
			$('.cast-menu-2').css("left", "-=2800");
		} else {
			$('.cast-menu-2').css("opacity", "1");
			$('.cast-menu-2').css("left", "+=350");
		}

		var PosWithPX3 = $('.cast-menu-3').css('left');
		dlinaPosWithPX3 = - PosWithPX3.length;
		Pos3 = parseInt(PosWithPX3.slice(dlinaPosWithPX3, -2));
		if (Pos3 > 1050) {
			$('.cast-menu-3').css("opacity", "0");
			$('.cast-menu-3').css("left", "-=2800");
		} else {
			$('.cast-menu-3').css("opacity", "1");
			$('.cast-menu-3').css("left", "+=350");
		}
	});


//------------------------------------СОЗДАНИЕ----------------------------------------

	$(window).scroll(function() {
		$('.text-scroll-2').each(function(){  
			var pos_object = $(this).offset().top; 
			var top_of_window = $(window).scrollTop(); 
			if(top_of_window + 650 > pos_object) {  
				$(this).toggleClass('text-scroll-down-2 text-scroll-2');  
			}
		});
	});


	var scrollPrev3 = 0;
	$(window).scroll(function() {
		$('.t-c').each(function(){  
			var pos_object3 = $(this).offset().top; 
			var scrollPos3 = $(window).scrollTop(); 
			if (scrollPos3 < scrollPrev3 && pos_object3 > scrollPos3 + 700) {
				$('.t-c').addClass('text-scroll-2');
				$('.t-c').removeClass('text-scroll-down-2');
			} else if (pos_object3 < scrollPos3 - 750) {
				$('.t-c').addClass('text-scroll-2');
				$('.t-c').removeClass('text-scroll-down-2');
			}
			scrollPrev3 = scrollPos3;
		});
	});


	var scrollPrev4 = 0;
	$(window).scroll(function(){
		$('.img-c-1').each(function(){
			var pos_object4 = $(this).offset().top; 
			var scrollPos4 = $(window).scrollTop();
			if(scrollPos4 + 600 > pos_object4) {  
				$('.img-c-1').addClass('img-c-1-new'); 
				$('.img-c-1').removeClass('img-c-1-old');
			}
			if (scrollPos4 < scrollPrev4 && pos_object4 > scrollPos4 + 600) {
				$('.img-c-1').addClass('img-c-1-old');
				$('.img-c-1').removeClass('img-c-1-new');
			} else if (pos_object4 < scrollPos4 - 750) {
				$('.img-c-1').addClass('img-c-1-old');
				$('.img-c-1').removeClass('img-c-1-new');
			}
			scrollPrev4 = scrollPos4;
		});
	});


	var scrollPrev5 = 0;
	$(window).scroll(function(){
		$('.img-c-2').each(function(){
			var pos_object5 = $(this).offset().top; 
			var scrollPos5 = $(window).scrollTop();
			if(scrollPos5 + 600 > pos_object5) {  
				$('.img-c-2').addClass('img-c-2-new'); 
				$('.img-c-2').removeClass('img-c-2-old'); 
			}
			if (scrollPos5 < scrollPrev5 && pos_object5 > scrollPos5 + 600) {
				$('.img-c-2').addClass('img-c-2-old');
				$('.img-c-2').removeClass('img-c-2-new');
			} else if (pos_object5 < scrollPos5 - 750) {
				$('.img-c-2').addClass('img-c-2-old');
				$('.img-c-2').removeClass('img-c-2-new');
			}
			scrollPrev5 = scrollPos5;
		});
	});

/*----------------------------------СЕРИИ------------------------------------*/

	$('.container-e-button').on('click', function(){
		$(this).css("left", "5vw");
	});


	$(window).scroll(function(){
		$('.episodes-block').each(function(){
			var pos_object_block_e = $('.episodes-block').offset().top; 
			var scrollPos6 = $(window).scrollTop();
			if (pos_object_block_e <= scrollPos6 && pos_object_block_e + 2400 > scrollPos6) {
				$('.container-e-button').css("position", "fixed");
				$('.container-e-title-text > div').css("position", "fixed");
				$('.container-e-text > div').css("position", "fixed");
			} else {
				$('.container-e-button').css("position", "absolute");
				$('.container-e-title-text > div').css("position", "absolute");
				$('.container-e-text > div').css("position", "absolute");
			}

			if (pos_object_block_e + 300 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-1');
				$('.e-title-animation').addClass('e-title-a-2');

				$('.e-title-text-1').addClass('e-text-title-new');
				$('.e-title-text-1').removeClass('e-text-title-old');
				$('.e-title-text-2').addClass('e-text-title-old');
				$('.e-title-text-2').removeClass('e-text-title-new');

				$(".e-text-1").addClass('e-text-new');
				$(".e-text-1").removeClass('e-text-old');
				$(".e-text-2").removeClass('e-text-new');
				$(".e-text-2").addClass('e-text-old');

				$('.number-episode-1').addClass('number-e-new number-deg-0');
				$('.number-episode-1').removeClass('number-e-old number-deg-45 number-deg-315');

				$('.number-episode-2').addClass('number-e-old number-deg-315');
				$('.number-episode-2').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-3').addClass('number-deg-270');
				$('.number-episode-3').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-4').addClass('number-deg-225');
				$('.number-episode-4').removeClass('number-deg-180 number-deg-270');

				$('.number-episode-5').addClass('number-deg-180');
				$('.number-episode-5').removeClass('number-deg-135 number-deg-225');

				$('.number-episode-6').addClass('number-deg-135');
				$('.number-episode-6').removeClass('number-deg-90 number-deg-180');

				$('.number-episode-7').addClass('number-deg-90');
				$('.number-episode-7').removeClass('number-deg-45 number-deg-135');

				$('.number-episode-8').addClass('number-e-old number-deg-45');
				$('.number-episode-8').removeClass('number-e-new number-deg-90 number-deg-360');

			} else if(pos_object_block_e < scrollPos6 + 300 && pos_object_block_e + 600 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-2');
				$('.e-title-animation').addClass('e-title-a-1');

				$('.e-title-text-1').addClass('e-text-title-old');
				$('.e-title-text-1').removeClass('e-text-title-new');
				$('.e-title-text-2').addClass('e-text-title-new');
				$('.e-title-text-2').removeClass('e-text-title-old');
				$('.e-title-text-3').addClass('e-text-title-old');
				$('.e-title-text-3').removeClass('e-text-title-new');

				$(".e-text-1").addClass('e-text-old');
				$(".e-text-1").removeClass('e-text-new');
				$(".e-text-2").removeClass('e-text-old');
				$(".e-text-2").addClass('e-text-new');
				$(".e-text-3").addClass('e-text-old');
				$(".e-text-3").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-e-old number-deg-45');
				$('.number-episode-1').removeClass('number-e-new number-deg-0 number-deg-90');

				$('.number-episode-2').addClass('number-e-new number-deg-360');
				$('.number-episode-2').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-3').addClass('number-e-old number-deg-315');
				$('.number-episode-3').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-4').addClass('number-deg-270');
				$('.number-episode-4').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-5').addClass('number-deg-225');
				$('.number-episode-5').removeClass('number-deg-180 number-deg-270');

				$('.number-episode-6').addClass('number-deg-180');
				$('.number-episode-6').removeClass('number-deg-135 number-deg-225');

				$('.number-episode-7').addClass('number-deg-135');
				$('.number-episode-7').removeClass('number-deg-90 number-deg-180');

				$('.number-episode-8').addClass('number-deg-90');
				$('.number-episode-8').removeClass('number-deg-135 number-deg-45');

			} else if(pos_object_block_e < scrollPos6 + 600 && pos_object_block_e + 900 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-1');
				$('.e-title-animation').addClass('e-title-a-2');

				$('.e-title-text-2').addClass('e-text-title-old');
				$('.e-title-text-2').removeClass('e-text-title-new');
				$('.e-title-text-3').addClass('e-text-title-new');
				$('.e-title-text-3').removeClass('e-text-title-old');
				$('.e-title-text-4').addClass('e-text-title-old');
				$('.e-title-text-4').removeClass('e-text-title-new');


				$(".e-text-2").addClass('e-text-old');
				$(".e-text-2").removeClass('e-text-new');
				$(".e-text-3").removeClass('e-text-old');
				$(".e-text-3").addClass('e-text-new');
				$(".e-text-4").addClass('e-text-old');
				$(".e-text-4").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-90');
				$('.number-episode-1').removeClass('number-deg-45 number-deg-135');

				$('.number-episode-2').addClass('number-e-old number-deg-405');
				$('.number-episode-2').removeClass('number-e-new number-deg-360 number-deg-450');

				$('.number-episode-3').addClass('number-e-new number-deg-360');
				$('.number-episode-3').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-4').addClass('number-e-old number-deg-315');
				$('.number-episode-4').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-5').addClass('number-deg-270');
				$('.number-episode-5').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-6').addClass('number-deg-225');
				$('.number-episode-6').removeClass('number-deg-180 number-deg-270');

				$('.number-episode-7').addClass('number-deg-180');
				$('.number-episode-7').removeClass('number-deg-135 number-deg-225');

				$('.number-episode-8').addClass('number-deg-135');
				$('.number-episode-8').removeClass('number-deg-90 number-deg-180');

			} else if(pos_object_block_e < scrollPos6 + 900 && pos_object_block_e + 1200 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-2');
				$('.e-title-animation').addClass('e-title-a-1');

				$('.e-title-text-3').addClass('e-text-title-old');
				$('.e-title-text-3').removeClass('e-text-title-new');
				$('.e-title-text-4').addClass('e-text-title-new');
				$('.e-title-text-4').removeClass('e-text-title-old');
				$('.e-title-text-5').addClass('e-text-title-old');
				$('.e-title-text-5').removeClass('e-text-title-new');

				$(".e-text-3").addClass('e-text-old');
				$(".e-text-3").removeClass('e-text-new');
				$(".e-text-4").removeClass('e-text-old');
				$(".e-text-4").addClass('e-text-new');
				$(".e-text-5").addClass('e-text-old');
				$(".e-text-5").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-135');
				$('.number-episode-1').removeClass('number-deg-90 number-deg-180');

				$('.number-episode-2').addClass('number-deg-450');
				$('.number-episode-2').removeClass('number-deg-405 number-deg-495');

				$('.number-episode-3').addClass('number-e-old number-deg-405');
				$('.number-episode-3').removeClass('number-e-new number-deg-360 number-deg-450');

				$('.number-episode-4').addClass('number-e-new number-deg-360');
				$('.number-episode-4').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-5').addClass('number-e-old number-deg-315');
				$('.number-episode-5').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-6').addClass('number-deg-270');
				$('.number-episode-6').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-7').addClass('number-deg-225');
				$('.number-episode-7').removeClass('number-deg-180 number-deg-270');

				$('.number-episode-8').addClass('number-deg-180');
				$('.number-episode-8').removeClass('number-deg-135 number-deg-225');

			} else if(pos_object_block_e < scrollPos6 + 1200 && pos_object_block_e + 1500 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-1');
				$('.e-title-animation').addClass('e-title-a-2');

				$('.e-title-text-4').addClass('e-text-title-old');
				$('.e-title-text-4').removeClass('e-text-title-new');
				$('.e-title-text-5').addClass('e-text-title-new');
				$('.e-title-text-5').removeClass('e-text-title-old');
				$('.e-title-text-6').addClass('e-text-title-old');
				$('.e-title-text-6').removeClass('e-text-title-new');

				$(".e-text-4").addClass('e-text-old');
				$(".e-text-4").removeClass('e-text-new');
				$(".e-text-5").removeClass('e-text-old');
				$(".e-text-5").addClass('e-text-new');
				$(".e-text-6").addClass('e-text-old');
				$(".e-text-6").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-180');
				$('.number-episode-1').removeClass('number-deg-135 number-deg-225');

				$('.number-episode-2').addClass('number-deg-495');
				$('.number-episode-2').removeClass('number-deg-450 number-deg-540');

				$('.number-episode-3').addClass('number-deg-450');
				$('.number-episode-3').removeClass('number-deg-405 number-deg-495');

				$('.number-episode-4').addClass('number-e-old number-deg-405');
				$('.number-episode-4').removeClass('number-e-new number-deg-360 number-deg-450');

				$('.number-episode-5').addClass('number-e-new number-deg-360');
				$('.number-episode-5').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-6').addClass('number-e-old number-deg-315');
				$('.number-episode-6').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-7').addClass('number-deg-270');
				$('.number-episode-7').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-8').addClass('number-deg-225');
				$('.number-episode-8').removeClass('number-deg-180 number-deg-270');

			} else if(pos_object_block_e < scrollPos6 + 1500 && pos_object_block_e + 1800 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-2');
				$('.e-title-animation').addClass('e-title-a-1');

				$('.e-title-text-5').addClass('e-text-title-old');
				$('.e-title-text-5').removeClass('e-text-title-new');
				$('.e-title-text-6').addClass('e-text-title-new');
				$('.e-title-text-6').removeClass('e-text-title-old');
				$('.e-title-text-7').addClass('e-text-title-old');
				$('.e-title-text-7').removeClass('e-text-title-new');

				$(".e-text-5").addClass('e-text-old');
				$(".e-text-5").removeClass('e-text-new');
				$(".e-text-6").removeClass('e-text-old');
				$(".e-text-6").addClass('e-text-new');
				$(".e-text-7").addClass('e-text-old');
				$(".e-text-7").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-225');
				$('.number-episode-1').removeClass('number-deg-180 number-deg-270');

				$('.number-episode-2').addClass('number-deg-540');
				$('.number-episode-2').removeClass('number-deg-495 number-deg-585');

				$('.number-episode-3').addClass('number-deg-495');
				$('.number-episode-3').removeClass('number-deg-450 number-deg-540');

				$('.number-episode-4').addClass('number-deg-450');
				$('.number-episode-4').removeClass('number-deg-405 number-deg-495');

				$('.number-episode-5').addClass('number-e-old number-deg-405');
				$('.number-episode-5').removeClass('number-e-new number-deg-360 number-deg-450');

				$('.number-episode-6').addClass('number-e-new number-deg-360');
				$('.number-episode-6').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-7').addClass('number-e-old number-deg-315');
				$('.number-episode-7').removeClass('number-e-new number-deg-270 number-deg-360');

				$('.number-episode-8').addClass('number-deg-270');
				$('.number-episode-8').removeClass('number-deg-225 number-deg-315');

			} else if(pos_object_block_e < scrollPos6 + 1800 && pos_object_block_e + 2100 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-1');
				$('.e-title-animation').addClass('e-title-a-2');

				$('.e-title-text-6').addClass('e-text-title-old');
				$('.e-title-text-6').removeClass('e-text-title-new');
				$('.e-title-text-7').addClass('e-text-title-new');
				$('.e-title-text-7').removeClass('e-text-title-old');
				$('.e-title-text-8').addClass('e-text-title-old');
				$('.e-title-text-8').removeClass('e-text-title-new');

				$(".e-text-6").addClass('e-text-old');
				$(".e-text-6").removeClass('e-text-new');
				$(".e-text-7").removeClass('e-text-old');
				$(".e-text-7").addClass('e-text-new');
				$(".e-text-8").addClass('e-text-old');
				$(".e-text-8").removeClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-270');
				$('.number-episode-1').removeClass('number-deg-225 number-deg-315');

				$('.number-episode-2').addClass('number-deg-585');
				$('.number-episode-2').removeClass('number-deg-540 number-deg-630');

				$('.number-episode-3').addClass('number-deg-540');
				$('.number-episode-3').removeClass('number-deg-495 number-deg-585');

				$('.number-episode-4').addClass('number-deg-495');
				$('.number-episode-4').removeClass('number-deg-450 number-deg-540');

				$('.number-episode-5').addClass('number-deg-450');
				$('.number-episode-5').removeClass('number-deg-495 number-deg-405');

				$('.number-episode-6').addClass('number-e-old number-deg-405');
				$('.number-episode-6').removeClass('number-e-new number-deg-360 number-deg-450');

				$('.number-episode-7').addClass('number-e-new number-deg-360');
				$('.number-episode-7').removeClass('number-e-old number-deg-315 number-deg-405');

				$('.number-episode-8').addClass('number-e-old number-deg-315');
				$('.number-episode-8').removeClass('number-e-new number-deg-360 number-deg-270');

			} else if(pos_object_block_e < scrollPos6 + 2100 && pos_object_block_e + 2400 > scrollPos6) {

				$('.e-title-animation').removeClass('e-title-a-2');
				$('.e-title-animation').addClass('e-title-a-1');

				$('.e-title-text-7').addClass('e-text-title-old');
				$('.e-title-text-7').removeClass('e-text-title-new');
				$('.e-title-text-8').addClass('e-text-title-new');
				$('.e-title-text-8').removeClass('e-text-title-old');

				$(".e-text-7").addClass('e-text-old');
				$(".e-text-7").removeClass('e-text-new');
				$(".e-text-8").removeClass('e-text-old');
				$(".e-text-8").addClass('e-text-new');

				$('.number-episode-1').addClass('number-deg-315');
				$('.number-episode-1').removeClass('number-deg-270');

				$('.number-episode-2').addClass('number-deg-630');
				$('.number-episode-2').removeClass('number-deg-585');

				$('.number-episode-3').addClass('number-deg-585');
				$('.number-episode-3').removeClass('number-deg-540');

				$('.number-episode-4').addClass('number-deg-540');
				$('.number-episode-4').removeClass('number-deg-495');

				$('.number-episode-5').addClass('number-deg-495');
				$('.number-episode-5').removeClass('number-deg-450');

				$('.number-episode-6').addClass('number-deg-450');
				$('.number-episode-6').removeClass('number-deg-405');

				$('.number-episode-7').addClass('number-e-old number-deg-405');
				$('.number-episode-7').removeClass('number-e-new number-deg-360');

				$('.number-episode-8').addClass('number-e-new number-deg-360');
				$('.number-episode-8').removeClass('number-e-old number-deg-315');

			}
		});
	});


	function randomInteger(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('.button-j-c').on('click', async function(){
		let response = await fetch('https://jsonplaceholder.typicode.com/posts');
		let content = await response.json();
		let key = randomInteger(1, 100);
		document.getElementById("title-j").innerHTML = content[key].title;
      	document.getElementById("content-j").innerHTML = content[key].body;
	});


});

