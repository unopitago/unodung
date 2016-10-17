$(function(){
	
	// ========= Control slideshow =========
	
		// number display image

		var display_image_number = 6;
		
		// oftion (circle)
		// Method = 1: after to limit slide, slide stage to first or final
		// Method = 2: after to litmit slide, slide will spin around
		var circle_method = 2;
		
		// speed image (đơn vị: milisecond)
		var anispeed = 200;
		
		// scoll slide
		// 1 = active, 0 = deactive
		var auto_scroll = 1;
		
		// If auto_scroll = 1 else control time scroll
		var timeinterval = 1200;
		
	
	// ========= parameter slideshow =========

	// cout image, width of image -> width stage
	var image_count = $('.slide-image').length;
	var image_width = $('.slide-image').width();
		// width image - css
		// width image is very important!
	var stage_width = image_width * image_count;
	// width frame display slide
	var display_width = display_image_number * image_width;	
	
	// Edit width stage - cout image = display_width
	$('.slide-holder').css("width", display_width + "px");
	
	// Edit widht block wrapper slide-image (slide-stage)= total block slide-image
	$('.slide-stage').css("width", stage_width + "px");
	

	// ========= when handing click button next and prev =========
	
	function left_slide_circle(){
		$('.slide-image:last-child').addClass('swapthis'); // Xác định hình đang ở vị trí cuối cùng
		$('.swapthis').insertBefore('.slide-image:first'); // Chuyển hình cuối lên trước hình đầu tiên
		$('.slide-stage').css("left",-image_width + "px"); // Dịch chuyển tức thời vị trí của stage sang một khoảng bằng 1 slide-image
		$('.slide-stage').stop().animate({left:0},anispeed); // Thực hiện animation
		$('.swapthis').removeClass('swapthis'); // Reset class cho slide-image vừa chuyển
	}
	function right_slide_circle(){
		$('.slide-image:first').addClass('swapthis'); // Xác định hình đang ở vị trí cuối cùng
		$('.swapthis').insertAfter('.slide-image:last-child'); // Chuyển hình cuối lên trước hình đầu tiên
		$('.slide-stage').css("left",-(stage_width - image_width - display_width) + "px"); // Dịch chuyển tức thời vị trí của stage sang một khoảng bằng 1 slide-image
		$('.slide-stage').stop().animate({left:display_width - stage_width},anispeed); // Thực hiện animation
		$('.swapthis').removeClass('swapthis'); // Reset class cho slide-image vừa chuyển
	}
	function left_slide_scroll(){
		// Xác định xem slide có còn hình phía bên trái hay không dựa trên Left của stage
		var stage_left = $('.slide-stage').position().left;
		
		// Nếu có
		if(stage_left < 0 && !$('.slide-stage').is(':animated')){ //Kích hoạt chỉ khi stage ko chuyển động nữa
			$('.slide-stage').stop().animate({left:"+=" + image_width},anispeed);
		}
		else // Nếu đã chuyển về hình ảnh đầu tiên thì lựa chọn cách thức quay vòng
		{	
			switch(circle_method){ //Lựa chọn
				case 1:
					$('.slide-stage').stop().animate({left:display_width - stage_width},anispeed);
					break;
				case 2:
					left_slide_circle();
					break;
			}
			
		}
	}
	function right_slide_scroll(){
		// Xác định xem slide có còn hình phía bên phải hay không dựa trên độ dài của stage và container
		var stage_left = Math.abs($('.slide-stage').position().left);
		var right_remain = stage_width - (display_width + stage_left);
		
		// Nếu có
		if(right_remain > 0 && !$('.slide-stage').is(':animated')){ //Kích hoạt chỉ khi stage ko chuyển động nữa
			$('.slide-stage').stop().animate({left:"-=" + image_width},anispeed);
		}
		else // Nếu đã chuyển về hình ảnh đầu tiên thì lựa chọn cách thức quay vòng
		{
			switch(circle_method){ //Lựa chọn
				case 1:
					$('.slide-stage').stop().animate({left:0},anispeed);
					break;
				case 2:
					right_slide_circle();
					break;
			}
		}
	}
	
	$('.slide-control-prev').click(function(){left_slide_scroll();});
	$('.slide-control-next').click(function(){right_slide_scroll();});
	
	// ========= Xử lý auto scroll ==================
	
	function start_slide_auto_scroll(){
		play = setInterval(right_slide_scroll,timeinterval);
	}
	
	// Nếu chế độ auto scroll được chọn thì sẽ kích hoạt 
	if(auto_scroll == 1){
		start_slide_auto_scroll(); 
	}
	
	// Đưa chuột vào slide và các nút sẽ tạm dừng quá trình auto scroll
	$(".slide-container,.slide-control-prev,.slide-control-next").hover(function() {
		clearInterval(play);
	}, function(){
		start_slide_auto_scroll();
	});
	
})