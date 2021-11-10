if (!document.querySelector("#vl-sidebanner")) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-vipbanner");
        div.style = "margin-top: 10px;\
        margin-bottom: 10px;\
        position: relative;";


        var copyDiv = document.createElement("div");
        copyDiv.setAttribute("id", "vl-copydiv");
        copyDiv.style = "position: absolute;\
        width: 34%;\
        right: 6%;\
        cursor: copy;\
        height: 24%;\
        top: 19%;";

        copyDiv.addEventListener("click", function () {

            var copyText = "MS19MAYIS";
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = copyText;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            alert("Kupon kodunuz kopyalanmıştır");
        });

        var linkDiv = document.createElement("div");
        linkDiv.setAttribute("class", "vl-linkdiv");
        linkDiv.style = "position: absolute;\
        width: 100%;\
        right: 0;\
        height: 55%;\
        bottom: 0;\
        cursor: pointer;";

        var linkDiv2 = document.createElement("div");
        linkDiv2.setAttribute("class", "vl-linkdiv");
        linkDiv2.style = "position: absolute;\
        width: 60%;\
        left: 0;\
        height: 48%;\
        top: 0;\
        cursor: pointer;";

        linkDiv.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://www.marksandspencer.com.tr/tum-urunler/";
            
        });

        linkDiv2.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://www.marksandspencer.com.tr/tum-urunler/";
            
        });

        


        div.append(copyDiv);
        div.append(linkDiv);
        div.append(linkDiv2);

        var img = document.createElement("img");
        img.setAttribute("id", "vl-vipbanner-img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/92_1136_20200515140533647.jpg";
        div.append(img);

        if(document.querySelector(".home-widget > .container > .row > .col-sm-6")){
            document.querySelector(".home-widget > .container > .row > .col-sm-6").after(div);
            <%VLSendImpressionFunc%>;
        }
        
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("id", "vl-vipbanner");
        div.style = "margin-top: 10px;\
        padding: 0 5px;\
        position: relative;";


        var copyDiv = document.createElement("div");
        copyDiv.setAttribute("id", "vl-copydiv");
        copyDiv.style = "position: absolute;\
        width: 18%;\
        right: 27%;\
        cursor: copy;\
        height: 32%;\
        top: 51%;";

        copyDiv.addEventListener("click", function () {

            var copyText = "MS19MAYIS";
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = copyText;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            alert("Kupon kodunuz kopyalanmıştır");
        });

        var linkDiv = document.createElement("div");
        linkDiv.setAttribute("class", "vl-linkdiv");
        linkDiv.style = "position: absolute;\
        width: 27%;\
        right: 0;\
        height: 100%;\
        cursor: pointer;";

        var linkDiv2 = document.createElement("div");
        linkDiv2.setAttribute("class", "vl-linkdiv");
        linkDiv2.style = "position: absolute;\
        width: 55%;\
        left: 0;\
        height: 100%;\
        cursor: pointer;";

        linkDiv.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://www.marksandspencer.com.tr/tum-urunler/";
            
        });

        linkDiv2.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://www.marksandspencer.com.tr/tum-urunler/";
            
        });

        


        div.append(copyDiv);
        div.append(linkDiv);
        div.append(linkDiv2);

        var img = document.createElement("img");
        img.setAttribute("id", "vl-vipbanner-img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/92_1136_20200515140546378.jpg";
        div.append(img);
        if(document.querySelector(".upper__browse-wrapper.js-analytics-hero-banner")){
            document.querySelector(".upper__browse-wrapper.js-analytics-hero-banner").after(div);
            <%VLSendImpressionFunc%>;
        }
        

    }
}

