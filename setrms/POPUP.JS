var cookieName = "vl-popup-visited";
var sideCloseCookieName = "vl-side-closed";
function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}

function SettingsPopup() {
    var desktopWidth = "600px";
    var desktopHeight = "auto";
    var mobileWidth = "300px";
    var mobileHeight = "auto";
    var image = "https://img.visilabs.net/banner/uploaded_images/315_1314_20201216132910656.png";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image);
}
if (document.cookie.indexOf(cookieName) === -1) {
    if (window.innerWidth > 599) {
        var once = true;
        document.addEventListener("mouseleave", function (e) {
            if (e.clientY < 0 && once) {
                once = false;
                SettingsPopup();
            }
        });
    }
    else {
        var once = true;
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
        try {
            var lastScrollTop = 0;
            window.addEventListener("scroll", function () {


                var st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                    console.log("down scrolling")
                } else {
                    if (checkScrollSpeed() <= -80) {
                        if (once) {
                            once = false;
                            SettingsPopup();
                        }
                    }
                }
                lastScrollTop = st <= 0 ? 0 : st;

            }, false);

        } catch (ex) {
        }

    }
}
else {
    if (!document.querySelector(".vl-popup-container") && document.cookie.indexOf(sideCloseCookieName) === -1) {
        
        var sideCountDownDate = check_cookie_name(cookieName);
        if (sideCountDownDate) {
            sideCountDownDate= new Date(sideCountDownDate);
            var now = new Date();
            var distance = sideCountDownDate.getTime() - now.getTime();
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance > 0) {
                if (minutes >= 0) {
                    if (seconds >= 0) {
                        var _interval = setInterval(function () {
                            try {
                                var now = new Date();
                                var distance = sideCountDownDate.getTime() - now.getTime();
                                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                minutes = minutes < 10 ? '0' + minutes : minutes;
                                seconds = seconds < 10 ? '0' + seconds : seconds;
                                document.querySelector("#vl-side-min .minutes").innerText = "" + minutes;
                                document.querySelector("#vl-side-sec .seconds").innerText = "" + seconds;
                                if (distance < 0) {
                                    document.querySelector("#vl-side-bar").remove();
                                    clearInterval(_interval);
                                }
                            } catch (ex) {
                                clearInterval(_interval);
                                console.log(ex);
                                return false;
                            }
                        }, 1000);
                    }
                }
            }
            var style = document.createElement("style");
            style.innerHTML = `
            #vl-side-bar{
                position: fixed;
                right: 0px;
                top: 45%;
                z-index: 10000;
                cursor:pointer;
            }
            #vl-side-timer{
                width: 70px;
                height: 20px;
                font-size: 14px;
                position: absolute;
                top: 12px;
                left: 54px;
                color: black;
                font-weight: 600;
            }
            .vl-side-time-area{
                float: left;
                text-align: center;
                background: white;
                margin-right: 10px;
                width: 20px;
            }
            #vl-side-close{
                position: absolute;
                right: 5px;
                top: 5px;
                border-radius: 50%;
                border: 2px solid white;
                color: white;
                cursor: pointer;
                z-index: 100002;
                font-size: 15px;
                line-height: 15px;
                font-weight: 600;
                padding: 2px;
            }
            @media only screen and (max-width: 768px) {
                
            }
        `;
            document.head.append(style);
            var sideBar = document.createElement("div");
            sideBar.setAttribute("id", "vl-side-bar");
            sideBar.innerHTML = `
            <div id="vl-side-close">X
            </div> 
            <div id="vl-side-timer">
                <div id="vl-side-min" class="vl-side-time-area">
                    <span class="minutes timeCounterSpan">00</span>
                </div>
                <div id="vl-side-sec" class="vl-side-time-area">
                    <span class="seconds timeCounterSpan">00</span>
                </div>
            </div>
            <img src="https://img.visilabs.net/banner/uploaded_images/315_1314_20201216150225566.png">
        `;
            document.body.append(sideBar);
            <%VLSendImpressionFunc%>;
            sideBar.addEventListener("click",function(){
                var copyText = "STRINDIRIM10";
                var elem = document.createElement("textarea");
                document.body.appendChild(elem);
                elem.value = copyText;
                elem.select();
                document.execCommand("copy");
                document.body.removeChild(elem);
                <%VLSendClickFunc%>;
                alert("Kupon kodunuz kopyalanmıştır");
            });
            document.querySelector("#vl-side-close").addEventListener("click",function(){
                <%VLSendClickFunc%>;
                document.cookie = sideCloseCookieName + "=" + sideCountDownDate + ";path=/";
                document.querySelector("#vl-side-bar").remove();
                clearInterval(_interval);
            });
        }

    }
}
function FirePopup(width, height, mWidth, mHeight, img, link) {


    var countDownDate = new Date();
    var expireDate = countDownDate;
    expireDate.setMonth(expireDate.getMonth() + 1);
    countDownDate.setMinutes(countDownDate.getMinutes() + 30);
    document.cookie = cookieName + "=" + countDownDate + ";expires=" + expireDate + ";path=/";
    var now = new Date();
    var distance = countDownDate.getTime() - now.getTime();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes >= 0) {
        if (seconds >= 0) {
            var _interval = setInterval(function () {
                try {
                    var now = new Date();
                    var distance = countDownDate.getTime() - now.getTime();
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    seconds = seconds < 10 ? '0' + seconds : seconds;
                    document.querySelector("#vl-popup-min .minutes").innerText = "" + minutes;
                    document.querySelector("#vl-popup-sec .seconds").innerText = "" + seconds;
                    if (distance < 0) {
                        document.querySelector(".vl-popup-container").remove();
                        clearInterval(_interval);
                    }
                } catch (ex) {
                    clearInterval(_interval);
                    console.log(ex);
                    return false;
                }
            }, 1000);
        }
    }


    if (!document.querySelector(".vl-popup-container")) {
        var style = document.createElement("style");
        style.innerHTML = `
        #vl-popup-copy-button{
            position: absolute;
            bottom: 130px;
            height: 40px;
            width: 220px;
            left: 40px;
            cursor: pointer;
        }

        #vl-popup-timer{
            width: 148px;
            height: 20px;
            font-size: 25px;
            position: absolute;
            top: 188px;
            left: 102px;
            color: white;
            font-weight: 600;
        }
        .vl-popup-time-area{
            float: left;
            text-align: center;
            background: black;
            margin-right: 15px;
            width: 40px;
        }
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
        .vl-popup-close{
            position: absolute;
            right: 5px;
            top: 5px;
            border-radius: 50%;
            border: 2px solid white;
            color: white;
            cursor: pointer;
            z-index: 100002;
            font-size: 20px;
            line-height: 20px;
            font-weight: 600;
            padding: 2px;
        }
        @media only screen and (max-width: 768px) {
            #vl-popup-copy-button{
                position: absolute;
                bottom: 65px;
                height: 20px;
                width: 110px;
                left: 20px;
                cursor: pointer;
            }
    
            #vl-popup-timer{
                width: 148px;
                height: 20px;
                font-size: 14px;
                position: absolute;
                top: 93px;
                left: 50px;
                color: white;
                font-weight: 600;
            }
            .vl-popup-time-area{
                float: left;
                text-align: center;
                background: black;
                margin-right: 10px;
                width: 20px;
            }
            .vl-popup {
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
        <div class="vl-popup-close">X</div>
        <div id="vl-popup-timer">
            <div id="vl-popup-min" class="vl-popup-time-area">
	            <span class="minutes timeCounterSpan">00</span>
	        </div>
	        <div id="vl-popup-sec" class="vl-popup-time-area">
	            <span class="seconds timeCounterSpan">00</span>
            </div>
        </div>
        <div id="vl-popup-copy-button">
        </div>
        <img src=${img}>
        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        document.querySelector("#vl-popup-copy-button").addEventListener("click", clickPopup);

        function closePopup() {
            clearInterval(_interval);
            document.querySelector(".vl-popup-container").remove();
        }

        function clickPopup() {
            var copyText = "STRINDIRIM10";
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = copyText;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            closePopup();
            <%VLSendClickFunc%>;
            alert("Kupon kodunuz kopyalanmıştır");
        }
        <%VLSendImpressionFunc%>;
    }
}


