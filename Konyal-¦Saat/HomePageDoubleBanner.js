if (!document.querySelector("#vl-double-banner-area")) {
    var img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/Tissot.jpg";
    var img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/wainer_slim.jpg";
    var link1="https://www.konyalisaat.com.tr/tissot";
    var link2="https://www.konyalisaat.com.tr/wainer";
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    if(getCookie("doubleBanner")){
        var gender=getCookie("doubleBanner").split("|")[0];
        var price=parseFloat(getCookie("doubleBanner").split("|")[1]);
        if (gender == "Erkek Saat") {
            if (price < 1500) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/casio2-E.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/citizen-E.jpg";
                link1="https://www.konyalisaat.com.tr/casio";
                link2="https://www.konyalisaat.com.tr/citizen";
            }
            else if (price < 5000) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/hamilton-E.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/wainer-E.jpg";
                link1="https://www.konyalisaat.com.tr/hamilton";
                link2="https://www.konyalisaat.com.tr/wainer";
            }
            else if (price < 50000) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/citizen2E.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/rado2-E.jpg";
                link1="https://www.konyalisaat.com.tr/citizen";
                link2="https://www.konyalisaat.com.tr/rado";
            }
        }
        else if (gender == "Kadin Saat") {
            if (price < 1500) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/casio-U.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/belmond_w-K.jpg";
                link1="https://www.konyalisaat.com.tr/casio";
                link2="https://www.konyalisaat.com.tr/belmond";
            }
            else if (price < 5000) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/citizen3-K.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/tissot-K.jpg";
                link1="https://www.konyalisaat.com.tr/citizen";
                link2="https://www.konyalisaat.com.tr/tissot";
            }
            else if (price < 50000) {
                img1 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/longines-K.jpg";
                img2 = "https://img.euromsg.net/523F50EF362B4EE8A4B6E52AA85A77BE/images/rado-E.jpg";
                link1="https://www.konyalisaat.com.tr/longines";
                link2="https://www.konyalisaat.com.tr/rado";
            }
        }
    }
    
    var div = document.createElement("div");
    div.setAttribute("class", "row");
    div.setAttribute("id", "vl-double-banner-area");
    div.innerHTML = `
        <div class="temp8 dl-view-item itemauto col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-min-24"><div class="inner"><a href=${link1} class="img-block dl-event"><img src=${img1} class="img-responsive"></a></div></div>
        <div class="temp8 dl-view-item itemauto col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-min-24"><div class="inner"><a href=${link2} class="img-block dl-event"><img src=${img2} class="img-responsive"></a></div></div>
    `;
    document.querySelectorAll(".row")[2].after(div);
    <%VLSendImpressionFunc%>;
    div.addEventListener("click", function () {
        <%VLSendClickFunc%>;
    });
}

