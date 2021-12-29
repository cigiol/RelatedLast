(function () {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function () {
        SettingsPopup();
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

function SettingsPopup() {
    var rewardImg = "https://cdn-mgsm.akinon.net/products/2020/12/16/101172/9839198b-6fb0-417d-8a7c-1b828ae93bc1_size1400x1400_quality100_cropCenter.jpg";
    var desktopWidth = "630px";
    var desktopHeight = "630px";
    var mobileWidth = "312px";
    var mobileHeight = "312px";
    var image = "https://cdn-mgsm.akinon.net/products/2021/01/18/92408/ef4b876c-4aac-4653-85e6-99517b69238f_size1400x1400_quality100_cropCenter.jpg";
    var url = "google.com";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image, url, rewardImg);
}

function FirePopup(width, height, mWidth, mHeight, img, link, rewardImage) {
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
            border-radius: 50%;
            border: 2px solid black;
            color: black;
            cursor: pointer;
            z-index: 100002;
            font-size: 20px;
            line-height: 20px;
            font-weight: 600;
            padding: 2px;
        }

        .vl-card-row{
            display:flex;
            flex-direction:row;
        }

        .flip-card {
            background-color: transparent;
            width: 200px;
            height: 200px;
            perspective: 1000px;
            margin:5px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 2s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        }
        
        
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .flip-card-front {
          background-color: #bbb;
          color: black;
        }
        
        .flip-card-back {
          background-color: #2980b9;
          color: white;
          transform: rotateY(180deg);
        }
        @media only screen and (max-width: 768px) {

            .flip-card {
                width:100px;
                height:100px;
                margin:2px;
            }

            .vl-popup {
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
        var divString = `<div class="vl-popup-overlay"></div> 
        <div class="vl-popup">
        <div class="vl-popup-close">X</div>`;

        var r = Math.floor(Math.random() * 9);
        var r2 = Math.floor(Math.random() * 9);
        while (r2 == r) {
            console.log(r, r2);
            r2 = Math.floor(Math.random() * 9);

        }
        console.log(r, r2);
        var count = 0;
        for (var i = 0; i < 3; i++) {
            divString += `<div class="vl-card-row">`;
            for (var j = 0; j < 3; j++) {
                if (count == r || count == r2) {
                    divString += `<div class="flip-card correct">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="${img}" alt="Avatar" style="width:100%;height:100%;">
                      </div>
                        <div class="flip-card-back">
                          <img src="${rewardImage}" alt="Avatar" style="width:100%;height:100%;">
                        </div>
                      </div>
                    </div>`
                }
                else {
                    divString += `<div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="${img}" alt="Avatar" style="width:100%;height:100%;">
                      </div>
                        <div class="flip-card-back">
                          <img src="https://cdn-mgsm.akinon.net/products/2021/01/18/92415/ae51931b-0ef7-44b9-b558-1a220476d7c8_size1400x1400_quality100_cropCenter.jpg" alt="Avatar" style="width:100%;height:100%;">
                        </div>
                      </div>
                    </div>`
                }
                count++;
            }
            divString += `</div>`;
        }
        divString += `</div>`;
        div.innerHTML = divString;
        document.body.append(div);

        $(document).on("click",".vl-popup-close",function() {
            closePopup();
        });
        
        $(document).on("click",".vl-popup-overlay",function() {
            closePopup();
        });
        
        $(document).on("click",".vl-popup",function() {
            clickPopup();
        });

        var i = 0;
        var cards = document.querySelectorAll(".flip-card-inner");
        var vaweAnimation = setInterval(() => {
            cards[i].style.transform = "rotateY(360deg)";
            i++;
            if (i == cards.length) {
                clearInterval(vaweAnimation);
            }
        }, 500);

        var rewardCondition = 0;
        var tried = 0;
        jQuery(".flip-card-front").click(function () {
            if (tried < 2) {
                tried++;
                console.log(this.parentElement.parentElement.className);
                this.parentElement.style.transition="transform 1s";
                this.parentElement.style.transform = "rotateY(180deg)";
                if (this.parentElement.parentElement.classList.contains("correct")) {
                    console.log("you got it");
                    rewardCondition++;
                }
                if (tried == 2 && rewardCondition == 2) {
                    setTimeout(() => {
                        div.innerHTML = `<div class="vl-popup-overlay"></div> 
                    <div class="vl-popup">KAZANDIN
                    <div class="vl-popup-close">X</div>
                    </div>`;
                    }, 2000);

                }
                else if(tried == 2 && rewardCondition != 2){
                    setTimeout(() => {
                        div.innerHTML = `<div class="vl-popup-overlay"></div> 
                    <div class="vl-popup">KAYBETTİN
                    <div class="vl-popup-close">X</div>
                    </div>`;
                    }, 2000);
                }
            }
        });

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }

        function clickPopup() {
            <%VLSendClickFunc%>;
        }
    }
}


