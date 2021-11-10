(function(){

	var coupon = "MSPANT150";
	var checkDate = new Date();

	if(checkDate.getDay()==4)
		coupon="MSPANT250";
	
	var campID = 87;
	var img = "https://img.visilabs.net/banner/uploaded_images/92_1136_20200407161634735.jpg";
	var img_mob= 'https://img.visilabs.net/banner/uploaded_images/92_1136_20200407161648121.jpg';
	function setCookie(e,t,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"};
	function init(){
		var style = '<style>\
			#vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\
			#vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 1px;width: 600px; height: 400px;left: 0;right: 0;top: 0;bottom: 0;background-image: url('+img+'); background-repeat: no-repeat;}\
			#vl-close{position: absolute;height: 25px; width: 25px; right: 4px;top: 5px; font-size: 24px; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\
			#assistantCodeArea{width: 150px;text-align: center;padding: 4px;position: absolute;bottom: 138px;right: 78px;}\
			#assistantCodeArea input{width: 150px;background-color: white;border: none;color: black;font-weight: bold;font-size: 26px;}\
	        #assistantCopyButton{width: 199px;cursor: pointer;position: absolute;bottom: 88px;right: 50px;height:37px;}\
			#vl_Timer{background-color: white;color: black;display: block;width: 100px;height: 35px;font-size: 25px;position: absolute;bottom: 11px;right: 101px;}\
			.vl-time-area{float: left;}\
			@media only screen and (max-width: 768px){\
				#vl-container{background-image: url('+img_mob+'); width: 275px; height:229px; animation: none; background-size: contain;}\
				#vl-close{right: 0px; top: 0px;}\
				#assistantCodeArea{width: 110px; bottom: 72px; right: 16px;}\
				#assistantCodeArea input{width: 112px; font-size: 16px}\
				#vl_Timer{width: 90px; height: 27px; font-size: 18px; bottom: 0px; right: 16px;}\
				#assistantCopyButton{width: 110px; bottom: 50px; right:17px;height:24px;}\
			}\
		</style>';
		var html = '<div id="vl-overlay"/><div id="vl-container"><div id="vl-close"></div><div id="assistantCodeArea"><input type="text" value="'+coupon+'" id="couponCode" readonly/></div>\
	            <div id="assistantCopyButton"></div><div id="vl_Timer">\
	        		<div id="vl-hour" class="vl-time-area">\
	                	<span class="hours timeCounterSpan">00:</span>\
	                </div>\
	                <div id="vl-min" class="vl-time-area">\
	    	            <span class="minutes timeCounterSpan">00:</span>\
	                </div>\
	                <div id="vl-sec" class="vl-time-area">\
	    	            <span class="seconds timeCounterSpan">00</span>\
	                </div>\
	            </div></div>';
		jQuery('head').append(style);
		jQuery('body').append(html);
		var countDownDate = new Date();
		countDownDate.setHours(countDownDate.getHours() + 1);
		var _interval = setInterval(function () {
		    try {
		        var now = new Date();
		        var distance = countDownDate.getTime() - now.getTime();
		        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		        hours = hours < 10 ? '0' + hours : hours;
		        minutes = minutes < 10 ? '0' + minutes : minutes;
		        seconds = seconds < 10 ? '0' + seconds : seconds;
		        jQuery("#vl_Timer .hours").text(hours + ":");
		        jQuery("#vl_Timer .minutes").text(minutes + ":");
		        jQuery("#vl_Timer .seconds").text(seconds);
		        if (distance < 0) clearInterval(_interval);
		    } catch (ex) {
		        clearInterval(_interval);
		        return false;
		    }
		}, 1000);
		jQuery('#vl-overlay, #vl-close').click(function(){ 
	        jQuery('#vl-container, #vl-overlay').remove();
	    });
	    document.getElementById('assistantCopyButton').addEventListener("click", function(){
	        var copyText = document.getElementById("couponCode");
	        copyText.select();
	        document.execCommand("copy");
	        alert("Kupon kodunuz kopyalanmıştır");
	        try{VLSendClickFunc(campID, 4);}catch(e){};
	        setCookie("vl-camp-"+campID, "true", 1);
	        jQuery('#vl-container, #vl-overlay').remove();
	    });
	}
	if(document.cookie.indexOf("vl-camp-"+campID) === -1) init();
})();