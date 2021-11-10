if(!document.querySelector("#vl-badge-h1")){

    var h = document.createElement("H1");
    h.setAttribute("id","vl-badge-h1");
    h.style="font-size: 14px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; margin-bottom: 0; text-align: center;";
    
    var t = document.createTextNode("Sepette %40 İndirim");
    h.appendChild(t); 
    var bodyToAdd = document.querySelector('#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > div.mobile-add-to-cart-price > div > div.col-6.mobile-price-section > div > div');
    if(bodyToAdd){
       bodyToAdd.before(h);
    }
    
    var price=document.querySelector('#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > div.mobile-add-to-cart-price > div > div.col-6.mobile-price-section > div > div > span');
    price.style.margin='0';
<%VLSendImpressionFunc%>;
}
