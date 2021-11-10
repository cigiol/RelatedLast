function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}

var a = check_cookie_name("vlCodeCoupon2");
if (!a) {
    function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}var FlipDown=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(_classCallCheck(this,t),"number"!=typeof e)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(_typeof(e)," instead."));"object"===_typeof(o)&&(n=o,o="flipdown"),this.version="0.2.2",this.initialised=!1,this.now=this._getTime(),this.epoch=e,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(o),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(n),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return _createClass(t,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(t){return this.hasEndedCallback=function(){t(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(t){return{theme:t.hasOwnProperty("theme")?t.theme:"dark"}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var t=this.daysremaining<=2?2:this.daysremaining,e=0;e<t+6;e++)this.rotors.push(this._createRotor(0));var o=[];for(e=0;e<t;e++)o.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(o));var n=t;for(e=0;e<3;e++){for(var s=[],i=0;i<2;i++)s.push(this.rotors[n]),n++;this.element.appendChild(this._createRotorGroup(s))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(t){var e=document.createElement("div");e.className="rotor-group";var o=document.createElement("div");return o.className="rotor-group-heading",e.appendChild(o),appendChildren(e,t),e}},{key:"_createRotor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("figure"),s=document.createElement("figure"),i=document.createElement("div"),r=document.createElement("div");return e.className="rotor",o.className="rotor-leaf",n.className="rotor-leaf-rear",s.className="rotor-leaf-front",i.className="rotor-top",r.className="rotor-bottom",n.textContent=t,i.textContent=t,r.textContent=t,appendChildren(e,[o,i,r]),appendChildren(o,[n,s]),e}},{key:"_tick",value:function(){this.now=this._getTime();var t=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(t/86400),t-=86400*this.clockValues.d,this.clockValues.h=Math.floor(t/3600),t-=3600*this.clockValues.h,this.clockValues.m=Math.floor(t/60),t-=60*this.clockValues.m,this.clockValues.s=Math.floor(t),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function o(){var t=this;this.rotorTop.forEach(function(e,o){e.textContent!=t.clockValuesAsString[o]&&(e.textContent=t.clockValuesAsString[o])})}function n(){var t=this;this.rotorLeafRear.forEach(function(e,o){if(e.textContent!=t.clockValuesAsString[o]){e.textContent=t.clockValuesAsString[o],e.parentElement.classList.add("flipped");var n=setInterval(function(){e.parentElement.classList.remove("flipped"),clearInterval(n)}.bind(t),500)}})}this.clockStrings.d=pad(this.clockValues.d,2),this.clockStrings.h=pad(this.clockValues.h,2),this.clockStrings.m=pad(this.clockValues.m,2),this.clockStrings.s=pad(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach(function(e,o){e.textContent=t.prevClockValuesAsString[o]}),this.rotorBottom.forEach(function(e,o){e.textContent=t.prevClockValuesAsString[o]}),e?(o.call(this),n.call(this)):(setTimeout(o.bind(this),500),setTimeout(n.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),t}();function pad(t,e){return(t=t.toString()).length<e?pad("0"+t,e):t}function appendChildren(t,e){e.forEach(function(e){t.appendChild(e)})};

    function SettingsPopup() {
        var desktopWidth = "1000px";
        var desktopHeight = "500px";
        var mobileWidth = "330px";
        var mobileHeight = "auto";
        var image = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1218_20210611142502128.png";
        FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image);
    }

    var campName="Kodlu Sayacli Exit int";
    function FirePopup(width, height, mWidth, mHeight, img) {
        if (!document.querySelector(".vl-popup-container")) {
            
            var style = document.createElement("style");
            style.innerHTML = `
        .vl-popup-container{
            z-index: 10000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup-overlay{
            z-index: 10000;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.8;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup{
            position:absolute;
            z-index:100001;
            width:${width};
            height:${height};
            background:white;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
        }

        .vl-popup > a > img {
            width:${width};
            height:${height};
        }

        .vl-popup-close{
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
            z-index: 100002;
            width:25px;
            height:25px;       
        }
        .vl-popup-code{
            position: absolute;
            font-size: 30px;
            color: #AA2831;
            font-weight: bold;
            text-align: center;
            width: 230px;
            top: 401px;
            right: 135px;
        }
        .vl-popup-copy{
            position: absolute;
            bottom: 10px;
            right: 130px;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
            background: #AA2831;
            color: white;
            width: 240px;
            padding: 5px;
            text-align: center;
        }
        #vl-pop-countdown{
            width: 95px;
            height: 29px;
            font-size: 30px;
            position: absolute;
            color: black;
            font-weight: bold;
            top: 100px;
            right: 200px;
        }
        .vl-flip{
            position: absolute;
            top: 250px;
            right: 387px;
            zoom: 0.5;
            width:241px !important;
        }
        .vl-pop-time-area{
            float: left;
        }
        
         .flipdown.flipdown__theme-dark{font-family:sans-serif;font-weight:700}.flipdown.flipdown__theme-dark .rotor-group-heading:before{font-size:20px;color:#000}.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):before{background-color:#151515}.flipdown.flipdown__theme-dark .rotor,.flipdown.flipdown__theme-dark .rotor-leaf-front,.flipdown.flipdown__theme-dark .rotor-top{color:#fff;background-color:#151515}.flipdown.flipdown__theme-dark .rotor-bottom,.flipdown.flipdown__theme-dark .rotor-leaf-rear{color:#efefef;background-color:#202020}.flipdown.flipdown__theme-dark .rotor:after{border-top:solid 1px #151515}.flipdown.flipdown__theme-light{font-family:sans-serif;font-weight:700}.flipdown.flipdown__theme-light .rotor-group-heading:before{font-size:23px;color:#A42037}.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):before{background-color:#ddd}.flipdown.flipdown__theme-light .rotor,.flipdown.flipdown__theme-light .rotor-leaf-front,.flipdown.flipdown__theme-light .rotor-top{color:#222;background-color:#ddd}.flipdown.flipdown__theme-light .rotor-bottom,.flipdown.flipdown__theme-light .rotor-leaf-rear{color:#333;background-color:#eee}.flipdown.flipdown__theme-light .rotor:after{border-top:solid 1px #222}.flipdown{overflow:visible;width:510px;height:110px}.flipdown .rotor-group{position:relative;float:left;padding-right:30px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{display:block;height:30px;line-height:30px;text-align:center}.flipdown .rotor-group:nth-child(1) .rotor-group-heading:before{content:'Gün'}.flipdown .rotor-group:nth-child(2) .rotor-group-heading:before{content:'Saat'}.flipdown .rotor-group:nth-child(3) .rotor-group-heading:before{content:'Dakika'}.flipdown .rotor-group:nth-child(4) .rotor-group-heading:before{content:'Saniye'}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{content:'';position:absolute;bottom:20px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{content:'';position:absolute;bottom:50px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor{position:relative;float:left;width:50px;height:80px;margin:0 5px 0 0;border-radius:4px;font-size:4rem;text-align:center;perspective:200px}.flipdown .rotor:last-child{margin-right:0}.flipdown .rotor-bottom,.flipdown .rotor-top{overflow:hidden;position:absolute;width:50px;height:40px}.flipdown .rotor-leaf{z-index:1;position:absolute;width:50px;height:80px;transform-style:preserve-3d;transition:transform 0s}.flipdown .rotor-leaf.flipped{transform:rotateX(-180deg);transition:all .5s ease-in-out}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear{overflow:hidden;position:absolute;width:50px;height:40px;margin:0;transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-leaf-front{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-leaf-rear{line-height:0;border-radius:0 0 4px 4px;transform:rotateX(-180deg)}.flipdown .rotor-top{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-bottom{bottom:0;line-height:0;border-radius:0 0 4px 4px}.flipdown .rotor:after{content:'';z-index:2;position:absolute;bottom:0;left:0;width:50px;height:40px;border-radius:0 0 4px 4px}@media (max-width:550px){.flipdown{width:312px;height:70px}.flipdown .rotor{font-size:2.2rem;margin-right:3px}.flipdown .rotor,.flipdown .rotor-bottom,.flipdown .rotor-leaf,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor:after{width:30px}.flipdown .rotor-group{padding-right:20px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{font-size:.8rem;height:20px;line-height:20px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{left:69px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{bottom:13px;height:8px;width:8px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{bottom:29px;height:8px;width:8px}.flipdown .rotor-leaf-front,.flipdown .rotor-top{line-height:50px}.flipdown .rotor,.flipdown .rotor-leaf{height:50px}.flipdown .rotor-bottom,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor:after{height:25px}}
        @media only screen and (max-width: 768px) {
            .vl-popup {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup > a > img {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup-close{
                font-size: 15px;
                line-height: 15px;
            }
        }
    `;
            document.head.append(style);

            var div = document.createElement("div");
            div.setAttribute("class", "vl-popup-container");
            div.innerHTML = `
        <div class="vl-popup-overlay"></div> 
        <div class="vl-popup">
        <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
        <img src=${img}>
        <div class="vl-popup-code">EKLE5</div>
        <div class="vl-popup-copy">KOPYALA</div>
        <div id="flipdown" class="flipdown vl-flip"></div>
        </div>
    `;
            document.body.append(div);

            document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-close").addEventListener("click", clickPopup);

            document.querySelector(".vl-popup-copy").addEventListener("click", clickPopup);

            function closePopup() {
                document.querySelector(".vl-popup-container").remove();
            }
            
            var finishDate = new Date();
            finishDate.setTime(finishDate.getTime() + (0.25 * 60 * 60 * 1000));
            var flipdown = new FlipDown(finishDate.getTime()/1000,{theme:'light'})
            .start()
            .ifEnded(() => {
            console.log('The countdown has ended!');
            });
            document.querySelectorAll(".rotor-group")[0].style.display="none";
            document.querySelectorAll(".rotor-group")[1].style.display="none";

            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            d.setTime(d.getTime() + (0.25 * 60 * 60 * 1000));
            var c = new Date(year + 20, month, day);
            document.cookie = "vlCodeCoupon2=" + d + ";path=/;expires=" + c;

            function clickPopup() {
                

                var elem = document.createElement("textarea");
                document.body.appendChild(elem);
                elem.value = "EKLE5";
                elem.select();
                document.execCommand("copy");
                document.body.removeChild(elem);
                document.querySelector(".vl-popup-copy").innerHTML = "Kopyalandı";
                document.querySelector(".vl-popup-copy").style.backgroundColor = "grey";
                couponAssistant();
                closePopup();
                <%VLSendClickFunc%>;
                ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
            }

        }
    }
    var exitCheck = false;
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 0 && exitCheck == false) {
            SettingsPopup();
            <%VLSendImpressionFunc%>;
            ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
            ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
            exitCheck=true;
        }
    
    }, false);
}
else{
    couponAssistant();
  }
  function couponAssistant(){

    

    var code ="EKLE5";
  var style=document.createElement("style");
  style.innerHTML="#vl_timer{width: 65px; height: 29px; font-size: 22px;position: relative;color: black;font-weight: bold;margin:auto;margin-top:20px;}.vl-time-area{float: left;}#assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 300px;right: 8%;background-color: white;border: 1px solid #a31f34;border-radius: 5px;}            #assistantHeader{background-color: #a31f34;color: white;width: 100%; cursor:pointer;}            #assistantHeaderText{font-size: 18px; font-weight: bold; height: 40px;width: 100%;padding: 8px;display: inline-block;text-align: center;}#assistantMinimize{opacity: 1; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}#assistantBodyText{display: block;margin: auto;width: 80%;margin-top: 15px;text-align: center;}#assistantCodeArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 20px;font-size: 20px;border: 3px dashed #a31f34;padding: 4px;font-weight: 600;}#assistantCopyButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;color: white;background-color: #a31f34;padding: 10px;border-radius: 5px;font-size: 16px; font-weight: bold;cursor: pointer;}            #assistantCloseButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;cursor: pointer;}#couponCode{width: 100%;text-align: center;border: none;font-size: 15px;color: black;font-weight: bold;}.vl-active{bottom: 0px; transition: bottom 1s;}.vl-passive{bottom: -265px; transition: bottom 1s;}            @media only screen and (max-width: 600px){#assistantContainer{margin: auto; right: 0; left:0; z-index: 10;}";
  document.head.append(style);
  
  var n = document.createElement("div");
  n.setAttribute("id", "assistantContainer"), n.setAttribute("class", "vl-active"), n.innerHTML = '<div id="assistantHeader">            <div id="assistantHeaderText">Kupon Kodunuz</div>            <div id="assistantMinimize">-</div>            </div>            <div id="assistantBody">            <div id="assistantBodyText">Kupon kodunuzu kopyalayın ve ödeme adımında uygulayın.</div>            <div id="assistantCodeArea"><input type="text" value="' + code + '" id="couponCode" readonly/></div>            <div id="assistantCopyButton">Kopyala</div>            <div id="assistantCloseButton">Kapat</div>            </div>', document.body.append(n), document.getElementById("assistantCopyButton").addEventListener("click", function() {
    document.getElementById("couponCode").select(), document.execCommand("copy"), minimizeAssistant(),document.querySelector("#assistantCopyButton").innerText="Kopyalandı";document.querySelector("#assistantCopyButton").style.backgroundColor="grey";
    
    
  }), document.getElementById("assistantHeader").addEventListener("click", function() {
    "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
  }), document.getElementById("assistantCloseButton").addEventListener("click", function() {
    document.querySelector("#assistantContainer").remove();
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    d.setTime(d.getTime() - (0.25 * 60 * 60 * 1000));
    var c = new Date(year + 20, month, day);
    document.cookie = "vlCodeCoupon2=" + d + ";path=/;expires=" + c;
  })
  ,minimizeAssistant = function() {
  document.getElementById("assistantMinimize").style.opacity = "0", document.getElementById("assistantContainer").setAttribute("class", "vl-passive")
  }, maximizeAssistant = function() {
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
  
  
  var b = check_cookie_name("vlCodeCoupon2");
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
                            document.querySelector("#assistantContainer").remove();
                            clearInterval(_interval);
                        }
                    } catch (ex) {
                        document.querySelector("#assistantContainer").remove();
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
