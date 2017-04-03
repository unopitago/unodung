/*
    1) gallery
    2) articles
    3) panel fixed
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
		autoPlay : false, //Set AutoPlay to 3 seconds
		loop : true,
		items : 1,
		pagination : true,
		navigation : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsTablet :	[768,1],
		itemsMobile : 	[479,1]
	});
});



/*
|--------------------------------------------------------------------------
| 2) step click
|--------------------------------------------------------------------------
|
|
|
*/


// $(document).ready(function() {
// 	$("a.next-step-button").click(function(){
// 		 $(".owl-controls .owl-pagination .owl-page").eq(0).removeClass('active');
// 		 $(".owl-controls .owl-pagination .owl-page").eq(1).addClass('active').click();
// 	});
// });


// $(document).ready(function() {
// 	$("a.create-claim-button").click(function(){
// 		 $(".owl-controls .owl-pagination .owl-page").eq(1).removeClass('active');
// 		 $(".owl-controls .owl-pagination .owl-page").eq(2).addClass('active');
// 	});
// });












