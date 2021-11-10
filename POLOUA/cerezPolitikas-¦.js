function cerez(){
    var div=document.createElement('div');
    div.setAttribute("id","vl-cookieBox");
    div.innerHTML="<input style='box-sizing: border-box;font-size: 13px;font-style: normal;line-height: 1;margin: 0;outline: 0;vertical-align: top;text-decoration: none;list-style: none;float: right;font-weight: bold;background-color: #a61f37;color: #fff;padding: 4px 5px;border: solid 1px #bfbfbf;text-align: center;cursor: pointer;' id='cookieboxKapat' type='button' class='cookiebox-buton' value='X'><p style='line-height: 1.5;margin: 0 0 1em;color: #002872;font-size: 0.95em;line-height: 1.5789474em;font-weight: bold;font-style: normal;'class='cookiebox-baslik'>Çerez Politikası</p><p style='line-height: 1.5;margin: 0 0 1em;color: #002872;' class='cookiebox-textmessage'>Size en iyi hizmeti sunabilmek ve reklam çalışmalarında kullanmak amacıyla sayfamızda çerezlerden faydalanıyoruz. Sayfamızı kullanmaya devam ederek çerez kullanımına izin vermiş oluyorsunuz. Çerezler hakkında ayrıntılı bilgiye <a style='color: #a41e36;line-height: 1.5em;text-decoration: underline;' class='cookielink' href='https://tr.uspoloassn.com/gizlilik-politikasi-ve-cerezler'>Çerez Politikamız</a> 'dan ulaşabilirsiniz.</p>";
    
    var style= document.createElement("style");
    style.innerHTML="#vl-cookieBox{position: fixed;\
        background-color: #cecbcc;\
        bottom: 50px;\
        right: 3%;\
        z-index: 2001;\
        padding: 17px 17px;\
        width: 320px;\
        border-radius: 10px;\
        -moz-border-radius: 10px;\
        -webkit-border-radius: 10px;\
        color: #fff;\
        text-align: left;\
        font-family: 'trivia-slab-regular';}\
        @media screen and (max-width: 1200px) and (min-width: 960px){\
    #vl-cookieBox{\
        width: 30%;\
    }\
    }\
    @media screen and (max-width: 960px){\
    #vl-cookieBox{\
        position: fixed;\
        background-color: #cecbcc;\
        z-index: 2001;\
        padding: 10px 10px;\
        width: 98%;\
        color: #fff;\
        text-align: left;\
        left: 5px;\
    }\
    }";
    document.head.append(style);
    document.querySelector("body").append(div);
    
    document.querySelector("#cookieboxKapat").addEventListener("click",function(){
        document.querySelector("#vl-cookieBox").remove();
        document.cookie ="cookieBox=false";
    });
    }
    
    if(!document.querySelector("#vl-cookieBox") && document.cookie.indexOf("cookieBox") ==-1){
        cerez();
    }
    
    