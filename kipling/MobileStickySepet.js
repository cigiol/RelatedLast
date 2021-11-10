var countControl = setInterval(() => {
    var quantity = document.querySelector(".basket-quantity.js-basket-quantity").textContent;

    if (quantity > 0 && document.getElementById("cartDiv") === null) {
        clearInterval(countControl);
        var cartDiv = document.createElement("div");
        cartDiv.id = "cartDiv";
        document.querySelector("body").appendChild(cartDiv);

        var shopCart = document.createElement("img");
        shopCart.id = "shopCart";
        shopCart.src = "https://img.visilabs.net/banner/uploaded_images/247_1247_20191011160759416.png";
        document.querySelector("#cartDiv").appendChild(shopCart);

        var div = document.createElement("div");
        div.className = "cartText";
        div.style = "display: none;width: 250px;background-color: rgb(228, 20, 121);bottom: 60px;right: 0px;text-align: center;position: absolute;color: white;border-radius: 12px;";
        document.querySelector("#cartDiv").append(div);

        var campStyleCreator = document.createElement("style");
        campStyleCreator.innerHTML = "#cartDiv{bottom: 0;right: 0;z-index: 9999;position: fixed; display: block;} #shopCart {width: 65px; height: auto;}";
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

        function openMiniBasket() {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(styleElement);
            styleElement.appendChild(document.createTextNode('.vlDisplayBlock {top:0 !important;margin-left:auto !important;position:fixed !important}'));

            if (document.querySelector(".basket-dropdown__container")) {
                var basket = document.querySelector(".basket-dropdown__container");

                document.querySelector("#cartDiv").addEventListener("click", function () {
                    var price = parseInt(document.querySelector(".js-header-basket-amount").innerText);
                    if (price >= 60 && price <= 100) {
                        div.innerText = "Încă " + (100 - price) + " Lei Pentru Transport Gratuit";
                        if (document.querySelector(".cartText").style.display == "none") {
                            document.querySelector(".cartText").style.display = "block";
                        } else {
                            document.querySelector(".cartText").style.display = "none"
                        }
                    }
                    else {
                        if (basket.getAttribute("style") === "display:none !important" || basket.getAttribute("style") === "display: block;") {
                            basket.setAttribute('style', 'display:inline !important');
                            basket.classList.add("vlDisplayBlock");
                        } else {
                            basket.setAttribute('style', 'display:none !important');
                            basket.classList.remove("vlDisplayBlock");
                        }
                    }
                });

            }
        }

        openMiniBasket();
    }
}, 1000);