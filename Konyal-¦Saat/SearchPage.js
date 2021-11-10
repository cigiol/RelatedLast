var searchText=VisiParameters["OM.OSS"].toLowerCase();

if(searchText=="armani"){
    var vlfilter = {};
    vlfilter["operand"] = VL_OfferOperator.AND;
    vlfilter["filters"] = [];
    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"Citizen");
    vlfilter["filters"].push(brandFilter);
    var vl = new Visilabs();
    vl.AddParameter("json",true);
    vl.Suggest(15,null,null,CallBackMethod,null,vlfilter);
}
else if(searchText=="diesel"){
    var vlfilter = {};
    vlfilter["operand"] = VL_OfferOperator.AND;
    vlfilter["filters"] = [];
    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"WAINER");
    vlfilter["filters"].push(brandFilter);
    var vl = new Visilabs();
    vl.AddParameter("json",true);
    vl.Suggest(15,null,null,CallBackMethod,null,vlfilter);
}
else if(searchText=="welder" || searchText=="guess"){
    var vlfilter = {};
    vlfilter["operand"] = VL_OfferOperator.AND;
    vlfilter["filters"] = [];
    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"Quantum");
    vlfilter["filters"].push(brandFilter);
    var vl = new Visilabs();
    vl.AddParameter("json",true);
    vl.Suggest(15,null,null,CallBackMethod,null,vlfilter);
}
else if(searchText=="skagen" || searchText=="fossil"){
    var vlfilter = {};
    vlfilter["operand"] = VL_OfferOperator.AND;
    vlfilter["filters"] = [];
    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"Gant");
    vlfilter["filters"].push(brandFilter);
    var vl = new Visilabs();
    vl.AddParameter("json",true);
    vl.Suggest(15,null,null,CallBackMethod,null,vlfilter);
}
else if(searchText=="versace"){
    var vlfilter = {};
    vlfilter["operand"] = VL_OfferOperator.AND;
    vlfilter["filters"] = [];
    var brandFilter = new VL_OfferFilter("brand",VL_OfferFilterType.Equals,"TISSOT");
    vlfilter["filters"].push(brandFilter);
    var vl = new Visilabs();
    vl.AddParameter("json",true);
    vl.Suggest(15,null,null,CallBackMethod,null,vlfilter);
}

function CallBackMethod(dataArr) {
    if (dataArr.length > 0) {

        var pos = document.querySelector(".clearfix.search-result");

        var widgetTitle = document.createElement("div");
        widgetTitle.className = "module-title clearfix";
        widgetTitle.id = "alternatifTitle";
        widgetTitle.innerHTML = "<h2>SİZİN İÇİN ÖNERİLEN ÜRÜNLER</h2>";
        pos.append(widgetTitle);

        var wrapper = document.createElement('div');
        wrapper.id = "searchPageProducts";
        wrapper.className = 'row';
        pos.append(wrapper);

        var titleSeperator = document.createElement("br");
        titleSeperator.className = "module-separator";
        pos.append(titleSeperator);

        var html = "";
        dataArr.forEach(product => {

            html += '<div class="item itemauto"> <div class="product relative custom-product-cntnr"> <div class="image-hover hover-nav"> <a href="' + product.dest_url + '" title="' + product.title + '"> <img src="' + product.img + '" alt="img" class="img-responsive" title="' + product.title + '"> </a> </div><div class="description" data-sku="' + product.code + '"> <h4><a class="model-info" href="' + product.dest_url + '"><span class="first-word">' + product.brand + ' </span> ' + product.title + '</a></h4> </div><div class="price price-box"> <div class="pull-left"> <span class="price-standard"> ' + product.price + ' TL </span> <span class="price-sales">' + product.dprice + ' TL</span> </div><div class="discount-v2"> <span title="İndirim Oranı"><span>%</span>' + parseInt(product.discount) + '</span> </div></div></div></div>';

        });
        wrapper.innerHTML = '<div class="center-block relative urun-slider"><div class="owl-carousel owl-theme product-show-case smpl-carousel owl-loaded owl-drag" data-lg="5" data-md="4" data-sm="3" data-xs="2" data-xxs="1" data-pgn="true"> ' + html + ' </div></div>';
        $('.owl-carousel').owlCarousel({
            loop: true,
            lazyLoad: true,
            margin: 10,
            dots: true,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                    loop: false
                }
            }
        });
        var widget = document.querySelector("#searchPageProducts");
        var price = widget.querySelectorAll(".price-standard");
        var dprice = widget.querySelectorAll(".price-sales");
        var discount = widget.querySelectorAll(".discount-v2");

        for (var p = 0; p < price.length; p++) {
            if (price[p].innerText == dprice[p].innerText) {
                price[p].style.display = "none";
                discount[p].style.display = "none";
            }
            var float = parseFloat(dprice[p].innerText);
            if (float >= 1000) {
                var thousand = float / 1000;
                thousand = parseInt(thousand);
                console.log(thousand);
                var rest = float % 1000;
                console.log(rest);
                var restString = rest.toFixed(2).replace(".", ",");
                console.log(rest);
                if (rest < 100) {
                    dprice[p].innerText = `${thousand}.0${restString} TL`;
                }
                else {
                    dprice[p].innerText = `${thousand}.${restString} TL`;
                }

            }
            else {
                dprice[p].innerText = dprice[p].innerText.replace('.', ',') + " TL";
            }

        }
    }
            <%VLSendImpressionFunc%>;
    jQuery('#searchPageProducts .item a').click(function () {<%VLSendClickFunc%>; });
}

