function cerez() {
    var style = document.createElement("style");
    style.innerHTML = `#vl-cookieBox{position: fixed;background: white;opacity: 1;color: black;padding: 10px;bottom: 0px;left: 0px;width: 411px;z-index: 100000;border: 1px solid black;}.vl-text{display: inline-block;padding-left: 10px;}.vl-button{cursor: pointer;display: inline-block;background: royalblue;padding: 10px 20px;float: right;color: white;}
@media screen and (max-width: 960px){
    #vl-cookieBox{
        width:100%;
    }
`;
    document.head.append(style);

    var div = document.createElement('div');
    div.setAttribute("id", "vl-cookieBox");
    div.innerHTML = `<input style='box-sizing: border-box;font-size: 13px;font-style: normal;line-height: 1;margin: 0;outline: 0;vertical-align: top;text-decoration: none;list-style: none;float: right;font-weight: bold;background-color: #a61f37;color: #fff;padding: 4px 5px;border: solid 1px #bfbfbf;text-align: center;cursor: pointer;' id='vl-cookieboxKapat' type='button' class='cookiebox-buton' value='X'><div class='vl-text'><p>Web sitemizde ve uygulamamızda çerezler kullanılmaktadır. Çerezler hakkında detaylı bilgi almak için <a href='https://www.iksv.org/tr/footer-menu/cerez-aydinlatma-metni' style='text-decoration: underline;'>Çerez Aydınlatma Metni'ni</a> incelemenizi rica ederiz.</p><br><p>Web sitesi ve uygulama kullanımınızı analiz etmek, içerikleri kişiselleştirmek için çerez kullanımına izin veriyorsanız, lütfen “Kabul Ediyorum” seçeneğine tıklayınız.</p></div><div class='vl-button'>Kabul Ediyorum</div>`;
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
    document.querySelector("#vl-cookieboxKapat").addEventListener("click", function () {
        close();
    });
}

if(!document.querySelector("#vl-cookieBox") && document.cookie.indexOf("vl-cookieBox") ==-1){
    cerez();
    <%VLSendImpressionFunc%>;
}