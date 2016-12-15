/*
    1) gallery
    2) articles
    3) 
*/


/*
|--------------------------------------------------------------------------
| 1) gallery
|--------------------------------------------------------------------------
|
|
|
*/

$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		autoPlay : 3500, //Set AutoPlay to 3 seconds
		loop : true,
		items : 3,
		pagination : false,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
});


/*
|--------------------------------------------------------------------------
| 2) articles
|--------------------------------------------------------------------------
|
|
|
*/

$(document).ready(function() {
	$("#owl-articles").owlCarousel({
		autoPlay : 3000, //Set AutoPlay to 3 seconds
		loop : true,
		items : 3,
		pagination : false,
		navigation : true,
		navigationText	: ["prev","<img src='images/arrow-right-large.png' alt='arrow-right-large' />"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2]
	});
});



/*
|--------------------------------------------------------------------------
| 3) 
|--------------------------------------------------------------------------
|
|
|
*/
  

















