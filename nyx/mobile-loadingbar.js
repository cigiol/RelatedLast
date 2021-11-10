function move() {

var BasketAmountItem=0;

for (var i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i].event=="checkout") {
        BasketAmountItem=dataLayer[i].order_price;
    }
}
if(BasketAmountItem>0){
	

/*
if(document.querySelectorAll('.-mw-text-inner')){
	BasketAmountItem=document.querySelectorAll('.-mw-text-inner');
	BasketAmountItem=BasketAmountItem[BasketAmountItem.length-2];
}
else{
	console.log("YOK");
	BasketAmountItem=document.querySelector('#pro-order-summary-3012 > div.pro-order-summary-inner > div.pro-order-summary-total > div.pro-order-summary-total-price > div > div.display-inline-block.pro-product-price-sale-price > div'); 
}*/
//var basketAmount = BasketAmountItem.innerText; 
var basketAmountRounded=BasketAmountItem.split(".")[0];
var basketAmount = BasketAmountItem;
var basketAmountFloat = parseFloat(basketAmount).toFixed(2);
if(basketAmountRounded>=120){
	if(!document.querySelector('#vl-reachedGoal')){
	var img = document.createElement("img");
	img.id='vl-reachedGoal';
	img.style.width='100%';
	img.style.height='30px';
	img.style.marginTop='10px';
	img.src="https://img.visilabs.net/banner/uploaded_images/244_1239_20200330122750238.png";
	var addItem= document.querySelector('#left_content_2_Dynamic_1_0_0');
	if(addItem){
		var a=addItem.querySelector('.-mw-dynamic');
		addItem.insertBefore(img,a);
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
myProgress.style.marginTop='10px';
myProgress.style.backgroundColor='#FDF2F8';

var myBar= document.createElement('div');
myBar.id='myBar';
myBar.style.width='50%';
myBar.style.height='30px';
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
tl.style.lineHeight='12px';
tl.style.fontSize='10px';
tl.style.paddingRight='5px';
tl.style.fontFamily='Arial, Helvetica, sans-serif';
tl.style.float='right';
tl.style.display='inline-block';

var amount= document.createElement('p');
amount.id='basket-amount';
amount.innerText=basketAmount;
amount.style.textAlign='right';
amount.style.color='white';
amount.style.lineHeight='11px';
amount.style.paddingRight='2px';
amount.style.fontSize='10px';
amount.style.fontFamily='Helvetica Neue Bold';
amount.style.fontWeight='bold';
amount.style.float='right';
amount.style.display='inline-block';

var freeShipping= document.createElement('p');
freeShipping.id='free-shipping';
freeShipping.innerText='ÜCRETSİZ KARGO';
freeShipping.style.fontFamily='Helvetica Neue Bold';
freeShipping.style.fontSize='12px';
freeShipping.style.fontWeight='bold';
freeShipping.style.textDecoration='underline';
freeShipping.style.right='calc(52% - 30px)';
freeShipping.style.width='auto';
freeShipping.style.textAlign='center';
freeShipping.style.position='absolute';
freeShipping.style.margin="0";

var dynamicFreeShippingText= document.createElement('p');
dynamicFreeShippingText.id='dynamic-FreeShipping-Text';
dynamicFreeShippingText.innerHTML='Fırsatı için '+goalAmount+' <span class="TurkLirasi">₺</span>"lik daha ürün ekle!';
dynamicFreeShippingText.style.marginTop='27px';
dynamicFreeShippingText.style.fontSize='8px';
dynamicFreeShippingText.style.fontWeight='bold';
dynamicFreeShippingText.style.fontFamily='Helvetica Neue Bold';
dynamicFreeShippingText.style.width='auto';
dynamicFreeShippingText.style.right='calc(52% - 47px)';
dynamicFreeShippingText.style.position='absolute';
dynamicFreeShippingText.style.textAlign='center';
dynamicFreeShippingText.style.margin='15px 0 0 0';

myBar.appendChild(tl);
myBar.appendChild(amount);
myBar.appendChild(freeShipping);
myBar.appendChild(dynamicFreeShippingText);
var addItem= document.querySelector('#left_content_3_Dynamic_1_0_0');
if(addItem){
	var a=addItem.querySelector('.-mw-dynamic');
	addItem.insertBefore(myProgress,a);
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
}
move();
const config = { attributes: true, childList: true, subtree: true};
var shadow = new MutationObserver(function () {
	if(!document.querySelector("#vl-loadingbar"))
		come = setInterval(move,100);
});
shadow.observe(document.body, config);
