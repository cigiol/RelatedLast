if (document.cookie.indexOf("vl-started") == -1){ 
    try {
        var path = "https://img.euromsg.net/", giftImages = {
            box1: path + "431EAFFDF0CB46D895401345C372F2E6/images/agac.png",
            box2: path + "431EAFFDF0CB46D895401345C372F2E6/images/corap.png",
            box3: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box4: path + "431EAFFDF0CB46D895401345C372F2E6/images/sapka.png",
            box5: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box6: path + "431EAFFDF0CB46D895401345C372F2E6/images/top.png",
            box7: path + "431EAFFDF0CB46D895401345C372F2E6/images/yildiz.png",
            box8: path + "431EAFFDF0CB46D895401345C372F2E6/images/%C3%A7an.png",
            box9: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box10: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box11: path + "431EAFFDF0CB46D895401345C372F2E6/images/agac.png",
            box12: path + "431EAFFDF0CB46D895401345C372F2E6/images/corap.png",
            box13: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box14: path + "431EAFFDF0CB46D895401345C372F2E6/images/sapka.png",
            box15: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box16: path + "431EAFFDF0CB46D895401345C372F2E6/images/top.png",
            box17: path + "431EAFFDF0CB46D895401345C372F2E6/images/yildiz.png",
            box18: path + "431EAFFDF0CB46D895401345C372F2E6/images/%C3%A7an.png",
            box19: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box20: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box21: path + "431EAFFDF0CB46D895401345C372F2E6/images/agac.png",
            box22: path + "431EAFFDF0CB46D895401345C372F2E6/images/corap.png",
            box23: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box24: path + "431EAFFDF0CB46D895401345C372F2E6/images/sapka.png",
            box25: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box26: path + "431EAFFDF0CB46D895401345C372F2E6/images/top.png",
            box27: path + "431EAFFDF0CB46D895401345C372F2E6/images/yildiz.png",
            box28: path + "431EAFFDF0CB46D895401345C372F2E6/images/%C3%A7an.png",
            box29: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box30: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box31: path + "431EAFFDF0CB46D895401345C372F2E6/images/agac.png",
            box32: path + "431EAFFDF0CB46D895401345C372F2E6/images/corap.png",
            box33: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png",
            box34: path + "431EAFFDF0CB46D895401345C372F2E6/images/sapka.png",
            box35: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box36: path + "431EAFFDF0CB46D895401345C372F2E6/images/top.png",
            box37: path + "431EAFFDF0CB46D895401345C372F2E6/images/yildiz.png",
            box38: path + "431EAFFDF0CB46D895401345C372F2E6/images/%C3%A7an.png",
            box39: path + "431EAFFDF0CB46D895401345C372F2E6/images/sekerkamisi.png",
            box40: path + "431EAFFDF0CB46D895401345C372F2E6/images/hediyekutusu.png"
        }, 
        boxTransition = 30,
        boxBottom = 50,
        boxInterval = 200,
        vlBasketImage = "https://img.euromsg.net/431EAFFDF0CB46D895401345C372F2E6/images/sepet.png",
        bgImage = path + "MobilSenaryolari/ekranlar/1-min.png",
        bgImageS2 = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155627742.png", 
        bgImages3 = path + "MobilSenaryolari/AnaBackroundlar/3-min.png", 
        heart = path + "MobilSenaryolari/AnaBackroundlar/kalp-min.png", 
        dashboardImg = "https://img.euromsg.net/431EAFFDF0CB46D895401345C372F2E6/images/dashboard-min.png", 
        thanksPageImg = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155659085.png", 
        loggedInStartPageImg = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155552859.png",
        couponCodeImg = path + "MobilSenaryolari/materials/discountCode-min.png", 
        DvlBasketImage = path + "DesktopSenaryolari/bag-min.png",
        DbgImage = path + "DesktopSenaryolari/1-min.png", 
        DbgImageS2 = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155610921.png",
        DbgImages3 = path + "DesktopSenaryolari/3-min.png", 
        Dheart = path + "DesktopSenaryolari/kalp-min.png",
        DdashboardImg = "https://img.euromsg.net/431EAFFDF0CB46D895401345C372F2E6/images/dashboard-min_desktop.png", 
        DthanksPageImg = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155642283.png",
        DloggedInStartPageImg = "https://img.visilabs.net/banner/uploaded_images/287_1273_20201230155537948.png",
        DcouponCodeImg = path + "DesktopSenaryolari/discountCode-min.png",
        color = "#ec008c", 
        textColor = "#ffffff", 
        startText = "Are you ready to collect your Black Friday discounts?",
        formText = "Please enter e-mail address to start the game.", 
        promText = "Bana özel indirim ve ayrıcalıklardan e-posta ile haberdar olmak istiyorum.",
        countDown = "15", 
        copyCouponCodeTextP1 = "Your Coupon Code is", 
        copyCouponCodeTextP2 = "Click to copy and paste this code at the check-out page.",
        copiedText = "Your coupon code has been copied : ", 
        placeHolderText = "E-mailini Gir",
        formSubmitButtonText = "İLERLE", 
        tryAgainButtonText = "Try Again", 
        noItemText = "You did not win promotions. Please try again.",
        indirimsizText = "0", 
        indirimtext = "Discount Code", 
        isMobile = !1, 
        isRun = !1,
        barStatu = !1, 
        isSpeedUp = !1, 
        GLOBAL_EMAIL = "",
        USER_EMAIL_ADRESS = "",
        PROMO_CODE = "<%PromotionCode%>",
        countDownTmpInterval = null,
        KuponKodu = {
            1: "BGJ7S1",
            2: "BDGJ72",
            3: "BAGJ73",
            4: "BGJ7V4",
            5: "BGJ7S5",
            6: "BGJ76Q",
            7: "BGJ77F",
            8: "BGJ78F",
            9: "BGJ79Q",
            10: "BG1J0D",
            11: "N72X1P",
            12: "N72X2H",
            13: "N72X3J",
            14: "N72X4K",
            15: "N72X5Y",
            16: "N72X6E",
            17: "N72X7FD",
            18: "N72DX8",
            19: "N72GX9",
            20: "BJWMD0",
            21: "BJSWM1",
            22: "BJWM2D",
            23: "BJWEM3",
            24: "BJWM4J",
            25: "BJWWM5",
            26: "BJWM6F",
            27: "BJWM7Q",
            28: "BJDWM8",
            29: "BJWQM9",
            30: "BCWM0G",
            31: "BCWM1K",
            32: "BCWM2W",
            33: "BCWM3L",
            34: "BCWM4Q",
            35: "BCWM5C",
            36: "BCWM6S",
            37: "BCWOM7",
            38: "BCWM8M",
            39: "BCWM8P",
            40: "BCWKN0"
        }, BoxTimeOuts = {
            box1: "250",
            box2: "750",
            box3: "1250",
            box4: "1750",
            box5: "2250",
            box6: "2750",
            box7: "3250",
            box8: "3750",
            box9: "4250",
            box10: "4750",
            box11: "5250",
            box12: "5750",
            box13: "6250",
            box14: "6750",
            box15: "7250",
            box16: "7750",
            box17: "8250",
            box18: "8500",
            box19: "8700",
            box20: "8900",
            box21: "9100",
            box22: "9300",
            box23: "9500",
            box24: "9600",
            box25: "9700",
            box26: "9800",
            box27: "9900",
            box28: "10000",
            box29: "10100",
            box30: "10200",
            box31: "10300",
            box32: "10400",
            box33: "10500",
            box34: "10600",
            box35: "10700",
            box36: "10800",
            box37: "10900",
            box38: "11000",
            box39: "11100",
            box40: "11200"
        };
        var puan = 0, dashboardStatus = !1, intersectionPoint = 20;
        function vlPuanCreator() {
            var a = document.createElement("div");
            a.id = "vlDashboard", a.style.padding = "15px 30px", a.style.position = "fixed",
            a.style.color = "white", a.style.textAlign = "center", a.style.backgroundImage = "url('" + (isMobile ? dashboardImg : DdashboardImg) + "')",
            a.style.borderRadius = "8px", a.style.width = "113px", a.style.height = "200px",
            a.style.margin = "5px", a.style.right = "0", a.style.backgroundSize = "contain",
            a.style.right = "0", a.style.right = "0", a.style.fontSize = "24px", a.style.transition = "1s all";
            var b = document.createElement("div");
            b.innerHTML = countDown, b.id = "vlGameDashboardCountDown", b.style.fontWeight = "bold",
            b.style.marginBottom = "30px", b.style.transition = "1s all", b.style.position = "absolute",
            b.style.left = "50%", b.style.bottom = "34%", b.style.transform = "translate(-50%, -50%)",
            a.appendChild(b);
            var c = document.createElement("DIV");
            c.id = "vlPercentText", c.innerHTML += indirimsizText, c.style.transition = "1s all",
            c.style.position = "absolute", c.style.left = "50%", c.style.bottom = "4%", c.style.transform = "translate(-50%, -50%)",
            a.appendChild(c);
            var d = document.createElement("div");
            d.style.width = "100px", d.style.height = "100px", d.style.position = "absolute",
            d.style.right = "10px", d.style.top = "10px", d.style.background = "green", d.innerHTML = "123456",
            document.querySelector("#hediyeyagmuru").appendChild(a), startCountDown();
        }
        function startCountDown() {
            var a;
            document.querySelector("#vlGameDashboardCountDown") && (a = document.querySelector("#vlGameDashboardCountDown").innerText,
            countDownTmpInterval = setInterval(function() {
                0 < --a ? document.querySelector("#vlGameDashboardCountDown").innerText = a : clearInterval(countDownTmpInterval);
            }, 1e3));
        }
        function fadeIn(a) {
            a.style.opacity = 0;
            var b = +new Date(), c = function() {
                a.style.opacity = +a.style.opacity + (new Date() - b) / 400, b = +new Date(), +a.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(c) || setTimeout(c, 16));
            };
            c();
        }
        function setCookie(a, b, c) {
            var d = new Date();
            d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3), new Date().setTime(d.getTime() + 864e5);
            var e = "expires=" + d.toGMTString();
            document.cookie = a + "=" + b + "/" + d + ";" + e + ";path=/";
        }
        function triggerVlNotificationBox() {
            var a = new Visilabs();
            a.AddParameter("OM.LoginUser", "kulak");
        }
        function vlGameFinish() {
            createThanksPage(), clearInterval(countDownTmpInterval), setCookie("vlGiftRainGameCouponCode", PROMO_CODE, 1),
            setCookie("vlGiftRainGameDiscounRate", puan, 1), vlSendDiscountRateEvent(puan);
            var a = document.querySelector("#vlGameBar"), b = parseFloat(a.style.left);
            document.querySelector("#vlGameCarStyle") && (console.log("remove car style"), document.querySelector("#vlGameCarStyle").remove());
            var c = document.createElement("style");
            c.id = "vlGameCarStyle", c.innerHTML += "@keyframes carScene {0%   {left: " + b + "px;}50%   {left: " + (b + 100) + "px;}100% {left: -500px;}}",
            document.head.appendChild(c), console.log("append car style"), a.style.transition = "1s all",
            a.style.animation = "carScene 5s", setTimeout(function() {
                a.style.transform = "rotate(11deg)";
            }, 2500), setTimeout(function() {
                document.querySelector("#vlCloseBtn").click(), triggerVlNotificationBox();
            }, 3500), console.log("start car animate"), setTimeout(function() {
                console.log("car display none"), a.style.display = "none";
            }, 4500);
            var d = document.createElement("input");
            d.id = "vlCopyCouponCode", d.value = PROMO_CODE, d.disabled, d.style.position = "fixed",
            d.style.top = "-2500px", d.style.left = "-99999999px", document.querySelector("body").appendChild(d);
        }
        function svgCreator(a, b) {
            var c = document.createElement("Div");
            return c.id = a, c.style.width = "100px", c.style.height = "100px", c.style.left = Math.floor(Math.random() * (window.innerWidth - 100) + 1) + "px",
            c.style.bottom = window.innerHeight + 150 + "px", c.style.margin = "10px", c.style.position = "fixed",
            c.style.zIndex = "99", c.style.transition = "all ." + boxTransition + "s cubic-bezier(1, 0.99, 0, -0.02) 0s",
            c.style.display = "inline-block", c.style.transform = "rotate(0deg)", c.innerHTML = b,
            c;
        }
        function DivCreator(a, b) {
            var c = document.createElement("Div");
            c.id = a, c.style.width = isMobile ? "75px" : "100px", c.style.height = isMobile ? "75px" : "100px",
            c.style.left = Math.floor(Math.random() * (window.innerWidth - 100) + 1) + "px",
            c.style.bottom = window.innerHeight + 150 + "px", c.style.margin = "10px", c.style.position = "fixed",
            c.style.zIndex = "99", c.style.transition = "all ." + boxTransition + "s cubic-bezier(1, 0.99, 0, -0.02) 0s",
            c.style.display = "inline-block", c.style.transform = "rotate(0deg)";
            var d = document.createElement("IMG");
            return d.setAttribute("src", b), d.style.width = isMobile ? "75px" : "100px", d.style.height = isMobile ? "75px" : "100px",
            c.appendChild(d), c;
        }
        function vlCreateBar() {
            var a = document.createElement("DIV");
            barStatu = !0, isRun = !0, a.id = "vlGameBar", a.style.width = isMobile ? "100px" : "150px", a.style.height = isMobile ? "100px" : "150px",
            a.style.position = "fixed", a.style.bottom = isMobile ? "-22px":"-34px", a.style.left = "50%", a.style.zIndex = "9999",
            a.style.backgroundRepeat = "no-repeat", a.style.backgroundSize = "contain", a.style.backgroundImage = "url('" + vlBasketImage + "')",
            document.querySelector("#vlGameCarStyleStart") && document.querySelector("#vlGameCarStyleStart").remove();
            var b = document.createElement("style");
            b.id = "vlGameCarStyleStart", b.innerHTML += "@keyframes carStartScene {0%   {left: 150%;transform:rotate(50deg)}50%  {left: 40%;transform:rotate(-5deg) }100% {left: 50%;transform:rotate(0deg) }}",
            document.head.appendChild(b), a.style.transition = "1s all", a.style.animation = "carStartScene 2s",
            setTimeout(function() {
                a.style.transition = "0s all", a.style.animation = "none";
            }, 2e3), isMobile ? (window.addEventListener("touchstart", function() {
                isRun ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
            }), a.addEventListener("touchstart", function(b) {
                a.style.left = b.touches[0].clientX - parseFloat(a.style.width) / 2 + "px";
            }), window.addEventListener("touchmove", function(b) {
                1 == isRun && (a.style.left = b.touches[0].clientX - parseFloat(a.style.width) / 2 + "px");
            }), window.addEventListener("touchend", function() {})) : (a.addEventListener("mousedown", function(b) {
                1 == barStatu && (a.style.left = b.clientX - parseFloat(a.style.width) / 2 + "px");
            }), window.addEventListener("mousemove", function(b) {
                1 == barStatu && (a.style.left = b.clientX - parseFloat(a.style.width) / 2 + "px");
            }), window.addEventListener("mouseup", function(a) {})), document.querySelector("#hediyeyagmuru").appendChild(a);
        }
        function vlRequests() {
            try {
                var a = new Visilabs();
                a.AddParameter("OM.gameEmailOk", "true"), a.Collect();
            } catch (a) {
                console.warn("Visilabs not load");
            }
        }
        function vlSendDiscountRateEvent(a) {
            try {
                var b = new Visilabs();
                b.AddParameter("OM.gameDiscountRate", a), b.Collect();
            } catch (a) {
                console.warn("Visilabs not load");
            }
        }
        function vlStartGameEvent() {
            try {
                var a = new Visilabs();
                a.AddParameter("OM.gameStart", "true"), a.Collect();
            } catch (a) {
                console.warn("Visilabs not load");
            }
        }
        function vlCopyCodeEvent() {
            try {
                var a = new Visilabs();
                a.AddParameter("OM.gameCopyCode", "true"), a.Collect();
            } catch (a) {
                console.warn("Visilabs not load");
            }
        }
        function vlSendLoginUserRequest() {
            try {
                var a = new Visilabs();
                a.AddParameter("OM.LoginUser", "subs")
            } catch (a) {}
        }
        function createMailSubForm() {
            var a = document.createElement("DIV");
            a.id = "vlmailform", a.style.width = "100%", a.style.height = "100%", a.style.backgroundImage = "url('" + (isMobile ? bgImage : DbgImage) + "')",
            a.style.backgroundRepeat = isMobile ? "no-repeat" : "round", a.style.backgroundSize = "cover",
            a.style.backgroundPosition = isMobile ? "center" : "unset", a.style.padding = "20px 35px",
            a.style.position = "fixed", a.style.transition = "all 1s", a.style.position = "fixed",
            a.style.top = "0", a.style.left = "0", a.style.zIndex = "2147483647", a.style.transform = " translate3d(0,0,4px)";
            var b = document.createElement("INPUT");
            b.setAttribute("type", "text"), b.setAttribute("placeholder", placeHolderText),
            b.id = "vl-emailInput", b.style.backgroundColor = "white", b.style.width = isMobile ? "80%" : "70%",
            b.style.padding = "9px", b.style.border = "1px solid rgb(238, 105, 209)", b.style.maxWidth = "-webkit-fill-available",
            b.style.fontSize = "19px", b.style.fontWeight = "bold", b.style.position = "absolute",
            b.style.transform = "translate(-50%, -50%)", b.style.top = isMobile ? "63%" : "75%",
            b.style.left = "50%", b.style.color = color, b.style.marginBottom = "12px", a.appendChild(b);
            var c = document.createElement("DIV");
            c.style.color = "black", c.style.fontSize = "13px", c.style.position = "absolute",
            c.style.top = isMobile ? "71%" : "81%", c.style.left = "50%", c.style.width = isMobile ? "80%" : "70%",
            c.style.transform = "translate(-50%, -50%)", c.innerHTML = "<input style='width:20px;height:20px;display:block;margin-right:7px;float:left' id='vlPromCheck' type='checkbox'><div style='" + (isMobile ? "padding: 0px;" : "padding: 14px;") + "'>" + promText + "</div>",
            a.appendChild(c);
            var d = document.createElement("DIV");
            d.style.color = "black", d.style.fontSize = "13px", d.style.position = "absolute",
            d.style.top = isMobile ? "78%" : "85%", d.style.left = "50%", d.style.width = isMobile ? "80%" : "70%",
            d.style.transform = "translate(-50%, -50%)", d.innerHTML = "<input style='width:20px;height:20px;display:block;margin-right:7px;float:left' id='vlRulesCheck' type='checkbox'><div style='" + (isMobile ? "padding: 0px;" : "padding: 14px;") + "'><a href='https://www.nyxcosmetics.com.tr/s/kullanim-kosullari' style='text-decoration: underline;color: black;'>Kullanıcı Sözleşmesi</a> okudum ve onaylıyorum.</div>",
            a.appendChild(d);
            var e = document.createElement("DIV");
            e.style.color = "black", e.style.fontSize = "13px", e.style.position = "absolute",
            e.style.top = isMobile ? "85%" : "89%", e.style.left = "50%", e.style.width = isMobile ? "80%" : "70%",
            e.style.transform = "translate(-50%, -50%)", e.innerHTML = "<input style='width:20px;height:20px;display:block;margin-right:7px;float:left' id='vlCheckBox' type='checkbox'><div style='" + (isMobile ? "padding: 2px;" : "padding: 14px;") + "'><a href='http://www.loreal.com.tr/sites/default/files/docs/v.3_aydinlatma_metni_privacy_policy-b2c_tr_20.09.2019.pdf' style='text-decoration: underline;color: black;'>Kişisel Verilerin Korunmasına Yönelik Aydınlatma Metnini</a> okudum ve onaylıyorum.</div>",
            a.appendChild(e);
            var f = document.createElement("BUTTON");
            f.id = "vlCloseBtnMailForm", f.innerHTML = "&#10006;", f.style.position = "absolute",
            f.style.right = "0px", f.style.top = "0px", f.style.border = "0", f.style.color = "#000",
            f.style.padding = "5px 10px", f.style.cursor = "pointer", f.style.fontSize = "30px",
            a.appendChild(f), f.addEventListener("click", function() {
                document.querySelector("#vlmailform").remove(), document.querySelector("#vl-startDiv") && document.querySelector("#vl-startDiv").remove(),
                document.querySelector("#vlStartButton") && document.querySelector("#vlStartButton").remove(),
                document.querySelector("#vlGameRulesScren") && document.querySelector("#vlGameRulesScren").remove(),
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").remove(),
                document.documentElement.style.overflow = "auto";
            });
            var g = document.createElement("div");
            g.id = "vlFormSubmit", g.style.backgroundColor = "black", g.style.color = "white",
            g.style.padding = isMobile ? "4px 11px" : "4px 22px", g.style.fontSize = "23px",
            g.style.position = "absolute", g.style.bottom = "20px", g.style.right = "50%", g.style.left = "50%",
            g.style.width = "100px", g.style.transform = "translate(-50%, 0%)", g.style.cursor = "pointer",
            g.style.fontWeight = "bolder", g.innerText = formSubmitButtonText, rulesScreen(),
            g.addEventListener("click", function() {
                var a;
                document.querySelector("#vl-emailInput") && (a = document.querySelector("#vl-emailInput").value.toLowerCase(),
                1 == new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}").test(a) ? document.querySelector("#vlRulesCheck") && document.querySelector("#vlCheckBox") && (document.querySelector("#vlRulesCheck").checked && document.querySelector("#vlCheckBox").checked ? (vlRequests(),
                document.querySelector("#vl-emailInput") && document.querySelector("#vl-emailInput").remove(),
                document.querySelectorAll("#vlmailform>div").forEach(function(a) {
                    a.remove();
                }), document.querySelector("#vlmailform") && document.querySelector("#vlmailform").remove()) : alert("Please tick the checkboxes!")) : alert("Check your email address!"));
            }), a.appendChild(g), document.body.appendChild(a), vlSendLoginUserRequest();
        }
        function createLoggedInUserScreen() {
            setCookie("vl-started",true,365);
            try{
                VLSendImpressionFunc(12,4);
            }catch(e) {
                console.log("Impression Error",e);
            };
            var overlay = document.createElement("div");
            overlay.id="loginOverlay",overlay.style.position="fixed",overlay.style.top="0",overlay.style.width="100%",overlay.style.height="100%",
            overlay.style.background = "rgba(0,0,0,0.7)",overlay.style.zIndex="1000";
            document.querySelector("body").appendChild(overlay);
            var a = document.createElement("DIV");
            a.id = "vlGameLoggedInUserScreen", a.style.width = isMobile ? "320px" : "600px", a.style.height = isMobile ? "450px" : "600px",
            a.style.backgroundImage = "url('" + (isMobile ? loggedInStartPageImg : DloggedInStartPageImg) + "')",
            a.style.backgroundRepeat = "round", a.style.backgroundSize = "cover", a.style.backgroundPosition = "unset",
            a.style.padding = "20px 35px", a.style.position = "fixed", a.style.transition = "all 1s",
            a.style.position = "fixed", a.style.top = isMobile ? "calc(50% - 225px)" : "calc(50% - 300px)",
            a.style.left = isMobile ? "calc(50% - 160px)" : "calc(50% - 300px)", a.style.zIndex = "2147483647",
            a.style.transform = " translate3d(0,0,4px)";
            var b = document.createElement("div");
            var c = document.createElement("input");
            var d = document.createElement("div");
            var e = document.createElement("input");
            var f = document.createElement("label");
            var g = document.createElement("p");
            var h = document.createElement("div");
            h.id="vl-close-button",h.style.color="white",h.innerHTML = "X", h.style.cursor = "pointer", h.style.position="absolute",h.style.top="10px",
            h.style.right="10px",h.style.fontSize=isMobile ? "20px" : "25px",h.style.fontWeight="600",h.style.padding = isMobile ? "5px" : "10px";
            g.id="vlLoggedMessage",g.style.textAlign="center",g.style.color="white",g.style.bottom="20%",g.style.position="absolute",
            g.style.width="100%",g.style.left="-10px",g.style.display="none",
            b.id = "vlLoggedInUserStartButton", b.style.backgroundColor = "white",
            b.style.color = "#A70A2D", b.style.padding = "4px 13px",
            b.style.fontSize = "23px", b.style.position = "absolute", b.style.bottom = "-18px",
            b.style.right = "50%", b.style.left = "50%", b.style.textAlign = "center", b.style.width = isMobile ? "106px" : "110px",
            b.style.transform = "translate(-50%, 0%)", b.style.cursor = "pointer", b.style.fontWeight = "bolder",
            b.innerText = "BAŞLA!", a.appendChild(b), document.querySelector("body").appendChild(a),
            c.id="vlLoggedInUserEmail",c.style.bottom=isMobile ? "132px" : "151px",c.style.position="absolute",
            c.style.setProperty("width","82.4%","important"),c.style.left=isMobile ? "28px" : "48px",
            c.style.borderRadius = "30px",c.style.height=isMobile ? "37px" : "71px",c.style.outline="none",
            c.style.border="none",c.setAttribute("type","email"),
            c.setAttribute("required","required"),c.setAttribute=("placeholder","Email adresinizi girin"),a.appendChild(c),a.appendChild(g),a.appendChild(h),
            d.id="vlGameKVKKContainer",d.style.position="absolute",d.style.bottom= isMobile ? "40%" :"42%",d.style.left=isMobile ? "2%" : "10%",
            d.style.display="flex",d.style.flexDirection="row",d.style.alignItems="center",d.style.width=isMobile ? "100%" : "80%",
            a.appendChild(d),e.id="kvkk-condition-input",e.style.width=isMobile ? "15px" : "20px",e.style.height=isMobile ? "15px" : "20px",
            e.style.flex="0.1",e.setAttribute("type","checkbox"),d.appendChild(e),
            f.id="kvkk-condition-text",f.style.flex=isMobile ? "0.9" : "0.7",f.style.color="white", isMobile ? f.style.fontSize="11px" : "",
            f.innerHTML=`<a style="text-decoration: underline;color:white;" href="https://www.gsstore.org/kisisel-verilerin-korunmasi/">KVKK Bilgilendirme Metni</a>'ni okudum ve onaylıyorum.`,
            d.appendChild(f),rulesScreen();
        }
        function validateEmail(email)
        {
            var re = /\S+@\S+\.\S+/;
            var checkbox1 = document.getElementById("kvkk-condition-input").checked;
            var message = document.querySelector("#vlLoggedMessage");
            if(!re.test(email)){
                message.style.display = "block";message.style.color="red";message.innerHTML="Geçerli bir mail adresi giriniz.";
                return false;
            } else if(checkbox1 == false) {
                message.style.display = "block",message.style.color="red",message.innerHTML="Lütfen KVKK koşulunu kabul edin.";
                return false;
            }else{
                USER_EMAIL_ADRESS = email;
                message.style.display = "none";
                return true;
            }
        }
        function startFunctions() {
            document.querySelector("#vlmailform") && document.querySelector("#vlmailform").remove(),
            screenCreate();
        }
        function createGameFloor() {
            var a = document.createElement("Div");
            a.id = "hediyeyagmuru", a.style.width = "100vw", a.style.height = "100%", a.style.overflow = "hidden",
            a.style.backgroundImage = "url('" + (isMobile ? bgImages3 : DbgImages3) + "')",
            a.style.backgroundSize = "cover", a.style.backgroundRepeat = "round", a.style.position = "fixed",
            a.style.zIndex = "2147483645", a.style.transition = "1s all", a.style.top = "0",
            a.style.left = "0", a.style.opacity = "1", a.style.transform = " translate3d(0,0,2px)";
            var b = document.createElement("BUTTON");
            b.id = "vlCloseBtn", b.innerHTML = "&#10006;", b.style.position = "fixed", b.style.left = "20px",
            b.style.border = "0", b.style.borderRadius = "0 0 18px 18px", b.style.padding = "5px",
            b.style.background = color, b.style.color = "#fff", b.style.fontSize = "30px", b.style.display = "none",
            a.appendChild(b), document.querySelector("body").appendChild(a);
        }
        function rulesScreen() {
            var a = document.createElement("DIV");
            a.id = "vlGameRulesScren", a.style.width = isMobile ? "320px" : "600px" , a.style.height = isMobile ? "450px" : "600px",
            a.style.backgroundImage = "url('" + (isMobile ? bgImageS2 : DbgImageS2) + "')",
            a.style.backgroundRepeat = "round", a.style.backgroundSize = "cover", a.style.backgroundPosition = "unset",
            a.style.padding = "20px 35px", a.style.position = "fixed", a.style.transition = "all 1s",
            a.style.position = "fixed", a.style.top = isMobile ? "calc(50% - 225px)" : "calc(50% - 300px)", a.style.left =  isMobile ? "calc(50% - 160px)" : "calc(50% - 300px)",
            a.style.zIndex = "2147483646",a.style.display = "none",
            a.style.transform = " translate3d(0,0,3px)";
            var b = document.createElement("div");
            b.id = "vlRuleNextButton", b.style.backgroundColor = "white", b.style.color = "#A70A2D",
            b.style.padding = "4px 13px", b.style.fontSize = "23px", b.style.position = "absolute",
            b.style.bottom = "-40px", b.style.right = "50%", b.style.left = "50%", b.style.width = isMobile ? "106px" : "150px",
            b.style.transform = "translate(-50%, 0%)", b.style.cursor = "pointer", b.style.fontWeight = "bolder",b.style.textAlign="center",
            b.innerText = "Oyuna Başla!", a.appendChild(b), document.querySelector("body").appendChild(a),
            createGameFloor(), b.addEventListener("click", function() {
                document.querySelector("#vlGameRulesScren") && document.querySelector("#vlGameRulesScren").remove(),
                startFunctions(), vlStartGameEvent();
            });
        }
        function createThanksPage() {
            try{
                VLSendClickFunc(12,4);
            }catch(e) {
                console.log("Click Error",e);
            };

            if(puan < 5) {
                setTimeout(function() {
                    alert("Kaybettiniz");
                    return true;
                },700);
            }else {
                var yusulabs = new Visilabs();
                yusulabs.AddParameter("OM.gameEmail",USER_EMAIL_ADRESS);
                yusulabs.AddParameter("OM.gamePoint", puan);
                yusulabs.AddParameter("OM.gameCode", PROMO_CODE);
                yusulabs.Collect();

                var overlay = document.createElement("div");
                overlay.id="thanksOverlay",overlay.style.position="fixed",overlay.style.top="0",overlay.style.width="100%",overlay.style.height="100%",
                overlay.style.background = "rgba(0,0,0,0.7)",overlay.style.zIndex="1000";
                document.querySelector("body").appendChild(overlay);
                var a = document.createElement("div");
                a.id = "vlGameThanksPage", a.style.position = "fixed", a.style.width = isMobile ? "320px" : "600px", a.style.height = isMobile ? "450px" : "600px",
                a.style.top = isMobile ? "calc(50% - 225px)" : "calc(50% - 300px)", a.style.left = isMobile ? "calc(50% - 160px)" : "calc(50% - 300px)", a.style.zIndex = "2147483644",
                a.style.backgroundImage = "url('" + (isMobile ? thanksPageImg : DthanksPageImg) + "')",
                a.style.backgroundRepeat = isMobile ? "no-repeat" : "round", a.style.backgroundSize = "cover",
                a.style.backgroundPosition = isMobile ? "center" : "unset", a.style.transform = " translate3d(0,0,1px)";
                var b = document.createElement("div");
                b.id = "vlGameCouponCode", b.style.position = "absolute", b.style.width = isMobile ? "350px" : "200px",
                b.style.height = "100px", b.style.top = isMobile ? "57.5%" : "61%", b.style.left = isMobile ? "1.5%" : "12%",
                b.style.zIndex = "2147483646",a.appendChild(b);
                var d = document.createElement("div");
                d.id = "vlGameCouponCodetTxt", d.style.width = isMobile ? "313px" : "470px", d.style.position = isMobile ? "absolute" : "unset",
                d.style.fontSize = isMobile ? "26px" : "45px",
                d.style.fontWeight = "bold", d.style.textAlign = "center", d.innerText = PROMO_CODE,
                b.appendChild(d);
                var e = document.createElement("div");
                e.style.position = "absolute", e.style.width = isMobile ? "200px" : "163px", e.style.height = isMobile? "36px" : "60px",
                e.style.bottom = isMobile ? "-9%" :"-11%", e.style.left = "50%", e.style.transform = "translate(-50%, -50%)",
                e.style.color = "#A70A2D", e.style.textAlign = "center", e.style.fontSize = isMobile ? "25px" : "33px",
                e.style.cursor = "pointer", e.style.padding = isMobile ? "0px" : "5px", e.style.backgroundColor = "white",
                e.style.fontWeight = "bold", e.innerText = "Kopyala",
                e.addEventListener("click", function() {
                    var a = document.querySelector("#vlCopyCouponCode");
                    a.focus(), a.select(), a.setSelectionRange(0, 99999), document.execCommand("copy"),
                    vlCopyCodeEvent(), alert(copiedText + a.value), document.querySelector("#vlGameThanksPage").remove(), document.querySelector("#thanksOverlay").remove();
                    isRun = !1;
                }), a.appendChild(e), document.querySelector("body").appendChild(a);
            }
        }
        function isMobileChecker() {
            var a, b = !1;
            a = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\\\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\\\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (b = !0),
            isMobile = b;
        }
        function startGame() {
            isMobileChecker();
            var a = document.createElement("style");
            a.id = "vlGameStyle", a.innerHTML = "@keyframes airplaneScene {0%   {left: 2500px;}50%  {left: 50px;}75%  {left: 150px;}100% {left: -5000px;}}@keyframes boxScene {0%   {top: " + .15 * (window.innerHeight - 300) + "px;width:0px;height:0px}25%  {top: " + .55 * (window.innerHeight - 300) + "px;transform: rotate(-25deg);left:150px;width:230px;height:300px}50%  {top: " + .75 * (window.innerHeight - 300) + "px;transform: rotate(25deg);left:-50px;width:230px;height:300px}75%  {top: " + .85 * (window.innerHeight - 300) + "px;transform: rotate(-15deg);left:150px;width:230px;height:300px}100% {top: " + (window.innerHeight - 300) + "px;transform: rotate(0deg);left:50px;width:230px;height:300px}}",
            document.head.appendChild(a);
            var b = document.createElement("div");
            b.id = "vlStartButton", b.style.position = "fixed", b.style.left = "50px", b.style.top = window.innerHeight - 300 + "px",
            b.style.width = "230px", b.style.height = "300px", b.style.borderRadius = "15px",
            b.style.color = "white", b.style.cursor = "pointer", b.style.transition = "5s all",
            b.style.animation = "boxScene 7s cubic-bezier(1, 1, 1, 1)", b.style.opacity = "1",
            b.style.zIndex = "9999", b.innerHTML = "<img style='position:absolute;z-index:9998;width:100%;height:100%' src='https://img.visilabs.net/banner/uploaded_images/241_1233_20191122144909376.png'/>";
            var c = document.createElement("DIV");
            c.id = "vl-startDiv", c.style.width = "250px", c.style.padding = "15px", c.style.position = "fixed",
            c.style.top = "50px", c.style.left = "5000px", c.style.transition = "5s all", c.style.zIndex = "9998",
            c.style.animation = "airplaneScene 7s";
            var d = document.createElement("IMG");
            d.id = "vl-startAirplane", d.src = "https://img.visilabs.net/banner/uploaded_images/241_1233_20191122104830621.png",
            c.appendChild(d), b.addEventListener("click", function() {
                document.querySelector("#vlStartButton").style.opacity = "0", document.querySelector("#vlmailform") || createMailSubForm();
            }), document.querySelector("#vl-startDiv") || (document.body.appendChild(c), setTimeout(function() {
                document.body.appendChild(b);
            }, 3e3));
        }
        function screenCreate() {
            var a, b;
            function c(a) {
                for (var b = 0, c = 0; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop); ) b += a.offsetLeft - a.scrollLeft,
                c += a.offsetTop - a.scrollTop, a = a.offsetParent;
                return {
                    top: c,
                    left: b
                };
            }
            function d(a) {
                var b, f, g, h;
                document.querySelector(a) && (b = document.querySelector(a), f = parseFloat(b.style.transform.substr(7, b.style.transform.length)),
                b.style.bottom = parseFloat(b.style.bottom) - boxBottom + "px", b.style.transform = "rotate(" + (f + 30) + "deg)",
                parseFloat(b.style.bottom) <= intersectionPoint && (g = c(document.querySelector(a)).left,
                (h = c(document.querySelector("#vlGameBar")).left) <= g && g <= h + parseFloat(document.querySelector("#vlGameBar").style.width) && (puan++,
                !isSpeedUp && 35 <= puan && (isSpeedUp = !0, clearInterval(e), boxInterval = 200,
                boxBottom = 80, boxTransition = 20, e = setInterval(function() {
                    d("#box1"), d("#box2"), d("#box3"), d("#box4"), d("#box5"), d("#box6"), d("#box7"),
                    d("#box8"), d("#box9"), d("#box10"), d("#box11"), d("#box12"), d("#box13"), d("#box14"),
                    d("#box15"), d("#box16"), d("#box17"), d("#box18"), d("#box19"), d("#box20"), d("#box21"),
                    d("#box22"), d("#box23"), d("#box24"), d("#box25"), d("#box26"), d("#box27"), d("#box28"),
                    d("#box29"), d("#box30"), d("#box31"), d("#box32"), d("#box33"), d("#box34"), d("#box35"),
                    d("#box36"), d("#box37"), d("#box38"), d("#box39"), d("#box40");
                }, boxInterval), console.log("hız arttırıldı")), document.querySelector("#vlPercentText").innerHTML = puan),
                b.remove(), "#box40" === a && (document.querySelector("#box40") || (clearInterval(e),
                document.querySelector("body").style.userSelect = "auto", isRun = !1, barStatu = !1,
                vlGameFinish(), console.log("Game finish")))));
            }
            document.querySelector("body").style.userSelect = "none", document.querySelector("#hediyeyagmuru") || ((a = document.createElement("Div")).id = "hediyeyagmuru",
            a.style.width = "100vw", a.style.height = "100%", a.style.overflow = "hidden", a.style.backgroundImage = "url('" + (isMobile ? bgImages3 : DbgImages3) + "')",
            a.style.backgroundSize = "cover", a.style.backgroundRepeat = "round", a.style.position = "fixed",
            a.style.zIndex = "2147483645", a.style.transition = "1s all", a.style.top = "0",
            a.style.left = "0", a.style.transform = " translate3d(0,0,2px)", (b = document.createElement("BUTTON")).id = "vlCloseBtn",
            b.innerHTML = "&#10006;", b.style.position = "fixed", b.style.left = "20px", b.style.border = "0",
            b.style.borderRadius = "0 0 18px 18px", b.style.padding = "5px", b.style.background = color,
            b.style.color = "white", b.style.fontSize = "30px", b.style.display = "none", a.appendChild(b),
            document.querySelector("body").appendChild(a)), document.querySelector("#vlCloseBtn") && (b = document.querySelector("#vlCloseBtn")),
            b.addEventListener("click", function() {
                isRun = !1, document.querySelector("#hediyeyagmuru").remove(), document.querySelector("#vl-startDiv") && document.querySelector("#vl-startDiv").remove(),
                document.querySelector("#vlStartButton") && document.querySelector("#vlStartButton").remove(),
                e && clearInterval(e), countDownTmpInterval && clearInterval(countDownTmpInterval);
            }), vlCreateBar(), vlPuanCreator(), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box1", giftImages.box1));
            }, BoxTimeOuts.box1), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box2", giftImages.box2));
            }, BoxTimeOuts.box2), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box3", giftImages.box3));
            }, BoxTimeOuts.box3), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box4", giftImages.box4));
            }, BoxTimeOuts.box4), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box5", giftImages.box5));
            }, BoxTimeOuts.box5), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box6", giftImages.box6));
            }, BoxTimeOuts.box6), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box7", giftImages.box7));
            }, BoxTimeOuts.box7), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box8", giftImages.box8));
            }, BoxTimeOuts.box8), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box9", giftImages.box9));
            }, BoxTimeOuts.box9), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box10", giftImages.box10));
            }, BoxTimeOuts.box10), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box11", giftImages.box11));
            }, BoxTimeOuts.box11), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box12", giftImages.box12));
            }, BoxTimeOuts.box12), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box13", giftImages.box13));
            }, BoxTimeOuts.box13), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box14", giftImages.box14));
            }, BoxTimeOuts.box14), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box15", giftImages.box15));
            }, BoxTimeOuts.box15), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box16", giftImages.box16));
            }, BoxTimeOuts.box16), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box17", giftImages.box17));
            }, BoxTimeOuts.box17), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box18", giftImages.box18));
            }, BoxTimeOuts.box18), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box19", giftImages.box19));
            }, BoxTimeOuts.box19), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box20", giftImages.box20));
            }, BoxTimeOuts.box20), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box21", giftImages.box21));
            }, BoxTimeOuts.box21), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box22", giftImages.box22));
            }, BoxTimeOuts.box22), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box23", giftImages.box23));
            }, BoxTimeOuts.box23), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box24", giftImages.box24));
            }, BoxTimeOuts.box24), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box25", giftImages.box25));
            }, BoxTimeOuts.box25), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box26", giftImages.box26));
            }, BoxTimeOuts.box26), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box27", giftImages.box27));
            }, BoxTimeOuts.box27), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box28", giftImages.box28));
            }, BoxTimeOuts.box28), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box29", giftImages.box29));
            }, BoxTimeOuts.box29), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box30", giftImages.box30));
            }, BoxTimeOuts.box30), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box31", giftImages.box31));
            }, BoxTimeOuts.box31), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box32", giftImages.box32));
            }, BoxTimeOuts.box32), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box33", giftImages.box33));
            }, BoxTimeOuts.box33), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box34", giftImages.box34));
            }, BoxTimeOuts.box34), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box35", giftImages.box35));
            }, BoxTimeOuts.box35), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box36", giftImages.box36));
            }, BoxTimeOuts.box36), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box37", giftImages.box37));
            }, BoxTimeOuts.box37), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box38", giftImages.box38));
            }, BoxTimeOuts.box38), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box39", giftImages.box39));
            }, BoxTimeOuts.box39), setTimeout(function() {
                document.querySelector("#hediyeyagmuru") && document.querySelector("#hediyeyagmuru").appendChild(DivCreator("box40", giftImages.box40));
            }, BoxTimeOuts.box40);
            var e = setInterval(function() {
                d("#box1"), d("#box2"), d("#box3"), d("#box4"), d("#box5"), d("#box6"), d("#box7"),
                d("#box8"), d("#box9"), d("#box10"), d("#box11"), d("#box12"), d("#box13"), d("#box14"),
                d("#box15"), d("#box16"), d("#box17"), d("#box18"), d("#box19"), d("#box20"), d("#box21"),
                d("#box22"), d("#box23"), d("#box24"), d("#box25"), d("#box26"), d("#box27"), d("#box28"),
                d("#box29"), d("#box30"), d("#box31"), d("#box32"), d("#box33"), d("#box34"), d("#box35"),
                d("#box36"), d("#box37"), d("#box38"), d("#box39"), d("#box40");
            }, boxInterval);
        }
        function loginController() {
            var a = !1;
            return isMobile ? a = null != document.querySelectorAll(".-mw-text-inner")[0] && "ÜYE OL" == document.querySelectorAll(".-mw-text-inner")[0].innerText ? (console.log("nonuser mobile"),
            !1) : (console.log("user mobile"), !0) : document.querySelectorAll(".header-middle-link")[0] ? a = "GİRİŞ YAP" == document.querySelectorAll(".header-middle-link")[0].innerText ? (console.log("nonuser Desktop"),
            !1) : (console.log("user desktop"), !0) : null == document.querySelectorAll(".header-middle-link")[0] && (console.log("user desktop"),
            a = !0), a;
        }
        document.querySelector("#hediyeyagmuru") || (isMobileChecker(), (document.cookie.indexOf("vl-started") == -1 && createLoggedInUserScreen)());
        document.querySelector("#vlLoggedInUserStartButton").addEventListener("click", function() {
            var email = document.querySelector("#vlLoggedInUserEmail").value;
            var validatedResult = validateEmail(email);
            if(validatedResult) {
                document.querySelector("#vlGameLoggedInUserScreen").remove();
                document.querySelector("#vlGameRulesScren").style.display = "block";
            }
        });
        document.querySelector("#vl-close-button").addEventListener("click", function() {
            document.querySelector("#loginOverlay").remove();
            document.querySelector("#vlGameLoggedInUserScreen").remove();
            document.querySelector("#vlGameRulesScren").remove();
            document.querySelector("#hediyeyagmuru").remove();

        });
        document.querySelector("#vlRuleNextButton").addEventListener("click", function() {
            document.querySelector("#loginOverlay").remove();
            document.querySelector("#hediyeyagmuru").style.background = "white";
        })
    } catch (e) {}
}