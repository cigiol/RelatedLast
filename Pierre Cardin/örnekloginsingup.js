<script>
function getTodayDate(){
 var now = new Date();
 var year = now.getFullYear();
 var month = now.getMonth() + 1;
 var day = now.getDate();
 day = day < 10 ? '0' + day : day;
 month = month < 10 ? '0' + month : month;
 var result = year.toString() + month.toString() + day.toString();
 return result;
}
try{
 var exVis= {{ssid}};
 var userData = JSON.parse(jQuery('.analytics-data').last().text()).user.data;
 var referrer = document.referrer;
 if(referrer.indexOf("login") > -1 || referrer.indexOf("register") > -1){
  if(userData.id != "None") {
      if(document.cookie.indexOf("OM.login") == -1){
    if(userData.user.signupDate !== getTodayDate()){
        if(exVis && exVis!=""){
        var VL = new Visilabs();
        VL.AddParameter("OM.exVisitorID", {{ssid}});
          VL.AddParameter("OM.b_login","1");
          VL.Collect();
          document.cookie = "OM.login=true;path=/";
        }
    }
    else{
        if(VisiParameters["OM.exVisitorID"] == undefined){
            if(exVis && exVis!=""){
      var VL = new Visilabs();
      VL.AddParameter("OM.exVisitorID", {{ssid}});
      VL.AddParameter("OM.b_sgnp","1")
      VL.Collect();
      document.cookie = "OM.login=true;path=/";
        }
    }
    }
      }
  }
 }
}
catch(e){}
</script>