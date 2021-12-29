var vl = new Visilabs();
vl.AddParameter("json", true);
vl.Suggest(64, null, null, Detect);

function Detect(dataArr) {
    if (dataArr.length > 1) {
        CallBackMethod(dataArr);
    }
    else {
        vl.Suggest(35, null, null, CallBackMethod);
    }
}


function CallBackMethod(dataArr) {
    if (dataArr.length > 0) {

        var pos = document.querySelector("[data-slug=homepage-section-1]");

        var style = document.createElement("style");
        style.innerHTML = ` 
        .swiper-container{
            width:100%;
            height:100%;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .swiper-container:hover .vl-slider-item:hover{  transform:scale(1.02);  filter:blur(0px);  opacity:1;  box-shadow:0 8px 20px 0px rgba(0,0,0,0.125);}
        .vl-banner {
            display: inline-block;
            font-size: 15px;
            float:left;
        }
        .vl-add-basket > div{
            background: white;
            padding: 6px;
            margin: auto;
            margin-top: 15px;
            font-size: 17px;
            width: 70%;
            color: rgb(227, 112, 92);
            border: 1px solid rgb(227, 112, 92);
            border-radius: 8px;
            box-shadow: 6px 6px 3px -2px rgb(0 0 0 / 13%);
        }
        .vl-banner-dprice{
            font-size: 18px;
            color: #a80000;
            display: inline-block;
            font-weight: 600;
        }
        .vl-discounted {
            display: inline-block;
            padding: 5px 8px;
            margin-top: 9px;
            font-weight: 200;
            border: 1px solid #a80000;
            color: #a80000;
            float: right;
            font-size:14px;
        }

        #vl-interesting-widget {
            margin-top: 10px;
        }

        #vl-interesting-widget>.vl-slider {
            margin-right: 1px;
        }

        .vl-header-top {
            position: relative;
            text-align: center;
            font-size: 23px;
            display: block;
            font-family: Open Sans;
            color: #2f3032;
            font-weight: 600;
        }

        .vl-header-top::after {
            content: "";
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 0;
            width: 100%;
            height: 3px;
            background: #dedede;
        }

        .vl-header {
            display: inline-block;
            padding: 10px 20px;
            background: #fff;
            position: relative;
            z-index: 2;
        }


        .vl-prev {
            left: -25px !important;
        }

        .vl-next {
            right: -25px !important;
        }

        .vl-arrow-btn {
            bottom: calc(50% - 30px) !important;
        }

        .vl-slider-item {
            text-decoration: none;
            color: black;
        }

        .vl-slider-item:hover {
            text-decoration: none;
            color: black;
        }

        .vl-product-container {
            background-color: #f8f8f8;
            padding: 10px;
        }

        .vl-product-img {
            width: 100%;
            margin-bottom: 20px;
        }

        .vl-title {
            font-size: 19px;
            font-weight: 400;
            margin: 0 5px 20px 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 83px;
            text-align: left;
        }

        .vl-price {
            font-size: 17px;
            text-decoration: line-through;
            color: #a80000;
            font-weight: 400;
            text-align:left;
        }

        .vl-dprice {
            font-size: 26px;
            color: #000;
            font-weight: 600;
            text-align:left;
        }

        .vl-price-item {
            display:flex;
            width:100%;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            line-height: 1.2;
        }

        @media only screen and (max-width: 767px) {
            .vl-header-top {
                 font-size: 17px;
            }
            .vl-banner {
                font-size:12px;
                margin:0 auto;
            }
            .vl-banner-dprice{
                font-size:15px;
            }

            .vl-discounted {
                float: left;
                font-size: 10px;
                padding: 5px 2px;
                margin-top: 0
            }

            .vl-title {
                font-size: 15px;
                height: 45px !important;
            }

            .vl-price {
                font-size: 14px;
                font-weight: unset;
            }

            .vl-dprice {
                font-size: 16px;
                font-weight: unset;
            }

            .vl-price-item {
                margin:0 auto;
            }
            .vl-add-basket > div{
                font-size:15px;
            }
        }

    @media only screen and (max-width: 600px) {
    .vl-product-img {
        margin-bottom: 5px !important;
    }
    .vl-title {
        margin-bottom: 10px;
    }

    .vl-discounted {
    display: none;
    }
    }
    `;
        document.head.appendChild(style);


        var wrapper = document.createElement('div');
        wrapper.id = "cartPageProducts";
        pos.after(wrapper);


        var html = "";
        dataArr.forEach(product => {
            html += `
            <div class="vl-slider-item swiper-slide">
            <div class="vl-product-container">
            <a href="${product.dest_url}" data-id="${product.code}" data-name="${product.title}" data-price="${product.dprice}" data-brand="${product.brand}" style="text-decoration:none;color:#000">
                <img class="vl-product-img" src="${product.attr7}" alt="${product.title}"">
                <div class=" vl-title">${product.title}</div>
            <div class="vl-price-item">
            <div class="vl-price">${product.price} TL</div>
            <div class="vl-dprice">${product.dprice} TL</div>
            </div>

            </a>
            <a class="vl-add-basket js-add-basket" data-id="${product.attr6}" data-pk="${product.attr6}">
                        <div>SEPETE EKLE</div>
            </a>
            </div>
            </div>
            `;
        });
        wrapper.innerHTML = '<div style="position: relative"><div id="vl-interesting-widget" class="swiper-container"><div class="vl-header-top"><div class="vl-header">Sizin İçin Seçtiklerimiz</div></div><div class="swiper-wrapper">' + html + '</div></div><div class="swiper-int-next"></div><div class="swiper-int-prev"></div> </div>';

        (function swiperGun() {
            var k = document.createElement("script");
            k.setAttribute("src", "https://unpkg.com/swiper/swiper-bundle.min.js");
            k.onload = initWidget;
            document.head.appendChild(k);
            jQuery('head').append("<style>@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-int-next,.swiper-int-prev{outline:none;position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#96050c;}.swiper-int-next.swiper-button-disabled,.swiper-int-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-int-next:after,.swiper-int-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-int-prev,.swiper-container-rtl .swiper-int-next{left:-25px;right:auto}.swiper-int-prev:after,.swiper-container-rtl .swiper-int-next:after{content:'prev'}.swiper-int-next,.swiper-container-rtl .swiper-int-prev{right:-25px;left:auto}.swiper-int-next:after,.swiper-container-rtl .swiper-int-prev:after{content:'next'}.swiper-int-next.swiper-button-white,.swiper-int-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-int-next.swiper-button-black,.swiper-int-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}</style>");
        })();




        function initWidget() {


            var identifier = "vl-interesting-widget";

            var swiper = new Swiper('#vl-interesting-widget', {
                slidesPerView: 4,
                spaceBetween: 15,
                autoplay: false,
                observer: true,
                observeParent: true,
                loop: false,
                clickable: true,
                navigation: {
                    nextEl: '.swiper-int-next',
                    prevEl: '.swiper-int-prev',
                },
                breakpoints: {
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerview: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    360: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    }
                }
            });

            var wrapper = document.getElementById(identifier);

            if (wrapper) {
                var fixArrows = document.createElement("style");
                fixArrows.innerHTML = `.swiper-int-next, .swiper-int-prev {color: inherit;outline: none;font-weight: 700;}
            .swiper-int-prev:after { content:"❮" ;color:#AD1111;}
            .swiper-int-next:after { content:"❯" ;color:#AD1111; }`;
                document.head.append(fixArrows);

                var fixArrows = document.createElement("style");
                fixArrows.innerHTML = `.swiper-int-next, .swiper-int-prev {color: inherit;outline: none;font-weight: 700;}
            .swiper-int-prev:after { content:"❮" ;color:#AD1111;}
            .swiper-int-next:after { content:"❯" ;color:#AD1111; }`;
                document.head.append(fixArrows);
                if (window.innerWidth <= 800) {
                    $("#vl-interesting-widget").parent("div").find(".swiper-int-next").removeClass("swiper-int-next").addClass("swiper-button-hidden");
                    $("#vl-interesting-widget").parent("div").find(".swiper-int-prev").removeClass("swiper-int-prev").addClass("swiper-button-hidden");
                }
                var productPrice = wrapper.querySelectorAll(".vl-price");
                var dPrice = wrapper.querySelectorAll(".vl-dprice");

                for (var i = 0; i < productPrice.length; i++) {
                    if (dPrice[i].innerText == productPrice[i].innerText) {
                        productPrice[i].style.display = "none";
                        dPrice[i].style.color = '#000';
                    }
                }
                for (i = 0; i < dPrice.length; i++) {
                    if (dPrice[i].innerText.indexOf(".")) {
                        dPrice[i].innerText = dPrice[i].innerText.replace(".", ",");
                    }
                    if (productPrice[i].innerText.indexOf(".")) {
                        productPrice[i].innerText = productPrice[i].innerText.replace(".", ",");
                    }
                }
                $("#vl-interesting-widget .vl-product-container").on("click", function () { <%VLSendClickFunc%> })
            }
        }
    }
}
