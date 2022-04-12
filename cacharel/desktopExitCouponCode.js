function exitCouponCode() {
    var couponCode = "10APP";
    var style = document.createElement("style");

    style.innerHTML = `
        #vl-swipe-popup{
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            bottom: -280px;
            width: 712px;
            background: white;
            z-index: 9999999;
            transition: bottom 1s;
            padding: 0 20px;
            border-radius: 10px 10px 0 0;
            font-family: 'Roboto';
            margin: auto;
            left: calc(50% - 306px);
            height: 66px;
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
        .vl-swipe-popup-camps{
            display: none;
        }
        .vl-swipe-popup-camp {
            display: flex;
            align-items: center;
        }
        img.vl-swipe-popup-img {
            width: 20px;
            margin-right: 5px;
        }
        .vl-active{
            display:block !important;
        }
        .vl-passive{
            display:none !important;
        }
        .vl-swipe-popup-text {
            color: black;
            font-size: 15px;
            width: 500px;
            margin: auto;
            text-align: center;
            line-height: 20px;
        }
        .vl-swipe-popup-title {
            font-size: 15px;
            font-weight: bold;
        }
        .vl-swipe-popup-buttons {
            display: flex;
            justify-content: space-around;
            font-size: 12px;
            width: 360px;
            -webkit-transition: width 1s;
            -moz-transition: width 1s;
            -o-transition: width 1s;
            transition: width 1s;
        }
        .vl-swipe-popup-copy{
            width: 140px;
            display: flex;
            align-items: center;
            border: dotted 1px #404040;
            border-radius: 2px;
            padding: 8px 10px;
            -webkit-transition: background-color 1s ease-out;
            -moz-transition: background-color 1s ease-out;
            -o-transition: background-color 1s ease-out;
            transition: background-color 1s ease-out;
            -webkit-transition: color 1s ease-out;
            -moz-transition: color 1s ease-out;
            -o-transition: color 1s ease-out;
            transition: color 1s ease-out;
            -webkit-transition: width 1s;
            -moz-transition: width 1s;
            -o-transition: width 1s;
            transition: width 1s;
            cursor:pointer;
        }
        .vl-copied{
            background: green;
            color: white;
            width: 85px;
        }
        .vl-swipe-popup-accept {
            font-weight: bold;
            background: #282828;
            color: white;
            padding: 8px 10px;
            border-radius: 2px;
            text-align: center;
            display: flex;
            align-items: center;
            cursor:pointer;
        }
        .vl-swipe-popup-cancel {
            font-weight: bold;
            background: white;
            color: black;
            padding: 8px 10px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            text-align: center;
            border: solid 1px #282828;
            cursor:pointer;
        }
    `;

    document.head.append(style);

    var div = document.createElement("div");
    div.id = "vl-swipe-popup-container";
    div.innerHTML = `
        <div class="vl-swipe-popup-overlay"></div> 
        <div id="vl-swipe-popup">
            <div class="vl-swipe-popup-title">Cacharel App Ayrıcalıkları</div>
            <div class="vl-swipe-popup-camps">
            <div class="vl-swipe-popup-camp"><div class="vl-swipe-popup-text">Cacharel App’i İndirin Alışverişini app’ten tamamlayın, <b>%10 İndirim</b> Kazanın!</div></div>
            </div>
            <div class="vl-swipe-popup-buttons">
            <div class="vl-swipe-popup-copy">KUPON KODU : <b>10APP</b></div>
            <div class="vl-swipe-popup-accept">AYRICALIKLAR</div>
            <div class="vl-swipe-popup-cancel">KAPAT</div>
            </div>
        </div>
    `;
    document.body.append(div);

    var campName = "Desktop-Exit-Coupon-Code";
    //ga("create", "UA-5051374-3", {name: "RMC", cookieDomain: "auto"});
    //ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    //<%VLSendImpressionFunc%>;

    setTimeout(() => {
        document.querySelector("#vl-swipe-popup").style.bottom = '0px';
    }, 300);


    document.querySelector(".vl-swipe-popup-overlay").addEventListener("click", () => {
        closePopup();
    });
    document.querySelector(".vl-swipe-popup-accept").addEventListener("click", () => {
        //ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
        //<%VLSendClickFunc%>;
        document.querySelector(".vl-swipe-popup-camps").classList.add("vl-active");
        document.querySelector(".vl-swipe-popup-accept").classList.add("vl-passive");
        document.querySelector("#vl-swipe-popup").style=`flex-direction: column;height: 147px;justify-content: space-evenly;align-items: baseline;bottom:0px;`;
        if(document.querySelector(".vl-swipe-popup-copy.vl-copied"))
            document.querySelector(".vl-swipe-popup-buttons").style=`justify-content: space-between;width: 160px;`;
        else
            document.querySelector(".vl-swipe-popup-buttons").style=`justify-content: space-between;width: 220px;`;
    });
    document.querySelector(".vl-swipe-popup-copy").addEventListener("click", () => {
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = couponCode;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        //ga('RMC.send', 'event', 'RMC', campName, "Copy", {nonInteraction: true});
        document.querySelector(".vl-swipe-popup-copy").innerHTML = "Kopyalandı!";
        document.querySelector(".vl-swipe-popup-copy").classList.add("vl-copied");
        if(document.querySelector(".vl-swipe-popup-camps.vl-active"))
            document.querySelector(".vl-swipe-popup-buttons").style=`width: 160px;`;
        else
            document.querySelector(".vl-swipe-popup-buttons").style=`width: 280px;`;
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

}
var exitCheck = false;
document.addEventListener("mouseleave", function (e) {
    if (e.clientY < 0 && exitCheck == false) {
        exitCouponCode();
        exitCheck = true;

    }

}, false);