
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.gant.com.tr/sss?OM.zn=acttype-4&OM.zpc=act-35' style='color:black;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="16px";
    div.style.color="black";
    div.style.textAlign="center";
    div.style.lineHeight="normal";
    document.querySelector(".page-header").after(div);
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir.<br> Devamı için <a href='https://www.gant.com.tr/sss?OM.zn=acttype-4&OM.zpc=act-35' style='color:black;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="20px";
    div.style.color="black";
    div.style.height="50px";
    div.style.textAlign="center";
    div.style.marginTop="-2px";
    div.style.marginBottom="25px";
    div.style.lineHeight="normal";
    document.querySelector(".page-header").after(div);
}

