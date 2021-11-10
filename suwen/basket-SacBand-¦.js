if (!document.querySelector(".vl-bannerText") && document.querySelector(".order-small-price.font-weight-bold.text-right.order-total-text")) {
    var div = document.createElement("div");
    div.style = "text-align: center;font-size: 0.95rem;background: transparent;font-family: sans-serif;color: black;";
    div.className = "vl-bannerText";
    document.querySelector(".order-total-small.p-3").append(div);


    var price = parseInt(document.querySelector(".order-small-price.font-weight-bold.text-right.order-total-text").innerText.split(" ")[0]);
    if (price < 200) {
        div.innerText = "Sepetinizi 200TL’ye tamamlayın, seçeceğiniz saç bandı hediyeniz olsun.";
    }
    else {
        div.innerText = "Tebrikler, saç bandı hediyesi kazandınız. Dilediğiniz saç bandını sepetinize eklemeyi unutmayın😉";
    }

}