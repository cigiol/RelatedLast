(function(){
    function init(){
    var campID = 460;
    var campName = "Hellobar (22.02-25.02)";
    var color = '#7d3520';
    var style = '<style>\
    .vl-campaign-container{color: black;width: 100%; height: 50px; text-align: center;font-weight: 700;overflow: hidden;font-size: 18px; background-color: '+color+' !important; padding: 17px 0px 15px 0px; color: white; cursor: pointer;}\
    .vl-transition{transition: all 0.5s;}\
    .vl-banner-text{width: 55vw; margin: auto;}\
    .vl-toggle-first{transform: translateY(0px);}\
    .vl-toggle-second{transform: translateY(-43px);}\
    .vl-toggle-third{transform: translateY(-86px);}\
    .vl-toggle-fourth{transform: translateY(-129px);}\
    .vl-toggle-last{transform: translateY(-172px);}\
    .vl-inner-text{margin-bottom: 25px; text-align: left;}\
    .vl-button{float: right;color: '+color+';background-color: white;padding: 5px 10px;border-radius: 5px;margin-top: -5px;}\
    .vl-inner-text a{color: white !important}\
    main{margin-top: 50px !important}\
    main.long{margin-top: 65px !important}\
    .block__promotion{height: 50px !important;}\
    @media only screen and (max-width: 470px){\
    .vl-campaign-container{height: 45px; font-size: 12px;}\
    .vl-toggle-second{transform: translateY(-32px);}\
    .vl-toggle-third{transform: translateY(-65px);}\
    .vl-toggle-fourth{transform: translateY(-99px);}\
    .vl-toggle-last{transform: translateY(-122px);}\
    }</style>';
    jQuery('head').append(style);
    jQuery('.block__promotion').prepend('<div class="vl-campaign-container">\
    <div class="vl-banner-text vl-toggle-first">\
    <div class="vl-inner-text"><a href="https://www.pierrecardin.com.tr/haftanin-firsati/">Kaçırılmayacak Büyük Fırsat 49,95 TL-99,95 TL Arası Fiyatlarla<div class="vl-button">Alışverişe Başla</div></a></div>\
    <div class="vl-inner-text"><a href="https://www.pierrecardin.com.tr/hafta-sonu-firsati/">Mont ve Kaban festivaline yakışır %70\'e varan +%10 indirimi kaçırma<div class="vl-button">Alışverişe Başla</div></a></div>\
    <div class="vl-inner-text"><a href="https://www.pierrecardin.com.tr/takimlarda-sepette-yuzde-10-indirim/">Takım Elbiselerde sınırlı süreli fiyatlar %70\'e varan +%10 indirim<div class="vl-button">Alışverişe Başla</div></a></div>\
    <div class="vl-inner-text"><a href="https://www.pierrecardin.com.tr/250-tlde-50tl-indirim/">Sınırlı Süreli Büyük Fırsat Her 250 TL‘de Sepette 50 TL İndirim<div class="vl-button">Alışverişe Başla</div></a></div>\
    <div class="vl-inner-text"><a href="https://www.pierrecardin.com.tr/haftanin-firsati/">Kaçırılmayacak Büyük Fırsat 49,95 TL-99,95 TL Arası Fiyatlarla<div class="vl-button">Alışverişe Başla</div></a></div>\
    </div>');
    ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
    ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
    try{VLSendImpressionFunc(campID, 4);}catch(e){};
    jQuery('.vl-button').click(function(){
    ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
    try{VLSendClickFunc(campID, 4);}catch(e){};
    var v = new Visilabs();
            v.AddParameter("OM.click", campName);
            v.AddParameter("OM.clickDet", jQuery(this).parent().text().replace(jQuery(this).text(),""));
            v.Collect();
    });
    }
    function toggle(){
    var classList = jQuery('.vl-banner-text').attr("class");
    if(classList.indexOf("vl-toggle-first") > -1){
    jQuery('.vl-banner-text').removeClass("vl-toggle-first");
    jQuery('.vl-banner-text').addClass("vl-toggle-second");
    jQuery('.vl-banner-text').addClass("vl-transition");
    }
    else if(classList.indexOf("vl-toggle-second") > -1){
    jQuery('.vl-banner-text').removeClass("vl-toggle-second");
    jQuery('.vl-banner-text').addClass("vl-toggle-third");
    }
    else if(classList.indexOf("vl-toggle-third") > -1){
    jQuery('.vl-banner-text').removeClass("vl-toggle-third");
    jQuery('.vl-banner-text').addClass("vl-toggle-fourth");
    }
    else if(classList.indexOf("vl-toggle-fourth") > -1){
    jQuery('.vl-banner-text').removeClass("vl-toggle-fourth");
    jQuery('.vl-banner-text').addClass("vl-toggle-last");
    }
    else if(classList.indexOf("vl-toggle-last") > -1){
    jQuery('.vl-banner-text').removeClass("vl-toggle-last");
    jQuery('.vl-banner-text').removeClass("vl-transition");
    jQuery('.vl-banner-text').addClass("vl-toggle-first");
    setTimeout(function(){
    jQuery('.vl-banner-text').removeClass("vl-toggle-first");
    jQuery('.vl-banner-text').addClass("vl-toggle-second");
    jQuery('.vl-banner-text').addClass("vl-transition");
    },100);
    }
    }
    if(window.innerWidth > 1300 && jQuery('.vl-campaign-container').length === 0){
    init();
    if(window.location.pathname !== "/") jQuery('main').addClass('long');
    setInterval(toggle, 4000);
    }
    })();