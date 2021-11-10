var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
  
      if(document.querySelector("#VisilabsScratchToWinBox_56")){
        var scratch=document.querySelector("#VisilabsScratchToWinBox_56");
        scratch.style.width="326px";
        scratch.style.top="120px";
        scratch.style.right="10px";
        scratch.style.float="right";
        scratch.style.borderRadius="32px";
        scratch.style.position="absolute";

        var check = document.createElement("input");
        check.type="checkbox";
        check.setAttribute("class","checkbox");
        check.setAttribute("id","aggrement");
        document.querySelector("#visilabs_mail_subscription_form_agreement_content_consent_56 > label").append(check);
        



        document.querySelector("#VisilabsScratchToWinBox_56 > canvas").style.width="326px";
        document.querySelector("#VisilabsScratchToWinBox_56 > canvas").style.height="60px";
        document.querySelector("#VisilabsScratchToWinCanvas_56").style.width="326px";
document.querySelector("#VisilabsScratchToWinCanvas_56").style.height="60px";
        document.querySelector("#img_lightbox_close").style.top="0px";
        document.querySelector("#img_lightbox_close").style.right="0px";

document.querySelector("#visi_lightbox_popbox").style.padding="0px";


        document.querySelector("#visilabs_mail_subscription_form_container_56").style.position="absolute";
      }
       
    })
  });
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  });