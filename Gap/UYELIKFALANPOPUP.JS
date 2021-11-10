! function() {
    getUserID = function() {
        var t;
        for (i = 0; i < dataLayer.length; i++)
            if (void 0 !== dataLayer[i].cd_userId) {
                t = dataLayer[i].cd_userId;
                break
            } return t
    };
    var t = document.createElement("script");
    t.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"), t.onload = function() {
        if ("None" === getUserID()) {
            var t = "<style>\t\t\t\t#vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\t\t\t\t#vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 10px;width: 1000px; height: 532px;left: 0;right: 0;top: 0;bottom: 0;background-image: url(https://img.visilabs.net/banner/uploaded_images/92_729_20200514123911775.jpg); background-repeat: no-repeat; cursor: pointer; animation: shake-animation 4.72s ease 2;}\t\t\t\t#vl-close{position: absolute;height: 25px; width: 25px; right: 8px;top: 6px; opacity: 0; font-size: 24px; color: white; background-color: black; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\t\t\t\t@keyframes shake-animation {0% { transform:translate(0,0) }1.78571% { transform:translate(5px,0) }3.57143% { transform:translate(0,0) }5.35714% { transform:translate(5px,0) }7.14286% { transform:translate(0,0) }8.92857% { transform:translate(5px,0) }10.71429% { transform:translate(0,0) }100% { transform:translate(0,0) }}\t\t\t\t@media only screen and (max-width: 768px){\t\t\t\t\t#vl-container{background-image: url(https://img.visilabs.net/banner/uploaded_images/92_729_20200514123931171.jpg); width: 100%; height: " + window.innerWidth * 1.2 + "px; animation: none; background-size: contain; top: auto; border-radius: 0; transition: 1s all;}\t\t\t\t\t#vl-close{right: 8px;top:3px;}\t\t\t\t}\t\t\t</style>";
            jQuery("head").append(t), jQuery("body").append('<div id="vl-overlay"/><div id="vl-container"><div id="vl-close">x</div></div>'), window.innerWidth < 768 && jQuery("#vl-container").css("bottom", "0"), jQuery("#vl-overlay, #vl-close").click(function() {
                jQuery("#vl-container, #vl-overlay").remove()
            }), jQuery("#vl-container").click(function() {
                localStorage.setItem("OM.singupDiscount", !0), window.location = "https://gap.com.tr/login/?next=/&?OM.zn=acttype-4&OM.zpc=act-75"
            })
        }
    }, document.head.appendChild(t)
}();