function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}
function getDate(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year.toString() + month + day;
}

var a = check_cookie_name("vlCoupon");
var b = check_cookie_name("vlCouponEx");
if (!a && !b) {
    
    var today = getDate();
    var birthDay = window.google_tag_manager["DC-10345077"].dataLayer.get("cd_userBirthday");
    if(today.substring(4,8)==birthDay.substring(4,8)){
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        d.setTime(d.getTime() + (0.5*60*60*1000));
        var c = new Date(year, month, day + 7);
        document.cookie = "vlCoupon="+d+";path=/;expires=" + c;
        var exp = new Date(year + 1, month, day);
        document.cookie= "vlCouponEx="+d+";path=/;expires=" + exp;
        couponAssistant();
    }
}
else if(a && b)
{
    couponAssistant();
}





function couponAssistant() {

  <%VLSendImpressionFunc%>;
    var code = "MSC2C4D8";
    var style = document.createElement("style");
    style.innerHTML = "#vl_timer{width: 65px; height: 29px; font-size: 22px;position: relative;color: #002b70;font-weight: bold;margin:auto;margin-top:20px;}.vl-time-area{float: left;}#assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 300px;right: 8%;background-color: white;border: 1px solid #b70234;border-radius: 5px;}            #assistantHeader{background-color: #b70234;color: white;width: 100%; cursor:pointer;}            #assistantHeaderText{font-size: 18px; font-weight: bold; height: 40px;width: 100%;padding: 8px;display: inline-block;text-align: center;}#assistantMinimize{opacity: 1; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}#assistantBodyText{display: block;margin: auto;width: 80%;margin-top: 15px;text-align: center;}#assistantCodeArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 20px;font-size: 20px;border: 3px dashed #b70234;padding: 4px;font-weight: 600;}#assistantCopyButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;color: white;background-color: #68ba32;padding: 10px;border-radius: 5px;font-size: 16px; font-weight: bold;cursor: pointer;}            #assistantCloseButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;cursor: pointer;}#couponCode{width: 100%;text-align: center;border: none;font-size: 15px;color: #002b70;font-weight: bold;}.vl-active{bottom: 0px; transition: bottom 1s;}.vl-passive{bottom: -265px; transition: bottom 1s;}            @media only screen and (max-width: 600px){#assistantContainer{margin: auto; right: 0; left:0; z-index: 10;}";
    document.head.append(style);

    var n = document.createElement("div");
    n.setAttribute("id", "assistantContainer"), n.setAttribute("class", "vl-active"), n.innerHTML = '<div id="assistantHeader">            <div id="assistantHeaderText">Kupon Kodunuz</div>            <div id="assistantMinimize">-</div>            </div>            <div id="assistantBody">            <div id="assistantBodyText">Kupon kodunuzu kopyalayın ve ödeme adımında uygulayın</div>            <div id="assistantCodeArea"><input type="text" value="' + code + '" id="couponCode" readonly/></div>            <div id="assistantCopyButton">Kopyala</div>            <div id="assistantCloseButton">Kapat</div>            </div>', document.body.append(n), document.getElementById("assistantCopyButton").addEventListener("click", function () {
        document.getElementById("couponCode").select(), document.execCommand("copy"), minimizeAssistant(), document.querySelector("#assistantCopyButton").innerText = "Kopyalandı"; document.querySelector("#assistantCopyButton").style.backgroundColor = "grey";
    <%VLSendClickFunc%>;
    }), document.getElementById("assistantHeader").addEventListener("click", function () {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    }), document.getElementById("assistantCloseButton").addEventListener("click", function () {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    })
        , minimizeAssistant = function () {
            document.getElementById("assistantMinimize").style.opacity = "0", document.getElementById("assistantContainer").setAttribute("class", "vl-passive")
        }, maximizeAssistant = function () {
            document.getElementById("assistantMinimize").style.opacity = "1", document.getElementById("assistantContainer").setAttribute("class", "vl-active")
        };



    var timerDiv = document.createElement("div");
    timerDiv.setAttribute("id", "vl_timer");

    var timerHtml = '<div id="vl-min" class="vl-time-area">\
        <span class="minutes timeCounterSpan">00:</span>\
        </div>\
        <div id="vl-sec" style="padding-right:6px;" class="vl-time-area">\
        <span class="seconds timeCounterSpan">00</span>\
        </div>';

    timerDiv.innerHTML = timerHtml;


    var b = check_cookie_name("vlCoupon");
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


                document.querySelector("#assistantHeader").after(timerDiv);

            }
            else {
                document.querySelector("#assistantContainer").remove();
            }
        }
        else {
            document.querySelector("#assistantContainer").remove();
        }
    }
    else {
        document.querySelector("#assistantContainer").remove();
    }
}
