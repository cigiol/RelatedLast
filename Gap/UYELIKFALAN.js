getSignUpDate = function() {
    var t;
    for (k = 0; k < dataLayer.length; k++)
        if (void 0 !== dataLayer[k].cd_userSignupDate) {
            t = dataLayer[k].cd_userSignupDate;
            break
        } return t
}, couponAssistant = function() {
    var t = document.createElement("style");
    t.innerHTML = "            #assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 300px;right: 8%;background-color: white;border: 1px solid black;border-radius: 5px;}            #assistantHeader{background-color: black;color: white;width: 100%; cursor:pointer;}            #assistantHeaderText{font-size: 14px; font-weight: bold; height: 40px;width: 100%;padding: 8px;display: inline-block;text-align: center;}            #assistantMinimize{opacity: 0; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}            #assistantBodyText{display: block;margin: auto;width: 80%;margin-top: 15px;text-align: center;}            #assistantCodeArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 20px;font-size: 20px;border: 3px dashed black;padding: 4px;font-weight: 600;}            #assistantCopyButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;color: white;background-color: black;padding: 10px;border-radius: 5px;font-size: 16px; font-weight: bold;cursor: pointer;}            #assistantCloseButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;cursor: pointer;}            #couponCode{width: 100%;text-align: center;border: none;}            .vl-active{bottom: 0px; transition: bottom 1s;}            .vl-passive{bottom: -260px; transition: bottom 1s;}            @media only screen and (max-width: 600px){                #assistantContainer{margin: auto; right: 0; left:0; z-index: 10; width: 220px; height: 280px;}                #assistantHeaderText{font-size: 13px; height: 35px; padding: 6px;}                #assistantMinimize{font-size: 20px;}                #assistantCodeArea{width: 70%; font-size: 19px;}                .vl-passive{bottom: -245px;}            }", document.head.appendChild(t);
    var i = document.createElement("div");
    i.setAttribute("id", "assistantContainer"), i.setAttribute("class", "vl-passive"), i.innerHTML = '<div id="assistantHeader">            <div id="assistantHeaderText">150 TL Üzerine 30 TL İndirim</div>            <div id="assistantMinimize">-</div>            </div>            <div id="assistantBody">            <div id="assistantBodyText">Kodun ilk alışverişinde tüm ürünlerde geçerli, kampanyalarla birleşmez.</div>            <div id="assistantCodeArea"><input type="text" value="GAP10" id="couponCode" readonly/></div>            <div id="assistantCopyButton">Kopyala</div>            <div id="assistantCloseButton">Kapat</div>            </div>', document.body.appendChild(i), document.getElementById("assistantCopyButton").addEventListener("click", function() {
        document.getElementById("couponCode").select(), document.execCommand("copy");
        try {
            VLSendClickFunc(76, 4)
        } catch (t) {}
        minimizeAssistant()
    }), document.getElementById("assistantHeader").addEventListener("click", function() {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    }), document.getElementById("assistantCloseButton").addEventListener("click", function() {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    })
}, minimizeAssistant = function() {
    document.getElementById("assistantMinimize").style.opacity = "0", document.getElementById("assistantContainer").setAttribute("class", "vl-passive")
}, maximizeAssistant = function() {
    document.getElementById("assistantMinimize").style.opacity = "1", document.getElementById("assistantContainer").setAttribute("class", "vl-active")
}, exec = function() {
    var t = getSignUpDate();
    null !== localStorage.getItem("OM.singupDiscount") && "2020" === t.slice(0, 4) && 0 === document.querySelectorAll("#assistantContainer").length && couponAssistant()
}, exec();