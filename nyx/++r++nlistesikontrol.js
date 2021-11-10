var data=["1983","1984","1997","1993"];
var a = document.querySelectorAll(".product-box-container");
//a[0].getAttribute("data-productid");

for(var i=0;i<a.length;i++){
    if(data.includes(a[i].getAttribute("data-productid"))){
        console.log("eşleşti"+a[i].getAttribute("data-productid"));

    }
}



///////////////

var data=["1983","1984","1997","1993"];
var a = document.querySelectorAll(".product-box-container");
//a[0].getAttribute("data-productid");

for(var i=0;i<a.length;i++){
    if(data.includes(a[i].getAttribute("data-productid"))){
        var h = document.createElement("H1");
        h.style="font-size: 14px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; text-align:center;";
        var t = document.createTextNode("Sepette %50 indirim");
        h.appendChild(t); 
        a[i].appendChild(h);
    }
}