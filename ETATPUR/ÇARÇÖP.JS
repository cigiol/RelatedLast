$(`#vl-home-sabit .vl-slider-wrapper`).slick('setPosition');//slick reflesh slickSetOption: true girilmeli.


PARAMETRELER;
UseCtgNameAsCtgCode 'True' // kategori ismini kategori kodu olarak alabiliyor XML de.

EuroMsgEncoding utf-8 // Product Integration kısmına eklenecek.Ürün isimleri garip gitmesin diye.

EnablePageToMemcache //realtime a ekleniyor anaonim kullanıcıları tutmak için.

MOBİLE KODU
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);


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
    scrollDetectFunction();
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


  //EVENT ATMA
  $(".storylb-a").click(function(){
    var vl=new Visilabs();
    vl.AddParameter("OM.s_camp_d",true);
    vl.AddParameter("OM.s_camp_name_d",$(this).attr("href").split("?story_name=")[1].split("&OM.zn=")[0]);
    vl.Collect();
    });



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