(function(){
    function getCategory(){
    for(i=0; i<dataLayer.length; i++){
    if(dataLayer[i].Label === "Product Detail View"){
    return dataLayer[i].ecommerce.detail.products[0].category;
    break;
    }
    }
    }
    function showBanner(id, href, camp){
    var campID = 613;
    var campName = "Ürün Detay - Kategori Yönlendirmeleri"+camp;
    var style = '<style>#vl-cat-banner{width: 458px;margin-bottom: 10px;}@media only screen and (max-width: 460px){#vl-cat-banner{width: 100%;}';
    var html = '<div id="vl-cat-banner"><a href="'+href+'"><img src="https://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/458x100-'+id+'.jpg"/></a></div>';
    jQuery('head').append(style);
    jQuery('.product__facet').prepend(html);
    ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
    ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    try{VLSendImpressionFunc(campID, 4);}catch(e){};
       jQuery('#vl-cat-banner a').click(function(){
        ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
        try{
            VLSendClickFunc(campID, 4);
            var vl=new Visilabs();
            vl.AddParameter("OM.camp_click",true);
            vl.AddParameter("OM.camp_det",camp);
            vl.Collect();
        }catch(e){};
       });
    }
    function exec(){
    var category = getCategory();
    if(category === "Kadın/Çanta" || category === "Kadın/Cüzdan") showBanner("123", "/kadin-koleksiyon/","Cross Kadın Çanta-Cüzdan");
    else if(category === "Kadın/Spor Etek") showBanner("2(1)", "/kadin-gomlek-bluz/","Cross Kadın Etek");
    else if(category === "Kadın/Gömlek") showBanner("6", "/etek/","Cross Kadın Gömlek-Bluz");
    else if(category === "Kadın/Dokuma Elbise") showBanner("4(1)", "/kadin-ayakkabi-modelleri/","Cross Kadın Elbise");
    else if(category === "Kadın/Ayakkabı") showBanner("5", "/kadin-canta-modelleri/","Cross Kadın Ayakkabı");
    else if(category === "Kadın/Örme Pantolon") showBanner("8", "/kadin-ceket/","Cross Kadın Pantolon");
    else if(category === "Kadın/Ceket") showBanner("9", "/orme-pantolon/","Cross Kadın Ceket");
    else if(category === "Erkek/Gömlek") showBanner("12", "/chino-pantolon/","Cross Erkek Gömlek");
    else if(category === "Erkek/Dokuma Spor Pantolon") showBanner("15", "/yeni-sezon-erkek-gomlek/","Cross Erkek Pantolon");
    else if(category === "Erkek/Örme Pantolon") showBanner("14", "/jogger-pantolonlar/","Cross Yeni Sezon Dynamic");
    else if(category === "Erkek/Denim Pantolon") showBanner("17", "/erkek-tisort/","Cross Erkek Pantolon");
    else if(category === "Erkek/T-Shirt") showBanner("19", "/yeni-sezon-erkek-denim/","Cross Erkek T-Shirt");
    else if(category === "Erkek/Takım Elbise") showBanner("11", "/erkek-ayakkabi/","Cross Takım Elbise");
    else if(category === "Erkek/Ceket") showBanner("21", "/klasik-pantolon/","Cross Erkek Ceket");
    else if(category.includes("Kadın")) showBanner("13", "/kadin-canta-modelleri/","Cross Kadın");
    else return false;
    }
    if(jQuery('#vl-cat-banner').length === 0) exec();
    })();