var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://www.outletim.com/jquery-1.8.2.min.js";
$("head").append(s);
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://www.outletim.com/js/jquery.carouFredSel-6.0.4-packed.js";
$("head").append(s);

(function(){
 var vl = new Visilabs();
 vl.AddParameter("json",true);
 vl.Suggest(1,null,null,CallBack);
    showPopUp = function(productList){
        if(jQuery('#vl-container').length === 0){
      var style = '<style>\
          #vl-overlay{z-index: 1000002!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0.8; background-color: rgb(0, 0, 0);}\
             #vl-container{z-index: 1000003!important;position: fixed;font-family: Tahoma, Geneva, sans-serif;margin: auto;border-radius: 10px;width: 760px !important;height: 427px !important;left: 0;right: 0;top: 0;bottom: 0;background-color: #ffffff;}\
          #vl-close{position: absolute;height: 40px; width: 40px; right: 0px;top: -2px; font-size: 30px; color: black; cursor: pointer;z-index: 9999999;text-align: center}\
          .vl-product-container {width:auto;height:auto;margin: 0 auto;padding: 0 20px;}\
          .vl-product-item-image {height:187px;}\
          .vl-sezon{margin-bottom: 5px;font-size:10px;float: left;width: 62px;color: #000;font-family: Tahoma, Geneva, sans-serif;}\
          .vl-outlet{font-size:10px;float: left;width: 71px;color: #000;font-family: Tahoma, Geneva, sans-serif;}\
          .vl-slider-wrapper{text-align: left;float: none;position: absolute;top: 0px;right: auto;bottom: auto;left: 0px;margin: 0px;width: 12136px;height: 310px;z-index: auto;}\
            .vl-slider-item{width: 185px;height: 310px;margin-top: 0px;margin-left: 22px;margin-right: -43px;float: left;}\
          .vl-product-item-name {display: block;font-weight: bold;text-decoration: none;color: black;font-size: 14px;margin-bottom:5px;margin-top:5px;}\
          .vl-product-price {margin-bottom: 5px;font-size:10px;float: left;width: 80px;color: #000;font-weight: normal;background-image: url(img/cizgi2.gif);background-repeat: no-repeat;}\
          .vl-product-dprice {font-size: 10px;font-weight: bold;color: #d0112b;}\
          #vl-alternative>.vl-slider{width:720px !important;height: 335px !important;display: block;text-align: -webkit-center;float: none;position: relative;top: auto;right: auto;bottom: auto;left: auto;z-index: auto;width: 984px;height: 260px;margin: 0px;overflow: hidden;margin-left:30px;}\
          .vl-slider-header {color: #000;width: 360px !important;margin: auto !important; margin-top: 35px !important; margin-bottom: 60px !important;font-size: 24px;text-align: center;line-height: normal;}\
      </style>';
      jQuery('head').append(style);
      var html = '<div id="vl-overlay"/><div id="vl-container"><div id="vl-close">x</div>\
        <div class="vl-widget" id="vl-alternative">\
          <div class="vl-slider-header">Bu Ürünler İlgini Çekebilir!</div>\
        <div class="vl-arrow-btn vl-prev"></div><div class="vl-slider">\
        <ul class="vl-slider-wrapper">';
      for(i=0; i<productList.length; i++){
          html += '<div class="vl-slider-item" "data-id="'+productList[i].code+'" data-name="'+productList[i].title+'" data-price="'+productList[i].dprice+'" data-brand="'+productList[i].brand+'">\
        <div class="vl-product-container"><a href="'+productList[i].dest_url+'">\
                  <img class="vl-product-item-image" src="'+productList[i].img+'" alt="'+productList[i].title+'">\
              </a>\
              <a class="vl-product-item-name" href="'+productList[i].dest_url+'">'+productList[i].title+'</a>\
              <div class="vl-sezon">Sezon Fiyatı: </div><span class="vl-product-price">'+productList[i].price+' TL</span>\
              <div class="vl-outlet">Outletim Fiyatı: </div><span class="vl-product-dprice">'+productList[i].dprice+' TL</span>\
          </div></div>';
      }
      html += '</ul><div class="vl-arrow-btn vl-next"></div></div></div>';
      jQuery('body').append(html);
    
      var productPrice = document.querySelectorAll(".vl-product-price");
      var dPrice = document.querySelectorAll(".vl-product-dprice");
      for(var i =0; i<productPrice.length; i++){
    if(dPrice[i].innerText == productPrice[i].innerText){
          productPrice[i].remove();
    }
      }
      jQuery('#vl-overlay, #vl-close').click(function(){ 
             jQuery('#vl-container, #vl-overlay').remove();
         });
  }
    }
 function CallBack(data){
  console.log(data);
  if(data.length === 0){
      console.log("No products");
      return false;
  }
  else showPopUp(data);
 }
})();

window.setTimeout(function(){
    jQuery('.vl-slider-wrapper').carouFredSel({
        prev: '#prev',
        next: '#next',
        pagination: "#pager",
        scroll: 500
    });
}, 500);



