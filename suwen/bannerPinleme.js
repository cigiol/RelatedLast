(function(){
	var campID = 135;
	var impSent = false;
	var productData = {boxBottom: "0px", boxRight: "-380px", name:"Flame Slip Külot - SİYAH", img: "https://cdn-suwen.mncdn.com/Content/Images/Thumbs/0010386_flame-slip-kulot-siyah-st3970601012-2914.jpeg", href: "/p/flame-slip-kulot-siyah-st3970601012-2914", sku: "ST3970601012", dataPk: "", firstPrice: 79.90, finalPrice: 39.95};
	var iconData = {pinTop: "70%", pinRight: "15%", img:"//img.euromsg.net/B1F2D66CC99E444982355DC1277B9605/images/img_1779.png" color: 'gray'};
	var bannerSelector = "#3395 .item[href='/c/tum-urunler-1?specs=971']";
	var iconHtml = '<div class="vl-view-item" style="height: 30px;width: 30px;position: absolute;top: '+iconData.pinTop+';right: '+iconData.pinRight+';background-color: '+iconData.color+';padding: 5px;border-radius: 5px;"><img src="'+iconData.img+'"></div>';
	jQuery(bannerSelector).append(iconHtml);
	var style = '<style class="vl-product-view-container-style">\
		.vl-product-view-container{display: none;z-index: 1000003!important;position: absolute;margin: auto; padding: 10px;transition: opacity 1.5s;background-color: white;border-radius: 10px;width: 425px;height: 310px;left: 0;right: '+productData.boxRight+';top: 0;bottom: '+productData.boxBottom+';-webkit-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);-moz-box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);box-shadow: 0px 1px 31px 8px rgba(0,0,0,0.23);}\
        .vl-product-image-area{float:left; height: 100%}\
        .vl-product-image-area img{height: 100%; max-width: 200px;}\
        .vl-product-info-area{float: right; width: 200px; padding: 15px;}\
        .vl-product-title-area{font-size: 20px;font-weight: 700;text-align: left;}\
        .vl-price-area{margin-top: 20px;text-align: left;}\
        .vl-first-price{text-decoration: line-through;color: #999;}\
        .vl-final-price{margin-left: 10px;font-size: 20px;font-weight: 600;}\
        .vl-nav-button{width: 170px;height: 40px;line-height: 42px;padding: 0;font-size: 16px;background: #03a87c;text-align: center;margin: auto;margin-top: 40px;}\
        .vl-nav-button a{color: white;font-weight: 600;}\
        .vl-basket-button{width: 170px;height: 40px;line-height: 42px;padding: 0;font-size: 16px;color: white;font-weight: 600;background: #b70234;text-align: center;margin: auto;margin-top: 5px;}\
        .vl-sku-area{margin-top: 15px;}\
        .vl-closer{display:none;position: absolute;top: -10px;right: -10px;background-color: black;width: 20px;height: 20px;text-align: center;color: white;border-radius: 20px;font-size: 14px;padding: 0px;cursor: pointer;}\
        </style>';
    jQuery('head').append(style);
	var productHTML = '<div class="vl-product-view-container">\
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
	jQuery('.vl-view-item').parent().append(productHTML);
	jQuery('.vl-view-item, .vl-product-view-container').mouseover(function(){
		jQuery('.vl-product-view-container').show();
		if(!impSent){
			try{VLSendImpressionFunc(campID, 4);}catch(e){};
			impSent = true;
		}
		jQuery('.vl-nav-button a').click(function(){
			try{VLSendClickFunc(campID, 4);}catch(e){};
			window.location = jQuery(this).attr("href");
			return false;
		});
		if(productData.dataPk === ""){
			jQuery('.vl-basket-button').hide();
		}
		else{
			jQuery('.vl-basket-button').click(function(){
				var url = "https://www.suwen.com.tr/baskets/basket/";
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
		            	jQuery('.vl-product-view-container, vl-product-view-container-style').remove();
						return false;
		            }, 2000);
		        }
		        request.open(method, url, shouldBeAsync);
		        request.setRequestHeader("Content-Type", "application/json");
		        request.setRequestHeader("Cache-Control", "no-cache");
		        request.setRequestHeader("x-csrftoken", token);
		        request.send(JSON.stringify(postData));
			    return false;
			});
		}
		return false;
	});
	jQuery('.vl-product-view-container').mouseout(function(){
		jQuery('.vl-product-view-container').hide();
	});
	function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""};
})();