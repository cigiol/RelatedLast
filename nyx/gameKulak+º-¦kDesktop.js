var duplicateControl = document.querySelectorAll("#VisiNotifierStyle2");

if (duplicateControl.length > 1) {
    duplicateControl[1].remove();
}
document.querySelector("#VisiNotifierStyle2").style.display="block";
document.querySelector("#VisiNotifierStyle2").style.position="fixed";
document.querySelector("#VisiNotifierStyle2").style.zIndex="10000000";
document.querySelector("#VisiNotifierStyle2").style.top="calc(40% + 109px)";
document.querySelector("#VisiNotifierStyle2").style.right="0px";





var path = window.location.pathname;
if (path == "/new-address" || path == "/checkout-payment" || path == "/checkout-address") {
    document.querySelector("#VisiNotifierStyle2").remove();
}

function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}

document.querySelector(".contentMaximized").addEventListener("click", function () {
    var max = document.querySelector(".contentMaximized");
    var min = document.querySelector(".contentMinimized");
    max.style.display = "none";
    min.style.display = "block";
});

var kod = document.createElement("div");
kod.style=" position: absolute;
    top: 77px;
    font-size: 23px;
    line-height: 28px;
    left: 61px;
    color: black;
    font-weight: bold;
    border: 1px solid rgb(215, 55, 141);
    padding: 0px 10px;";

var k = check_cookie_name("vlGiftRainGameCouponCode").split("/")[0];
if(k){
kod.innerText=""+k;
}

document.querySelector(".contentMaximized").append(kod);


var style = '<style>\#vl_timer{width: 115px; height: 29px; font-size: 22px;position: absolute;top: 10px;right: 12%; background: #d7378d;color: white;padding-left: 16px;}\
    .vl-time-area{float: left;}</style>';

jQuery('head').append(style);
var timerDiv = document.createElement("div");
timerDiv.setAttribute("id", "vl_timer");

var timerHtml = '<div id="vl-hour" class="vl-time-area">\
        <span class="hours timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-min" class="vl-time-area">\
        <span class="minutes timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-sec" style="padding-right:6px;" class="vl-time-area">\
        <span class="seconds timeCounterSpan">00</span>\
        </div>';

timerDiv.innerHTML = timerHtml;

var b = check_cookie_name("vlGiftRainGameCouponCode").split("/")[1];
if (b) {
    var countDownDate = new Date(b);
    var now = new Date();
    var distance = countDownDate.getTime() - now.getTime();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours >= 0) {
        if (minutes >= 0) {
            if (seconds > 0) {
                var _interval = setInterval(function () {
                    try {
                        now = new Date();
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
                        if (distance < 0) {
                            document.querySelector("#VisiNotifierStyle2").remove();
                            clearInterval(_interval);
                        }
                    } catch (ex) {
                        clearInterval(_interval);
                        return false;
                    }
                }, 1000);
            }


            document.querySelector(".contentMaximized").append(timerDiv);

        }
        else {
            document.querySelector("#VisiNotifierStyle2").remove();
        }
    }
    else {
        document.querySelector("#VisiNotifierStyle2").remove();
    }
}
else {
    document.querySelector("#VisiNotifierStyle2").remove();
}
