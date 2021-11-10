var starterPath = window.location.pathname;

var observer = new MutationObserver(mutationRecords => {
   
    if (starterPath != window.location.pathname) {
        observer.disconnect();
        
        var widget = document.querySelector('#vl-son-gezdikleriniz');

        if (widget)
        {
            widget.remove();
        }
    }
});
    
observer.observe(document.body, {
    childList: true,
    subtree: false,
    characterData: false,
    attributes: false
});




function removeDuplicates(identificator) {
    if  (document.querySelectorAll(identificator).length > 1) {
        document.querySelectorAll(identificator)[0].remove();
        removeDuplicates(identificator);
    }
}

var widgetID = 'vl-son-gezdikleriniz';

removeDuplicates('#'+widgetID);

try {
    if (window.activeVLWidgets[widgetID]) {
        delete window.activeVLWidgets[widgetID];
    }
} catch (error) {
    
}



vlWidgetHandler("vl-son-gezdikleriniz", {
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