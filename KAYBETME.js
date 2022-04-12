document.querySelector("#visi_lightbox_overlay_wrapper").style.display = "none";
function initializeStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
        #vl-overlay {
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.75);
            z-index: 10;
            pointer-events: none;
            display: none;
        }
        #vl-overlay.visible {
            display: block;
            pointer-events: all;
        }
        .vl-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            margin-top: -200px;
            margin-left: -400px;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            display: none;
            background-color:#fff;
            max-width: 800px;
            font-family: helvetica;
            padding: 20px;
        }
        .vl-modal.visible {
            display: block;
            animation: fade-slide-in 0.3s ease-out forwards;
        }
        .vl-modal__content {
            display: flex;
            align-items:center;
        }
        #vl-modal-content__left {
            flex: 0.4;
        }

        #vl-modal-content__right {
            display: flex;
            flex: 0.6;
            flex-direction: column;
            padding: 40px;
            text-align:center;
        }

        #vl-modal-content__right-p {
            color: #102341;
            font-size: 25px;
        }

        #vl-modal-content__right-input {
            width: 90%;
            border: none;
            border-bottom: 2px solid gainsboro;
            margin:20px auto;
            outline: none;
            height: 30px;
            padding: 15px;
            height:50px;
        }

        #vl-modal-content__right-button {
            width: 100%;
            background-color: #132344;
            color: #fff;
            text-transform: uppercase;
            margin: 10px auto;
            font-size: 17px;
            padding: 10px;
        }

        #vl-privacy-container {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            width: 90%
        }
        #vl-privacy-container__first {
            margin-bottom: 10px;
        }
        #first-label,
        #second-label {
            display: flex;
        }
        .vl-privacy-text {
            color: #132344;
            text-align: left;
            margin-left: 5px;
            flex: 1;
        }
        #vl-message {
            margin-bottom:5px;
            font-weight: bold;
        }
        input[type=checkbox] {
            width: 15px;
            height: 15px;
        }
        #vl-close {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 40px;
            height: 40px;
            padding: 7px;
            text-align: center;
            vertical-align: middle;
            font-size: 20px;
            cursor: pointer;
        }
        #vl-note {
            font-size: 12px;
            color: gray;
        }
        .alert-danger {
            color: #a94442;
            background-color: #f2dede;
            border-color: #ebccd1;
        }
        .alert-success {
            color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6;
        }
        .alert {
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
        }
        @media only screen and (max-width:800px) {
            .vl-modal {
                max-width: 320px;
                margin-left: -160px;
            }
            #vl-modal-content__left {
                display: none;
            }
            #vl-modal-content__right {
                flex: 1;
                padding: 20px;
                text-align: center;
            }
            #vl-modal-content__right-p {
                font-size: 15px;
                font-weight: bolder;
            }
            #vl-modal-content__right-button {
                width: 100%;
            }
            .vl-privacy-text {
                font-size: 12px;
            }
            #vl-modal-content__right-input {
                margin: 5px auto;
                width: 100%
            }
            #vl-privacy-container {
                width: 100%;
            }
        }

        @keyframes fade-slide-in {
            from {
                transform: translateY(-5rem);
            }
            to {
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

function toggleOverlay() {
    var overlay = document.getElementById('vl-overlay');
    overlay.classList.toggle('visible');
}

function toggleModal() {
    var modal = document.getElementById('vl-modal');
    modal.classList.toggle('visible');
}

function createOverlay() {
    var vlOverlay = document.createElement('div');
    vlOverlay.id = 'vl-overlay';
    document.body.appendChild(vlOverlay);
}

function createModal() {
    var vlModal = document.createElement('div');
    vlModal.classList.add('vl-modal');
    vlModal.id = 'vl-modal';
    document.body.appendChild(vlModal);

    var vlContent = document.createElement('div');
    vlContent.classList.add('vl-modal__content');
    vlModal.appendChild(vlContent);

    var vlClose = document.createElement("span");
    assigner(vlClose, {
       id: "vl-close" ,
       innerText: "x"
    });

    vlModal.append(vlClose);

    vlContainerLeft = document.createElement("div");
    assigner(vlContainerLeft, {
        id: "vl-modal-content__left"
    });
    vlContainerRight = document.createElement("div");
    assigner(vlContainerRight, {
        id: "vl-modal-content__right"
    });

    vlContent.append(vlContainerLeft, vlContainerRight);

    var image = document.createElement("img");
    assigner(image, {
        id: "vl-modal-content__left-image",
        src: "https://img.visilabs.net/banner/uploaded_images/92_729_20201016154553809.jpg"
    });

    vlContainerLeft.append(image);

    var p = document.createElement("p");
    assigner(p, {
        id: "vl-modal-content__right-p",
        innerHTML: "E-Mailini kaydet, en cool yenilik ve kampanyalardan ilk sen haberdar ol! *%10 indirimin keyfini çıkar!"
    });

    var message = document.createElement("p");
    assigner(message,{
        id:"vl-message",
        className: "alert alert-danger",
        style: "display: none;",
        innerHTML: "Lütfen formu doldurun"
    });


    var input = document.createElement("input");
    assigner(input, {
        id: "vl-modal-content__right-input",
        placeholder: "Lütfen e-mail adresinizi girin."
    });

    var button = document.createElement("button");
    assigner(button, {
        id: "vl-modal-content__right-button",
        type: "button",
        innerText: "Kayıt Ol"

    });

    var containerPrivacy = document.createElement("div");
    assigner(containerPrivacy, {
        id: "vl-privacy-container"
    });

    vlContainerRight.append(p, input, button, message, containerPrivacy);

    var firstTextCont = document.createElement("div");
    assigner(firstTextCont, {
        id: "vl-privacy-container__first"
    });

    var secondTextCont = document.createElement("div");
    assigner(secondTextCont, {
        id: "vl-privacy-container__second"
    });

containerPrivacy.append(firstTextCont, secondTextCont);

var label = document.createElement("label");
assigner(label, {
    id:"first-label"
});

var textCheckbox = document.createElement("input");
assigner(textCheckbox, {
    id: "vl-privacy-text-checkbox",
    name:"vl-privacy-first",
    type: "checkbox"
});

var span = document.createElement("span");
assigner(span, {
    className: "vl-privacy-text",
    innerHTML: "<a style='color:#132344;text-decoration: underline;' id='vl-privacy-link' href='javascript:void(0)'>E-Bülten sözleşmesini</a> kabul ediyorum."
});

firstTextCont.append(label);
label.append(textCheckbox, span);

var label2 = document.createElement("label");
assigner(label2, {
    id:"second-label"
});

var textCheckbox2 = document.createElement("input");
assigner(textCheckbox2, {
    id: "vl-privacy-text-checkbox-2",
    name:"vl-privacy-second",
    type: "checkbox"
});

var span2 = document.createElement("span");
assigner(span2, {
    className: "vl-privacy-text",
    innerHTML: "Tarafıma tanıtım ve reklam içerikli ticari elektronik ileti gönderilmesine ve bu amaçla sınırlı olmak üzere; ürün, hizmet ve kampanyalarla ilgili kişisel verilerimin işlenmesine ve Marka Mağazacılık A.Ş.'nin tedarikçileriyle paylaşılmasına izin veriyorum."
});

secondTextCont.append(label2);
label2.append(textCheckbox2, span2);

var noteText  = document.createElement("p");
assigner(noteText, {
    id: "vl-note",
    innerHTML: "*İndirimler sadece Online'da sezon ürünlerinde geçerlidir. Başka kampanyalarla <span style='text-decoration: underline;'>birleştirilebilir.</span>"
});
vlContent.after(noteText);

    switcher();
}


(function popup() {
    initializeStyle();
    createOverlay();
    createModal();   
})();

function switcher() {
    toggleOverlay();
    toggleModal();
}

function assigner(el, attributes) {
    Object.assign(el,attributes);
}

document.getElementById('vl-overlay').addEventListener("click", switcher);
document.getElementById('vl-close').addEventListener("click", switcher);


document.getElementById("vl-privacy-link").addEventListener("click", function() {
   document.querySelector(".js-contract-modal").classList.add("shown");
});


document.querySelector("#vl-modal-content__right-button").addEventListener("click", function() {
    var message = validateEmail(document.querySelector("#vl-modal-content__right-input").value);
    var messageBox = document.querySelector("#vl-message");
    assigner(messageBox, {
        style: "display:block",
        className: message.className,
        innerHTML: message.msg
    });
});

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    var checkbox1 = document.getElementById("vl-privacy-text-checkbox").checked;
    var checkbox2 = document.getElementById("vl-privacy-text-checkbox-2").checked;
    if(!re.test(email)){
        return {msg:"Geçerli bir mail adresi giriniz.",className:"alert alert-danger"};
    } else if(checkbox1 == false || checkbox2 == false) {
        return {msg:"Lütfen hüküm ve koşulları kabul edin.", className:"alert alert-danger"};
    }else{
        if(document.querySelector("#visilabs_mail_subscription_form_button_133")){
            if (document.querySelector("#vl-modal-content__right-input").value != "") {
                document.querySelector("#visilabs_mail_subscription_form_consent_checkbox_133").checked = true;
                var d = "Thu, 21 Aug 2030 20:00:00 UTC";
                document.cookie = "vl-form=okey;path=/;expires=" + d;
                document.querySelector("#visilabs_mail_subscription_form_input_133").value = document.querySelector("#vl-modal-content__right-input").value;
                document.querySelector("#visilabs_mail_subscription_form_button_133").click();
            }
            }
            couponAssistant();
        return {msg:"Mail adresiniz başarıyla alınmıştır.",className:"alert alert-success"};
    }
}

function couponAssistant() {
    var t = document.createElement("style");
    t.innerHTML = "            #assistantContainer{position: fixed;z-index: 1000000222;width: 250px;height: 300px;right: 8%;background-color: white;border: 1px solid black;border-radius: 5px;}            #assistantHeader{background-color: black;color: white;width: 100%; cursor:pointer;}            #assistantHeaderText{font-size: 18px; font-weight: bold; height: 40px;width: 100%;padding: 8px;display: inline-block;text-align: center;}            #assistantMinimize{opacity: 0; position: absolute;top: 0;right: 15px;font-size: 25px;cursor: pointer;}            #assistantBodyText{display: block;margin: auto;width: 80%;margin-top: 15px;text-align: center;}            #assistantCodeArea{display: block;margin: auto;width: 80%;text-align: center;margin-top: 20px;font-size: 20px;border: 3px dashed black;padding: 4px;font-weight: 600;}            #assistantCopyButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;color: white;background-color: black;padding: 10px;border-radius: 5px;font-size: 16px; font-weight: bold;cursor: pointer;}            #assistantCloseButton{display: block;margin: auto;width: 50%;text-align: center;margin-top: 20px;cursor: pointer;}            #couponCode{width: 100%;text-align: center;border: none;}            .vl-active{bottom: 0px; transition: bottom 1s;}            .vl-passive{bottom: -260px; transition: bottom 1s;}            @media only screen and (max-width: 600px){                #assistantContainer{margin: auto; right: 0; left:0; z-index: 10;}            }", document.head.appendChild(t);
    var e = document.createElement("div");
    e.setAttribute("id", "assistantContainer"), e.setAttribute("class", "vl-passive"), e.innerHTML = '<div id="assistantHeader">            <div id="assistantHeaderText">Kupon Kodunuz</div>            <div id="assistantMinimize">-</div>            </div>            <div id="assistantBody">            <div id="assistantBodyText">İlk alışverişinizde geçerli size özel %10 indirim kodu:</div>            <div id="assistantCodeArea"><input type="text" value="GAP2020" id="couponCode" readonly/></div>            <div id="assistantCopyButton">Kopyala</div>            <div id="assistantCloseButton">Kapat</div>            </div>', document.body.appendChild(e), document.getElementById("assistantCopyButton").addEventListener("click", function() {
        document.getElementById("couponCode").select(), document.execCommand("copy");
        try {
            VLSendClickFunc(64, 4)
        } catch (t) {}
        minimizeAssistant()
    }), document.getElementById("assistantHeader").addEventListener("click", function() {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    }), document.getElementById("assistantCloseButton").addEventListener("click", function() {
        "vl-active" === document.getElementById("assistantContainer").getAttribute("class") ? minimizeAssistant() : maximizeAssistant()
    })
}

function minimizeAssistant() {
    document.getElementById("assistantMinimize").style.opacity = "0", document.getElementById("assistantContainer").setAttribute("class", "vl-passive")
}

function maximizeAssistant(){
    document.getElementById("assistantMinimize").style.opacity = "1", document.getElementById("assistantContainer").setAttribute("class", "vl-active")
}