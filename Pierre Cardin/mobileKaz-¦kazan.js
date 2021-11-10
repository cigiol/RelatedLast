var copyButton = document.createElement("button");
var stop = 0;
var kazı = 0;
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return;

        if (document.querySelector("#VisilabsScratchToWinBox_70")) {

            observer.disconnect();
            if (stop == 0) {
                

                var scratchArea = document.querySelector("#VisilabsScratchToWinBox_70");
                scratchArea.style = "position: absolute;bottom: 125px;left: 40px;height: 45px;width: 170px;overflow: hidden;display: block;margin: auto;";
                scratchArea.addEventListener("touchstart", function () {

                    if (kazı == 0) {
                        <%VLSendClickFunc%>;
                    }

                    kazı++;

                });

                document.querySelector("#visi_lightbox_content_fixed").append(copyButton);
                copyButton.setAttribute("class", "vl-copy-button");
                copyButton.style = "width: 77px;height: 20px;position: absolute;bottom: 33px;left: 87px;opacity: 0;";
                copyButton.addEventListener("click", function () {
                    if (kazı>0) {
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


                document.querySelector("#visi_lightbox_content_fixed").style.width="250px";
                document.querySelector("#visi_lightbox_content_fixed").style.height="350px";

                document.querySelector("#visi_lightbox_popbox").style.padding = "0px";

                document.querySelector("#VisilabsScratchToWinBox_70 > canvas").style.width="170px";
                document.querySelector("#VisilabsScratchToWinBox_70 > canvas").style.height="45px";

                document.querySelector("#VisilabsScratchToWinCanvas_70").style.height="45px";
                document.querySelector("#VisilabsScratchToWinCanvas_70").style.width="170px";

                document.querySelector("#img_lightbox_close").style.top = "0px";
                document.querySelector("#img_lightbox_close").style.right = "0px";


                document.querySelector("#visilabs_copytoclipboard_btn").style.opacity="0";

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