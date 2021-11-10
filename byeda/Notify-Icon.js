var campaignTitle1="Yeni Gelen Modelleri İnceleyin!";
var campaignLink1="https://www.byedacetin.com/yeni-gelenler";
var campaignTitle2="Koleksiyon Ürünlerimizi Keşfedin!";
var campaignLink2="https://www.byedacetin.com/koleksiyon-urunler";
var campaignTitle3="Sezonun Favorisi: Taşlı Kolyeler!";
var campaignLink3="https://www.byedacetin.com/tasli-kolyeler";


var campName="Head-Notify";


function fireNotifHeader(device) {
    var style = document.createElement("style");
    style.innerHTML = `
.vl-header-notif{
    display:inline-block;
    cursor:pointer;
    position:relative;
    margin-right: 19px;
    float:right;
}
.vl-chan{
    margin-top: 3px;
    width:40px;
}
.vl-notif-title{
    float: right;
    margin-left: 10px;
    flex: 0.99;
}

.vl-notif-container{
    width: 240px;
    height: auto;
    display: none;
    position: absolute;
    background: white;
    z-index: 100000;
    left: -114px;
    top: 50px;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.19);
    font-weight: 600;
    text-align: left;
    padding: 5px 15px;
    font-size: 16px;
}
.vl-notif-triangle{
    display: block !important;
    position: absolute !important;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid white;
    top: -14px;
    left: 110px;
}
.vl-notif-active{
    display:block;
}
.vl-notif-container lu li{
    margin:10px 0;
}
.vl-notif-container lu{
    list-style:none;
}
.vl-notif-container div{
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
}
.vl-notif-count{
    position: absolute;
    top: 0;
    left: 20px;
    background: #FB3A06;
    border-radius: 50%;
    width: 15px;
    text-align: center;
    color: white;
    height: 15px;
    font-size: 11px;
    padding: 0;
}
.vl-notif-span{
    color: #71b9b8;
    padding: 2px 5px;
    border: 2px solid #71b9b8;
    border-radius: 50%;
    margin:auto;
    font-size: 11px;
    font-weight: bolder;
}
.vl-yonca{
    width:30px;
}
@media screen and (max-width: 992px){
    .vl-notif-container a{
        margin-right:0px !important;
    }
    .vl-header-notif{
        margin-top: 0;
        display: flex;
        align-items: center;
        height: fit-content;
        margin: auto;
    }
    .vl-notif-container{
        font-size: 11px;
        width: 200px;
        right: 0px;
        left: unset;
    }
    .vl-notif-span{
        font-size:9px;
    }
    .vl-notif-triangle{
        right:0;
    }
    .vl-chan{
        width:30px;
        margin:0;

    }
}
`;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("class", "vl-header-notif");
    div.innerHTML = `<img class="vl-chan" src="http://img.euromsg.net/AF1CFD40C39D45A7B193655931B168C8/images/bell-nomark-800x800.png"></img><p class='vl-notif-count'>3</p>
    <div class="vl-notif-container">
    <div class="vl-notif-triangle"></div>
    <lu>
    <li><a href='${campaignLink1}'><div><img class="vl-yonca" src="http://img.euromsg.net/AF1CFD40C39D45A7B193655931B168C8/images/mark-yonca-83x83.png"><span class="vl-notif-title"> ${campaignTitle1}</span></div></a></li>
    <li><a href='${campaignLink2}'><div><img class="vl-yonca" src="http://img.euromsg.net/AF1CFD40C39D45A7B193655931B168C8/images/mark-yonca-83x83.png"><span class="vl-notif-title"> ${campaignTitle2}</span></div></a></li>
    <li><a href='${campaignLink3}'><div><img class="vl-yonca" src="http://img.euromsg.net/AF1CFD40C39D45A7B193655931B168C8/images/mark-yonca-83x83.png"><span class="vl-notif-title"> ${campaignTitle3}</span></div></a></li>
    </lu>
    </div>
    `;
    if(device=="desktop"){
    
    document.querySelector("#cart-soft-count").before(div);
    document.querySelector("#hmLinks").setAttribute("class","col col-4 col-sm-4 col-xs-3 fr");
    document.querySelector("#search").setAttribute("class","col col-4 col-sm-12");
    }
    else{
        document.querySelector("#cart-soft-count").before(div);
    }
    

    div.addEventListener("click",function(){
        $(".vl-notif-container").toggleClass("vl-notif-active");
        document.querySelector(".vl-notif-count").style.display="none";
    });

    document.querySelector(".vl-notif-container").addEventListener("click",function(){
        <%VLSendClickFunc%>;
        
        
    });

}
if(document.querySelectorAll(".vl-header-notif").length == 0){
    var dev="mobil";
    if(window.innerWidth<768){}
    else{
        dev="desktop";
    }
    fireNotifHeader(dev);
    <%VLSendImpressionFunc%>;
    
    
}

