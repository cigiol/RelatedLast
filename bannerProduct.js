if(document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product").length > 2){
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[0].setAttribute("style", "background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/gurme-related.jpg); background-size: contain;background-repeat: no-repeat;");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[0].setAttribute("href", "https://www.krc.com.tr/gurme-evlilik-paketi-s6?ref=rmc");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[0].addEventListener("click", function(){<%VLSendClickFunc%>});
    for(i=0; i<document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[0].children.length; i++){
       document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[0].children[i].setAttribute("style", "opacity: 0");
    }
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[1].setAttribute("style", "background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/ilk-gunku-gibi-related.jpg); background-size: contain;background-repeat: no-repeat;");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[1].setAttribute("href", "https://www.krc.com.tr/ilk-gunku-gibi-evlilik-paketi?ref=rmc");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[1].addEventListener("click", function(){<%VLSendClickFunc%>});
    for(i=0; i<document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[1].children.length; i++){
       document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[1].children[i].setAttribute("style", "opacity: 0");
    }
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[2].setAttribute("style", "background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/yillar-boyu-related.jpg); background-size: contain;background-repeat: no-repeat;");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[2].setAttribute("href", "https://www.krc.com.tr/yillar-boyu-mutluluk-evlilik-paketi?ref=rmc");
    document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[2].addEventListener("click", function(){<%VLSendClickFunc%>});
    for(i=0; i<document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[2].children.length; i++){
       document.querySelectorAll(".item.col-xs-6.col-sm-3.gtm-product > a")[2].children[i].setAttribute("style", "opacity: 0");
    }
    <%VLSendImpressionFunc%>;
 }