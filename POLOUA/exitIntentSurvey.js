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
            height: 50px;
            background: white;
        }
        .vl-popup-header h3{
            color: #B80031;
            line-height: 50px;
            padding-left: 20px;
            font-weight: 600;
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
            background: url(https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1216_20210421100638873.png);
            background-color: #F2F5F8;
            background-position: right;
            background-repeat: no-repeat;
            background-position-x: right;
        }

        .vl-popup > a > img {
            width:${width};
            height:${height};
        }
        #Sorular{
            width:300px;
            border-radius:5px;
        }
        .vl-popup-content{
            height: 300px;
            background: white;
            margin: 35px;
            border-radius: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-weight: 600;
        }
        .vl-popup-button{
            background: #B80031;
            font-size: 15px;
            height: 40px;
            width: 300px;
            font-weight: 600;
        }
        .vl-input-type-ayrilma{
            height: 70px;
            width: 300px !important;
            border-radius:5px;
            display:none;
        }
        .vl-why{
            margin-right: 120px;
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
        @media only screen and (max-width: 768px) {
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
                width: 200px !important;
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
        <h3>U.S. Polo Assn. De??erlendirme Anketi</h3>
        </div>
        <div class="vl-popup-content">
        <span>Sayfadan ayr??lma nedeninizi bizimle payla????r m??s??n??z?</span>
        <select name="Sorular" id="Sorular">
        <option value="??stedi??im ??r??n??n bedeni yok">??stedi??im ??r??n??n bedeni yok</option>
        <option value="??r??n fiyatlar?? bekledi??imden pahal??">??r??n fiyatlar?? bekledi??imden pahal??</option>
        <option value="Kampanya uygulam??yor">Kampanya uygulam??yor</option>
        <option value="Kupon/??ek/indirim kodu uygulam??yor">Kupon/??ek/indirim kodu uygulam??yor</option>
        <option value="??r??nleri be??enmedim">??r??nleri be??enmedim</option></option>
        <option value="??r??n bilgileri yetersiz">??r??n bilgileri yetersiz</option>
        <option value="Site h??z?? ??ok yava??">Site h??z?? ??ok yava??</option>
        <option value="??deme a??amas??nda sorun ya??ad??m">??deme a??amas??nda sorun ya??ad??m</option>
        <option value="Al????veri??imi sonra tamamlayaca????m">Al????veri??imi sonra tamamlayaca????m</option>
        <option value="Di??er">Di??er</option>
        </select>
        <span class="vl-why">Sayfadan Ayr??lma Nedeniniz</span>
        <textarea class="vl-input-type-ayrilma"></textarea>
        <button class="vl-popup-button">G??NDER</button>
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

        document.querySelector("#Sorular").addEventListener("change",function(){
            var answer = document.querySelector("#Sorular").value;
            if(answer == "Di??er"){
                document.querySelector(".vl-input-type-ayrilma").style.display="block";
                document.querySelector(".vl-why").style.display="block";
            }
            else{
                document.querySelector(".vl-input-type-ayrilma").style.display="none";
                document.querySelector(".vl-why").style.display="none";
            }
        });

        document.querySelector(".vl-popup-button").addEventListener("click",function(){
            var answer = document.querySelector("#Sorular").value;
            if(answer == "Di??er"){
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
                <img src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1216_20210421151433220.png">
                <span>D??????ncelerinizi bizimle payla??t??????n??z i??in <b style="font-weight:800;">te??ekk??r ederiz</b></span>
            `;
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
