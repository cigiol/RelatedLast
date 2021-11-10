var stop = 0;
var click = 0;
var CodeTText;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return;

        if (document.querySelector("#VisilabsScratchToWinBox_58")) {

            observer.disconnect();
            if (stop == 0) {
                var codes=["GÖZBAKIMI","CİLTBAKIMI","ÇANTA"];
                var r=Math.floor((Math.random() * codes.length) );
                var div=document.createElement("div");
                div.innerText=codes[r];
                div.style.background="white";
                div.style.textAlign="center";
                div.style.width="240px";
                div.style.height="60px";
                div.style.fontSize="27px";
                div.style.fontFamily="Helvetica";
                div.style.lineHeight="60px";
                document.querySelector("#VisilabsScratchToWinBox_58").append(div);

                var textDiv = document.createElement("div");
                textDiv.innerText="E-posta adresini bırak,kodu kazı,süpriz hediyeni öğren!";
                textDiv.style="top: 204px;\
                position: absolute;\
                background: white;\
                width: 237px;\
                left: 69px;\
                text-align: center;\
                font-size: 20px;\
                font-weight: bold;";
                document.querySelector("#visi_lightbox_popbox").append(textDiv);



                document.querySelector("#visilabs_copytoclipboard_btn").style.opacity="0 !important";

                document.querySelector("#visi_lightbox_content_fixed").style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);opacity: 1;z-index: 1000004;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
                

                var scratch = document.querySelector("#VisilabsScratchToWinBox_58");
                scratch.style.width = "240px";
                scratch.style.top = "142px";
                scratch.style.right = "67px";
                scratch.style.float = "right";
                scratch.style.position = "absolute";
                scratch.style.background = "white";

                document.querySelector("#visilabs_mail_subscription_form_container_58").style="position: absolute;\
                top: 264px;\
                left: 71px;\
                font-family: Helvetica;\
                width:240px;";

                document.querySelector("#visilabs_mail_subscription_form_input_58").style="width: 235px;\
                background-color: #f0ece9;\
                border: none;";

                document.querySelector("#visilabs_mail_subscription_form_emailpermit_checkbox_58").style="vertical-align: middle;\
                float: left;\
                margin-top: -9px;\
                margin-right: 4px;";


                document.querySelector("#visilabs_mail_subscription_form_agreement_content_emailpermit_58 > label > span").style="font-size:11px;";

                document.querySelector("#visilabs_mail_subscription_form_consent_checkbox_58").style="vertical-align: middle;\
                margin-top: -10px;\
                float: left;\
                margin-right: 4px;";

                document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_58 > label > span").style="font-size:11px;";

                document.querySelector("#visilabs_mail_subscription_form_button_58").style="margin-left:83px;";
                
                
                document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.width = "240px";
                document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.height = "58px";
                document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.display = "none";

                document.querySelector("#VisilabsScratchToWinCanvas_58").style.width = "240px";
                document.querySelector("#VisilabsScratchToWinCanvas_58").style.height = "58px";
                document.querySelector("#img_lightbox_close").style.top = "0px";
                document.querySelector("#img_lightbox_close").style.right = "0px";

                document.querySelector("#visi_lightbox_popbox").style.padding = "0px";

                document.querySelector("#visi_lightbox_content_fixed").style.width = "375px";
                document.querySelector("#visi_lightbox_content_fixed").style.height = "439px";

document.querySelector("#visilabs_mail_subscription_form_button_58").addEventListener("click", function () {

    if(click==0){
        <%VLSendClickFunc%>;
       }
       click++;
                });

                
<%VLSendImpressionFunc%>;
            }
            stop++;






        }

    })
});

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
});




