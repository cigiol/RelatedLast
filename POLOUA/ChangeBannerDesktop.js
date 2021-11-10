var kadin = ["/kadin-koleksiyon/", "/bayan-ayakkabi/", "/kadin-spor-giyim/", "/etek-elbise-modelleri/", "/bayan-gomlek/", "/kadin-dis-giyim/", "/kadin-pantolon/", "/bayan-sweatshirt/", "/bayan-sort-capri/", "/bayan-triko/", "/kadin-polo-tshirt/", "/kadin-plaj-giyim/", "/kadin-aksesuarlari/", "/kadin-bere-modelleri/", "/kadin-cuzdan/", "/kadin-canta-modelleri/", "/kadin-corap/", "/kadin-eldiven/", "/kadin-bere/", "/kadin-kemer/", "/kadin-sapka/", "/firsat-kadin-tshirt/", "/firsat-kadin-gomlek/", "/firsat-kadin-sweatshirt", "/firsat-kadin-triko/", "/firsat-kadin-ayakkabi/", "/firsat-ev-giyim-kadin/", "/firsat-kadin-esofman-alti", "/firsat-kadin-etek-elbise", "/firsat-kadin-dis-giyim", "/firsat-kadin-pantolon", "/firsat-kadin-plaj-giyim", "/firsat-kadin-sort-capri"];
var erkek = ["/erkek-koleksiyon/", "/erkek-ayakkabi/", "/erkek-esofman-alti/", "/ev-giyimi/", "/erkek-gomlek/", "/erkek-kaban-mont-modelleri/", "/erkek-pantolon/", "/erkek-sweatshirt/", "/erkek-sort-capri/", "/erkek-triko/", "/erkek-polo-tisort/", "/erkek-plaj-giyim/", "/erkek-akseuarlari/", "/erkek-bere/", "/erkek-cuzdan/", "/erkek-canta-seyahat/", "/erkek-corap/", "/erkek-eldiven/", "/erkek-kaskol/", "/erkek-kemer/", "/erkek-sapka/", "/firsat-erkek-tshirt", "/firsat-erkek-gomlek/", "/firsat-erkek-sweatshirt/", "/firsat-erkek-ev-giyimi", "/firsat-erkek-pantolon", "/firsat-erkek-dis-giyim", "/firsat-erkek-sort-bermuda", "/firsat-erkek-plaj-giyim", "/firsat-erkek-ayakkabi", "/firsat-erkek-triko", "/firsat-esofman/"];


function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}

var banner = document.querySelector("#yaza-merhaba-1");

if (banner) {
    var img = banner.querySelectorAll("source")[1];



    var b = check_cookie_name("lastCat");
    if (b) {
        if (kadin.includes(b)) {
            img.setAttribute("srcset", "https://img.visilabs.net/banner/uploaded_images/230_1216_20200723095102827.jpg");
            banner.addEventListener("click",function(){
                <%VLSendClickFunc%>;
            });
            <%VLSendImpressionFunc%>;
        }
        else if (erkek.includes(b)) {
            img.setAttribute("srcset", "https://img.visilabs.net/banner/uploaded_images/230_1216_20200723095118413.jpg");
            banner.addEventListener("click",function(){
                <%VLSendClickFunc%>;
            });
            <%VLSendImpressionFunc%>;
        }
        
    }
}
