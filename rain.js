(function () {

    //Config Start
    var elementToAdd = jQuery('body');
    
    //Z-Index of Snowvl-flakes on Site
    var zIndexForSite = 99;
    
    // Amount of Snowvl-flakes
    var snowMax = 350;
    
    // Snowvl-flake Colours
    var snowColor = ["#DDD", "#EEE"];
    
    // Snow Entity
    var snowEntity = "&#x2022;";
    
    // Falling Velocity
    var snowSpeed = 1;
    
    // Minimum vl-flake Size
    var snowMinSize = 8;
    
    // Maximum vl-flake Size
    var snowMaxSize = 45;
    
    // Refresh Rate (in milliseconds)
    var snowRefresh = 5;
    
    // Max page Height
    var maxPageHeight = 4200;
    
    // Additional Styles
    var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";
    
    /*
    // End of Configuration
    // ----------------------------------------
    // Do not modify the code below this line
    */
    var snowAnimation;
    var snow = [],
    pos = [],
    coords = [],
    lefr = [],
    marginBottom,
    marginRight;
    
    randomise = function(range) {
    rand = Math.floor(range * Math.random());
    return rand;
    }
    
    initSnow = function() {
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
    snow[i].style.color = snowColor[randomise(snowColor.length)];
    snow[i].style.zIndex = 1000;
    snow[i].sink = snowSpeed * snow[i].size / 5;
    snow[i].posX = randomise(marginRight - snow[i].size);
    snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size);
    snow[i].style.left = snow[i].posX + "px";
    snow[i].style.top = snow[i].posY + "px";
    }
    
    moveSnow();
    }
    
    resize = function() {
    var height = document.body.scrollHeight;
    if(height > maxPageHeight){
    height = maxPageHeight;
    }
    marginBottom = height - 50;
    marginRight = document.body.clientWidth - 50;
    }
    
    moveSnow = function() {
    for (i = 0; i <= snowMax; i++) {
    coords[i] += pos[i];
    snow[i].posY += snow[i].sink;
    snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px";
    snow[i].style.top = snow[i].posY + "px";
    
    if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) {
    snow[i].posX = randomise(marginRight - snow[i].size);
    snow[i].posY = 0;
    }
    }
    
    snowAnimation = setTimeout("moveSnow()", snowRefresh);
    }
    
    for (i = 0; i <= snowMax; i++) {
    elementToAdd.append("<span id='vl-flake" + i + "' style='" + snowStyles + "position:absolute; z-index: " + zIndexForSite + ";top:-" + snowMaxSize + "'>" + snowEntity + "</span>");
    }
    
    resize();
    initSnow();
    setTimeout(function(){
    clearTimeout(snowAnimation);
    jQuery('span[id*="vl-flake"]').remove();
    }, 30000);
    })();