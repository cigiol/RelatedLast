if (!document.querySelector("#vl-badge-kazanc")) {


    
    if (document.querySelector(".product-detail__sale-price") && document.querySelector(".product-detail__list-price")) {
var price = document.querySelector(".product-detail__list-price").innerText.split("₺")[1];
        var discountedPrice =parseFloat(document.querySelector(".product-detail__sale-price").innerText.split("₺")[1].replace(",","."));
        var gainedPrice = parseFloat(price.replace(",","."));
        gainedPrice = gainedPrice -discountedPrice;
        gainedPrice = "" + gainedPrice;
        gainedPrice = gainedPrice.toString().replace(".", ",");


        var gain = document.createElement("div");
        gain.setAttribute("id", "vl-badge-kazanc");
        gain.innerText = "Kazancınız ₺" + gainedPrice ;
        gain.style.fontSize = "15px";
        gain.style.color="#c30016";
        gain.style.marginTop="10px";
        gain.style.fontFamily="Lato,sans-serif";
        gain.style.whiteSpace = "nowrap";


        var bodyToAdd = document.querySelector('.table-grid__item--middle.product-detail__price');
        if (bodyToAdd) {

            document.querySelector(".table-grid__item--middle.product-detail__price").appendChild(gain);
            var width = gain.offsetWidth;

        }
    
    
    <%VLSendImpressionFunc%>;
    }

}