var campName="Exit-Intent-Popup";
ga("create", "UA-160804892-1", {name: "RMC", cookieDomain: "auto"});

function SetCookie(cookieName, hours) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 1 * 60 * 60 * 1000);
    document.cookie = cookieName + "=false;expires=" + date + ";path=/";
}

if (document.cookie.indexOf(campName) === -1) {
    
    var exitCheck = false;
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
                  SetCookie(campName, 24);
              }
          }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    
    }, false);
    
    }, 100);
    
}
function SettingsPopup() {
    var desktopWidth = "600px";
    var desktopHeight = "400px";
    var mobileWidth = "300px";
    var mobileHeight = "400px";
    var image = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/300_1292_20210504135203802.jpg";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image);
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
        <img src=${img}>
        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        document.querySelector(".vl-popup").addEventListener("click", clickPopup);

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
            FireKulak();
        }

        function clickPopup(){
            //VLSENDCLİCK
            ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
        }
        //VLSENDIMPRESSION
        ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    }
}

function FireKulak(){
    var style=document.createElement("style");
    style.innerHTML=`
        #vl-afterpopup{
            position:fixed;
            bottom:0;
            right:0;
            z-index:999999999;
        }
        .vl-kulak-close{
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
            z-index: 100002;
            width:25px;
            height:25px;       
        }
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id","vl-afterpopup");
    div.innerHTML=`
        <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/300_1292_20210504143147542.jpg">
        <img class="vl-kulak-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
    `;
    document.body.append(div);
    document.querySelector(".vl-kulak-close").addEventListener("click",function(){
        div.remove();
    });
}

      
