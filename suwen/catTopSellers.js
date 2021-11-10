function vlWidgetHandler(e,t={arrows:{},dots:{}}){if(!e)return console.error("Widget is not found. id of widget is not defined as a function parameter");var r=t.itemsToView||4,o=t.axis||"X",l="X"==o?t.width||300:t.height||300,n="X"==o?t.height||300:t.width||300,i=t.autoScroll||!0,a=t.autoScrollTimer||5,s=t.enhancedEcommerce||!1,d=null==t.arrows||t.arrows;function c(){var e=null,t=null;return(window.opr&&opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0)&&(e="opera"),"undefined"!=typeof InstallTrigger&&(e="Firefox"),(/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString())&&(e="safari"),document.documentMode&&(e="IE",t=!0),!t&&window.StyleMedia&&(e="Edge"),window.chrome&&(window.chrome.webstore||window.chrome.runtime)&&(e="Chrome"),e}arrowSize=null==t.arrows||null==t.arrows.size?20:t.arrows.size,arrowBorderSize=null==t.arrows||null==t.arrows.borderSize?2:t.arrows.borderSize,arrowColor=null==t.arrows||null==t.arrows.color?"#333":t.arrows.color,N=null!=t.arrows&&null!=t.arrows.showOnHover&&t.arrows.showOnHover,mobileArrows=null==t.arrows||null==t.arrows.mobile||t.arrows.mobile,dots=null!=t.dots&&t.dots,Y=null!=t.dots&&null!=t.dots.showOnHover&&t.dots.showOnHover,dotsNumbers=null!=t.dots&&null!=t.dots.numbers&&t.dots.numbers;var u=r,p=document.getElementById(e);if(null!=p){var m,v,f=p.querySelector(".vl-slider-wrapper"),h=f.style.transform,w=parseFloat(h.substring(h.indexOf("(")+1,h.indexOf("px"))),g="X"==o?"width":"height",y="X"==o?"height":"width",b="Y"==o?"top":"left",x="Y"==o?"bottom":"right",S=p.querySelector(".vl-slider"),T=S.offsetLeft,k=p.querySelectorAll(".vl-slider-item"),X=k.length,L=p.querySelectorAll(".vl-slider-item")[Math.round(X/2)+Math.floor(r/2)],M=(L&&L.dataset.itemId,l/3),E=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),z=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),O=0;ne();var C,q,A=X>=2*r,I=parseFloat(window.getComputedStyle(p.parentNode.parentNode)[g]);if("Firefox"===c()&&S.scrollTo(0,0),null==N)var N=!1;if(null==Y)var Y=!1;var H,B,R,F,P,D,W,_,V,U,j,G,J,K,Q,Z,$,ee=!1,te=!1;r>=X&&(d=!1,dots=!1,i=!1),z||(f.style.transform="translate"+o+"("+(A?-Math.round(X/2)*l:0)+"px)"),h=f.style.transform,w=parseFloat(h.substring(h.indexOf("(")+1,h.indexOf("px"))),E&&(N=!1,dots=!1,i=!1,A=!z&&A),s&&function(e){for(var t=0;t<k.length;t++){var r=k[t].dataset,o=r.link||"",l=o.substring(o.indexOf("OM.zn=")+6,o.indexOf("&OM.zpc=")),n=decodeURIComponent(l.substring(0,l.lastIndexOf("-w")));e.push({id:r.id||null,name:r.name||null,price:r.price?parseFloat(r.price).toFixed(2):null,brand:r.brand||null,position:t,list:"Visilabs"+n||null})}dataLayer.push({event:"visilabs_recommendation_impression",ecommerce:{currencyCode:"TRY",impressions:e}})}([]),function(){for(var e=0;e<X;e++)k[e].dataset.itemId=e+1}(),A&&(function(){for(var e=0;e<X;e++){var t=k[e].cloneNode(!0);f.appendChild(t)}for(e=0;e<X/2;e++){var r=p.querySelectorAll(".vl-slider-item")[2*X-1];f.insertBefore(r,p.querySelectorAll(".vl-slider-item")[0])}}(),k=p.querySelectorAll(".vl-slider-item")),d&&(E?mobileArrows&&re():re()),"Y"==o&&(dots=!1),dots&&(oe(),ue()),le(),i&&($=S.getBoundingClientRect()).top>=0&&$.left>=0&&$.bottom<=(window.innerHeight-25||document.documentElement.clientHeight-25)&&$.right<=(window.innerWidth-25||document.documentElement.clientWidth-25)&&setInterval(ve,1e3*a),function(){for(var e=p.querySelectorAll(".vl-slider-item"),t=0;t<e.length;t++)e[t].addEventListener("click",e=>{e.preventDefault()}),z||e[t].addEventListener("touchend",e=>{e.preventDefault()})}(),f.addEventListener("mousedown",fe),document.addEventListener("mousemove",he),document.addEventListener("mouseup",we),z||(f.addEventListener("touchstart",fe,{passive:!1}),document.addEventListener("touchmove",he,{passive:!1}),document.addEventListener("touchend",we,{passive:!1})),"firefox"===c()&&S.scrollTo(0,0),window.addEventListener("resize",function(){ne(),le(),oe()})}else console.warn("Widget is not found. No element exist with id="+e);function re(){(m=document.createElement("div")).className="vl-arrow-btn vl-prev",p.insertBefore(m,S),(v=document.createElement("div")).className="vl-arrow-btn vl-next",p.appendChild(v),z?(m.onclick=function(){var e;"X"==o?(e=S.scrollLeft)>=l&&(se(1),f.style.transform="translate"+o+"("+l+"px)",setTimeout(function(){de(),f.style.transform="translate"+o+"(0)",S.scrollTo(e-l,0)},200)):(e=S.scrollTop)>=l&&(se(1),f.style.transform="translate"+o+"("+l+"px)",setTimeout(function(){de(),f.style.transform="translate"+o+"(0)",S.scrollTo(0,e-l)},200))},v.onclick=function(){if("X"==o)(e=S.scrollLeft)<=l*(X-2)&&(se(1),f.style.transform="translate"+o+"("+-l+"px)",setTimeout(function(){de(),f.style.transform="translate"+o+"(0)",S.scrollTo(e+l,0)},200));else if(e<=l*(X-2)){var e=S.scrollTop;se(1),f.style.transform="translate"+o+"("+-l+"px)",setTimeout(function(){de(),f.style.transform="translate"+o+"(0)",S.scrollTo(0,e+l)},200)}}):(m.addEventListener("click",()=>{me("prev",r)}),v.addEventListener("click",()=>{me("next",r)}))}function oe(){if(r>1){var e=p.querySelector(".vl-slider-dots");null!=e&&e.parentNode.removeChild(e);var t=document.createElement("ul");t.className="vl-slider-dots",S.appendChild(t);for(var o=0;o<Math.ceil(X/r);o++){var l=document.createElement("li");l.className="vl-slider-dot",l.innerHTML=o+1,l.style.color=dotsNumbers?"white":"transparent",l.addEventListener("click",()=>{me("dot",r)}),t.appendChild(l)}C=p.querySelectorAll(".vl-slider-dot"),dotsTotal=C.length,C[(q=1)-1].classList.add("active")}else null!=e&&e.parentNode.removeChild(e)}function le(){var t,i,a="#"+e+"{position: relative}#"+e+">.vl-slider{scroll-behavior: smooth; position: relative; "+g+": "+(l*r+(1==r?20:0))+"px; "+y+":"+(n+(dots?50:15))+"px; margin: 0 auto; scroll-snap-type: x mandatory;-webkit-overflow-scrolling: touch;scroll-snap-type: mandatory;-ms-scroll-snap-type: mandatory;scroll-snap-points-x: repeat(100%);-ms-scroll-snap-points-x: repeat(100%);overflow: hidden; }#"+e+">.vl-slider.mobile{max-width: 100vw;overflow: "+(z?"scroll":"hidden")+";}#"+e+">.vl-slider::-webkit-scrollbar { display: none;}#"+e+">.vl-slider>.vl-slider-wrapper{"+g+": "+(A?2*X:X)*l+"px;}#"+e+">.vl-slider>.vl-slider-wrapper>.vl-slider-item{"+g+":"+l+"px; "+y+":"+n+"px; display:inline-block; float:left; scroll-snap-align: center center;}";d&&(t="#"+e+">.vl-arrow-btn{border-bottom: "+arrowBorderSize+"px solid "+arrowColor+"; border-right: "+arrowBorderSize+"px solid "+arrowColor+"; position: absolute; color: #0f0f0f; z-index: 1000;"+("X"==o?"bottom:"+(n/2+(dots?25:7.5))+"px;height:"+arrowSize+"px; width: "+arrowSize+"px;":"left: calc(50% - 40px);")+" cursor:pointer;}#"+e+">.vl-prev{"+b+":190px; transform: rotate(135deg)}#"+e+">.vl-next{"+x+":190px;transform: rotate(-45deg)}",N&&(t="#"+e+">.vl-arrow-btn {opacity: 0;border-bottom: "+arrowBorderSize+"px solid "+arrowColor+"; border-right: "+arrowBorderSize+"px solid "+arrowColor+"; position: absolute; color: #0f0f0f; z-index: 1000;"+("X"==o?"bottom:"+(n/2+(dots?25:7.5))+"px;height:"+arrowSize+"px; width: "+arrowSize+"px;":"left: calc(50% - 40px);")+" cursor:pointer;}#"+e+":hover > .vl-arrow-btn { opacity: 1; transition: all 0.2s ease-in-out;}#"+e+">.vl-prev{"+b+": 15px; transform: rotate(135deg)}#"+e+">.vl-next{"+x+":190px; transform: rotate(-45deg)}"),a+=t);dots&&(i="#"+e+">.vl-slider>.vl-slider-dots {position: absolute; list-style: none; margin: 0; padding: 0; bottom: 15px; text-align: center; "+g+": 100%;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot {cursor:pointer;display: inline-block; color: white; background: black; border-radius: 50%; "+g+": 20px; "+y+": 20px; text-align: center; line-height: 20px; font-size: 18px; margin: 0 5px;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot:hover {background: darkgray}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot.active {background: lightgray; color: black;}",Y&&(i="#"+e+":hover > .vl-slider>.vl-slider-dots {opacity: 1; transition: all 0.2s ease-in-out;}#"+e+">.vl-slider>.vl-slider-dots {transition: all 0.2s ease-in-out; opacity: 0; position: absolute; list-style: none; margin: 0; padding: 0; bottom: 0; text-align: center; "+g+": 100%;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot {cursor:pointer;display: inline-block; color: white; background: black; border-radius: 50%; "+g+": 20px; "+y+": 20px; text-align: center; line-height: 20px; font-size: 18px; margin: 0 5px;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot:hover {background: lightgray; color: black;}#"+e+">.vl-slider>.vl-slider-dots>.vl-slider-dot.active {background: darkgrey; }"),a+=i);if(document.head.querySelector("#"+e+"-style"))document.head.querySelector("#"+e+"-style").innerHTML=a;else{var s=document.createElement("style");s.id=e+"-style",s.innerHTML=a,document.head.appendChild(s)}d&&mobileArrows&&T>m.clientWidth&&(m.style.side1=T-m.clientWidth+"px",v.style.side2=T-v.clientWidth+"px"),E&&S.classList.toggle("mobile"),p.parentNode.style="width: 100%; display: inline-block;"}function ne(){I=parseFloat(window.getComputedStyle(p.parentNode.parentNode)[g]),r=Math.floor(I/l)>=u?u:Math.floor(I/l)}function ie(e){var t=e.dataset,r=t.link||"",o=r.substring(r.indexOf("OM.zn=")+6,r.indexOf("&OM.zpc=")),l=decodeURIComponent(o.substring(0,o.lastIndexOf("-w")));dataLayer.push({event:"visilabs_recommendation_click",ecommerce:{click:{actionField:{list:"Visilabs "+l},products:[{id:t.id,name:t.name,brand:t.brand,position:4,price:t.price}]}}})}function ae(){f.style.transform="translate"+o+"("+w+"px)"}function se(e){f.style.transition="all "+.2*e+"s ease-in-out"}function de(){f.style.transition="all 0s ease-in-out"}function ce(){var e=Math.round(X/2)+Math.ceil(r/2);return e>p.querySelectorAll(".vl-slider-item").length-1&&(e=p.querySelectorAll(".vl-slider-item").length-1),L=p.querySelectorAll(".vl-slider-item")[e],L.dataset.itemId}function ue(){if(dots&&r>1){q=Math.ceil(ce()/r);var e=p.querySelector(".vl-slider-dot.active"),t=e.innerHTML;q!=t&&(e.classList.remove("active"),C[q-1].classList.add("active"))}}function pe(e,t){ee=!0,setTimeout(()=>{if(e<0)for(var r=0;r<t;r++){var o=(n=p.querySelectorAll(".vl-slider-item"))[n.length-1];f.insertBefore(o,n[0]),de(),w-=l}if(e>0)for(r=0;r<t;r++){var n,i=(n=p.querySelectorAll(".vl-slider-item"))[0];f.appendChild(i),de(),w+=l}ae(),ee=!1},200*t)}function me(e,t){var o;if(se(t),"prev"===e&&(o=-1),"next"===e&&(o=1),"dot"===e){var n=event.target.innerHTML,i=n-q,a=Math.abs(n-q);o=i/a,midItemRemainder=ce()%r,0===midItemRemainder&&(midItemRemainder=r),Math.ceil(r/2)-midItemRemainder==0?t*=a:(t*=a,t+=(Math.ceil(r/2)-midItemRemainder)*o),q=n}w-=t*l*o,r>1&&(w=(w=w>=0?0:w)<-(X-r)*l?-(X-r)*l:w),ae(),A&&pe(o,t),setTimeout(ue,200)}function ve(){w<=0&&0===O&&me("next",r),S.addEventListener("mouseenter",()=>{O=1}),S.addEventListener("mouseleave",()=>{O=0})}function fe(e){te||ee||(R=performance.now(),"touchstart"===e.type&&(document.documentElement.style.overflow="hidden",e.preventDefault(),H="X"==o?e.touches[0].pageX:e.touches[0].pageY,B="X"==o?e.touches[0].pageY:e.touches[0].pageX),"mousedown"===e.type&&0===e.button&&(e.preventDefault(),H="X"==o?e.clientX:e.clientY,B="X"==o?e.clientY:e.clientX),te=!0,w)}function he(e){if(te)if(draggingT=performance.now(),"touchmove"===e.type&&(e.preventDefault(),F="X"==o?e.touches[0].pageX:e.touches[0].pageY,draggingDimension2="X"==o?e.touches[0].pageY:e.touches[0].pageX),"mousemove"===e.type&&0===e.button&&(F="X"==o?e.clientX:e.clientY,e.preventDefault()),_=F-H,V=Math.abs(_),U=V/_,de(),f.style.transform="translate"+o+"("+(w+_)+"px)",A){if(V>=r*l){w+=r*l*U,ae(),pe(-U,r),setTimeout(ue,200),te=!1}}else(w+_>l||w+_<=-(X-r+1)*l)&&(w+_>l&&(w=0),w+_<=-(X-r+1)*l&&(w=l*-(X-r)),se(1),ae(),setTimeout(ue,200),te=!1)}function we(e){if(te){if(W=performance.now(),Z=W-R,"touchend"!==e.type&&"touchcancel"!==e.type||(document.documentElement.style.overflow="auto",e.preventDefault(),P="X"==o?e.changedTouches[0].pageX:e.changedTouches[0].pageY,D="X"==o?e.changedTouches[0].pageY:e.changedTouches[0].pageX),"mouseup"===e.type&&(P="X"==o?e.clientX:e.clientY,D="X"==o?e.clientY:e.clientX),j=P-H,G=Math.abs(j),J=G/j,K=D-B,Q=Math.abs(K),Z<200&&Q<=2&&G<=2){var t;te=!1;for(var r=e.path||e.composedPath&&e.composedPath(),n=0;n<r.length;n++)if(void 0!==r[n].href){if(t=r[n].href,s)for(var i=0;i<r.length;i++)if(r[i].classList.contains("vl-slider-item")){ie(r[i]);break}break}null!=t&&(window.location=t)}if(G<M)se(1),ae(),te=!1;else me(-1===J?"next":"prev",Math.floor(G/l)+(G%l>M?1:0)),te=!1}}}
vlWidgetHandler("vl-category-topsellers", {
    width: 260,
    height: 380,
    itemsToView: 4,
arrows: {
            size: 25,
            borderSize: 1,
   showOnHover: false,
        },
    enhancedEcommerce: false
});
var productPrice = document.querySelectorAll(".vl-product-price");
var dPrice = document.querySelectorAll(".vl-product-dprice");

for(var i =0; i<productPrice.length; i++){
  if(dPrice[i].innerText == productPrice[i].innerText){
   productPrice[i].remove();
 }
}

//MAIN TEMPLATE
<style>
      .vl-product-container {
        width: 260px;
        margin: 0 auto;
       padding: 0 20px;
    }

    .vl-product-item-image {
        width: 100%;
    }

    .vl-product-item-name {
        display: block;
        font-weight: 200;
        text-decoration: none;
        color: black;
        height: 38px;
        font-size: 14px;
    }

    .vl-product-price {
        font-size: 14px;
        font-weight: 500;
        text-decoration: line-through;
    }

    .vl-product-dprice {
        font-size: 18px;
        font-weight: 200;
        color: #d0112b;
    }
.vl-slider-header {
    color: #000;
    width: 100%;
    margin: 30px 0;
    font-size: 24px;
    text-align: center;
    line-height: normal;
}

</style>
<div class="vl-widget" id="vl-category-topsellers">
<div class="vl-slider-header">Kategorinin Çok Satanları </div>
    <div class="vl-slider">
        <div class="vl-slider-wrapper">
            <%ItemTemplate%>
        </div>
    </div>
</div>


//PRODUCT TEMPLATE
<div class="vl-slider-item" data-id="<%code%>" data-name="<%title%>" data-price="<%dprice%>"
                                data-brand="<%brand%>">
    <div class="vl-product-container">
        <a href="<%dest_url%>" >
            <img class="vl-product-item-image" src="<%img%>" alt="<%title%>">
        </a>
        <a class="vl-product-item-name" href="<%dest_url%>"><%title%></a>
        <span class="vl-product-price"><%price%> TL</span>
        <span class="vl-product-dprice"><%dprice%> TL</span>
    </div>
</div>