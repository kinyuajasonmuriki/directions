(function ($) {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

	// local scroll
	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});


	// portfolio
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope

        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }



        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });


        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });


}


	// fancybox
	jQuery(".fancybox").fancybox();


	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");

	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});
	}



	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
		});


		//parallax
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }


        if (isMobile == false && ($('#parallax1').length  ||isMobile == false &&  $('#parallax2').length ||isMobile == false &&  $('#testimonials').length))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }
	var map;

				map = new GMaps({
		      el: '#map',
		      lat: -0.3977666597114628,
		      lng: 36.960976123700675,
		      zoom: 16,
		      zoomControl : true,
		      zoomControlOpt: {
		          style : 'SMALL',
		          position: 'TOP_RIGHT'
		      },
		      panControl : true,
		      streetViewControl : true,
		      mapTypeControl: true,
		      overviewMapControl: false
		    });

				map.addMarker({
	      lat: -0.3977666597114628,
	      lng: 36.960976123700675,
	      title: 'DeKUT Resource Center',
	      infoWindow: {
	        content: '<p>Dekut Resource Center.....</br><kbd>Future of Kimathi Society.</kbd></p>'
	      }
	    });

			var dekut_poi = [[-0.3921723963033617, 36.95940971199889],[-0.39778289287300267, 36.9572317602433],[-0.3977399785629043, 36.96011781681591],[-0.39884502197666694, 36.96136236179882],[-0.39894157916111894, 36.9628000258308],[-0.399306350736588, 36.96203827847057],[-0.3942317316504997, 36.96313261974865]];
			$.each(dekut_poi, function(key, value){
				map.addMarker({
	      lat: value[0],
	      lng: value[1],
	      title: 'DeKUT Point Of Interest',
	      infoWindow: {
	        content: '<p><kbd>'+(key+1)+' &rarr; </kbd> Point of Interest.</p>'
	      }
	    });
			});

			map.addControl({
      position: 'top_right',
      content: 'Geolocate',
      style: {
        margin: '5px',
        padding: '1px 6px',
        border: 'solid 1px #717B87',
        background: '#fff'
      },
      events: {
        click: function(){
          GMaps.geolocate({
            success: function(position){
              map.setCenter(position.coords.latitude, position.coords.longitude);
              map.addMarker({
                lat: position.coords.latitude,
                lng:  position.coords.longitude,
                title: 'Current Location',
								infoWindow: {
								 content: "<kbd>Our system determined that you are currently here</kbd></p>"
							 }
                });
            },
            error: function(error){
              bootbox.alert('Geolocation failed: ' + error.message);
            },
            not_supported: function(){
              bootbox.alert("Your browser does not support geolocation");
            }
          });
        }
      }
    });




})(jQuery);
