var deleteBtn = document.querySelectorAll('.delete.js-delete')
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
        location.reload()
    })
}
if (!document.querySelector('.botuz')) {
    var vl = new Visilabs();
    vl.AddParameter("json", true);
    vl.Suggest(25, null, null, CallBackMethod);
    function CallBackMethod(dataArr) {
        console.log(dataArr[0].attr3)

        var prodNotif = document.createElement('span')
        prodNotif.className = 'botuz'
        prodNotif.style.backgroundColor = 'beige'
        var mod = document.querySelectorAll('.basket__item__img-box')

        for (let i = 0; i < mod.length; i++) {
            if (dataArr[i].attr3 < 4) {
                prodNotif.innerText = `Son ${dataArr[i].attr3} Ürün`
                mod[i].appendChild(prodNotif.cloneNode(true))
            }
        }
    }
}

(function () {
    var proxied = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function () {
        var pointer = this
        var intervalId = window.setInterval(function () {
            if (pointer.readyState != 4) {
                return;
            }
            clearInterval(intervalId);
            if (pointer.responseURL === 'https://www.madamecoco.com/baskets/basket/') {
                var vl = new Visilabs();
                vl.AddParameter("json", true);
                vl.Suggest(25, null, null, CallBackMethod);
                function CallBackMethod(dataArr) {
                    console.log(dataArr[0].attr3)

                    var prodNotif = document.createElement('span')
                    prodNotif.style.backgroundColor = 'beige'
                    var mod = document.querySelectorAll('.basket__item__img-box')

                    for (let i = 0; i < mod.length; i++) {
                        if (dataArr[i].attr3 < 4) {
                            prodNotif.innerText = `Son ${dataArr[i].attr3} Ürün`
                            mod[i].appendChild(prodNotif.cloneNode(true))
                        }
                    }
                }
            }
        }, 1);
        return proxied.apply(this, [].slice.call(arguments));
    };
})();