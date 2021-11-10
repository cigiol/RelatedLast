setTimeout(callForm,8000);
function callForm(){
  $('#kvkk_genel_modal').modal('show');
  var vl=new Visilabs();
  vl.AddParameter("OM.sform",1);
  vl.SuggestActions();
}
function mailSub(){
    var form = document.querySelector("#kvkk_genel_modal");
    form.style.zIndex="999999993";
    
    var mail = document.querySelector("#kvkk_form > div:nth-child(5) > div:nth-child(1) > div > input").value;
    
    var submitButton=document.querySelector("#kvkk_form > button");
    
    var sendMail=document.querySelector("#visilabs_mail_subscription_form_input_1");


    
    submitButton.addEventListener("click",function(){
        var name = document.querySelector("#kvkk_form > div:nth-child(4) > div:nth-child(1) > div > input");
        var surName = document.querySelector("#kvkk_form > div:nth-child(4) > div:nth-child(2) > div > input");
        var mail = document.querySelector("#kvkk_form > div:nth-child(5) > div:nth-child(1) > div > input").value;
        var submitSend = document.querySelector("#visilabs_mail_subscription_form_button_1");
        sendMail.value=mail;
        console.log("hovermail="+mail);
        console.log("hovermail="+sendMail.value);
        var a=document.querySelector("#kvkk_form > div:nth-child(8) > div > div > label > input[type=checkbox]");
        if(a.checked && name.value!=null && surName.value!=null){
            var sendCheck = document.querySelector("#visilabs_mail_subscription_form_consent_checkbox_1");
            sendCheck.checked=true;
            submitSend.click();

        }
    });


    var close =document.querySelector("#kvkk_genel_modal > div > div > div.modal-header > button");
    close.addEventListener("click",function(){

      var t=document.querySelector("#visi_lightbox_overlay_wrapper");
      var y=document.querySelector("#visi_lightbox_content_fixed");
      t.remove();
      y.remove();

    });
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return;
  
      if(document.querySelector("#visilabs_mail_subscription_form_input_1")){
        mailSub();
        
      }
      if(document.querySelector("#kvkk_genel_modal").style.display==="none"){
        var t=document.querySelector("#visi_lightbox_overlay_wrapper");
        var y=document.querySelector("#visi_lightbox_content_fixed");
        if(t){
          t.remove();
        }
        if(y){
          y.remove();
        }
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
  
 