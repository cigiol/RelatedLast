function exitCouponCode() {
    var couponCode = "10APP";
    var style = document.createElement("style");

    style.innerHTML = `
        #vl-swipe-popup{
            position: fixed;
            bottom: -280px;
            left: 0;
            width: 100%;
            background: white;
            z-index: 9999999;
            transition: bottom 1s;
            padding: 0 20px;
            border-radius: 10px 10px 0 0;
            font-family: 'Roboto';
        }
        .vl-swipe-popup-overlay{
            z-index: 9999998;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.5;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-swipe-popup-close{
            color: #A4A8AE;
            font-weight: bold;
            text-align: center;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            background: #f6f5f5;
            border-radius: 3px;
            width: 70px;
            height: 6px;
        }
        .vl-swipe-popup-camps{
            padding: 30px 0 20px 0;
        }
        .vl-swipe-popup-camp {
            display: flex;
            margin: 15px 0;
            align-items: center;
        }
        img.vl-swipe-popup-img {
            width: 20px;
            margin-right: 5px;
        }
        .vl-swipe-popup-text {
            color: black;
            font-size: 15px;
            width: 300px;
            margin: auto;
            text-align: center;
            line-height: 20px;
        }
        .vl-swipe-popup-title {
            font-size: 17px;
        }
        .vl-swipe-popup-buttons {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 65px;
            font-size:12px;
        }
        .vl-swipe-popup-copy{
            width: 136px;
            display: flex;
            align-items: center;
            border: dotted 1px #404040;
            border-radius: 2px;
            padding: 8px 8px;
            -webkit-transition: background-color 1s ease-out;
            -moz-transition: background-color 1s ease-out;
            -o-transition: background-color 1s ease-out;
            transition: background-color 1s ease-out;
            -webkit-transition: color 1s ease-out;
            -moz-transition: color 1s ease-out;
            -o-transition: color 1s ease-out;
            transition: color 1s ease-out;
            -webkit-transition: width 1s ;
            -moz-transition: width 1s ;
            -o-transition: width 1s ;
            transition: width 1s ;
        }
        .vl-swipe-popup-accept {
            font-weight: bold;
            background: #282828;
            color: white;
            padding: 8px 8px;
            border-radius: 2px;
            text-align: center;
            display: flex;
            align-items: center;
        }
        .vl-swipe-popup-cancel {
            font-weight: bold;
            background: white;
            color: black;
            padding: 8px 8px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            text-align: center;
            border: solid 1px #282828;
        }
        @media only screen and (max-width: 321px) {
            .vl-swipe-popup-buttons {
                font-size:11px;
            }
            .vl-swipe-popup-copy{
                width: 127px;
            }
        }
    `;

    document.head.append(style);

    var div = document.createElement("div");
    div.id = "vl-swipe-popup-container";
    div.innerHTML = `
        <div class="vl-swipe-popup-overlay"></div> 
        <div id="vl-swipe-popup">
            <div class="vl-swipe-popup-close"></div> 
            <div class="vl-swipe-popup-camps">
            <div class="vl-swipe-popup-camp"><div class="vl-swipe-popup-text">Cacharel App’i İndirin Alışverişini app’ten tamamlayın, <b>%10 İndirim</b> Kazanın!</div></div>
            </div>
            <div class="vl-swipe-popup-buttons">
            <div class="vl-swipe-popup-copy">KUPON KODU : <b>10APP</b></div>
            <div class="vl-swipe-popup-accept">HEMEN İNDİR</div>
            <div class="vl-swipe-popup-cancel">KAPAT</div>
            </div>
        </div>
    `;
    document.body.append(div);

    var campName = "Mobile-Exit-Coupon-Code";
    ga("create", "UA-5051374-3", {name: "RMC", cookieDomain: "auto"});
    ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    <%VLSendImpressionFunc%>;

    setTimeout(() => {
        document.querySelector("#vl-swipe-popup").style.bottom = '0px';
    }, 300);


    document.querySelector(".vl-swipe-popup-overlay").addEventListener("click", () => {
        closePopup();
    });
    document.querySelector(".vl-swipe-popup-accept").addEventListener("click", () => {
        ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
        <%VLSendClickFunc%>;
        setTimeout(() => {
            window.location.href = "https://www.cacharel.com.tr/";
        }, 200);
    });
    document.querySelector(".vl-swipe-popup-copy").addEventListener("click", () => {
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = couponCode;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        ga('RMC.send', 'event', 'RMC', campName, "Copy", {nonInteraction: true});
        document.querySelector(".vl-swipe-popup-copy").innerHTML = "Kopyalandı!";
        document.querySelector(".vl-swipe-popup-copy").style = `background: green;color: white;`;
        if (innerWidth < 321)
            document.querySelector(".vl-swipe-popup-copy").style.width = `76px`;
        else
            document.querySelector(".vl-swipe-popup-copy").style.width = `80px`;

    });
    document.querySelector(".vl-swipe-popup-cancel").addEventListener("click", () => {
        closePopup();
    });

    const closePopup = () => {
        document.querySelector("#vl-swipe-popup").style.bottom = '-300px';
        setTimeout(() => {
            div.remove();
        }, 1000);
    };


    div.addEventListener('touchstart', handleTouchStart, false);
    div.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||
            evt.originalEvent.touches;
    };

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
            } else {
            }
        } else {
            if (yDiff > 0) {
            } else {
                console.log(yDiff);
                closePopup();
            }
        }
        xDown = null;
        yDown = null;
    };

}
var exitCheck = false;
var lastScrollTop = 0;
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
document.addEventListener("scroll", function () {

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
    } else {
        if (checkScrollSpeed() <= -80) {
            if (!exitCheck) {
                exitCouponCode();
                exitCheck = true;

            }
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;

}, false);