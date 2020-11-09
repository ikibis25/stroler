/*
Copyright (c) 2016 Stroller
------------------------------------------------------------------
[Master Javascript]

Project:	Stroller

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Stroller = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Stroller Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.navToggle();
			
			this.Main_slider();
			this.mostView_slider();
			this.client_slider();
			this.featured_product_filter();
			this.range_slider();
			this.Map_function();
			this.shop_slider();
			this.testimonial_slider();
			this.mail_function();
			this.shop_popup();
			this.login_popup();
			this.register_popup();
			
		},
		
		/*-------------- Stroller Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		navToggle: function () {
			$('.nav_toggle').on('click', function(){
				$('body').toggleClass('nav_open');
			});

			//dropdown
			$('.st_dropdown_link').append('<span class="dd_cart"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');

			$('.dd_cart').on('click', function(){
				$(this).prev('.st_dropdown').slideToggle(200);
			});

		},
		fixedNav: function () {
			$(window).scroll(function(){
				var window_top = $(window).scrollTop() + 1; 
				if (window_top > 50) {
					$('body').addClass('fixed_menu');
				} else {
					$('body').removeClass('fixed_menu');
				}
			});
		},
		Main_slider: function () {
			$('.st_index_slider').slick({
				dots: true
			});
		},
		mostView_slider: function () {
			$('.st_mostView_slider').slick({
				slidesToShow: 4,
				prevArrow: '<div class="stmv_arrow prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" fill="#6c6c6c"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
				nextArrow: '<div class="stmv_arrow next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#6c6c6c"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
				responsive: [
					{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
					},
					{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
					},
					{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
					}
				]
			});
		},
		client_slider: function () {
			$('.st_client_slider').slick({
				slidesToShow: 5,
				prevArrow: '<div class="stmv_arrow prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" fill="#6c6c6c"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
				nextArrow: '<div class="stmv_arrow next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#6c6c6c"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>',
				responsive: [
					{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
					},
					{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
					},
					{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
					}
				]
			});
		},
		featured_product_filter: function(){
			var $grid = $('.st_fp_grid').isotope({
				itemSelector: '.element-item',
				layoutMode: 'fitRows'
			});
			// filter items on button click
			$('.st_fp_filter_nav ul li').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
			$('.st_fp_filter_nav > ul > li > a').on('click', function(){
				$('.st_fp_filter_nav > ul > li > a').removeClass('active');
				$(this).addClass('active');
			});
		},
		range_slider: function(){
			$( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 500,
               values: [ 35, 200 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
		},
		Map_function: function () {
		   if($(".st_map").length){
			  $( ".st_map" ).each(function( index ) {
			  var id = $(this).attr("id");
			  var address = $(this).attr("data-address");
			  $(this).googleMap({
			   scrollwheel:true
			  });
			  $(this).addMarker({
				//coords: [22.9622672, 76.05079490000003] // for using lat long for marker
				address:address
			  });
			}); 
		   }
		  },
		  shop_slider: function(){
		  	 $('.shop_slider .owl-carousel').owlCarousel({
				    // Enable thumbnails
				    items:1,
				    thumbs: true,
				  
				    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
				    thumbImage: false,

				    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
				    thumbsPrerendered: true,
				    
				    // Class that will be used on the thumbnail container
				    thumbContainerClass: 'owl-thumbs',
				    
				    // Class that will be used on the thumbnail item's
				    thumbItemClass: 'owl-thumb-item'
				  });
		  },
		  testimonial_slider: function(){
	  		$('.testimonial_slider .owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    autoplay:true,
			    autoplayTimeout:3000,
			    autoplayHoverPause:true,
			    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			})
		  },
		  mail_function: function(){
				$("#submit").click(function(){
					var fname = $('#name').val();
					var phone = $('#phone').val();
					var email = $('#email').val();
					var message = $('#message').val();
					var letters = /^[A-Za-z]+$/;
					var number = /^[0-9]+$/;
					var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					
					if (fname != "" && phone != "" && email != "" && message != "") {
						if(fname.match(letters)) { 
							if(phone.match(number) && phone.length <= 10) {
								if(email.match(mail_letters)){
									$.ajax({
									method : 'post',
									url : 'ajax_mail.php',
									data :  {'first_name' : fname ,
											  'phone_number' : phone,
											  'email' : email,
											  'message' : message,
											  },
								   }).done(function(resp){ 
								   		console.log(resp);
									   if( resp == 1){
											document.getElementById("error").style.color = "green";
										   document.getElementById("error").innerHTML = "Mail Send Successfully";
											$('#name').val('');
										   $('#phone').val('');
										   $('#email').val('');
										   $('#message').val('');
									   }else{
											document.getElementById("error").style.color = "red";
										    document.getElementById("error").innerHTML = "Mail not Send";
									   }});
								}else{
									document.getElementById("error").style.color = "red";
									document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
								}
							}else{
								document.getElementById("error").style.color = "red";
								document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
							}
						}else
						{	document.getElementById("error").style.color = "red";
							document.getElementById("error").innerHTML = "Please Fill The Correct Name";
						}   
					}else{
						document.getElementById("error").style.color = "red";
						document.getElementById("error").innerHTML = "Please Fill All Detail";
					}
				});
			},
			shop_popup: function(){
				$('.shop_popup').magnificPopup({
				  type: 'image',
				  zoom: {
				    enabled: true, // By default it's false, so don't forget to enable it

				    duration: 300, // duration of the effect, in milliseconds
				    easing: 'ease-in-out', // CSS transition easing function

				    // The "opener" function should return the element from which popup will be zoomed in
				    // and to which popup will be scaled down
				    // By defailt it looks for an image tag:
				    opener: function(openerElement) {
				      // openerElement is the element on which popup was initialized, in this case its <a> tag
				      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
				      return openerElement.is('a') ? openerElement : openerElement.find('a');
				    }
				}

				});
			},
			login_popup: function(){
				$('.login').magnificPopup({
					  items: {
					      src: '<div class="white-popup"><div class="login_wrapper"><div class="login_detail"><div class="login_logo"><img src="assets/images/Logo.png" alt=""></div><div class="login_form"><div class="form-group"><input type="text" name="uname" value="" class="form-control" placeholder=Username></div><div class="form-group"><input type="password" name="pass" value="" class="form-control" placeholder="Password"></div><div class="form-group"><input type="checkbox" name="check" value="Remember Me" id="remember_me"><label for="remember_me">Remember Me</label></div><a href="#" class="st_btn">log in</a><p>create a new account ? <a href="index.html">Register Here</a></p></div></div></div></div>',
					      type: 'inline'
					  },
					  removalDelay: 300,
					  mainClass: 'mfp-fade'
					});
			},
			register_popup: function(){
				$('.register').magnificPopup({
					  items: {
					      src: '<div class="white-popup register"><div class="register_wrapper"><div class="login_detail"><div class="login_logo"><img src="assets/images/Logo.png" alt=""></div><div class="login_form"><div class="form-group"><input type="text" name="fname" value="" class="form-control" placeholder="First Name"></div><div class="form-group"><input type="text" name="lname" value="" class="form-control" placeholder="Last Name"></div><div class="form-group"><input type="text" name="email" value="" class="form-control" placeholder="Your Email"></div><div class="form-group"><input type="password" name="pass" value="" class="form-control" placeholder="Password"></div><a href="#" class="st_btn">register</a><p>already registered ? <a href=".register">Login</a></p></div></div></div></div>',
					      type: 'inline'
					  },
					  removalDelay: 300,
					  mainClass: 'mfp-fade'
					});
			}

		
		
		
	};

	

	// Load Event
	$(window).on('load', function() {
		/* Trigger side menu scrollbar */
		//Stroller.menuScrollbar();

		$(".st_loading_wrapper").delay(350).fadeOut(300);

	});

	// Scroll Event
	$(window).on('scroll', function () {
		Stroller.fixedNav();
	});
	
	// ready function
	$(document).ready(function() {
		Stroller.init();
	});
	

})(jQuery);