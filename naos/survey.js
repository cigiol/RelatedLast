function SettingsPopup() {
    var desktopWidth = "600px";
    var desktopHeight = "auto";
    var mobileWidth = "330px";
    var mobileHeight = "auto";
    var image = "http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-01%20(1).jpg";
    var nextImage = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/325_1328_20211022140923699.png";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image, nextImage);
}

SettingsPopup();
function FirePopup(width, height, mWidth, mHeight, img, nextImage) {
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
        .vl-popup-answer-container{
            position: absolute;
            top: 250px;
            width: 350px;
            text-align: center;
        }
        .vl-popup-answer {
            background: #8DC04A;
            color: white;
            width: 180px;
            margin: 0 0px 5px 40px;
            font-weight: bold;
            padding: 5px 0;
            cursor: pointer;
        }
        .vl-selected-answer{
            background: white;
            color: #8DC04A;
            border: 1px solid #8DC04A;
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
        .vl-popup-next{
            position: absolute;
            bottom: 40px;
            right: 50px;
            width: 150px;
            cursor: pointer;
        }

        .vl-popup-img {
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
            .vl-popup-img {
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
        <img class="vl-popup-img" src=${img}>
        <img class="vl-popup-next" src=${nextImage}>
        </div>
    `;
        document.body.append(div);

        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);


        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }

        document.querySelector(".vl-popup-next").addEventListener("click", function(){
            section1();
        });

        var answer1;
        var answer2;
        var answer3;
        var answer4;


        function section1(){
            div.innerHTML = `
            <div class="vl-popup-overlay"></div> 
            <div class="vl-popup">
            <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
            <img class="vl-popup-img" src="http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-02%20(1).jpg">
            <img class="vl-popup-next" src=${nextImage}>
            <div class="vl-popup-answer-container">
            <div class="vl-popup-answer">DERMATOLOG</div>
            <div class="vl-popup-answer">ECZACI</div>
            <div class="vl-popup-answer">SOSYAL MEDYA</div>
            <div class="vl-popup-answer">INFLUENCER</div>
            </div>
            </div>
            `;
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-next").addEventListener("click", function(){
                if($(".vl-popup-answer.vl-selected-answer").length==0){
                    alert("Lütfen Cevap Seçiniz");
                }
                else{
                    answer1=$(".vl-popup-answer.vl-selected-answer").text();
                    section2();
                    console.log(answer1);
                }
                
            });
            
            $(".vl-popup-answer").click(function() {
                $(".vl-popup-answer.vl-selected-answer").removeClass("vl-selected-answer");
                $(this).addClass("vl-selected-answer");
            });
        }

        function section2(){
            var style=document.createElement("style");
            style.innerHTML=`
            .vl-popup-answer-container{
                top:260px;
            }
            .vl-popup-answer{
                font-size: 13px;
                width:255px;
            }
            `;
            document.head.append(style);
            div.innerHTML = `
            <div class="vl-popup-overlay"></div> 
            <div class="vl-popup">
            <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
            <img class="vl-popup-img" src="http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-03%20(1).jpg">
            <img class="vl-popup-next" src=${nextImage}>
            <div class="vl-popup-answer-container">
            <div class="vl-popup-answer">AKNE KARŞITI ETKİ SUNMASI</div>
            <div class="vl-popup-answer">CİLDİ NEMLENDİRMESİ / YATIŞTIRMASI</div>
            <div class="vl-popup-answer">FİYAT UYGUNLUĞU</div>
            <div class="vl-popup-answer">KURUTUCU AKNE TEDAVİMDE CİLDİME İYİ GELMESİ / YATIŞTIRMASI</div>
            </div>
            </div>
            `;
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-next").addEventListener("click", function(){
                if($(".vl-popup-answer.vl-selected-answer").length==0){
                    alert("Lütfen Cevap Seçiniz");
                }
                else{
                    answer2=$(".vl-popup-answer.vl-selected-answer").text();
                    section3();
                    console.log(answer2);
                }
                
            });
            
            $(".vl-popup-answer").click(function() {
                $(".vl-popup-answer.vl-selected-answer").removeClass("vl-selected-answer");
                $(this).addClass("vl-selected-answer");
            });
        }

        function section3(){
            var style=document.createElement("style");
            style.innerHTML=`
            .vl-popup-answer-container {
                display: flex;
                justify-content: space-evenly;
            }
            .vl-popup-check{
                border: none;
                color: #8DC04A;
                border-color: #8DC04A;
                border-radius: 0px;
                outline: 2px solid #8DC04A;
                width: 15px;
                height: 15px;
                appearance: none;
            }
            .vl-popup-active-check{
                background: #8DC04A;
            }
            .vl-popup-check-area {
                display: flex;
                flex-direction: column-reverse;
            }
            .vl-popup-label{
                color: #8DC04A;
                font-weight: bold;
            }
            `;
            document.head.append(style);
            div.innerHTML = `
            <div class="vl-popup-overlay"></div> 
            <div class="vl-popup">
            <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
            <img class="vl-popup-img" src="http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-04%20(1).jpg">
            <img class="vl-popup-next" src=${nextImage}>
            <div class="vl-popup-answer-container">
                <div class="vl-popup-check-area">
                <input class="vl-popup-check" type="checkbox" id="point1" name="fav_language" value="1">
                <label class="vl-popup-label">1</label><br>
                </div>
                <div class="vl-popup-check-area">
                <input class="vl-popup-check" type="checkbox" id="point2" name="fav_language" value="2">
                <label class="vl-popup-label">2</label><br>
                </div>
                <div class="vl-popup-check-area">
                <input class="vl-popup-check" type="checkbox" id="point3" name="fav_language" value="3">
                <label class="vl-popup-label">3</label><br>
                </div>
                <div class="vl-popup-check-area">
                <input class="vl-popup-check" type="checkbox" id="point4" name="fav_language" value="4">
                <label class="vl-popup-label">4</label><br>
                </div>
                <div class="vl-popup-check-area">
                <input class="vl-popup-check" type="checkbox" id="point5" name="fav_language" value="5">
                <label class="vl-popup-label">5</label><br>
                </div>
            </div>
            </div>
            `;
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-next").addEventListener("click", function(){
                if($(".vl-popup-check.vl-popup-active-check").length==0){
                    alert("Lütfen Cevap Seçiniz");
                }
                else{
                    answer3=$(".vl-popup-check.vl-popup-active-check").val();
                    section4();
                    console.log(answer3);
                }
                
            });
            
            $(".vl-popup-check").click(function() {
                $(".vl-popup-check.vl-popup-active-check").removeClass("vl-popup-active-check");
                $(this).addClass("vl-popup-active-check");
            });
        }

        function section4(){
            var style=document.createElement("style");
            style.innerHTML=`
            .vl-popup-answer-container {
                display: block;
                justify-content: unset;
            }
            .vl-popup-answer{
                width:185px;
            }
            `;
            document.head.append(style);
            
            div.innerHTML = `
            <div class="vl-popup-overlay"></div> 
            <div class="vl-popup">
            <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
            <img class="vl-popup-img" src="http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-05%20(1).jpg">
            <img class="vl-popup-next" src=${nextImage}>
            <div class="vl-popup-answer-container">
                <div class="vl-popup-answer">EVET</div>
                <div class="vl-popup-answer">HAYIR</div>
            </div>
            </div>
            `;
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
            document.querySelector(".vl-popup-next").addEventListener("click", function(){
                if($(".vl-popup-answer.vl-selected-answer").length==0){
                    alert("Lütfen Cevap Seçiniz");
                }
                else{
                    answer4=$(".vl-popup-answer.vl-selected-answer").text();
                    section5();
                    console.log(answer4);
                }
                
            });
            
            $(".vl-popup-answer").click(function() {
                $(".vl-popup-answer.vl-selected-answer").removeClass("vl-selected-answer");
                $(this).addClass("vl-selected-answer");
            });
        }

        function section5(){

            var style=document.createElement("style");
            style.innerHTML=`
            .vl-popup-text{
                position: absolute;
                top: 320px;
                left: 40px;
                font-size: 20px;
            }
            .vl-popup-code{
                position: absolute;
                top: 350px;
                left: 40px;
                font-size: 20px;
                background: #8DC04A;
                color: white;
                font-weight: 600;
                padding: 0 11px;
            }
            `;
            document.head.append(style);
            div.innerHTML = `
            <div class="vl-popup-overlay"></div> 
            <div class="vl-popup">
            <img class="vl-popup-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
            <img class="vl-popup-img" src="http://img.euromsg.net/2D59DF930C2B419DA5027D5A8D6A03F9/images/sebium_anket_calismasi-06%20(1).jpg">
            <div class="vl-popup-text">KUPON KODU</div>
            <div class="vl-popup-code">X3ABK73M1</div>
            </div>
            `;
            document.querySelector(".vl-popup-close").addEventListener("click", closePopup);
        }
    }
}


