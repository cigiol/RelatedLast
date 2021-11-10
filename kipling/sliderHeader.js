
if (document.querySelector("#vl-HeadBanner") != null) {
    console.log('İkinci kez çalıştı');
}
else {
    var style = document.createElement("style");
    style.innerHTML = `
                    #vl-HeadBanner{
                        top: 0px;
                        position: relative;
                        z-index: 0;
                        overflow: hidden;
                    }
                    #vl-HeadBanner div{
                        transition: all 0.5s;
                    }
                    #vl-HeadBanner img{
                        width:100%;
                    }
                `;
    document.head.append(style);

    var yenidiv = document.createElement('div');
    var slideDiv = document.createElement('div');
    var a = document.createElement('a');
    a.href = "https://www.kipling.com.tr/c/firsat-reyonu-612?pagesize=32";
    var yeniimg = document.createElement('img');
    slideDiv.appendChild(a);

    yeniimg.setAttribute('src', 'http://img.euromsg.net/C06689EA1AC74A2A98F0A62EB3BF5865/images/degistir.jpg');

    var yeniimg2 = document.createElement('img');
    yeniimg2.setAttribute('src', 'http://img.euromsg.net/C06689EA1AC74A2A98F0A62EB3BF5865/images/G%C3%9CVENL%C4%B0-ALI%C5%9EVER%C4%B0%C5%9E(1).jpg');
    slideDiv.appendChild(yeniimg2);

    var yeniimg3 = document.createElement('img');
    yeniimg3.setAttribute('src', 'http://img.euromsg.net/C06689EA1AC74A2A98F0A62EB3BF5865/images/KARGO-BEDAVA(2).jpg');
    slideDiv.appendChild(yeniimg3);

    yenidiv.setAttribute("id", "vl-HeadBanner");

    a.append(yeniimg);
    yenidiv.append(slideDiv);
    document.querySelector("#header").before(yenidiv);

    setTimeout(function () {
        yenidiv.style.height = yeniimg.offsetHeight + "px";
    }, 500);

    jQuery("#vl-HeadBanner").click(function () {

    });

    function slideIt() {
        var up = true;
        var counter = 0;
        setInterval(() => {
            if (up) {
                if (counter == 0) {
                    document.querySelector("#vl-HeadBanner div").style.transform = `translateY(-${yeniimg.offsetHeight}px)`;
                    counter++;
                }
                else if (counter == 1) {
                    document.querySelector("#vl-HeadBanner div").style.transform = `translateY(-${yeniimg.offsetHeight * 2}px)`;
                    counter++;
                    up = false;
                }
            }
            else {
                if (counter == 2) {
                    document.querySelector("#vl-HeadBanner div").style.transform = `translateY(-${yeniimg.offsetHeight}px)`;
                    counter--;
                }
                else if (counter == 1) {
                    document.querySelector("#vl-HeadBanner div").style.transform = `translateY(0px)`;
                    counter--;
                    up = true;
                }
            }
        }, 3000);
    }
    slideIt();
}