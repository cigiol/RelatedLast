var addedProduct=VisiParameters["OM.pb"];
var products=[];
var localSVariable= localStorage.getItem('vl-addedProducts');
if(localSVariable){
    products=localStorage.getItem('vl-addedProducts').split(",");
    if(products.includes(addedProduct)){

    }
    else{
        products.push(addedProduct);
    }
    if(products.length>8){
        products.shift();
    }
}
else{
    products.push(addedProduct);
}
localStorage.setItem('vl-addedProducts',products);