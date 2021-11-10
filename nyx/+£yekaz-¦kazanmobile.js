var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
  
      if(document.querySelector("#VisilabsScratchToWinBox_54")){
        var scratch=document.querySelector("#VisilabsScratchToWinBox_54");
        scratch.style.width="250px";
        scratch.style.top="120px";
        scratch.style.right="10px";
        scratch.style.float="right";
        scratch.style.borderRadius="32px";
        scratch.style.position="absolute";

        document.querySelector("#VisilabsScratchToWinBox_54 > canvas").style.width="250px";

        document.querySelector("#VisilabsScratchToWinCanvas_54").style.width="250px";

        document.querySelector("#img_lightbox_close").style.top="0px";
        document.querySelector("#img_lightbox_close").style.right="0px";

        document.querySelector("#visi_lightbox_popbox").style.padding="0px";

        document.querySelector("#visi_lightbox_content_fixed").style.transform="translate3d(0,0,3px)";
        document.querySelector("#visi_lightbox_content_fixed").style.top="calc(50% - 175px)";
        document.querySelector("#visi_lightbox_content_fixed").style.left="calc(50% - 125px)";
      }
       
    })
  });
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  });