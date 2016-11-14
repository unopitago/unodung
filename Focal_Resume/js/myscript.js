/*
    * Top Slider
    * Sticky Nav 
    * Detail skills
    * Testimonatials Slider
    * Portfolio Isotope
*/


/*
|--------------------------------------------------------------------------
| Top Slider
|--------------------------------------------------------------------------
|
|
|
*/

$(document).ready(function(){
	$('.wrap-top-slider').ready(function() {

		var $item = $('.carousel .item'); 
		var $img = $('.carousel img');
		var $wHeight = $(window).height();

		$item.eq(0).addClass('active');
		$item.height($wHeight); 
		$img.height($wHeight);
		$item.addClass('full-screen');

		$('.carousel img').each(function() {
			var $src = $(this).attr('src');
			$(this).parent().css({
				'background-image' : 'url(' + $src + ')',
			});
			$(this).remove();
		});

		$(window).on('resize', function (){
			$wHeight = $(window).height();
			$item.height($wHeight);
		});

		$('.carousel').carousel({
			interval: 5000,
			pause: "false"
		});
	});
});




/*
|--------------------------------------------------------------------------
| Sticky Nav 
|--------------------------------------------------------------------------
|
|
|
*/

$(document).on('scroll', function () {
	var height = $('.wrap-top-slider').height();
	if ($(this).scrollTop() > height) {
		$('.wrap-main-nav').addClass('sticky');
	} else {
		$('.wrap-main-nav').removeClass('sticky');
	}
});



/*
|--------------------------------------------------------------------------
| Detail skill
|--------------------------------------------------------------------------
|
|
|
*/



// $(document).ready(function() {
// 	var timing = 3000;
// 	$('#photoshop').animate({width: '90%'}, timing);
// });

$(document).ready(function move() {
	$("#label").ready(function() {		

		var elem0 = document.getElementsByClassName("label")[0].parentNode;
		console.log(elem0.getAttribute("skill-percentage"));
		var elem1 = document.getElementsByClassName("label")[1].parentNode;
		console.log(elem1.getAttribute("skill-percentage"));
		var elem2 = document.getElementsByClassName("label")[2].parentNode;
		console.log(elem2.getAttribute("skill-percentage"));
		var elem3 = document.getElementsByClassName("label")[3].parentNode;
		console.log(elem3.getAttribute("skill-percentage"));

		var width = 0;
		var id = setInterval(frame, 30);
		

		
		function frame() {
			if (width >= 90) {
				clearInterval(id);
			} else {
				width++; 
				elem0.style.width = width + '%'; 
				elem1.style.width = width + '%'; 
				elem2.style.width = width + '%'; 
				elem3.style.width = width + '%'; 
				document.getElementsByClassName("label")[0].innerHTML = width * 1  + '%';
				document.getElementsByClassName("label")[1].innerHTML = width * 1  + '%';
				document.getElementsByClassName("label")[2].innerHTML = width * 1  + '%';
				document.getElementsByClassName("label")[3].innerHTML = width * 1  + '%';
			}
		}
	});
});

// $(document).ready(function move() {
// 	$("#label").each(function() {		

// 		var $percent = $(this).parent().attr('skill-percentage');
// 		var width = 0;
// 		var id = setInterval(frame, 200);


// 		function frame() {
// 			if (width >= $percent) {
// 			clearInterval(id);
// 		} else {
// 			width++; 
// 			$(this).css({"width" : "width + '%'"}); 
// 			$(this).html("width * 1 + '%'");
// 			}
// 		}
// 	});
// });




/*
|--------------------------------------------------------------------------
| Testimonatials Slider
|--------------------------------------------------------------------------
|
|
|
*/






$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1

  });
 
});









/*
|--------------------------------------------------------------------------
| Portfolio Isotope
|--------------------------------------------------------------------------
|
|
|
*/

// external js: isotope.pkgd.js

$('.content-portfolio').ready(function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	    itemSelector: '.element-item',
	    layoutMode: 'fitRows',
	    getSortData: {
	    name: '.name',
	    symbol: '.symbol',
	    number: '.number parseInt',
	    category: '[data-category]',
	    weight: function( itemElem ) {
	    var weight = $( itemElem ).find('.weight').text();
	    	return parseFloat( weight.replace( /[\(\)]/g, '') );
	    }
	  }
	});

	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};

	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});

	// bind sort button click
	$('#sorts').on( 'click', 'button', function() {
	  var sortByValue = $(this).attr('data-sort-by');
	  $grid.isotope({ sortBy: sortByValue });
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
});

  
















