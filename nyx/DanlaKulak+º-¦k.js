var duplicateControl = document.querySelectorAll("#VisiNotifierStyle2");
if (duplicateControl.length > 1) {
    
    duplicateControl[1].remove();
}

var duplicateControl = document.querySelectorAll("#VisiNotifierStyle2 > ");
if (duplicateControl.length > 1) {
    
    duplicateControl[1].remove();
}

document.querySelector("#VisiNotifierStyle2").style.transform = "translate3d(0,0,3px) !important";


function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}
var path = window.location.pathname;
if (path == "/new-address" || path == "/checkout-payment" || path == "/checkout-address") {
    document.querySelector("#VisiNotifierStyle2").remove();
}
var style = '<style>\#vl_timer{width: 118px; height: 30px; font-size: 21px;position: absolute;top: 5px;right: 10%; background: #d7378d;color: white;padding-left: 5px;}\
    .vl-time-area{float: left;}</style>';
jQuery('head').append(style);
var timerDiv = document.createElement("div");
timerDiv.setAttribute("id", "vl_timer");
var timerHtml = '<div id="vl-hour" style="padding-left:12px;" class="vl-time-area">\
        <span class="hours timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-min" class="vl-time-area">\
        <span class="minutes timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-sec" style="padding-right:6px;" class="vl-time-area">\
        <span class="seconds timeCounterSpan">00</span>\
        </div>';
timerDiv.innerHTML = timerHtml;
var b = check_cookie_name("danlaExpire");
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
if(!document.querySelector("#vl_timer"))           document.querySelector(".contentMaximized").append(timerDiv);
            var codeJson = { "2B45AK": "150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Love You So Mochi Highlighting Palette ??? Arcade Glam hediyeni kap!", "BU5R41": "150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Love You So Mochi Highlighting Palette ??? Lit Life hediyeni kap!", "8B3GMU": "150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Contour Intuitive Palette ??? Warm Zone hediyeni kap!", "5EZ3NN": "200 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 219,99 TL de??erinde Sugar Trip Squad Highlighting Palette hediyeni kap!", "W3RAL7": "150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Contour Intuitive Palette ??? Jewel Queen hediyeni kap!", "6GKC3C": "Sepetindeki d??rt ??r??nden birinin ??cretsiz olmas?? i??in, kupon kodunu kopyala, sepete ad??m??nda uygula, hediyeni kap!", "S3DE7N": "300 TL ve ??zeri sipari??lerde kupon kodunu kopyala, sepet ad??m??nda uygula, %40 indirim hediyeni kap!", "OXZD2N": "200 TL ve ??zeri al????veri??lerde 50 TL indirim i??in kupon kodunu kopyala, sepet ad??m??nda uygula, hediyeni kap!", "7HAK4N": "150 TL ve ??zeri sipari??lerde kupon kodunu kopyala, sepet ad??m??nda uygula, %30 indirim hediyeni kap!" };

 var codeJson2 = { "2B45AK": "AYDINLATICI PALET?? HED??YE", "BU5R41": "AYDINLATICI PALET?? HED??YE", "8B3GMU": "KONT??R PALET?? HED??YE", "5EZ3NN": "AYDINLATICI PALET?? HED??YE", "W3RAL7": "KONT??R PALET?? HED??YE", "6GKC3C": "4 AL 3 ??DE", "S3DE7N": "%40 ??ND??R??M", "OXZD2N": "50TL ??ND??R??M", "7HAK4N": "%30 ??ND??R??M" };

            var code = check_cookie_name("danlaCode");
            var kod = document.createElement("p");
            kod.innerText = code;
            kod.style.position = "absolute";
            kod.style.top = "17px";
            kod.style.fontSize = "23px";
            kod.style.lineHeight = "28px";
            kod.style.left = "32%";
            kod.style.color = "#d7378d";
            kod.style.border = "dashed 2px #d7378d";
            kod.style.borderRadius = "10px";
            kod.style.padding = "0px 10px";
            kod.style.color = "#d7378d";
            kod.className = "coupon";
            
if(!document.querySelector(".coupon"))
document.querySelector(".contentMaximized").append(kod);


            var coupon = document.querySelector('#VisiNotifierStyle2 > div.contentMaximized > p.coupon');
            if (coupon) {
                coupon.addEventListener('click', function () {
                    var copyText = document.querySelector("#VisiNotifierStyle2 > div.contentMaximized > p.coupon").innerText;
                    var elem = document.createElement("textarea");
                    document.body.appendChild(elem);
                    elem.value = copyText;
                    elem.select();
                    document.execCommand("copy");
                    document.body.removeChild(elem);
                    alert("Kupon kodunuz kopyalanm????t??r");
                });
            }

var bas= document.createElement("p");
          bas.innerText = codeJson2[code];
          bas.style.position = "absolute";
bas.style.top= "67px";
bas.style.fontSize= "11px";
bas.style.width= "162px";
bas.style.left = "20%";
bas.style.color = "#d7378d";
bas.style.textAlign="center";
bas.style.className="baslik";

if(!document.querySelector(".baslik")) {     document.querySelector(".contentMaximized").append(bas);
}

            var text = document.createElement("p");
            text.innerText = codeJson[code];
            text.style.position = "absolute";
            text.style.fontSize = "10px";
            text.style.top = "83px";
            text.style.width = "140px";
            text.style.left = "22%";
            text.style.textAlign = "center";
            text.style.width = "152px";
            document.querySelector(".contentMaximized").append(text);
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