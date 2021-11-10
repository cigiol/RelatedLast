setTimeout(() => {
<%VLSendImpressionFunc%>
ga("create", "UA-74706219-2", {name: "RMC", cookieDomain: "auto"});
ga('RMC.send', 'event', 'RMC', "Social Proof Mobile Purchase", "Impression", {nonInteraction: true});
var addtocart = document.querySelector("#obj-add_to_cart_button");
addtocart.addEventListener("click", function(){
<%VLSendClickFunc%>
ga('RMC.send', 'event', 'RMC', "Social Proof Mobile Purchase", "Add to Cart", {nonInteraction: true});
});
    var vlSocial = document.createElement("div");
    vlSocial.id = "vlSocial";
    vlSocial.style.left = "15%";
    vlSocial.style.position = "fixed";
    vlSocial.style.zIndex = "999999";
    vlSocial.style.fontFamily = "Helvetica";
    vlSocial.innerHTML = '<span id="vlSocialText" style="top: 3px;position: absolute;z-index: 9999999;color: #fff;left: 15%;font-size: 14px;">Bu ürünü bugün <span id="vlSocialCount" style="font-weight: bold;">10 kişi</span> satın aldı.</span><img id="vlSocialBG" src="https://img.visilabs.net/banner/uploaded_images/244_1239_20200409165708618.png" style="width: 100%;max-width: 275px;z-index: 99999;">';
    document.querySelector(".widget.widget_mobile_product_detail > div:nth-child(2) > div").appendChild(vlSocial);
    
    var vlSocialCount = document.querySelector("#socialCountID");
    if (vlSocialCount){
        document.querySelector("#vlSocialCount").innerText = (parseFloat(vlSocialCount.innerText)+10)+" kişi";
    } else {
        document.querySelector("#vlSocialCount").innerText = "10 kişi";
    }

    }, 1500);
function variantSelection(){
    var vlSocial = document.querySelector("#vlSocialCount");
    if (vlSocial){
    document.querySelector("#left_content_2_modiface_controls_container_2_0 > div").appendChild(vlSocial);
    document.querySelector("#left_content_2_modiface_controls_container_2_0 > div").style.display = "block";
    } else {
        var pv="",
   pn="",
   inv="",
   ppr="",
   brand="",
   itemGroupId="";

   for (i = 0; i < dataLayer.length; i++) {
       if (dataLayer[i].eventAction==="Product Detail") {
           if (dataLayer[i].ecommerce) {
               if (dataLayer[i].ecommerce.detail) {
                   if (dataLayer[i].ecommerce.detail.products) {
                       if (dataLayer[i].ecommerce.detail.products.length > 0) {
                           var product = dataLayer[i].ecommerce.detail.products[0];

                           pv = product.dimension40;
                           pn = product.name;
                           inv = "";
                           ppr = product.price;
                           brand = product.brand;
                           itemGroupId = product.dimension42;
                           break;
                       }
                   }
               }
           }
       }
   }

var VL = new Visilabs();
VL.AddParameter("OM.pv",pv);
VL.AddParameter("OM.pn",pn);
VL.AddParameter("OM.inv" , inv);
VL.AddParameter("OM.ppr", ppr);
VL.AddParameter("OM.pv.1", brand);
VL.AddParameter("OM.pv.2", itemGroupId);
VL.Collect();
VL.SuggestActions();
    }
}
function variantListener(){
    jQuery('a[id*=obj-item').click(function(){setTimeout(variantSelection, 3000);});
}
var j = document.createElement("script");
j.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");
j.onload = variantListener;
document.head.appendChild(j);