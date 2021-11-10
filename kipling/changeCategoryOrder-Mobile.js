function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var lastCat = getCookie("vl-lastcat");
if (lastCat) {
    var categoryOrder = {
        589: 22,
        587: 33,
        665: 44,
        582: 45,
        584: 53,
        611: 69
    };

    var categories = {
        "589": 589,
        "591": 589,
        "605": 589,
        "663": 589,
        "666": 589,
        "718": 589,
        "587": 587,
        "664": 587,
        "606": 587,
        "604": 587,
        "593": 587,
        "588": 587,
        "665": 665,
        "582": 582,
        "590": 582,
        "583": 582,
        "584": 584,
        "586": 584,
        "600": 584,
        "592": 584,
        "603": 584,
        "597": 584,
        "671": 584,
        "674": 584,
        "607": 584,
        "610": 584,
        "611": 611,
        "686": 611,
        "687": 611,
        "688": 611,
        "689": 611,
        "690": 611,
        "691": 611,
        "693": 611,
        "694": 611,
        "696": 611,
        "697": 611,
        "698": 611,
        "700": 611,
        "701": 611,
        "702": 611,
        "703": 611,
        "705": 611,
        "709": 611
    };
    var a = document.querySelectorAll(".new-main-menu li");
    var selectedCategory = a[categoryOrder[categories[lastCat]]];
    document.querySelectorAll(".new-main-menu li")[1].before(selectedCategory);
    selectedCategory.addEventListener("click",function(){
        
    });
}


