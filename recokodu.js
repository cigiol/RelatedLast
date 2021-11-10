var vl = new Visilabs();
vl.AddParameter("OM.clist", "2");
vl.AddParameter("json",true);
vl.Suggest(1, null, null, CallBackMethod); //[] kaldırmayı unutma
function CallBackMethod(dataArr){
    console.log(dataArr);
}