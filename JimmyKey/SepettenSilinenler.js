var removedProduct;
$(document).on("click", ".RemoveIcon.btn", function () {
    removedProduct = $(this);
    removedProduct = removedProduct[0].parentElement.parentElement.dataset["rowValue"];
    document.querySelector("#deleteCart").addEventListener("click", function () {
        var products = [];
        var localSVariable = localStorage.getItem('vl-removedProducts');
        if (localSVariable) {
            products = localStorage.getItem('vl-removedProducts').split(",");
            if (products.includes(removedProduct)) {

            }
            else {
                products.push(removedProduct);
            }
            if (products.length > 8) {
                products.shift();
            }
        }
        else {
            products.push(removedProduct);
        }
        localStorage.setItem('vl-removedProducts', products);
    });
    document.querySelector("#addFavorite").addEventListener("click", function () {
        var products = [];
        var localSVariable = localStorage.getItem('vl-removedProducts');
        if (localSVariable) {
            products = localStorage.getItem('vl-removedProducts').split(",");
            if (products.includes(removedProduct)) {

            }
            else {
                products.push(removedProduct);
            }
            if (products.length > 8) {
                products.shift();
            }
        }
        else {
            products.push(removedProduct);
        }
        localStorage.setItem('vl-removedProducts', products);
    });
});
