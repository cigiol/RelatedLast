function showLightBoxDesktop(height, width) {

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
    img.src = "https://img.visilabs.net/banner/uploaded_images/152_1238_20200529090308246.jpg";
    img.style.width = "100%";
    popbox.appendChild(img);

    var radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "select";
    radioButton.setAttribute("id", "choice1");
    radioButton.style = "position: absolute;\
    top: 233px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton2 = document.createElement("input");
    radioButton2.type = "radio";
    radioButton2.name = "select";
    radioButton2.setAttribute("id", "choice2");
    radioButton2.style = "position: absolute;\
    top: 256px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton3 = document.createElement("input");
    radioButton3.type = "radio";
    radioButton3.name = "select";
    radioButton3.setAttribute("id", "choice3");
    radioButton3.style = "position: absolute;\
    top: 279px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";


    var radioButton4 = document.createElement("input");
    radioButton4.type = "radio";
    radioButton4.name = "select";
    radioButton4.setAttribute("id", "choice4");
    radioButton4.style = "position: absolute;\
    top: 302px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton5 = document.createElement("input");
    radioButton5.type = "radio";
    radioButton5.name = "select";
    radioButton5.setAttribute("id", "choice5");
    radioButton5.style = "position: absolute;\
    top: 325px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton6 = document.createElement("input");
    radioButton6.type = "radio";
    radioButton6.name = "select";
    radioButton6.setAttribute("id", "choice6");
    radioButton6.style = "position: absolute;\
    top: 348px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton7 = document.createElement("input");
    radioButton7.type = "radio";
    radioButton7.name = "select";
    radioButton7.setAttribute("id", "choice7");
    radioButton7.style = "position: absolute;\
    top: 372px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var radioButton8 = document.createElement("input");
    radioButton8.type = "radio";
    radioButton8.name = "select";
    radioButton8.setAttribute("id", "choice8");
    radioButton8.style = "position: absolute;\
    top: 399px;\
    left: 9px;\
    width: 16px;\
    height: 16px;";

    var input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.type = "text";
    input1.style = "position: absolute;\
    top: 372px;\
    left: 219px;\
    width: 312px;\
    height: 18px;\
    border: 1px solid;";

    var input2 = document.createElement("input");
    input2.setAttribute("id", "input2");
    input2.type = "text";
    input2.style = "position: absolute;\
    top: 399px;\
    left: 148px;\
    width: 383px;\
    height: 18px;\
    border: 1px solid;";

    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "vl-submit");
    submitButton.innerText = "Odeslat";
    submitButton.style = "position: absolute;\
    width: 135px;\
    height: 28px;\
    top: 463px;\
    left: 206px;\
    background-color: #333333;\
    border-radius: 10px;\
    color: white;";


    popbox.appendChild(radioButton);
    popbox.appendChild(radioButton2);
    popbox.appendChild(radioButton3);
    popbox.appendChild(radioButton4);
    popbox.appendChild(radioButton5);
    popbox.appendChild(radioButton6);
    popbox.appendChild(radioButton7);
    popbox.appendChild(radioButton8);
    popbox.appendChild(input1);
    popbox.appendChild(input2);
    popbox.appendChild(submitButton);


    var cls_btn = document.createElement("img");
    cls_btn.setAttribute("id", "img_lightbox_close");
    cls_btn.src = "data:image/png;base64,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";
    cls_btn.style.position = "absolute";
    cls_btn.style.top = "-1px";
    cls_btn.style.right = "3px";
    cls_btn.style.cursor = "pointer";
    cls_btn.style.zIndex = "1000003";
    cls_btn.style.opacity = "1";
    cls_btn.onclick = closeclick;

    overlay_content.appendChild(popbox);
    overlay_content.appendChild(cls_btn);


    visi.appendChild(overlay);
    visi.appendChild(overlay_content);

    document.querySelector("body").appendChild(visi);

    function closeclick() {
        var t = document.querySelector("#VisiNotifSection");
        t.remove();
    }


var values = {"choice1":"Ji?? jsem dokon??il sv??j ????el n??v??t??vy", "choice2":"Pot??ebuji v??c ??asu na p??em????len??","choice3":"Chci porovnat cenu v jin??ch obchodech", "choice4":"Nemohu naj??t produkt","choice5":"P????li?? m??lo informac?? o produktu", "choice6":"P????li?? vysok?? cena"};

    submitButton.addEventListener("click", function () {
        const rbs = document.querySelectorAll('input[name="select"]');
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                if (rb.id == radioButton7.id) {
                    selectedValue=input1.value;
                }
                else if (rb.id == radioButton8.id) {
                    selectedValue=input2.value;
                }
                else {
                    selectedValue = values[""+rb.id];

                }

                break;
            }
        }
        var vl = new Visilabs();
        vl.AddParameter("OM.surveyLacosteCZ", selectedValue);
        vl.Collect();
        closeclick();
    });


}


document.addEventListener("mouseleave", function (e) {
    if(e.clientY<0){
        if (!document.querySelector("#VisiNotifSection")) {
            showLightBoxDesktop("535px", "550px");
        }
    }
});

