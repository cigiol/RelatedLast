function SocialProofCallback(data) {
    data.view += 50;
    data.purchase = 0;
    data.basket = 0;

    if (document.querySelector('#productStatNotifierModal'))
        return;

    if (data.view > 0) {
        function productStatNotifierModalInserCSS() {
            var style = document.createElement('style');
            style.innerHTML = `
        @keyframes zoomInAnimation {
            0% {
                transform: scale(0.8,0.8);
            }
            100% {
                transform: scale(1,1);
            }
        }
        @keyframes zoomOutAnimation {
            0% {
                transform: scale(1,1);
            }
            100% {
                transform: scale(0,0);
            }
        }
        
        #productStatNotifierModal {
            display: none;
            position: fixed;
            z-index: 999999;
            bottom: 10px;
            width: 280px;
            height: 60px;
            margin-left: 10px;
            overflow: hidden;
            background-color: #b70234;
            border-radius: 4px;
            display: block;
            animation: zoomInAnimation 2s forwards;
        }

        #productStatNotifierModal .content {
            background: url(https://img.visilabs.net/banner/uploaded_images/230_1218_20200518110838875.png);
            background-position: 10px;
            background-size: 38px;
            background-repeat: no-repeat;
            margin: auto;
            width: 100%;
            height: 60px;
            display: table-cell;
            vertical-align: middle;
            padding-left: 60px;
            line-height: 16px;
            font-size: 13px;
            color: #fff;
            cursor: pointer;
        }

        #productStatNotifierModal .close-button {
            position: absolute;
            color: #fff;
            top: 0px;
            right: 4px;
            cursor: pointer;
        }
        
        @media only screen and (max-width: 600px) {
          #productStatNotifierModal {
            width: 155px;
            height: 40px;
          }
          
          #productStatNotifierModal .content {
            height: 40px;
            line-height: 13px;
            font-size: 11px;
            background-position: 4px;
            background-size: 30px;
            padding-left: 40px;
          }
        }
        
`;

            if (window.outerWidth < 500)
                style.innerHTML = style.innerHTML.replace('bottom', 'top');

            document.head.appendChild(style);
        }

        function productStatNotifierModalInserHTML() {

            var modalHTML = document.createElement("div");
            modalHTML.id = "productStatNotifierModal";

            if (data.purchase > 0) {
                modalHTML.innerHTML = `
        <div class="content">
            Son 24 saatte<br />
            ` + data.view + ` kişi bu ürüne baktı.
            <br />` + data.purchase + ` kişi satın aldı.
        </div>`;
            } else {
                modalHTML.innerHTML = `
        <div class="content">
            Bugün <b>` + data.view + `</b> kişi bu ürünü inceledi.
         </div>`;
            }

            var wrapper;

            if (window.outerWidth > 500)
                wrapper = document.querySelector('body');
            else
                wrapper = document.querySelector('.bx-viewport');

            if (wrapper)
                wrapper.appendChild(modalHTML);

            var modal = document.getElementById("productStatNotifierModal");
            modal.style.display = "block";
        }

        productStatNotifierModalInserCSS();
        productStatNotifierModalInserHTML();

        var proofContent = document.querySelector('#productStatNotifierModal .content');
        var proofCloseButton = document.querySelector('#productStatNotifierModal .close-button');

        function closeModal() {

            var modal = document.querySelector('#productStatNotifierModal');

            if (modal) {
                modal.style.animation = "zoomOutAnimation 1s forwards";

                setTimeout(function () {
                    modal.remove();
                }, 700);
            }
        }

        proofContent.addEventListener("click", closeModal);
    }

}

var css = document.createElement('style');
css.type = 'text/css';

var styles = '#VisiProductStatNotifierSection { display: none !important }';

if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));

document.getElementsByTagName("head")[0].appendChild(css);

var chino = document.querySelector(".product__facet--heading h1").innerText.split('Chino');
var denim = document.querySelector(".product__facet--heading h1").innerText.split('Denim');
if (chino.length > 1 || denim.length > 1) {
    setTimeout(function () {
        var views;
        if (document.querySelector('#VisiProductStatNotifierSection article')) {
            var social = document.querySelector('#VisiProductStatNotifierSection article');
            views = parseInt(social.innerText.split("'")[1]);
        }
        else {
            views = 0;
        }
        SocialProofCallback({ view: views });
    }, 500);

}
else{

    for (var i = 0; i < dataLayer.length; i++) {

        if (dataLayer[i].event == "eeEvent") {
            if (dataLayer[i].ecommerce.detail.products[0].category == "Erkek/T-Shirt" || dataLayer[i].ecommerce.detail.products[0].category == "Erkek/Gömlek"
                || dataLayer[i].ecommerce.detail.products[0].category == "Erkek/Takım Elbise" || dataLayer[i].ecommerce.detail.products[0].category == "Erkek/Ceket"
                || dataLayer[i].ecommerce.detail.products[0].category == "Kadın/Ceket" || dataLayer[i].ecommerce.detail.products[0].category == "Kadın/T-Shirt"
                || dataLayer[i].ecommerce.detail.products[0].category == "Kadın/Triko" || dataLayer[i].ecommerce.detail.products[0].category == "Kadın/Gömlek") {
    
    
    
                setTimeout(function () {
                    var views;
                    if (document.querySelector('#VisiProductStatNotifierSection article')) {
                        var social = document.querySelector('#VisiProductStatNotifierSection article');
                        views = parseInt(social.innerText.split("'")[1]);
                    }
                    else {
                        views = 0;
                    }
                    SocialProofCallback({ view: views });
                }, 500);
    
            }
    
    
        }
    
    
    
    
    }
}



