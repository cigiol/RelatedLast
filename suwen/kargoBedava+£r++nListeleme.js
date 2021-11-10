
var a = document.querySelectorAll(".product-box-container");

for (var i = 0; i < a.length; i++) {
    if (a[i].querySelector(".product-box-price")) {
        if (parseFloat(a[i].querySelector(".product-box-price").innerText.split(" ")[0]) > 30) {



            var img = document.createElement("img");
            img.style.width = "30%";
            img.style.position = "absolute";
            img.style.top = "0px";
            img.style.left = "0px";
            img.src = "https://img.visilabs.net/banner/uploaded_images/286_1272_20200504090219567.png";
            a[i].querySelector(".product-box-image-container").append(img);
        }
    }
    else {
        if (parseFloat(a[i].querySelector(".product-box-new-price.pl-2.pr-2").innerText.split(" ")[0]) > 30) {



            var img = document.createElement("img");
            img.style.width = "30%";
            img.style.position = "absolute";
            img.style.top = "0px";
            img.style.left = "0px";
            img.src = "https://img.visilabs.net/banner/uploaded_images/286_1272_20200504090219567.png";
            a[i].querySelector(".product-box-image-container").append(img);
        }

    }
}
<%VLSendImpressionFunc%>;