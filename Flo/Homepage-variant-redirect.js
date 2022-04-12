var divs = document.querySelectorAll(".BannerWidthProducts3");
var selectedDiv;
var go = false;
divs.forEach(element =>{
    if(element.dataset["name"]){
        if(element.dataset["name"]=="23 Nisan Coşkusu Başlasın!"){
            go=true;
            selectedDiv = element.parentElement.parentElement;
        }
    }
});
if (!document.querySelector("#vl-choose-variant") && go) {
    var isMobile = window.innerWidth < 768;
    var title = "Beden Seçin";
    var mobilTitle = "Beden Seçin";
    var variants = [
        { name: "25", link: "25,25-5" },
        { name: "26", link: "26,26-5" },
        { name: "27", link: "27,27-5" },
        { name: "28", link: "28,28-5" },
        { name: "29", link: "29,29-5" },
        { name: "30", link: "30,30-5" },
        { name: "31", link: "31,31-5" },
        { name: "32", link: "32,32-5" },
        { name: "33", link: "33,33-5" },
        { name: "34", link: "34,34-5" },
        { name: "35", link: "35,35-5" },
    ];

    var variantsHTML = "";

    variants.forEach(element => {
        variantsHTML += `<a class="vl-variant-link" href="https://www.flo.com.tr/ayakkabi?cinsiyet=erkek-cocuk,kiz-cocuk,unisex-cocuk&beden=${element.link}"><div class="vl-variant-name">${element.name}</div></a>`;
    });

    var style = document.createElement("style");
    style.innerHTML = `
#vl-choose-variant{
    position: relative;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: #EAEAEA;
    height: 80px;
}
.vl-title{
    margin: 20px;
    font-size: 30px;
    font-weight: bold;
}
.vl-variant-link {
    color: black;
}
.vl-variant-name {
    background: white;
    padding: 10px;
    font-size: 15px;
}
.vl-variants{
    display: flex;
    justify-content: space-evenly;
    width: 510px;
}
@media only screen and (max-width: 768px) {
    #vl-choose-variant{
        flex-direction: column;
        height: auto;
    }
    .vl-title{
        margin: 10px;
        font-size: 25px;
    }
    .vl-variants{
        margin-bottom: 10px;
        width: 90%;
    }
    .vl-variant-name{
        padding: 5px;
        font-size: 3vw;
    }
}
    
`;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-choose-variant");
    div.innerHTML = `
        <div class="vl-title">${isMobile ? mobilTitle : title}</div>
        <div class="vl-variants">${variantsHTML}</div>
    `;
    
    if(selectedDiv){
        selectedDiv.before(div);
        <%VLSendImpressionFunc%>;
        div.addEventListener("click", function () {
            <%VLSendClickFunc%>
        });
    }

}