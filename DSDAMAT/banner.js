
function FreeShipping() {
    var totalPrice = parseFloat(document.querySelector(".js-basket-summary-total-amount").innerText);
    console.log(totalPrice);
    if (!document.querySelector(".vl-FreeShipping") && totalPrice < 150) {
        var neededPrice=150-totalPrice;
        var div = document.createElement("div");
        div.className = "vl-FreeShipping";
        div.innerHTML = neededPrice.toFixed(2)+" TL daha ekle,Kargon Bedava olsun";
        document.querySelector(".container.js-basket-content").after(div);
         <%VLSendImpressionFunc%>;
        var style = document.createElement("style");
        style.innerHTML = `
        .vl-FreeShipping{
            text-align: center;
            color: red;
        }
        `;
        document.head.append(style);
    }
}
FreeShipping();

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if(document.querySelector(".vl-FreeShipping"))
        document.querySelector(".vl-FreeShipping").remove();
        FreeShipping();
       
    });
});

observer.observe(document.querySelector(".js-basket-summary-total-amount"), {
    childList: true
    , subtree: false
    , attributes: false
    , characterData: false
});
