
function showLightBox(height, width) {
    
    var visi = document.createElement("div");
    visi.setAttribute("id", "VisiNotifSection");


    var overlay_content = document.createElement("div");
    overlay_content.setAttribute("id", "visi_lightbox_content_fixed");
    overlay_content.style.position = "fixed";
    overlay_content.style.bottom = "60px";
    overlay_content.style.opacity = "1";
    overlay_content.style.zIndex = "1000004";
    overlay_content.style.left= "50%";
    overlay_content.style.bottom= "50%";
    overlay_content.style.transform= "translate(-50%, 50%)";

    var overlay_light = document.createElement("div"); 
    overlay_light.setAttribute("id","visi_lightbox_overlay"); 
    overlay_light.style.position="fixed"; 
    overlay_light.style.top="0";
    overlay_light.style.bottom="0"; 
    overlay_light.style.left="0";
    overlay_light.style.right="0"; 
    overlay_light.style.opacity="0.3";
    overlay_light.style.width="100%";  
    overlay_light.style.height="100%";  
    overlay_light.style.backgroundColor="black";
    overlay_light.style.zIndex="999999";

    var popbox = document.createElement("div");
    popbox.setAttribute("id", "visi_lightbox_popbox");
    popbox.style.height = height;
    popbox.style.width = width;
    popbox.style.backgroundColor = "white";
    popbox.style.textAlign = "center";
    popbox.style.border="1px solid #1b75bc";
    popbox.style.zIndex="10000033";
    popbox.style.borderRadius="5px";

    var close_btn=document.createElement("div");
    close_btn.innerText="X";
    close_btn.style.color="white";
    close_btn.style.position="absolute";
    close_btn.style.borderRadius="45px";
    close_btn.style.width="21px";
    close_btn.style.height="21px";
    close_btn.style.top="15px";
    close_btn.style.fontSize="13px";
    close_btn.style.right="15px";
    close_btn.style.cursor="pointer";
    close_btn.style.backgroundColor="#1b75bc";
    close_btn.onclick=closeclick;


    var link = document.createElement("a");
    link.href = "https://www.lastikcim.com.tr/members/register/?OM.zn=acttype-4&OM.zpc=act-3";
    link.style.backgroundColor="#66b014";
    link.style.width="179px";
    link.style.height="38px";
    link.style.color="white";
    link.style.fontWeight="bold";
    link.style.padding="7px";
    link.style.bottom="20px";
    link.style.left="150px";
    link.style.position="absolute";
    link.style.borderRadius="5px";
    link.innerText="Fırsatlardan Faydalan";

    var title = document.createElement("p");
    title.innerText="İNDİRİM FIRSATI";
    title.style.paddingTop="15px";
    title.style.fontWeight="bold";
    title.style.color="#1b75bc";

    var line = document.createElement("hr");
    line.style.width="380px";
    line.style.color="#1b75bc";


    var p1 = document.createElement("p");
    p1.innerText="Ürünü Şimdi Alırsanız;";
    p1.style.marginBottom="0px";
    p1.style.color="#1b75bc";
    p1.style.fontWeight="bold";
    p1.style.fontSize="13px";

    var p2= document.createElement("p");
    p2.innerText="Montaj hizmeti alımınızda";
    p2.style.color="orange";
    p2.style.fontSize="25px";
    p2.style.fontWeight="bold";
    p2.style.marginBottom="-7px";

    var p3 = document.createElement("p");
    p3.innerHTML="<u>%50 indirim</u> uygulanacaktır!";
    p3.style.color="#1b75bc";
    p3.style.fontSize="25px";
    p3.style.fontWeight="bold";


     
    popbox.append(title);
    popbox.append(line);
    popbox.append(p1);
    popbox.append(p2);
    popbox.append(p3);
    popbox.append(link);
    popbox.append(close_btn);


    overlay_content.appendChild(popbox);
   


    visi.appendChild(overlay_content);
    visi.appendChild(overlay_light);
    document.querySelector("body").appendChild(visi);

    function closeclick() {
        var t = document.querySelector("#VisiNotifSection");
        t.remove();
    }

}
if(document.querySelector(".boxBasketItem").innerText>0){
    showLightBox("239px","470px");
}

