if (document.querySelector(".product__campaign")) {
    var style = document.createElement("style");
    style.innerHTML = `.vl-banner {
        display:inline-block;
        font-size:20px;
        margin-top:-10px;
        margin-bottom:10px;
}
.vl-banner-dprice{
    font-size:24px;
    color:#a80000;
    display:inline-block;
}

`;
    document.head.appendChild(style);

    var text=checkLanguage();
    
    var drate = parseInt(document.querySelector(".product__campaign").innerText.split("%")[1].split(" İndirim")[0]);
    var price = parseFloat(document.querySelector(".product__price").innerText.split("TL")[0].trim().replace(",", "."));
    var dprice = price * (1 - drate / 100);
    dprice = dprice.toFixed(2).replace(".", ",");
    var div = document.createElement("div");
    div.setAttribute("class", "vl-banner");
    div.innerHTML = `${text}<div class='vl-banner-dprice'>${dprice} TL</div>`;
    document.querySelector(".product__price-box.cf").after(div);

}

function checkLanguage(){
    if(document.querySelectorAll(".js-language-form.language-form > button")[0].classList.contains("active")){
        return "Sepette ";
    }
    else{
        return "at Checkout ";
    }
}