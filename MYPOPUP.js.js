function SettingsPopup() {
    var desktopWidth = "400px";
    var desktopHeight = "auto";
    var mobileWidth = "250px";
    var mobileHeight = "auto";
    var image = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1218_20211117155636432.jpg";
    var mImage = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1218_20211117155625246.jpg";
    var url = "https://www.pierrecardin.com.tr/";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image, mImage, url);
}

SettingsPopup();
function FirePopup(width, height, mWidth, mHeight, img, mImg, link) {
    if (!document.querySelector(".vl-popup-container")) {
        var isMobile = window.innerWidth < 600;
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
        <a href=${link}>
        <img src=${isMobile ? mImg : img}>
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


