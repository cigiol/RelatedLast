(function () {
    if(!document.querySelector('.vl_searchItems')) {
        var searchSelector = "input[name='search_text']";
        var order = 0;
        var index = 0;
        var array = ["Sweatshirt", "Mont", "Kazak", "Jean", "Pantolon"];
        var links = ["https://gap.com.tr/list/?search_text=sweatshirt&sorter=newcomers", "https://gap.com.tr/dis-giyim-gap/", "https://gap.com.tr/kazaklar-gap/", "https://gap.com.tr/jean-gap/", "https://gap.com.tr/pantolonlar-gap/"];
        function animatePlaceholder() {
            if (index == 0) {
                var text = array[order][index];
                $(searchSelector).attr("placeholder", "");
                $(searchSelector).attr("placeholder", text);
            }
            else {
                text = $(searchSelector).attr("placeholder") + array[order][index];
                $(searchSelector).attr("placeholder", text);
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
        setInterval(animatePlaceholder, 350);

        var style = document.createElement("style");
        style.innerHTML = `
            .vl_searchItems {display: flex;float: right;clear: right;margin-top:5px;align-items:center;}
            .vl_searchItems__text {font-size: 12px;font-weight: 700}
            .vl_searchItems__item {font-size: 11px;margin-left: 5px;text-decoration: underline;}
        `;
        document.head.append(style);

        var linksOuter = document.createElement("div");
        linksOuter.setAttribute("class", "vl_searchItems");

        linksText = document.createElement("span");
        linksText.setAttribute("class", "vl_searchItems__text");
        linksText.innerHTML = "En Çok Arananlar: ";
        
        var itemsOuter = document.createElement("div");
        itemsOuter.setAttribute("class", "vl_searchItems__itemsOuter");


        for(var i = 0; i < array.length; i++) {
            var linkItems = document.createElement("a");
            linkItems.setAttribute("href", links[i]);
            linkItems.setAttribute("class", "vl_searchItems__item");
            linkItems.innerHTML = array[i];
            itemsOuter.append(linkItems);
        }

        linksOuter.append(linksText,itemsOuter);
        document.querySelector('.search.js-search-form').after(linksOuter);

        <%VLSendImpressionFunc%>;

        $(document).on("click", ".vl_searchItems__item" ,function(e) {
            e.preventDefault();
            <%VLSendClickFunc%>;
            setTimeout(() => {
                window.location = this.href;
            }, 250);
        });
    }
    })();