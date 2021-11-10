var once=0;
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
  
      if(document.querySelector("#VisilabsScratchToWinBox_58")){
if(once==0){
var check = document.createElement("input");
        check.type="checkbox";
        check.setAttribute("class","checkbox");
        check.setAttribute("id","aggrement");
        document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_58 > label").append(check);
}
once++;
observer.disconnect();
        var scratch=document.querySelector("#VisilabsScratchToWinBox_58");
        scratch.style.width="240px";
        scratch.style.top="228px";
        scratch.style.right="5px";
        scratch.style.height="50px";
        scratch.style.float="right";
        scratch.style.borderRadius="18px";
        scratch.style.position="absolute";

        document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.width="240px";
document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.height="50px";
document.querySelector("#VisilabsScratchToWinBox_58 > canvas").style.borderRadius="18px";

        document.querySelector("#VisilabsScratchToWinCanvas_58").style.width="240px";
document.querySelector("#VisilabsScratchToWinCanvas_58").style.height="50px";
document.querySelector("#VisilabsScratchToWinCanvas_58").style.borderRadius="18px";

        document.querySelector("#img_lightbox_close").style.top="0px";
        document.querySelector("#img_lightbox_close").style.right="0px";

        document.querySelector("#visi_lightbox_popbox").style.padding="0px";

        document.querySelector("#visi_lightbox_content_fixed").style.transform="translate3d(0,0,3px)";
        document.querySelector("#visi_lightbox_content_fixed").style.top="calc(50% - 175px)";
 document.querySelector("#visi_lightbox_content_fixed").style.left="calc(50% - 125px)";

document.querySelector("#visi_lightbox_popbox").style.height="350px";

document.querySelector("head").append("<style>#VisilabsScratchToWinBox_58{-webkit-border-radius:18px;}</style>")

      }
       
    })
  });
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  });