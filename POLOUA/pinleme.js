(function(){
    var campID = 316;
    var impSent = false;
    var campName="Yeni Yıl Banner Pin Kahverengi Kaşkol";
    var productData = {boxBottom: "30px", boxRight: "0px", name:"Kahverengi Kaşkol", img: "https://aydinli-polo.akinoncdn.com/products/2020/01/24/372698/195bda54-5256-439e-9549-ad23209ae8e8_size390x585_cropCenter.jpg", href: "https://tr.uspoloassn.com/kahverengi-kaskol-50209756-vr158/", sku: "50209756-VR158", dataPk: "", firstPrice: 89.95, finalPrice: 39.95};
    var iconData = {pinTop: "18%", pinRight: "36%", img:"https://img.euromsg.net/74C9BB1BBC5D4AB89DFCFDA808111C2E/images/plus.png", color: 'transparent'};
    var bannerSelector = "#cocuk-urunleri-bere-dis-giyim-3 > div.triplebanner__wrap__background";
    var iconHtml = '<div class="vl-view-item" data-product-id="'+productData.sku+'" style="cursor: pointer; height: 30px;width: 30px;position: absolute;top: '+iconData.pinTop+';right: '+iconData.pinRight+';background-color: '+iconData.color+';padding: 5px;border-radius: 5px;"><img src="'+iconData.img+'"></div>';
    jQuery(bannerSelector).append(iconHtml);
    var productHTML = '<style class="vl-product-view-container-style" data-product-id="'+productData.sku+'">\
    .vl-product-view-container[data-product-id="'+productData.sku+'"]{z-index: 1000003!important;position: absolute;margin: auto; padding: 10px;transition: opacity 1.5s;background-color: white;border-radius: 10px;width: 320px;height: 213px;left: 0;right: '+productData.boxRight+';top: 0;bottom: '+productData.boxBottom+';-webkit-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);-moz-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-image-area{float:left; height: 100%}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-image-area img{height: 100%; max-width: 200px;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-info-area{float: right; width: 170px; padding: 10px;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-title-area{font-size: 16px;font-weight: 700;text-align: left;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-price-area{margin-top: 20px;text-align: left;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-first-price{text-decoration: line-through;color: #999;font-size:12px}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-final-price{margin-left: 10px;font-size: 14px;font-weight: 600;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-nav-button{width: 150px;height: 35px;line-height: 38px;padding: 0;font-size: 14px;background: #03a87c;text-align: center;margin: auto;margin-top: 15px;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-nav-button a{color: white;font-weight: 600;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-basket-button{width: 150px;height: 35px; cursor: pointer;line-height: 38px;padding: 0;font-size: 14px;color: white;font-weight: 600;background: #b70234;text-align: center;margin: auto;margin-top: 5px;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-sku-area{margin-top: 12px; font-size: 12px;}\
            .vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-closer{position: absolute; cursor: pointer; top: -10px;right: -10px;background-color: black;width: 20px;height: 20px;text-align: center;color: white;border-radius: 20px;font-size: 14px;padding: 4px;cursor: pointer;}\
            </style>\
    <div class="vl-product-view-container" data-product-id="'+productData.sku+'">\
    <div class="vl-closer">X</div>\
    <div class="vl-product-image-area"><img src='+productData.img+'></div>\
    <div class="vl-product-info-area">\
    <div class="vl-product-title-area">'+productData.name+'</div>\
    <div class="vl-sku-area">Ürün Kodu: '+productData.sku+'</div>\
    <div class="vl-price-area">\
    <span class="vl-first-price">'+productData.firstPrice+' TL</span>\
    <span class="vl-final-price">'+productData.finalPrice+' TL</span>\
    </div>\
    <div class="vl-nav-button"><a href="'+productData.href+'">Ürün Detayına Git</a></div>\
    <div class="vl-basket-button" data-pk="'+productData.dataPk+'">Sepete Ekle</div>\
    </div></div>';
    jQuery('.vl-view-item[data-product-id="'+productData.sku+'"]').click(function(){
    if(jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"]').length === 0){
    jQuery(this).parent().append(productHTML);
    if(productData.firstPrice == productData.finalPrice){
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-first-price').hide();
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-final-price').attr("style", "margin-left: 0 !important");
    }
    if(jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-title-area').text().length < 20){
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-product-title-area').attr("style", "font-size: 18px !important");
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-nav-button').attr("style", "margin-top: 25px !important");
    }
    if(!impSent){
    try{VLSendImpressionFunc(campID, 4);}catch(e){};
    ga("create","UA-2253042-20",{name:"RMC",cookieDomain:"auto"});
    ga("RMC.send","event","RMC",campName,"Impression",{nonInteraction:!0});
    impSent = true;
    }
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"]').click(function(){
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"], .vl-product-view-container-style[data-product-id="'+productData.sku+'"]').remove();
    });
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-nav-button a').click(function(){
    try{VLSendClickFunc(campID, 4);}catch(e){};
    ga("RMC.send","event","RMC",campName,"Click",{nonInteraction:!0})
    window.location = jQuery(this).attr(href);
    });
    if(productData.dataPk === ""){
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-basket-button').hide();
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-nav-button').attr("style", "margin-top: 25px !important");
    }
    else{
    jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"] .vl-basket-button').click(function(){
    var url = "https://tr.uspoloassn.com/baskets/basket/";
           var method = "POST";
    var postData = {"product": jQuery(this).attr("data-pk"), "quantity": 1};
    var token = getCookie("csrftoken")
    var shouldBeAsync = true;
           var request = new XMLHttpRequest();
           request.onload = function () {
               var status = request.status;
               var data = request.responseText;
               console.log("Data Sent Status: " + status);
               jQuery('.js-basket-quantity').text(JSON.parse(data).basket.total_quantity);
               jQuery('.vl-basket-button').text("Sepete Eklendi");
               setTimeout(function(){
                jQuery('.vl-product-view-container[data-product-id="'+productData.sku+'"], .vl-product-view-container-style[data-product-id="'+productData.sku+'"]').remove();
    return false;
               }, 2000);
           }
           request.open(method, url, shouldBeAsync);
           request.setRequestHeader("Content-Type", "application/json");
           request.setRequestHeader("Cache-Control", "no-cache");
           request.setRequestHeader("x-csrftoken", token);
           request.send(JSON.stringify(postData));
    });
    }
    }
    });
    function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""};
    })();