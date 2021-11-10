var countControl = setInterval(() => {
    var quantity = document.querySelector(".basket-quantity.js-basket-quantity").textContent;

    if (quantity > 0 && document.getElementById("cartDiv") === null) {
        clearInterval(countControl);
        var cartDiv = document.createElement("div");
        cartDiv.id = "cartDiv";
        document.querySelector("body").appendChild(cartDiv);

        var cartHref = document.createElement("a");
        cartHref.id = "cartHref";
        cartHref.href = "https://www.penti.com.ro/baskets/basket/?OM.zn=acttype-4&OM.zpc=act-3";
        document.querySelector("#cartDiv").appendChild(cartHref);

        var shopCart = document.createElement("img");
        shopCart.id = "shopCart";

        var div=document.createElement("div");
        div.className="cartText";
        div.style="display: none;width: 250px;background-color: rgb(228, 20, 121);bottom: 60px;right: 0px;text-align: center;position: absolute;color: white;border-radius: 12px;";
        document.querySelector("#cartDiv").append(div);

        shopCart.src = "https://img.visilabs.net/banner/uploaded_images/247_1247_20191011160759416.png";
        document.querySelector("#cartHref").appendChild(shopCart);

        var campStyleCreator = document.createElement("style");
        campStyleCreator.innerHTML = "#cartDiv{bottom: 0;right: 0;z-index: 9999;position: fixed; display: block;} #cartHref {text-decoration: none; font-size: 17px;font-family: Arial;color: #fff;} #shopCart {width: 65px; height: auto;}";
        document.querySelector("head").appendChild(campStyleCreator);

        var count = document.createElement("div");
        count.id = "vlCount";

        count.style.color = "white";
        count.style.width = "25px";
        count.style.height = "25px";
        count.style.position = "fixed";
        count.style.bottom = "20px";
        count.style.right = "20px";
        count.style.borderRadius = "30px";
        count.style.paddingTop = "5px";
        count.style.fontSize = "15px";
        count.style.textAlign = "center";
        cartDiv.appendChild(count);
        setInterval(() => {
            count.innerText = parseFloat(document.querySelector(".basket-quantity.js-basket-quantity").textContent);

        }, 1000);

            var CartDown = document.querySelector('.basket-dropdown__container.hidden-xs.js-basket-dropdown');

            cartDiv.addEventListener('mouseover', function() {
                var price = parseInt(document.querySelector(".js-header-basket-amount").innerText);
                if(price >=60 && price<=100){
                div.innerText="Încă "+(100-price)+" Lei Pentru Transport Gratuit";
                div.style.display = 'block';
                }
                else
                CartDown.style.display = 'block';
            });
            cartDiv.addEventListener('mouseout', function() {
                CartDown.style.display = 'none';
                div.style.display = 'none';
            });
        
        
    }
}, 1000);