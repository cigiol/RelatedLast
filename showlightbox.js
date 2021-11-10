function showLightBox(height,width){


    var style="<style>\
    .visi_image_class{height:48%;\
        margin-left:1%;\
        margin-right:1%;\
        margin-top:1%;\
        margin-bottom:1%}\
    </style>";

    document.querySelector("head").append(style);

    var visi=document.createElement("div");
    visi.setAttribute("id","VisiNotifSection");
    visi.style.transform="translate3d(0,0,3px)";
    visi.style.position="fixed";
    visi.style.width="100%";
    visi.style.height="100%";
    visi.style.top="0px";
    visi.style.zIndex="1005";

    var overlay = document.createElement("div");
    overlay.setAttribute("id","visi_lightbox_overlay_wrapper");
    overlay.style.position="absolute";
    overlay.style.top="0";
    overlay.style.right="0";
    overlay.style.left="0";
    overlay.style.bottom="0";
 

    overlay.style.zIndex="1000003";
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
    overlay_light.style.zIndex="10000032";
    overlay.onclick=closeclick;
    overlay.appendChild(overlay_light);
   
    var overlay_content=document.createElement("div");
    overlay_content.setAttribute("id","visi_lightbox_content_fixed");
    overlay_content.style.position="fixed";
    overlay_content.style.top="50%";
    overlay_content.style.left="50%";
    overlay_content.style.opacity="1";
    overlay_content.style.zIndex="1000004";
    overlay_content.style.webkitTransform="translate(-50%, -50%)";
    overlay_content.style.width=width+"px";
    overlay_content.style.height="85%";
    overlay_content.style.backgroundColor="white";


    var popbox = document.createElement("div");
    popbox.setAttribute("id","visi_lightbox_popbox");    
    popbox.style.height="100%";
    popbox.style.width="100%";
    popbox.style.border="solid 0px white";


    var link=document.createElement("a");
    link.href="https://www.suwen.com.tr/c/ev-giyim-320?specs=143&OM.zn=acttype-4&OM.zpc=act-35";
    
    var img=document.createElement("img");
    img.setAttribute("id","visi_image");
    img.setAttribute("class","visi_image_class");
    img.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200429145806904.jpg";
    img.style.height="48%";
    img.style.width="auto";
    img.style.margin="1%";
    
    link.appendChild(img);
    popbox.appendChild(link);


    var link2=document.createElement("a");
    link2.href="https://www.suwen.com.tr/c/ev-giyim-320?specs=742&OM.zn=acttype-4&OM.zpc=act-35";
    
    var img2=document.createElement("img");
    img2.setAttribute("id","visi_image2");
    img2.setAttribute("class","visi_image_class");
    img2.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200429145933075.jpg";
	img2.style.height="48%";
    img2.style.width="auto";
    img2.style.margin="1%";
    link2.appendChild(img2);
    popbox.appendChild(link2);

    var link3=document.createElement("a");
    link3.href="https://www.suwen.com.tr/c/ev-giyim-320?specs=827,824&OM.zn=acttype-4&OM.zpc=act-35";
    
    var img3=document.createElement("img");
    img3.setAttribute("id","visi_image3");
    img3.setAttribute("class","visi_image_class");
    img3.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200429145836976.jpg";
	img3.style.height="48%";
    img3.style.width="auto";
    img3.style.margin="1%";
    
    link3.appendChild(img3);
    popbox.appendChild(link3);

    var link4=document.createElement("a");
    link4.href="https://www.suwen.com.tr/c/ev-giyim-320?specs=819&OM.zn=acttype-4&OM.zpc=act-35";
    
    var img4=document.createElement("img");
    img4.setAttribute("id","visi_image4");
    img4.setAttribute("class","visi_image_class");
    img4.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200429150006472.jpg";
    img4.style.height="48%";
    img4.style.width="auto";
    img4.style.margin="1%";
    link4.appendChild(img4);
    popbox.appendChild(link4);

    var cls_btn=document.createElement("img");
    cls_btn.setAttribute("id","img_close");
    cls_btn.src="data:image/png;base64,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";
    cls_btn.style.position="absolute";
    cls_btn.style.top="3px";
    cls_btn.style.right="5px";
    cls_btn.style.cursor="pointer";
    cls_btn.style.zIndex="1000003";
    cls_btn.style.opacity="1";
    cls_btn.style.width="5%";
    cls_btn.onclick=closeclick;

    overlay_content.appendChild(popbox);
    overlay_content.appendChild(cls_btn);


    visi.appendChild(overlay);
    visi.appendChild(overlay_content);

    document.querySelector("body").appendChild(visi);

function closeclick(){
    var t=document.querySelector("#VisiNotifSection");
    t.remove();
}

}


var Width = window.innerHeight*0.85*0.715;
showLightBox("730px",Width);
<%VLSendImpressionFunc%>;