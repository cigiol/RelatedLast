
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
        width: 73%;\
        right: 8%;\
        cursor: copy;\
        height: 19%;\
        top: 39%;";

        copyDiv.addEventListener("click", function () {

            var copyText = "GAP19MAYIS";
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
        height: 39%;\
        bottom: 0;\
        cursor: pointer;";

        var linkDiv2 = document.createElement("div");
        linkDiv2.setAttribute("class", "vl-linkdiv");
        linkDiv2.style = "    position: absolute;\
        width: 100%;\
        right: 0;\
        height: 39%;\
        top: 0;\
        cursor: pointer;";

        linkDiv.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://gap.com.tr/tum-urunler-gap/";
            
        });

        linkDiv2.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://gap.com.tr/tum-urunler-gap/";
            
        });

        


        div.append(copyDiv);
        div.append(linkDiv);
        div.append(linkDiv2);

        var img = document.createElement("img");
        img.setAttribute("id", "vl-vipbanner-img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/92_729_20200515114631324.jpg";
        div.append(img);

        if(document.querySelector(".category-list.img")){
            document.querySelector(".category-list.img").after(div);
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
        width: 27%;\
        right: 19%;\
        cursor:copy;\
        height: 32%;\
        top: 24%;";

        copyDiv.addEventListener("click", function () {

            var copyText = "GAP19MAYIS";
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
        width: 18%;\
        right: 0;\
        height: 100%;\
        cursor: pointer;";

        var linkDiv2 = document.createElement("div");
        linkDiv2.setAttribute("class", "vl-linkdiv");
        linkDiv2.style = "position: absolute;\
        width: 53%;\
        left: 0;\
        height: 100%;\
        cursor: pointer;";

        linkDiv.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://gap.com.tr/tum-urunler-gap/";
            
        });

        linkDiv2.addEventListener("click", function () {
            <%VLSendClickFunc%>;
            window.location.href="https://gap.com.tr/tum-urunler-gap/";
            
        });

        


        div.append(copyDiv);
        div.append(linkDiv);
        div.append(linkDiv2);

        var img = document.createElement("img");
        img.setAttribute("id", "vl-vipbanner-img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/92_729_20200513145946424.jpg";
        div.append(img);
        if(document.querySelector(".container.home-widget-container.full")){
            document.querySelector(".container.home-widget-container.full").after(div);
            <%VLSendImpressionFunc%>;
        }
        

    }
}

