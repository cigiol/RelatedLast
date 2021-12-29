var sData = JSON.parse(sessionStorage.getItem('vlstock'));
var perfectData;
var campName = "ProductPage-CombinedProducts";
var data = [{
    "502379780": { "XS": "50237977016", "S": "50237977014", "M": "50237977013", "L": "50237977012", "XL": "50237977015", "2XL": "50237977009" },
    "502379770": { "XS": "50237978016", "S": "50237978014", "M": "50237978013", "L": "50237978012", "XL": "50237978015", "2XL": "50237978009" }
}];

var intToSize = { 0: "XS", 1: "S", 2: "M", 3: "L", 4: "XL", 5: "2XL" };


function Maximize() {
    document.querySelector("#vl-combine-min").style.right = "-40px";
    document.querySelector("#vl-combine-kulak").style.right = "0px";
}
function Minimize() {
    document.querySelector("#vl-combine-min").style.right = "0px";
    document.querySelector("#vl-combine-kulak").style.right = "-250px";
}

var productsSelect = document.createElement("select");
productsSelect.setAttribute("id", "vl-products");



if (sData) {
    perfectData = sData;
    doIt();
}
else {
    var meta = document.createElement("meta");
    meta.setAttribute('http-equiv', "Content-Security-Policy");
    meta.setAttribute('content', 'upgrade-insecure-requests');
    document.head.append(meta);
    fetch('http://apps.aydinli.com.tr/imaplus/kombin-urun')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            perfectData = data;
            sessionStorage.setItem("vlstock",JSON.stringify(perfectData));
            setTimeout(() => {
                doIt();
            }, 2000);
    
        });
}

function doIt() {
    var id = VisiParameters["OM.pv"].slice(0, -2);
    if (data[0][id]) {
        for (var i = 0; i < 6; i++) {
            var itemId = data[0][id][intToSize[i]];
            perfectData.find(item => {
                if (item.sku == itemId) {
                    itemId = item;
                }
            });
            if (itemId.stock > 0) {
                console.log(itemId);
                var select = `<option value="${itemId.polo_shop_product_id}">${intToSize[i]}</option>`;

                productsSelect.innerHTML += select;
            }
        }
        document.body.append(productsSelect);
    }
    var itemList = [data[0][id][intToSize[0]]];
    arrFilter = [];
    var attributeFilt = new VL_OfferFilter("productcode", VL_OfferFilterType.Equals, itemList);
    arrFilter.push(attributeFilt);
    var vl = new Visilabs();
    vl.AddParameter("json", true);
    vl.Suggest(13, null, null, CallBackMethod, null, arrFilter);
    function CallBackMethod(dataArr) {
        if (dataArr.length > 0) {
            var style = document.createElement("style");
            style.innerHTML = `
            #vl-combine-min{
                position: fixed;
                right: -40px;
                top: 30%;
                width: 40px;
                height: 120px;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                color: white;
                background: #DA6881;
                border-radius: 10px 0 0 10px;
                line-height: 35px;
                text-align: center;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 2px 6px 0 rgb(0 0 0 / 50%);
                transition: right 1s;
                z-index:999999;
            }
            #vl-combine-kulak {
                position: fixed;
                right: 0px;
                top: 30%;
                width: 175px;
                background: #F4F4F4;
                text-align: center;
                box-shadow: 0 2px 6px 0 rgb(0 0 0 / 50%);
                transition: right 1s;
                z-index:999999;
            }
            #vl-combine-close {
                position: absolute;
                right: 9px;
                top: 5px;
                color: #9C9C9C;
                font-size: 15px;
                cursor: pointer;
                font-weight:bolder;
            }
            #vl-combine-title {
                color: #132549;
                font-weight: bold;
                text-align: center;
                padding: 10px;
            }
            #vl-combine-img {
                padding: 0 20px;
            }
            #vl-combine-name {
                font-size: 15px;
                font-weight: 600;
                margin: 10px 0;
            }
            #vl-combine-price{
                color: grey;
                text-decoration: line-through;
                font-size: 13px;
                margin-bottom: 5px;
            }
            #vl-combine-dprice {
                color: #B80131;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 15px;
            }
            #vl-combine-basket {
                background: #B80131;
                width: 150px;
                margin: 10px 15px;
                font-size: 13px;
                padding: 10px;
                color: white;
                cursor: pointer;
            }
        `;
            document.head.append(style);

            var div = document.createElement("div");
            div.setAttribute("id", "vl-combine-kulak");
            div.innerHTML = `
            <div id="vl-combine-title">Kombin Ürünler</div>
            <div id="vl-combine-close">X</div>
            <a target="_blank" href="${dataArr[0].dest_url}">
            <img id="vl-combine-img" src="${dataArr[0].img}">
            </a>
            <div id="vl-combine-name">${dataArr[0].title}</div>
            <div id="vl-combine-price">${dataArr[0].price} TL</div>
            <div id="vl-combine-dprice">${dataArr[0].dprice} TL</div>
            <div id="vl-combine-basket">SEPETE EKLE</div>
 
        `;
            document.body.append(div);

            document.querySelector("#vl-combine-basket").before(productsSelect);


            var divMin = document.createElement("div");
            divMin.setAttribute("id", "vl-combine-min");
            divMin.innerHTML = `
                Kombin Ürünler
            `;
            document.body.append(divMin);
            divMin.addEventListener("click", Maximize);
            document.querySelector("#vl-combine-close").addEventListener("click", Minimize);
            <%VLSendImpressionFunc%>;
            ga("create", "UA-2253042-20", {name: "RMC", cookieDomain: "auto"});
            ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
            $('#vl-combine-basket').click(function () {
                var dataId = document.querySelector("#vl-products").value;
                var csrfToken = getCookie("csrftoken");
                console.log(dataId);
                $.ajax({
                    url: 'https://tr.uspoloassn.com/baskets/basket/',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        product: dataId,
                        quantity: 1,
                        CSRF: csrfToken
                    },
                    success: function (data) {
                        console.log(data);
                        document.querySelector("#vl-combine-basket").innerText = "SEPETE EKLENDİ";
                        document.querySelector("#vl-combine-basket").style.background = "grey";
                        <%VLSendClickFunc%>;
                        ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });


            });

            function getCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
              }

            console.log(dataArr);
            

        }
    }


}

