function showLightBoxDesktop(height, width) {

    var visi = document.createElement("div");
    visi.setAttribute("id", "VisiNotifSection34");


    var overlay = document.createElement("div");
    overlay.setAttribute("id", "visi_lightbox_overlay_wrapper");
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.right = "0";
    overlay.style.left = "0";
    overlay.style.bottom = "0";


    overlay.style.zIndex = "1000003";
    var overlay_light = document.createElement("div");
    overlay_light.setAttribute("id", "visi_lightbox_overlay");
    overlay_light.style.position = "fixed";
    overlay_light.style.top = "0";
    overlay_light.style.bottom = "0";
    overlay_light.style.left = "0";
    overlay_light.style.right = "0";
    overlay_light.style.opacity = "0.3";
    overlay_light.style.width = "100%";
    overlay_light.style.height = "100%";
    overlay_light.style.backgroundColor = "black";
    overlay_light.style.zIndex = "10000000003";
    overlay_light.style.zIndex = "1000003";
    overlay.onclick = closeclick;
    overlay.appendChild(overlay_light);

    var overlay_content = document.createElement("div");
    overlay_content.setAttribute("id", "visi_lightbox_content_fixed");
    overlay_content.style.position = "fixed";
    overlay_content.style.top = "calc(50%)";
    overlay_content.style.left = "50%";
    overlay_content.style.opacity = "1";
    overlay_content.style.zIndex = "1000004";
    overlay_content.style.webkitTransform = "translate(-50%, -50%)";


    var popbox = document.createElement("div");
    popbox.setAttribute("id", "visi_lightbox_popbox");
    popbox.style.height = "100%";
    popbox.style.width = "auto";

    var img = document.createElement("img");
    img.setAttribute("id", "visi_lightbox_image");
    img.src = "https://img.visilabs.net/banner/uploaded_images/282_1096_20200601114122646.png";
    img.style.width = "470px";
    img.style.height = "239px";
    popbox.appendChild(img);

    var link = document.createElement("a");
    link.style = "position: absolute;\
    width: 180px;\
    height: 39px;\
    bottom: 19px;\
    left: 150px;\
    cursor: pointer;";
    popbox.appendChild(link);



    overlay_content.appendChild(popbox);


    visi.appendChild(overlay);
    visi.appendChild(overlay_content);

    document.querySelector("body").appendChild(visi);

    link.addEventListener("click", function () {
        var b = document.querySelector("#promo_code");
        b.style.display = "flex";

        var a = document.querySelector(".form-control.input-sm");
        a.value = "MERHABA2";
        a.select();
        a.dispatchEvent(new Event('blur'));

        document.querySelector("#bio_ep_bg").click();

        if (document.querySelector(".btn-orange-outline")) {
            setInterval(function () { document.querySelector(".btn-orange-outline").click(); }, 3000);
        }

    });

    function closeclick() {
        var t = document.querySelector("#VisiNotifSection34");
        t.remove();
    }


<%VLSendImpressionFunc%>;

}
var once=true;
    if (document.querySelectorAll(".text-orange").length == 1) {
        var _interval = setInterval(function () {
            try {
                document.querySelector(".text-orange").addEventListener("mouseenter", function () {
                    if(once){
                        showLightBoxDesktop("270px", "550px");
                        console.log("SİLMEEEE");
                        once=false;
                    }
                    
                });
                clearInterval(_interval);
            } catch (ex) {
                clearInterval(_interval);
                return false;
            }
        }, 3000);
        
    
}