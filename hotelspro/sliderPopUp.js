var config = [{imgLink: "http://img.euromsg.net/1EF91D0B4340436A996C75215DB6CA3C/images/Cassia-Phuket.jpg", url: "https://app.hotelspro.com/hotel/hotels/1a7f68/?checkin=2020-05-20&checkout=2020-05-25&client_nationality=CN&currency=THB&destination_code=c553248627840640457&offset=60&pax=2&search_key=5bbd2ccc4f774943104551d70b49e411&utm_source=newsletter&utm_medium=popup&utm_campaign=April_APAC&utm_term=Cassia_Phuket", thumb: '' ,expireDate:"2020-05-31"},
{imgLink: "http://img.euromsg.net/1EF91D0B4340436A996C75215DB6CA3C/images/Grand-Mercure-Phuket.jpg", url: "https://app.hotelspro.com/hotel/hotels/16c215/?checkin=2020-05-20&checkout=2020-05-22&client_nationality=TR&currency=TRY&pax=2&place_id=7.8882476%2C98.2966056544861&search_key=991632f2c276a22f57c87d3056c0de75&utm_source=newsletter&utm_medium=popup&utm_campaign=April_APAC&utm_term=Grand_Mercure_Phuket_Patong", thumb: '' ,expireDate:"2020-05-31"}
];
const targetId = 173;
const scenarioName = 'Cassia - Grand Mercure - Slider - PopUp';
function setCookie(e){var t=Math.floor((new Date).getTime()/1e3)+1209600;document.cookie=e+'={"expDate":'+t+"};"}function getCookie(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return JSON.parse(n.substring(t.length,n.length))}return""}if(void 0===window.VLGlobals&&(window.VLGlobals={}),void 0===window.VLGlobals.CityOpportunies){var chk=getCookie(scenarioName);if(chk&&(chk=chk.expDate),!chk||chk<=(new Date).getTime()/1e3){if(window.VLGlobals.CityOpportunies=!0,console.log("Initializing: City Opportunies"),null==document.getElementById("swiper-5-css")){var style=document.createElement("link");style.id="swiper-5-css",style.rel="stylesheet",style.href="https://unpkg.com/swiper@5.0.4/css/swiper.min.css",document.head.appendChild(style)}if(null==document.getElementById("swiper-5-js")){var script=document.createElement("script");script.id="swiper-5-js",script.src="https://unpkg.com/swiper@5.0.4/js/swiper.min.js",document.head.appendChild(script)}function popupHandler(){var e=document.createElement("style");e.innerText=".swiper-container{width:100%;margin-left:auto;margin-right:auto}.swiper-slide{background-size:cover;background-position:center}.gallery-top{height:80%;width:100%}.gallery-thumbs{height:23%;box-sizing:border-box;padding:10px 0}.gallery-thumbs .swiper-slide{width:25%;height:100%;opacity:.4}.gallery-thumbs .swiper-slide-thumb-active{opacity:1}.pop-container{position:fixed;top:50%;left:50%;width:780px;height:490px;z-index:124;transform:translate(-50%,-50%)}.overlay{background-color:#000;opacity:.8;width:100%;height:100%;position:fixed;z-index:123;right:0;left:0;bottom:0;top:0}.visi-overlay-wrapper{position:absolute;right:0;top:0;bottom:0;left:0;z-index:100003}.cls_btn{position:absolute;right:-10px;top:-20px;width:20px;height:20px;background-image:url(data:image/png;base64,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);background-size:contain}.swiper-container.gallery-thumbs .swiper-wrapper{display:flex;justify-content:center}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{pointer-events:all}.swiper-button-black {--swiper-navigation-color:#8c8c8c !important;--swiper-navigation-size:28px;}",e.setAttribute("id","vl-popup-style"),document.querySelector("#vl-popup-style")||document.head.appendChild(e);var t=document.createElement("div");function i(e,t,i){this.url=t,this.img=e,this.thumb=i||this.img;var r=document.createElement("a");if(r.className="swiper-slide",r.style.backgroundImage="url('"+this.img+"')",r.href=t,r.style.zIndex="124",t.substring(t.lastIndexOf("/"),t.length).indexOf("?")>0?r.href+="&OM.zn=acttype-4&OM.zpc=act-"+targetId:r.href+="?OM.zn=acttype-4&OM.zpc=act-"+targetId,r.target="_blank",r.addEventListener("click",n),document.querySelector(".swiper-container.gallery-top > .swiper-wrapper")?document.querySelector(".swiper-container.gallery-top > .swiper-wrapper").appendChild(r):console.warn("Swiper Container not found"),document.querySelector(".swiper-container.gallery-thumbs > .swiper-wrapper")){var o=document.createElement("div");o.className="swiper-slide",o.style.backgroundImage="url('"+this.thumb+"')",document.querySelector(".swiper-container.gallery-thumbs > .swiper-wrapper").appendChild(o)}else console.warn("Swiper Container for thumbs not found")}function r(){var e=document.querySelector(".visi-overlay-wrapper");e&&(e.style.display="none"),setCookie(scenarioName)}function n(){ga("rmc.send","event","RMC-Popup",scenarioName,"Click",{nonInteraction:!0})}t.innerHTML='\n<div class="visi-overlay-wrapper">\n<div class="overlay">\n</div>\n<div class="pop-container">\n<div class="cls_btn"></div>\n<div class="swiper-container gallery-top">\n    <div class="swiper-wrapper"> \n    </div>\n    <div class="swiper-button-next swiper-button-black"></div>\n    <div class="swiper-button-prev swiper-button-black"></div>\n  </div>\n  <div class="swiper-container gallery-thumbs">\n    <div class="swiper-wrapper">     \n    </div>\n  </div>\n</div>\n</div>\n',document.body.appendChild(t),t.querySelector(".overlay").addEventListener("click",function(){var e=document.querySelector(".visi-overlay-wrapper");e&&(e.style.display="none")}),function(){if(config.length>0){config=function(e){for(var t,i,r=e.length;0!==r;)i=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[i],e[i]=t;return e}(config);for(var e=0;e<config.length;e++)config[e].expireDate?new Date(config[e].expireDate)>new Date&&i(config[e].imgLink,config[e].url,config[e].thumb):i(config[e].imgLink,config[e].url,config[e].thumb);t.querySelectorAll(".swiper-slide").length>0?(function(){var e=document.querySelector(".swiper-container.gallery-top > .swiper-wrapper");if(e){if(e.querySelectorAll(".swiper-slide").length>1)var t=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0});else if(document.querySelector(".swiper-container.gallery-thumbs")&&(document.querySelector(".swiper-container.gallery-thumbs").style.display="none"),e.querySelector(".swiper-slide")&&e.querySelector(".swiper-slide").setAttribute("onclick",'var vl=document.querySelector(".visi-overlay-wrapper");if(vl){vl.style.display="none";}'),document.querySelector(".swiper-button-black"))for(var i=0;i<document.querySelectorAll(".swiper-button-black").length;i++)document.querySelectorAll(".swiper-button-black")[i].style.display="none";new Swiper(".gallery-top",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:t},autoplay:{delay:5e3},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0})}var n=document.querySelector(".cls_btn");n&&n.addEventListener("click",r)}(),ga("create","UA-121771863123",{name:"rmc",cookieDomain:"auto"}),ga("rmc.send","event","RMC-Popup",scenarioName,"Impression",{nonInteraction:!0})):t.remove()}else t.remove()}()}setTimeout(popupHandler,1000)}}