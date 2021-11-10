
var checkScrollSpeed = (function (settings) {
    settings = settings || {};
    var lastPos, newPos, timer, delta,
        delay = settings.delay || 50;
    function clear() {
        lastPos = null;
        delta = 0;
    }
    clear();

    return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
            delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
    };
})();
var once=true;
var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        
            
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                console.log("down scrolling")
            } else {
                if (checkScrollSpeed() <= -80) {
                    if(once){
                        once=false;
                        if (!document.querySelector("#VisiNotifSection")) {
                            showLightBoxDesktop("400px", "300px");
                            for (var e = wrapper.querySelectorAll(".vl-price"), i = wrapper.querySelectorAll(".vl-dprice"), t = wrapper.querySelectorAll(".vl-slider-item"), o = wrapper.querySelectorAll(".vl-discount-ratio"), s = (wrapper.querySelectorAll(".vl-product-img"), 0); s < e.length; s++)
                                if (i[s].innerText.includes(e[s].innerText)) e[s].innerHTML = "<br />", e[s].style.textDecoration = "none", i[s].style.color = "#000";
                                else {
                                    var n = parseFloat("100") * parseFloat(parseFloat(e[s].innerText) - parseFloat(i[s].innerText)) / parseFloat(e[s].innerText);
                                    o[s].innerText = "%" + n.toFixed(0) + " indirim |"
                                } for (s = 0; s < t.length; s++) i[s].innerText.indexOf(".") && (i[s].innerText = i[s].innerText.replace(".", ",")), e[s].innerText.indexOf(".") && (e[s].innerText = e[s].innerText.replace(".", ","));
                            document.querySelector("#vl-lastviews-alternatives > div.vl-slider > div > button.slick-next.slick-arrow").click(), document.querySelector("#vl-lastviews-alternatives > div.vl-slider > div > button.slick-next.slick-arrow").style.display = "none", document.querySelector("#vl-lastviews-alternatives > div.vl-slider > div > button.slick-prev.slick-arrow").style.display = "none", document.querySelector("#vl-lastviews-alternatives > .noface-section__heading").style = "width: 300px;font-size: 17px;text-align:center;", document.querySelector("#img_lightbox_close").style.width = "23px"
                        }
                    }
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        
    }, false);

