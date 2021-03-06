function SocialProofCallback(data) {
    data.view += 10;
    data.purchase = 0;
    data.basket = 0;
    console.log(data.view);
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
            position: sticky;
            z-index: 149;
            bottom: 10px;
            width: 250px;
            height: 60px;
            margin-left: 10px;
            overflow: hidden;
            background-color: #002b70;
            border-radius: 6px;
            display: block;
            animation: zoomInAnimation 2s forwards;
        }

        #productStatNotifierModal .content {
            background: url(https://img.visilabs.net/banner/uploaded_images/79_726_20200228150751542.png);
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
            font-size: 15px;
            color: #fff;
            /*cursor: pointer;*/
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
        <div class="close-button">??</div>
        <div class="content">
            Son 24 saatte<br />
            ` + data.view + ` ki??i bu ??r??ne bakt??.
            <br />` + data.purchase  + ` ki??i sat??n ald??.
        </div>`;
            } else {
                modalHTML.innerHTML = `
        <div class="close-button">??</div>
        <div class="content">
            Bug??n bu ??r??n?? ` + data.view + ` ki??i g??r??nt??ledi.
         </div>`;
            }

            var wrapper;

            if (window.outerWidth > 500){
                wrapper = document.querySelector('body');
                if (wrapper)
                wrapper.appendChild(modalHTML);
            }
            else{
                wrapper = document.querySelector('.col-xs-12.col-sm-7.col-md-7.product__detail-slider');
                if (wrapper)
                wrapper.after(modalHTML);
            }
                

            

            var modal = document.getElementById("productStatNotifierModal");
            modal.style.display = "block";
        }

        productStatNotifierModalInserCSS();
        productStatNotifierModalInserHTML();

        var proofContent = document.querySelector('#productStatNotifierModal .content');
        var proofCloseButton = document.querySelector('#productStatNotifierModal .close-button');

        function closeModal() {

            var modal  = document.querySelector('#productStatNotifierModal');

            if (modal) {
                modal.style.animation = "zoomOutAnimation 1s forwards";

                setTimeout(function () {
                    modal.remove();
                }, 700);
            }
        }

        proofCloseButton.addEventListener("click", closeModal);
    }

    setTimeout(function(){
        var proofCloseButton = document.querySelector('#productStatNotifierModal .close-button');

        if (proofCloseButton) {
            proofCloseButton.click();
        }
    }, (window.innerWidth < 500) ? 10000 : 20000);

    setTimeout(function(){

        var purchase;
        if (document.querySelector('#VisiProductStatNotifierSection article #vl-stat-purchase')) {
            purchase = parseInt(document.querySelector('#VisiProductStatNotifierSection article #vl-stat-purchase').getAttribute("data-id"));
            console.log(purchase);
        } else {
            purchase = 0;
        }
        SocialProofCallback2(purchase);
        
    }, (window.innerWidth < 500) ? 12000 : 22000);

}

var css = document.createElement('style');
css.type = 'text/css';

var styles = '#VisiProductStatNotifierSection { display: none !important }';

if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));

document.getElementsByTagName("head")[0].appendChild(css);

setTimeout(function () {
    var views;
    if (document.querySelectorAll('#VisiProductStatNotifierSection article')){
        var socials = document.querySelectorAll('#VisiProductStatNotifierSection article');
        for(var i=0;i<socials.length;i++){
            if(!socials[i].querySelector("#vl-stat-purchase")){
                views = parseInt(socials[i].innerText.split(" ")[3]);
            }
        }
    }
    else {
        views = 0;
    }
    SocialProofCallback({ view: views });
}, 1000);


function SocialProofCallback2(data) {
    data += 4;

    if (document.querySelector('#productStatNotifierModal'))
        return;

    if (data > 0) {
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
            position: sticky;
            z-index: 149;
            bottom: 10px;
            width: 250px;
            height: 60px;
            margin-right: 10px;
            overflow: hidden;
            background-color: #b70234;
            border-radius: 6px;
            display: block;
            animation: zoomInAnimation 2s forwards;
        }
        
        #productStatNotifierModal .content {
            background: url(https://img.visilabs.net/banner/uploaded_images/79_726_20200228150751542.png);
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
            font-size: 15px;
            color: #fff;
            /*cursor: pointer;*/
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
        <div class="close-button">??</div>
        <div class="content">
            Son 24 saatte<br />
            ` + data + ` adet sat??ld??.
            <br />` + data.purchase  + ` ki??i sat??n ald??.
        </div>`;
            } else {
                modalHTML.innerHTML = `
        <div class="close-button">??</div>
        <div class="content">
            Bu ??r??n?? bug??n ` + data + ` ki??i sat??n ald??.
         </div>`;
            }

            var wrapper;

            if (window.outerWidth > 500){
                wrapper = document.querySelector('body');
                if (wrapper)
                wrapper.appendChild(modalHTML);
            }
            else{
                wrapper = document.querySelector('.col-xs-12.col-sm-7.col-md-7.product__detail-slider');
                if (wrapper)
                wrapper.after(modalHTML);
            }

            var modal = document.getElementById("productStatNotifierModal");
            modal.style.display = "block";
        }

        productStatNotifierModalInserCSS();
        productStatNotifierModalInserHTML();

        var proofContent = document.querySelector('#productStatNotifierModal .content');
        var proofCloseButton = document.querySelector('#productStatNotifierModal .close-button');

        function closeModal() {

            var modal  = document.querySelector('#productStatNotifierModal');

            if (modal) {
                modal.style.animation = "zoomOutAnimation 1s forwards";

                setTimeout(function () {
                    modal.remove();
                }, 700);
            }
        }

        proofCloseButton.addEventListener("click", closeModal);
    }

    setTimeout(function(){
        var proofCloseButton = document.querySelector('#productStatNotifierModal .close-button');

        if (proofCloseButton) {
            proofCloseButton.click();
        }
    }, (window.innerWidth < 500) ? 10000 : 20000);

}