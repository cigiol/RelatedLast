$(`#vl-home-sabit .vl-slider-wrapper`).slick('setPosition');//slick reflesh slickSetOption: true girilmeli.


PARAMETRELER;
UseCtgNameAsCtgCode 'True' // kategori ismini kategori kodu olarak alabiliyor XML de.

EuroMsgEncoding utf-8 // Product Integration kısmına eklenecek.Ürün isimleri garip gitmesin diye.

EnablePageToMemcache //realtime a ekleniyor anaonim kullanıcıları tutmak için.AYRICA SÜREYLE İLGİLİ KURALLAR İÇİN.


vl.AddParameter("OM.uri", "/om_evt.gif"); // pageview saymadan collect çağırmak için.


//SCROLL YAPILDIĞINDA BADGE EKLENSİN.
var scrollTop = document.documentElement.scrollTop;
  function scrollDetectFunction() {
  
    if (scrollTop != document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
        addBanner();
    }
  
  }
  setInterval(() => {
    
    scrollDetectFunction();
  }, 3000);

//FİLTRE YAPILINCA BADGE GİTMESİN.
  var currentLink = window.location.href;
setInterval(() => {
    if (window.location.href != currentLink) {
        currentLink = window.location.href;
        setTimeout(() => {
            badgeIt();
        }, 1000);
    }
}, 2000);

//OBSERVER
var observingElement = document.querySelector("#OrderSummary");

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

    });
    console.log("hi");
});

observer.observe(observingElement, {
    childList: true
    , subtree: false
    , attributes: false
    , characterData: false
});
//


  PAGE TO APPLY ANASAYFA
  madamecoco.com/?*


  //LOOKUP PARAMETRELERİ
  OM.inv yazılmıyor xmlden siteye

  //TÜRKÇE KARAKTER DÜZELTME
  decodeURIComponent();
  toLocaleLowerCase('tr-TR');



  //EVENT ATMA
  $(".storylb-a").click(function(){
    var vl=new Visilabs();
    vl.AddParameter("OM.s_camp_d",true);
    vl.AddParameter("OM.s_camp_name_d",$(this).attr("href").split("?story_name=")[1].split("&OM.zn=")[0]);
    vl.Collect();
    });

//fit-content iosta olmuyor.

//STORY İSMİNİ ALT SATIRA GEÇİRMEK İÇİN.
    display: inline-block;
text-align: center;
margin: auto;
word-break: break-word;
white-space: pre-line;
overflow-wrap: break-word;
-ms-word-break: break-word;
-ms-hyphens: auto;
-moz-hyphens: auto;
-webkit-hyphens: auto;
hyphens: auto;


//DATALAYER VERİ ALMA
google_tag_manager['GTM-5N9SHG9'].dataLayer.get('cd_userSignupDate');


function copyCode(){
  var copyText = "DENEME";
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = copyText;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
  alert("Kupon kodunuz kopyalanmıştır");
}



//HTML ELEMENT CLONE
var div = itm.cloneNode(true);

// AB TESTTE PROMOTİON CODE KULLANIMI
bu arada promocode bitse de
aksiyon çalışır
bunu da unutmamak lazım


//İnput gözükmeme
visibility 
appearance

//referans
0 ise mail 30 ise keyid



//ENT SIRASI
ürün detay - sepet - satın alma - kategori - arama sonuç - login - signup - fav ekleme - fav çıkarma


//MAIN SCRİPT FULL UNDEFINED ALIYORSA Script Builder > Varsayılan Değerler

//AKSİYON TAKİP PARAMETRESİ.BAĞLI KURGULAR İÇİN KULLANILIYOR.

//MULTİ LANGUAGE
Multi Language ürün entegrasyonunda yeni tip XML yapısı 
Her bir dil ve parametre için ayrı ayrı gönderilmesi ve bu değerlerin currency ve language parametreleri ile gönderilmesi.Ancak Sadece  tl, euro, usd, rub ve egp değerlerine ait XML leri içeri alabiliyoruz. Yeni bir para birimi yada dil seçeneğinde içeri almada hata ile karşılaşıyoruz. Bu durumda Özgür Abiye geliştirme talebi açılması gerekmektedir.

Bilginize

//EUROMSG PRODUCT TABLES DOLDURMAK İÇİN  
//Product Integration'a EuroMsgProductIntegration True ekle. Mail form entegrasyonunu da yap.


//ARROW
https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1218_20211223162544011.png
https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1218_20211223162555590.png

//datalayer push
dataLayer.push({
  vl_purchase_count: 3
});

dataLayer.push({

  event: "eeEvent",
 
  label: "VL-CategoryView",
 
  vl_category_id: "Category ID" // Required
 
 });
 //


 //DECODE YAPMA
 decodeURI(VisiParameters["OM.lpp"])
 //

 //BANNER ALANI 4MB


 //IPHONE CSS
 @supports (-webkit-touch-callout: none) {
  /* CSS specific to iOS devices */ 
}

@supports not (-webkit-touch-callout: none) {
  /* CSS for other than iOS devices */ 
}
///

//ref değişimi
Ref değişimlerinde
Emailden key id ye dönülen senaryolarda
Param search alanında bulunan OM.em yi kaldırmayı unutmayın
Bide komple kapanan visilabs hesaplarında daha önce em ile beraber segment kullandıysa data döndürmeye devam ediyor. Bunun içinde Em config alanının disable edilmesi gerekiyor.




//MOBILE SWIPE ANIMATION
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
        } else {
        }
    } else {
        if (yDiff > 0) {
        } else {
            console.log(yDiff);
            div.style.bottom = '-300px';
            setTimeout(() => {
                div.remove();
            }, 1000);

        }
    }
    xDown = null;
    yDown = null;
};