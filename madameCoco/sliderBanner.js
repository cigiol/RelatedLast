var desktopBadges = ["https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220104162806597.jpg","https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220131173708432.jpg","https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220105165745546.jpg"];
var mobileBadges = ["https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220131173648143.jpg", "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220104163226410.jpg", "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/3_3_20220105165725145.jpg"];
var load = false;

(function swiperGun() {
    var k = document.createElement("script");
    k.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.11/swiper-bundle.min.js");
    k.onload=badgeIt;
    document.head.appendChild(k);

    var j = document.createElement('link');
    j.rel = "stylesheet";
    j.type = "text/css";
    j.href = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.11/swiper-bundle.min.css";
    document.getElementsByTagName("head")[0].appendChild(j);
})();
function badgeIt() {
    if (!document.querySelector("#vl-slider-banner")) {
        var target = document.querySelector(".col-sm-12.product-content-tabs");
        var style = document.createElement("style");
        style.innerHTML = `
            #vl-slider-banner{
                position:relative;
                height:65px;
                overflow:hidden;
            }
            @media only screen and (max-width:700px){
                #vl-slider-banner{
                    max-height:80px;
                    height:unset;
                }
            }
            
        `;
        document.head.append(style);

        var masterDiv = document.createElement("div");
        masterDiv.setAttribute("id", "vl-slider-banner");
        masterDiv.setAttribute("class","swiper-container");
        var div = document.createElement("div");
        div.setAttribute("class", "swiper-wrapper");
        if (window.innerWidth > 600) {
            if (desktopBadges.length > 0) {
                load = true;
            }
            desktopBadges.forEach(element => {
                div.innerHTML += `<div class="swiper-slide"><img src="${element}"></div>`;
            });
        }
        else {
            if (mobileBadges.length > 0) {
                load = true;
            }
            mobileBadges.forEach(element => {
                div.innerHTML += `<div class="swiper-slide"><img src="${element}"></div>`;
            });
        }
        masterDiv.append(div);
        target.insertBefore(masterDiv, target.firstElementChild);
        if (load) {
            var swiper = new Swiper('#vl-slider-banner', {
                slidesPerView: 1,
                spaceBetween: 1,
                direction: "vertical",
                observer: true,
                observeParent: true,
                loop: true,
                clickable: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    1024: {
                        slidesPerview: 1,
                        spaceBetween: 1,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    360: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 1,
                    }
                }
            });
            document.querySelector("#vl-slider-banner").swiper.update();
        }
    }
}