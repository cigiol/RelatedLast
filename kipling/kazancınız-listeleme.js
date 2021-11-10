
var elems = document.querySelectorAll('.product__inside');

if (elems.length > 0) {
    insertStyling();
    insertBadge(elems);
}
function insertBadge(elems) {

    var price;
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].querySelector(".vl-discount-badge")) {
            elems[i].querySelector(".vl-discount-badge").remove();
        }
        if (elems[i].querySelector('.price-box__old')) {
            price = parseFloat(elems[i].querySelector('.product-prices li').innerText.split(",").join(".")) - parseFloat(elems[i].querySelector('.product-prices > :nth-child(2)').innerText.split(",").join("."));

            if (price) {
                var sepetİndirim = document.createElement('ul');
                sepetİndirim.setAttribute('class', 'vl-discount-badge');
                sepetİndirim.innerHTML = "<span class='vl-basket-text'>Kazancınız </span><span class='vl-basket-price'>" + price.toFixed(2) + " TL</span>";
                elems[i].querySelector('.product-prices').insertAdjacentElement('afterend', sepetİndirim);

            }
        }

    }

}


function insertStyling() {
    var styling = document.createElement('style');
    styling.setAttribute('id', 'vl-newstyle');
    if (!document.getElementById('vl-newstyle')) {
        styling.innerText = '.vl-discount-badge{display: flex;flex-direction: row;justify-content:space-around;background-color:#E3E5E3;color: #F32735;width:80%;border:1px solid #F32735;margin:auto;padding:10px;font-size:14px;margin-top:5px;line-height: 15px;font-family: Kipling_Regular,sans-serif;}.vl-basket-price{font-family: Kipling_Bold,sans-serif;font-size:16px;}@media only screen and (max-width:991px){.vl-discount-badge{flex-direction:column;} }';
        document.head.appendChild(styling);
    }

}