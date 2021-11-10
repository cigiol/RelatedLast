if (!document.querySelector("#VisiNotifCustom")) {
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes zoomInAnimation {
            0% {
                bottom: -100px;
            }
            100% {
                bottom: 10px;
            }
        }
        @keyframes zoomOutAnimation {
            0% {
                bottom: 10px;
            }
            100% {
                bottom: -100px;
            }
        }
        @keyframes zoomInAnimation2 {
            0% {
                left: -300px;
            }
            100% {
                left: 10px;
            }
        }
        @keyframes zoomOutAnimation2 {
            0% {
                left: 10px;
            }
            100% {
                left: -300px;
            }
        }`;
    document.head.appendChild(style);
    var div = document.createElement("section");
    div.setAttribute("id", "VisiNotifCustom");
    var r = Math.floor(Math.random() * 2);
    if(r==0){
        div.style = "position: fixed;z-index: 5000;bottom: 10px;left: 10px;animation:zoomInAnimation 1s forwards;";
    }
    else{
        div.style = "position: fixed;z-index: 5000;bottom: 10px;left: 10px;animation:zoomInAnimation2 1s forwards;";
    }
    
    var random = Math.floor(Math.random() * 30) + 10;
    div.innerHTML = "<article style='display: block;margin-top: 10px;position: relative;opacity: 1;overflow: auto;box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 3px;font-family: sans-serif;border-radius: 4px;color: black;text-shadow: none;transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;left: 0px;background: rgb(244, 244, 244);width: 230px;height: 50px;line-height: 50px;text-align: center;'>Bu ürüne şu anda "+random+" kişi bakıyor.</article>";
    div.addEventListener("click", function () {
        if(r==0){
            div.style.animation = "zoomOutAnimation 1s forwards";
        }
        else{
            div.style.animation = "zoomOutAnimation2 1s forwards";
        }
        setTimeout(function(){
            div.remove();
        },700);
    });
    document.querySelector("body").append(div);
}
