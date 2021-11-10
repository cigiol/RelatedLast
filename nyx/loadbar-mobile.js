function move() {
    for (var e = 0, t = 0; t < dataLayer.length; t++) "checkout" == dataLayer[t].event && (e = dataLayer[t].order_price);
    if (e > 0) {
        var l = e.split(".")[0],
            i = e,
            n = parseFloat(i).toFixed(2);
        if (l >= 120) {
            if (!document.querySelector("#vl-reachedGoal")) {
                var a = document.createElement("img");
                if (a.id = "vl-reachedGoal", a.style.width = "100%", a.style.height = "30px", a.style.marginTop = "10px", a.src = "https://img.visilabs.net/banner/uploaded_images/244_1239_20200330122750238.png", g = document.querySelector("#left_content_3_Dynamic_1_0_0")) {
                    var r = g.querySelector(".-mw-dynamic");
                    g.insertBefore(a, r)
                }
                l = 120
            }
        } else if (!document.querySelector("#vl-loadingbar")) {
            var o = parseFloat(120 - n).toFixed(2),
                s = document.createElement("style");
            s.innerHTML = ".TurkLirasi{font-family:Arial, Helvetica, sans-serif}", document.head.appendChild(s);
            var d = document.createElement("div");
            d.id = "vl-loadingbar", d.style.width = "100%", d.style.marginTop = "10px", d.style.backgroundColor = "#FDF2F8";
            var y = document.createElement("div");
            y.id = "myBar", y.style.width = "50%", y.style.height = "30px", y.style.backgroundColor = "#D7378D", y.style.backgroundImage = "linear-gradient(to right, #FDBEE0 , #D7378D)", y.style.borderBottomRightRadius = "10px", y.style.borderTopRightRadius = "10px", y.style.position = "relative", y.style.overflow = "hidden", d.append(y);
            var c = document.createElement("p");
            c.id = "tl", c.innerText = "₺", c.style.textAlign = "right", c.style.color = "white", c.style.lineHeight = "12px", c.style.fontSize = "10px", c.style.paddingRight = "5px", c.style.fontFamily = "Arial, Helvetica, sans-serif", c.style.float = "right", c.style.display = "inline-block";
            var p = document.createElement("p");
            p.id = "basket-amount", p.innerText = i, p.style.textAlign = "right", p.style.color = "white", p.style.lineHeight = "11px", p.style.paddingRight = "2px", p.style.fontSize = "10px", p.style.fontFamily = "Helvetica Neue Bold", p.style.fontWeight = "bold", p.style.float = "right", p.style.display = "inline-block";
            var m = document.createElement("p");
            m.id = "free-shipping", m.innerText = "ÜCRETSİZ KARGO", m.style.fontFamily = "Helvetica Neue Bold", m.style.fontSize = "12px", m.style.fontWeight = "bold", m.style.textDecoration = "underline", m.style.right = "calc(52% - 30px)", m.style.width = "auto", m.style.textAlign = "center", m.style.position = "absolute", m.style.margin = "0";
            var g, u = document.createElement("p");
            if (u.id = "dynamic-FreeShipping-Text", u.innerHTML = "Fırsatı için " + o + ' <span class="TurkLirasi">₺</span>"lik daha ürün ekle!', u.style.marginTop = "27px", u.style.fontSize = "8px", u.style.fontWeight = "bold", u.style.fontFamily = "Helvetica Neue Bold", u.style.width = "auto", u.style.right = "calc(52% - 47px)", u.style.position = "absolute", u.style.textAlign = "center", u.style.margin = "15px 0 0 0", y.appendChild(c), y.appendChild(p), y.appendChild(m), y.appendChild(u), g = document.querySelector("#left_content_2_Dynamic_1_0_0")) {
                r = g.querySelector(".-mw-dynamic");
                g.insertBefore(d, r)
            }
            var h = 5 * l / 12 + 50;
            if (0 == (t = 0)) {
                t = 1;
                var v = document.getElementById("myBar"),
                    f = 50,
                    x = setInterval(function() {
                        f >= h ? (clearInterval(x), t = 0) : (f++, v.style.width = f + "%")
                    }, 10)
            }
        }
    }
}
move();
const config = {
    attributes: !0,
    childList: !0,
    subtree: !0
};
var shadow = new MutationObserver(function() {
    document.querySelector("#vl-loadingbar") || (come = setInterval(move, 100))
});
shadow.observe(document.body, config);