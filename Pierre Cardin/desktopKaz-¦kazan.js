var copyButton = document.createElement("button");
var stop = 0;
var kazı = 0;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return;

        if (document.querySelector("#VisilabsScratchToWinBox_66")) {

            observer.disconnect();
            if (stop == 0) {
                document.querySelector("#visilabs_copytoclipboard_btn").style.opacity="0";

                var scratchArea = document.querySelector("#VisilabsScratchToWinBox_66");
                scratchArea.style = "position: absolute;bottom: 220px;left: 45px;";
                scratchArea.addEventListener("mousedown", function () {

                    if (kazı == 0) {
                        <%VLSendClickFunc%>;
                    }

                    kazı++;

                });

               
                document.querySelector("#visi_lightbox_content_fixed").append(copyButton);
                document.querySelector("#visi_lightbox_content_fixed").style=" position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);opacity: 1;z-index: 1000004;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";

                copyButton.setAttribute("class", "vl-copy-button");
                copyButton.style = "width: 109px;height: 28px;position: absolute;bottom: 46px;left: 121px;opacity: 0;";
                copyButton.addEventListener("click", function () {
                    if (kazı >0) {
                        var copyText = "5İNDİRİM";
                        var elem = document.createElement("textarea");
                        document.body.appendChild(elem);
                        elem.value = copyText;
                        elem.select();
                        document.execCommand("copy");
                        document.body.removeChild(elem);
                        alert("Kupon kodunuz kopyalanmıştır");
                    }

                });



                document.querySelector("#visi_lightbox_popbox").style.padding = "0px";

                document.querySelector("#img_lightbox_close").style.top = "0px";
                document.querySelector("#img_lightbox_close").style.right = "0px";



            }
            stop++;

        }

    })
});
<%VLSendImpressionFunc%>;

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
});