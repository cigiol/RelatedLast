var exitCheck = false;
function exitPopupCode() {
    var popupStyle = document.createElement("style");
        popupStyle.innerHTML = "#vl-section {position:fixed;width: 100%;height:100%;top: 50%;left:50%;transform: translate(-50%,-50%);background-color:rgba(0,0,0,0.5);z-index:9999}"+
        "#vl-wrapper{width: 100%;max-width: 600px;position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%);}"+
        "#vl-image {cursor: pointer;}"+
        "#vl-close {top: 7px;right: 10.5px;position: fixed;color: #000;font-family: Arial;font-size: 17px;font-weight: bold;cursor: pointer;}";
        document.head.appendChild(popupStyle);

        var popupSection = document.createElement("section");
        popupSection.id = "vl-section";

        var popupWrapper = document.createElement("div");
        popupWrapper.id = "vl-wrapper";

        var popupImage = document.createElement("img");
        popupImage.id = "vl-image";

        var popupClose = document.createElement("span");
        popupClose.id = "vl-close";
        popupClose.innerText = "X";

        document.body.appendChild(popupSection);
        popupSection.appendChild(popupWrapper);
        popupWrapper.appendChild(popupImage);
        popupWrapper.appendChild(popupClose);
        exitCheck = true;
    popupClose.addEventListener("click", closePopup);
    popupImage.addEventListener("click", useCoupon);
}
function closePopup() {
    document.querySelector("#vl-section").remove();
}
function useCoupon(){
    jQuery('#CouponCodeInput').val("JK30HEDIYE");
    jQuery('#UseCoupon').click();
    document.querySelector("#vl-section").remove();
    console.log("Kupon kodunuz sepetine uygulandı");
}
document.addEventListener("mouseleave", function (e) {
    var totalPrice = parseFloat(document.querySelector("#SepetToplamTutarTahsilEdilecek").innerText.replace(" TL","").replace(",","."));
    if (e.clientY < 0 && exitCheck == false && totalPrice >= 200) {
        if (totalPrice >= 200 && totalPrice < 300) {
            exitPopupCode();
            document.querySelector("#vl-image").src = "https://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/files/Terk-kupon-20.jpg";
        } else if (totalPrice >= 300 && totalPrice < 500) {
            exitPopupCode();
            document.querySelector("#vl-image").src = "https://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/files/Terk-kupon-30.jpg";
        } else {
            exitPopupCode();
            document.querySelector("#vl-image").src = "https://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/files/Terk-kupon-50.jpg";
        }
        
    }
}, false);