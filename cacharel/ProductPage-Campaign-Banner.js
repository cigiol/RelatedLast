var li = document.querySelectorAll(".global__breadcrumb li");
li = li[li.length - 2];
var cat = li.innerText;

var data = [{ "gömlek": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/pantolon%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/yeni-sezon-pantolon-modelleri/" }, "pantolon": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/g%C3%B6mlek%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/yeni-sezon-gomlek-modelleri/" }, "kaban & mont": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/K%C4%B1%C5%9F%20Aksesuar%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/" }, "triko": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/mont%20kaban%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/yeni-sezon-kaban-mont/" }, "bermuda ve şort": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/tshirt%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/tisort/" }, "ceket": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/yelek%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/yeni-sezon-yelek-modelleri/" }, "takım elbise": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/tak%C4%B1m%20g%C3%B6mlek%20%C3%B6nerisi.jpg", link: "https://www.cacharel.com.tr/yeni-sezon-gomlek-modelleri/" }, "smokin": { img: "http://img.euromsg.net/8234B5AD122B4537ACCCAB1C177D61C6/images/smokin%20aksesuar%20%C3%B6nersi.jpg", link: "https://www.cacharel.com.tr/aksesuar/" } }];

var exist = data[0][cat];
if (exist) {
    var style = document.createElement("style");
    style.innerHTML = `
    
        
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-campaign-banner");
    div.innerHTML = `
        <a class="vl-campaign-link" href="${exist.link}"><img src="${exist.img}"></a>
    `;
    document.querySelector(".product__facet--variants").before(div);
    var targetName="ProductPage-Campaign-Banner";
    ga("create", "UA-5051374-3", { name: "RMC", cookieDomain: "auto" });
    ga("RMC.send", "event", "RMC", targetName, "Impression", { nonInteraction: !0 });
    <%VLSendImpressionFunc%>;
    document.querySelector(".vl-campaign-link").addEventListener("click",function(){
        <%VLSendClickFunc%>;
        ga("RMC.send","event","RMC",targetName,"Click",{nonInteraction:!0});
    });
}
