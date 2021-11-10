if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.occasion.com.tr/sikca-sorulan-sorular?OM.zn=acttype-4&OM.zpc=act-140' style='color:white;'> TIKLAYINIZ </a>";
    div.style.backgroundColor="black";
    div.style.fontSize="14px";
    div.style.color="white";
    div.style.textAlign="center";
    div.style.lineHeight="normal";
    div.style.marginBottom="-1px";
    document.querySelector(".main-wrapper.js-main-wrapper").insertBefore(div,document.querySelector(".page-header.hide-on-app"));
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.occasion.com.tr/sikca-sorulan-sorular?OM.zn=acttype-4&OM.zpc=act-140' style='color:white;'> TIKLAYINIZ </a>";
    div.style.backgroundColor="black";
    div.style.fontSize="20px";
    div.style.color="white";
    div.style.height="25px";
    div.style.textAlign="center";
    div.style.lineHeight="normal";
    document.querySelector(".main-wrapper.js-main-wrapper").insertBefore(div,document.querySelector(".page-header.hide-on-app"));
}