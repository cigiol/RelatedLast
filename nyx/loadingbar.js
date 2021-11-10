function move() {
var BasketAmountItem=0;
if(document.querySelector('#pro-order-summary-3012 > div.pro-order-summary-inner > div.pro-order-summary-total > div.pro-order-summary-total-price > div.display-inline-block.pro-product-price-sale-price > div')){
	BasketAmountItem=document.querySelector('#pro-order-summary-3012 > div.pro-order-summary-inner > div.pro-order-summary-total > div.pro-order-summary-total-price > div.display-inline-block.pro-product-price-sale-price > div'); 
}
else{
	BasketAmountItem=document.querySelector('#pro-order-summary-3012 > div.pro-order-summary-inner > div.pro-order-summary-total > div.pro-order-summary-total-price > div > div.display-inline-block.pro-product-price-sale-price > div'); 
}
var basketAmount = BasketAmountItem.innerText; 
var basketAmountRounded=basketAmount.split(",")[0];
var basketAmount = basketAmount.replace(',','.');
var basketAmountFloat = parseFloat(basketAmount).toFixed(2);
if(basketAmountRounded>=120){
	if(!document.querySelector('#vl-reachedGoal')){
	var img = document.createElement("img");
	img.id='vl-reachedGoal';
	img.style.width='100%';
	img.style.height='50px';
	img.src="https://img.visilabs.net/banner/uploaded_images/244_1239_20200330122822510.png";
	var addItem= document.querySelector('#body > div.pro-wrapper > div.container.proadmin-cms-place-row.index_2 > div > div.OHll.col-md-8.col-sm-8.col-xs-8.alpha.cms_place.proadmin-cms-place-column');
	if(addItem){
		addItem.appendChild(img);
	}
	
	basketAmountRounded=120;
	}
}
else{
if(!document.querySelector('#vl-loadingbar')){
var totalAmount =120.00;
var goalAmount=parseFloat(totalAmount-basketAmountFloat).toFixed(2);
var style = document.createElement("style");
style.innerHTML = ".TurkLirasi{font-family:Arial, Helvetica, sans-serif}";
document.head.appendChild(style);
var myProgress=document.createElement('div');
myProgress.id='vl-loadingbar';
myProgress.style.width='100%';
myProgress.style.backgroundColor='#FDF2F8';
var myBar= document.createElement('div');
myBar.id='myBar';
myBar.style.width='50%';
myBar.style.height='50px';
myBar.style.backgroundColor='#D7378D';
myBar.style.backgroundImage='linear-gradient(to right, #FDBEE0 , #D7378D)';
myBar.style.borderBottomRightRadius='10px';
myBar.style.borderTopRightRadius='10px';
myBar.style.position='relative';
myBar.style.overflow='hidden';
myProgress.append(myBar);
var tl= document.createElement('p');
tl.id='tl';
tl.innerText='₺';
tl.style.textAlign='right';
tl.style.color='white';
tl.style.lineHeight='50px';
tl.style.fontSize='39px';
tl.style.paddingRight='10px';
tl.style.fontFamily='Arial, Helvetica, sans-serif';
tl.style.float='right';
tl.style.display='inline-block';
var amount= document.createElement('p');
amount.id='basket-amount';
amount.innerText=basketAmount;
amount.style.textAlign='right';
amount.style.color='white';
amount.style.lineHeight='50px';
amount.style.paddingRight='5px';
amount.style.fontSize='39px';
amount.style.fontFamily='Helvetica Neue Bold';
amount.style.fontWeight='bold';
amount.style.float='right';
amount.style.display='inline-block';
var freeShipping= document.createElement('p');
freeShipping.id='free-shipping';
freeShipping.innerText='ÜCRETSİZ KARGO';
freeShipping.style.fontFamily='Helvetica Neue Bold';
freeShipping.style.fontSize='18px';
freeShipping.style.fontWeight='bold';
freeShipping.style.textDecoration='underline';
freeShipping.style.right='calc(52% - 78px)';
freeShipping.style.width='255px';
freeShipping.style.textAlign='center';
freeShipping.style.position='absolute';
var dynamicFreeShippingText= document.createElement('p');
dynamicFreeShippingText.id='dynamic-FreeShipping-Text';
dynamicFreeShippingText.innerHTML='Fırsatı için '+goalAmount+' <span class="TurkLirasi">₺</span>"lik daha ürün ekle!';
dynamicFreeShippingText.style.marginTop='27px';
dynamicFreeShippingText.style.fontSize='16px';
dynamicFreeShippingText.style.fontWeight='bold';
dynamicFreeShippingText.style.fontFamily='Helvetica Neue Bold';
dynamicFreeShippingText.style.width='255px';
dynamicFreeShippingText.style.right='calc(52% - 78px)';
dynamicFreeShippingText.style.position='absolute';
dynamicFreeShippingText.style.textAlign='center';
myBar.appendChild(tl);
myBar.appendChild(amount);
myBar.appendChild(freeShipping);
myBar.appendChild(dynamicFreeShippingText);
var addItem= document.querySelector('#body > div.pro-wrapper > div.container.proadmin-cms-place-row.index_2 > div > div.OHll.col-md-8.col-sm-8.col-xs-8.alpha.cms_place.proadmin-cms-place-column');
if(addItem){
	addItem.appendChild(myProgress);
}
var barRate =(basketAmountRounded*5/12)+50;
var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 50;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= barRate) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
}
}
move();
const config = { attributes: true, childList: true, subtree: true};
var shadow = new MutationObserver(function () {
	if(!document.querySelector("#vl-loadingbar"))
		move();
});
shadow.observe(document.body, config);
