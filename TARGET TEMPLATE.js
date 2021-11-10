var pCount = 0;
pCount = google_tag_manager['GTM-KKQB9F4'].dataLayer.get('vl_purchase_count');

if (!document.querySelector("#vl-header")) {
    var isMobile = window.innerWidth < 768;
    var img = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-0.jpg";
    var img2 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-1.jpg";
    var img3 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-2.jpg";
    var img4 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-3.jpg";
    var mobilImg = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/Mobil-KeySale-0.jpg";
    var mobilImg2 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/Mobil-KeySale-1.jpg";
    var mobilImg3 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/Mobil-KeySale-2.jpg";
    var mobilImg4 = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/Mobil-KeySale-3.jpg";

    var style = document.createElement("style");
    style.innerHTML = `
    #vl-header{
        margin: auto;
        width: fit-content; 
    }
    #vl-header img{
        margin:auto;
        width:100%;
    }
    @media only screen and (max-width: 768px) {
        #vl-header{
            display: flex;
            justify-content: center;
            margin-bottom:5px;
        }
    }
        
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-header");
    if (pCount == 0) {
        div.innerHTML = `
            <a href="https://www.jimmykey.com/"><img src="${isMobile ? mobilImg : img}"> </a>
        `;
    }
    else if (pCount == 1) {
        div.innerHTML = `
            <a href="https://www.jimmykey.com/"><img src="${isMobile ? mobilImg2 : img2}"> </a>
        `;
    }
    else if (pCount == 2) {
        div.innerHTML = `
            <a href="https://www.jimmykey.com/"><img src="${isMobile ? mobilImg3 : img3}"> </a>
        `;
    }
    else if (pCount == 3) {
        div.innerHTML = `
            <a href="https://www.jimmykey.com/"><img src="${isMobile ? mobilImg4 : img4}"> </a>
        `;
    }

    isMobile ? document.querySelector('.main-banner-container').insertBefore(div, document.querySelector('.main-banner-container').firstElementChild) : document.querySelector('.main-banner-container').insertBefore(div, document.querySelector('.main-banner-container').firstElementChild);
    div.addEventListener("click", function () {

    });

}

if (!document.querySelector("#vl-header")) {
    var isMobile = window.innerWidth < 768;
    var img = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-4-Kupon-rev2.jpg";
    var mobilImg = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/Mobil-KeySale-4.jpg";

    var style = document.createElement("style");
    style.innerHTML = `
    #vl-header{
        position:relative;
        margin: auto;
        width: fit-content; 
    }
    #vl-header img{
        margin:auto;
        width:100%;
    }
    .vl-code{
        position: absolute;
        right: 7%;
        top: 30%;
        font-size: 20px;
        color: black;
        background: white;
        padding: 0 10px;
        font-weight: 500;
    }
    @media only screen and (max-width: 768px) {
        #vl-header{
            margin-bottom:5px;
        }
        .vl-code{
            top:unset;
            position: absolute;
            right: calc(50% - 48px);
            bottom: 5px;
            font-size: 13px;
            color: black;
            background: white;
            padding: 0 10px;
            font-weight: 500;
        }
    }
        
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-header");
    div.innerHTML = `
       <img src="${isMobile ? mobilImg : img}"> <div class="vl-code">DENEMEKOD</div>
    `;
    

    isMobile ? document.querySelector('.main-banner-container').insertBefore(div, document.querySelector('.main-banner-container').firstElementChild) : document.querySelector('.main-banner-container').insertBefore(div, document.querySelector('.main-banner-container').firstElementChild);
<%VLSendImpressionFunc%>;
    div.addEventListener("click", function () {
       <%VLSendClickFunc%>
    });

}

