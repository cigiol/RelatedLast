if (!document.getElementById("vl-story-container")) {
    var borderColor = "orange";
    var storyVersion = "3";
    var stories = [{
        title: "HAYAT",
        smallImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20191106082428627.png",
        largeImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20200522145322606.jpg",
        link: "https://www.cignafinans.com.tr/yasasin-hayat-sigortasi?OM.zn=acttype-4&OM.zpc=act-12&OM.story=HAYAT",
        buttonText: "DETAYLI BİLGİ İÇİN TIKLAYINIZ",
        buttonColor: "#4caf52",
        buttonTextColor: "#fff",
        backgroundColor: "#2578c8",
        seen: !1
    }, {
        title: "FERDİ KAZA",
        smallImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20191106082343584.png",
        largeImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20200522145338552.jpg",
        link: "https://www.cignafinans.com.tr/fatura-odeme-guvencesi-ferdi-kaza-sigortasi?OM.zn=acttype-4&OM.zpc=act-12&OM.story=FERDIKAZA",
        buttonText: "DETAYLI BİLGİ İÇİN TIKLAYINIZ",
        buttonColor: "#014d99",
        buttonTextColor: "#ffffff",
        backgroundColor: "#13488e",
        seen: !1
    }, {
        title: "BES",
        smallImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20191106082500509.png",
        largeImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20200522145407705.jpg",
        link: "https://www.cignafinans.com.tr/kolay-emeklilik-plani?OM.zn=acttype-4&OM.zpc=act-12&OM.story=BES",
        buttonText: "DETAYLI BİLGİ İÇİN TIKLAYINIZ",
        buttonColor: "#4caf52",
        buttonTextColor: "#fff",
        backgroundColor: "#018730",
        seen: !1

    },  {
        title: "S.S.S.",
        smallImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20191216164716839.png",
        largeImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20200522145425036.jpg",
        link: "https://www.cignafinans.com.tr/bireysel-emeklilik-sorulari?st=5233?OM.zn=acttype-4&OM.zpc=act-12&OM.story=SSS",
        buttonText: "DETAYLI BİLGİ İÇİN TIKLAYINIZ",
        buttonColor: "#1662B0",
        buttonTextColor: "#fff",
        backgroundColor: "#4ead51",
        seen: !1

    },{
        title: "İYİ HİSSET",
        smallImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20191106082533697.png",
        largeImg: "https://img.visilabs.net/banner/uploaded_images/245_1245_20200522145353333.jpg",
        link: "https://www.iyihisset.com/sev/genel-kultur/sizi-mutlu-edecek-6-tuyo?OM.zn=acttype-4&OM.zpc=act-12&OM.story=IYIHISSET",
        buttonText: "SİTEYE GİTMEK İÇİN TIKLAYINIZ",
        buttonColor: "#014d99",
        buttonTextColor: "#fff",
        backgroundColor: "#a3227e",
        seen: !1

    }];

    function storyInit() {
        function t(t) {
            t.stopPropagation();
            for (var e = t.path || t.composedPath && t.composedPath(), o = 0; o < e.length; o++)
                if ("" != e[o].id) {
                    var r = e[o].id.split("vl-story-mini-")[1];
                    i(r - 1), A = r - 1;
                    break
                } b.style.transformOrigin = I[A].getBoundingClientRect().left + 30 + "px " + (I[A].getBoundingClientRect().top + 30) + "px", b.classList.toggle("active"), n(), document.body.style = "margin: 0; height: 100%; overflow: hidden", document.querySelector("html").style = "margin: 0; height: 100%; overflow: hidden"
        }

        function e(t) {
            null != t && t.stopPropagation(), s(), b.style.transformOrigin = null, b.classList.toggle("active"), document.body.style = "", document.querySelector("html").style = ""
        }

        function o(t) {
            A > 0 && "prev" === t || A < stories.length - 1 && "next" === t ? (1, s(), g.style.transform = "scale(0.93)", f.style.transition = "0.35s transform ease-in-out", f.style.transform = "rotateY(" + ("prev" == t ? "" : "-") + "90deg)", setTimeout(function () {
                i(A + ("prev" == t ? -1 : 1)), f.style.transition = "0s transform ease-in-out", f.style.transform = "rotateY(0deg)", g.style.transform = "scale(0.95)", n(), 0
            }, 350)) : (document.querySelector("#vl-story-navbar").scrollTo("prev" == t ? 0 : 70 * stories.length, 0), e())
        }

        function i(t) {
            I && !I[t].classList.contains("seen") && (I[t].classList.add("seen"), stories[t].seen = !0, function (t) {
                var e;
                d.CookieManager.ReadInternal(c) && (e = d.CookieManager.ReadInternal(c).split(""));
                e[t] = "1", e = e.join(""), d.CookieManager.WriteInternal(c, e, "1", "D")
            }(t));
            var e = document.querySelectorAll(".vl-story-item > div");
            if (e.length > 0)
                for (var o = e[0].id.split("vl-story-")[1], i = 0; i < e.length; i++) u.insertBefore(e[i], u.children[o - 1 + i]);
            h.appendChild(y[t]), t - 1 >= 0 && x.appendChild(y[t - 1]), t + 2 <= stories.length && w.appendChild(y[t + 1]), A = t
        }

        function r(t, e) {
            var o, i, r = e;
            this.pause = function () {
                window.clearTimeout(o), r -= Date.now() - i
            }, this.resume = function () {
                i = Date.now(), window.clearTimeout(o), o = window.setTimeout(t, r)
            }, this.resume()
        }

        function n() {
            var t = h.querySelector(".vl-story-title").innerHTML,
                e = new Visilabs;
            e.AddParameter("OM.storyImpression", "Evet"), e.AddParameter("OM.storyViews", t), e.Collect();
            var i = h.querySelector(".vl-progress-light");
            i.style.animation = "countdown 10s linear 1", i.style.animationPlayState = "running", T = new r(function () {
                o("next")
            }, 1e4)
        }

        function s() {
            T.pause();
            for (var t = document.querySelectorAll(".vl-progress-light"), e = 0; e < t.length; e++) t[e].style.animation = ""
        }

        function a(t) {
            if ("vl-story-close" !== t.target.className && "vl-story-link" !== t.target.className && (t.stopPropagation(), T.resume(), E)) {
                q = t.changedTouches[0].clientX, C = t.timeStamp, q - k, M = C - S;
                var e = parseFloat(f.style.transform.split("rotateY(")[1]);
                if (P) {
                    if (Math.abs(e) > 9) o(Math.sign(e) > 0 ? "prev" : "next");
                    else l();
                    P = !1
                } else M < 350 ? o(k < v / 5 ? "prev" : "next") : l();
                E = !1
            }
        }

        function l() {
            f.style.transition = "0.35s transform ease-in-out", f.style.transform = "rotateY(0)", g.style.transform = "scale(0.95)";
            var t = h.querySelector(".vl-progress-light");
            t.style.animation = "countdown 10s linear 1", t.style.animationPlayState = "running"
        }
        var d = new Visilabs,
            c = "VL_story_" + storyVersion,
            v = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        ! function () {
            var t = "";
            if (null == d.CookieManager.ReadInternal(c)) {
                for (var e = 0; e < stories.length; e++) t += stories[e].seen ? "1" : "0";
                d.CookieManager.WriteInternal(c, t, "1", "D")
            } else
                for (t = d.CookieManager.ReadInternal(c).split(""), e = 0; e < stories.length; e++) stories[e].seen = "0" != t[e]
        }(),
        function () {
            var t = document.createElement("style");
            t.id = "vl-story-styles";
            var e = "#vl-story-container{background-color:#dfe7f4;white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}#vl-story-container>*{-webkit-tap-highlight-color:transparent;font-family:montserratlight,Arial,Heltevica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vl-story-banner>video{position:absolute;top:50%;transform:translateY(-55%)}#vl-story-navbar::-webkit-scrollbar{display:none}#vl-story-navbar{height:90px;border-bottom:#eee 1px solid;padding:5px;line-height:normal}#vl-story-mini-wrapper{width:" + (75 * stories.length + 5) + "px;margin:0 auto}.vl-story-mini{position:relative;display:inline-block;width:75px;margin:auto;text-align:center;z-index:0}.vl-story-mini-outer{background-color:#fff;border:3px solid #fff;border-radius:50%;margin:3px;width:54px;height:54px;display:inline-block;box-sizing:border-box}.vl-story-mini-outer.seen{position:relative;border:1px solid #bbb}.vl-story-mini:before{z-index:-1;border-radius:50%;background-image:linear-gradient(to bottom,#ad3881,#f1704d);content:'';width:60px;position:absolute;height:60px}.vl-story-mini.seen:before{background-image:unset;border:1px solid #ddd;box-sizing:border-box}.vl-story-mini-outer.seen>.vl-story-mini-inner{margin:3px}.vl-story-mini-inner{background-color:#fff;border:1px solid #ddd;border-radius:50%;width:50px;height:50px;box-sizing:border-box;margin:-1px;background-size:cover;background-position:center}.vl-story-mini-title{font-size:12px;text-align:center;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.vl-banners{display:none}.vl-story-display{top:0;left:0;position:fixed;perspective:1000vw;transition:.35s transform ease-in-out}.vl-story-display-bg.active .vl-story-display{top:0;left:0;position:fixed;perspective:1000vw;width:100%;height:100%}.vl-story-display-bg{z-index:100000;transition-property:transform,border-radius,height;transition-duration:.35s;transition-timing-function:cubic-bezier(1,.35,.35,1);border-radius:50%;transform:scale(0);overflow:hidden;background-color:#fff;top:0;left:0;position:fixed;width:100vw;height:100vw}.vl-story-display-bg.active{border-radius:0;transform:scale(1);height:100%}.vl-story-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d}.vl-story-item{position:absolute;width:100vw;height:100%;color:#fff;backface-visibility:hidden;-webkit-backface-visibility:hidden}.vl-story-item.prev{transform:rotateY(-90deg) translateZ(50vw)}.vl-story-item.current{transform:rotateY(0) translateZ(50vw)}.vl-story-item.next{transform:rotateY(90deg) translateZ(50vw)}.vl-story-banner{width:100vw;height:100%;display:inline-block;position:relative;background-position:center;background-repeat:no-repeat;background-size:100vw auto}.vl-progress-bar{position:absolute;top:10px;width:95%;height:2px;left:2.5%;border-radius:1px}.vl-progress-dark{width:100%;background-color:rgba(0,0,0,.3);height:3px;position:absolute;top:0;border-radius:1px}.vl-progress-light{background-color:#fff;height:3px;position:absolute;top:0;border-radius:1px}.vl-story-info{position:absolute;top:20px;left:2.5%;height:40px}.vl-story-icon{width:40px;height:40px;border-radius:50%;background-color:#fff;display:inline-block;background-size:cover;background-position:center}.vl-story-title{float:right;font-size:17px;line-height:40px;margin-left:5px;color:#fff;text-shadow:1.5px 1.25px #333}.vl-story-link{border:1px solid #fff;position:absolute;bottom:20px;width:280px;height:50px;left:calc(42% - 110px);font-size:16px;font-family:Arial;font-weight:700;text-align:center;text-decoration:none;border-radius:5px;line-height:50px;-webkit-animation-name:buttonAnimations;-webkit-animation-duration:4s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-name:buttonAnimations;animation-duration:.7s;animation-iteration-count:infinite;animation-direction:alternate}@-webkit-keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}@keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}.vl-story-close{text-align:right;line-height:50px;width:50px;height:50px;position:absolute;top:15px;right:2.5%;color:#fff;font-size:30px;text-shadow:1px 1.25px #333}@keyframes countdown{0%{width:0}100%{width:100%}}@media only screen and (max-width:414px){.vl-story-banner{background-size:90vw auto}}";
            t.innerHTML = e, document.head.appendChild(t)
        }();
        var p = document.createElement("div");
        p.id = "vl-story-container";

        function whereStory() {
            if (decodeURIComponent(VisiParameters["OM.uri"]) == "/") {
                var m = document.querySelector("body > div.container");
                m.parentNode.insertBefore(p, m.nextSibling)
            } else {
                var m = document.querySelector("body > div.breadcrumb-container.mobile-visibility");
                m.insertBefore(p, m.firstChild)
            }
        }
        whereStory(),
            function () {
                var t = document.createElement("div");
                t.id = "vl-story-navbar";
                for (var e = "", o = 0; o < stories.length; o++) e += "<div class='vl-story-mini" + (stories[o].seen ? " seen" : "") + "' id='vl-story-mini-" + (o + 1) + "'><div class='vl-story-mini-outer'><div class='vl-story-mini-inner' style='background-image: url(" + stories[o].smallImg + ")'></div></div><div class='vl-story-mini-title'>" + stories[o].title + "</div></div>";
                t.innerHTML = "<div id='vl-story-mini-wrapper'>" + e + "</div>", p.appendChild(t)
            }(),
            function () {
                var t = document.createElement("div");
                t.className = "vl-banners";
                for (var e = "", o = 0; o < stories.length; o++) {
                    var i = "<a href='" + stories[o].link + "' class='vl-story-link' style='background-color:" + (stories[o].buttonColor ? stories[o].buttonColor : "#fff") + "; color: " + (stories[o].buttonTextColor ? stories[o].buttonTextColor : "#000") + "'>" + stories[o].buttonText + "</a>";
                    e += "<div class='vl-story-banner' id='vl-story-" + (o + 1) + "'style='background-color:" + stories[o].backgroundColor + ";background-image: url(" + stories[o].largeImg + ")'><div class='vl-progress-bar'><div class='vl-progress-dark'></div><div class='vl-progress-light'></div></div><div class='vl-story-info' ><div class='vl-story-icon' style='background-image: url(" + stories[o].smallImg + ")'></div><div class='vl-story-title'>" + stories[o].title + "</div></div>" + (stories[o].link && stories[o].buttonText ? i : "") + "<div class='vl-story-close'>&#10005;</div></div>"
                }
                t.innerHTML = e, p.appendChild(t);
                var r = document.createElement("div");
                r.className = "vl-story-display-bg", r.innerHTML = "<div class='vl-story-display'><div class='vl-story-cube' style='transform: rotateY(0);transition: transform 0s'><div class='vl-story-item prev'></div><div class='vl-story-item current'></div><div class='vl-story-item next'></div></div></div>", p.parentNode.insertBefore(r, p.nextSibling)
            }();
        var u = document.querySelector(".vl-banners"),
            y = document.querySelectorAll(".vl-story-banner"),
            g = document.querySelector(".vl-story-display"),
            b = document.querySelector(".vl-story-display-bg"),
            f = document.querySelector(".vl-story-cube"),
            h = document.querySelector(".vl-story-item.current"),
            x = document.querySelector(".vl-story-item.prev"),
            w = document.querySelector(".vl-story-item.next");
        g.style.transform = "scale(0.95)", h.addEventListener("touchstart", function (t) {
            "vl-story-close" !== t.target.className && (t.stopPropagation(), "touchstart" === t.type && (E = !0, k = t.touches[0].clientX, S = t.timeStamp, h.querySelector(".vl-progress-light").style.animationPlayState = "paused", T.pause()))
        }, {
            passive: !0
        }), h.addEventListener("touchmove", function (t) {
            t.stopPropagation(), E && (P = !0, "scale(0.93)" !== g.style.transform && (g.style.transform = "scale(0.93)"), z = t.touches[0].clientX, t.timeStamp, L = k - z, 0 === A && L < 0 || A === stories.length - 1 && L > 0 ? f.style.transform = "rotateY(0)" : Math.abs(L) <= v ? f.style.transform = "rotateY(" + -90 * L / v + "deg)" : (o(Math.sign(L) > 0 ? "next" : "prev"), E = !1))
        }, {
            passive: !0
        }), h.addEventListener("touchend", a, {
            passive: !0
        }), h.addEventListener("touchcancel", a, {
            passive: !0
        });
        var k, S, q, C, M, z, L, T, A = 0,
            E = !1,
            P = !1;
        i(A);
        for (var I = document.querySelectorAll(".vl-story-mini"), Y = 0; Y < I.length; Y++) I[Y].addEventListener("click", t);
        var N = document.querySelectorAll(".vl-story-close");
        for (Y = 0; Y < N.length; Y++) N[Y].addEventListener("click", e)
    }
    storyInit();
    <%VLSendImpressionFunc%>;
}

var storyTitle=document.querySelectorAll(".vl-story-title");for(let t=0;t<storyTitle.length;t++)"FERDİ KAZA"===storyTitle[t].innerText?storyTitle[t].style.color="white":"HAYAT"===storyTitle[t].innerText?storyTitle[t].style.color="white":"BES"===storyTitle[t].innerText?storyTitle[t].style.color="white":"İYİ HİSSET"===storyTitle[t].innerText?storyTitle[t].style.color="#014d99":"S.S.S."===storyTitle[t].innerText&&(storyTitle[t].style.color="white"),storyTitle[t].style.fontWeight="600",storyTitle[t].style.textShadow="none";