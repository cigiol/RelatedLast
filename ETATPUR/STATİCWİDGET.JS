var data = {
  "1": "48,67",
  "47": "40,67",
  "67": "48,47",
  "37": "40,39",
  "34": "42,43",
  "41": "42,44",
  "38": "42,44",
  "49": "40,48",
  "45": "48,49",
  "36": "42,43",
  "35": "40,36",
  "40": "47,39",
  "42": "44,41",
  "48": "39,46",
  "44": "42,41",
  "43": "42,44",
  "68": "42,44",
  "50": "42,44",
  "39": "48,45",
  "46": "48,49"
};

var index=0;

function triggerWidget(productCode) {
  index=0;
  var products=data[productCode].split(',');
  console.log(productCode);
  console.log(products);
  arrFilter = [];
  var attributeFilt = new VL_OfferFilter("productcode", VL_OfferFilterType.Equals, products[0]);
  arrFilter.push(attributeFilt);
  var vl = new Visilabs();
  vl.AddParameter("json", true);
  vl.Suggest(11, null, null, CallBackMethod, null, arrFilter);

  arrFilter = [];
  var attributeFilt = new VL_OfferFilter("productcode", VL_OfferFilterType.Equals, products[1]);
  arrFilter.push(attributeFilt);
  var vl = new Visilabs();
  vl.AddParameter("json", true);
  vl.Suggest(11, null, null, CallBackMethod, null, arrFilter);

  var addtoCartButtons = document.querySelectorAll(".swiper-slide.item-container .add-basket-wrapper a");
  addtoCartButtons.forEach(addToCart => {
    addToCart.addEventListener("click", function () { <%VLSendClickFunc%> })
  });
}

function CallBackMethod(dataArr) {
  if(dataArr.length > 0){
    var data=dataArr[0];
    var product = document.querySelectorAll(".swiper-slide.item-container")[index];
    product.querySelector(".content .row-text a").href=data.dest_url;
    product.querySelector(".content .price-wrapper a").href=data.dest_url;
    product.querySelector(".image-container a").href=data.dest_url;
    product.querySelector(".content .row-text a .name").innerText=data.title;  
    product.querySelector(".content .price-wrapper .row-text.price").innerHTML=` <span>₺</span>${data.dprice}`;
    product.querySelector(".image-container img").src=data.img.replace(".jpg","_size140x230_cropCenter.jpg");
    product.querySelector(".add-basket-wrapper a").dataset.sku=data.attr1;
    product.querySelector(".add-basket-wrapper a").dataset.pk=data.code;
    product.querySelector(".add-basket-wrapper a").dataset.price=data.dprice;
    product.querySelector(".add-basket-wrapper a").dataset.image=data.img;
    product.querySelector(".add-basket-wrapper a").dataset.name=data.title;
    product.querySelector(".add-basket-wrapper a").dataset.url=data.dest_url;
    product.querySelector(".add-basket-wrapper a").dataset.ga=`
    product_id: ${data.attr1},
    name: ${data.title},
    brand: ETAT PUR,
    price: ${data.dprice}
  `;
    index++;
    console.log(data);
  }
}

var style = document.createElement("style");
style.innerHTML=`
.header__basket--reco .recommendation .content .desc{
  max-height: 46px;
  height: 46px;
  overflow: hidden;
  font-family: Raleway;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -.4px;
  color: #054262;
  margin-bottom: 30px;
}
.header__basket--reco .recommendation .content .name{
  font-family: Lora;
  font-size: 24px;
  word-break: normal;
  height: 144px;
  max-height: 144px;
  overflow: hidden;
  margin-bottom: 15px;
  font-weight: 700;
  color: #054262;
  line-height: 32px;
}
.recommendation .item-container .image-container{
  z-index: 0;
}
.header__basket--reco .recommendation .content{
  z-index: 1;
}
`;
document.head.append(style);

if (VisiParameters["OM.clist"]) {
  <%VLSendImpressionFunc%>
  var buttons = document.querySelectorAll(".js-add-basket.button.add-basket-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () { triggerWidget(button.dataset.pk) })
  });
}
else if (VisiParameters["OM.pv"]) {
  <%VLSendImpressionFunc%>
  document.querySelector(".js-add-basket.button.product-add-basket__button").addEventListener("click", function () { triggerWidget(document.querySelector(".js-add-basket.button.product-add-basket__button").dataset.pk) })
}


