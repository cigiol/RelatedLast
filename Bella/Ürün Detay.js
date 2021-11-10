(function(){
    var campID = 1046;
    var brand = decodeURIComponent(VisiParameters["OM.pv.1"]);
    var html = '<div id="vl-labels">';
    if(brand == "Bella Maison" || brand == "Paşabahçe" || brand == "Ocean Home"){
    html += '<div class="vl-label" style="color: #f48c29; font-size: 12px;font-weight: 700;">48 Saatte Kargo</div>';
    }
    else if(brand == "Begüsa" || brand == "Avonni" || brand == "The Mia" || brand == "Hmy Design"){
    html += '<div class="vl-label" style="color: #f48c29; font-size: 12px;font-weight: 700;">3-4 Günde Kargo</div>';
    }
    else if(brand == "Çerçeve Atölyesi"){
        html += '<div class="vl-label" style="color: #f48c29; font-size: 12px;font-weight: 700;">4-5 İş Gününde Kargo</div>';
    }
    else if(brand == "Dekocadde"){
        html += '<div class="vl-label" style="color: #f48c29; font-size: 12px;font-weight: 700;">7-10 İş Gününde Kargo</div>';
    }
    html += '<div class="vl-label" style="color: #62ab1b; font-size: 12px;font-weight: 700;">Tüm Alışverişlerinizde ÜCRETSİZ KARGO</div>';
    if(window.innerWidth > 768){
    jQuery('#price-flexer').after(html);
    }
    else{
    jQuery('.productInstallment').parent().after(html);
    jQuery('.vl-label').css("padding", "6px 16px");
    jQuery('#vl-labels').css({"display": "inline-block", "margin-top": "-17px", "margin-bottom": "16px"});
    }
    try{VLSendImpressionFunc(campID, 4);}catch(e){};
    })();