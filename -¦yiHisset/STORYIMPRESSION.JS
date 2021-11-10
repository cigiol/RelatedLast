! function() {
    var t, e, i, n, a, o, s, r, c, l;
    jQuery("head").append("<style>@keyframes zuckSlideTime{0%{max-width:0}to{max-width:100%}}@keyframes zuckLoading{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}#zuck-modal{outline:0!important;overflow:hidden;position:fixed;background:rgba(0,0,0,.75);z-index:100000;font-size:14px;font-family:inherit}#zuck-modal-content,#zuck-modal-content .story-viewer,#zuck-modal-content .story-viewer>.slides,#zuck-modal-content .story-viewer>.slides>*{width:100vw;height:100%;top:0;bottom:0;position:absolute;overflow:hidden}#zuck-modal *{user-select:none;outline:0}#zuck-modal.with-effects{transform:scale(.01);transform-origin:top left;transition:.25s;position:absolute;top:0;left:0;width:100vw;height:100%;top:0;bottom:0}#zuck-modal.with-effects.animated{transform:scale(1);border-radius:0;margin-top:0!important;margin-left:0!important}#zuck-modal.with-effects.closed{transform:translateY(100%)}#zuck-modal .slider{width:300vw;height:100%;top:0;bottom:0;left:-100vw;position:absolute}#zuck-modal .slider>*{width:100vw;height:100%;top:0;bottom:0;position:absolute}#zuck-modal .slider>.previous{left:0}#zuck-modal .slider>.viewing{left:100vw}#zuck-modal .slider>.next{left:200vw}#zuck-modal .slider.animated{-webkit-transition:-webkit-transform .25s linear;transition:-webkit-transform .25s linear;transition:transform .25s linear;transition:transform .25s linear,-webkit-transform .25s linear}#zuck-modal.with-cube #zuck-modal-content{perspective:1000vw;transform:scale(.95);perspective-origin:50% 50%;overflow:visible;transition:.3s}#zuck-modal.with-cube .slider{transform-style:preserve-3d;transform:rotateY(0deg)}#zuck-modal.with-cube .slider>.previous{backface-visibility:hidden;left:100vw;transform:rotateY(270deg) translateX(-50%);transform-origin:center left}#zuck-modal.with-cube .slider>.viewing{backface-visibility:hidden;left:100vw;transform:translateZ(50vw)}#zuck-modal.with-cube .slider>.next{backface-visibility:hidden;left:100vw;transform:rotateY(-270deg) translateX(50%);transform-origin:top right}#zuck-modal-content .story-viewer.paused.longPress .head,#zuck-modal-content .story-viewer.paused.longPress .slides-pointers,#zuck-modal-content .story-viewer.paused.longPress .tip{opacity:0}#zuck-modal-content .story-viewer.viewing:not(.paused):not(.stopped) .slides-pointers>*>.active>b{-webkit-animation-play-state:running;animation-play-state:running}#zuck-modal-content .story-viewer.next{z-index:10}#zuck-modal-content .story-viewer.viewing{z-index:5}#zuck-modal-content .story-viewer.previous{z-index:0}#zuck-modal-content .story-viewer.muted .tip.muted{opacity:0}#zuck-modal-content .story-viewer.loading .head .loading{display:block}#zuck-modal-content .story-viewer.loading .head .right .time,#zuck-modal-content .story-viewer.loading .head .right .close{display:none}#zuck-modal-content .story-viewer .slides-pagination span{position:absolute;top:50vh;font-size:48px;color:#fff;line-height:48px;width:48px;margin:6px;transform:translateY(-50%);z-index:1;text-align:center}#zuck-modal-content .story-viewer .slides-pagination .previous{left:0}#zuck-modal-content .story-viewer .slides-pagination .next{right:0}#zuck-modal-content .story-viewer .slides-pointers{display:table;table-layout:fixed;border-spacing:6px;border-collapse:separate;position:absolute;width:100vh;top:0;left:calc(50vw - 50vh);right:calc(50vw - 50vh);z-index:100020}#zuck-modal-content .story-viewer .slides-pointers>*{display:table-row}#zuck-modal-content .story-viewer .slides-pointers>*>*{display:table-cell;background:rgba(255,255,255,.5);border-radius:2px}#zuck-modal-content .story-viewer .slides-pointers>*>.seen{background:#fff}#zuck-modal-content .story-viewer .slides-pointers>*>*>b{background:#fff;width:auto;max-width:0;height:2px;display:block;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:paused;animation-play-state:paused;border-radius:2px}#zuck-modal-content .story-viewer .slides-pointers>*>.active>b{-webkit-animation-name:zuckSlideTime;animation-name:zuckSlideTime;-webkit-animation-timing-function:linear;animation-timing-function:linear}#zuck-modal-content .story-viewer .head{position:absolute;height:56px;left:0;right:0;line-height:56px;z-index:100010;color:#fff;font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,.35),1px 0 1px rgba(0,0,0,.35);padding:6px 12px}#zuck-modal-content .story-viewer .head .item-preview{overflow:hidden;vertical-align:top;background-size:cover;width:42px;height:42px;display:inline-block;margin-right:9px;border-radius:50%;vertical-align:middle;background-repeat:no-repeat;background-position:center}#zuck-modal-content .story-viewer .head .item-preview img{display:block;box-sizing:border-box;height:100%;width:100%;background-size:cover;background-position:center;object-fit:cover}#zuck-modal-content .story-viewer .head .time{opacity:.75;font-weight:500;font-size:13px}#zuck-modal-content .story-viewer .head .left{line-height:1!important;display:inline-block;margin:6px 0}#zuck-modal-content .story-viewer .head .left .info{display:inline-block;max-width:30vw;vertical-align:middle}#zuck-modal-content .story-viewer .head .left .info>*{width:100%;display:inline-block;line-height:21px}#zuck-modal-content .story-viewer .head .left .info .name{font-weight:500}#zuck-modal-content .story-viewer .head .right{float:right}#zuck-modal-content .story-viewer .head .right .close,#zuck-modal-content .story-viewer .head .back{font-size:42px;width:48px;height:48px;line-height:48px;cursor:pointer;text-align:center}#zuck-modal-content .story-viewer .head .left .back{display:none;width:24px;margin:-9px -6px 0 -6px}#zuck-modal-content .story-viewer .head .right .time{display:none}#zuck-modal-content .story-viewer .head .loading{display:none;border-radius:50%;width:30px;height:30px;margin:9px 0;border:4px solid rgba(255,255,255,.2);box-sizing:border-box;border-top-color:#fff;-webkit-animation:zuckLoading 1s infinite linear;animation:zuckLoading 1s infinite linear}#zuck-modal-content .story-viewer .head,#zuck-modal-content .story-viewer .slides-pointers,#zuck-modal-content .story-viewer .tip{-webkit-transition:opacity .5s;transition:opacity .5s}#zuck-modal-content .story-viewer .slides .item{display:none;overflow:hidden;background:#000}#zuck-modal-content .story-viewer .slides .item:before{z-index:4;background:0 0;content:'';position:absolute;left:0;right:0;bottom:0;top:0}#zuck-modal-content .story-viewer .slides .item>.media{height:100%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin:auto}#zuck-modal-content .story-viewer .slides .item.active,#zuck-modal-content .story-viewer .slides .item.active .tip.link{display:block}#zuck-modal-content .story-viewer .tip{z-index:5;text-decoration:none;display:none;border-radius:24px;background:rgba(0,0,0,.5);font-size:16px;position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000;color:#fff;text-align:center;text-transform:uppercase;font-weight:500;padding:12px 24px}@media (max-width:1024px){#zuck-modal-content .story-viewer .head{top:3px}#zuck-modal-content .story-viewer .head .loading{width:24px;height:24px;margin:6px 0}#zuck-modal-content .story-viewer .head .item-preview{width:30px;height:30px;margin-right:9px}#zuck-modal-content .story-viewer .head .left{font-size:15px;margin:15px 0}#zuck-modal-content .story-viewer .head .left>div{line-height:30px}#zuck-modal-content .story-viewer .head .right .time{display:block;white-space:nowrap;font-size:15px;margin:15px 0;line-height:30px}#zuck-modal-content .story-viewer .head .left>.back{display:none;background:0 0;z-index:20;visibility:visible;position:absolute;height:42px;width:24px;line-height:36px;text-align:left;vertical-align:top;text-shadow:none}#zuck-modal-content .story-viewer.with-back-button .head .left>.back{display:block}#zuck-modal-content .story-viewer.with-back-button .head .left .item-preview{margin-left:18px}#zuck-modal-content .story-viewer .slides-pointers{width:100vw;left:0;right:0}#zuck-modal-content .story-viewer .tip{font-size:15px;padding:8px 25px}#zuck-modal-content .story-viewer .head .left .time,#zuck-modal-content .story-viewer .head .right .close{display:none}}.stories.carousel{white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.stories.carousel::-webkit-scrollbar{width:0;background:0 0}.stories.carousel .story{display:inline-block;width:18vw;max-width:90px;margin:0 6px;vertical-align:top}.stories.carousel .story:first-child{margin-left:0}.stories.carousel .story:last-child{margin-right:0}.stories.carousel .story>.item-link{text-align:center;display:block}.stories.carousel .story>.item-link:active>.item-preview{transform:scale(.9)}.stories.carousel .story>.item-link>.item-preview{display:block;box-sizing:border-box;font-size:0;max-height:90px;height:18vw;overflow:hidden;transition:transform .2s}.stories.carousel .story>.item-link>.item-preview img{display:block;box-sizing:border-box;height:100%;width:100%;background-size:cover;background-position:center;object-fit:cover}.stories.carousel .story>.item-link>.info{display:inline-block;margin-top:.5em;line-height:1.2em;width:100%;overflow:hidden;text-overflow:ellipsis}.stories.carousel .story>.item-link>.info .name{font-weight:300}.stories.carousel .story>.item-link>.info .time{display:none}.stories.carousel .story>.items{display:none}.stories.list{white-space:nowrap;overflow:auto}.stories.list .story{display:block;width:auto;margin:6px;padding-bottom:6px}.stories.list .story>.item-link{text-align:left;display:block}.stories.list .story>.item-link>.item-preview{height:42px;width:42px;max-width:42px;margin-right:12px;vertical-align:top;display:inline-block;box-sizing:border-box;font-size:0;overflow:hidden}.stories.list .story>.item-link>.item-preview img{display:block;box-sizing:border-box;height:100%;width:100%;background-size:cover;background-position:center}.stories.list .story>.item-link>.info{display:inline-block;line-height:1.6em;overflow:hidden;text-overflow:ellipsis;vertical-align:top}.stories.list .story>.item-link>.info .name{font-weight:500;display:block}.stories.list .story>.item-link>.info .time{display:inline-block}.stories.list .story>.items{display:none}</style>"), jQuery("head").append("<style>.stories.snapgram .story > .item-link {text-decoration: none;color: #333;}.stories.snapgram .story > .item-link > .item-preview {border-radius: 50%;padding: 2px;background: radial-gradient(ellipse at 70% 70%, #ee583f 8%, #d92d77 42%, #bd3381 58%);}.stories.snapgram .story > .item-link > .item-preview img {border-radius: 50%;border: 3px solid #fff;}.stories.snapgram .story.seen {opacity: 0.75;}.stories.snapgram .story.seen > a > .item-preview {background: #999;}.stories.snapgram .story.seen > a {color: #999 !important;}</style>"), t = window || {}, e = function(t) {
        return document.querySelectorAll(t)[0]
    }, i = function(t, e) {
        return t && t[e] || ""
    }, n = function(t, e) {
        if (t)
            for (var i = t.length, n = 0; n < i; n++) e(n, t[n])
    }, a = function(t, e, i) {
        e = [e.toLowerCase(), "webkit".concat(e), "MS".concat(e), "o".concat(e)], n(e, function(e, n) {
            t[n] = i
        })
    }, o = function(t, e, i) {
        i = [i.toLowerCase(), "webkit".concat(i), "MS".concat(i), "o".concat(i)], n(i, function(i, n) {
            t.addEventListener(n, e, !1)
        })
    }, s = function(t, e) {
        o(t, e, "AnimationEnd")
    }, r = function(t, e) {
        t.transitionEndEvent || (t.transitionEndEvent = !0, o(t, e, "TransitionEnd"))
    }, c = function(t, e) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }, (l = function(o, l) {
        var d = this,
            m = function(t, e) {
                var i = function(t) {
                    return void 0 !== t
                };
                return e ? i(l[t]) && i(l[t][e]) ? l[t][e] : h[t][e] : i(l[t]) ? l[t] : h[t]
            },
            u = function(t, e) {
                try {
                    e ? (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen().catch(function() {}) : document.mozCancelFullScreen ? document.mozCancelFullScreen().catch(function() {}) : document.mozCancelFullScreen && document.mozCancelFullScreen().catch(function() {})) : t.requestFullScreen ? t.requestFullScreen() : t["ms".concat("RequestFullScreen")] ? t["ms".concat("RequestFullScreen")]() : t["moz".concat("RequestFullScreen")] ? t["moz".concat("RequestFullScreen")]() : t["webkit".concat("RequestFullScreen")] && t["webkit".concat("RequestFullScreen")]()
                } catch (t) {
                    console.warn("[Zuck.js] Can't access fullscreen")
                }
            },
            p = function(t, i, n, o) {
                var s = 0 < i ? 1 : -1;
                if (s *= Math.abs(i) / e("#zuck-modal").offsetWidth * 90, m("cubeEffect")) {
                    var r = 0 === s ? "scale(0.95)" : "scale(0.930,0.930)";
                    if (a(e("#zuck-modal-content").style, "Transform", r), -90 > s || 90 < s) return !1
                }
                i = m("cubeEffect") ? "rotateY(".concat(s, "deg)") : "translate3d(".concat(i, "px, 0, 0)"), t && (a(t.style, "TransitionTimingFunction", o), a(t.style, "TransitionDuration", "".concat(n, "ms")), a(t.style, "Transform", i))
            },
            v = function(t, e, i, n) {
                var a = 0,
                    o = 0;
                if (t) {
                    if (t.offsetParent)
                        do {
                            if (a += t.offsetLeft, o += t.offsetTop, t === n) break
                        } while (t = t.offsetParent);
                    e && (o -= e), i && (a -= i)
                }
                return [a, o]
            };
        "string" == typeof o && (o = document.getElementById(o)), o.id || o.setAttribute("id", "stories-" + Math.random().toString(36).substr(2, 9));
        var f = function(t) {
                t = 1e3 * Number(t);
                var e = (t = new Date(t)).getTime();
                e = ((new Date).getTime() - e) / 1e3;
                var i = m("language", "time");
                i = [
                    [60, " ".concat(i.seconds), 1],
                    [120, "1 ".concat(i.minute), ""],
                    [3600, " ".concat(i.minutes), 60],
                    [7200, "1 ".concat(i.hour), ""],
                    [86400, " ".concat(i.hours), 3600],
                    [172800, " ".concat(i.yesterday), ""],
                    [604800, " ".concat(i.days), 86400]
                ];
                var n = 1;
                0 > e && (e = Math.abs(e), n = 2);
                for (var a, o = 0; a = i[o++];)
                    if (e < a[0]) return "string" == typeof a[2] ? a[n] : Math.floor(e / a[2]) + a[1];
                return e = t.getDate(), i = t.getMonth(), t = t.getFullYear(), "".concat(e, "/").concat(i + 1, "/").concat(t)
            },
            g = o.id,
            h = {
                skin: "snapgram",
                avatars: !0,
                stories: [],
                backButton: !0,
                backNative: !1,
                paginationArrows: !1,
                previousTap: !0,
                autoFullScreen: !1,
                openEffect: !0,
                cubeEffect: !1,
                list: !1,
                localStorage: !0,
                callbacks: {
                    onOpen: function(t, e) {
                        e()
                    },
                    onView: function(t) {},
                    onEnd: function(t, e) {
                        e()
                    },
                    onClose: function(t, e) {
                        e()
                    },
                    onNextItem: function(t, e, i) {
                        i()
                    },
                    onNavigateItem: function(t, e, i) {
                        i()
                    }
                },
                template: {
                    timelineItem: function(t) {
                        return '\n<div class="story '.concat(!0 === i(t, "seen") ? "seen" : "", '">\n<a class="item-link" href="').concat(i(t, "link"), '">\n<span class="item-preview">\n<img lazy="eager" src="').concat(m("avatars") || !i(t, "currentPreview") ? i(t, "photo") : i(t, "currentPreview"), '" />\n</span>\n<span class="info" itemProp="author" itemScope itemType="http://schema.org/Person">\n<strong class="name" itemProp="name">').concat(i(t, "name"), '</strong>\n<span class="time">').concat(i(t, "lastUpdatedAgo"), '</span>\n</span>\n</a>\n\n<ul class="items"></ul>\n</div>')
                    },
                    timelineStoryItem: function(t) {
                        return '<a href="'.concat(i(t, "src"), '"\ndata-link="').concat(i(t, "link"), '"\ndata-linkText="').concat(i(t, "linkText"), '"\ndata-time="').concat(i(t, "time"), '"\ndata-type="').concat(i(t, "type"), '"\ndata-length="').concat(i(t, "length"), '">\n<img loading="auto" src="').concat(i(t, "preview"), '" />\n</a>')
                    },
                    viewerItem: function(t, e) {
                        return '<div class="story-viewer">\n<div class="head">\n<div class="left">\n'.concat(m("backButton") ? '<a class="back">&lsaquo;</a>' : "", '\n\n<span class="item-preview">\n<img lazy="eager" class="profilePhoto" src="').concat(i(t, "photo"), '" />\n</span>\n\n<div class="info">\n<strong class="name">').concat(i(t, "name"), '</strong>\n<span class="time">').concat(i(t, "timeAgo"), '</span>\n</div>\n</div>\n\n<div class="right">\n<span class="time">').concat(i(e, "timeAgo"), '</span>\n<span class="loading"></span>\n<a class="close" tabIndex="2">&times;</a>\n</div>\n</div>\n\n<div class="slides-pointers">\n<div class="wrap"></div>\n</div>\n\n').concat(m("paginationArrows") ? '<div class="slides-pagination">\n<span class="previous">&lsaquo;</span>\n<span class="next">&rsaquo;</span>\n</div>' : "", "\n</div>")
                    },
                    viewerItemPointer: function(t, e, n) {
                        return '<span \nclass="'.concat(e === t ? "active" : "", " ").concat(!0 === i(n, "seen") ? "seen" : "", '"\ndata-index="').concat(t, '" data-item-id="').concat(i(n, "id"), '">\n<b style="animation-duration:').concat("" === i(n, "length") ? "3" : i(n, "length"), 's"></b>\n</span>')
                    },
                    viewerItemBody: function(t, e, n) {
                        return '<div \nclass="item '.concat(!0 === i(n, "seen") ? "seen" : "", " ").concat(e === t ? "active" : "", '"\ndata-time="').concat(i(n, "time"), '" data-type="').concat(i(n, "type"), '" data-index="').concat(t, '" data-item-id="').concat(i(n, "id"), '">\n').concat("video" === i(n, "type") ? '<video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(i(n, "src"), '" ').concat(i(n, "type"), '></video>\n<b class="tip muted">').concat(m("language", "unmute"), "</b>") : '<img loading="auto" class="media" src="'.concat(i(n, "src"), '" ').concat(i(n, "type"), " />\n"), "\n\n").concat(i(n, "link") ? '<a class="tip link" href="'.concat(i(n, "link"), '" rel="noopener">\n').concat(i(n, "linkText") && "" !== i(n, "linkText") ? i(n, "linkText") : m("language", "visitLink"), "\n</a>") : "", "\n</div>")
                    }
                },
                language: {
                    unmute: "Touch to unmute",
                    keyboardTip: "Press space to see next",
                    visitLink: "Visit link",
                    time: {
                        ago: "ago",
                        hour: "hour ago",
                        hours: "hours ago",
                        minute: "minute ago",
                        minutes: "minutes ago",
                        fromnow: "from now",
                        seconds: "seconds ago",
                        yesterday: "yesterday",
                        tomorrow: "tomorrow",
                        days: "days ago"
                    }
                }
            },
            y = function() {
                var a = e("#zuck-modal");
                a || d.hasModal || (d.hasModal = !0, (a = document.createElement("div")).id = "zuck-modal", m("cubeEffect") && (a.className = "with-cube"), a.innerHTML = '<div id="zuck-modal-content"></div>', a.style.display = "none", a.setAttribute("tabIndex", "1"), a.onkeyup = function(t) {
                    27 === (t = t.keyCode) ? y.close() : (13 === t || 32 === t) && y.next()
                }, m("openEffect") && a.classList.add("with-effects"), r(a, function() {
                    a.classList.contains("closed") && (o.innerHTML = "", a.style.display = "none", a.classList.remove("closed"), a.classList.remove("animated"))
                }), document.body.appendChild(a));
                var o = e("#zuck-modal-content"),
                    l = function(t) {
                        var i = e("#zuck-modal"),
                            n = "",
                            a = "",
                            o = 0,
                            r = e("#zuck-modal-slider-".concat(g)),
                            c = {
                                previous: e("#zuck-modal .story-viewer.previous"),
                                next: e("#zuck-modal .story-viewer.next"),
                                viewing: e("#zuck-modal .story-viewer.viewing")
                            };
                        if (!c.previous && !t || !c.next && t) return !1;
                        t ? (n = "next", a = "previous") : (n = "previous", a = "next"), m("cubeEffect") ? "previous" === n ? o = i.slideWidth : "next" === n && (o = -1 * i.slideWidth) : o = -1 * v(c[n])[0], p(r, o, 600, null), setTimeout(function() {
                            if ("" !== n && c[n] && "" !== a) {
                                var t = c[n].getAttribute("data-story-id");
                                d.internalData.currentStory = t;
                                var i = e("#zuck-modal .story-viewer.".concat(a));
                                i && i.parentNode.removeChild(i), c.viewing && (c.viewing.classList.add("stopped"), c.viewing.classList.add(a), c.viewing.classList.remove("viewing")), c[n] && (c[n].classList.remove("stopped"), c[n].classList.remove(n), c[n].classList.add("viewing")), (i = w(n)) && h(i, n);
                                var o = d.internalData.currentStory;
                                if (i = e('#zuck-modal [data-story-id="'.concat(o, '"]'))) {
                                    var l = (i = i.querySelectorAll("[data-index].active"))[0].firstElementChild;
                                    d.data[o].currentItem = parseInt(i[0].getAttribute("data-index"), 10), i[0].innerHTML = '<b style="'.concat(l.style.cssText, '"></b>'), s(i[0].firstElementChild, function() {
                                        d.nextItem(!1)
                                    })
                                }
                                p(r, "0", 0, null), i && (t = e('#zuck-modal .story-viewer[data-story-id="'.concat(t, '"]')), z(t, [i[0], i[1]], !0)), m("callbacks", "onView")(d.internalData.currentStory);
                                if(document.querySelector(".story-viewer.muted.with-back-button.viewing")){
                                    var storyImpression = document.querySelector(".story-viewer.muted.with-back-button.viewing").dataset.storyId;
                                    console.log(storyImpression);
                                    var visi = new Visilabs;
                                    visi.AddParameter("OM.storyImpression", "Evet"), visi.AddParameter("OM.storyViews", storyImpression), visi.Collect();
                                }
                            }
                        }, 650)
                    },
                    h = function(t, a, o) {
                        var r = e("#zuck-modal-slider-".concat(g)),
                            l = i(t, "items");
                        t.timeAgo = l && l[0] ? f(i(l[0], "time")) : "";
                        var u = "",
                            p = "",
                            v = i(t, "id"),
                            h = document.createElement("div"),
                            b = i(t, "currentItem") || 0;
                        if (e('#zuck-modal .story-viewer[data-story-id="'.concat(v, '"]'))) return !1;
                        h.className = "slides", n(l, function(e, n) {
                            n.timeAgo = f(i(n, "time")), b > e && (t.items[e].timeAgo = n.timeAgo, t.items[e].seen = !0, n.seen = !0), p += m("template", "viewerItemPointer")(e, b, n), u += m("template", "viewerItemBody")(e, b, n)
                        }), h.innerHTML = u;
                        var k = h.querySelector("video"),
                            w = function(t) {
                                t.muted ? x.classList.add("muted") : x.classList.remove("muted")
                            };
                        k && (k.onwaiting = function(t) {
                            k.paused && (x.classList.add("paused"), x.classList.add("loading"))
                        }, k.onplay = function() {
                            w(k), x.classList.remove("stopped"), x.classList.remove("paused"), x.classList.remove("loading")
                        }, k.onload = k.onplaying = k.oncanplay = function() {
                            w(k), x.classList.remove("loading")
                        }, k.onvolumechange = function() {
                            w(k)
                        }), (l = document.createElement("div")).innerHTML = m("template", "viewerItem")(t, b);
                        var x = l.firstElementChild;
                        x.className = "story-viewer muted ".concat(a, " ").concat(o ? "" : "stopped", " ").concat(m("backButton") ? "with-back-button" : ""), x.setAttribute("data-story-id", v), x.querySelector(".slides-pointers .wrap").innerHTML = p, n(x.querySelectorAll(".close, .back"), function(t, e) {
                            e.onclick = function(t) {
                                t.preventDefault(), y.close()
                            }
                        }), x.appendChild(h), "viewing" === a && z(x, x.querySelectorAll('[data-index="'.concat(b, '"].active')), !1), n(x.querySelectorAll(".slides-pointers [data-index] > b"), function(t, e) {
                            s(e, function() {
                                d.nextItem(!1)
                            })
                        }), "previous" === a ? c(r, x) : r.appendChild(x)
                    },
                    b = function(i) {
                        var n, a = e("#zuck-modal"),
                            o = void 0,
                            s = void 0,
                            r = void 0,
                            c = void 0,
                            u = void 0,
                            f = function(t) {
                                var l = e("#zuck-modal .viewing");
                                if ("A" !== t.target.nodeName) {
                                    var d = t.touches ? t.touches[0] : t,
                                        m = v(e("#zuck-modal .story-viewer.viewing"));
                                    a.slideWidth = e("#zuck-modal .story-viewer").offsetWidth, a.slideHeight = e("#zuck-modal .story-viewer").offsetHeight, n = m[0], m = d.pageY, o = {
                                        x: d.pageX,
                                        y: m,
                                        time: Date.now(),
                                        valid: !0
                                    }, 80 > m || m > a.slideHeight - 80 ? o.valid = !1 : (t.preventDefault(), s = void 0, r = {}, i.addEventListener("mousemove", g), i.addEventListener("mouseup", h), i.addEventListener("mouseleave", h), i.addEventListener("touchmove", g), i.addEventListener("touchend", h), l && l.classList.add("paused"), A(), c = setTimeout(function() {
                                        l.classList.add("longPress")
                                    }, 600), u = setTimeout(function() {
                                        clearInterval(u), u = !1
                                    }, 250))
                                }
                            },
                            g = function(t) {
                                var e = t.touches ? t.touches[0] : t,
                                    a = e.pageX;
                                e = e.pageY, o && o.valid && (r = {
                                    x: a - o.x,
                                    y: e - o.y
                                }, void 0 === s && (s = !!(s || Math.abs(r.x) < Math.abs(r.y))), !s && o && (t.preventDefault(), p(i, n + r.x, 0, null)))
                            },
                            h = function v(f) {
                                var h = e("#zuck-modal .viewing"),
                                    y = o;
                                if (!o || o.valid) {
                                    if (r) {
                                        var b = o ? Date.now() - o.time : void 0;
                                        b = 300 > Number(b) && 25 < Math.abs(r.x) || Math.abs(r.x) > a.slideWidth / 3;
                                        var k = 0 > r.x,
                                            w = e(k ? "#zuck-modal .story-viewer.next" : "#zuck-modal .story-viewer.previous");
                                        s || (!b || k && !w || !k && !w ? p(i, n, 300) : l(k)), o = void 0, i.removeEventListener("mousemove", g), i.removeEventListener("mouseup", v), i.removeEventListener("mouseleave", v), i.removeEventListener("touchmove", g), i.removeEventListener("touchend", v)
                                    }
                                    if (b = d.internalData.currentVideoElement, c && clearInterval(c), h && (z(h, h.querySelectorAll(".active"), !1), h.classList.remove("longPress"), h.classList.remove("paused")), u) {
                                        if (clearInterval(u), u = !1, h = function() {
                                                y.x > t.screen.width / 3 || !m("previousTap") ? d.navigateItem("next", f) : d.navigateItem("previous", f)
                                            }, !(k = e("#zuck-modal .viewing")) || !b) return h(), !1;
                                        k.classList.contains("muted") ? E(b, k) : h()
                                    }
                                }
                            };
                        i.addEventListener("touchstart", f), i.addEventListener("mousedown", f)
                    };
                return {
                    show: function(i, n) {
                        var a = e("#zuck-modal");
                        m("callbacks", "onOpen")(i, function() {
                            o.innerHTML = '<div id="zuck-modal-slider-'.concat(g, '" class="slider"></div>');
                            var n = d.data[i],
                                s = n.currentItem || 0,
                                r = e("#zuck-modal-slider-".concat(g));
                            b(r), d.internalData.currentStory = i, n.currentItem = s, m("backNative") && (t.location.hash = "#!".concat(g)), (s = w("previous")) && h(s, "previous"), h(n, "viewing", !0), (n = w("next")) && h(n, "next"), m("autoFullScreen") && a.classList.add("fullscreen");
                            var c = function() {
                                a.classList.contains("fullscreen") && m("autoFullScreen") && 1024 >= t.screen.width && u(a), a.focus()
                            };
                            m("openEffect") ? (n = e("#".concat(g, ' [data-id="').concat(i, '"] .item-preview')), s = v(n), a.style.marginLeft = "".concat(s[0] + n.offsetWidth / 2, "px"), a.style.marginTop = "".concat(s[1] + n.offsetHeight / 2, "px"), a.style.display = "block", a.slideWidth = e("#zuck-modal .story-viewer").offsetWidth, setTimeout(function() {
                                a.classList.add("animated")
                            }, 10), setTimeout(function() {
                                c()
                            }, 300)) : (a.style.display = "block", a.slideWidth = e("#zuck-modal .story-viewer").offsetWidth, c()), m("callbacks", "onView")(i)
                        })
                        if(document.querySelector(".story-viewer.muted.with-back-button.viewing")){
                            var storyImpression = document.querySelector(".story-viewer.muted.with-back-button.viewing").dataset.storyId;
                            console.log(storyImpression);
                            var visi = new Visilabs;
                            visi.AddParameter("OM.storyImpression", "Evet"), visi.AddParameter("OM.storyViews", storyImpression), visi.Collect();
                        }
                    },
                    next: function(t) {
                        m("callbacks", "onEnd")(d.internalData.currentStory, function() {
                            var t = d.internalData.currentStory,
                                i = e("#".concat(g, ' [data-id="').concat(t, '"]'));
                            i && (i.classList.add("seen"), d.data[t].seen = !0, d.internalData.seenItems[t] = !0, I("seenItems", d.internalData.seenItems), x()), e("#zuck-modal .story-viewer.next") ? l(!0) : y.close()
                        })
                    },
                    close: function() {
                        var i = e("#zuck-modal");
                        m("callbacks", "onClose")(d.internalData.currentStory, function() {
                            m("backNative") && (t.location.hash = ""), u(i, !0), m("openEffect") ? i.classList.add("closed") : (o.innerHTML = "", i.style.display = "none")
                        })
                    }
                }
            }(),
            b = function(t, e) {
                var i = t.getAttribute("data-id"),
                    a = document.querySelectorAll("#".concat(g, ' [data-id="').concat(i, '"] .items > li')),
                    o = [];
                m("reactive") && !e || (n(a, function(t, e) {
                    var i = e.firstElementChild,
                        n = i.firstElementChild;
                    o.push({
                        id: i.getAttribute("data-id"),
                        src: i.getAttribute("href"),
                        length: i.getAttribute("data-length"),
                        type: i.getAttribute("data-type"),
                        time: i.getAttribute("data-time"),
                        link: i.getAttribute("data-link"),
                        linkText: i.getAttribute("data-linkText"),
                        preview: n.getAttribute("src")
                    })
                }), d.data[i].items = o, (i = m("callbacks", "onDataUpdate")) && i(d.data, function() {}))
            },
            k = function(t, e) {
                var i = t.getAttribute("data-id"),
                    n = !1;
                d.internalData.seenItems[i] && (n = !0);
                try {
                    d.data[i] || (d.data[i] = {}), d.data[i].id = i, d.data[i].photo = t.getAttribute("data-photo"), d.data[i].name = t.querySelector(".name").innerText, d.data[i].link = t.querySelector(".item-link").getAttribute("href"), d.data[i].lastUpdated = t.getAttribute("data-last-updated"), d.data[i].seen = n, d.data[i].items || (d.data[i].items = [], d.data[i].noItems = !0)
                } catch (t) {
                    d.data[i] = {
                        items: []
                    }
                }
                t.onclick = function(t) {
                    t.preventDefault(), y.show(i)
                }, (n = m("callbacks", "onDataUpdate")) && n(d.data, function() {})
            },
            w = function(t) {
                var i = d.internalData.currentStory;
                return t = "".concat(t, "ElementSibling"), !(!i || !(i = e("#".concat(g, ' [data-id="').concat(i, '"]'))[t])) && (i = i.getAttribute("data-id"), d.data[i] || !1)
            },
            x = function() {
                n(document.querySelectorAll("#".concat(g, " .story.seen")), function(t, e) {
                    var i = d.data[e.getAttribute("data-id")],
                        n = e.parentNode;
                    m("reactive") || n.removeChild(e), d.update(i, !0)
                })
            },
            z = function(t, e, i) {
                var n = e[1],
                    o = e[0];
                if (!n || !o) return !1;
                if ((e = d.internalData.currentVideoElement) && e.pause(), "video" === n.getAttribute("data-type")) {
                    var s = n.getElementsByTagName("video")[0];
                    if (!s) return d.internalData.currentVideoElement = !1;
                    (n = function() {
                        s.duration && a(o.getElementsByTagName("b")[0].style, "AnimationDuration", "".concat(s.duration, "s"))
                    })(), s.addEventListener("loadedmetadata", n), d.internalData.currentVideoElement = s, s.play(), i && i.target && E(s, t)
                } else d.internalData.currentVideoElement = !1
            },
            A = function() {
                var t = d.internalData.currentVideoElement;
                if (t) try {
                    t.pause()
                } catch (t) {}
            },
            E = function(t, e) {
                t.muted = !1, t.volume = 1, t.removeAttribute("muted"), t.play(), t.paused && (t.muted = !0, t.play()), e && e.classList.remove("paused")
            },
            I = function(e, i) {
                try {
                    if (m("localStorage")) {
                        var n = "zuck-".concat(g, "-").concat(e);
                        t.localStorage[n] = JSON.stringify(i)
                    }
                } catch (t) {}
            },
            S = function(e) {
                return !!m("localStorage") && (e = "zuck-".concat(g, "-").concat(e), !!t.localStorage[e] && JSON.parse(t.localStorage[e]))
            };
        return d.data = m("stories") || {}, d.internalData = {}, d.internalData.seenItems = S("seenItems") || {}, d.add = d.update = function(t, a) {
                var s = i(t, "id"),
                    r = e("#".concat(g, ' [data-id="').concat(s, '"]')),
                    l = i(t, "items"),
                    u = void 0;
                u = !1, l[0] && (u = l[0].preview || ""), !0 === d.internalData.seenItems[s] && (t.seen = !0), t.currentPreview = u, r ? u = r : ((u = document.createElement("div")).innerHTML = m("template", "timelineItem")(t), u = u.firstElementChild), !1 === t.seen && (d.internalData.seenItems[s] = !1, I("seenItems", d.internalData.seenItems)), u.setAttribute("data-id", s), u.setAttribute("data-photo", i(t, "photo")), u.setAttribute("data-last-updated", i(t, "lastUpdated")), k(u), r || m("reactive") || (a ? o.appendChild(u) : c(o, u)), n(l, function(t, e) {
                    d.addItem(s, e, a)
                }), a || x()
            }, d.next = function() {
                y.next()
            }, d.remove = function(t) {
                (t = e("#".concat(g, ' > [data-id="').concat(t, '"]'))).parentNode.removeChild(t)
            }, d.addItem = function(t, n, a) {
                if (t = e("#".concat(g, ' > [data-id="').concat(t, '"]')), !m("reactive")) {
                    var o = document.createElement("li"),
                        s = t.querySelectorAll(".items")[0];
                    o.className = i(n, "seen") ? "seen" : "", o.setAttribute("data-id", i(n, "id")), o.innerHTML = m("template", "timelineStoryItem")(n), a ? s.appendChild(o) : c(s, o)
                }
                b(t)
            }, d.removeItem = function(t, i) {
                var n = e("#".concat(g, ' > [data-id="').concat(t, '"] [data-id="').concat(i, '"]'));
                m("reactive") || o.parentNode.removeChild(n)
            }, d.navigateItem = d.nextItem = function(t, i) {
                var a = d.internalData.currentStory,
                    o = d.data[a].currentItem,
                    s = e('#zuck-modal .story-viewer[data-story-id="'.concat(a, '"]')),
                    r = "previous" === t ? -1 : 1;
                if (!s || 1 === s.touchMove) return !1;
                var c = s.querySelectorAll('[data-index="'.concat(o, '"]')),
                    l = c[0],
                    u = c[1],
                    p = s.querySelectorAll('[data-index="'.concat(o + r, '"]')),
                    v = p[0],
                    g = p[1];
                s && v && g ? (o = (o = m("callbacks", "onNavigateItem")) ? m("callbacks", "onNavigateItem") : m("callbacks", "onNextItem"))(a, g.getAttribute("data-story-id"), function() {
                    "previous" === t ? (l.classList.remove("seen"), u.classList.remove("seen")) : (l.classList.add("seen"), u.classList.add("seen")), l.classList.remove("active"), u.classList.remove("active"), v.classList.remove("seen"), v.classList.add("active"), g.classList.remove("seen"), g.classList.add("active"), n(s.querySelectorAll(".time"), function(t, e) {
                        e.innerText = f(g.getAttribute("data-time"))
                    }), d.data[a].currentItem += r, z(s, p, i)
                }) : s && "previous" !== t && y.next(i)
            },
            function() {
                if (o && o.querySelector(".story") && n(o.querySelectorAll(".story"), function(t, e) {
                        k(e)
                    }), m("backNative") && (t.location.hash === "#!".concat(g) && (t.location.hash = ""), t.addEventListener("popstate", function(e) {
                        t.location.hash !== "#!".concat(g) && (t.location.hash = "")
                    }, !1)), !m("reactive")) {
                    var e = S("seenItems");
                    for (i in e) e.hasOwnProperty(i) && d.data[i] && (d.data[i].seen = e[i])
                }
                n(m("stories"), function(t, e) {
                    d.add(e, !0)
                }), x(), e = m("avatars") ? "user-icon" : "story-preview";
                var i = m("list") ? "list" : "carousel";
                return o.className += " stories ".concat(e, " ").concat(i, " ").concat("".concat(m("skin")).toLowerCase()), d
            }()
    }).buildTimelineItem = function(t, e, i, a, o, s) {
        var r = {
            id: t,
            photo: e,
            name: i,
            link: a,
            lastUpdated: o,
            items: []
        };
        return n(s, function(t, e) {
            r.items.push(l.buildStoryItem.apply(l, e))
        }), r
    }, l.buildItem = l.buildStoryItem = function(t, e, i, n, a, o, s, r, c) {
        return {
            id: t,
            type: e,
            length: i,
            src: n,
            preview: a,
            link: o,
            linkText: s,
            seen: r,
            time: c
        }
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports.ZuckJS = l) : t.ZuckitaDaGalera = t.Zuck = l;
    window.innerWidth < 768 && function() {
        jQuery("header.Header").after('<div id="stories" class="storiesWrapper" style="padding: 12px;max-width: 500px;margin: 0 auto;"></div>'), jQuery("head").append('<style>\t\t\t.stories.carousel .story>.item-link>.info{line-height: 0.9em !important;}\t\t\t.stories.carousel .story>.item-link>.info .name {font-size: 11px !important;white-space: normal !important;font-weight: 700 !important;}\t\t\t#zuck-modal-content .story-viewer .head .left .info .name {font-weight: 700 !important; font-size: 14px !important;}\t\t\t#zuck-modal-content .story-viewer .head .left .info {max-width: 60vw !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="SEV"] .slides .item {background: #21b134 !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="YAŞA"] .slides .item {background: #00ADE5 !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="YE-İÇ"] .slides .item {background: #9a166c !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="ASTROLOJİ"] .slides .item {background: #2b2e7a !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="CİGNA FİNANS"] .slides .item {background: #0282cc !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="TEST"] .slides .item {background: #df5052 !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="HAREKET ET"] .slides .item {background: #f67502 !important;}\t\t\t#zuck-modal-content .story-viewer .slides .item.active .tip.link {width: 75% !important;border-radius: 10px !important; font-size: 4.5vw !important; font-weight: 700 !important; padding: 15px !important; line-height: 25px !important;border: 1px solid #fff; -webkit-animation-name: buttonAnimations;-webkit-animation-duration: 4s;-webkit-animation-iteration-count: infinite;-webkit-animation-direction: alternate;animation-name: buttonAnimations;animation-duration: .7s;animation-iteration-count: infinite;animation-direction: alternate;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="SEV"] .slides .item.active .tip.link{background-color: #21B233 !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="YAŞA"] .slides .item.active .tip.link{background-color: #00ADE5 !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="YE-İÇ"] .slides .item.active .tip.link{background-color: #b0007f !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="ASTROLOJİ"] .slides .item.active .tip.link{background-color: #2b2e7a !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="CİGNA FİNANS"] .slides .item.active .tip.link{background-color: #0282cc !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="TEST"] .slides .item.active .tip.link{background-color: #E05251 !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer[data-story-id="HAREKET ET"] .slides .item.active .tip.link{background-color: #F67500 !important; color: #ffffff !important;}\t\t\t#zuck-modal-content .story-viewer .close{display: block !important; color: white !important;height: 35px !important;width: 30px !important;line-height: 25px !important;font-size: 35px !important;}\t\t\t#zuck-modal-content .story-viewer .head .left>.back {display:none !important;}\t\t\t#zuck-modal-content .story-viewer .item img.media{width: auto !important; height: 100% !important}\t\t\t#zuck-modal-content .story-viewer.with-back-button .head .left .item-preview {margin-left: 0px !important;}\t\t\t@-webkit-keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}\t\t\t@keyframes buttonAnimations{0%{bottom:20px}10%{bottom:21px}20%{bottom:22px}30%{bottom:23px}40%{bottom:24px}50%{bottom:25px}60%{bottom:26px}70%{bottom:27px}80%{bottom:28px}90%{bottom:29px}100%{bottom:30px}}\t\t</style>');
        var t = [];
        t.push(Zuck.buildTimelineItem("YE-İÇ", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180449548.png", "YE-İÇ", "", "", [
            ["YE-İÇ", "video", 8, "https://euromsg.zendesk.com/attachments/token/xZLuDEYqzJrloAzShhosmaUXf/?name=YEIC.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180449548.png", "https://www.iyihisset.com/ye-ic/saglikli-tuyolar/agiz-ve-dis-sagligiyla-ilgili-dogru-bilinen-5-yanlis?OM.story=YE-IC", "YAZIYI OKUMAK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("CİGNA FİNANS", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330175857191.jpg", "CİGNA FİNANS", "", "", [
            ["CİGNA FİNANS", "video", 8, "https://euromsg.zendesk.com/attachments/token/WVcAp3fRFkBV7TGawXIWIsM5R/?name=7_24_SAGLIKLI_HAYAT.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330175857191.jpg", "https://www.cignafinans.com.tr/724-saglikli-hayat-sigortasi?OM.zn=acttype-4&OM.zpc=act-10&OM.story=CIGNAFINANS", "SİTEYE GİTMEK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("YAŞA", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180422031.png", "YAŞA", "", "", [
            ["YAŞA", "video", 8, "https://euromsg.zendesk.com/attachments/token/yqvDQM4taoSyb6TadV5hIJU52/?name=YASA.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180422031.png", "https://www.iyihisset.com/yasa/teknoloji/dijitallesmenin-hayatimiza-getirdigi-5-yenilik?OM.zn=acttype-4&OM.zpc=act-10&OM.story=YASA", "YAZIYI OKUMAK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("SEV", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180307904.png", "SEV", "", "", [
            ["SEV", "video", 8, "https://euromsg.zendesk.com/attachments/token/7aiMsWpl8YSKS8FHLESwhESxh/?name=SEV.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180307904.png", "https://www.iyihisset.com/sev/cocuk/cocugunuzun-internet-bagimliliginin-onune-gecin?OM.zn=acttype-4&OM.zpc=act-10&OM.story=SEV", "YAZIYI OKUMAK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("TEST", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200331114018242.png", "TEST", "", "", [
            ["TEST", "video", 8, "https://euromsg.zendesk.com/attachments/token/SfMaKblkpE25j2BSutdCXLv24/?name=TEST.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200331114018242.png", "https://www.iyihisset.com/test/renk-testi-ile-ruh-halini-ogren?OM.zn=acttype-4&OM.zpc=act-10&OM.story=TEST", "TESTİ ÇÖZMEK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("ASTROLOJİ", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330175827584.png", "ASTROLOJİ", "", "", [
            ["ASTROLOJİ", "video", 8, "https://euromsg.zendesk.com/attachments/token/CfMyhBZfubZ5N5zKTKGCJQjTa/?name=ASTROLOJI.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330175827584.png", "https://www.iyihisset.com/astroloji?OM.zn=acttype-4&OM.zpc=act-10&OM.story=ASTROLOJI", "YAZIYI OKUMAK İÇİN TIKLAYINIZ", !1, ""]
        ])), t.push(Zuck.buildTimelineItem("HAREKET ET", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180240897.png", "HAREKET ET", "", "", [
            ["HAREKET ET", "video", 8, "https://euromsg.zendesk.com/attachments/token/5tQe6F2BmnnXeQc4iZ2y2yEAT/?name=HAREKET_ET.mp4", "https://img.visilabs.net/banner/uploaded_images/246_1246_20200330180240897.png", "https://www.iyihisset.com/hareket-et/yoga-pilates/bu-yoga-hareketleri-stresinizi-atmanizi-sagliyor?OM.zn=acttype-4&OM.zpc=act-10&OM.story=HAREKET-ET", "YAZIYI OKUMAK İÇİN TIKLAYINIZ", !1, ""]
        ])), new Zuck("stories", {
            backNative: !0,
            previousTap: !0,
            skin: "Snapgram",
            autoFullScreen: !0,
            avatars: !1,
            paginationArrows: !1,
            list: !1,
            cubeEffect: !0,
            openEffect: !0,
            localStorage: !1,
            stories: t
        });
        try {
            VLSendImpressionFunc(10, 4)
        } catch (t) {}
    }()
}();