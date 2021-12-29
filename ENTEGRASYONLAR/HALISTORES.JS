<script type="text/javascript">
  function OnVisilabsLoaded(){
    var purchaseItems={{RMC- PurchaseData}};
    var tid = getCookie("_gid");
    var pu = "";
    var ppr = "";
    var pp = "";
    var pp2 = "";
   
    for(var i=0;i<purchaseItems.length;i++){
        pp += "T" + purchaseItems[i].id +";";
        pu += purchaseItems[i].quantity + ";";
        ppr += parseFloat(purchaseItems[i].price).toFixed(2)*parseInt(purchaseItems[i].quantity) + ";";
        pp2 +=purchaseItems[i].brand +";";
    }
       
    pu = pu.slice(0, -1);
    ppr = ppr.slice(0, -1);
    pp = pp.slice(0, -1);
    pp2 = pp2.slice(0, -1);
    var vl =new Visilabs();
    vl.AddParameter("OM.tid",tid);
    vl.AddParameter("OM.pp",pp);
    vl.AddParameter("OM.pu",pu);
    vl.AddParameter("OM.ppr",ppr);
    vl.AddParameter("OM.pp.1",pp2);
    vl.Collect();
    vl.SuggestActions();
  }
</script>
<script type="text/javascript">
var l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs.min.js?sid=62584470573733465954453D&oid=68323251436E693350776F3D";
var s = document.createElement("script");
if(location.href.toString().indexOf("vldebug=true") > 0){l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs_Debug.min.js?sid=62584470573733465954453D&oid=68323251436E693350776F3D";}
s.onload = function(){try{OnVisilabsLoaded();}catch(Ex){}};
s.type = "text/javascript";
s.src = l;
document.getElementsByTagName("head")[0].appendChild(s);
</script>


// YUKARI PURCHASE 


<script type="text/javascript">
function OnVisilabsLoaded(){

var vl = new Visilabs();

var product = PRODUCT_DATA[0];
var cat= CATEGORY_DATA;
var search=window.location.href.split("?q=")[1];
var basketCheck=window.location.href.includes("/sepet");
var register = window.location.href.includes("uye-kayit-onay.xhtml");
var login = MEMBER_INFO.MAIL;

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
}

if(!cat.id && product && !search){
    vl.AddParameter("OM.pv","T"+product.id);
    vl.AddParameter("OM.pn",product.name);
    vl.AddParameter("OM.ppr",parseFloat(product.sale_price).toFixed(2));
    vl.AddParameter("OM.inv",product.quantity);
    vl.AddParameter("OM.pv.1",product.brand);
}
else if(cat.id){
    vl.AddParameter("OM.clist",cat.id);
}
else if(search){
    vl.AddParameter("OM.OSS",search);
    vl.AddParameter("OM.OSSR",PRODUCTS_TOTAL);
}
else if(basketCheck){
    basket=PRODUCTS;
    var pbid = getCookie("_gid");
    var pu = "";
    var ppr = "";
    var pb = "";
    var pb2 = "";
    for(var i=0;i<basket.length;i++){
        pb += "T" + basket[i].ID +";";
        pu += basket[i].COUNT + ";";
        ppr += parseFloat(basket[i].PRICE_TOTAL).toFixed(2) + ";";
        pb2 +=basket[i].BRAND +";";
    }
   
    pu = pu.slice(0, -1);
    ppr = ppr.slice(0, -1);
    pb = pb.slice(0, -1);
    pb2 = pb2.slice(0, -1);
    vl.AddParameter("OM.pbid",pbid);
    vl.AddParameter("OM.pb",pb);
    vl.AddParameter("OM.pu",pu);
    vl.AddParameter("OM.ppr",ppr);
    vl.AddParameter("OM.pb.1",pb2);
}
if(register){
    var exVisitorID = MEMBER_INFO.MAIL;
    if(exVisitorID){
        vl.AddParameter("OM.exVisitorID",exVisitorID);
        vl.AddParameter("OM.b_sgnp","1");
    }
}
else if(login){
    var exVisitorID = MEMBER_INFO.MAIL;
    var cookieName="vl-login";
    if(document.cookie.indexOf(cookieName) === -1){
        vl.AddParameter("OM.exVisitorID",exVisitorID);
        vl.AddParameter("OM.b_login","1");
        document.cookie = cookieName + "=false;path=/";
    }
}

vl.Collect();
vl.SuggestActions();

}
</script>
<script type="text/javascript">
var l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs.min.js?sid=62584470573733465954453D&oid=68323251436E693350776F3D";
var s = document.createElement("script");
if(location.href.toString().indexOf("vldebug=true") > 0){l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs_Debug.min.js?sid=62584470573733465954453D&oid=68323251436E693350776F3D";}
s.onload = function(){try{OnVisilabsLoaded();}catch(Ex){}};
s.type = "text/javascript";
s.src = l;
document.getElementsByTagName("head")[0].appendChild(s);
</script>