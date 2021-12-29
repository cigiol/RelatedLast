var img = "http://img.euromsg.net/B8496AD08EC94B7AB9CBCF84819CDE8A/images/KeySale-0.jpg";
var link = "https://www.robotistan.com/";


if (!document.querySelector("#vl-camp-header")) {
    var isMobile = window.innerWidth < 768;

    var style = document.createElement("style");
    style.innerHTML = `
    #vl-camp-header{
        margin: auto;
        width: fit-content; 
    }
    #vl-camp-header img{
        margin:auto;
        width:100%;
    }
    @media only screen and (max-width: 768px) {
        #vl-camp-header{
            display: flex;
            justify-content: center;
            margin-bottom:5px;
        }
    }
        
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("id", "vl-camp-header");
    div.innerHTML = `
        <a href="${link}"><img src="${img}"> </a>
    `;
    

    isMobile ? document.querySelector('.catalogWrapper').insertBefore(div, document.querySelector('.main-banner-container').firstElementChild) : document.querySelector('.catalogWrapper').before(div);
    div.addEventListener("click", function () {

    });

}

