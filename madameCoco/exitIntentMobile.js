function SettingsPopup() {
    var desktopWidth = "700px";
    var desktopHeight = "auto";
    var mobileWidth = "100%";
    var mobileHeight = "auto";
    var image = "https://img.visilabs.net/banner/uploaded_images/3_3_20210226121129138.jpg";
    var url = "https://www.madamecoco.com/kampanyalar";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image, url);
}

function FirePopup(width, height, mWidth, mHeight, img, link) {
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
        }

        .vl-popup > a > img {
            width:${width};
            height:${height};
        }

        .vl-popup-close{
            position: absolute;
            right: 9px;
            top: 9px;
            cursor: pointer;
            z-index: 100002;
            width: 40px;
            height: 40px;
            opacity: 0;     
        }
        @media only screen and (max-width: 768px) {
            .vl-popup {
                width:${mWidth};
                height:${mHeight};
                left: 0;
                bottom: 0;
            }
            .vl-popup > a > img {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup-close{
                width: 30px;
                height: 30px;
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
        <a href=${link}>
        <img src=${img}>
        </a>
        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        document.querySelector(".vl-popup").addEventListener("click", clickPopup);

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }

        function clickPopup(){
            //VLSENDCLİCK
        }
        //VLSENDIMPRESSION
    }
}

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

var exitCheck = false;
var lastScrollTop = 0;
setTimeout(() => {
    
window.addEventListener("scroll", function () {

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log("down scrolling")
    } else {
        if (checkScrollSpeed() <= -80) {
            if (!exitCheck) {
                exitCheck = true;
                SettingsPopup();
            }
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;

}, false);

}, 10000);

