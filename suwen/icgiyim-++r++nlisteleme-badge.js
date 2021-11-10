var data=["Teenage / T-shirt Sütyen - PEMBE","Teenage / T-shirt Sütyen - TEN RENGİ","Teenage / T-shirt Sütyen - SİYAH"];

var bodyToAdd = document.querySelectorAll('.product-box-container');
if(bodyToAdd){
    for(var i=0;i<bodyToAdd.length;i++){
        if(data.includes(bodyToAdd[i].querySelector(".productbox-name.mt-2").innerText)){

        }
        else{
            var h = document.createElement("H1");
            h.style="font-size: 14px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; text-align:center;";
            var t = document.createTextNode("Sepette %50 indirim");
            h.appendChild(t); 
            bodyToAdd[i].appendChild(h);
        }
        
    }

}
<%VLSendImpressionFunc%>;