var stop = 0;
var click=0;
var CodeTText;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return;

        if (document.querySelector("#VisilabsScratchToWinBox_56")) {

            observer.disconnect();
            if (stop == 0) {

                document.querySelector("#visilabs_copytoclipboard_btn").remove();


                var codes=["GÖZBAKIMI","CİLTBAKIMI","ÇANTA"];
                var r=Math.floor((Math.random() * codes.length) );
                var div=document.createElement("div");
                div.innerText=codes[r];
                div.style.background="white";
                div.style.textAlign="center";
                div.style.width="180px";
                div.style.height="41px";
                div.style.fontSize="17px";
                div.style.fontFamily="Helvetica";
                div.style.lineHeight="41px";
                document.querySelector("#VisilabsScratchToWinBox_56").append(div);

                var textDiv = document.createElement("div"); textDiv.innerText="E-posta adresini bırak,kodu kazı,süpriz hediyeni öğren!"; textDiv.style="top: 155px;\ position: absolute;\ background: white;\ width: 177px;\ left: 52px;\ text-align: center;\ font-size: 13px;\ font-weight: bold;"; document.querySelector("#visi_lightbox_popbox").append(textDiv);


                var scratch = document.querySelector("#VisilabsScratchToWinBox_56");
                scratch.style.width = "180px";
                scratch.style.top = "106px";
                scratch.style.height = "41px";
                scratch.style.right = "50px";
                scratch.style.float = "right";
                scratch.style.position = "absolute";
                scratch.style.background = "white";

                document.querySelector("#visilabs_mail_subscription_form_container_56").style = "position: absolute;\
                top: 196px;\
                left: 53px;\
                font-family: Helvetica;\
                width:177px;";

                document.querySelector("#visilabs_mail_subscription_form_input_56").style = "width: 175px;\
                background-color: #f0ece9;\
                border: none;\
                height:31px;";

                document.querySelector("#visilabs_mail_subscription_form_emailpermit_checkbox_56").style = "vertical-align: middle;\
                float: left;\
                margin-top: 0px;\
                margin-right: 4px;";

                document.querySelector("#visilabs_mail_subscription_form_agreement_content_emailpermit_56").style = "height: 26px;\
                line-height: 8px;\
                margin-top: 5px;";

                document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_56").style = "height: 30px;\
                line-height: 8px;";

                document.querySelector("#visilabs_mail_subscription_form_email_validation_message_56").style.fontSize = "8px";

                document.querySelector("#visilabs_mail_subscription_form_success_message_56").style.fontSize = "8px";

                document.querySelector("#visilabs_mail_subscription_form_agreement_content_emailpermit_56 > label > span").style = "font-size:8px;";

                document.querySelector("#visilabs_mail_subscription_form_consent_checkbox_56").style = "vertical-align: middle;\
                margin-top: 0px;\
                float: left;\
                margin-right: 4px;";


                document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_56 > label > span").style = "font-size:8px;";

                document.querySelector("#visilabs_mail_subscription_form_button_56").style = "margin-left:53px;\
                background:white;";


                document.querySelector("#VisilabsScratchToWinBox_56 > canvas").style.width = "180px";
                document.querySelector("#VisilabsScratchToWinBox_56 > canvas").style.height = "41px";
                document.querySelector("#VisilabsScratchToWinBox_56 > canvas").style.display="none";

                document.querySelector("#VisilabsScratchToWinCanvas_56").style.width = "180px";
                document.querySelector("#VisilabsScratchToWinCanvas_56").style.height = "41px";
                document.querySelector("#img_lightbox_close").style.top = "0px";
                document.querySelector("#img_lightbox_close").style.right = "0px";

                document.querySelector("#visi_lightbox_popbox").style.padding = "0px";
                document.querySelector("#visi_lightbox_popbox").style.height = "328px";

                document.querySelector('#VisilabsScratchToWinCanvas_56').style.opacity = 1;

                document.querySelector("#visi_lightbox_content_fixed").style = "position: fixed;\
                top: calc(50% - 164px);\
                left: calc(50% - 140px);\
                opacity: 1;\
                z-index: 1000004;\
                width: 280px;\
                height: 328px;\
                transform: translate3d(0,0, 3px);";

                document.querySelector("#visilabs_mail_subscription_form_input_56").addEventListener("click", function () {

                    document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_56").style = "height: 30px;\
                    line-height: 8px;";

                    document.querySelector("#visilabs_mail_subscription_form_agreement_content_emailpermit_56").style = "height: 26px;\
                line-height: 8px;\
                margin-top: 5px;";
                });

                document.querySelector("#visilabs_mail_subscription_form_button_56").addEventListener("click", function () {

                    document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_56").style = "height: 30px;\
                    line-height: 8px;";

                    document.querySelector("#visilabs_mail_subscription_form_agreement_content_emailpermit_56").style = "height: 26px;\
                line-height: 8px;\
                margin-top: 5px;";
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




