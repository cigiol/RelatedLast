var n = document.createElement("script");
n.setAttribute("src", "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js");
n.onload = countDown();

function countDown() {
    var campID = 93;
    var coupon = "GAPKADIN20";
    var img = "https://img.visilabs.net/banner/uploaded_images/92_729_20200508094905597.jpg";
    var img_mob = 'https://img.visilabs.net/banner/uploaded_images/92_729_20200508094921658.jpg';

    function setCookie(e, t, i) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
        var n = "expires=" + o.toUTCString();
        document.cookie = e + "=" + t + ";" + n + ";path=/"
    };

    function init() {
        var style = '<style>\
#vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\
#vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 1px;width: 827px; height: 414px;left: 0;right: 0;top: 0;bottom: 0;background-image: url(' + img + '); background-repeat: no-repeat;}\
#vl-close{position: absolute;height: 25px; width: 25px; right: 4px;top: 5px; font-size: 24px; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\
#vl-button{width: 245px;height: 42px;position: absolute;bottom: 75px;right: 109px;}\
#assistantCodeArea{width: 225px;text-align: center;padding: 4px;position: absolute;bottom: 167px;right: 76px;}\
#assistantCodeArea input{width: 210px;background: transparent;border: none; color: transparent;font-weight: 700;font-size: 29px;letter-spacing: 0px;}\
#assistantCopyButton{width: 280px;cursor: pointer;position: absolute;bottom: 135px;right: 92px;height: 35px;}\
#vl_Timer{background-color: white;color: #132345;display: block;width: 115px;height: 30px;font-size: 25px;position: absolute;bottom: 10px;right: 175px;}\
.vl-time-area{float: left;}\
@media only screen and (max-width: 768px){\
#vl-container{background-image: url(' + img_mob + '); width: 275px; height:229px; animation: none; background-size: contain;}\
#vl-close{right: 0px; top: 0px;}\
#vl-button{width: 136px;height: 24px;position: absolute;bottom: 43px;right: 25px;}\
#assistantCodeArea{width: 112px; bottom: 89px; right: 18px;}\
#assistantCodeArea input{width: 112px; font-size: 16px;}\
#vl_Timer{width: 90px; height: 20px; font-size: 18px; bottom: 3px; right: 40px;}\
#assistantCopyButton{width: 140px;cursor: pointer;position: absolute;bottom: 76px;right: 23px;height: 17px;}\
}\
</style>';
        var html = '<div id="vl-overlay"/><div id="vl-container"><div id="vl-close"></div>\<div id="assistantCodeArea"><input type="text" value="' + coupon + '" id="couponCode" readonly/></div>\
<div id="assistantCopyButton"></div><a href="https://gap.com.tr/sezon-urunler-kadin-gap/?OM.zn=acttype-4&OM.zpc=act-93" id="vl-button"></a><div id="vl_Timer">\
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
                jQuery("#vl-hour > .hours").text(hours + ":");
                jQuery("#vl-min .minutes").text(minutes + ":");
                jQuery("#vl-sec .seconds").text(seconds);
                if (distance < 0) clearInterval(_interval);
            } catch (ex) {
                clearInterval(_interval);
                return false;
            }
        }, 1000);
        jQuery('#vl-overlay, #vl-close').click(function () {
            jQuery('#vl-container, #vl-overlay').remove();
        });
        document.getElementById('assistantCopyButton').addEventListener("click", function () {
            var copyText = document.getElementById("couponCode");
            copyText.select();
            document.execCommand("copy");
            alert("Kupon kodunuz kopyalanmıştır");
            try {
                VLSendClickFunc(campID, 4);
            } catch (e) {};
            setCookie("vl-camp-" + campID, "true", 1);
        });
    }
    if (document.cookie.indexOf("vl-camp-" + campID) === -1) {
        var j = document.createElement("script");
        j.setAttribute("src", "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js");
        j.onload = init;
        document.head.appendChild(j);
    }
}