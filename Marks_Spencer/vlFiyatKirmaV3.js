function vlFiyatKirmaV3() {
    if (document.querySelectorAll(".product-detail__offer")[1]) {
        var vlText = "Sadece Bugüne Özel";
        var vlTextColor = "#000";
        var vlTextFontSize = "25px";
        var vlDiscountRatio = "0.25";
        var vlBlur = true;
        var vlNewPriceColor = "#1d8720";
        var vlNewPriceFontSize = "25px";
        var vlHighlightText = "Good Move ürünlerinde %25 az öde";

        if (document.querySelectorAll(".product-detail__offer")[1].innerText === vlHighlightText) {
            function constStyle() {
                var styleEl = document.createElement("style");
                if (vlBlur) {
                    styleEl.innerHTML =
                        '#vlText{font-size:' + vlTextFontSize + ';color:' + vlTextColor + '}' +
                        '.product-detail__sale-price{opacity:0.3 !important}' +
                        '.product-detail__list-price{opacity:0.3 !important}' +
                        '#vlDiscountEl{display:block; font-size:' + vlNewPriceFontSize + '; text-align:left; color:' + vlNewPriceColor + '; font-weight: 600; margin: 10px 0;}' +
                        '@media screen and (max-width: 600px) { #vlDiscountEl {text-align:center !important; } }';
                } else {
                    styleEl.innerHTML =
                        '#vlText{font-size:' + vlTextFontSize + ';color:' + vlTextColor + '}' +
                        '#vlDiscountEl{display:block; font-size:' + vlNewPriceFontSize + '; text-align:left; color:' + vlNewPriceColor + '; font-weight: 600; margin: 10px 0;}' +
                        '@media screen and (max-width: 600px) { #vlDiscountEl {text-align:center !important; } }';
                }
                document.head.appendChild(styleEl);
            }
            constStyle();
            var priceEl = document.querySelector(".product-detail__sale-price");
            if (!document.getElementById("vlDisText")) {
                var vlDisText = document.createElement("div");
                vlDisText.id = "vlDisText";
                vlDisText.style.margin = "15px 0";
                vlDisText.style.display = "inline-block";
                var vlOriginalPrice = parseFloat(parseFloat(priceEl.innerHTML.replace(",", ".")));
                var vlDiscountEl = parseFloat(parseFloat(vlOriginalPrice) - (parseFloat(vlOriginalPrice) * parseFloat(vlDiscountRatio))).toFixed(2);
                vlDisText.innerHTML = '<span id="vlText">' + vlText + ' <br><span id="vlDiscountEl"> ' + vlDiscountEl.replace(".", ",") + ' TL</span></span>';
                var posLoc = document.querySelector(".product-detail-normal");
                posLoc.after(vlDisText);
            }
        }
    }
}
vlFiyatKirmaV3();