CallBackMethod fonksiyonunun içerisinde dataArr değişkeni console.log olarak basılmıştır.Console üzerinde json şeklinde dönen ürünleri görüntüleyebilirler.

CallBackMethod fonksiyonunda Dönen dataArr değişkenininden ürünleri alıp işlem yapabilirler.Bir soruları olursa sormalarını rica ederiz.

//Pure Active ürünleri için aşağıdaki kod çağırılmalı.
var vlfilter = {};
vlfilter["operand"] = VL_OfferOperator.AND;
vlfilter["filters"] = [];
var catFilter = new VL_OfferFilter("productname",VL_OfferFilterType.Include,"Pure Active");
vlfilter["filters"].push(catFilter);
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
function CallBackMethod(dataArr){
    console.log(dataArr);
}


//Kategori Filtresi yapmak için aşağıdaki kod çağırılmalı.Kategori isimlerinin kodlarını iletiyorum. "Bakım Yap":"135","Nemlendir":"136","Temizle":"134"
var vlfilter = {};
vlfilter["operand"] = VL_OfferOperator.AND;
vlfilter["filters"] = [];
var catFilter = new VL_OfferFilter("categorycode",VL_OfferFilterType.NotEquals,"134");
vlfilter["filters"].push(catFilter);
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(10,null,null,CallBackMethod,null,vlfilter);
function CallBackMethod(dataArr){
    console.log(dataArr);
}


//FİYAT FİLTRESİ
var vlfilter = {};
vlfilter["operand"] = VL_OfferOperator.AND;
vlfilter["filters"] = [];
var catFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.LessOrEquals,50);
vlfilter["filters"].push(catFilter);
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(1,null,null,CallBackMethod,null,vlfilter);
function CallBackMethod(dataArr){
    console.log(dataArr);
}