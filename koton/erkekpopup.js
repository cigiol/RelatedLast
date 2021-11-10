var campName = "vl-lastproductviewmale";
var cappingName = "vl-lastproductviewmalecapping";
function getCookie(e) { for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) { for (var r = t[o]; " " == r.charAt(0);)r = r.substring(1); if (0 == r.indexOf(n)) return r.substring(n.length, r.length) } return "" }
if (getCookie(campName) && !getCookie(cappingName)) {
    var count = parseInt(getCookie(campName));
    if(count>3){
        SettingsPopup();
        SetCookie(cappingName,24);
    }
    
}

function SetCookie(cookieName, hours) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 1 * 60 * 60 * 1000);
    document.cookie = cookieName + "=false;expires=" + date + ";path=/";
}


function SettingsPopup() {
    var desktopWidth = "600px";
    var desktopHeight = "auto";
    var mobileWidth = "320px";
    var mobileHeight = "auto";
    var image = "https://img.visilabs.net/banner/uploaded_images/252_1253_20210216133625530.jpg";
    var url = "https://www.koton.com/tr/kadin/giyim/ust-giyim/sweatshirt/c/M01-C02-N01-AK101-K100114";
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

        function clickPopup() {
            //VLSENDCLİCK
        }
        //VLSENDIMPRESSION
    }
}


