function SettingsPopup() {
    var desktopWidth = "1000px";
    var desktopHeight = "auto";
    var mobileWidth = "330px";
    var mobileHeight = "auto";
    var image = "https://img.visilabs.net/banner/uploaded_images/230_1216_20210304170617439.jpg";
    var url = "https://tr.uspoloassn.com/kadin-tum-urunler/";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image, url);
}

SettingsPopup();
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

        .vl-copy-button{
            position: absolute;
            background: #A61E36;
            right: 130px;
            bottom: 70px;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding: 5px;
            cursor: pointer;
        }

        .vl-code{
            position: absolute;
            color: #A61E36;
            bottom: 108px;
            right: 142px;
            font-weight: bold;
            font-size: 20px;
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
        <img src=${img}>
        </a>
        <div class="vl-code">DENEME</div>
        <div class="vl-copy-button">KOPYALA</div>
        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        document.querySelector(".vl-popup").addEventListener("click", clickPopup);
        document.querySelector(".vl-copy-button").addEventListener("click", copyCode);

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }

        function copyCode(){
            var copyText = "DENEME";
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = copyText;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            alert("Kupon kodunuz kopyalanmıştır");
        }

        function clickPopup(){
            //VLSENDCLİCK
        }
        //VLSENDIMPRESSION
    }
}


