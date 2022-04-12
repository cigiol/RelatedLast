(function () {

    var elementToAdd = jQuery('body');

    var zIndexForSite = 99;

    var snowMax = 100;

    var snowColor = ["#DDD", "#EEE"];

    var snowEntity = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/274_991_20220207160351734.png";

    var snowSpeed = 0.3;

    var snowMinSize = 8;

    var snowMaxSize = 45;

    var snowRefresh = 5;

    var maxPageHeight = 4200;

    var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";

    var snowAnimation;
    var snow = [];
    var pos = [];
    var coords = [];
    var lefr = [];
    var marginBottom;
    var marginRight;

    randomise = function (range) {
        rand = Math.floor(range * Math.random());
        return rand;
    }

    initSnow = function () {
        var snowSize = snowMaxSize - snowMinSize;
        marginBottom = document.body.scrollHeight - 15;
        marginRight = document.body.clientWidth - 15;

        for (i = 0; i <= snowMax; i++) {
            coords[i] = 0;
            lefr[i] = Math.random() * 15;
            pos[i] = 0.03 + Math.random() / 10;
            snow[i] = document.getElementById("vl-flake" + i);
            snow[i].style.fontFamily = "inherit";
            snow[i].size = randomise(snowSize) + snowMinSize;
            snow[i].style.fontSize = snow[i].size + "px";
            snow[i].style.zIndex = 1000;
            snow[i].sink = snowSpeed * snow[i].size / 5;
            snow[i].posX = randomise(marginRight - snow[i].size);
            snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
            snow[i].style.left = snow[i].posX + "px";
            snow[i].style.top = snow[i].posY + "px";
        }

        moveSnow();
    }

    resize = function () {
        var height = document.body.scrollHeight;
        if (height > maxPageHeight) {
            height = maxPageHeight;
        }
        marginBottom = height - 50;
        marginRight = document.body.clientWidth - 50;
    }

    moveSnow = function () {
        for (i = 0; i <= snowMax; i++) {
            coords[i] += pos[i];
            snow[i].posY += snow[i].sink;
            snow[i].style.top = snow[i].posY + "px";

            if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
                snow[i].posX = randomise(marginRight - snow[i].size);
                snow[i].posY = 0;
            }
        }

        snowAnimation = setTimeout("moveSnow()", snowRefresh);
    }

    for (i = 0; i <= snowMax; i++) {
        elementToAdd.append("<img id='vl-flake" + i + "' src='" + snowEntity + "' style='" + snowStyles + "position:absolute; z-index: " + zIndexForSite + ";top:-" + snowMaxSize + "'>");
    }

    resize();
    initSnow();
    
})();