function SocialProofCallback(t) {
    if (t.view *= 3, t.purchase *= 2, t.view > 0) {
        (r = document.createElement("style")).innerHTML = "\n        @keyframes zoomInAnimation {\n            0% {\n                transform: scale(0.8,0.8);\n            }\n            100% {\n                transform: scale(1,1);\n            }\n        }\n        @keyframes zoomOutAnimation {\n            0% {\n                transform: scale(1,1);\n            }\n            100% {\n                transform: scale(0,0);\n            }\n        }\n        \n        #productStatNotifierModal {\n            display: none;\n            position: sticky;\n            z-index: 999999;\n            bottom: 10px;\n            width: 350px;\n            height: 60px;\n            margin-left: 10px;\n            overflow: hidden;\n            background-color: rgba(9, 72, 112, 0.85);\n            border-radius: 6px;\n            display: block;\n            animation: zoomInAnimation 2s forwards;\n        }\n\n        #productStatNotifierModal .content {\n            background: url(https://www.robotistan.com/Data/EditorFiles/kurgular/urun-istatistik/logo-smile.png);\n            background-size: 38px;\n            background-repeat: no-repeat;\n            margin: auto;\n            width: 100%;\n            height: 60px;\n            display: table-cell;\n            vertical-align: middle;\n            padding-left: 60px;\n            line-height: 16px;\n            font-size: 15px;\n            color: #fff;\n            cursor: pointer;\n        }\n\n        #productStatNotifierModal .close-button {\n            position: absolute;\n            color: #fff;\n            top: 0px;\n            right: 4px;\n            cursor: pointer;\n        }\n", document.head.appendChild(r),
            function() {
                var e = document.createElement("div");
                e.style.float="right";
                e.id = "productStatNotifierModal", t.purchase > 0 ? e.innerHTML = '\n        <div class="close-button">×</div>\n        <div class="content">\n            Son 24 saatte;<br />\n            ' + t.view + " kişi bu ürüne baktı.\n            <br />" + t.purchase + " kişi satın aldı.\n        </div>" : e.innerHTML = '\n        <div class="close-button">×</div>\n        <div class="content">\n            Son 24 saatte;<br />\n            ' + t.view + " kişi bu ürüne baktı.\n         </div>";
                var n = document.querySelector("#mainColumn");
                n && n.appendChild(e), document.getElementById("productStatNotifierModal").style.display = "block"
            }();
        var e = document.querySelector("#productStatNotifierModal .content"),
            n = document.querySelector("#productStatNotifierModal .close-button");

        function i() {
            var t = document.querySelector("#productStatNotifierModal");
            t && (t.style.animation = "zoomOutAnimation 1s forwards", setTimeout(function() {
                t.remove()
            }, 700))
        }
        e.addEventListener("click", i), n.addEventListener("click", i)
    }
    var r
}
var visiString = JSON.stringify(VisiParameters);
visiString.substring(1, visiString.length - 1).split(",");
for (var visiParams = visiString.substring(1, visiString.length - 1).split(","), vl = new Visilabs, i = 0; i < visiParams.length; i++) {
    var curParam = visiParams[i].split(":");
    vl.AddParameter(eval(curParam[0]), eval(curParam[1]))
}

function SAT_VisilabsTarget(t, e, n, i) {
    this.ID = "_VisilabsTarget_" + _VTObjIDs.toString(), this.Owner = e, this.ContentID = t, this.OnCallback = n, this.OnErrorCallback = i, this.Parameters = new Object, this.Completed = !1, this.RequestStartTime = null, _VTObjs[this.ID] = this, _VTObjIDs++
}
vl.AddParameter("OM.s_psn", 1), SAT_VisilabsTarget.prototype.Callback = function(t, e, n, i, r, o, a) {
    var s = {
        view: 0,
        basket: 0,
        purchase: 0
    };
    t.forEach(t => {
        if (t.actiontype = "ProductStatNotifier") try {
            var e = JSON.parse(t.actiondata.content);
            s[e.key] = e.value
        } catch (t) {}
    }), SocialProofCallback(s)
}, SAT_VisilabsTarget.prototype.collect = function(t) {
    this.Completed = !1;
    var e = this,
        n = null,
        i = new Date,
        r = this.Owner.RequestProtocol + "://" + this.Owner.TargetURL + t + "?OM.cookieID=" + this.Owner.CookieID + "&OM.oid=" + this.Owner.OrganizationID + "&OM.siteID=" + this.Owner.SiteID + "&OM.obj=" + encodeURIComponent('_VTObjs["' + this.ID + '"]') + "&dat=" + i.toUTCString(),
        o = this.Owner.GetCookie(this.TVisitCookieName),
        a = this.Owner.GetCookie(this.TVisitorCookieName),
        s = this.Owner.GetCookie(this.BannerVisitCookieName),
        l = this.Owner.GetCookie(this.BannerVisitorCookieName),
        c = this.Owner.GetCookie(this.ABTestCookieName),
        d = this.Owner.GetCookie(this.ABTestWidgetCookieName),
        u = this.Owner.GetCookie(this.CDBCookieName);
    for (var m in this.Owner.WriteExVisitorID(), this.Parameters) r += "&" + m + "=" + this.Parameters[m];
    for (var m in this.Owner.OnExVisitorIDChanged(), this.Owner.WriteCookieParameters(), this.Owner.TrackHandler("check"), this.Owner.Parameters) "undefined" != this.Parameters[m] && null != this.Parameters[m] && "" != this.Parameters[m] || (r += "&" + m + "=" + this.Owner.Parameters[m]);
    null != o && "" != o && (r += "&OM.vcap=" + PrepEncoded(o)), null != a && "" != a && (r += "&OM.viscap=" + PrepEncoded(a)), null != s && "" != s && (r += "&OM.bvcap=" + PrepEncoded(s)), null != l && "" != l && (r += "&OM.bviscap=" + PrepEncoded(l)), null != c && "" != c && (r += "&OM.ab.ck=" + PrepEncoded(c)), null != d && "" != d && (r += "&OM.abw.ck=" + PrepEncoded(d)), null != u && "" != u && (r += "&OM.cd=" + PrepEncoded(u)), (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = r, n.onerror = function() {
        e.OnError()
    }, document.getElementsByTagName("head")[0].appendChild(n), this.OnErrorCallback && null != this.OnErrorCallback && setTimeout(function() {
        e.CheckRequestTimeout()
    }, e.RequestTimeout)
};
var VTarget = new SAT_VisilabsTarget(null, vl, null, null);
VTarget.collect("act.js");