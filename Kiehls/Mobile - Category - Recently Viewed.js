function removeDuplicates(identificator) {
    if  (document.querySelectorAll(identificator).length > 1) {
        document.querySelectorAll(identificator)[0].remove();
        removeDuplicates(identificator);
    }
}

var widgetID = 'vl-cat-recently-viewed';

removeDuplicates('#'+widgetID);

try {
    if (window.activeVLWidgets[widgetID]) {
        delete window.activeVLWidgets[widgetID];
    }
} catch (error) {
    
}



if (document.getElementById('vl-cat-recently-viewed')) {

vlWidgetHandler("vl-cat-recently-viewed", {
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

}