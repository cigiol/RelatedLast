setTimeout(function(){
    window.addEventListener("load",(function(){
        function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}var FlipDown=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(_classCallCheck(this,t),"number"!=typeof e)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(_typeof(e)," instead."));"object"===_typeof(o)&&(n=o,o="flipdown"),this.version="0.2.2",this.initialised=!1,this.now=this._getTime(),this.epoch=e,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(o),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(n),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return _createClass(t,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(t){return this.hasEndedCallback=function(){t(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(t){return{theme:t.hasOwnProperty("theme")?t.theme:"dark"}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var t=this.daysremaining<=2?2:this.daysremaining,e=0;e<t+6;e++)this.rotors.push(this._createRotor(0));var o=[];for(e=0;e<t;e++)o.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(o));var n=t;for(e=0;e<3;e++){for(var s=[],i=0;i<2;i++)s.push(this.rotors[n]),n++;this.element.appendChild(this._createRotorGroup(s))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(t){var e=document.createElement("div");e.className="rotor-group";var o=document.createElement("div");return o.className="rotor-group-heading",e.appendChild(o),appendChildren(e,t),e}},{key:"_createRotor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("figure"),s=document.createElement("figure"),i=document.createElement("div"),r=document.createElement("div");return e.className="rotor",o.className="rotor-leaf",n.className="rotor-leaf-rear",s.className="rotor-leaf-front",i.className="rotor-top",r.className="rotor-bottom",n.textContent=t,i.textContent=t,r.textContent=t,appendChildren(e,[o,i,r]),appendChildren(o,[n,s]),e}},{key:"_tick",value:function(){this.now=this._getTime();var t=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(t/86400),t-=86400*this.clockValues.d,this.clockValues.h=Math.floor(t/3600),t-=3600*this.clockValues.h,this.clockValues.m=Math.floor(t/60),t-=60*this.clockValues.m,this.clockValues.s=Math.floor(t),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function o(){var t=this;this.rotorTop.forEach(function(e,o){e.textContent!=t.clockValuesAsString[o]&&(e.textContent=t.clockValuesAsString[o])})}function n(){var t=this;this.rotorLeafRear.forEach(function(e,o){if(e.textContent!=t.clockValuesAsString[o]){e.textContent=t.clockValuesAsString[o],e.parentElement.classList.add("flipped");var n=setInterval(function(){e.parentElement.classList.remove("flipped"),clearInterval(n)}.bind(t),500)}})}this.clockStrings.d=pad(this.clockValues.d,2),this.clockStrings.h=pad(this.clockValues.h,2),this.clockStrings.m=pad(this.clockValues.m,2),this.clockStrings.s=pad(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach(function(e,o){e.textContent=t.prevClockValuesAsString[o]}),this.rotorBottom.forEach(function(e,o){e.textContent=t.prevClockValuesAsString[o]}),e?(o.call(this),n.call(this)):(setTimeout(o.bind(this),500),setTimeout(n.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),t}();function pad(t,e){return(t=t.toString()).length<e?pad("0"+t,e):t}function appendChildren(t,e){e.forEach(function(e){t.appendChild(e)})};
        function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""}
        function vlCouponCodeListener() {
            try {
                var count = 0;
                var tempInt = setInterval(() => {
                    try {
                        if (count <= 20) {
                            if (document.querySelector("#assistantCode")) {
                                if (document.querySelector("#vlTimerCouponCode")) {
                                    document.querySelector("#assistantCode").value = document.querySelector("#vlTimerCouponCode").innerText;
                                    clearInterval(tempInt);
                                }
                                else{
                                    count++; 
                                }
                            } else {
                                count++;
                            }
                        } else {
                            clearInterval(tempInt);
                        }
                    } catch (error) {
                        count++;
                    }
                }, 100);
            } catch (error) {
                console.warn("Coupon code not defined...");
            }
        }
        couponAssistant = function(){
            <%VLSendImpressionFunc%>
            var style = document.createElement("style");
            var styleText = '\
                #assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 300px;right: 8%;background-color: white;border: 1px solid #0a2240;}\
                #assistantHeader{background-color: #0a2240;color: white;width: 100%; cursor:pointer;text-transform: uppercase; transition: 1s all;display: flex;}\
                #assistantHeaderText{font-size: 18px; font-weight: bold; height: 40px;width: 85%;padding: 8px 0 8px 25px;display: inline-block;text-align: center;}\
                #plusMinus {font-size: 18px;font-weight: bold;height: 40px;width: 15%;padding: 8px 0;display: inline-block;text-align: center;}\
                #assistantMinimize{opacity: 0; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}\
                #assistantBodyText{display: block;margin: auto;width: 100%;margin-top: 10px;text-align: center;color: #0a2240;}\
                #assistantBodyText strong{font-weight: 700}\
                #assistantCounterArea{display: block;margin: auto;width: 80%;margin-top: 20px;}\
                #assistantButton{display: block;margin: auto;width: 80%;text-align: center;margin-top: 15px;color: white;background-color: #0a2240;padding: 5px 10px;font-size: 16px; font-weight: bold;cursor: pointer;}\
                #assistantdetailArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 10px;cursor: pointer; font-size: 15px;}\
                .vl-header-active{background-color: white !important;color: #0a2240 !important;padding-top: 10px;}\
                .vl-active{bottom: 0px; transition: bottom 1s;}\
                .vl-passive{bottom: -159px; transition: bottom 1s;}\
                #assistantCounterArea .rotor-group-heading{display: none !important;}\
                #assistantCounterArea .rotor{background-color: #0a2240 !important;}\
                #assistantCounterArea .rotor-leaf-rear{background-color: #0f305b !important;}\
                #assistantCounterArea .rotor-top{background-color: #0a2240 !important;}\
                #assistantCounterArea .rotor-bottom{background-color: #0f305b !important;}\
                #assistantBody {display: flex;}\
                #assistantCode {background-color: #0a2240;border:none; width: 100px; color:#fff;text-align:center;-webkit-text-fill-color:#fff;opacity: 1;}\
                #leftArea {width: 50%;}\
                #rightArea {width: 50%;}\
                @media only screen and (max-width: 600px){\
                    #assistantContainer{margin: auto; right: 0; left:0; z-index: 999;height: 200px;width: 100%;}\
                }';
            style.innerHTML = styleText;
            document.head.appendChild(style);
            var counterStyle = document.createElement("style");
            counterStyle.innerHTML = ".flipdown.flipdown__theme-dark{font-family:sans-serif;font-weight:700}.flipdown.flipdown__theme-dark .rotor-group-heading:before{color:#000}.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown.flipdown__theme-dark .rotor-group:nth-child(n+2):nth-child(-n+3):before{background-color:#151515}.flipdown.flipdown__theme-dark .rotor,.flipdown.flipdown__theme-dark .rotor-leaf-front,.flipdown.flipdown__theme-dark .rotor-top{color:#fff;background-color:#151515}.flipdown.flipdown__theme-dark .rotor-bottom,.flipdown.flipdown__theme-dark .rotor-leaf-rear{color:#efefef;background-color:#202020}.flipdown.flipdown__theme-dark .rotor:after{border-top:solid 1px #151515}.flipdown.flipdown__theme-light{font-family:sans-serif;font-weight:700}.flipdown.flipdown__theme-light .rotor-group-heading:before{color:#eee}.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown.flipdown__theme-light .rotor-group:nth-child(n+2):nth-child(-n+3):before{background-color:#ddd}.flipdown.flipdown__theme-light .rotor,.flipdown.flipdown__theme-light .rotor-leaf-front,.flipdown.flipdown__theme-light .rotor-top{color:#222;background-color:#ddd}.flipdown.flipdown__theme-light .rotor-bottom,.flipdown.flipdown__theme-light .rotor-leaf-rear{color:#333;background-color:#eee}.flipdown.flipdown__theme-light .rotor:after{border-top:solid 1px #222}.flipdown{overflow:visible;width:510px;height:110px}.flipdown .rotor-group{position:relative;float:left;padding-right:30px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{display:block;height:30px;line-height:30px;text-align:center}.flipdown .rotor-group:nth-child(1) .rotor-group-heading:before{content:'Days'}.flipdown .rotor-group:nth-child(2) .rotor-group-heading:before{content:'Hours'}.flipdown .rotor-group:nth-child(3) .rotor-group-heading:before{content:'Minutes'}.flipdown .rotor-group:nth-child(4) .rotor-group-heading:before{content:'Seconds'}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{content:'';position:absolute;bottom:20px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{content:'';position:absolute;bottom:50px;left:115px;width:10px;height:10px;border-radius:50%}.flipdown .rotor{position:relative;float:left;width:50px;height:80px;margin:0 5px 0 0;border-radius:4px;font-size:4rem;text-align:center;perspective:200px}.flipdown .rotor:last-child{margin-right:0}.flipdown .rotor-bottom,.flipdown .rotor-top{overflow:hidden;position:absolute;width:50px;height:40px}.flipdown .rotor-leaf{z-index:1;position:absolute;width:50px;height:80px;transform-style:preserve-3d;transition:transform 0s}.flipdown .rotor-leaf.flipped{transform:rotateX(-180deg);transition:all .5s ease-in-out}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear{overflow:hidden;position:absolute;width:50px;height:40px;margin:0;transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-leaf-front{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-leaf-rear{line-height:0;border-radius:0 0 4px 4px;transform:rotateX(-180deg)}.flipdown .rotor-top{line-height:80px;border-radius:4px 4px 0 0}.flipdown .rotor-bottom{bottom:0;line-height:0;border-radius:0 0 4px 4px}.flipdown .rotor:after{content:'';z-index:2;position:absolute;bottom:0;left:0;width:50px;height:40px;border-radius:0 0 4px 4px}@media (max-width:550px){.flipdown{width:312px;height:70px}.flipdown .rotor{font-size:2.2rem;margin-right:3px}.flipdown .rotor,.flipdown .rotor-bottom,.flipdown .rotor-leaf,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor:after{width:30px}.flipdown .rotor-group{padding-right:20px}.flipdown .rotor-group:last-child{padding-right:0}.flipdown .rotor-group-heading:before{font-size:.8rem;height:20px;line-height:20px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after,.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{left:69px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):before{bottom:13px;height:8px;width:8px}.flipdown .rotor-group:nth-child(n+2):nth-child(-n+3):after{bottom:29px;height:8px;width:8px}.flipdown .rotor-leaf-front,.flipdown .rotor-top{line-height:50px}.flipdown .rotor,.flipdown .rotor-leaf{height:50px}.flipdown .rotor-bottom,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top,.flipdown .rotor:after{height:25px}}";
            document.head.appendChild(counterStyle);
            var ass = document.createElement("div");
            ass.setAttribute("id", "assistantContainer");
            ass.setAttribute("class", "vl-passive");
            ass.innerHTML = '<div id="assistantHeader">\
                <div id="assistantHeaderText">İndirimin Hazır!</div>\
                <span id="plusMinus">-</span>\
                </div>\
                <div id="assistantBody">\
                <div id="leftArea">\
                <div id="assistantBodyText">Siparişini 30 dakika içinde tamamla, <strong>20TL</strong> indirimi yakala!</div>\
                <div id="assistantCounterArea"><div id="flipdown" class="flipdown" style="width: 150px !important;"></div></div></div>\
                <div id="rightArea">\
                <div id="assistantdetailArea">150 TL ve üzeri alışverişlerde geçerlidir.</div>\
                <div id="assistantButton">İndirim Kodu: <input id="assistantCode" value="12345" readonly></input></div></div>\
                </div>';
            document.body.appendChild(ass);
            document.querySelector('#assistantButton').addEventListener("click", function(){
                copyCouponCode();
                window.location = "/baskets/basket/?vl-coupon="+ document.querySelector("#assistantCode").value;+"";
                localStorage.setItem("couponCode", document.querySelector("#assistantCode").value);
                <%VLSendClickFunc%>
                
            });
            document.getElementById("assistantHeader").addEventListener("click", function(){
                if(document.getElementById("assistantContainer").getAttribute("class") === "vl-active") minimizeAssistant();
                else maximizeAssistant();
            });
            function copyCouponCode(){
                var copyText = document.querySelector("#assistantCode");
                copyText.select();
                document.execCommand("copy", false);
            }
            var productPage = document.querySelector(".col-sm-5.pr-0.single-product-content-wrap > div.product-actions-wrapper > div > div.add-to-basket-wrapper.flex-xs");
            if(getCookie("OM.timerFinish") === ""){
                var finishDate = new Date();
                finishDate.setMinutes(finishDate.getMinutes() + 30);
                var flipdown = new FlipDown(finishDate.getTime() / 1000)
                .start()
                .ifEnded(() => {
                    document.querySelector("#assistantContainer").style.opacity = "0";  
                  console.log('The countdown has ended!');
                  if (VisiParameters["OM.pv"]){
                    if (productPage){
                        productPage.style.bottom = "0";
                    }
                }
                });
                document.cookie = "OM.timerFinish=" + finishDate.getTime() + ";path=/";
                maximizeAssistant();
            }
            else{
                var finishDate = new Date(parseInt(getCookie("OM.timerFinish")));
               var flipdown = new FlipDown(finishDate.getTime() / 1000)
                .start()
                .ifEnded(() => {
                document.querySelector("#assistantContainer").style.opacity = "0";
                  console.log('The countdown has ended!');
                  if (VisiParameters["OM.pv"]){
                    if (productPage){
                        productPage.style.bottom = "0";
                    }
                }
                });
                minimizeAssistant();
            }
            document.querySelectorAll(".rotor-group")[0].style.display = "none";
            document.querySelectorAll(".rotor-group")[1].style.display = "none";
            vlCouponCodeListener();
            setTimeout(() => {
        if (!document.querySelector("#vlTimerCouponCode")) {
            if (document.querySelector("#assistantCode")) {
                if (document.querySelector("#assistantCode").value == "12345") {
                    console.log("kupon kodu kalmadı. assistant silindi");
                    document.querySelector("#assistantContainer").remove();
                }
            }
        }
    
    }, 1000);
            if (VisiParameters["OM.pv"]){
                if (productPage){
                    productPage.style.bottom = "40px";
                }
            }
        };
        minimizeAssistant = function(){
            document.getElementById("assistantContainer").setAttribute("class","vl-passive");
            document.getElementById("assistantHeader").removeAttribute("class");
            document.getElementById("plusMinus").innerText = "+";
            if (document.querySelector("#assistantContainer").className == "vl-active"){
                document.getElementById("plusMinus").innerText = "-";
            } else {
                document.getElementById("plusMinus").innerText = "+";
            }
        };
        maximizeAssistant = function(){
            
            document.getElementById("assistantContainer").setAttribute("class","vl-active");
            document.getElementById("assistantHeader").setAttribute("class","vl-header-active");
            document.getElementById("plusMinus").innerText = "-";
            if (document.querySelector("#assistantContainer").className == "vl-active"){
                document.getElementById("plusMinus").innerText = "-";
            } else {
                document.getElementById("plusMinus").innerText = "+";
            }
        };
        exec = function(){
            if(window.location.pathname.indexOf("checkout") > -1) return false;
            else couponAssistant();
        };
        exec();
        setTimeout(() => {
        var isCart = document.querySelector(".js-basket-container.basket-detail-area.col-sm-12.pl-reset.pl-reset-mob > div.col-sm-4.order-set.pl-reset-mob > div > div.discount-c-p > div > form > div > input[type=text]");
            if (isCart){
                document.getElementById("assistantContainer").style.display = "none";
                document.querySelector("#vlTimerCouponCode").style.display = "none";
                console.log("sepet sayfası");
                let params = (new URL(document.location)).searchParams;
                let name = params.get('vl-coupon');
                console.log("kupon kodu: "+ name);
                if (name != null) {
                    console.log("urlden kod alındı ve iscart içerisine eklendi");
                    isCart.value = name; 
                } else {
                    console.log("url de kod olmadığından local storageden alındı");
                    isCart.value = localStorage.getItem("couponCode");
                }
            }
        }, 1000);
    })());
    },10000);