var vlfilter = {};
vlfilter["operand"] = VL_OfferOperator.AND;
vlfilter["filters"] = [];
var priceFilter = new VL_OfferFilter("discountedprice",VL_OfferFilterType.LessOrEquals,"50");
vlfilter["filters"].push(priceFilter);
​
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(2,null,null,function(data){console.table(data);},null,vlfilter)


//TAMAMLAYICI İÇİN KULLANILAN YÖNTEM(SEPET SAYFASI OM.pb Ürün sayfası OM.pv)
var vl = new Visilabs();
vl.AddParameter("json", true);
var products =VisiParameters["OM.pb"];
products=products.replace("%3B","~");
vl.Suggest(6, null, products, CallBackMethod);


arrFilter = [];
var attributeFilt = new VL_OfferFilter("productcode",VL_OfferFilterType.Equals, VisiParameters["OM.pv"]);
arrFilter.push(attributeFilt);
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(67, null, null, CallBackMethod, null, arrFilter);


//Özel Filtrelenmiş Ürünler recosuyla birden fazla ürün dönebiliriz.
var itemList = ['980534', '925156', '710055', '147197', '939008', '931862', '934509', '687040', '995235', '983944', '946511', '939301', '989906', '990993', '990730', '999936', '980294', '996777', '939303', '999824','942694', '987495', '949753', '990541', '839785', '985696', '951828', '983944', '980537', '974049', '981646', '982600', '965888', '936694', '687040'];
arrFilter = [];
var attributeFilt = new VL_OfferFilter("productcode",VL_OfferFilterType.Equals, itemList);
arrFilter.push(attributeFilt);
var vl = new Visilabs();
vl.AddParameter("json",true);
vl.Suggest(77, null, null, CallBackMethod, null, arrFilter);
  function CallBackMethod(dataArr){console.log(dataArr)}


//Birden fazla filter denemesi.
  var vlfilter = {};
  vlfilter["operand"] = VL_OfferOperator.AND;
  vlfilter["filters"] = [];
  var brandFilter = new VL_OfferFilter("brand", VL_OfferFilterType.Equals, "brand");
  var genderFilter = new VL_OfferFilter("gender", VL_OfferFilterType.Equals, "gender");
  vlfilter["filters"].push(brandFilter);
  vlfilter["filters"].push(genderFilter);
  var vl = new Visilabs();
  vl.AddParameter("json", true);
  vl.Suggest(10, null, null, CallBackMethod, null, vlfilter);


  widgetlardan bahsediyorsan OM.prprods parametresi ile gönderebilirsin noktalı virgül ile bir den fazla ürün alabiliyor.
  OM.prprods=P1;P2;P3
  Topseller , Topview, BrandTopselelr, CategoryTopseller, Favorite Brand TopSeller, Favorite Category Topseller/Topview, Favorite Category New Arrival/Discounted da çalışır.
  Combined Widget ile tüm widget tiplerinde çalışır.



VL_OfferFilterType.Equals = "0";
VL_OfferFilterType.NotEquals = "1";
VL_OfferFilterType.Like = "2";
VL_OfferFilterType.Include = "2";
VL_OfferFilterType.NotLike = "3";
VL_OfferFilterType.Exclude = "3";
VL_OfferFilterType.GreaterThan = "4";
VL_OfferFilterType.LessThan = "5";
VL_OfferFilterType.GreaterOrEquals = "6";
VL_OfferFilterType.LessOrEquals = "7";