/*
    * Sticky Nav 
    * Owl Slider 
    * MAP Section
    * Theme Slider
    * Theme Variables
    * external js: isotope.pkgd.js
    * Smooth Scroll 
    * Slider
    * Scroll Top
    * Skill Bars 
/*
|--------------------------------------------------------------------------
| Sticky Nav 
|--------------------------------------------------------------------------
|
|
|
*/
$(document).on('scroll', function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass('sticky');
		$('#logo').addClass('none');
		$('#logo-black').removeClass('none');
	} else {
		$('header').removeClass('sticky');
        $('#logo').removeClass('none');
		$('#logo-black').addClass('none');
	}
});
/*
|--------------------------------------------------------------------------
| Owl Slider 
|--------------------------------------------------------------------------
|
|
|
*/
$(function () {

	$("#owl-demo").owlCarousel({
		autoPlay: 2000, //Set AutoPlay to 3 seconds
		items: 5
		, itemsDesktop: [1199, 3]
		, itemsDesktopSmall: [979, 3]



	});

});
/*
|--------------------------------------------------------------------------
| MAP Section
|--------------------------------------------------------------------------
|
|
|
*/
function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.2)
		, zoom: 10
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}
/*
|--------------------------------------------------------------------------
| Testimonial Slider 
|--------------------------------------------------------------------------
|
|
|
*/
jQuery(function ($) {
	var slider = $('.mis-stage').miSlider({
		stageHeight: 380
		, slidesOnStage: false
		, slidePosition: 'center'
		, slideStart: 'mid'
		, slideScaling: 150
		, offsetV: -5
		, centerV: true
		, navButtonsOpacity: 1
	, });
});


jQuery(function ($) {
	var slider = $('.mis-stage').miSlider({
		// The speed of the slide transition in milliseconds. Options: positive integer.
		speed: 700, // slide pause time between transitions in milliseconds.
		// Options: false, positive integer. false = Autoplay off.
		pause: 4000, // The number of slides to increment with Autoplay and Nav Buttons.
		// Options: positive or negative integer. Positive integer = Slide left.
		// Negative integer = Slide right.
		increment: 1, // The height of the stage in px. Options: false or positive integer.
		// false = height is calculated using maximum slide heights.
		stageHeight: false, // Number of slides visible at one time. Options: false or positive integer.
		// false = Fit as many as possible.
		slidesOnStage: 1, // Continuous motion - Boolean. true = slides loop in one direction if possible.
		slidesContinuous: true, // The location of the current slide on the stage. Options: "left", "right", "center".
		slidePosition: "left", // The slide to start on. Options: "beg", "mid", "end"
		// or slide number starting at 1 - "1","2","3", etc.
		slideStart: "beg", // The width of the current slide in px. Options: false or positive integer.
		// false = width is the maximum of the existing slide widths.
		slideWidth: false, // The relative percentage scaling factor of the current slide
		// other slides are scaled down. Options: positive number 100 or higher. 100 = No scaling.
		slideScaling: 100, // The vertical offset of the slide center as a percentage of slide height.
		// Options:  positive or negative number. Neg value = up. Pos value = down. 0 = No offset.
		offsetV: 0, // Center slide contents vertically - Boolean.
		centerV: false, // Enable numbered list navigation - Boolean.
		navList: true, // Enable prev and next button navigation - Boolean.
		navButtons: true, // Always show prev and next button navigation except when transitioning - Boolean.
		navButtonsShow: false, // Opacity of the prev and next button navigation when not transitioning.
		// Options: Number between 0 and 1. 0 (transparent) - 1 (opaque).
		navButtonsOpacity: 0.5, // Randomize the order of the slides - Boolean.
		randomize: false, // The slides loaded call back function - called when slides have loaded.
		slidesLoaded: false, // The slide transition before call back function - called before the slide transition.
		beforeTrans: false, // The slide transition complete call back function
		// called at the end of a slide transition.
		afterTrans: false, // The CSS class that will be applied to the stage element.
		classStage: "mis-stage", // The CSS class that will be applied to the slider element.
		classSlider: "mis-slider", // The CSS class that will be applied to each slide element.
		classSlide: "mis-slide", // The CSS class that will be applied to the parent of the
		// prev and next button navigation elements.
		classNavButtons: "mis-nav-buttons", // The CSS class that will be applied to the parent of the
		// numbered list navigation elements
		classNavList: "mis-nav-list", // The selector used to select the slider element - Descendant of the stage
		selectorSlider: "ol", // The selector used to select each slide element - Descendant of the slider
		selectorSlide: "li"
	});
});
/*
|--------------------------------------------------------------------------
| Theme Variables
|--------------------------------------------------------------------------
|
|
|
*/


$(function ($) {


	/*
	|--------------------------------------------------------------------------
	| Global myTheme Obj / Variable Declaration
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

	var myTheme = window.myTheme || {}
		, $win = $(window);



	/*
	|--------------------------------------------------------------------------
	| isotope
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

	myTheme.Isotope = function () {

		// 4 column layout
		var isotopeContainer = $('.isotopeContainer');
		if (!isotopeContainer.length || !jQuery().isotope) return;
		$win.on('load',function () {
			isotopeContainer.isotope({
				itemSelector: '.isotopeSelector'
			});
			$('.isotopeFilters').on('click', 'a', function (e) {
				$('.isotopeFilters').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer.isotope({
					filter: filterValue
				});
				e.preventDefault();
			});
		});

		// 3 column layout
		var isotopeContainer2 = $('.isotopeContainer2');
		if (!isotopeContainer2.length || !jQuery().isotope) return;
		$win.on('load',function () {
			isotopeContainer2.isotope({
				itemSelector: '.isotopeSelector'
			});
			$('.isotopeFilters2').on('click', 'a', function (e) {
				$('.isotopeFilters2').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer2.isotope({
					filter: filterValue
				});
				e.preventDefault();
			});
		});

		// 2 column layout
		var isotopeContainer3 = $('.isotopeContainer3');
		if (!isotopeContainer3.length || !jQuery().isotope) return;
		$win.on('load',function () {
			isotopeContainer3.isotope({
				itemSelector: '.isotopeSelector'
			});
			$('.isotopeFilters3').on('click', 'a', function (e) {
				$('.isotopeFilters3').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer3.isotope({
					filter: filterValue
				});
				e.preventDefault();
			});
		});

		// 1 column layout
		var isotopeContainer4 = $('.isotopeContainer4');
		if (!isotopeContainer4.length || !jQuery().isotope) return;
		$win.on('load',function () {
			isotopeContainer4.isotope({
				itemSelector: '.isotopeSelector'
			});
			$('.isotopeFilters4').on('click', 'a', function (e) {
				$('.isotopeFilters4').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer4.isotope({
					filter: filterValue
				});
				e.preventDefault();
			});
		});

	};



	/*
	|--------------------------------------------------------------------------
	| Fancybox
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

	myTheme.Fancybox = function () {

		$(".fancybox-pop").fancybox({
			maxWidth: 900
			, maxHeight: 700
			, fitToView: true
			, width: '80%'
			, height: '80%'
			, autoSize: false
			, closeClick: false
			, openEffect: 'elastic'
			, closeEffect: 'none'
		});

	};




	/*
	|--------------------------------------------------------------------------
	| Functions Initializers
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

	myTheme.Isotope();
	myTheme.Fancybox();



});
/*
|--------------------------------------------------------------------------
| external js: isotope.pkgd.js
|--------------------------------------------------------------------------
|
|
|
*/

$('.grid').isotope({
	layoutMode: 'fitRows'
	, itemSelector: '.grid-item'
});
/*
|--------------------------------------------------------------------------
| Smooth Scroll 
|--------------------------------------------------------------------------
|
|
|
*/
$(function () {
	$('a[href*="#"]:not([href="#"])').on('click',function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
/*
|--------------------------------------------------------------------------
| Skill Bars Credits: 
|--------------------------------------------------------------------------
|
|
|
*/
//draw the doughnut
var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
for (var i = 0; i < doughnutArray.length; i++) {
	doughnutArray[i].lineWidth = 5; //thickness of the line
	doughnutArray[i].fillStyle = '#eaeaea';
	doughnutArray[i].strokeStyle = "#eaeaea";
	doughnutArray[i].beginPath();
	doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
	doughnutArray[i].stroke();
}
window.onload = function () {
		loadSkills1();
		loadSkills2();
		loadSkills3();
		loadSkills4();
	}
	/*Load skills one function*/
function loadSkills1() {
	var ctx = document.getElementById('skill1').getContext('2d');
	var al = 0;
	var start = 4.72;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;

	function progressSim() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 5; //thickness of the line
		ctx.fillStyle = '#363636';
		ctx.strokeStyle = "#00b3e4";
		ctx.textAlign = 'center';
		ctx.font = "30px Raleway";
		ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
		ctx.beginPath();
		ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
		ctx.stroke();
		if (al >= 89) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			clearTimeout(sim);
			// Add scripting here that will run when progress completes
		}
		al++;
	}
	var sim = setInterval(progressSim, 20); //speed  	
}
/*loadSkills2 function*/
function loadSkills2() {
	var ctx = document.getElementById('skill2').getContext('2d');
	var al = 0;
	var start = 4.72;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;

	function progressSim() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 5; //thickness of the line
		ctx.fillStyle = '#363636';
		ctx.strokeStyle = "#00b3e4";
		ctx.textAlign = 'center';
		ctx.font = "30px Raleway";
		ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
		ctx.beginPath();
		ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
		ctx.stroke();
		if (al >= 99) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			clearTimeout(sim);
			// Add scripting here that will run when progress completes
		}
		al++;
	}
	var sim = setInterval(progressSim, 30); //speed
}

/* loadSkill3 function*/
function loadSkills3() {
	var ctx = document.getElementById('skill3').getContext('2d');
	var al = 0;
	var start = 4.72;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;

	function progressSim() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 5; //thickness of the line
		ctx.fillStyle = '#363636';
		ctx.strokeStyle = "#00b3e4";
		ctx.textAlign = 'center';
		ctx.font = "30px Raleway";
		ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
		ctx.beginPath();
		ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
		ctx.stroke();
		if (al >= 75) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			clearTimeout(sim);
			// Add scripting here that will run when progress completes
		}
		al++;
	}
	var sim = setInterval(progressSim, 40); //speed
}
/* loadSkill4 function*/
function loadSkills4() {
	var ctx = document.getElementById('skill4').getContext('2d');
	var al = 0;
	var start = 4.72;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;

	function progressSim() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 5; //thickness of the line
		ctx.fillStyle = '#363636';
		ctx.strokeStyle = "#00b3e4";
		ctx.textAlign = 'center';
		ctx.font = "30px Raleway";
		ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
		ctx.beginPath();
		ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
		ctx.stroke();
		if (al >= 82) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
			clearTimeout(sim);
			// Add scripting here that will run when progress completes
		}
		al++;
	}
	var sim = setInterval(progressSim, 50); //speed
}