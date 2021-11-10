var headbanner = document.querySelector("#vl-headbanner");
if (!headbanner) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-headbanner");
        div.innerHTML = "We care about you…  <a href='https://www.dmarisbay.com/en/we-care-about-you.html' style='text-decoration:underline;font-weight:bold;'>Click</a> to learn in detail about the hygiene measures taken in our hotel";
        div.style.backgroundColor = "#775c50";
        div.style.fontSize = "10px";
        div.style.color = "white";
        div.style.textAlign = "center";
        document.querySelector("#header").insertBefore(div, document.querySelector("#header-wrapper"));
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-headbanner");
        div.innerHTML = "We care about you…  <a href='https://www.dmarisbay.com/en/we-care-about-you.html' style='text-decoration:underline;font-weight:bold;'>Click</a> to learn in detail about the hygiene measures taken in our hotel";
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

