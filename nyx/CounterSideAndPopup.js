var duplicateControl=document.querySelectorAll("#VisiNotifierStyle2");

if(duplicateControl.length>1){
    duplicateControl[0].remove();
}

function check_cookie_name(name) 
    {
      var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        return match[2];
      }
   }

var path=window.location.pathname;
if(path=="/new-address" || path =="/checkout-payment" || path =="/checkout-address"){
    document.querySelector("#VisiNotifierStyle2").remove();
}
var max = document.querySelector(".contentMaximized");
var min = document.querySelector(".contentMinimized");
max.style.display="none";
min.style.display="block";

var style='<style>\#vl_timer{width: 115px; height: 29px; font-size: 22px;position: absolute;top: 15px;right: 16%; background: #d7378d;color: white;padding-left: 16px;}\
    .vl-time-area{float: left;}</style>';
        
        jQuery('head').append(style);
var timerDiv=document.createElement("div");
        timerDiv.setAttribute("id","vl_timer");

        var timerHtml='<div id="vl-hour" class="vl-time-area">\
        <span class="hours timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-min" class="vl-time-area">\
        <span class="minutes timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-sec" style="padding-right:6px;" class="vl-time-area">\
        <span class="seconds timeCounterSpan">00</span>\
        </div>';

        timerDiv.innerHTML=timerHtml;

var b = check_cookie_name("danlaExpire");
if(b){
var countDownDate = new Date(b);
var now = new Date();
var distance = countDownDate.getTime() - now.getTime();
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
if(hours>=0){
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
            if (distance < 0) clearInterval(_interval);
        } catch (ex) {
            clearInterval(_interval);
            return false;
        }
    }, 1000);
}
}
document.querySelector(".contentMaximized").append(timerDiv);

var kod= document.createElement("p");
kod.innerText="6GKC3C";
kod.style.position="absolute";
kod.style.top="70px";
kod.style.fontSize="23px";
kod.style.left="42%";
kod.style.color="#d7378d";
kod.style.border="1px solid";
kod.style.width="95px";
kod.style.paddingLeft="5px";

document.querySelector(".contentMaximized").append(kod);

var text= document.createElement("p");
text.innerText="Sepetindeki d??rt ??r??nden birinin ??cretsiz olmas?? i??in, kupon kodunu kopyala, sepete ad??m??nda uygula, hediyeni kap!";
text.style.position="absolute";
text.style.fontSize="15px";
text.style.top="124px";
text.style.width="181px";
text.style.left="24%";
text.style.textAlign="center";


document.querySelector(".contentMaximized").append(text);

var codeJson = {"2B45AK":"150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Love You So Mochi Highlighting Palette ??? Arcade Glam hediyeni kap!","BU5R41":"150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Love You So Mochi Highlighting Palette ??? Lit Life hediyeni kap!","8B3GMU":"150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Contour Intuitive Palette ??? Warm Zone hediyeni kap!","5EZ3NN":"200 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 219,99 TL de??erinde Sugar Trip Squad Highlighting Palette hediyeni kap!","W3RAL7":"150 TL ve ??zeri sipari??inde kupon kodunu kopyala, sepet ad??m??nda uygula, 139,99 TL de??erinde Contour Intuitive Palette ??? Jewel Queen hediyeni kap!","6GKC3C":"Sepetindeki d??rt ??r??nden birinin ??cretsiz olmas?? i??in, kupon kodunu kopyala, sepete ad??m??nda uygula, hediyeni kap!","S3DE7N":"300 TL ve ??zeri sipari??lerde kupon kodunu kopyala, sepet ad??m??nda uygula, %40 indirim hediyeni kap!","OXZD2N":"200 TL ve ??zeri al????veri??lerde 50 TL indirim i??in kupon kodunu kopyala, sepet ad??m??nda uygula, hediyeni kap!","7HAK4N":"150 TL ve ??zeri sipari??lerde kupon kodunu kopyala, sepet ad??m??nda uygula, %30 indirim hediyeni kap!"}