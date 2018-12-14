/*
Template Name: Happy Paws
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/

//Strict Mode 
(function($) {
    "use strict";
		
    //Document ready function
    $(document).ready(function() {	
	
	   //Open street  Map
		var coord = [40.738270, -74.008911]; // <--- coordinates here

		var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: ''
		}).addTo(map);

		var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		iconSize:     [64, 64], // size of the icon
		iconAnchor:   [32, 63] // point of the icon which will correspond to marker's location
		});

		var marker = L.marker(coord, {icon: customIcon}).addTo(map);
			
		
		//Load WOW Animations

        new WOW().init();		      
		
		//Slide In Panel
	
		//open the lateral panel
		$('.toggle-btn a').on('click', function (event) {
		var href = $(this).attr('href');
		event.preventDefault();
		$(href).addClass('is-visible');
		});
		//close the lateral panel
		$('.cd-panel').on('click', function (event) {
		if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-close')) {
		$('.cd-panel').removeClass('is-visible');
		event.preventDefault();
		}
		});

        //Load pretty photo

		$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
		({
			animation_speed: 'normal', /* fast/slow/normal */
			opacity: 1, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		});
	     
			
        //Navbar collapse close on click

        $('.navbar li').on('click', function() {
            if ($('.navbar-toggle').css('display') != 'none') {
                $(".navbar-toggle").trigger("click");
            }
        });

        //Scrolling feature 
		
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
		
		//	Back Top Link

		var offset = 5200;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});
		
		
		//Owl sliders

		$("#owl-testimonials").owlCarousel({   
			items: 1,
			dots:true,
			loop:true,
			autoplaySpeed:1000,
			autoplayHoverPause: true,
			autoplay:true,
		});
		  
		$("#owl-offers").owlCarousel({
			items: 1,
			dots:true,
			loop:true,
			autoplaySpeed:1000,
			autoplayHoverPause: true,
			autoplay:true
        });
		
		$("#owl-adopt").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			dots:true,
			loop:false,
			autoplay:false,
			navRewind:true,
			responsiveClass:true,
			responsive:{
					0:{
					items:1,
					},
					600:{
						items:1,
					},
					991:{
						items:2,
					},
					1200:{
						items:3,
					}
					}
        });
		
		// Parallax Slider
	
		  var $slider = $(".slider"),
			  $slideBGs = $(".slide__bg"),
			  diff = 0,
			  curSlide = 0,
			  numOfSlides = $(".slide").length-1,
			  animating = false,
			  animTime = 500,
			  autoSlideTimeout,
			  autoSlideDelay = 6000,
			  $pagination = $(".slider-pagi");
		  
		  function createBullets() {
			for (var i = 0; i < numOfSlides+1; i++) {
			  var $li = $("<li class='slider-pagi__elem'></li>");
			  $li.addClass("slider-pagi__elem-"+i).data("page", i);
			  if (!i) $li.addClass("active");
			  $pagination.append($li);
			}
		  };
		  
		  createBullets();
		  
		  function manageControls() {
			$(".slider-control").removeClass("inactive");
			if (!curSlide) $(".slider-control.left").addClass("inactive");
			if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
		  };
		  
		  function autoSlide() {
			autoSlideTimeout = setTimeout(function() {
			  curSlide++;
			  if (curSlide > numOfSlides) curSlide = 0;
			  changeSlides();
			}, autoSlideDelay);
		  };
		  
		  autoSlide();
		  
		  function changeSlides(instant) {
			if (!instant) {
			  animating = true;
			  manageControls();
			  $slider.addClass("animating");
			  $slider.css("top");
			  $(".slide").removeClass("active");
			  $(".slide-"+curSlide).addClass("active");
			  setTimeout(function() {
				$slider.removeClass("animating");
				animating = false;
			  }, animTime);
			}
			window.clearTimeout(autoSlideTimeout);
			$(".slider-pagi__elem").removeClass("active");
			$(".slider-pagi__elem-"+curSlide).addClass("active");
			$slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
			$slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
			diff = 0;
			autoSlide();
		  }

		  function navigateLeft() {
			if (animating) return;
			if (curSlide > 0) curSlide--;
			changeSlides();
		  }

		  function navigateRight() {
			if (animating) return;
			if (curSlide < numOfSlides) curSlide++;
			changeSlides();
		  }

		  $(document).on("mousedown touchstart", ".slider", function(e) {
			if (animating) return;
			window.clearTimeout(autoSlideTimeout);
			var startX = e.pageX || e.originalEvent.touches[0].pageX,
				winW = $(window).width();
			diff = 0;
			
			$(document).on("mousemove touchmove", function(e) {
			  var x = e.pageX || e.originalEvent.touches[0].pageX;
			  diff = (startX - x) / winW * 70;
			  if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
			  $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
			  $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
			});
		  });
		  
		  $(document).on("mouseup touchend", function(e) {
			$(document).off("mousemove touchmove");
			if (animating) return;
			if (!diff) {
			  changeSlides(true);
			  return;
			}
			if (diff > -8 && diff < 8) {
			  changeSlides();
			  return;
			}
			if (diff <= -8) {
			  navigateLeft();
			}
			if (diff >= 8) {
			  navigateRight();
			}
		  });
		  
		  $(document).on("click", ".slider-control", function() {
			if ($(this).hasClass("left")) {
			  navigateLeft();
			} else {
			  navigateRight();
			}
		  });
		  
		  $(document).on("click", ".slider-pagi__elem", function() {
			curSlide = $(this).data("page");
			changeSlides();
		  });
		
		//Plugins
		
		/**
		 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
		 *
		 * Uses the built in easing capabilities added In jQuery 1.1
		 * to offer multiple easing options
		 *
		 * TERMS OF USE - EASING EQUATIONS
		 * 
		 * Open source under the BSD License. 
		 * 
		 * Copyright Â© 2001 Robert Penner
		 * All rights reserved.
		 *
		 * TERMS OF USE - jQuery Easing
		 * 
		 * Open source under the BSD License. 
		 * 
		 * Copyright Â© 2008 George McGinley Smith
		 * All rights reserved.
		 *
		**/
		jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});	  	
		
		 /**
		 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
		 * Dual licensed under MIT and GPL.
		 * @author Ariel Flesler
		 * @version 1.4.3
		 */
		;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
        		
    });
		
	
    //Window scroll function
    $(window).scroll(function() {
		
        //Collapse the top bar color on scroll
        if ($(".navbar").offset().top > 50) {
           	$('.top-bar').slideUp(300);
        } else {
         $('.top-bar').slideDown(300);
        }
    
	});
	
	//Window load function
    $(window).load(function() {
		
		//Preloader		
		$("#preloader").fadeOut("slow");
		$("#spinner").fadeOut("slow");	
		

	//Portfolio Isotope Filter
	
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

})(jQuery);

 