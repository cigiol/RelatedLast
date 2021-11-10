var checkSepet = document.querySelector("a.user-panel__basket__link").innerText;
if (checkSepet.includes("SEPET")) {
    var check = document.querySelector(".list__content p.not-found");
    if (check != null) {
        var vl = new Visilabs();
        vl.AddParameter("json", true);
        vl.Suggest(12, null, null, CallBackMethod);
        function CallBackMethod(dataArr) {
            var wrapper = document.createElement('div');
            wrapper.class = 'list__content__item-wrapper';
            var html = `
    <style> .vl-header-top {
        position: relative;
        text-align: center;
        font-size: 20px;
        display: block;
        font-family: Georgia;
        color: #2f3032;
    }

    .vl-header-top::after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #dedede;
    }

    .vl-header {
        display: inline-block;
        padding: 10px 20px;
        background: #fff;
        position: relative;
        z-index: 2;
    }

    .product-item__title {
        margin-left: 7px;
    }

    .product-item__amount {
        margin-left: 7px;
        bottom: 15px;
        position: absolute;
    }

    .product-item__amount__discounted {
        margin-left: 3px;
    }

    .product-item__amount__discounted .special-price {
        text-decoration: line-through !important;
    }

    .vl-dprice{
        font-size: 24px;
        color: #000;
        font-weight: 600;
    }
@media (max-width: 767px){
        .product-item__title {
            height: 60px !important;
        }
        .vl-dprice {
            font-size: 17px !important;
        }
        .product-item__amount {
            bottom: 0 !important;
        }
    }
    </style>
    
<div class="vl-header-top"><div class="vl-header">İlginizi Çekebilecek Ürünler</div></div>
`;

            dataArr.forEach(product => {

                html += `
<div class="col-sm-4 col-xs-6 list__content__item">
    <div class="list__content__item-inner">
        <div class="product-item js-product-wrapper" data-sku="8682116042024">
            <a href="` + product.dest_url + `" class="product-item__img">
                <img class="product-item-image" src="` + product.img + `">
            </a>
            <div class="product-item__title">
                <a href="` + product.dest_url + `">` + product.title + `</a>
            </div>
            <div class="product-item__value">
                    <div class="product-item__amount">
                        <div class="product-item__amount__discounted">
                            <span class="special-price">` + product.price + ` TL</span>
                        </div>
                        <div class="vl-dprice">` + product.dprice + ` TL</div>
                    </div>
                </div>`;
                html += `
      </div>
    </div>
</div>
        </div>
    </div>
</div>
`;

                wrapper.innerHTML = html;

                var container = document.querySelector('.js-visilabs-recommendation-products');
                container.style.display = "block";

                if (container != null)
                    container.appendChild(wrapper);
                var productPrice = document.querySelectorAll(".special-price");
                var dPrice = document.querySelectorAll(".vl-dprice");
                var imageItem = document.querySelectorAll(".product-item-image");
                for(i=0;i<dPrice.length;i++){
if (dPrice[i].innerText.indexOf(".")){
dPrice[i].innerText = dPrice[i].innerText.replace(".",",");
}
if (productPrice[i].innerText.indexOf(".")){
productPrice[i].innerText = productPrice[i].innerText.replace(".",",");
}
}
                for (var i = 0; i < imageItem.length; i++) {
                    var s = imageItem[i].src;
                    imageItem[i].src = s.split(".jpg")[0] +'_size300x216_cropCenter.jpg';
                }

                for (var i = 0; i < productPrice.length; i++) {
                    if (dPrice[i].innerText == productPrice[i].innerText) {
                        productPrice[i].remove()
                    }
                }
            })
        }
        /*
        var counter = 0;
        var deleteTopSeller = setInterval(() => {
            counter++;
            var catTopSeller = document.querySelector("#vlHeader");
            var containerTopSeller = document.querySelector('.js-visilabs-recommendation-products');
            if (catTopSeller) {
                containerTopSeller.style.display = "none";
                clearInterval(deleteTopSeller);
            }
            if (counter === 50) {
                containerTopSeller.style.display = "block";
                clearInterval(deleteTopSeller);
            }
        }, 100);*/
    }
}
/* C: MS# 2019-11-26 U: UCA #2019-11-29*/