fireBadgeCombine();
function fireBadgeCombine() {
    if(!document.querySelector(".vl-crosscat-banner")){
    var cats = document.querySelectorAll(".global__breadcrumb > .cf > li");
    var lastcat = cats[cats.length - 1].querySelector("a").href.split("https://tr.uspoloassn.com")[1];

    var arr = [
        {
            match: "/erkek-gomlek",
            url: "https://tr.uspoloassn.com/erkek-pantolon/",
            text: "Gömleğini en fit pantolonlarla kombinle!",
            case: lastcat == "/erkek-gomlek/"
        },
        {
            match: "/erkek-triko",
            url: "https://tr.uspoloassn.com/erkek-gomlek/",
            text: "Trikonu gömlek ile taçlandır!/",
            case: lastcat == "/erkek-triko"
        },
        {
            match: "/erkek-sweatshirt",
            url: "https://tr.uspoloassn.com/erkek-esofman-alti/",
            text: "Rahat formlu eşofman altları ile tam konfor!",
            case: lastcat == "/erkek-sweatshirt/"
        },
        {
            match: "/erkek-esofman-alti",
            url: "https://tr.uspoloassn.com/erkek-sweatshirt/",
            text: "Konforlu eşofman altlarını en trend sweatshirt'ler ile tamamla!",
            case: lastcat == "/erkek-esofman-alti/"
        },
        {
            match: "/erkek-pantolon",
            url: "https://tr.uspoloassn.com/erkek-gomlek/",
            text: "Pantolonunu şık bir gömlek ile kombinlemeye ne dersin?",
            case: lastcat == "/erkek-pantolon/"
        },
        {
            match: "/erkek-polo-tisort",
            url: "https://tr.uspoloassn.com/erkek-pantolon/",
            text: "T-shirt'üne en çok yakışacak, pantolonlar burada!",
            case: lastcat == "/erkek-polo-tisort/"
        },
        {
            match: "/bayan-gomlek/",
            url: "https://tr.uspoloassn.com/kadin-pantolon/",
            text: "Gömleğini en fit pantolonlarla kombinle!",
            case: lastcat == "/bayan-gomlek/"
        },
        {
            match: "/bayan-triko/",
            url: "https://tr.uspoloassn.com/bayan-gomlek/",
            text: "Trikonu gömlek ile taçlandır!",
            case: lastcat == "/bayan-triko/"
        },
        {
            match: "/bayan-sweatshirt/",
            url: "https://tr.uspoloassn.com/kadin-spor-giyim/",
            text: "Rahat formlu eşofman altları ile tam konfor!",
            case: lastcat == "/bayan-sweatshirt/"
        },
        {
            match: "/kadin-spor-giyim/",
            url: "https://tr.uspoloassn.com/bayan-sweatshirt/",
            text: "Sweatshirt’leri keşfet, rahatlık ve şıklığı bir arada yaşa!",
            case: lastcat == "/kadin-spor-giyim/"
        },
        {
            match: "/kadin-pantolon/",
            url: "https://tr.uspoloassn.com/bayan-gomlek/",
            text: "Pantolonunu şık bir gömlek ile kombinlemeye ne dersin?",
            case: lastcat == "/kadin-pantolon/"
        },
        {
            match: "/kadin-polo-tshirt/",
            url: "https://tr.uspoloassn.com/kadin-pantolon/",
            text: "T-shirt'üne en çok yakışacak, pantolonlar burada!",
            case: lastcat == "/kadin-polo-tshirt/"
        },
        {
            match: "/etek-elbise-modelleri/",
            url: "https://tr.uspoloassn.com/kadin-canta-modelleri/",
            text: "Stilini tamamlayacak çantalar burada!",
            case: lastcat == "/etek-elbise-modelleri/"
        },
        {
            match: "/kiz-cocuk-pantolon/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-gomlek/",
            text: "Enerjilerine eşlik edecek gömlekleri keşfet!",
            case: lastcat == "/kiz-cocuk-pantolon/"
        },
        {
            match: "/kiz-cocuk-gomlek/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-pantolon/",
            text: "Tarzlarına yakışacak pantolonları keşfet!",
            case: lastcat == "/kiz-cocuk-gomlek/"
        },
        {
            match: "/kiz-cocuk-triko/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-pantolon/",
            text: "Tarzlarına yakışacak pantolonları keşfet!",
            case: lastcat == "/kiz-cocuk-triko/"
        },
        {
            match: "/kiz-cocuk-sweatshirt/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-esofman/",
            text: "Enerjilerine yakışacak konforlu eşofman altları burada!",
            case: lastcat == "/kiz-cocuk-sweatshirt/"
        },
        {
            match: "/kiz-cocuk-esofman/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-sweatshirt/",
            text: "Enerjilerine yakışacak konforlu sweatshirt’leri keşfet!",
            case: lastcat == "/kiz-cocuk-esofman/"
        },
        {
            match: "/kiz-cocuk-polo-tshirt/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-pantolon/",
            text: "T-shirt'üne en çok yakışacak, pantolonlar burada!",
            case: lastcat == "/kiz-cocuk-polo-tshirt/"
        },
        {
            match: "/kiz-cocuk-etek-elbise/",
            url: "https://tr.uspoloassn.com/kiz-cocuk-ayakkabi-terlik/",
            text: "Stilini tamamlayacak ayakkabılar burada!",
            case: lastcat == "/kiz-cocuk-etek-elbise/"
        },
        {
            match: "/erkek-cocuk-pantolon/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-gomlek/",
            text: "Enerjilerine eşlik edecek gömlekleri keşfet!",
            case: lastcat == "/erkek-cocuk-pantolon/"
        },
        {
            match: "/erkek-cocuk-gomlek/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-pantolon/",
            text: "Tarzlarına yakışacak pantolonları keşfet!",
            case: lastcat == "/erkek-cocuk-gomlek/"
        },
        {
            match: "/erkek-cocuk-triko/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-pantolon/",
            text: "Tarzlarına yakışacak pantolonları keşfet!",
            case: lastcat == "/erkek-cocuk-triko/"
        },
        {
            match: "/erkek-cocuk-sweatshirt/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-esofman/",
            text: "Enerjilerine yakışacak konforlu eşofman altları burada!",
            case: lastcat == "/erkek-cocuk-sweatshirt/"
        },
        {
            match: "/erkek-cocuk-esofman/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-sweatshirt/",
            text: "Enerjilerine yakışacak konforlu sweatshirt’leri keşfet!",
            case: lastcat == "/erkek-cocuk-esofman/"
        },
        {
            match: "/erkek-cocuk-polo-tisort/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-pantolon/",
            text: "T-shirt'üne en çok yakışacak, pantolonlar burada!",
            case: lastcat == "/erkek-cocuk-polo-tisort/"
        },
        {
            match: "/erkek-cocuk-sort-capri/",
            url: "https://tr.uspoloassn.com/erkek-cocuk-polo-tisort/",
            text: "Şortunu T-shirt ile taçlandır!",
            case: lastcat == "/erkek-cocuk-sort-capri/"
        }
    ];

    var myItem = arr.find(item => item.case);
    if (myItem) {
        var style = document.createElement("style");
        style.innerHTML = `.vl-crosscat-banner{text-align: center;
    color: #b70234;
    border: 2px solid #b70234;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;}
    .vl-crosscat-banner > a > p{
        color:#b70234;
    }`;
        document.head.append(style);

        var div = document.createElement("div");
        div.setAttribute("class", "vl-crosscat-banner");
        div.innerHTML = `<a href="${myItem.url}"><p>${myItem.text}</p></a>`;

        document.querySelector(".product__facet--variants").before(div);
        try {
            VLSendImpressionFunc(134, 4); 
            var campName = "ProductPage-CrossCategory-Banner";
            ga("create", "UA-2253042-20", { name: "RMC", cookieDomain: "auto" });
            ga('RMC.send', 'event', 'RMC', campName, "Impression", { nonInteraction: true });
        } 
        catch (t) { }
    }
}
}
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!mutation.addedNodes) return;
        fireBadgeCombine();
    });
});

observer.observe(document.querySelector(".product.js-product-container.js-product-init"), {
    childList: true
    , subtree: false
    , attributes: false
    , characterData: false
});