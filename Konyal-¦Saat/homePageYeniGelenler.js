var vl = new Visilabs();
        vl.AddParameter("json", true);
        vl.Suggest(4, null, null, CallBackMethod);
        function CallBackMethod(dataArr) {
            var bannerUnder = document.querySelectorAll(".module-separator")[5];
            var wrapper = document.createElement('div');
            wrapper.id = "newProductsWidget";
            wrapper.className = 'row';
            wrapper.style.marginBottom="25px";
            bannerUnder.parentNode.insertBefore(wrapper, bannerUnder.nextSibling);
            var widgetTitle = document.createElement("div");
            widgetTitle.className = "module-title clearfix";
            widgetTitle.id = "newProductsTitle";
            widgetTitle.innerHTML = "<h2>YENİ GELEN ÜRÜNLER</h2>";
            bannerUnder.parentNode.insertBefore(widgetTitle, bannerUnder.nextSibling);
            var titleSeperator = document.createElement("br");
            titleSeperator.className = "module-separator";
            bannerUnder.parentNode.insertBefore(titleSeperator, bannerUnder.nextSibling);
            
            var html="";
            dataArr.forEach(product => {
                html += '<div class="item itemauto"> <div class="product relative custom-product-cntnr"> <div class="image-hover hover-nav"> <a href="' + product.dest_url + '" title="' + product.title + '"> <img src="' + product.img + '" alt="img" class="img-responsive" title="' + product.title + '"> </a> </div><div class="description" data-sku="' + product.code + '"> <h4><a class="model-info" href="' + product.dest_url + '"><span class="first-word">' + product.brand + ' </span> ' + product.title + '</a></h4> </div><div class="price price-box"> <div class="pull-left" style="width: 100%; text-align: center;"> <span class="price-standard"> ' + product.price + ' TL </span> <span class="price-sales">' + product.dprice + ' TL</span> </div><div class="discount-v2" style="display:none;width:0px;"> <span title="İndirim Oranı"><span>%</span>' + product.discount + '</span> </div></div></div></div>';
                
            });
            wrapper.innerHTML = '<div class="center-block relative urun-slider"><div class="owl-carousel owl-theme product-show-case smpl-carousel owl-loaded owl-drag" data-lg="5" data-md="4" data-sm="3" data-xs="2" data-xxs="1" data-pgn="true"> '+html+' </div></div>';
            $('.owl-carousel').owlCarousel({
                loop:true,
                lazyLoad:true,
                margin:10,
                dots: true,
                nav : false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                        loop:false
                    }
                }
            });
            
        }