! function() {
    if (null == localStorage.getItem("OM.wheel-oct01")) {
        jQuery("head").append('<style id="vl-wheel-first-step">#vl-game-form-overlay{transform: translate3d(0 , 0 , 3px);z-index: 1000000001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\t\t\t#vl-game-form{transform: translate3d(0 , 0 , 3px);position: fixed; top: 0; left: 0; bottom: 0; right: 0; margin: auto; height: 381px; width: 700px; background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/cark/krc_cark_d.png);z-index: 1000000002!important;background-size: contain;background-repeat: no-repeat;}\t\t\t#vl-form-close{position: absolute; top: 4px; right: 4px; width: 20px; cursor: pointer; opacity: 0.7; z-index: 1000000002;}\t\t\t#vl-form-close:hover{opacity: 1}\t\t\t#wheel{position: absolute; top:38px;left:36px;width:303px;-moz-border-radius:250px;-webkit-border-radius:250px;border-radius:250px;-webkit-transition:-webkit-transform .5s linear;-moz-transition:-moz-transform .5s linear;-opera-transition:-opera-transform .5s linear;-ms-transition:transform .5s linear}\t\t\t#tick{font-size:45px; color: #ec1c23;z-index: 99;position: absolute;left: 164px;top: 12px;}\t\t\t.vl-spin-button{position: absolute;cursor: pointer;right: 105px;bottom: 125px;opacity: 0; width: 150px;height: 55px;}\t\t\t@media only screen and (max-width: 700px) {\t\t\t\t#vl-game-form{width: 320px; height: 544px; background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/cark/krc_cark_m.png)}\t\t\t\t#vl-form-close{top: 2px;right: 2px;width: 20px;height: 20px;font-size: 18px;}\t\t\t\t.vl-spin-button{margin: auto; right: 0; left: 0; bottom: 50px;opacity: 0; width: 155px;height: 55px;}\t\t\t\t#wheel{width: 300px; top: 26px; left: 0; right: 0; margin:auto;}\t\t\t\t#tick{top:3px; left:139px}\t\t\t}\t\t\t</style>'), jQuery("body").append('<div id="vl-game-form-overlay"></div><div id="vl-game-form">\t\t\t<img src="data:image/png;base64,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" id="vl-form-close"/>\t\t\t\t<div id="playArea"><button id="spin" class="vl-spin-button"></button></div>    \t\t\t<div id="tick">▼</div>    \t\t\t<img id="wheel" src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/305_1363_20211008101236897.png" data-rotation="0"/>        \t</div>');
        try {
            VLSendImpressionFunc(150, 4)
        } catch (t) {}

        function t(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
        }
        jQuery("#vl-form-close").click(function() {
            jQuery("#vl-game-form-overlay, #vl-game-form").remove()
        }), jQuery(".vl-spin-button").click(function() {
            try {
                VLSendClickFunc(150, 4)
            } catch (t) {}
        }), Array.prototype.randomize = function() {
            var t = this.length;
            if (0 === t) return !1;
            for (; --t;) {
                var e = Math.floor(Math.random() * (t + 1)),
                    i = this[t],
                    o = this[e];
                this[t] = o, this[e] = i
            }
        }, Array.prototype.toObject = function() {
            for (var t = {}, e = 0; e < this.length; e++) t[this[e]] = "";
            return t
        };
        var e = function() {
            var t = document.getElementById("wheel"),
                e = ["Hediye Kategorisinde Sepette %15 İndirim", "Seçili Ürünlerde 300TL'ye 40 TL İndirim", "Seçili Ürünlerde 750 TL'ye 75 TL İndirim", "Seçili Ürünlerde 1000 TL'ye 100 TL İndirim", "Seçili Ürünlerde Sepette %5 İndirim", "Seçili Ürünlerde Sepette %5 İndirim"],
                i = !1,
                o = function() {
                    return 10 * Math.random() + 35
                },
                r = o(),
                n = void 0 !== document.body.style.MozTransform ? "MozTransform" : void 0 !== document.body.style.WebkitTransform ? "WebkitTransform" : void 0 !== document.body.style.OTransform ? "OTransform" : "";

            function a() {}
            return a.prototype.rotate = function(e) {
                var i = "rotate(-" + e + "deg)";
                void 0 !== t.style[n] && (t.style[n] = i);
                var o = e % 360 / (180 * Math.PI),
                    r = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + o + ", M12=-" + o + ", M21=" + o + ", M22=" + o + ")";
                void 0 !== t.style.filter && (t.style.filter = r), t.setAttribute("data-rotation", e)
            }, a.prototype.addEventListener = function(e, i) {
                t.addEventListener(e, i, !1)
            }, a.prototype.spin = function(n, a) {
                document.getElementById("spin").style.display = "none";
                var p = this;
                if (clearTimeout(i), r -= .15, void 0 === a && (a = parseInt(t.getAttribute("data-rotation"), 10)), this.rotate(a), !(r > 0)) {
                    var d = parseInt(t.getAttribute("data-rotation"), 10);
                    r = o();
                    var l = 360 / e.length,
                        s = l / 2,
                        m = e[Math.floor(Math.ceil((d + s) % 360) / l)];
                    return n(m)
                }
                i = setTimeout(function() {
                    p.spin(n, a + r)
                }, 20)
            }, a
        }();
        new(function() {
            var i = new e,
                o = document.getElementById("spin");
            return function() {
                var e = function() {
                    i.spin(function(t) {
                        var e, i, o;
                        if ("Hediye Kategorisinde Sepette %15 İndirim" == t) e = "EYKRCEV15", i = "Sadece Mobil Uygulamada Hediye Kategorisinde Sepette %15 İndirim", o = "https://btpro.page.link/ev-hediyeleri";
                        else if ("Seçili Ürünlerde 300TL'ye 40 TL İndirim" == t) e = "KCKCEY40", i = "Sadece Mobil Uygulamada Geçerli Seçili Ürünlerde 300 TL ve Üzerine 40 TL İndirim", o = "https://btpro.page.link/secili-urunler";
                        else if ("Seçili Ürünlerde 750 TL'ye 75 TL İndirim" == t) e = "EYKRC75", i = "Sadece Mobil Uygulamada Geçerli Seçili Ürünlerde 750 TL ve Üzerine 75 TL İndirim", o = "https://btpro.page.link/secili-urunler";
                        else if ("Seçili Ürünlerde 1000 TL'ye 100 TL İndirim" == t) e = "EY100KRC", i = "Sadece Mobil Uygulamada Geçerli Seçili Ürünlerde 1000 TL ve Üzerine 100 TL İndirim", o = "https://btpro.page.link/secili-urunler";
                        else if ("Seçili Ürünlerde Sepette %5 İndirim" == t) e = "EYKRC05", i = "Sadece Mobil Uygulamada Geçerli Seçili Ürünlerde %5 İndirim", o = "https://btpro.page.link/secili-urunler";
                        else {
                            if ("Seçili Ürünlerde Sepette %5 İndirim" != t) return alert(t), !1;
                            e = "EYKRC05", i = "Sadece Mobil Uygulamada Geçerli Seçili Ürünlerde %10 İndirim", o = "https://btpro.page.link/secili-urunler"
                        }
                        setTimeout(function() {
                            ! function(t, e, i) {
                                jQuery("#vl-wheel-first-step").remove(), jQuery("head").append("<style>#vl-game-form-overlay{transform: translate3d(0 , 0 , 3px);z-index: 1000000001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\t\t\t\t#vl-game-form{transform: translate3d(0 , 0 , 3px);position: fixed; top: 0; left: 0; bottom: 0; right: 0; margin: auto; height: 381px; width: 700px; background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/cark/krc_cark_result_empty_d.png);z-index: 1000000002!important;background-size: contain;background-repeat: no-repeat;}\t\t\t\t#vl-form-close{position: absolute; top: 4px; right: 4px; width: 20px; cursor: pointer; opacity: 0.7; z-index: 1000000002;}\t\t\t\t#vl-form-close:hover{opacity: 1}\t\t\t\t#vl-copy-button{position: absolute;cursor: pointer;right: 80px;bottom: 75px;width: 190px;height: 50px; opacity: 0}\t\t\t\t#vl-couponCode{border: none; background: transparent;position: absolute;bottom: 143px;right: 86px;text-align: center;width: 175px;font-size: 25px;}\t\t\t\t#vl-result-text{background: transparent;font-size: 23px;width: 305px;position: absolute;top: 55px;right: 25px;text-align: center;}\t\t\t\t#wheel{opacity: 0.5; position: absolute; top:38px;left:36px;width:303px;-moz-border-radius:250px;-webkit-border-radius:250px;border-radius:250px;-webkit-transition:-webkit-transform .5s linear;-moz-transition:-moz-transform .5s linear;-opera-transition:-opera-transform .5s linear;-ms-transition:transform .5s linear}\t\t\t\t#tick{opacity: 0.5;font-size:45px; color: #ec1c23;z-index: 99;position: absolute;left: 164px;top: 12px;}\t\t\t\t#vl-label{font-size: 10px; position: absolute; bottom: 10px; right: 65px}\t\t\t\t@media only screen and (max-width: 700px) {\t\t\t\t\t#vl-game-form{width: 320px; height: 544px; background-image: url(https://img.euromsg.net/3EEFFBAD63444ABF9F3DAF0FC1C3D9DE/images/cark/krc_cark_result_empty_m.png)}\t\t\t\t\t#vl-form-close{top: 2px;right: 2px;width: 20px;height: 20px;font-size: 18px;}\t\t\t\t\t#vl-copy-button{margin: auto; right: 0; left: 0; bottom: 18px;width: 190px;height: 54px; opacity: 1; background-color: #0091ff; color: white;font-weight: 600;border-radius: 10px;text-align: center;padding: 8px;}\t\t\t\t\t#vl-couponCode{bottom: 85px; left: 0; right: 0; margin: auto; font-size: 20px}\t\t\t\t\t#wheel{opacity: 0.5; width: 300px; top: 26px; left: 0; right: 0; margin:auto;}\t\t\t\t\t#tick{opacity: 0.5; top:3px; left:139px}\t\t\t\t\t#vl-result-text{top: 340px;left: 0;right: 0;margin: auto;font-size: 16px;}\t\t\t\t\t#vl-label{font-size: 9px; bottom: 4px; right: 0; left: 0; margin: auto; text-align:center}\t\t\t\t}\t\t\t\t</style>"), jQuery(".vl-spin-button").remove(), jQuery("#vl-game-form").append('<div id="vl-result-text">' + e + "</div>"), jQuery("#vl-game-form").append('<input type="text" value="' + t + '" id="vl-couponCode" readonly/>'), jQuery("#vl-game-form").append('<div id="vl-copy-button">KODU KOPYALA VE APP\'E GİT</div>'), jQuery("#vl-game-form").append('<div id="vl-label">*Bu kod 6 Ekim 2021 tarihine kadar geçerlidir.</div>'), document.getElementById("vl-copy-button").addEventListener("click", function() {
                                    document.getElementById("vl-couponCode").select(), document.execCommand("copy"), window.open(i, "_blank")
                                })
                            }(e, i, o)
                        }, 3500), localStorage.setItem("OM.wheel-oct01", "coupon-" + e + "-" + i + "-" + o)
                    })
                };
                t(o, "click", e), t(i, "click", e)
            }
        }())
    }
}();