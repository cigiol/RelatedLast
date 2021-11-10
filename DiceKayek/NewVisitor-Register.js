if (!document.querySelector(".vl-signup")) {
    var style = document.createElement("style");
    style.innerHTML = `
    .vl-signup{
        position:fixed;
        top:15px;
        right:45px;
        z-index:100;
    }
    .vl-register-close{
        position: absolute;
        right: 5px; 
        top: 5px;  
        cursor: pointer; 
        z-index: 100002;     
        width:25px;
        height:25px;
    }
`;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("class", "vl-signup")
    div.innerHTML = `
    <a class="vl-register-link" href="https://dicekayek.com/account/register"><img src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210119093501399.jpg"></a>
    <img class="vl-register-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
`;
    document.body.append(div);
    <%VLSendImpressionFunc%>;
    document.querySelector(".vl-register-close").addEventListener("click", function () {
        document.querySelector(".vl-signup").remove();
    });

    document.querySelector(".vl-register-link").addEventListener("click", function () {
       <%VLSendClickFunc%>;
    });
}