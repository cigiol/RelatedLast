if(!document.querySelector("#vl-headbanner")){
    var div = document.createElement("div");
    div.setAttribute("id","vl-headbanner");
    div.innerHTML="Lancome’da %30 indirim! Kod: MERCI";
    div.style.backgroundColor="#7eda54";
    div.style.fontSize="1.6em";
    div.style.color="white";
    div.style.textAlign="center";
    div.style.lineHeight="normal";
    div.style.marginBottom="-1px";
    div.style.fontFamily="Averta-ExtraBold,arial,helvetica,sans-serif";
    document.querySelector(".header-root").insertBefore(div,document.querySelector(".header-wrapper"));

div.addEventListener("click",function(){
    window.location="https://makyaj.com/";
    <%VLSendClickFunc%>;
});

<%VLSendImpressionFunc%>;

}
