var targetName = "vl-kid-done";
function SettingsPopup() {
    var desktopWidth = "1000px";
    var desktopHeight = "500px";
    var mobileWidth = "300px";
    var mobileHeight = "400px";
    var image = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1216_20210420105852780.gif";
    var imageMobile = "http://img.euromsg.net/74C9BB1BBC5D4AB89DFCFDA808111C2E/images/300x400g.gif";
    if (window.innerWidth > 600) {
        FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image);
    }
    else {
        FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, imageMobile);
    }
    function SetCookie(cookieName, hours) {
        var date = new Date();
        date.setTime(date.getTime() + hours * 1 * 60 * 60 * 1000);
        document.cookie = cookieName + "=false;expires=" + date + ";path=/";
    }

    if (document.cookie.indexOf(targetName) === -1) {
        SetCookie(targetName, 100);
    }
}

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
            width: 260px;
            top: 365px;
            right: 162px;
        }
        .vl-popup-copy{
            position: absolute;
            bottom: 41px;
            right: 170px;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
            background: #AA2831;
            color: white;
            width: 240px;
            padding: 5px;
            text-align: center;
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
            .vl-popup-code{
                position: absolute;
                font-size: 17px;
                color: #AA2831;
                font-weight: bold;
                text-align: center;
                width: 120px;
                top: 170px;
                right: 88px;
            }
            .vl-popup-copy{
                position: absolute;
                bottom: 186px;
                right: 103px;
                font-size: 11px;
                font-weight: bold;
                cursor: pointer;
                background: #AA2831;
                color: white;
                width: 90px;
                padding: 5px;
                text-align: center;
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
        <div class="vl-popup-code">PUZZLE10</div>
        <div class="vl-popup-copy">KOPYALA</div>
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
            <%VLSendClickFunc%>;
        }
        <%VLSendImpressionFunc%>;
        document.querySelector(".vl-popup-copy").addEventListener("click",function(){
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            d.setTime(d.getTime() + (0.25 * 60 * 60 * 1000));
            var c = new Date(year + 20, month, day);
            document.cookie = "vlKidCode=" + d + ";path=/;expires=" + c;

            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = "PUZZLE10";
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            document.querySelector(".vl-popup-copy").innerHTML = "Kopyalandı";
            document.querySelector(".vl-popup-copy").style.backgroundColor = "grey";
             <%VLSendClickFunc%>;
        });
    }
}
if (document.cookie.indexOf(targetName) === -1 && parseInt(VisiParameters["OM.pviv"]) > 2) {

    var style = document.createElement("style");
    style.innerHTML = `
    #vl-kid-puzzle{
        position:fixed;
        bottom:0;
        right:0;
        cursor:pointer;
        z-index: 999999999999;
    }
    @media only screen and (max-width: 768px) {
        #vl-kid-puzzle{
            bottom: 50px;
        }
    }
`;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-kid-puzzle");
    div.innerHTML = `
    <img src="http://img.euromsg.net/74C9BB1BBC5D4AB89DFCFDA808111C2E/images/150x150.png">
`;
    document.body.append(div);
    div.addEventListener("click", function(){
        SettingsPopup();
        div.remove();
    });
}