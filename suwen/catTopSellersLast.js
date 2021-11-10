function vlWidgetHandler(e,t={arrows:{},dots:{}}){window.activeVLWidgets||(window.activeVLWidgets=new Object);var i=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(!e||window.activeVLWidgets[e])return console.error("Widget is not found. id of widget is not defined as a function parameter");window.activeVLWidgets[e]=t;var o=document.getElementById(e),r=t.itemsToView||4,l=t.axis||"X",d="X"==l?"width":"height",s="X"==l?"height":"width",a="Y"==l?"top":"left",c="Y"==l?"bottom":"right",u=t.autoScroll||!1,m=t.autoScrollTimer||5,v=t.enhancedEcommerce||!1,p=null==t.arrows||t.arrows,h=null==t.arrows||null==t.arrows.size?20:t.arrows.size,g=null==t.arrows||null==t.arrows.borderSize?2:t.arrows.borderSize,f=null==t.arrows||null==t.arrows.color?"#333":t.arrows.color,w=null!=t.arrows&&null!=t.arrows.showOnHover&&t.arrows.showOnHover,b=null==t.arrows||null==t.arrows.mobile||t.arrows.mobile,x=null!=t.dots&&t.dots,y=null!=t.dots&&null!=t.dots.showOnHover&&t.dots.showOnHover,L=null!=t.dots&&null!=t.dots.numbers&&t.dots.numbersi,X=!((t.width||t.height||t.mobileHeight||t.mobileWidth)&&!t.responsive),T=null==t.responsive?[]:t.responsive;T.length>0&&T.unshift({breakpoint:n,settings:{itemsToView:t.itemsToView||4}});var k=r;if(null!=o){var E,M,S=o.querySelector(".vl-slider-wrapper"),O=S.style.transform,W=parseFloat(O.substring(O.indexOf("(")+1,O.indexOf("px"))),q=o.querySelector(".vl-slider"),C=q.offsetLeft,R=o.querySelectorAll(".vl-slider-item"),B=o.parentNode.parentNode,I="X"==l?B.getBoundingClientRect().width-he(B,"paddingLeft")-he(B,"paddingRight"):B.getBoundingClientRect().height-he(B,"paddingTop")-he(B,"paddingBottom"),Y=R[0].getBoundingClientRect(),H="X"==l?i&&t.mobileWidth||t.width||I/r:i&&t.mobileHeight||t.height||containerSize2/r,z="X"==l?i&&t.mobileHeight||t.height||Y.height:i&&t.mobileWidth||t.width||Y.width,A=R.length,N=o.querySelectorAll(".vl-slider-item")[Math.round(A/2)+Math.floor(r/2)],V=(N&&N.dataset.itemId,H/3),D=0;be();var F,P,_=A>=2*r;if(null==w)w=!1;if(null==y)y=!1;var U,j,G,J,K,Q,Z,$,ee,te,ie,ne,oe,re,le,de,se,ae,ce,ue,me=!1,ve=!1,pe=!1;r>=A&&(p=!1,x=!1,u=!1),S.style.transform="translate"+l+"("+(_?-Math.round(A/2)*H:0)+"px)",O=S.style.transform,Xe(),W=parseFloat(O.substring(O.indexOf("(")+1,O.indexOf("px"))),i&&(w=!1,x=!1),v&&function(e){for(var t=0;t<R.length;t++){var i=R[t].dataset,n=i.link||"",o=n.substring(n.indexOf("OM.zn=")+6,n.indexOf("&OM.zpc=")),r=decodeURIComponent(o.substring(0,o.lastIndexOf("-w")));e.push({id:i.id||null,name:i.name||null,price:i.price?parseFloat(i.price).toFixed(2):null,brand:i.brand||null,position:t,list:"Visilabs"+r||null})}dataLayer.push({event:"visilabs_recommendation_impression",ecommerce:{currencyCode:"TRY",impressions:e}})}([]),function(){for(var e=0;e<A;e++)R[e].dataset.itemId=e+1}(),_&&(function(){for(var e=0;e<A;e++){var t=R[e].cloneNode(!0);S.appendChild(t)}for(e=0;e<A/2;e++){var i=o.querySelectorAll(".vl-slider-item")[2*A-1];S.insertBefore(i,o.querySelectorAll(".vl-slider-item")[0])}}(),R=o.querySelectorAll(".vl-slider-item")),p&&(i?b&&ge():ge()),"Y"==l&&(x=!1),x&&(fe(),ke()),we(),(u&&(ue=q.getBoundingClientRect()).top>=0&&ue.left>=0&&ue.bottom<=(window.innerHeight-25||document.documentElement.clientHeight-25)&&ue.right<=(window.innerWidth-25||document.documentElement.clientWidth-25)||u)&&(o.addEventListener("mouseenter",()=>{D=1}),o.addEventListener("mouseleave",()=>{D=0}),window.addEventListener("focus",function(){D=0}),window.addEventListener("blur",function(){D=1}),setInterval(Se,1e3*m)),function(){for(var e=o.querySelectorAll(".vl-slider-item"),t=0;t<e.length;t++)e[t].addEventListener("click",e=>{e.preventDefault()})}(),i?S.addEventListener("touchstart",We,{passive:!1}):(S.addEventListener("mousedown",We),document.addEventListener("mousemove",qe),document.addEventListener("mouseup",Ce)),window.addEventListener("resize",function(){be(),W=parseFloat(O.substring(O.indexOf("(")+1,O.indexOf("px"))),W+=W%H,ye(),we(),x&&fe()})}else console.warn("Widget is not found. No element exist with id="+e);function he(e,t){return parseFloat(getComputedStyle(e)[t])}function ge(){(E=document.createElement("div")).className="vl-arrow-btn vl-prev",o.insertBefore(E,q),(M=document.createElement("div")).className="vl-arrow-btn vl-next",o.appendChild(M),E.addEventListener("click",()=>{Me("prev",r)}),M.addEventListener("click",()=>{Me("next",r)})}function fe(){if(r>1){var e=o.querySelector(".vl-slider-dots");null!=e&&e.parentNode.removeChild(e);var t=document.createElement("ul");t.className="vl-slider-dots",q.appendChild(t);for(var i=0;i<Math.ceil(A/r);i++){var n=document.createElement("li");n.className="vl-slider-dot",n.innerHTML=i+1,n.style.color=L?"white":"transparent",n.addEventListener("click",()=>{Me("dot",r)}),t.appendChild(n)}F=o.querySelectorAll(".vl-slider-dot"),dotsTotal=F.length,F[(P=1)-1].classList.add("active")}else null!=e&&e.parentNode.removeChild(e)}function we(){var t,i,n="#"+e+"{position: relative}#"+e+">.vl-slider{scroll-behavior: smooth; position: relative;"+(X?"":d+": "+H*r+(1==r?20:0)+"px;")+"margin: 0 auto; scroll-snap-type: x mandatory;-webkit-overflow-scrolling: touch;scroll-snap-type: mandatory;-ms-scroll-snap-type: mandatory;scroll-snap-points-x: repeat(100%);-ms-scroll-snap-points-x: repeat(100%);overflow:hidden; }#"+e+">.vl-slider::-webkit-scrollbar { display: none;}#"+e+">.vl-slider>.vl-slider-wrapper{"+d+": "+(_?2*A:A)*H+"px;}#"+e+">.vl-slider>.vl-slider-wrapper>.vl-slider-item{overflow:hidden;"+d+":"+H+"px; display:inline-block; float:left; scroll-snap-align: center;}";p&&(t="#"+e+">.vl-arrow-btn{border-bottom: "+g+"px solid "+f+"; border-right: "+g+"px solid "+f+"; position: absolute; color: #0f0f0f; z-index: 1000;"+("X"==l?"bottom:calc(50% - "+h/2+"px);height:"+h+"px; width: "+h+"px;":"left: calc(50% - 40px);")+" cursor:pointer;}#"+e+">.vl-prev{"+a+":"+-h*Math.sqrt(2)/2+"px; transform: rotate(135deg)}#"+e+">.vl-next{"+c+":"+-h*Math.sqrt(2)/2+"px;transform: rotate(-45deg)}",w&&(t="#"+e+">.vl-arrow-btn {opacity: 0;border-bottom: "+g+"px solid "+f+"; border-right: "+g+"px solid "+f+"; position: absolute; color: #0f0f0f; z-index: 1000;"+("X"==l?"bottom:calc(50% - "+h/2+"px);height:"+h+"px; width: "+h+"px;":"left: calc(50% - 40px);")+" cursor:pointer;}#"+e+":hover > .vl-arrow-btn { opacity: 1; transition: all 0.2s ease-in-out;}#"+e+">.vl-prev{"+a+": 15px; transform: rotate(135deg)}#"+e+">.vl-next{"+c+":15px; transform: rotate(-45deg)}"),n+=t);x&&(i="#"+e+">.vl-slider>.vl-slider-dots {position: absolute; list-style: none; margin: 0; padding: 0; bottom: 15px; text-align: center; "+d+": 100%;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot {cursor:pointer;display: inline-block; color: white; background: black; border-radius: 50%; "+d+": 20px; "+s+": 20px; text-align: center; line-height: 20px; font-size: 18px; margin: 0 5px;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot:hover {background: darkgray}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot.active {background: lightgray; color: black;}",y&&(i="#"+e+":hover > .vl-slider>.vl-slider-dots {opacity: 1; transition: all 0.2s ease-in-out;}#"+e+">.vl-slider>.vl-slider-dots {transition: all 0.2s ease-in-out; opacity: 0; position: absolute; list-style: none; margin: 0; padding: 0; bottom: 0; text-align: center; "+d+": 100%;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot {cursor:pointer;display: inline-block; color: white; background: black; border-radius: 50%; "+d+": 20px; "+s+": 20px; text-align: center; line-height: 20px; font-size: 18px; margin: 0 5px;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot:hover {background: lightgray; color: black;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot.active {background: darkgrey; }"),n+=i);if(document.head.querySelector("#"+e+"-style"))document.head.querySelector("#"+e+"-style").innerHTML=n;else{var u=document.createElement("style");u.id=e+"-style",u.innerHTML=n,document.head.appendChild(u)}p&&b&&C>E.clientWidth&&(E.style.side1=C-E.clientWidth+"px",M.style.side2=C-M.clientWidth+"px"),o.parentNode.style="width: 100%; display: inline-block;"}function be(){if(t.width||t.height)I="X"==l?B.getBoundingClientRect().width-he(B,"paddingLeft")-he(B,"paddingRight"):B.getBoundingClientRect().height-he(B,"paddingTop")-he(B,"paddingBottom"),r=0==(r=Math.floor(I/H)>=k?k:Math.floor(I/H))?1:r;else if(T.length>=1){n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;for(var e=0;e<T.length;e++)T[e].breakpoint>n&&(r=T[e].settings.itemsToView);I="X"==l?B.getBoundingClientRect().width-he(B,"paddingLeft")-he(B,"paddingRight"):B.getBoundingClientRect().height-he(B,"paddingTop")-he(B,"paddingBottom"),H=I/r}}function xe(e){var t=e.dataset,i=t.link||"",n=i.substring(i.indexOf("OM.zn=")+6,i.indexOf("&OM.zpc=")),o=decodeURIComponent(n.substring(0,n.lastIndexOf("-w")));dataLayer.push({event:"visilabs_recommendation_click",ecommerce:{click:{actionField:{list:"Visilabs "+o},products:[{id:t.id,name:t.name,brand:t.brand,position:t.itemId,price:t.price}]}}})}function ye(){S.style.transform="translate"+l+"("+W+"px)"}function Le(e){S.style.transition="all "+.2*e+"s ease-in-out"}function Xe(){S.style.transition="all 0s ease-in-out"}function Te(){var e=Math.round(A/2)+Math.ceil(r/2);return e>o.querySelectorAll(".vl-slider-item").length-1&&(e=o.querySelectorAll(".vl-slider-item").length-1),N=o.querySelectorAll(".vl-slider-item")[e],N.dataset.itemId}function ke(){if(x&&r>1){P=Math.ceil(Te()/r);var e=o.querySelector(".vl-slider-dot.active"),t=e.innerHTML;P!=t&&(e.classList.remove("active"),F[P-1].classList.add("active"))}}function Ee(e,t){me=!0,setTimeout(()=>{if(e<0)for(var i=0;i<t;i++){var n=(r=o.querySelectorAll(".vl-slider-item"))[r.length-1];S.insertBefore(n,r[0]),Xe(),ve=!1,W-=H}if(e>0)for(i=0;i<t;i++){var r,l=(r=o.querySelectorAll(".vl-slider-item"))[0];S.appendChild(l),Xe(),ve=!1,W+=H}ye(),me=!1},200*t)}function Me(e,t){if(!ve){var i;if(ve=!0,Le(t),"prev"===e&&(i=-1),"next"===e&&(i=1),"dot"===e){var n=event.target.innerHTML,o=n-P,l=Math.abs(n-P);i=o/l,midItemRemainder=Te()%r,0===midItemRemainder&&(midItemRemainder=r),Math.ceil(r/2)-midItemRemainder==0?t*=l:(t*=l,t+=(Math.ceil(r/2)-midItemRemainder)*i),P=n}W-=t*H*i,r>1&&!_&&(W=(W=W>=0?0:W)<=-(A-r+1)*H?-(A-r)*H:W),ye(),_&&Ee(i,t),setTimeout(ke,200*t),ve=!1}}function Se(){W<=0&&0===D&&Me("next",r)}function Oe(){clearTimeout(ce),pe=!1,S.style.transform="translate"+l+"("+(W+$-$%H)+"px)",Le(1)}function We(e){pe||me||(G=performance.now(),"touchstart"===e.type&&(S.addEventListener("touchmove",qe,{passive:!1}),S.addEventListener("touchend",Ce,{passive:!1}),U="X"==l?e.touches[0].clientX:e.touches[0].clientY,j="X"==l?e.touches[0].clientY:e.touches[0].clientX),"mousedown"===e.type&&0===e.button&&(e.preventDefault(),U="X"==l?e.clientX:e.clientY,j="X"==l?e.clientY:e.clientX),pe=!0,ce=setTimeout(Oe,200),W)}function qe(e){if(pe)if(draggingT=performance.now(),"touchmove"===e.type&&(S.removeEventListener("touchstart",qe),J="X"==l?e.touches[0].clientX:e.touches[0].clientY,draggingDimension2="X"==l?e.touches[0].clientY:e.touches[0].clientX),"mousemove"===e.type&&0===e.button&&(J="X"==l?e.clientX:e.clientY,draggingDimension2="X"==l?e.clientY:e.clientX,e.preventDefault()),$=J-U,ee=Math.abs($),te=ee/$,ie=draggingDimension2-j,ne=Math.abs(ie),ne/ie,Xe(),S.style.transform="translate"+l+"("+(W+$)+"px)",ee>7&&(e.preventDefault(),clearTimeout(ce)),ne>ee&&ne>z/5&&Oe(),_){if(ee>=r*H){return W+=r*H*te,ye(),Ee(-te,r),setTimeout(ke,200),S.removeEventListener("touchmove",qe),pe=!1,clearTimeout(ce),!0}}else if(W+$>H||W+$<=-(A-r+1)*H)return W+$>H&&(W=0),W+$<=-(A-r+1)*H&&(W=H*-(A-r)),Le(1),ye(),setTimeout(ke,200),S.removeEventListener("touchmove",qe),pe=!1,clearTimeout(ce),!0}function Ce(e){if(setTimeout(function(){S.addEventListener("touchstart",We,{passive:!1})},0),pe){if(Z=performance.now(),ae=Z-G,"touchend"!==e.type&&"touchcancel"!==e.type||(K="X"==l?e.changedTouches[0].clientX:e.changedTouches[0].clientY,Q="X"==l?e.changedTouches[0].clientY:e.changedTouches[0].clientX),"mouseup"===e.type&&(K="X"==l?e.clientX:e.clientY,Q="X"==l?e.clientY:e.clientX),oe=K-U,re=Math.abs(oe),le=re/oe,de=Q-j,se=Math.abs(de),ae<200&&se<=2&&re<=2){var t;pe=!1,clearTimeout(ce);for(var i=e.path||e.composedPath&&e.composedPath(),n=0;n<i.length;n++)if(void 0!==i[n].href){if(t=i[n].href,v)for(var o=0;o<i.length;o++)if(i[o].classList.contains("vl-slider-item")){xe(i[o]);break}break}null!=t&&(window.location=t)}if(re<V)Le(1),ye(),pe=!1,clearTimeout(ce);else Me(-1===le?"next":"prev",Math.floor(re/H)+(re%H>V?1:0)),pe=!1,clearTimeout(ce)}}}

var identifier = "vl-category-topsellers";

vlWidgetHandler(identifier, {
    axis: "X",
    itemsToView: 4,
    arrows: {
        size: 18,
        borderSize: 6.25,
        color: "#31363a",
        mobile: true
    },
    autoScroll: true,
    autoScrollTimer: 7,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                itemsToView: 2
            }
        }
    ]
});


var wrapper = document.getElementById(identifier);

if (wrapper) {
    var productPrice = wrapper.querySelectorAll(".vl-price");
    var dPrice = wrapper.querySelectorAll(".vl-dprice");
    var item = wrapper.querySelectorAll(".vl-slider-item");
    var imgEls = wrapper.querySelectorAll(".vl-product-img");


    for (var i = 0; i < productPrice.length; i++) {
        if (dPrice[i].innerText == productPrice[i].innerText) {
            productPrice[i].innerHTML = "<br />";
            productPrice[i].style.textDecoration = "none";
            dPrice[i].style.color = '#000';
        }
    }
for(i=0;i<item.length;i++){
if (dPrice[i].innerText.indexOf(".")){
dPrice[i].innerText = dPrice[i].innerText.replace(".",",");
}
if (productPrice[i].innerText.indexOf(".")){
productPrice[i].innerText = productPrice[i].innerText.replace(".",",");
}
}
}



 /*indirim[i].style.display = "none";

 var imgSrc = imgEls[i].src;
    imgEls[i].src = imgSrc.split(".jpg")[0] + "_size264x200_cropCenter.jpg";*/

//MAIN TEMPLATE

<style id="home-topsellers-style">
    .vl-discounted {
        display: inline-block;
        padding: 5px 8px;
        margin-top: 9px;
        font-weight: 200;
        border: 1px solid #a80000;
        color: #a80000;
        float: right;
    }

    

    #vl-home-topsellers>.vl-slider {
        margin-right: 1px;
    }

    .vl-header-top {
        position: relative;
        text-align: center;
        font-size: 20px;
        display: block;
        font-family: Georgia;
        color: #2f3032;
    }

    .vl-header-top::after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #dedede;
    }

    .vl-header {
        display: inline-block;
        padding: 10px 20px;
        background: #fff;
        position: relative;
        z-index: 2;
    }
    

    .vl-prev {
        left: 15px !important;
    }

    .vl-next {
        right: 15px !important;
    }

    .vl-arrow-btn {
        bottom: calc(50% - 30px) !important;
    }

    .vl-slider-item {
        text-decoration: none;
        color: black;
    }

    .vl-slider-item:hover {
        text-decoration: none;
        color: black;
    }

    .vl-product-container {
        border-right: 1px solid #ccc;
        padding: 10px;
        text-align: center;
    }

    .vl-product-img {
        width: 100%;
        margin-bottom: 20px;
    }

    .vl-title {
        font-size: 14px;
        font-weight: 400;
        margin: 0 5px 20px 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 38px;
    text-align:center;
    }

    .vl-price {
        text-decoration: line-through;
        font-size: 18px;
        color: black;
        font-weight: 400;
        text-align: center;
    }

    .vl-dprice {
        font-size: 24px;
        color: #ff9086;
        font-weight: 600;
    }

    .vl-price-item {
        line-height: 1.2;
        margin-left: 7px;
    }

    .noface-section__heading{
    font-size: 25px;
    text-align: center;
    }

    @media only screen and (max-width: 767px) {
        .vl-discounted {
            float: left;
font-size: 10px;
padding: 5px 2px;
margin-top: 0;
        }

        .vl-title {
            font-size: 13px;
            height: 35px !important;
        }

        .vl-price {
            text-align: center;
            font-size: 14px;
            font-weight: unset;
        }

        .vl-dprice {
            font-size: 15px;
            font-weight: unset;
        }
.vl-price-item{display: inline-block;}
    }

@media only screen and (max-width: 600px) {
  .vl-product-img {
    margin-bottom: 5px !important;
  }
  .vl-title {
    margin-bottom: 10px;
  }

.vl-slider {
    width: calc(100% + 30px);
    margin-left: -15px;
}

.vl-discounted { display: none; }

.noface-section__heading{
    font-size: 20px;
    text-align: center;
}
}
</style>
<div class="vl-widget" id="vl-category-topsellers">
  <div class="noface-section__heading">
    <span class="noface-section__heading__text">Sizin İçin Seçtiklerimiz</span>
  </div>
    <div class="vl-slider">
        <div class="vl-slider-wrapper">
            <%ItemTemplate%>
        </div>
    </div>
</div>




//PRODUCT TEMPLATE

<div class="vl-slider-item">
    <a href="<%dest_url%>" data-id="<%code%>" data-name="<%title%>" data-price="<%dprice%>" data-brand="<%brand%>"
        style="text-decoration:none;color:#000">
        <div class="vl-product-container">
            <img class="vl-product-img" src="<%img%>" alt="<%title%>"">
            <div class=" vl-title"><%title%></div>
</a>
        <div class="vl-price-item">

            <div class="vl-price"><%price%> TL</div>
            <div class="vl-dprice"><%dprice%> TL</div>
        </div>
</div>

</div>


//aaaa


<div class="vl-slider-item">
    <a href="<%dest_url%>" data-id="<%code%>" data-name="<%title%>" data-price="<%dprice%>" data-brand="<%brand%>"
        style="text-decoration:none;color:#000">
        <div class="vl-product-container">
            <img class="vl-product-img" src="<%img%>" alt="<%title%>"">
            <div class=" vl-title"><%title%></div>
</a>
        <div class="vl-price-item">
<div class="vl-discounted">
          İNDİRİMLİ ÜRÜN
        </div>
            <div class="vl-price"><%price%> TL</div>
            <div class="vl-dprice"><%dprice%> TL</div>
        </div>
</div>

</div>