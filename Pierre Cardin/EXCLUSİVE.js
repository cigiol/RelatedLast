!function () {
   r = "https://img.visilabs.net/banner/uploaded_images/230_1218_20200701111630962.png",
   setTimeout(function () {
         var img = "https://img.visilabs.net/banner/uploaded_images/230_1218_20200701111630962.png";
         var style = '<style>#vl-badge{position: absolute;top: 10px;left: 45px;}</style>';
         jQuery('head').append(style);
         jQuery('.product__detail-image').append('<div id="vl-badge"><img src="' + img + '"/>');

         var newHTML = "<div class='product__facet--editor-note' style='margin-top:30px;position:relative;'><img src='https://img.visilabs.net/banner/uploaded_images/230_1218_20200701111602561.png' style='position:absolute; right:20px; top:-7px;'>" + $(".product__facet--editor-note").html()+"<br style='clear:both;'/></div>";
         jQuery(".product__primary").find(".xl").after(newHTML);
         jQuery(".product__detail-info").find(".product__facet--editor-note").remove();
         jQuery(".product__facet--editor-note").css("border","solid 1px #cda443");
         jQuery(".product__facet--editor-note").find("h5").html("EXCLUSIVE COLLECTION");
         jQuery(".product__facet--editor-note").find("h5").css({"font-weight":"bold"});
         jQuery(".product__facet--editor-note").find("h5").before("<img class='editor-note-img' style='float: left;margin: 0 20px 0px 0;' src='"+  $(".product__detail-slider li:first-child").find("img").attr("src")  +"'>");
ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
ga('RMC.send', 'event', 'RMC', "Ürün Detay - Exc. Col. Badge", "Impression", {nonInteraction: true});
         <%VLSendImpressionFunc%>;
         t = "<style>\t\t\t\t@media only screen and (max-width: 600px){.vl-badge{left: 10px !important;}.editor-note-img{display:none;}}\t\t\t</style>", jQuery("head").append(t);
         try {
            ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
ga('RMC.send', 'event', 'RMC', "Ürün Detay - Exc. Col. Badge", "Impression", {nonInteraction: true});
         <%VLSendImpressionFunc%>;
         } catch (t) {}  
   }, 500)
}();