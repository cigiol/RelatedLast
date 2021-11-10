var catId;
var brand;
var price=0;
var glassesBrand=["LEE COOPER GÜNEŞ GÖZLÜĞÜ", "SLAZENGER GÜNEŞ GÖZLÜĞÜ","BELMOND GÜNEŞ GÖZLÜĞÜ"];
var doubleBrand=["LEE COOPER", "SLAZENGER","BELMOND"];
var singleBrand=["UP WATCH","ORIENT","SLAZENGER RETRO","EMPORIO ARMANI","FOSSIL","SUPERDRY","RAYMOND WEIL","CALVIN KLEIN","WAINER","MAURICE LACROIX","TOMMY HILFIGER","DIESEL","QUANTUM TARAFTAR","LACOSTE","SWISS MILITARY","POLICE","NACAR","LEVI'S","GUESS COLLECTION","CLAUDE BERNARD","VERSACE","TED BAKER","SKAGEN","ESPRIT","MICHAEL KORS","DKNY","RADO","GUESS","Casio","BALMAIN","ORIGINALS","GANT","TIMBERLAND","BEVERLY HİLLS POLO CLUB","BULOVA","I-WATCH","OBAKU","PIERRE CARDIN","KENNETH COLE","LONGINES","CITIZEN","SEIKO","ESCAPE","CASIO","ESSENCE","TISSOT","HAMILTON","SWATCH"];
for(var i=0;i<dataLayer.length;i++){
    if(dataLayer[i].event=="checkout"){
        if(dataLayer[i].ecommerce.checkout.products.length>1){
            console.log("çok ürün var");
            var vl = new Visilabs();
                vl.AddParameter("json", true);
                vl.Suggest(6, null, null, CallBackMethod);
        }
        else if(dataLayer[i].ecommerce.checkout.products.length==1){
            catId = dataLayer[i].ecommerce.checkout.products[0].category.split("/")[1];
            brand = dataLayer[i].ecommerce.checkout.products[0].brand;
            price = parseInt(dataLayer[i].ecommerce.checkout.products[0].price);


            if(doubleBrand.includes(brand)){
                brand=brand+" GÜNEŞ GÖZLÜĞÜ";
                if(catId=="Erkek Saat"){
                    var vlfilter = {};
                    vlfilter["operand"] = VL_OfferOperator.AND;
                    vlfilter["filters"] = [];
                    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,brand);
                    vlfilter["filters"].push(brandFilter);
                    var vl = new Visilabs();
                    vl.AddParameter("json",true);
                    vl.AddParameter("OM.clist","Erkek%20G%c3%b6zl%c3%bck");
                    vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                }
                else if(catId=="Kadin Saat"){
                    var vlfilter = {};
                    vlfilter["operand"] = VL_OfferOperator.AND;
                    vlfilter["filters"] = [];
                    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,brand);
                    vlfilter["filters"].push(brandFilter);
                    var vl = new Visilabs();
                    vl.AddParameter("json",true);
                    vl.AddParameter("OM.clist","Kadın%20G%c3%b6zl%c3%bck");
                    vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                }
            }
            else if(singleBrand.includes(brand)){

                if(price<1000){
                    if(catId=="Erkek Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.NotEquals,"QUANTUM GÜNEŞ GÖZLÜĞÜ");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Erkek%20G%c3%b6zl%c3%bck");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                    }
                    else if(catId=="Kadin Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.NotEquals,"QUANTUM GÜNEŞ GÖZLÜĞÜ");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Kadın%20G%c3%b6zl%c3%bck");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                    }
                }
                else{
                    if(catId=="Erkek Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"QUANTUM GÜNEŞ GÖZLÜĞÜ");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.cat","Erkek%20G%c3%b6zl%c3%bck");
                        vl.Suggest(2,null,null,CallBackMethod,null,vlfilter);
                        
                        
                    }
                    else if(catId=="Kadin Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"QUANTUM GÜNEŞ GÖZLÜĞÜ");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);   
                        vl.AddParameter("OM.clist","Kadın%20G%c3%b6zl%c3%bck");
                        vl.Suggest(2,null,null,CallBackMethod,null,vlfilter);
                    }
                }

            }
            else{
                if(glassesBrand.includes(brand)){
                    if(catId=="Erkek Gözlük"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.LessOrEquals,"1000");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Erkek Saat");
                        vl.Suggest(2,null,null,CallBackMethod,null,vlfilter);
                        
                    }
                    else if(catId=="Kadın Gözlük"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.LessOrEquals,"1000");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Kadin Saat");
                        vl.Suggest(2,null,null,CallBackMethod,null,vlfilter);
                    }
                }
                else if(brand=="QUANTUM GÜNEŞ GÖZLÜĞÜ"){
                    if(catId=="Erkek Gözlük"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.GreaterOrEquals,"1000");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Erkek Saat");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                        
                    }
                    else if(catId=="Unisex Gözlük"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.GreaterOrEquals,"1000");
                        vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Kadin Saat");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                    }
                }
                else if(brand=="QUANTUM"){
                    if(catId=="Erkek Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.GreaterOrEquals,"1000");
                        //vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Erkek%20G%c3%b6zl%c3%bck");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                        
                    }
                    else if(catId=="Kadin Saat"){
                        var vlfilter = {};
                        vlfilter["operand"] = VL_OfferOperator.AND;
                        vlfilter["filters"] = [];
                        var brandFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.GreaterOrEquals,"1000");
                        //vlfilter["filters"].push(brandFilter);
                        var vl = new Visilabs();
                        vl.AddParameter("json",true);
                        vl.AddParameter("OM.clist","Kadın%20G%c3%b6zl%c3%bck");
                        vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
                    }
                }
            }
            
        }
            function CallBackMethod(dataArr) {
                if(dataArr.length>0){
                    
                var pos = document.querySelector(".step-cart.container.main-container.header-offset");

                var widgetTitle = document.createElement("div");
                widgetTitle.className = "module-title clearfix";
                widgetTitle.id = "alternatifTitle";
                widgetTitle.innerHTML = "<h2>İLGİNİZİ ÇEKEBİLECEK ÜRÜNLER 2</h2>";
                pos.append(widgetTitle);

                var wrapper = document.createElement('div');
                wrapper.id = "cartPageProducts2";
                wrapper.className = 'row';
                pos.append(wrapper);
                
                var titleSeperator = document.createElement("br");
                titleSeperator.className = "module-separator";
                pos.append(titleSeperator);
                
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
                            items:2,
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
            <%VLSendImpressionFunc%>;
                jQuery('#cartPageProducts2 .item a').click(function(){<%VLSendClickFunc%>;});
            }
        
    }
}