$(function(){

	//webフォント読み込みのブレをなくす為の記述
	$('html').addClass('wf-active');

	const window_width = $(window).width();                  //画面の横幅
	const place_max = $('.nav a').length;                    //詳細ページの総数
	const place_id = location.search.replace('?id=', '');    //URLのページid
	const change_time = 1500;                                //PCTOPページの画像が明るくなる秒数

	let thumbnail_postion = 0;                               //スマホTOPのスライド位置
	let thumbnail_count = 1;                                 //スマホTOPのスライド番目
	
	//スマホTOPページのスライド関数
	function mySlide(type) {

		if(type === 'prev'){
			thumbnail_postion -= window_width;
			thumbnail_count--;

			if(thumbnail_count === 1){
				$('[data-slide="prev"]').fadeOut();
			}
		}

		if(type === 'next'){
			thumbnail_postion += window_width;
			thumbnail_count++;

			if(thumbnail_count <= place_max){
				$('[data-slide="prev"]').fadeIn();
			}else{
				thumbnail_postion = 0;
				thumbnail_count = 1;
				$('[data-slide="prev"]').fadeOut();
			}
		}

		$('.main').animate({
			scrollLeft:thumbnail_postion
		});

		$('.nav a').removeClass('is-active');
		$('.nav a').eq(thumbnail_count-1).addClass('is-active');
	}

	//スマホ時のみ適応
	if(window_width <= 768){
		$('[data-slide]').on('click',function(){
			let slide_type = $(this).attr('data-slide');
		  mySlide(slide_type);
		});
	}else{
		if($('body').attr('id') === 'page-index'){
			setInterval(function(){
				const random = Math.floor( Math.random() * place_max );
				$('.thumbnail li').removeClass('is-active');
				$('.thumbnail li').eq(random).addClass('is-active');
			},change_time);
		}
	}

	//下層ページのみ適応
	if($('body').attr('id') === 'page-place'){
		$('.place-img img').attr('src', 'place_img/place/' + place_id +'.jpg');
		$('[data-place]').each(function(index, el) {
			let place_key = $(this).attr('data-place');
			
			if($(this)[0].tagName == 'A'){
				//tagnameはaタグなどのタグ名を取得する
				$(this).attr('href', place[place_id - 1][place_key]);
			}else{
				$(this).text(place[place_id - 1][place_key]);
			}				
		});
		setTimeout(function(){
			$('.loader-wrap').remove();
		},1000)
	}
	
});