var headbanner = document.querySelector("#vl-headbanner");
if (!headbanner) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-headbanner");
        div.innerHTML = "Sizi önemsiyoruz… Otelimizde alınan hijyen önlemlerimizi detaylı incelemek için <a href='https://www.dmarisbay.com/tr/sizi-%C3%B6nemsiyoruz.html' style='text-decoration:underline;font-weight:bold;color:white;'>tıklayın.</a>";
        div.style.backgroundColor = "#775c50";
        div.style.fontSize = "12px";
        div.style.color = "white";
        div.style.textAlign = "center";
        document.querySelector("#header").insertBefore(div, document.querySelector("#header-wrapper"));
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-headbanner");
        div.innerHTML = "Sizi önemsiyoruz… Otelimizde alınan hijyen önlemlerimizi detaylı incelemek için <a href='https://www.dmarisbay.com/tr/sizi-%C3%B6nemsiyoruz.html' style='text-decoration:underline;font-weight:bold;'>tıklayın.</a>";
        div.style.backgroundColor = "transparent";
        div.style.fontSize = "20px";
        div.style.color = "white";
        div.style.textAlign = "center";

        document.querySelector("#header").insertBefore(div, document.querySelector("#header-wrapper"));

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
        
                if (document.querySelector("#header").className == "cover sticky") {
                    document.querySelector("#vl-headbanner").style.color = "#775c50";
        
                }
                else
                    document.querySelector("#vl-headbanner").style.color = "white";
        
            })
        });
        
        
        
        
        observer.observe(document.body, {
            childList: true
            , subtree: true
            , attributes: true
            , characterData: true
        });
    }
}

