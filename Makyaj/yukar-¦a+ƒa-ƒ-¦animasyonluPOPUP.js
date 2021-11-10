function CallPopup() {
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes zoomInAnimation {
            0% {
                bottom: -120px;
            }
            100% {
                bottom: 0px;
            }
        }
        @keyframes zoomOutAnimation {
            0% {
                bottom: 0px;
            }
            100% {
                bottom: -120px;
            }
        }`;
    document.head.appendChild(style);
    var innerWidth = window.innerWidth;
    var responsiveWidth = innerWidth + 'px';
    var visi = document.createElement("div");
    visi.setAttribute("id", "VisiNotifSection");
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
    overlay_light.style.zIndex = "1000003";
    overlay.appendChild(overlay_light);
    var overlay_content = document.createElement("div");
    overlay_content.setAttribute("id", "visi_lightbox_content_fixed");
    overlay_content.style.position = "fixed";
    overlay_content.style.bottom = "0";
    overlay_content.style.left = "0";
    overlay_content.style.opacity = "1";
    overlay_content.style.zIndex = "1000004";
    overlay_content.style.animation="zoomInAnimation 1s forwards";
    var popbox = document.createElement("div");
    popbox.setAttribute("id", "visi_lightbox_popbox");
    popbox.style.height = 'auto';
    popbox.style.width = responsiveWidth;
    popbox.style.border = "solid 0px white";
    var link = document.createElement("a");
    link.href = "https://www.nyxcosmetics.com.tr/ten#utm_source=makyajcom&utm_medium=popup&utm_campaign=ten40";
    var img = document.createElement("img");
    img.setAttribute("id", "visi_lightbox_image");
    img.style.width = responsiveWidth;
    img.src = "https://img.visilabs.net/banner/uploaded_images/244_1243_20200602134242805.jpg";
    link.appendChild(img);
    popbox.appendChild(link);
    var cls_btn = document.createElement("img");
    cls_btn.setAttribute("id", "img_lightbox_close");
    cls_btn.src = "data:image/png;base64,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";
    cls_btn.style.position = "absolute";
    cls_btn.style.top = "-1px";
    cls_btn.style.right = "0px";
    cls_btn.style.cursor = "pointer";
    cls_btn.style.zIndex = "1000003";
    cls_btn.style.opacity = "0";
    cls_btn.style.width = "24px";
    cls_btn.onclick = closeclick;
    overlay_content.appendChild(popbox);
    overlay_content.appendChild(cls_btn);
    visi.appendChild(overlay);
    visi.appendChild(overlay_content);
    document.querySelector("body").appendChild(visi);
    function closeclick() {
        var t = document.querySelector("#VisiNotifSection");
        if (t) {
            overlay_content.style.animation = "zoomOutAnimation 1s forwards";

            setTimeout(function () {
                t.remove();
            }, 700);
        }
    }
    img.addEventListener("click", function () {

        <%VLSendClickFunc%>;

    });
}
<%VLSendImpressionFunc%>;
var _interval = setInterval(function () {
    try {

        CallPopup();
        clearInterval(_interval);
    } catch (ex) {
        clearInterval(_interval);
        return false;
    }
}, 3000);

