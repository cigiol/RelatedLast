function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}
var campName="Mobile-Exit-Intent-13.08.21";
var checkCookie = check_cookie_name("vlExitCodeExpire");
if (!checkCookie) {

    function SettingsPopup() {
        var desktopWidth = "1000px";
        var desktopHeight = "500px";
        var mobileWidth = "300px";
        var mobileHeight = "400px";
        var image = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/359_1370_20210813104726852.jpg";
        var url = "";
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

        .vl-copy-button{
            position: absolute;
            background: #A61E36;
            right: 467px;
            bottom: 56px;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding: 5px;
            cursor: pointer;
            width: 170px;
            text-align: center;
            opacity: 0;
        }

        .vl-code{
            position: absolute;
            color: white;
            bottom: 110px;
            left: 38px;
            font-weight: bold;
            font-size: 32px;
            width: 220px;
            text-align: center;
        }

        .vl-popup-close{
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            z-index: 100002;
            width: 25px;
            height: 25px;
            opacity: 1;    
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
        <a href="https://www.cacharel.com.tr/tum-alisverislerde-kampanya/">
        <img src=${img}>
        </a>
        </div>
    `;
            document.body.append(div);

            document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

            function closePopup() {
                document.querySelector(".vl-popup-container").remove();
            }

            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            d.setTime(d.getTime() + (0.5 * 60 * 60 * 1000));
            var c = new Date(year, month, day + 1);
            document.cookie = "vlExitCodeExpire=" + d + ";path=/;expires=" + c;

            div.querySelector("a").addEventListener("click",function(){
                <%VLSendClickFunc%>
                ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
            });

        }
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
                    SettingsPopup();
                    <%VLSendImpressionFunc%>;
                    ga("create", "UA-5051374-3", {name: "RMC", cookieDomain: "auto"});
                    ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
                    exitCheck=true;
                 
              }
          }
      }
      lastScrollTop = st <= 0 ? 0 : st;
  
  }, false);

}
