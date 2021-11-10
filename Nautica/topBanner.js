
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.nautica-tr.com/sss' style='color:white;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="16px";
    div.style.color="white";
    div.style.textAlign="center";
    div.style.fontFamily="brandon_grotesquemedium,sans-serif";
    document.querySelector(".js-main-wrapper").insertBefore(div,document.querySelector(".header.header-fix"));
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Siparişiniz 13.04.2020 haftasından itibaren kargoya verilecektir. Devamı için <a href='https://www.nautica-tr.com/sss' style='color:white;'> TIKLAYINIZ</a>";
    div.style.backgroundColor="#c0c6c8";
    div.style.fontSize="20px";
    div.style.color="white";
    div.style.textAlign="center";
    div.style.fontFamily="brandon_grotesquemedium,sans-serif";
    document.querySelector(".js-main-wrapper").insertBefore(div,document.querySelector(".header.header-fix"));
}

