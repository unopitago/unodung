;(function($){
    // Global variables
    var endtime;
    var intervalArray = [];

    $(document).ready(function(){
        $(".create-item").click(function(e){
            var that = $(this);
            var noItem = $("#input_count").val();
            var itemHtml = $(".item").eq(0).html();

            // console.log(noItem);
            // console.log(itemHtml);
            $(".content").empty();

            for (var i=0; i < noItem; i++) {
                $(".content").append('<div data-no="'+i+'" class="item" id="item-"'+i+'>' + itemHtml + '</div>');
                intervalArray[i] = null;
            }
        });

        $(".content").delegate('.run','click',function(){
            // console.log('click');
            var itemWrapper = $(this).parents(".item");
            var noItem = itemWrapper.data('no');
            var clock = itemWrapper.find('.clockdiv');
            // console.log(clock);
            endtime = new Date(Date.parse(new Date()) + totalTimestart());
            runCountdown(noItem,clock,endtime);
        });
    });

    
    function updateClock(clock,endtime) {
        var t = getTimeRemaining(endtime);
        var hoursSpan = clock.find('.hours');
        var minutesSpan = clock.find('.minutes');
        var secondsSpan = clock.find('.seconds');

        hoursSpan.html(('0' + t.hours).slice(-2));
        minutesSpan.html(('0' + t.minutes).slice(-2));
        secondsSpan.html(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    function runCountdown(i,clock,endtime) {
        intervalArray[i] = setInterval(function() { updateClock(clock,endtime); }, 1000);
    }

    function totalTimestart() {
        var x = document.getElementById('test1');
        var y = document.getElementById('test2');
        var z = document.getElementById('test3');
        var totalTime =  parseInt(x.value) * 3600 * 1000 + parseInt(y.value) * 60 * 1000 + parseInt(z.value) * 1000;
        return parseInt(totalTime);
    }

    //function tính thời gian thừa ra để chạy
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());// tính tổng thời gian bằng cách lấy tổng thời gian milisecond cuối trừ cho tổng thời gian hiện tại
        var seconds = Math.floor((t / 1000) % 60); // chia lấy dư số giây chạy ngược
        var minutes = Math.floor((t / 1000 / 60) % 60); // chia lấy dư số phút chạy ngược
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24); // chia lấy dư số giờ chạy ngược
        return { // trả lại một đối tượng có chứa 4 phần tử với giá trị của chúng
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    //=============== reset ================//
    function resetCoutdown() {
        document.getElementById('test1').value = "";
        document.getElementById('test2').value = "";
        document.getElementById('test3').value = "";    
    }

    //=============== pause ================//
    function pauseCoutdown(i) {
        clearInterval(intervalArray[i]);
    }

    function totalTimepause() {
        var a = document.getElementById('hours');
        var b = document.getElementById('minutes');
        var c = document.getElementById('seconds');
        var totalTimeafterpause = parseInt(a.innerHTML) * 3600 * 1000 + parseInt(b.innerHTML) * 60 * 1000 + parseInt(c.innerHTML) * 1000;
        return totalTimeafterpause;
    }

    //=============== continue ================//

    function continueCoutdown() {
        endtime = new Date(Date.parse(new Date()) + totalTimepause());
        setInterval(updateClock, 1000);
    }

})(jQuery);




























