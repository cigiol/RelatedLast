function sendImpression() {
    try {
        document.getElementById("vl_header_banner") && (VLSendImpressionFunc(8, 4), jQuery(".vl_header_nav").click(function() {
            VLSendClickFunc(8, 4);
        }))
    } catch (e) {
        console.log("Widget Impression Cannot Be Sent");
    }
}! function() {
    var e = "https://img.visilabs.net/banner/uploaded_images/264_1269_20200918133846203.jpg",
        n = "https://img.visilabs.net/banner/uploaded_images/264_1269_20200918133836127.jpg",
        t = "https://online.iksv.org/?OM.zn=acttype-4&OM.zpc=act-8&OM.megabanner=first",
        e2="https://img.visilabs.net/banner/uploaded_images/264_1269_20200918133821936.jpg",
        n2="https://img.visilabs.net/banner/uploaded_images/264_1269_20200918133810395.jpg",
        t2="https://filmonline.iksv.org/?OM.zn=acttype-4&OM.zpc=act-8&OM.megabanner=second",
        i = "#wrapper",
        a = 1180,
        o = 480,
        r = 120;
    if (null === document.getElementById("vl_header_banner")) {
        var l = document.createElement("style");
        l.innerHTML = "#vl_header{background-image: url(" + e + ");  height: " + r + "px; background-size: " + a + "px; background-position: center center; background-repeat: no-repeat; -webkit-transition: all .2s ease-in;-moz-transition: all .2s ease-in;transition: all .2s ease-in;}.vl-second{background-image: url(" + e2 + ") !important;}.vl_big.vl-big-second{background-image: url(" + n2 + ") !important;}#vl-button{background-color: #3dbef3; position: absolute;top: 50px;right: 0px;color: white;cursor: pointer;z-index: 999;border: 2px solid #3dbef3;border-radius: 5px;padding: 5px 10px;}            #vl-close-button{position: absolute;top: 5px;right: 10px;color: white;cursor: pointer;z-index: 999;font-size: " + r / 6 + "px; font-family:cursive;}            .vl_big{background-image: url(" + n + ") !important; height: " + o + "px !important; background-position: center center;-webkit-transition: all .2s ease-in;-moz-transition: all .2s ease-in;transition: all .2s ease-in;}            #vl_header_banner{position:relative; display: block; width: " + a + "px; margin: auto;}            @media only screen and (max-width: " + a + "px){                #vl_header_banner{display: none;}            }", document.head.appendChild(l);
        var d = document.createElement("div");
        d.setAttribute("id", "vl_header_banner"), d.innerHTML = '            <div id="vl-button">Göster</div>            <div id="vl-close-button">X</div>            <a class="vl_header_nav" href="' + t + '" target="_blank">            <div id="vl_header"></div>            </a>';
        var s = document.querySelector(i);
        var loop;
        function StartLoop(){
            document.querySelector("#vl_header").classList.toggle("vl-second");
            document.querySelector("#vl_header").classList.toggle("vl-big-second");
            
            if(document.querySelector("#vl_header.vl-second")){
                document.querySelector(".vl_header_nav").setAttribute("href",t2);
            }
            else{
                document.querySelector(".vl_header_nav").setAttribute("href",t);
            }
        }
        loop = setInterval(StartLoop,5000);
        s.insertBefore(d, s.childNodes[0]), document.getElementById("vl-button").addEventListener("click", function() {
            document.getElementById("vl_header").classList.toggle("vl_big"), document.getElementById("vl_header").getAttribute("class").indexOf("vl_big") > -1 ? document.getElementById("vl-button").innerText = "Gizle" : document.getElementById("vl-button").innerText = "Göster";
            if(document.getElementById("vl_header").getAttribute("class").indexOf("vl_big") > -1){
                clearInterval(loop);
            }
            else{
                loop = setInterval(StartLoop,5000);
            }
        }), document.getElementById("vl-close-button").addEventListener("click", function() {
            document.getElementById("vl_header_banner").remove();
        })
    } else console.log("Mega Banner Already Exits");
}(), setTimeout(sendImpression, 2e3);