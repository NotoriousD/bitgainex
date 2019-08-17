$(function() {

	$('.toggle-mnu').click(function(){
		$(this).toggleClass('is-active');
		$('.tp-line').toggleClass('active');
	});

	var width = $(window).width();

	$(window).scroll(function(){
		if( width => '1200'){
			if($(this).scrollTop()>30){
				$('.top__line').addClass('top__line-active');
			}else{
				$('.top__line').removeClass('top__line-active');
			}
		}
		
	});


	var slider = $('#slider').lightSlider({
		item: 2,
		controls: false,
		pager: false ,
		enableDrag: false,
		verticalHeight: 600,
		slideMargin: 25,
		responsive : [
            {
                breakpoint:1050,
                settings: {
                    item:1
                  }
			},
		]
	});

	$('.sl-prev').click(function(e){
		e.preventDefault();
		slider.goToPrevSlide();
	});

	$('.sl-next').click(function(e){
		e.preventDefault();
		slider.goToNextSlide();
	});


	
    

});



