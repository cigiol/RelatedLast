function vlCoutDownBannerDesktop() {
        function styleCreator() {
            var styleEl = document.createElement("style");
            styleEl.innerHTML = ".flip-clock {text-align: center;padding: 5px;display:inline;}" +
                ".flip-clock::before,.flip-clock::after {box-sizing: border-box;}" +
                ".flip-clock__piece {display: inline-block;margin: 0 5px;}" +
                ".flip-clock__slot {font-size: 11px; color:#fff}" +
                ".card {display: block;position: relative;padding-bottom: 0.72em;font-size: 30px;line-height:1.48;}" +
                ".card__top,.card__bottom,.card__back::before,.card__back::after {display: block;height: 0.72em;color: #181e32;background: #fff;border-radius: 0.15em 0.15em 0 0;backface-visibility: hidden;transform-style: preserve-3d;width: 40px;transform: translateZ(0);}" +
                ".card__bottom {color: #181e32;position: absolute;top: 50%;left: 0;border-top: solid 1px #09594e;background: #fff;border-radius: 0 0 0.15em 0.15em;pointer-events: none;overflow: hidden;}" +
                ".card__bottom::after {display: block;margin-top: -0.72em;}" +
                ".card__back::before,.card__bottom::after {content: attr(data-value);}" +
                ".card__back {position: absolute; top: 0;height: 100%;left: 0%;pointer-events: none;}" +
                ".card__back::before {position: relative;z-index: -1;overflow: hidden;}" +
                ".flip .card__back::before {animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);animation-fill-mode: both;transform-origin: center bottom;}" +
                ".flip .card__back .card__bottom {transform-origin: center top;animation-fill-mode: both;animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1);}" +
                "@keyframes flipTop {0% {transform: rotateX(0deg);z-index: 2;}0%,99% {opacity: 0.99;}100% {transform: rotateX(-90deg);opacity: 0;}}" +
                "@keyframes flipBottom {0%,50% {z-index: -1;transform: rotateX(90deg);opacity: 0;}51% {opacity: 0.99;}100% {opacity: 0.99;transform: rotateX(0deg);z-index: 5;}}";
            document.head.appendChild(styleEl);
        }
        styleCreator();

        function CountdownTracker(label, value) {

            var el = document.createElement('span');

            el.className = 'flip-clock__piece';
            el.innerHTML =
                '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
                '<span class="flip-clock__slot">' + label + '</span>';
            this.el = el;

            var top = el.querySelector('.card__top'),
                bottom = el.querySelector('.card__bottom'),
                back = el.querySelector('.card__back'),
                backBottom = el.querySelector('.card__back .card__bottom');

            this.update = function (val) {
                val = ('0' + val).slice(-2);
                if (val !== this.currentValue) {

                    if (this.currentValue >= 0) {
                        back.setAttribute('data-value', this.currentValue);
                        bottom.setAttribute('data-value', this.currentValue);
                    }
                    this.currentValue = val;
                    top.innerText = this.currentValue;
                    backBottom.setAttribute('data-value', this.currentValue);

                    this.el.classList.remove('flip');
                    void this.el.offsetWidth;
                    this.el.classList.add('flip');
                }
            }
        }

        function getTimeRemaining(endtime) {
            var t = Date.parse("Apr 29, 2020 23:59:00") - Date.parse(new Date());
            return {
                'Total': t,
                'Saat': Math.floor((t / (1000 * 60 * 60)) % 24),
                'Dakika': Math.floor((t / 1000 / 60) % 60),
                'Saniye': Math.floor((t / 1000) % 60)
            };
        }

        function getTime() {
            var t = new Date();
            return {
                'Total': t,
                'Saat': t.getHours() % 12,
                'Dakika': t.getMinutes(),
                'Saniye': t.getSeconds()
            };
        }

        function Clock(countdown, callback) {

            countdown = countdown ? new Date(Date.parse(countdown)) : false;
            callback = callback || function () {};

            var updateFn = countdown ? getTimeRemaining : getTime;

            this.el = document.createElement('div');
            this.el.className = 'flip-clock';

            var trackers = {},
                t = updateFn(countdown),
                key, timeinterval;

            for (key in t) {
                if (key === 'Total') {
                    continue;
                }
                trackers[key] = new CountdownTracker(key, t[key]);
                this.el.appendChild(trackers[key].el);
            }

            var i = 0;

            function updateClock() {
                timeinterval = requestAnimationFrame(updateClock);

                // throttle so it's not constantly updating the time.
                if (i++ % 10) {
                    return;
                }

                var t = updateFn(countdown);
                if (t.Total < 0) {
                    cancelAnimationFrame(timeinterval);
                    for (key in trackers) {
                        trackers[key].update(0);
                    }
                    callback();
                    return;
                }

                for (key in trackers) {
                    trackers[key].update(t[key]);
                }
            }

            setTimeout(updateClock, 1000);
        }

        var visi=document.createElement("div");
        visi.setAttribute("id","VisiBannerSection");
        visi.style.width="100%";
        visi.style.height="80px";
        visi.style.position = "relative";

        var vlCountDownHead = document.createElement('div');
        vlCountDownHead.className = 'vlCountDownHead';
        vlCountDownHead.style.height = '60px';
        vlCountDownHead.style.color = '#132443';
        vlCountDownHead.style.top="12px";
        vlCountDownHead.style.right="15%";
        vlCountDownHead.style.position = "absolute";
        vlCountDownHead.style.backgroundColor = "#d51b51";

        var vlImage = document.createElement('img');
        vlImage.setAttribute("id","visi_image");
        vlImage.src="https://img.visilabs.net/banner/uploaded_images/244_1242_20200417131945238.jpg";
        vlImage.style.width="100%";
        vlImage.style.height="80px";

        var cls_btn=document.createElement("img");
        cls_btn.setAttribute("id","img_close");
        cls_btn.src="data:image/png;base64,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";
        cls_btn.style.position="absolute";
        cls_btn.style.top="3px";
        cls_btn.style.right="5px";
        cls_btn.style.cursor="pointer";
        cls_btn.style.zIndex="1000003";
        cls_btn.style.opacity="1";
        cls_btn.style.width="2%";
        cls_btn.onclick=closeclick;

        function closeclick(){
            var t=document.querySelector("#VisiBannerSection");
            t.remove();
        }

        visi.appendChild(vlImage);
        visi.appendChild(vlCountDownHead);
        visi.appendChild(cls_btn);

        document.querySelector(".pro-header-bottom").insertBefore(visi,document.querySelector(".pro-header-middle"));
        var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
        var c = new Clock(deadline, function () {
            alert('countdown complete');
        });
        vlCountDownHead.appendChild(c.el);
        <%VLSendImpressionFunc%>;
}


function vlCoutDownBannerMobile() {
        function styleCreator() {
            var styleEl = document.createElement("style");
            styleEl.innerHTML = ".flip-clock {text-align: center;display: block;transform: translate3d(0,0,3px);}}" +
                ".flip-clock::before,.flip-clock::after {box-sizing: border-box;}" +
                ".flip-clock__piece {display: inline-block;margin: 0 5px;}" +
                ".flip-clock__slot {font-size: 8px; color:#fff}" +
                ".card {display: block;position: relative;padding-bottom: 0.72em;font-size: 15px;line-height:1.48;}" +
                ".card__top,.card__bottom,.card__back::before,.card__back::after {display: block;height: 0.72em;color: #181e32;background: #fff;border-radius: 0.15em 0.15em 0 0;backface-visibility: hidden;transform-style: preserve-3d;width: 23px;transform: translateZ(0);}" +
                ".card__bottom {color: #181e32;position: absolute;top: 50%;left: 0;border-top: solid 1px #09594e;background: #fff;border-radius: 0 0 0.15em 0.15em;pointer-events: none;overflow: hidden;}" +
                ".card__bottom::after {display: block;margin-top: -0.72em;}" +
                ".card__back::before,.card__bottom::after {content: attr(data-value);}" +
                ".card__back {position: absolute; top: 0;height: 100%;left: 0%;pointer-events: none;}" +
                ".card__back::before {position: relative;z-index: -1;overflow: hidden;}" +
                ".flip .card__back::before {animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);animation-fill-mode: both;transform-origin: center bottom;}" +
                ".flip .card__back .card__bottom {transform-origin: center top;animation-fill-mode: both;animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1);}" +
                "@keyframes flipTop {0% {transform: rotateX(0deg);z-index: 2;}0%,99% {opacity: 0.99;}100% {transform: rotateX(-90deg);opacity: 0;}}" +
                "@keyframes flipBottom {0%,50% {z-index: -1;transform: rotateX(90deg);opacity: 0;}51% {opacity: 0.99;}100% {opacity: 0.99;transform: rotateX(0deg);z-index: 5;}}";
            document.head.appendChild(styleEl);
        }
        styleCreator();

        function CountdownTracker(label, value) {

            var el = document.createElement('span');

            el.className = 'flip-clock__piece';
            el.innerHTML =
                '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
                '<span class="flip-clock__slot">' + label + '</span>';
            this.el = el;

            var top = el.querySelector('.card__top'),
                bottom = el.querySelector('.card__bottom'),
                back = el.querySelector('.card__back'),
                backBottom = el.querySelector('.card__back .card__bottom');

            this.update = function (val) {
                val = ('0' + val).slice(-2);
                if (val !== this.currentValue) {

                    if (this.currentValue >= 0) {
                        back.setAttribute('data-value', this.currentValue);
                        bottom.setAttribute('data-value', this.currentValue);
                    }
                    this.currentValue = val;
                    top.innerText = this.currentValue;
                    backBottom.setAttribute('data-value', this.currentValue);

                    this.el.classList.remove('flip');
                    void this.el.offsetWidth;
                    this.el.classList.add('flip');
                }
            }

        }

        function getTimeRemaining(endtime) {
            var t = Date.parse("Apr 29, 2020 23:59:00") - Date.parse(new Date());
            return {
                'Total': t,
                'Saat': Math.floor((t / (1000 * 60 * 60)) % 24),
                'Dakika': Math.floor((t / 1000 / 60) % 60),
                'Saniye': Math.floor((t / 1000) % 60)
            };
        }

        function getTime() {
            var t = new Date();
            return {
                'Total': t,
                'Saat': t.getHours() % 12,
                'Dakika': t.getMinutes(),
                'Saniye': t.getSeconds()
            };
        }

        function Clock(countdown, callback) {

            countdown = countdown ? new Date(Date.parse(countdown)) : false;
            callback = callback || function () {};

            var updateFn = countdown ? getTimeRemaining : getTime;

            this.el = document.createElement('div');
            this.el.className = 'flip-clock';

            var trackers = {},
                t = updateFn(countdown),
                key, timeinterval;

            for (key in t) {
                if (key === 'Total') {
                    continue;
                }
                trackers[key] = new CountdownTracker(key, t[key]);
                this.el.appendChild(trackers[key].el);
            }

            var i = 0;

            function updateClock() {
                timeinterval = requestAnimationFrame(updateClock);

                if (i++ % 10) {
                    return;
                }

                var t = updateFn(countdown);
                if (t.Total < 0) {
                    cancelAnimationFrame(timeinterval);
                    for (key in trackers) {
                        trackers[key].update(0);
                    }
                    callback();
                    return;
                }

                for (key in trackers) {
                    trackers[key].update(t[key]);
                }
            }

            setTimeout(updateClock, 1000);
        }

        var visi=document.createElement("div");
        visi.setAttribute("id","VisiBannerSection");
        visi.style.width="100%";
        visi.style.height="50px";
        visi.style.position = "relative";

        var vlCountDownHead = document.createElement('div');
        vlCountDownHead.className = 'vlCountDownHead';
        vlCountDownHead.style.height = '40px';
        vlCountDownHead.style.color = '#132443';
        vlCountDownHead.style.top="7px";
        vlCountDownHead.style.right="8%";
        vlCountDownHead.style.position = "absolute";
        vlCountDownHead.style.backgroundColor = "#d51b51";

        var vlImage = document.createElement('img');
        vlImage.setAttribute("id","visi_image");
        vlImage.src="https://img.visilabs.net/banner/uploaded_images/244_1242_20200417132002944.jpg";
        vlImage.style.width="100%";
        vlImage.style.height="50px";

        var cls_btn=document.createElement("img");
        cls_btn.setAttribute("id","img_close");
        cls_btn.src="data:image/png;base64,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";
        cls_btn.style.position="absolute";
        cls_btn.style.top="-2px";
        cls_btn.style.right="1px";
        cls_btn.style.cursor="pointer";
        cls_btn.style.zIndex="1000003";
        cls_btn.style.opacity="1";
        cls_btn.style.width="7%";
        cls_btn.onclick=closeclick;

        visi.appendChild(vlImage);
        visi.appendChild(vlCountDownHead);
        visi.appendChild(cls_btn);

        function closeclick(){
            var t=document.querySelector("#VisiBannerSection");
            t.remove();
        }

        document.querySelector("#header").insertBefore(visi,document.querySelector(".widget.widget_ca_mobile_header"));
        var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
        var c = new Clock(deadline, function () {
            alert('countdown complete');
        });
        vlCountDownHead.appendChild(c.el);
        <%VLSendImpressionFunc%>;
}


if(!document.querySelector("#VisiBannerSection")){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        vlCoutDownBannerMobile();
    }
    else{
        vlCoutDownBannerDesktop();
    }
}

