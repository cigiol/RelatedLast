<script>
function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""};
function OnVisilabsLoaded(){
var vl = new Visilabs();
var basketData = IdeaCart.items;
var pb = "";
var pu = "";
var ppr = "";
for(i=0; i<basketData.length; i++){
  pb += basketData[i].product.id;
  pu += basketData[i].quantity;
  ppr += parseFloat(basketData[i].price) * parseInt(basketData[i].quantity);
  if(i<basketData.length-1){
    pb += ";";
    pu += ";";
    ppr += ";";
  }
}
vl.AddParameter("OM.pbid", getCookie("_gid"));
vl.AddParameter("OM.pb", pb);
vl.AddParameter("OM.pu", pu);
vl.AddParameter("OM.ppr", ppr);
vl.Collect();
vl.SuggestActions();
}
</script>
<script type="text/javascript">
var l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs.js?sid=45614A41525739633930513D&oid=2B327A4A72385A45652B773D";
var s = document.createElement("script");
if(location.href.toString().indexOf("vldebug=true") > 0){l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs_Debug.js?sid=45614A41525739633930513D&oid=2B327A4A72385A45652B773D";}
s.onload = function(){try{OnVisilabsLoaded();}catch(e){}};
s.type = "text/javascript";
s.src = l;
document.getElementsByTagName("head")[0].appendChild(s);
</script>