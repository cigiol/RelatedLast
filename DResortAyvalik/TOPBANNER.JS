

function createTopBanner() {
    var config = {
        id: "vl-TopBanner",
        backgroundColor: "#092e6e",
        color: "white",
        text: "Sizi önemsiyoruz… Otelimizde alınan hijyen önlemlerimizi detaylı incelemek için <a href='https://www.dresortayvalik.com/tr' style='color:white;text-decoration:underline;font-weight:bold;'>tıklayın.</a>",
        moreText: ""
    };

    try {
        if (!document.querySelector("#" + config.id)) {

            if (window.location.pathname.substr(0,3)=="/en") {
config.text="We care about you…  <a href='https://www.dresortayvalik.com/en' style='color:white;text-decoration:underline;font-weight:bold;'>Click</a> to learn in detail about the hygiene measures taken in our hotel";
            }

            var div = document.createElement("div");
            div.id = config.id;
            div.style.backgroundColor = config.backgroundColor;
            div.style.color = config.color;
            div.style.textAlign = "center";
            div.style.padding = "15px";
            div.style.width = "100%";
            div.style.zIndex = "99999999";
            div.style.padding = "15px";
            div.style.position="fixed";
            div.style.left="0";
            div.style.top=document.querySelector("#header").offsetHeight+"px";
            div.innerHTML = config.text;

            window.addEventListener("scroll",function () {
                if (document.querySelector("#" + config.id)) {
                    div.style.top=document.querySelector("#header").offsetHeight+"px";
                }
            });

            
            document.body.appendChild(div);


            try {
                <%VLSendImpressionFunc%>;
            } catch (error) {}

            div.addEventListener("click",function () {
                try {
                    <%VLSendClickFunc%>;
                } catch (error) {}
            });

        }
    } catch (error) {

    }

}
createTopBanner();