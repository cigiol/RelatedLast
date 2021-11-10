function SettingsPopup() {
    var desktopWidth = "500px";
    var desktopHeight = "fit-content";
    var mobileWidth = "330px";
    var mobileHeight = "fit-content";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight);
}

function FirePopup(width, height, mWidth, mHeight) {
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
        .vl-popup-header{
            background: #375A5A;
            color: white;
            text-align: center;
            line-height: 25px;
            font-size: 15px;
            border-radius: 15px 15px 0px 0px;
            padding: 20px 0px;
        }
        .vl-options{
            width: 100%;
            border: 1px solid #375A5A;
            padding: 15px;
            text-align: left;
            color: black;
            font-size: 15px;
            cursor: pointer;
        }

        .vl-selected{
            background: #375A5A;
            color:white;
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
            position: absolute;
            z-index: 100001;
            width:${width};
            height:${height};
            background: white;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            border-radius: 15px 15px 0px 0px;
        }

        .vl-popup > a > img {
            width:${width};
            height:${height};
        }
        .vl-popup-content{
            height: 350px;
            background: white;
            margin: 10px 35px;
            border-radius: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-weight: 600;
        }
        .vl-popup-button{
            background: #375A5A;
            font-size: 15px;
            height: 40px;
            width: 150px;
            font-weight: 600;
            color: white;
            border-radius: 10px;
            cursor: pointer;
        }
        .vl-input-type-ayrilma{
            width: 100%;
            border-radius: 5px;
            max-height: 200px;
            height: 100px;
            display:none;
        }
        .vl-why{
            display:none;
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
        .vl-other-section{
            width:100%;
        }
        @media only screen and (max-width: 768px) {
            .vl-popup-header{
                font-size:12px;
            }
            .vl-options{
                font-size:13px;
            }
            .vl-popup-header h3{
                font-size:14px;
            }
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
            #Sorular{
                width:200px;
            }
            .vl-input-type-ayrilma{
            }
            .vl-why{
                margin:unset;
            }
            .vl-popup-button{
                width:200px;
            }
        }
    `;
        document.head.append(style);

        var div = document.createElement("div");
        div.setAttribute("class", "vl-popup-container");
        div.innerHTML = `
        <div class="vl-popup-overlay"></div> 
        <div class="vl-popup">
        <div class="vl-popup-header">
        <span>Siparişinizi tamamlamadan çıkış yapıyorsunuz. <br>Size daha iyi alışveriş deneyimi sunabilmek adına sebebini bizimle paylaşır mısınız?</span>
        </div>
        <div class="vl-popup-content">
        <div class="vl-options">Ürün fiyatları yüksek.</div>
        <div class="vl-options">Teknik bir problem ile karşılaştım.</div>
        <div class="vl-options">Site hızı yavaş.</div>
        <div class="vl-options">Kargo ücreti yüksek.</div>
        <div class="vl-options">Diğer</div>
        <div class="vl-other-section">
        <span class="vl-why">Sayfadan Ayrılma Nedeniniz</span>
        <textarea class="vl-input-type-ayrilma"></textarea>
        </div>
        <button class="vl-popup-button">GÖNDER</button>
        </div>
        <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">

        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }
        <%VLSendImpressionFunc%>;

        $(".vl-options").on("click",function(){
            var answer = $(this).text();
            console.log($(this).text());
            $(".vl-options").removeClass("vl-selected");
            $(this).toggleClass("vl-selected");
            if(answer == "Diğer"){
                $(".vl-options").remove();
                document.querySelector(".vl-input-type-ayrilma").style.display="block";
                document.querySelector(".vl-why").style.display="block";
            }
            else{
                document.querySelector(".vl-input-type-ayrilma").style.display="none";
                document.querySelector(".vl-why").style.display="none";
            }
        });

        document.querySelector(".vl-popup-button").addEventListener("click",function(){
            var answer = $(".vl-options.vl-selected").text();
            if(answer == ""){
                answer = document.querySelector(".vl-input-type-ayrilma").value;
            }
            sendAnswer(answer);
        });
        function sendAnswer(ans){
            var vl = new Visilabs();
            vl.AddParameter("OM.survey_ans", ans);
            vl.Collect();
            <%VLSendClickFunc%>;
            document.querySelector(".vl-popup-content").innerHTML=`
                <span style="font-size:20px;">Düşüncelerini paylaştığın için <b style="font-weight:800;">teşekkürler!</b></span>
            `;
            console.log(ans);
        }
    }
}
var exitCheck = false;
if(window.innerWidth>600){
    
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 0 && exitCheck == false) {
            exitCheck=true;
            SettingsPopup();
        }
    
    }, false);
}
else{
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
    window.addEventListener("scroll", function () {
        
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
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
}
