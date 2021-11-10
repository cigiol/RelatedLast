if (!document.querySelector("#vl-badge-kazanc")) {


    var price = document.querySelector(".product-price > span");
    var ratio = document.querySelector(".text-site-primary").innerText.split(" ")[1];
    if (document.querySelectorAll(".detail-new-price.detail-price.detail-new-price.align-middle").length>0) {
        var discountedPrice =parseFloat(document.querySelectorAll(".detail-new-price.detail-price.detail-new-price.align-middle")[0].innerText.replace(",",".").split(" ")[0]);
        var gainedPrice = parseFloat(price.innerText.replace(",",".").split(" ")[0]);
        gainedPrice = gainedPrice -discountedPrice;
        gainedPrice = "" + gainedPrice;
        gainedPrice = gainedPrice.toString().replace(".", ",");


        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "vl-badge-kazanc");
        imgDiv.style.position = "relative";
        imgDiv.style.textAlign = "center";
        imgDiv.style.float = "left";
        imgDiv.style.marginLeft = "1%";

        var img = document.createElement("img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/286_1272_20200504094350459.png";

        var gain = document.createElement("h1");
        gain.innerText = "KAZANCINIZ " + gainedPrice + " TL";
        gain.style.fontSize = "15px";
        gain.style.fontWeight = "bold";
        gain.style.position = "absolute";
        gain.style.top = "50%";
        gain.style.left = "56%";
        gain.style.transform = "translate(-50%, -50%)";
        gain.style.whiteSpace = "nowrap";

        imgDiv.appendChild(img);
        imgDiv.appendChild(gain);




        var bodyToAdd = document.querySelector('.product-detail-price-and-container.my-4.clearfix');
        if (bodyToAdd) {

            document.querySelector(".product-detail-price-and-container.my-4.clearfix").appendChild(imgDiv);
            var width = gain.offsetWidth;
            img.style.width = (width + 54) + "px";

        }
    
    
    <%VLSendImpressionFunc%>;
    }

}