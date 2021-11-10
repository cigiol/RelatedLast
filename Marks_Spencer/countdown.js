var vlCountDown= {
    endDate: "Apr 02,2020 23:59:00", desktopCountDownTimerBgColor: "#fff", desktopCountDownTimerTextColor: "#000", desktopCampText: "Seçili Sezon Ürünlerinde %25 İndirimin Bitmesine Kalan Süre:", desktopTextColor: "#000", desktopBgColor: "#bdd755", mobileCountDownTimerColor: "#000", mobileCountDownTimerTextColor: "#000", mobileCampText: "Seçili Sezon Ürünlerinde %25 İndirimin Bitmesine Kalan Süre:", mobileTextColor: "#000", mobileBgColor: "#bdd755", mobileButtonText: "Alışverişe Başla", mobileButtonTextColor: "#000", mobileButtonBgColor: "#bdd755"
}

;
function vlCoutDownDesktop() {
    var e;
    function n(e, n) {
        var t=document.createElement("span");
        t.className="flip-clock__piece",
        t.innerHTML='<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b><span class="flip-clock__slot">'+e+"</span>",
        this.el=t;
        var o=t.querySelector(".card__top"),
        i=t.querySelector(".card__bottom"),
        a=t.querySelector(".card__back"),
        l=t.querySelector(".card__back .card__bottom");
        this.update=function(e) {
            (e=("0"+e).slice(-2))!==this.currentValue&&(this.currentValue>=0&&(a.setAttribute("data-value", this.currentValue), i.setAttribute("data-value", this.currentValue)), this.currentValue=e, o.innerText=this.currentValue, l.setAttribute("data-value", this.currentValue), this.el.classList.remove("flip"), this.el.offsetWidth, this.el.classList.add("flip"))
        }
        ,
        this.update(n)
    }
    function t(e) {
        var n=Date.parse(vlCountDown.endDate)-Date.parse(new Date);
        return {
            Total: n, Saat: Math.floor(n/36e5%24), Dakika: Math.floor(n/1e3/60%60), Saniye: Math.floor(n/1e3%60)
        }
    }
    function o() {
        var e=new Date;
        return {
            Total: e, Saat: e.getHours()%12, Dakika: e.getMinutes(), Saniye: e.getSeconds()
        }
    }
    function r() {
        i.style.display="none"
    }
    (e=document.createElement("style")).innerHTML="#vlCloseEl{position:absolute;right:0px;top:0px;cursor:pointer;}.flip-clock {text-align: center;padding: 5px;display:inline;}.flip-clock::before,.flip-clock::after {box-sizing: border-box;}.flip-clock__piece {display: inline-block;margin: 0 5px; transform:none;}.flip-clock__slot {font-size: 11px; color:#000}.card {display: block;position: relative;padding-bottom: 0.72em;font-size: 25px;line-height:1.48;}.card__top,.card__bottom,.card__back::before,.card__back::after {display: block;height: 0.72em;color: "+vlCountDown.desktopCountDownTimerTextColor+";background:"+vlCountDown.desktopCountDownTimerBgColor+";border-radius: 0.15em 0.15em 0 0;backface-visibility: hidden;transform-style: preserve-3d;width: 40px;transform: translateZ(0);}.card__bottom {color: "+vlCountDown.desktopCountDownTimerTextColor+";position: absolute;top: 50%;left: 0;border-top: solid 1px #09594e;background: "+vlCountDown.desktopCountDownTimerBgColor+";border-radius: 0 0 0.15em 0.15em;pointer-events: none;overflow: hidden;}.card__bottom::after {display: block;margin-top: -0.72em;}.card__back::before,.card__bottom::after {content: attr(data-value);}.card__back {position: absolute; top: 0;height: 100%;left: 0%;pointer-events: none;}.card__back::before {position: relative;z-index: -1;overflow: hidden;}.flip .card__back::before {animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);animation-fill-mode: both;transform-origin: center bottom;}.flip .card__back .card__bottom {transform-origin: center top;animation-fill-mode: both;animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1); transform:scaleX(1) !important;}@keyframes flipTop {0% {transform: rotateX(0deg);z-index: 2;}0%,99% {opacity: 0.99;}100% {transform: rotateX(-90deg);opacity: 0;}}@keyframes flipBottom {0%,50% {z-index: -1;transform: rotateX(90deg);opacity: 0;}51% {opacity: 0.99;}100% {opacity: 0.99;transform: rotateX(0deg);z-index: 5;}}",
    document.head.appendChild(e);
    var i=document.createElement("div");
    i.className="vlCountDownHead",
    i.style.height="60px",
    i.style.backgroundColor=vlCountDown.desktopBgColor,
    i.style.color=vlCountDown.desktopTextColor,
    i.style.width="100%",
    i.style.padding="5px",
    i.innerHTML="<span style='font-family: sans-serif; display: inline;float: left;width: 50%;margin: 0 0 0 0; padding-right:2%;text-align: right;font-size: 16px;font-weight: 600;'>"+vlCountDown.desktopCampText+" <span style='font-size:30px;'>&#128073;</span> </span>";
    var a=document.querySelector("body > div.js-main-wrapper");
    
    var closeButton=document.createElement("img");
    closeButton.setAttribute("id","vlCloseEl");
    closeButton.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/tJREFUeNqEVG1oW2UUfm9u7k1z89HU5TtiiW4Thpo4EzT+q7RiWf3XBn+0ds2fWJxzQ7aBFEbxAxWHq0OabhQrbcekUEqnFNaMgnUW29QfCitLi2hrVtKPZGvTmdwkPZ73zU0ZM9oDD/feN+c873NOzjkc+X9TIQSEWvkuIvLKs6Jx/3FehbAgDkqSdNBisVhVaPfQ0un073i+iLiL2EHAforMiGP19fUDQ0NDS6urq1lQbGtrqzA5ObkaCoW+FwShA/2eeEh9RTJXTU3NqcHBwSVKkM/n4Ub0Bly+chl6I71w/bvrcH/rPiOfnZ1Neb3eixhzRCnLv8yKdmZmZiZNA3r7euGo/wWwOKxgtpvhgM3M3p99/jno/qCbXba5uVkMBAJ9GHtIEbRnWp7nm8fHx+9SsrffPQFE4EBj0ILFaQXb4/YSXHbQmfSAofDasUbY3t6G5eXlHAo5hxyPPUz4VHNz8ygl+6LnIi0ytLwRhA8//gi0Rgn0NQaoNptApeHheKgDznefB8ITaA+1s/R7enp+xZiXyippUV+fmppKYgpgddqYgktfXYLyBRyqpZcE8ZJisQjzv8yDwWQElaiCWz/dgnQqnTcajSfRR6KEOrvdfpbW5Nq311igRhJBZ5Bg+OowI/30s0+gJdgChXwBYvMxcLocIIhq5vvOyRPMp66u7gptNapOcDqdNrVaTeJ37rD8eY4nclYmoY4Okstmydkz5wjGkB+npwkSk7W1NSJJWpKXCyQeX2QxtbW1tG+raM6cmrKhoYJSRXfxFl4guZxMotGbpQngOHJ74TZJJteIKIgEdkuueVkuieD5Ehc9S6VSaXrodLlKXpjMg+zfJNgSJF8PDJDpH6ZJIvEXCYffQsUyOX361N58WC1W9kwmk/fwkaPvIlrr4tJSJh6PQ5WoARWngjfb2tgfMDc3B+YDZjzjYHi4VNO+SB9oq7SshpFIBGRZ3nU4HO/jt748z96urq4Z6ny8vZ05Xvj8Ap0GsNtswBEOBLUAGlGEkZERiEajoNFo4OlDhyGTycDY2NifGNNAMy/3oQkXwHsrKyu59fV18Ho8jNRUXQ1qFQ86VCMhRCTVSzoQeDUY9Aa4icS0OzweDx1Bx6NzfBj/+m9QPiQSCXi1oQGUTYIKCagIt/f9pNsNExMTLP1wODyJZ/5K8ywijjY2Nl7d2NgoUOfR0VFoa22FlwMB8Pt80NTUxEqBW4fVt7Ozk5K9Um7oSqah28Ptdnf39/cv7OzsFOERKxQKtGZ/+Hy+LxVl0n4LllcG/QgO/Yt+v/8Z2rTYZxyWIh2LxRZwIfyMv/+GWFc2+L4bu0ysVVpBq5zRPssgHtA5qBT0jwADAKOeG2u13ga9AAAAAElFTkSuQmCC";
    i.append(closeButton);
    var linkButton=document.createElement("button");
    linkButton.setAttribute("id","vlRedirect");
    linkButton.innerText="Alışverişe Başla";
    linkButton.style.position="absolute";
    linkButton.style.right="9%";
    linkButton.style.fontFamily="sans-serif";
    linkButton.style.fontSize="20px";
    linkButton.style.lineHeight="47px";
    linkButton.style.backgroundColor="#fff";
    linkButton.style.width="18%";
    linkButton.style.borderRadius="3px";
    i.append(linkButton);

    a.insertBefore(i, a.firstChild);
    var l=new function(e, i) {
        e=!!e&&new Date(Date.parse(e)),
        i=i||function() {}
        ;
        var a=e?t: o;
        this.el=document.createElement("div"),
        this.el.className="flip-clock";
        var l,
        r,
        d= {}
        ,
        s=a(e);
        for(l in s)"Total"!==l&&(d[l]=new n(l, s[l]), this.el.appendChild(d[l].el));
        var c=0;
        setTimeout(function n() {
            if(r=requestAnimationFrame(n), !(c++%10)) {
                var t=a(e);
                if(t.Total<0) {
                    for(l in cancelAnimationFrame(r), d)d[l].update(0);
                    i()
                }
                else for(l in d)d[l].update(t[l])
            }
        }
        , 1e3)
    }
    (new Date(Date.parse(new Date)+10368e5), function() {
        alert("countdown complete")
    }
    );
    i.appendChild(l.el);
    document.getElementById("vlCloseEl").addEventListener("click", r);
    document.getElementById("vlRedirect").addEventListener("click",function(){
        window.location.replace("https://www.marksandspencer.com.tr/flash-sale-kampanyasi/");
    });
}

function vlCountDownMobile() {
    var e,
    n,
    t,
    o,
    i,
    a,
    l;
    function r() {
        n.style.display="none",
        e.style.display="none",
        document.removeEventListener("mouseout", vlCoutDownDesktop)
    }
    (a=document.createElement("style")).innerHTML="\n                #vlBgEl {position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.5; z-index: 10001}\n                    #vlpopUpEl{\n                        display: block;\n                        position: fixed;\n                        width: 75%;\n                        left: 50%;\n                        bottom: 5%;\n                        transform: translateX(-50%) translateY(-5%);\n                        z-index: 10002;\n                    }\n                    #vlCloseEl{\n                        position: absolute;\n                        top: -4%;\n                        right: -2%;\n                        cursor: pointer;\n                        opacity: 1;\n                        width: 8% !important;\n                    }\n                    #vlContent{\n                        height: 100%;\n                        width: 100%;\n                        background-color: white;\n                        border-radius: 5px;\n                    }\n                    #vlContentHeader{\n                        background-color: "+vlCountDown.mobileBgColor+";\n                        color: "+vlCountDown.mobileTextColor+";\n                        font-size: 15px;\n                        display: block;\n                        text-align: center;\n                        padding: 10px 20px 0;\n                        font-weight: 600;\n                        border-radius: 5px 5px 0 0;\n                    }\n                    #vlContentBodyCountDown{\n                        display: block;\n                        text-align: center;\n                        font-size: 30px;\n                        font-weight: 600;\n                        color: "+vlCountDown.mobileCountDownTimerColor+";\n                        height: 110px;\n                    }\n                    #vlContentBtn{\n                        display: block;\n                        text-align: center;\n                        color: "+vlCountDown.mobileButtonTextColor+";\n                        background-color: "+vlCountDown.mobileButtonBgColor+";\n                        padding: 12px;\n                        font-size: 15px;\n                        cursor: pointer;\n                        border-radius: 0 0 5px 5px;\n                        font-weight: 600;\n                        bottom: 0;\n                        position: absolute;\n                        width: 100%;\n                    }\n                   #vl-counter {\n                       text-align: center;\n                       margin: 9% auto;\n                    }\n                    .vl-counter-header{\n                        text-align: center;\n                        font-family: medium, sans-serif;\n                        margin: 0 0 5% 0;\n                        font-weight: 400;\n                        display: block;\n                        color: #0f2539;\n                        font-size: 15pt;\n                    }\n                    .vl-digits {\n                        display: inline-block;\n                        padding: 5px;\n                        padding-bottom: 0;\n                        font-size: 30px;\n                        text-align: center;\n                    }\n                    .vl-ayrac {\n                        font-size: 24px;\n                        font-weight: 600; \n                        font-family: medium, sans-serif; \n                        text-align: center;\n                    }\n                    .vlTimePart{\n                        display:inline;\n                        float:left;\n                    }\n                    .vlTimeName{\n                        color:"+vlCountDown.mobileCountDownTimerTextColor+";\n                        width: 45px; \n                        font-size:11px;\n                    }\n                    .vlTextPart{\n                        display: block;\n                        font-size: 15px; \n                        font-weight: 600;\n                        padding:5px;\n                    }\n                    .vlText{\n                        color:#fff;\n                    }\n                ",
    document.head.appendChild(a),
    i=document.querySelector("body"),
    (e=document.createElement("div")).id="vlBgEl",
    i.appendChild(e),
    (n=document.createElement("div")).id="vlpopUpEl",
    i.appendChild(n),
    (t=document.createElement("img")).id="vlCloseEl",
    t.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/tJREFUeNqEVG1oW2UUfm9u7k1z89HU5TtiiW4Thpo4EzT+q7RiWf3XBn+0ds2fWJxzQ7aBFEbxAxWHq0OabhQrbcekUEqnFNaMgnUW29QfCitLi2hrVtKPZGvTmdwkPZ73zU0ZM9oDD/feN+c873NOzjkc+X9TIQSEWvkuIvLKs6Jx/3FehbAgDkqSdNBisVhVaPfQ0un073i+iLiL2EHAforMiGP19fUDQ0NDS6urq1lQbGtrqzA5ObkaCoW+FwShA/2eeEh9RTJXTU3NqcHBwSVKkM/n4Ub0Bly+chl6I71w/bvrcH/rPiOfnZ1Neb3eixhzRCnLv8yKdmZmZiZNA3r7euGo/wWwOKxgtpvhgM3M3p99/jno/qCbXba5uVkMBAJ9GHtIEbRnWp7nm8fHx+9SsrffPQFE4EBj0ILFaQXb4/YSXHbQmfSAofDasUbY3t6G5eXlHAo5hxyPPUz4VHNz8ygl+6LnIi0ytLwRhA8//gi0Rgn0NQaoNptApeHheKgDznefB8ITaA+1s/R7enp+xZiXyippUV+fmppKYgpgddqYgktfXYLyBRyqpZcE8ZJisQjzv8yDwWQElaiCWz/dgnQqnTcajSfRR6KEOrvdfpbW5Nq311igRhJBZ5Bg+OowI/30s0+gJdgChXwBYvMxcLocIIhq5vvOyRPMp66u7gptNapOcDqdNrVaTeJ37rD8eY4nclYmoY4Okstmydkz5wjGkB+npwkSk7W1NSJJWpKXCyQeX2QxtbW1tG+raM6cmrKhoYJSRXfxFl4guZxMotGbpQngOHJ74TZJJteIKIgEdkuueVkuieD5Ehc9S6VSaXrodLlKXpjMg+zfJNgSJF8PDJDpH6ZJIvEXCYffQsUyOX361N58WC1W9kwmk/fwkaPvIlrr4tJSJh6PQ5WoARWngjfb2tgfMDc3B+YDZjzjYHi4VNO+SB9oq7SshpFIBGRZ3nU4HO/jt748z96urq4Z6ny8vZ05Xvj8Ap0GsNtswBEOBLUAGlGEkZERiEajoNFo4OlDhyGTycDY2NifGNNAMy/3oQkXwHsrKyu59fV18Ho8jNRUXQ1qFQ86VCMhRCTVSzoQeDUY9Aa4icS0OzweDx1Bx6NzfBj/+m9QPiQSCXi1oQGUTYIKCagIt/f9pNsNExMTLP1wODyJZ/5K8ywijjY2Nl7d2NgoUOfR0VFoa22FlwMB8Pt80NTUxEqBW4fVt7Ozk5K9Um7oSqah28Ptdnf39/cv7OzsFOERKxQKtGZ/+Hy+LxVl0n4LllcG/QgO/Yt+v/8Z2rTYZxyWIh2LxRZwIfyMv/+GWFc2+L4bu0ysVVpBq5zRPssgHtA5qBT0jwADAKOeG2u13ga9AAAAAElFTkSuQmCC"),
    n.appendChild(t),
    (o=document.createElement("div")).id="vlContent",
    o.innerHTML="\n                <div id='vlContentHeader'>"+vlCountDown.mobileCampText+' <span>&#128071;</span></div>\n                    <div id=\'vlContentBody\'>\n                        <div id=\'vlContentBodyCountDown\'>\n                            <div style="text-align:center; display:inline-block;">\n                            <div class="vlTimePart">\n                                <span id="vl-hours" class="vl-digits"></span>\n                                <p class="vlTimeName">Saat</p>\n                            </div>\n                        <div class="vlTimePart"><span class="vl-ayrac"> : </span></div>\n                        <div class="vlTimePart"><span id="vl-minutes" class="vl-digits"></span><p class="vlTimeName">Dakika</p></div>\n                        <div class="vlTimePart"><span class="vl-ayrac"> : </span></div>\n                        <div class="vlTimePart"><span id="vl-seconds" class="vl-digits"></span><p class="vlTimeName">Saniye</p></div></div>\n                        </div>\n                    <div id=\'vlContentBtn\'>'+vlCountDown.mobileButtonText+"</div>\n                </div>",
    n.appendChild(o),
    l=new Date(vlCountDown.endDate).getTime(),
    function e() {
        var n=(new Date).getTime(),
        t=l-n,
        o=Math.floor(t%864e5/36e5),
        i=Math.floor(t%36e5/6e4),
        a=Math.floor(t%6e4/1e3);
        document.getElementById("vl-hours").innerHTML=o.toLocaleString(void 0, {
            minimumIntegerDigits: 2
        }
        ),
        document.getElementById("vl-minutes").innerHTML=i.toLocaleString(void 0, {
            minimumIntegerDigits: 2
        }
        ),
        document.getElementById("vl-seconds").innerHTML=a.toLocaleString(void 0, {
            minimumIntegerDigits: 2
        }
        ),
        t<0&&(clearInterval(x), document.getElementById("vl-counter").innerHTML="EXPIRED"),
        setTimeout(e, 1e3)
    }
    (),
    "block"==n.style.display&&(e.style.display="inline-block"),
    document.getElementById("vlCloseEl").addEventListener("click", r),
    document.getElementById("vlBgEl").addEventListener("click", r),
    document.getElementById("vlContentBtn").addEventListener("click", function(){
        window.location.replace("https://www.marksandspencer.com.tr/flash-sale-kampanyasi/");
    });

}

var mobileOnlyMainPage=decodeURIComponent(VisiParameters["OM.uri"]);
window.innerWidth<768?"/"===mobileOnlyMainPage&&(document.querySelector("#vlpopUpEl")||vlCountDownMobile()):document.querySelector(".vlCountDownHead")||vlCoutDownDesktop();