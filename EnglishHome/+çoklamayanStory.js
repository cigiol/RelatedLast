var borderColor = "orange";
var storyVersion = "3";
var stories = [{
    title: "Nevresim Seti",
    smallImg: "https://img.euromsg.net/4CBCC5F337ED43DD8B51AB03C08E63A4/files/nevresim_seti.jpg",
    largeImg: "https://img.euromsg.net/4CBCC5F337ED43DD8B51AB03C08E63A4/files/06042020_79%2C99tl-89%2C99tl-story.jpg",
    link: "https://www.englishhome.com/yatak-odasi/nevresim-seti/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Nevresim",
    buttonText: "Şimdi Keşfet",
    buttonColor: "#004c99",
    buttonTextColor: "#fff",
    backgroundColor: "#004c99",
    seen: !1
}, {
    title: "Kolonya",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200330190351613.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200330190301603.jpg",
    link: "https://www.englishhome.com/kisisel-bakim-kozmetik/kolonya/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Kolonya",
    buttonText: "Alışverişe Başla",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}, {
    title: "Battaniye",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331103211909.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331103110395.jpg",
    link: "https://www.englishhome.com/yatak-odasi/battaniye/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Battaniye",
    buttonText: "Fırsatları Kaçırma",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}, {
    title: "Mutfak",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331104257941.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331104330334.jpg",
    link: "https://www.englishhome.com/mutfak-duzenleme/saklama-kabi/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Saklama-kabi",
    buttonText: "Şimdi Kaydır",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}, {
    title: "Düzenleme",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331104603804.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331104522086.jpg",
    link: "https://www.englishhome.com/ev-gerecleri/sepet/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Hasir-sepet",
    buttonText: "Fırsatları Kaçırma",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}, {
    title: "Bornoz",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331105518130.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331105549222.jpg",
    link: "https://www.englishhome.com/banyo/bornoz/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Bornoz",
    buttonText: "Şimdi Kaydır",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}, {
    title: "Yatak Odası",
    smallImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331105741020.jpg",
    largeImg: "https://img.visilabs.net/banner/uploaded_images/79_726_20200331105709263.jpg",
    link: "https://www.englishhome.com/yatak-odasi/alez/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Alez",
    buttonText: "Fırsatları Kaçırma",
    buttonColor: "#9A5D41",
    buttonTextColor: "#fff",
    backgroundColor: "#9A5D41",
    seen: !1

}];


function storyInit() {
    function t(t) {
        t.stopPropagation();
        for (var e = t.path || t.composedPath && t.composedPath(), o = 0; o < e.length; o++)
            if ("" != e[o].id) {
                var i = e[o].id.split("vl-story-mini-")[1];
                r(i - 1), z = i - 1;
                break
            } g.style.transformOrigin = I[z].getBoundingClientRect().left + 30 + "px " + (I[z].getBoundingClientRect().top + 30) + "px", g.classList.toggle("active"), n(), document.body.style = "margin: 0; height: 100%; overflow: hidden", document.querySelector("html").style = "margin: 0; height: 100%; overflow: hidden"
    }

    function e(t) {
        null != t && t.stopPropagation(), s(), g.style.transformOrigin = null, g.classList.toggle("active"), document.body.style = "", document.querySelector("html").style = ""
    }

    function o(t) {
        z > 0 && "prev" === t || z < stories.length - 1 && "next" === t ? (s(), b.style.transform = "scale(0.93)", f.style.transition = "0.35s transform ease-in-out", f.style.transform = "rotateY(" + ("prev" == t ? "" : "-") + "90deg)", setTimeout(function() {
            r(z + ("prev" == t ? -1 : 1)), f.style.transition = "0s transform ease-in-out", f.style.transform = "rotateY(0deg)", b.style.transform = "scale(0.95)", n()
        }, 350)) : (document.querySelector("#vl-story-navbar").scrollTo("prev" == t ? 0 : 70 * stories.length, 0), e())
    }

    function r(t) {
        I && !I[t].classList.contains("seen") && (I[t].classList.add("seen"), stories[t].seen = !0, function(t) {
            var e;
            d.CookieManager.ReadInternal(c) && (e = d.CookieManager.ReadInternal(c).split("")), e[t] = "1", e = e.join(""), d.CookieManager.WriteInternal(c, e, "1", "D")
        }(t));
        var e = document.querySelectorAll(".vl-story-item > div");
        if (e.length > 0)
            for (var o = e[0].id.split("vl-story-")[1], r = 0; r < e.length; r++) m.insertBefore(e[r], m.children[o - 1 + r]);
        h.appendChild(u[t]), t - 1 >= 0 && x.appendChild(u[t - 1]), t + 2 <= stories.length && w.appendChild(u[t + 1]), z = t
    }

    function i(t, e) {
        var o, r, i = e;
        this.pause = function() {
            window.clearTimeout(o), i -= Date.now() - r
        }, this.resume = function() {
            r = Date.now(), window.clearTimeout(o), o = window.setTimeout(t, i)
        }, this.resume()
    }

    function n() {
        var t = h.querySelector(".vl-story-title").innerHTML,
            e = new Visilabs;
        e.AddParameter("OM.StorySeen", "Evet"), e.AddParameter("OM.stories", t), e.Collect();
        var r = h.querySelector(".vl-progress-light");
        r.style.animation = "countdown 10s linear 1", r.style.animationPlayState = "running", L = new i(function() {
            o("next")
        }, 1e4)
    }

    function s() {
        L.pause();
        for (var t = document.querySelectorAll(".vl-progress-light"), e = 0; e < t.length; e++) t[e].style.animation = ""
    }

    function l(t) {
        if ("vl-story-close" !== t.target.className && "vl-story-link" !== t.target.className && (t.stopPropagation(), L.resume(), C)) {
            t.changedTouches[0].clientX, S = t.timeStamp, A = S - T;
            var e = parseFloat(f.style.transform.split("rotateY(")[1]);
            M ? (Math.abs(e) > 9 ? o(Math.sign(e) > 0 ? "prev" : "next") : a(), M = !1) : A < 350 ? o(k < v / 5 ? "prev" : "next") : a(), C = !1
        }
    }

    function a() {
        f.style.transition = "0.35s transform ease-in-out", f.style.transform = "rotateY(0)", b.style.transform = "scale(0.95)";
        var t = h.querySelector(".vl-progress-light");
        t.style.animation = "countdown 10s linear 1", t.style.animationPlayState = "running"
    }
    var d = new Visilabs,
        c = "VL_story_" + storyVersion,
        v = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    ! function() {
        var t = "";
        if (null == d.CookieManager.ReadInternal(c)) {
            for (var e = 0; e < stories.length; e++) t += stories[e].seen ? "1" : "0";
            d.CookieManager.WriteInternal(c, t, "1", "D")
        } else
            for (t = d.CookieManager.ReadInternal(c).split(""), e = 0; e < stories.length; e++) stories[e].seen = "0" != t[e]
    }(),
    function() {
        var t = document.createElement("style");
        t.id = "vl-story-styles";
        var e = "#vl-story-container{white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch}#vl-story-container>*{-webkit-tap-highlight-color:transparent;font-family:montserratlight,Arial,Heltevica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vl-story-banner>video{position:absolute;top:50%;transform:translateY(-55%)}#vl-story-navbar::-webkit-scrollbar{display:none}#vl-story-navbar{height:90px;border-bottom:#eee 1px solid;padding:5px;line-height:normal}#vl-story-mini-wrapper{width:" + (75 * stories.length + 5) + "px;margin:0 auto}.vl-story-mini{position:relative;display:inline-block;width:75px;margin:auto;text-align:center;z-index:0}.vl-story-mini-outer{background-color:#fff;border:3px solid #fff;border-radius:50%;margin:3px;width:54px;height:54px;display:inline-block;box-sizing:border-box}.vl-story-mini-outer.seen{position:relative;border:1px solid #bbb}.vl-story-mini:before{z-index:-1;border-radius:50%;background-image:linear-gradient(to bottom,#ad3881,#f1704d);content:'';width:60px;position:absolute;height:60px}.vl-story-mini.seen:before{background-image:unset;border:1px solid #ddd;box-sizing:border-box}.vl-story-mini-outer.seen>.vl-story-mini-inner{margin:3px}.vl-story-mini-inner{background-color:#fff;border:1px solid #ddd;border-radius:50%;width:50px;height:50px;box-sizing:border-box;margin:-1px;background-size:cover;background-position:center}.vl-story-mini-title{font-size:12px;text-align:center}.vl-banners{display:none}.vl-story-display{top:0;left:0;position:fixed;perspective:1000vw;transition:.35s transform ease-in-out}.vl-story-display-bg.active .vl-story-display{top:0;left:0;position:fixed;perspective:1000vw;width:100%;height:100%}.vl-story-display-bg{z-index:100000;transition-property:transform,border-radius,height;transition-duration:.35s;transition-timing-function:cubic-bezier(1,.35,.35,1);border-radius:50%;transform:scale(0);overflow:hidden;background-color:#fff;top:0;left:0;position:fixed;width:100vw;height:100vw}.vl-story-display-bg.active{border-radius:0;transform:scale(1);height:100%}.vl-story-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d}.vl-story-item{position:absolute;width:100vw;height:100%;color:#fff;backface-visibility:hidden;-webkit-backface-visibility:hidden}.vl-story-item.prev{transform:rotateY(-90deg) translateZ(50vw)}.vl-story-item.current{transform:rotateY(0) translateZ(50vw)}.vl-story-item.next{transform:rotateY(90deg) translateZ(50vw)}.vl-story-banner{width:100vw;height:100%;display:inline-block;position:relative;background-position:center;background-repeat:no-repeat;background-size:100vw auto}.vl-progress-bar{position:absolute;top:10px;width:95%;height:2px;left:2.5%;border-radius:1px}.vl-progress-dark{width:100%;background-color:rgba(0,0,0,.3);height:3px;position:absolute;top:0;border-radius:1px}.vl-progress-light{background-color:#fff;height:3px;position:absolute;top:0;border-radius:1px}.vl-story-info{position:absolute;top:20px;left:2.5%;height:40px}.vl-story-icon{width:40px;height:40px;border-radius:50%;background-color:#fff;display:inline-block;background-size:cover;background-position:center}.vl-story-title{float:right;font-size:17px;line-height:40px;margin-left:5px;color:#fff;text-shadow:1.5px 1.25px #333}.vl-story-link{border:1px solid #fff;position:absolute;bottom:20px;width:280px;height:50px;left:calc(42% - 110px);font-size:16px;font-family:Arial;font-weight:700;text-align:center;text-decoration:none;border-radius:5px;line-height:50px;-webkit-animation-name:buttonAnimations;-webkit-animation-duration:4s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-name:buttonAnimations;animation-duration:.7s;animation-iteration-count:infinite;animation-direction:alternate}@-webkit-keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}@keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}.vl-story-close{text-align:right;line-height:50px;width:50px;height:50px;position:absolute;top:15px;right:2.5%;color:#fff;font-size:30px;text-shadow:1px 1.25px #333}@keyframes countdown{0%{width:0}100%{width:100%}}@media only screen and (max-width:414px){.vl-story-banner{background-size:90vw auto}}";
        t.innerHTML = e, document.head.appendChild(t)
    }();
    var y = document.createElement("div");
    y.id = "vl-story-container";
    var p = document.querySelector("body > div.js-main-wrapper > div.container > div.visible-xs");
    p.insertBefore(y, p.querySelector(".main-slider-wrapper.js-analytics-banner")),
        function() {
            var t = document.createElement("div");
            t.id = "vl-story-navbar";
            for (var e = "", o = 0; o < stories.length; o++) e += "<div class='vl-story-mini" + (stories[o].seen ? " seen" : "") + "' id='vl-story-mini-" + (o + 1) + "'><div class='vl-story-mini-outer'><div class='vl-story-mini-inner' style='background-image: url(" + stories[o].smallImg + ")'></div></div><div class='vl-story-mini-title'>" + stories[o].title + "</div></div>";
            t.innerHTML = "<div id='vl-story-mini-wrapper'>" + e + "</div>", y.appendChild(t)
        }(),
        function() {
            var t = document.createElement("div");
            t.className = "vl-banners";
            for (var e = "", o = 0; o < stories.length; o++) {
                var r = "<a href='" + stories[o].link + "' class='vl-story-link' style='background-color:" + (stories[o].buttonColor ? stories[o].buttonColor : "#fff") + "; color: " + (stories[o].buttonTextColor ? stories[o].buttonTextColor : "#000") + "'>" + stories[o].buttonText + "</a>";
                e += "<div class='vl-story-banner' id='vl-story-" + (o + 1) + "'style='background-color:" + stories[o].backgroundColor + ";background-image: url(" + stories[o].largeImg + ")'><div class='vl-progress-bar'><div class='vl-progress-dark'></div><div class='vl-progress-light'></div></div><div class='vl-story-info' ><div class='vl-story-icon' style='background-image: url(" + stories[o].smallImg + ")'></div><div class='vl-story-title'>" + stories[o].title + "</div></div>" + (stories[o].link && stories[o].buttonText ? r : "") + "<div class='vl-story-close'>&#10005;</div></div>"
            }
            t.innerHTML = e, y.appendChild(t);
            var i = document.createElement("div");
            i.className = "vl-story-display-bg", i.innerHTML = "<div class='vl-story-display'><div class='vl-story-cube' style='transform: rotateY(0);transition: transform 0s'><div class='vl-story-item prev'></div><div class='vl-story-item current'></div><div class='vl-story-item next'></div></div></div>", y.parentNode.insertBefore(i, y.nextSibling)
        }();
    var m = document.querySelector(".vl-banners"),
        u = document.querySelectorAll(".vl-story-banner"),
        b = document.querySelector(".vl-story-display"),
        g = document.querySelector(".vl-story-display-bg"),
        f = document.querySelector(".vl-story-cube"),
        h = document.querySelector(".vl-story-item.current"),
        x = document.querySelector(".vl-story-item.prev"),
        w = document.querySelector(".vl-story-item.next");
    b.style.transform = "scale(0.95)", h.addEventListener("touchstart", function(t) {
        "vl-story-close" !== t.target.className && (t.stopPropagation(), "touchstart" === t.type && (C = !0, k = t.touches[0].clientX, T = t.timeStamp, h.querySelector(".vl-progress-light").style.animationPlayState = "paused", L.pause()))
    }, {
        passive: !0
    }), h.addEventListener("touchmove", function(t) {
        t.stopPropagation(), C && (M = !0, "scale(0.93)" !== b.style.transform && (b.style.transform = "scale(0.93)"), q = t.touches[0].clientX, t.timeStamp, E = k - q, 0 === z && E < 0 || z === stories.length - 1 && E > 0 ? f.style.transform = "rotateY(0)" : Math.abs(E) <= v ? f.style.transform = "rotateY(" + -90 * E / v + "deg)" : (o(Math.sign(E) > 0 ? "next" : "prev"), C = !1))
    }, {
        passive: !0
    }), h.addEventListener("touchend", l, {
        passive: !0
    }), h.addEventListener("touchcancel", l, {
        passive: !0
    });
    var k, T, S, A, q, E, L, z = 0,
        C = !1,
        M = !1;
    r(z);
    for (var I = document.querySelectorAll(".vl-story-mini"), Y = 0; Y < I.length; Y++) I[Y].addEventListener("click", t);
    var O = document.querySelectorAll(".vl-story-close");
    for (Y = 0; Y < O.length; Y++) O[Y].addEventListener("click", e)
}
if (!document.querySelector("#vl-story-container")) {
    storyInit();
    var storyTitle = document.querySelectorAll(".vl-story-title");
    for (let t = 0; t < storyTitle.length; t++) "YE-İÇ" === storyTitle[t].innerText ? storyTitle[t].style.color = "#a1237d" : "CİGNA FİNANS" === storyTitle[t].innerText ? storyTitle[t].style.color = "#004b9f" : "YAŞA" === storyTitle[t].innerText ? storyTitle[t].style.color = "#44abe0" : "SEV" === storyTitle[t].innerText ? storyTitle[t].style.color = "#53af47" : "TEST" === storyTitle[t].innerText ? storyTitle[t].style.color = "#df5151" : "ASTROLOJİ" === storyTitle[t].innerText ? storyTitle[t].style.color = "#2a2f7a" : "HAREKET ET" === storyTitle[t].innerText && (storyTitle[t].style.color = "#e87d2a"), storyTitle[t].style.fontWeight = "600", storyTitle[t].style.textShadow = "none";
    var divToLink = document.createElement("div");
    divToLink.setAttribute("class", "vl-story-mini");
    var noStoryOuter = document.createElement("div");
    noStoryOuter.setAttribute("class", "vl-story-mini-outer");
    var noStoryTitle = document.createElement("div");
    noStoryTitle.setAttribute("class", "vl-story-mini-title"), noStoryTitle.innerText = "Ayın Yıldızları";
    var noStoryInner = document.createElement("div");
    noStoryInner.setAttribute("class", "vl-story-mini-inner"), noStoryInner.style.backgroundImage = "url(https://img.visilabs.net/banner/uploaded_images/79_726_20200331145523095.png)", noStoryOuter.append(noStoryInner), divToLink.append(noStoryOuter), divToLink.append(noStoryTitle), document.querySelector("#vl-story-mini-wrapper").insertBefore(divToLink, document.querySelector("#vl-story-mini-1"));
    var redirectToLink = document.querySelector(".vl-story-mini").addEventListener("click", function() {
        window.location.replace("https://www.englishhome.com/ayin-yildizlari/?OM.zn=acttype-4&OM.zpc=act-41&OM.story=Ayin-Yildizlari")
    });
} 
<%VLSendImpressionFunc%>;