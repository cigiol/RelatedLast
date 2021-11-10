if(!document.querySelector("#vl-badge-h1")){

var price = document.querySelector(".product-price > span");
price.style.textDecoration="line-through";
price.style.textDecorationColor="#ff8074";

var gainedPrice=parseFloat(price.innerText.split(" ")[0]);
gainedPrice=gainedPrice/2;
gainedPrice=""+gainedPrice;
gainedPrice.replace(".",",");

var dprice=document.createElement("H1");
dprice.innerText=gainedPrice+" TL";
dprice.style="font-family: 'WorkSans-Medium';color: #ff8074;margin-top:-15px;";


var imgDiv=document.createElement("div");
imgDiv.style.position="relative";
imgDiv.style.textAlign="center";
imgDiv.style.float="left";
imgDiv.style.marginLeft="1%";

var img=document.createElement("img");
img.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200504094350459.png";

var gain=document.createElement("h1");
gain.innerText="KAZANCINIZ "+ gainedPrice +"TL";
gain.style.fontSize="15px";
gain.style.fontWeight="bold";
gain.style.position="absolute";
gain.style.top="50%";
gain.style.left="56%";
gain.style.transform="translate(-50%, -50%)";
gain.style.whiteSpace="nowrap";

imgDiv.appendChild(img);
imgDiv.appendChild(gain);
document.querySelector(".product-detail-price-and-container.my-4.clearfix").appendChild(imgDiv);

var width=gain.offsetWidth;
img.style.width=(width+54)+"px";

var h = document.createElement("H1");
h.setAttribute("id","vl-badge-h1");
h.style="font-size: 18px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; margin-bottom: 0;";
var t = document.createTextNode("Sepette %50 İndirim");
h.appendChild(t); 
var bodyToAdd = document.querySelector('div.product-detail-right hr.divider');
if(bodyToAdd){
    
    bodyToAdd.before(dprice);
    bodyToAdd.before(h);
}



}