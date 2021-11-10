
var itemsArray=[];
for (var i = 0; i < dataLayer.length; i++) {
    if (dataLayer[i].event=="checkout") {
        var itemCount=dataLayer[i].ecommerce.checkout.products;
        for (var j = 0; j < itemCount.length; j++) {
            
           itemsArray.push(itemCount[j].dimension40);

            
        }
    }
    
}
console.log(itemsArray);

if(document.querySelectorAll(".slick-item.col-sm-2.slick-slide")){
	
	var productDiv = document.querySelectorAll(".slick-item.col-sm-2.slick-slide");

	

		
		for(var i=0;i<productDiv.length;i++){
			
			var productInfoDiv = productDiv[i].querySelector(".pro-product-info");
			
			
			var a=productInfoDiv.querySelector("a");
			for(var k=0;k<itemsArray.length;k++){
				if(a.href.split("zpc=")[1]==itemsArray[k]){
				
					productDiv[i].remove();
				
				}
				
			}
			
			
		}


	
}