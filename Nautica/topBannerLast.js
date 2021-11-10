if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.nautica-tr.com/sss?OM.zn=acttype-4&OM.zpc=act-44' style='color:#001745;text-decoration:underline;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="16px";
    div.style.color="#001745";
    div.style.textAlign="center";
    div.style.fontFamily="brandon_grotesquemedium,sans-serif";
    document.querySelector(".header.header-fix").append(div);
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir.<br> Devamı için <a href='https://www.nautica-tr.com/sss?OM.zn=acttype-4&OM.zpc=act-44' style='color:#001745;text-decoration:underline;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="20px";
    div.style.color="#001745";
    div.style.textAlign="center";
    div.style.fontFamily="brandon_grotesquemedium,sans-serif";
    var slider=document.querySelector("body > div.js-main-wrapper > div:nth-child(3)");
    slider.style.marginTop="30px";
    document.querySelector(".header.header-fix").append(div);
}