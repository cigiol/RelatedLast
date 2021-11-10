window.onscroll = function () { scrollDetectFunction() };


var once = true;

function scrollDetectFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        if (once) {
            if (!document.querySelector("#vl-cookieBox")) {
                if (!document.querySelector("#vl-cookieBox") && document.cookie.indexOf("vl-cookieBox") == -1) {
                    cerez();
                <%VLSendImpressionFunc%>;
                }
            }
        }
    }
}


function cerez() {
    var style = document.createElement("style");
    style.innerHTML = `#vl-cookieBox{
        position: fixed;
        background: lightgrey;
        opacity: 1;
        color: black;
        padding: 10px;
        bottom: 0px;
        left: 0px;
        width: 100%;
        z-index: 100000;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: 'ScalaSansPro-Bold';
    }
    .vl-button{
        cursor: pointer;
        padding: 10px 20px;
        color: black;
        float: right;
        border: 1px solid black;
        text-align: center;
    }
@media screen and (max-width: 960px){
    .vl-button{
        padding: 5px 10px;
    }
`;
    document.head.append(style);

    var div = document.createElement('div');
    div.setAttribute("id", "vl-cookieBox");
    div.innerHTML = `<div class='vl-text'><p>Web sitemizde ve uygulamamızda çerezler kullanılmaktadır. Çerezler hakkında detaylı bilgi almak için <a href='https://www.iksv.org/tr/footer-menu/cerez-aydinlatma-metni' style='text-decoration: underline;color:black;'>Çerez Aydınlatma Metni'ni</a> incelemenizi rica ederiz.</p><br><p>Web sitesi ve uygulama kullanımınızı analiz etmek, içerikleri kişiselleştirmek için çerez kullanımına izin veriyorsanız, lütfen “Kabul Ediyorum” seçeneğine tıklayınız.</p></div><div class='vl-button'>Kabul Ediyorum</div>`;
    document.body.append(div);

    function close() {
        if (document.querySelector("#vl-cookieBox"))
            document.querySelector("#vl-cookieBox").remove();
    }
    document.querySelector(".vl-button").addEventListener("click", function () {
        document.querySelector("#vl-cookieBox").remove();
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var c = new Date(year + 2, month, day);
        document.cookie = "vl-cookieBox=false;path=/;expires=" + c;
        close();
        <%VLSendClickFunc%>;
    });
}

