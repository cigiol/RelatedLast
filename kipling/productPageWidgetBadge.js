function ppageBadge() {
    function ppageStyles() {
        var constStyle = document.createElement("style");
        constStyle.innerHTML =
            ".vlBadge{display: flex;flex-direction: column;background-color: #E3E5E3;color: #F32735;width: 100%;border: 1px solid #F32735;padding: 10px;font-size: 16px;margin-top: -5px;margin-bottom: 5px;line-height: 15px;font-family: Kipling_Regular,sans-serif; text-align: center;}" +
            ".vlBadgePrice{font-family: Kipling_Bold,sans-serif;font-size: 20px;margin-top: .4em;}" +
            "@media screen and (max-width: 320px) {.vlBadgePrice{font-size:17px;}}";
        document.head.appendChild(constStyle);
    }
    ppageStyles();
    function createBadge() {
        
        var masterDiv = document.querySelector(".item-grid.related-products-slider.slick-initialized.slick-slider");
        var div = masterDiv.querySelectorAll(".col-xs-6.col-sm-6.col-md-6.col-lg-4.product-box-container.slick-slide");
        for(var i=0;i<div.length;i++){
            var oldPrice;
            if(div[i].querySelector("div.product__inside__price.price-box > ul > li:nth-child(2)")){

                oldPrice = parseFloat(div[i].querySelector("div.product__inside__price.price-box > ul > li:nth-child(2)").innerText.split(",").join("."));
            }
            else{

                oldPrice = parseFloat(div[i].querySelector("div.product__inside__price.price-box > ul > li").innerText.split(",").join("."));
            }
            var newPrice = (oldPrice * 0.79).toFixed(2);
            var vlBadge = document.createElement("div");
            vlBadge.className = "vlBadge";
            vlBadge.innerHTML = "<span class='vlBadgeTextType'>Sepette %21 İndirim</span><span class='vlBadgePrice'>" + newPrice + " TL</span>";
            div[i].querySelector(".product__inside__name").after(vlBadge);
        }
    }
    if (!document.getElementById("vlBadge")) {
        createBadge();
    }
}
ppageBadge();