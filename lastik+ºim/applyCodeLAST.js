var cform=true;
for(var i=0;i<dataLayer.length;i++){

  if(dataLayer[i].event=="crto_basketpage"){
    if(dataLayer[i].crto.products.length>0){
      for(var j=0;j<dataLayer[i].crto.products.length;j++){
        if(dataLayer[i].crto.products[j].campaign_available==0){
          cform=false;
        }
      }
    }
  }
}
if(cform){
  
  var vl = new Visilabs();
  vl.AddParameter("OM.cform",1);
  vl.SuggestActions();
  
}


var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return;

    if(document.querySelector("#VisiNotifSection")){
      document.querySelector("#applyCode").addEventListener("click",function(){

          var b = document.querySelector("#promo_code");
          b.style.display="flex";
          
          var a =document.querySelector(".form-control.input-sm");
          a.value="MERHABA2";
          a.select();
          a.dispatchEvent(new Event('blur'));
      
          document.querySelector("#bio_ep_bg").click();

          if(document.querySelector(".btn-orange-outline")){
            setInterval(function(){ document.querySelector(".btn-orange-outline").click();},3000);
          }

          
      });
      observer.disconnect();
      
    }
    
  })
});

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
});
