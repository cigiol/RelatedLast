document.querySelector(".contentMinimized").style.display="block";
document.querySelector(".contentMaximized").style.display="none";

document.querySelector("#btnCloseVisiNotifier").addEventListener("click",function(){

document.cookie ="kulak=false";
document.querySelector("#VisiNotifierStyle2").remove();

});

if (document.cookie.indexOf("kulak") !=-1) {
  document.querySelector("#VisiNotifierStyle2").remove();
}