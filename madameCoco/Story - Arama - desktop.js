var searchQuery = new URLSearchParams(window.location.search).get("search_text");

if (searchQuery) {

    var stories = [];

    searchQuery = searchQuery.toLowerCase();

    var expectedWords = [];
    var storiesData = [];


    /* Halı */
    expectedWords["hali"] = ["halı", "hali", "kilim", "kılım"];
    storiesData["hali"] = [
        {
            image: "https://cdn-mgsm.akinon.net/cms/2019/12/11/ef2baa24-b912-4910-aba0-6c696acdd974.png?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Vintage",
            target: "/vintage-hali/",
            title: {
                tr: "Vintage", en: "Vintage"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2019/12/11/3042d079-5111-4ca9-83a8-327114efe230.png?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Klasik",
            target: "/klasik-hali/",
            title: {
                tr: "Klasik", en: "Classic"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2019/12/11/5f092fdd-214b-471e-a683-44f59f88ad47.png?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Modern",
            target: "/modern-hali/",
            title: {
                tr: "Modern", en: "Modern"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2019/12/11/17a0d8aa-092c-4035-843c-96a73bfb9678.png?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Etnik",
            target: "/etnik-hali/",
            title: {
                tr: "Etnik", en: "Ethnic"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2019/12/13/36b0ef68-d54d-429a-9f68-5f9d70c95660.png?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Kadife",
            target: "/kadife-hali/",
            title: {
                tr: "Kadife", en: "Velvet"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/ad1ed85a-3c48-4a80-9eb0-541eacc68035.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Post",
            target: "/post-halilari/",
            title: {
                tr: "Post", en: "Plush"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/5159dab9-c8f6-4ca8-94db-8703e7e51cfa.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Kilim",
            target: "/kilimler/",
            title: {
                tr: "Kilim", en: "Rugs"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/13/09713e15-ea6b-45d1-b615-35d7528a54e9.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Paspas",
            target: "/paspaslar/",
            title: {
                tr: "Paspas", en: "Mats"
            }
        }
    ];


    /* Bardak */
    expectedWords["bardak"] = ["bardak"];
    storiesData["bardak"] = [
        {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/76466275-b8d9-45b8-b52b-180bf7fbdab9.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=SuBardagi",
            target: "/su-ve-mesrubat-bardaklari/",
            title: {
                tr: "Su Bardağı", en: "Glass"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/81536a20-ca1d-4d47-9bec-4c41fa0c90bf.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=CayBardagi",
            target: "/cay-bardaklari/",
            title: {
                tr: "Çay Bardağı", en: "Tea Glass"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/e0c71b0c-da9c-4db0-a0f3-dcbd03b6074b.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Kadeh",
            target: "/kadehler/",
            title: {
                tr: "Kadeh ", en: "Wine Glass"
            }
        }, {
            image: "https://cdn-mgsm.akinon.net/cms/2020/01/23/c3f87102-c74e-4a59-ac68-f6113fe44bd3.jpg?OM.zn=acttype-4&OM.zpc=act-4&OM.story=Altliklar",
            target: "/bardak-altliklari/",
            title: {
                tr: "Altlıklar", en: "Coasters"
            }
        }
    ];


    /* Please Don't Edit Below This Line */


    Object.keys(expectedWords).forEach((word) => {
        if (expectedWords[word].includes(searchQuery)) {
            stories = storiesData[word];
        }
    });

    if (stories && stories.length > 0) {

        var lang = document.documentElement.lang == "tr-tr" ? "tr" : "en";
        var title = { tr: "Stiline Göre Seç", en: "Choose Style" };

        if (document.querySelector(".category-content__block.hidden-xs") != null && document.querySelector(".js-container") != null) {
            var categories = document.querySelector('.m-filters-box');

            if (categories) {
                var storyStyle = document.createElement("style");
                storyStyle.innerHTML = ".story-image {border: none;width: 200px;height: 200px;object-fit: cover;margin: 0 auto;} #story-swipe .list__content__item {border: none;} #choose-your-style{border:1px solid #ddd;max-width:900px;padding:15px 15px 0px 15px; margin-bottom: 20px;}#choose-your-style h3{width:100%;border-bottom:1px solid #ddd;padding-bottom:10px;font-size:16px;font-weight:700}#choose-your-style div{border:none;display:block;}#choose-your-style>div{width:20%;float:left;padding:20px 20px 0px 20px}#choose-your-style div.title{text-align:center; padding-bottom: 15px;}";
                document.head.appendChild(storyStyle);

                var wrapper = document.querySelector(".js-container");
                /* Mobile */
                if (wrapper != null) {

                    var storyDiv = document.createElement("div");
                    storyDiv.id = 'story-swipe';
                    storyDiv.className = "visible-xs-block";
                    var links = categories.querySelectorAll('a');

                    for (var i = 0; i < stories.length; i++) {
                        var mainDiv = document.createElement("div");
                        mainDiv.className = "col-sm-2 col-xs-6 list__content__item";
                        mainDiv.innerHTML =
                            '<div class="product-item js-product-wrapper">' +
                            '<a href="' + stories[i].target + '"><img class="product-item-image" src="' + stories[i].image + '">' +
                            '<div class="product-item__title" style="text-align: center;">' +
                            '<span>' + stories[i].title[lang] + '</span></a>' +
                            '</div></div>';
                        storyDiv.appendChild(mainDiv);
                    }

                    wrapper.insertBefore(storyDiv, document.querySelector(".js-container").firstChild);

                    $('#story-swipe').slick({
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false
                    });
                }

                var wrapper = document.querySelector(".list__content__item-wrapper");
                if (wrapper != null) {
                    /* Desktop */
                    /*
                    var storyDiv = document.createElement('div');
                    storyDiv.id = "choose-your-style";
                    storyDiv.innerHTML = "<h3>"+title[lang]+"</h3>";

                    for (var i = 0; i < stories.length; i++) {
                        var mainDiv = document.createElement("div");
                        mainDiv.innerHTML =
                            '<div>' +
                            '<a href="' + stories[i].target + '"><img class="product-item-image" src="' + stories[i].image + '">' +
                            '<div class="title">' + stories[i].title[lang] + '</div></a>' +
                            '</div>';
                        storyDiv.appendChild(mainDiv);

                        if (i == 4 || i == 7) {
                            var mainDiv = document.createElement("div");
                            storyDiv.appendChild(mainDiv);
                        }

                        if (i == 7)
                            break;
                    }

                    var clearFix = document.createElement("div");
                    clearFix.className = "clearfix";
                    clearFix.style = "float: none; clear: both;";
                    storyDiv.appendChild(clearFix);
                    wrapper.querySelector(".category-content__block.hidden-xs").appendChild(storyDiv);
                     */


                    var storyDiv = document.createElement("div");
                    storyDiv.id = 'story-swipe-desktop';
                    storyDiv.className = "hidden-xs";
                    storyDiv.style.width = "100%";

                    style = document.createElement('style');
                    style.type = 'text/css';
                    style.appendChild(document.createTextNode('#story-swipe-desktop {margin-top: -20px;}\n #story-swipe-desktop .slick-list {margin: 0 -15px;}\n  #story-swipe-desktop .slick-slide>div {padding: 0 15px;}'));
                    document.head.appendChild(style);

                    for (var i = 0; i < stories.length; i++) {
                        var mainDiv = document.createElement("div");
                        mainDiv.className = "col-sm-2 col-xs-6 list__content__item";
                        mainDiv.innerHTML =
                            '<div class="product-item js-product-wrapper">' +
                            '<a href="' + stories[i].target + '"><img class="product-item-image" src="' + stories[i].image + '">' +
                            '<div class="product-item__title" style="text-align: center;">' +
                            '<span>' + stories[i].title[lang] + '</span></a>' +
                            '</div></div>';
                        storyDiv.appendChild(mainDiv);
                    }

                    wrapper.insertBefore(storyDiv, document.querySelector(".list__content__item-wrapper").firstChild);

                    $('#story-swipe-desktop').slick({
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        arrows: false
                    });
                    var storyDesktopDiv = document.querySelector('#story-swipe-desktop');
                    var storyEachDiv = storyDesktopDiv.querySelectorAll(".slick-slide");
                    const config = { attributes: true, childList: true, subtree: true };


                    storyEachDiv.forEach.call(storyEachDiv, function (div) {
                        div.style.width = "120px";
                    });

                    var shadow = new MutationObserver(function () {


                        storyEachDiv.forEach.call(storyEachDiv, function (div) {
                            div.style.width = "120px";
                        });
                        if (window.location.href == "https://www.madamecoco.com/list/?search_text=bardak") {
                            storyDesktopDiv.querySelector('.slick-list.draggable > .slick-track').style.width="480px";
                           

                        }

                    });
                    shadow.observe(document.body, config);
                }

            }

        }
    }

}
var pad = document.querySelector('#story-swipe'); pad.style.height = "115px";
if(document.querySelectorAll('#story-swipe > div > div > div.slick-slide > div > div')){
var storyImgWidth = document.querySelectorAll('#story-swipe > div > div > div.slick-slide > div > div');
for(var i=0;i<storyImgWidth.length;i++){
storyImgWidth[i].style.width = "83%";
}
}


/* C: UCA# 2019-12-10 | U: MS# 2020-02-20 */
