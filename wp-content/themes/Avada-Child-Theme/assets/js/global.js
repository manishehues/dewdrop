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

		$("#recentPost .fusion-posts-container").addClass("blogSlider");


		$('.blogSlider').slick({
			infinite: false,			
			slidesToShow: 1,			
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			dots:true,
			autoplay:true	
		});
	});

})( jQuery ); 


  		