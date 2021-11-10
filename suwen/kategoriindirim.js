var bodyToAdd = document.querySelectorAll('.product-box-container');
if(bodyToAdd){
    for(var i=0;i<bodyToAdd.length;i++){

        var h = document.createElement("H1");
        h.style="font-size: medium;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; text-align:center;";
        var t = document.createTextNode("Sepette %50 indirim.");
        h.appendChild(t); 
        bodyToAdd[i].appendChild(h);
    }

}