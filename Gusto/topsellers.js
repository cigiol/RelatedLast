var style=document.createElement("style");
style.innerHTML=`
#vl-topseller-monthly {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 460px;
    z-index: 999999;
    background: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 50%);
}
#vl-topseller-monthly-title {
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    margin: 15px;
}
#vl-topseller-monthly-close {
    position: absolute;
    font-size: 20px;
    font-weight: bolder;
    right: 10px;
    top: 15px;
    cursor: pointer;
}
#vl-topseller-monthly-img {
    width: 200px;
    margin: 10px 50px;
}
#vl-topseller-monthly-badge {
    width: 50px;
    position: absolute;
    left: 50px;
    top: 65px;
}
#vl-topseller-monthly-name {
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
}
#vl-topseller-monthly-price {
    display: inline-block;
    text-decoration: line-through;
}
#vl-topseller-monthly-dprice {
    display: inline-block;
    font-size: 20px;
    margin-left: 10px;
}
    
`;
document.head.append(style);

var productName = "Power Streç Pantolon";
var link = "https://www.gustoeshop.com/power-strec-pantolon-21yg00312401";
var img = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/320_1321_20210903153600591.jpg";
var price = "₺469,90";
var dprice = "₺169,96";
var badge = "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/320_1321_20210903153543912.png";
var targetId = "vl-topseller-monthly";

var div = document.createElement("div");
div.setAttribute("id",targetId);
div.innerHTML=`
    <div id="${targetId}-title">AYIN FIRSATI!</div>
    <div id="${targetId}-close">X</div>
    <a id="${targetId}-link" href="${link}">
    <img id="${targetId}-img" src="${img}">
    <img id="${targetId}-badge" src="${badge}">
    </a>
    <div id="${targetId}-name">${productName}</div>
    <div id="${targetId}-price">${price}</div>
    <div id="${targetId}-dprice">${dprice}</div>
`;
document.body.append(div);

document.querySelector("#vl-topseller-monthly-close").addEventListener("click",function(){
    div.remove();
});

document.querySelector("#vl-topseller-monthly-link").addEventListener("click",function(){
    console.log("click");
});