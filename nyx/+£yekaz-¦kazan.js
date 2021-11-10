var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
  
      if(document.querySelector("#VisilabsScratchToWinBox_48")){
        var scratch=document.querySelector("#VisilabsScratchToWinBox_48");
        scratch.style.width="326px";
        scratch.style.top="120px";
        scratch.style.right="10px";
        scratch.style.float="right";
        scratch.style.borderRadius="32px";
        scratch.style.position="absolute";

        document.querySelector("#VisilabsScratchToWinBox_48 > canvas").style.width="326px";
        document.querySelector("#VisilabsScratchToWinCanvas_48").style.width="326px";
        document.querySelector("#img_lightbox_close").style.top="0px";
        document.querySelector("#img_lightbox_close").style.right="0px";
      }
       
    })
  });
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  });