var t=118;
function exitPopupCode(){
    
    !function(){e="EKNKS22",i="https://img.visilabs.net/banner/uploaded_images/92_1136_20200917143143813.jpg",o="https://img.visilabs.net/banner/uploaded_images/92_1136_20200917143143813.jpg";-1===document.cookie.indexOf("vl-camp-"+t)&&function(){var n="<style>\t\t\t#vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\t\t\t#vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 1px;width: 500px; height: 500px;left: 0;right: 0;top: 0;bottom: 0;background-image: url("+i+"); background-repeat: no-repeat;}\t\t\t#vl-close{position: absolute;height: 25px; width: 25px; right: 4px;top: 5px; font-size: 24px; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\t\t\t#assistantCodeArea{width: 160px;text-align: center;padding: 4px;position: absolute;bottom: 152px;right: 165px;}\t\t\t#assistantCodeArea input{width: 112px;border: none;color: black;font-weight: 700;font-size: 24px;}\t        #assistantCopyButton{width: 283px;cursor: pointer;position: absolute;bottom: 105px;right: 40px;height:50px;}\t\t\t#vl_Timer{color: black;display: block;width: 100px;height: 35px;font-size: 25px;position: absolute;bottom: 45px;right: 200px;}\t\t\t.vl-time-area{float: left;}\t\t\t@media only screen and (max-width: 768px){\t\t\t\t#vl-container{background-image: url("+o+"); width: 300px; height:300px; animation: none; background-size: contain;}\t\t\t\t#vl-close{right: 0px; top: 0px;}\t\t\t\t#assistantCodeArea{width: 90px; bottom: 88px; right: 95px;}\t\t\t\t#assistantCodeArea input{width: 85px; font-size: 15px}\t\t\t\t#vl_Timer{width: 90px; height: 27px; font-size: 18px; bottom: 20px; right: 97px;}\t\t\t\t#assistantCopyButton{width: 200px; bottom: 37px;}\t\t\t}\t\t</style>",a='<div id="vl-overlay"/><div id="vl-container"><div id="vl-close">x</div><div id="assistantCodeArea"><input type="text" value="'+e+'" id="couponCode" readonly/></div>\t            <div id="assistantCopyButton"></div><div id="vl_Timer">\t        \t\t<div id="vl-hour" class="vl-time-area">\t                \t<span class="hours timeCounterSpan">00:</span>\t                </div>\t                <div id="vl-min" class="vl-time-area">\t    \t            <span class="minutes timeCounterSpan">00:</span>\t                </div>\t                <div id="vl-sec" class="vl-time-area">\t    \t            <span class="seconds timeCounterSpan">00</span>\t                </div>\t            </div></div>';jQuery("head").append(n),jQuery("body").append(a);var r=new Date;r.setMinutes(r.getMinutes() + 30);var p=setInterval(function(){try{var t=new Date,e=r.getTime()-t.getTime(),i=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);i=i<10?"0"+i:i,o=o<10?"0"+o:o,n=n<10?"0"+n:n,jQuery("#vl_Timer .hours").text(i+":"),jQuery("#vl_Timer .minutes").text(o+":"),jQuery("#vl_Timer .seconds").text(n),e<0&&clearInterval(p)}catch(t){return clearInterval(p),!1}},1e3);jQuery("#vl-overlay, #vl-close").click(function(){jQuery("#vl-container, #vl-overlay").remove()}),document.getElementById("assistantCopyButton").addEventListener("click",function(){document.getElementById("couponCode").select(),document.execCommand("copy"),alert("Kupon kodunuz kopyalanmıştır");try{VLSendClickFunc(t,4)}catch(t){}jQuery("#vl-container, #vl-overlay").remove()})}()}();}
var exitCheck = true;
if(window.innerWidth>768){
document.addEventListener("mouseleave", function (e) {
    if (e.clientY < 0 && exitCheck) {
            exitPopupCode();
            exitCheck=false;
            !function(t,e,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=t+"="+e+";path=/"}("vl-camp-"+t,"true",1);
    }
}, false);
}
else{
    var checkScrollSpeed = (function (settings) {
        settings = settings || {};
        var lastPos, newPos, timer, delta,
            delay = settings.delay || 50;
        function clear() {
            lastPos = null;
            delta = 0;
        }
        clear();
    
        return function () {
            newPos = window.scrollY;
            if (lastPos != null) {
                delta = newPos - lastPos;
            }
            lastPos = newPos;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return delta;
        };
    })();
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        
            
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                console.log("down scrolling")
            } else {
                if (checkScrollSpeed() <= -80) {
                    if(exitCheck){
                        exitCheck=false;
                        exitPopupCode();
                        !function(t,e,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=t+"="+e+";path=/"}("vl-camp-"+t,"true",1);
                    }
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        
    }, false);

}