(function(){
    var campID = 461;
    var campName = "Progress Bar 22.02";
    var interval;
    function getBasketTotal(){
    var result = -1;
    for(t=0; t<dataLayer.length; t++){
    if(dataLayer[t].google_tag_params !== undefined){
    result = parseFloat(dataLayer[t].google_tag_params.ecomm_totalvalue);
    break;
    }
    }
    return result;
    }
    function exec(){
    var basketTotal = getBasketTotal();
    if(basketTotal === -1) return false;
    var text = "";
    var progress = 0;
    if(basketTotal >= 9 && basketTotal < 100){
    text = `Sepetine ${(100-basketTotal).toFixed(2)} TL’lik ürün ekle, kargo bedava olsun!`;
    progress = (basketTotal/100)*100;
    }
    else if(basketTotal >= 100){
    var p = document.createElement("p");
    p.innerHTML=`✓`   
    p.style=`
        color: white;
        position: absolute;
        top: 3px;
        left: 145px;
    `;

    text = "Kargo Bedava";
    progress = 100;
    }
    else return false;
    workProgress(text, progress);
    }
    function workProgress(text, progress){
    var style = '<style>\
    #vl-progress-container{width: 100%; padding: 25px 0;}\
    #vl-progress-inner{width: 300px; margin: auto;}\
    #vl-message{text-align: center;color: #282828;font-size: 14px;}\
    #vl-progress-bar{position:relative;width: 300px;height: 20px;border-radius: 50px;background: #d9d9d9;margin: auto;margin-top: 10px;padding: 3px 5px;}\
    #vl-progress{background: #b70335; width: 0%; height: 100%;border-radius: 50px; transition: 1s all;}\
    @media only screen and (max-width: 600px){\
    #vl-progress-container{margin-top: 50px; padding: 10px;margin-bottom: -20px;}\
    #vl-progress-inner{width: 100%;}\
    #vl-progress-bar{width: 90%;}\
    }</style>';
    jQuery('head').append(style);
    var div = document.createElement("div");
    div.setAttribute("id","vl-progress-container");
    if(progress==100){
        div.innerHTML= 
        `<div id="vl-progress-inner">
        <div id="vl-message">${text}</div>
        <div id="vl-progress-bar"><div id="vl-progress"/></div>
        <p style="
        color: white;
        position: absolute;
        top: 3px;
        left: 48%;
        ">✓</p>
        </div>`;
    }
    else{
        div.innerHTML= 
        '<div id="vl-progress-inner">\
        <div id="vl-message">'+text+'</div>\
        <div id="vl-progress-bar"><div id="vl-progress"/></div>\
        </div>';
    }
   
    if(window.innerWidth>600){
        document.querySelectorAll(".basket__approve--action.hidden-xs")[0].after(div);
    }
    else{
        div.setAttribute("class","col-xs-12");
        document.querySelectorAll(".js-basket-container .row.visible-xs .col-xs-12")[0].after(div);
    }
    
    setTimeout(function(){jQuery('#vl-progress').css("width", progress + "%");},50);
    try{VLSendImpressionFunc(campID, 4);}catch(e){};
    ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
        ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    jQuery('.basket__approve--action a').click(function(){
    try{VLSendClickFunc(campID, 4);}catch(e){};
    ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
    });
    }
    interval = setInterval(function(){
    if(jQuery('.basket__summary__list--total .basket__summary__item__number').length > 0){
    exec();
    clearInterval(interval);
    }
    }, 1000);
    })();