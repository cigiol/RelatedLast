(function () {
    var campID = 153;
    var impSent = false;
    var productData = { boxBottom: "0px", boxRight: "420px", name: "Brıgett 6'lı Çay Bardağı", img: "https://cdn-mgsm.akinon.net/products/2019/12/20/58964/ac7ae08d-22ab-42f1-b699-7f9db6148e7b_size1400x1400_quality100_cropCenter.jpg", href: "https://www.madamecoco.com/brigett-6-li-cay-bardagi-std-2/", sku: "8682116000383", dataPk: "35082", firstPrice: 22.99, finalPrice: 22.99 };
    var iconData = { pinTop: "70%", pinRight: "50%", img: "//img.euromsg.net/B1F2D66CC99E444982355DC1277B9605/images/img_1779.png", color: 'gray' };
    var bannerSelector = "#js-slideshow a[href='/cay-bardaklari/']";
    var iconHtml = '<div class="vl-view-item-2" style="height: 30px;width: 30px;position: absolute;top: ' + iconData.pinTop + ';right: ' + iconData.pinRight + ';background-color: ' + iconData.color + ';padding: 5px;border-radius: 5px;"><img src="' + iconData.img + '"></div>';
    jQuery(bannerSelector).parent().append(iconHtml);
    var style = '<style class="vl-product-view-container-2-style">\
      .vl-product-view-container-2{display: none;z-index: 1000003!important;position: absolute;margin: auto; padding: 10px;transition: opacity 1.5s;background-color: white;border-radius: 10px;width: 425px;height: 280px;left: 0;right: '+ productData.boxRight + ';top: 0;bottom: ' + productData.boxBottom + ';-webkit-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);-moz-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);}\
        .vl-product-image-area{float:left; height: 100%}\
        .vl-product-image-area img{height: 100%; max-width: 200px;}\
        .vl-product-info-area{float: right; width: 200px; padding: 15px;}\
        .vl-product-title-area{font-size: 20px;font-weight: 700;text-align: left;}\
        .vl-price-area{margin-top: 20px;text-align: left;}\
        .vl-first-price{text-decoration: line-through;color: #999; width: auto !important;height: auto !important;}\
        .vl-final-price{font-size: 20px;font-weight: 600; width: auto !important; height: auto !important;}\
        .vl-nav-button{width: 170px;height: 40px;line-height: 42px;padding: 0;font-size: 16px;background: #03a87c;text-align: center;margin: auto;}\
        .vl-nav-button a{color: white;font-weight: 600;}\
        .vl-basket-button-2{width: 170px;height: 40px;line-height: 42px;padding: 0;font-size: 16px;color: white;font-weight: 600;background: #b70234;text-align: center;margin: auto;margin-top: 5px;cursor: pointer;}\
        .vl-sku-area{margin-top: 15px;}\
        .vl-closer{display:none;position: absolute;top: -10px;right: -10px;background-color: black;width: 20px;height: 20px;text-align: center;color: white;border-radius: 20px;font-size: 14px;padding: 0px;cursor: pointer;}\
        </style>';
    jQuery('head').append(style);
    var productHTML = '<div class="vl-product-view-container-2">\
      <div class="vl-closer">X</div>\
      <div class="vl-product-image-area"><img src='+ productData.img + '></div>\
      <div class="vl-product-info-area">\
         <div class="vl-product-title-area">'+ productData.name + '</div>\
         <div class="vl-sku-area">Ürün Kodu: '+ productData.sku + '</div>\
         <div class="vl-price-area">\
            <span class="vl-final-price">'+ productData.finalPrice + ' TL</span>\
         </div>\
         <div class="vl-nav-button"><a href="'+ productData.href + '">Ürün Detayına Git</a></div>\
         <div class="vl-basket-button-2" data-pk="'+ productData.dataPk + '">Sepete Ekle</div>\
      </div></div>';
    jQuery('.vl-view-item-2').parent().append(productHTML);
    jQuery('.vl-view-item-2, .vl-product-view-container-2').mouseover(function () {
        jQuery('.vl-product-view-container-2').show();
        if (!impSent) {
            try { VLSendImpressionFunc(campID, 4); } catch (e) { };
            impSent = true;
        }
        
        
        return false;
    });
    jQuery('.vl-nav-button a').click(function () {
        try { VLSendClickFunc(campID, 4); } catch (e) { };
        window.location = jQuery(this).attr("href");
        return false;
    });
    if (productData.dataPk === "") {
        jQuery('.vl-basket-button-2').hide();
    }
    else {
        jQuery('.vl-basket-button-2').click(function (e) {
            var dataId = $(this).attr("data-pk");
            $.ajax({
                url: 'https://www.madamecoco.com/baskets/basket/',
                dataType: 'json',
                type: 'POST',
                data: {
                    product: dataId,
                    quantity: 1
                },
                success: function (data) {
                    console.log(data);
                    location.reload();
                },
                error: function (err) {
                    console.log(err);
                }

            });
        });
    }
    jQuery('.vl-product-view-container-2').mouseout(function () {
        jQuery('.vl-product-view-container-2').hide();
    });
    function getCookie(e) { for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) { for (var r = t[o]; " " == r.charAt(0);)r = r.substring(1); if (0 == r.indexOf(n)) return r.substring(n.length, r.length) } return "" };
})();