if (!document.querySelector("#vl-text")) {
  var vlText = document.createElement("div");
  vlText.setAttribute("id", "vl-text");
  vlText.innerHTML = `
  <img style="padding-left:20px; width:90px;" src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200615135432582.png">
  <ul>
    <li>Tüm Suwen Mayo ve Bikini Grupları, form gücü ve konforu kanıtlanmış LYCRA® XTRA LIFE™ elyaf kullanılarak üretilmiştir.</li>
    <li>Bu sayede havuz suyunda bulunan klora karşı, standart elastanlara göre <b>10 KAT</b>’a kadar <b>DAHA DAYANIKLIDIR.</b></li>
    <li>Ter ve güneş kremlerinden kaynaklı yağ asitlerine karşı dayanıklıdır.</li>
    <li>Bu sayede uzun süre yeni görünümünü ve formunu korur.</li>
    <li>Nefes alabilen kumaş teknolojisine sahiptir.</li>
  </ul>`;

  if (window.innerWidth > 768) {
    if (document.querySelector("#myTabContent"))
      document.querySelector("#myTabContent").append(vlText);
  }
  else {
    if (document.querySelector("#collapseTwo"))
      document.querySelector("#collapseTwo").append(vlText);
  }
  var img = document.createElement("img");
img.style.position="fixed";
img.style.bottom="0";
img.style.right="0";
img.style.width="90px";
img.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200615135432582.png";
document.querySelector(".owl-item.active").append(img);


}