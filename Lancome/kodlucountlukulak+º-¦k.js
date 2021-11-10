(function(){
    var config = {
        couponCode : '',
    };

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    function vlCreateCountDown() {
        if (getCookie("VLCDD") != "") {
            var countDownDate = getCookie("VLCDD");
            var x = setInterval(function() {
    
                var now = new Date().getTime();
                    
                var distance = countDownDate - now;
                    
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                document.getElementById("VLCDDEL").innerHTML = hours + "h "
                + minutes + "m " + seconds + "s ";
                    
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("VLCDDEL").innerHTML = "EXPIRED";
                }
                }, 1000);
        }
    }
      
    couponAssistant = function(){
        var style = document.createElement("style");
        var styleText = '\
            #assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 250px;right: 8%;background-color: white;border: 1px solid #d51b51;border-radius: 5px;bottom:135px}\
            #assistantHeader{background-color: #d51b51;color: white;width: 100%; cursor:pointer;transform: rotate(90deg);position: absolute;right: -145px;bottom: 105px;}\
            #assistantHeaderText{font-size: 18px; font-weight: bold; height: 40px;width: 100%;padding: 8px;display: inline-block;text-align: center;}\
            #assistantMinimize{opacity: 0; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}\
            #assistantBodyText{display: block;margin: auto;width: 80%;margin-top: 15px;text-align: center;}\
            #assistantCodeArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 20px;font-size: 20px;border: 3px dashed #d51b51;padding: 4px;font-weight: 600;}\
            #assistantCopyButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;color: white;background-color: #d51b51;padding: 10px;border-radius: 5px;font-size: 16px; font-weight: bold;cursor: pointer;}\
            #assistantCloseButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 6px;cursor: pointer;}\
            #VLCDDEL{text-align: center;margin-bottom: -15px;margin-top: 10px;}\
            #couponCode{width: 100%;text-align: center;border: none;}\
            .vl-active{bottom: 135px !important; left:0px !important; transition: all 1s;}\
            .vl-passive{bottom: 135px !important; left:-249px !important; transition: all 1s;}\
            @media only screen and (max-width: 600px){\
                #assistantContainer{margin: auto; right: 0; left:0; z-index: 10;}';
        if(window.location.href.indexOf("tematik/aninda-indirim") > -1 || window.location.href.indexOf("tematik/uykusuz-geceler?") > -1) styleText += '.vl-passive{bottom: -204px;}.vl-active{bottom: 56px;}}';
        else styleText += '}';
        style.innerHTML = styleText;
        document.head.appendChild(style);
        var ass = document.createElement("div");
        ass.setAttribute("id", "assistantContainer");
        ass.setAttribute("class", "vl-passive");
        ass.innerHTML = '<div id="assistantHeader">\
            <div id="assistantHeaderText">Kupon Kodunuz</div>\
            <div id="assistantMinimize">-</div>\
            </div>\
            <div id="assistantBody">\
            <div id="assistantBodyText">Kupon kodunuzu kopyalayın ve ödeme adımında uygulayın</div>\
            <p id="VLCDDEL"></p>\
            <div id="assistantCodeArea"><input type="text" value="'+ config.couponCode +'" id="couponCode" readonly/></div>\
            <div id="assistantCopyButton">Kopyala</div>\
            <div id="assistantCloseButton">Kapat</div>\
            </div>';
        document.body.appendChild(ass);
        try {
            <%VLSendImpressionFunc%>;
        } catch (error) {}
        document.getElementById('assistantCopyButton').addEventListener("click", function(){
            var copyText = document.getElementById("couponCode");
            copyText.select();
            document.execCommand("copy");
            minimizeAssistant();
            try {
                <%VLSendClickFunc%>;
            } catch (error) {}
        });
        document.getElementById("assistantHeader").addEventListener("click", function(){
            if(document.getElementById("assistantContainer").getAttribute("class") === "vl-active") minimizeAssistant();
            else maximizeAssistant();
        });
        document.getElementById("assistantCloseButton").addEventListener("click", function(){
            if(document.getElementById("assistantContainer").getAttribute("class") === "vl-active") minimizeAssistant();
            else maximizeAssistant();
        });
    };
    minimizeAssistant = function(){
        document.getElementById("assistantMinimize").style.opacity = "0";
        document.getElementById("assistantContainer").setAttribute("class","vl-passive");
    };
    maximizeAssistant = function(){
        document.getElementById("assistantMinimize").style.opacity = "1";
        document.getElementById("assistantContainer").setAttribute("class","vl-active");
    };
    exec = function(){
        if(document.getElementById("assistantContainer") !== null) return false;
            if (getCookie("VLCCC")) {
                config.couponCode = getCookie("VLCCC");
                if (config.couponCode!="") {
                    couponAssistant();
                    vlCreateCountDown();
                }
            }
            else{
                console.log("cookie yok",getCookie("VLCCC"));
            }
    };
    exec();
})();
/*C  : BA# 2020-01-30  & U  : BA# 2020-02-07 */