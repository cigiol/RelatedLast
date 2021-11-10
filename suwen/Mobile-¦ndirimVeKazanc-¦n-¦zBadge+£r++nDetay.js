if(!document.querySelector("#vl-badge-h1")){

    var price = document.querySelector("#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > div.mobile-add-to-cart-price > div > div.col-6.mobile-price-section > div > div > span");
    price.style.textDecoration="line-through";
    price.style.textDecorationColor="#ff8074";

    var gainedPrice=parseFloat(price.innerText.split(" ")[0]);
    gainedPrice=gainedPrice/2;
    gainedPrice=""+gainedPrice;
    gainedPrice.replace(".",",");

    var dprice=document.createElement("H1");
    dprice.innerText=gainedPrice+" TL";
    dprice.style="line-height: 30px;font-family: 'WorkSans-Medium';color: #ff8074;font-size:18px;float: right;margin-right: 15px;margin-bottom: 0px;";


    var imgDiv=document.createElement("div");
    imgDiv.style.position="relative";
    imgDiv.style.textAlign="center";
    imgDiv.style.float="left";
    imgDiv.style.marginLeft="1%";

    var img=document.createElement("img");
    img.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200504094350459.png";

    var gain=document.createElement("h1");
    gain.innerText="KAZANCINIZ "+ gainedPrice +"TL";
    gain.style.fontSize="13px";
    gain.style.fontWeight="bold";
    gain.style.position="absolute";
    gain.style.top="50%";
    gain.style.left="56%";
    gain.style.transform="translate(-50%, -50%)";
    gain.style.whiteSpace="nowrap";

    imgDiv.appendChild(img);
    imgDiv.appendChild(gain);
    document.querySelector(".product-detail-attributes-contaier").appendChild(imgDiv);
    document.querySelector(".product-detail-attributes-contaier").appendChild(dprice);

    var width=gain.offsetWidth;
    img.style.width=(width+54)+"px";

    var h = document.createElement("H1");
    h.setAttribute("id","vl-badge-h1");
    h.style="font-size: 14px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; margin-bottom: 0; text-align: center;";
    
    var t = document.createTextNode("Sepette %50 İndirim");
    h.appendChild(t); 
    var bodyToAdd = document.querySelector('#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > div.mobile-add-to-cart-price > div > div.col-6.mobile-price-section > div > div');
    if(bodyToAdd){
       bodyToAdd.before(h);
    }
    
    var price=document.querySelector('#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > div.mobile-add-to-cart-price > div > div.col-6.mobile-price-section > div > div > span');
    price.style.margin='0';

    var divider = document.querySelector("#product-details-form > div > div > div > div > div.col-12.col-xs-12.col-sm-12.col-md-7.col-lg-5.col-xl-5.product-detail-right.pr-md-0.pl-5 > div > hr:nth-child(12)");
    if(divider)
    divider.style.marginTop="3rem";

<%VLSendImpressionFunc%>;
}
