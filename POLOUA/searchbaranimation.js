(function () {
    var searchSelector = ".js-search-input";
    var order = 0;
    var index = 0;
    function animatePlaceholder() {
        var array = ["Gömlek", "T-shirt", "Sweatshirt", "Triko", "Pantolon", "Ayakkabı", "Çanta"];
        if (index == 0) {
            var text = array[order][index];
            jQuery(searchSelector).attr("placeholder", "");
            jQuery(searchSelector).attr("placeholder", text);
        }
        else {
            text = jQuery(searchSelector).attr("placeholder") + array[order][index];
            jQuery(searchSelector).attr("placeholder", text);
        }
        index++;
        if (index == array[order].length) {
            index = 0;
            order++;
            if (order == array.length) {
                order = 0;
            }
        }
    }
    setInterval(animatePlaceholder, 250);
                <%VLSendImpressionFunc%>;
document.querySelector(searchSelector).addEventListener("click",function(){
        <%VLSendClickFunc%>;
    });
})();