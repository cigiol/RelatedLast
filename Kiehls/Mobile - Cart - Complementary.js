function removeDuplicates(identificator) {
    if  (document.querySelectorAll(identificator).length > 1) {
        document.querySelectorAll(identificator)[0].remove();
        removeDuplicates(identificator);
    }
}

var widgetID = 'vl-sepet-tamamlama';

removeDuplicates('#'+widgetID);

try {
    if (window.activeVLWidgets[widgetID]) {
        delete window.activeVLWidgets[widgetID];
    }
} catch (error) {
    
}


vlWidgetHandler("vl-sepet-tamamlama", {
   axis: "X",
   itemsToView: 2.6,
   arrows: {
       size: 33,
       color: "#cdcdcd",
       borderSize: 3.25,
       mobile: true
   },
   autoScroll: false,
   enhancedEcommerce: false
});

quantity = 0;

for (var i=0; i<dataLayer.length; i++) {
    if (dataLayer[i].pageCategory && dataLayer[i].pageCategory == "cart page") {
        
        for (var j=0; j<dataLayer.length; j++) {
            if (dataLayer[j].ecommerce && dataLayer[j].ecommerce.checkout && dataLayer[j].ecommerce.checkout.products) {
                for (var k=(dataLayer[j].ecommerce.checkout.products.length-1); k>=0 ; k--) {
                    quantity += dataLayer[j].ecommerce.checkout.products[k].quantity;
                }
            }
        }

        break;
    }
}

if (quantity < 2) {

if (document.querySelector('#vl-sepet-tamamlama .vl-header')) {
document.querySelector('#vl-sepet-tamamlama .vl-header').innerText = 'Sepetinizi Tamamlayın';
document.querySelector('#vl-sepet-tamamlama .vl-header').style.fontSize = '16px';
}

}