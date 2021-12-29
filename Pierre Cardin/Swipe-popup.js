setTimeout(() => {
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
        margin-top: 10px;
        margin-bottom: 20px;
        background: #f6f5f5;
        border-radius: 3px;
        width: 70px;
        height: 6px;
    }
    .vl-swipe-popup-camps{
        padding: 10px 0;
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
        color: #A4A8AE;
        font-size: 14px;
    }
    .vl-swipe-popup-title {
        font-size: 17px;
    }
    .vl-swipe-popup-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .vl-swipe-popup-accept {
        background: #B80032;
        color: white;
        padding: 8px 0;
        border-radius: 2px;
        width: 30%;
        flex: 1;
        text-align: center;
        margin-right: 10px;
    }
    .vl-swipe-popup-cancel {
        background: #EFF1F7;
        color: #A4A8AE;
        padding: 8px 0;
        border-radius: 2px;
        width: 30%;
        flex: 1;
        text-align: center;
        margin-left: 10px;
    }
`;

document.head.append(style);

var div = document.createElement("div");
div.id = "vl-swipe-popup-container";
div.innerHTML = `
    <div class="vl-swipe-popup-overlay"></div> 
    <div id="vl-swipe-popup">
        <div class="vl-swipe-popup-close"></div> 
        <div class="vl-swipe-popup-title"><b>Üye olmayı Unutma</b>😊</div>
        <div class="vl-swipe-popup-camps">
        <div class="vl-swipe-popup-camp"><img class="vl-swipe-popup-img" src="http://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/ikon2.png"><div class="vl-swipe-popup-text">Üyeliğine Özel İndirimler</div></div>
        <div class="vl-swipe-popup-camp"><img class="vl-swipe-popup-img" src="http://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/ikon4.png"><div class="vl-swipe-popup-text">Hızlı Kargo – Kolay İade</div></div>
        <div class="vl-swipe-popup-camp"><img class="vl-swipe-popup-img" src="http://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/ikon.png"><div class="vl-swipe-popup-text">Taksit imkanı</div></div>
        <div class="vl-swipe-popup-camp"><img class="vl-swipe-popup-img" src="http://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/ikon3.png"><div class="vl-swipe-popup-text">Favorilerine özel indirimlerden yararlan</div></div>
        </div>
        <div class="vl-swipe-popup-buttons">
        <div class="vl-swipe-popup-accept">Üye Ol</div>
        <div class="vl-swipe-popup-cancel">Vazgeç</div>
        </div>
    </div>
`;
document.body.append(div);

var campName = "Mobile-Register-Swipe-Popup";
ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
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
        window.location.href = "https://www.pierrecardin.com.tr/login/";
    }, 200);
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
}, 5000);