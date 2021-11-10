var campID ="52";
var coupon = "123456";


var copyInput = document.createElement("input");
copyInput.style.position="absolute";
copyInput.style.readOnly=true;
copyInput.value=coupon;
copyInput.style.border="none";
copyInput.style.backgroundColor="transparent";
copyInput.style.fontSize="13px";
copyInput.style.bottom="23px";
copyInput.style.right="23px";
copyInput.style.width="43px";
copyInput.style.color="transparent";
copyInput.style.fontWeight="bold";
copyInput.style.letterSpacing="-1px";
copyInput.style.cursor="pointer";


var maxi= document.querySelector(".contentMaximized");
if(maxi){
    maxi.appendChild(copyInput);

copyInput.addEventListener("click", function(){
    var copyText = copyInput;
    copyText.select();
    document.execCommand("copy");
    alert("Kupon kodunuz kopyalanmıştır");
    try{VLSendClickFunc(campID, 4);}catch(e){};
});
}
