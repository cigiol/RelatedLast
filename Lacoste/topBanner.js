
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.lacoste.com.tr/sss?OM.zn=acttype-4&OM.zpc=act-140' style='color:black;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="12px";
    div.style.color="black";
    div.style.textAlign="center";
    div.style.position="fixed";
    div.style.zIndex="99999";
    document.querySelector(".header").after(div);
    div.style.marginTop="50px";
    document.querySelector(".page-wrapper__content").style.marginTop = "10px";
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.lacoste.com.tr/sss?OM.zn=acttype-4&OM.zpc=act-140' style='color:black;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="20px";
    div.style.color="black";
    div.style.textAlign="center";
    div.style.width="100%";
    div.style.position="fixed";
    div.style.zIndex="99999";
    document.querySelector(".header__action").after(div);
    var w = window.innerWidth;
    if(w<1279){
        div.style.marginTop="49px";
    }
    else{
        div.style.marginTop="87px";
    }
    
}

