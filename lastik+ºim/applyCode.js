document.querySelector("#applyCode").addEventListener("click",function(){

    var b = document.querySelector("#promo_code");
    b.style.display="flex";
    
    var a =document.querySelector(".form-control.input-sm");
    a.value="MERHABA2";
    a.select();
    a.dispatchEvent(new Event('blur'));

    document.querySelector("#VisiNotifSection").remove();

});

