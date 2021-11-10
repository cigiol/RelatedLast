function createHorizontal(){
  var div = document.createElement("div");
  div.setAttribute("id","vl-horizontal");
  div.style="height: 100%;position: fixed;width: auto;top: 0;right: -300px;background: white;z-index:10000;";
  div.innerHTML="<div class='vl-button' style='font-size:20px;top: 50%;position: absolute;left: -30px;cursor: pointer;'><<<</div>";
  document.body.append(div);

  
}
createHorizontal();
function fixSomeElements() {
  var topSelWid = document.getElementById("vl-complementary").parentNode;
  var loc = document.querySelector("#vl-horizontal");
  loc.append(topSelWid);
 
  var width=loc.offsetWidth+"px";
  loc.style.width = width;
  loc.style.right = "-"+width;

  var btn = document.querySelector(".vl-button");
  btn.addEventListener("click",function(){
      var a = document.querySelector("#vl-horizontal");
      if(a.style.right==="-"+width){
          a.style.right="0px";
          btn.innerText=">>>";
      }
      else{
          a.style.right="-"+width;
          btn.innerText="<<<";
      }
  });

  var imgEls = topSelWid.querySelectorAll(".vl-product-img");
  var dPriceEls = topSelWid.querySelectorAll(".vl-dprice");
  var priceEls = topSelWid.querySelectorAll(".vl-price");
  var badgeEls = topSelWid.querySelectorAll(".urunText");

  for (var i = 0; i < imgEls.length; i++) {
      var imgSrc = imgEls[i].src;
      imgEls[i].src = imgSrc.replace(".jpg", "") + "_size219x328_cropCenter.jpg";
      if (priceEls[i].innerHTML === dPriceEls[i].innerHTML) {
          priceEls[i].remove();
      } else {
          var badgePrice = parseFloat(priceEls[i].innerHTML) - parseFloat(dPriceEls[i].innerHTML);
          if (VisiParameters["OM.uri"].indexOf("%2Fen%2") == 0) {
              badgeEls[i].innerHTML = "You Gain: " + parseFloat(badgePrice).toFixed(2) + " LEI";
          } else {
              badgeEls[i].innerHTML = "CÂȘTIGUL TĂU " + parseFloat(badgePrice).toFixed(2) + " LEI";
          }

      }
  }
}
if(document.getElementById("vl-complementary")){
fixSomeElements();
}









