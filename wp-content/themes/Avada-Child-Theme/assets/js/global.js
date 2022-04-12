/* global twentyseventeenScreenReaderText */
(function( $ ) {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".custom_navbar").addClass("sticky");
		} else {
			$(".custom_navbar").removeClass("sticky");
		}
	});

	

	jQuery(document).ready(function(){
		var urlParams = new URLSearchParams(window.location.search);
		var area_size = urlParams.get('area');
		var zip_code = urlParams.get('zip_code')


		if(area_size){
			jQuery("#area_size").val(area_size);
		}

		if(zip_code){
			jQuery("#postal_code").val(zip_code);
		}



		jQuery(".mobile-toggle").click(function(){
			jQuery("body").toggleClass("openMenu");
		});
		 jQuery(".overLay").click(function(){
			jQuery("#MobileMenu").removeClass("openMenu");
			jQuery("#locations").removeClass("openLocation");
		});
		 jQuery(".has_sub_menu").click(function(){
				jQuery(this).find(".sub-menu").toggle();
		})

		$('.servicesSlider .fusion-column-wrapper.fusion-flex-justify-content-flex-start').slick({
			infinite: false,
			centerMode: true,
			centerPadding: '150px',
			slidesToShow: 1,			
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			responsive: [
				{
				  breakpoint: 1023,
				  settings: {															  
					slidesToShow: 2,
					centerMode: false,
					slidesToScroll: 1,
					adaptiveHeight: true
				  }
				},
				{
					breakpoint: 768,
					settings: {															  
						slidesToShow: 2,
						centerMode: false,
						slidesToScroll: 1,
						adaptiveHeight: true
					}
				},
				{
					breakpoint: 480,
					settings: {															  
						slidesToShow: 1,
						centerMode: false,
						slidesToScroll: 1,
						adaptiveHeight: true
					}
				}
			]	
		});


		






		jQuery(".bttn").removeClass('fusion-button');

		$('.caySlide').slick({
			infinite: false,
			centerMode: true,
			centerPadding: '130px',
			slidesToShow: 3,			
			slidesToScroll: 1,
			adaptiveHeight: true,
			variableWidth: true,
			arrows: false,
			asNavFor: '.serCatgories .fusion-column-wrapper',
			focusOnSelect: true			
		});
		$('.serCatgories .fusion-column-wrapper').slick({
			infinite: false,

			slidesToShow: 1,			
			slidesToScroll: 1,
			adaptiveHeight: true,			
			arrows: false,	
			asNavFor: '.caySlide'		
		});






		var hash_val = window.location.hash.substr(1);
		console.log(hash_val);

		if(hash_val !="" && hash_val !="undefined"){

			if(jQuery(window).width() <1023){

				if(jQuery("#allServicesMob").length > 0) {
					
					jQuery('html, body').animate({
		        		scrollTop: jQuery("#allServicesMob").offset().top-50
			    	}, 2000);
					jQuery("#"+hash_val).trigger('click');

				}

			} else {

				if(jQuery("#allServices").length > 0){

					jQuery('html, body').animate({
			        	scrollTop: jQuery("#allServices").offset().top-50
			    	}, 2000);

					
					jQuery("#"+hash_val).trigger('click');

					console.log("triggered");
					

				}

				
				
			}

		}


	});



	

})( jQuery ); 


  		