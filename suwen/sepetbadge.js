if(!document.querySelector("#vl-badge-h1")){

    var h = document.createElement("H1");
    h.setAttribute("id","vl-badge-h1");
h.style="font-size: 18px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; margin-bottom: 0;";
var t = document.createTextNode("Sepette %40 İndirim");
h.appendChild(t); 
var bodyToAdd = document.querySelector('div.product-detail-right hr.divider');
if(bodyToAdd){
   bodyToAdd.before(h);
}

<%VLSendImpressionFunc%>;
}