(function(){

    var coupon = "GAPBRFRIENDS20";
 
    var campID = 93;
    var img = "https://img.visilabs.net/banner/uploaded_images/92_1167_20200423120740058.jpg";
    var img_mob= 'https://img.visilabs.net/banner/uploaded_images/92_1167_20200423120752994.jpg';
    function init(){
       var style = '<style>\
          #vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\
          #vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 1px;width: 827px; height: 414px;left: 0;right: 0;top: 0;bottom: 0;background-image: url('+img+'); background-repeat: no-repeat;}\
          #vl-close{opacity: 0;position: absolute;height: 25px; width: 25px; right: 6px;top: 6px; font-size: 24px; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\
          #vl-button{width: 238px;height: 40px;position: absolute;bottom: 26px;right: 110px;}\
          #assistantCodeArea{width: 240px;text-align: center;padding: 4px;position: absolute;bottom: 125px;right: 70px;}\
          #assistantCodeArea input{width: 240px;background-color: transparent;border: none;color: transparent;font-weight: bold;font-size: 25px;}\
            #assistantCopyButton{width: 280px;cursor: pointer;position: absolute;bottom: 90px;right: 89px;height: 35px;}\
          @media only screen and (max-width: 768px){\
             #vl-container{background-image: url('+img_mob+'); width: 275px; height:229px; animation: none; background-size: contain;}\
             #vl-close{opacity: 0;right: 0px; top: 0px;}\
             #assistantCodeArea{width: 130px; bottom: 65px; right: 54px;padding: 0;height: 17px;}\
             #assistantCodeArea input{width: 130px; font-size: 14px;text-align: center;height: 17px;}\
             #vl-button{width: 135px;height: 25px;position: absolute;bottom: 10px;right: 71px;}\
             #assistantCopyButton{width: 145px; bottom: 42px; right: 66px;height: 20px;}\
          }\
       </style>';
       var html = '<div id="vl-overlay"/><div id="vl-container"><div id="vl-close"></div><div id="assistantCodeArea"><input type="text" value="'+coupon+'" id="couponCode" readonly/></div>\
                <div id="assistantCopyButton"></div><a href="https://bananarepublic.gap.com.tr/yeni-sezon-tum-urunler-br/?OM.zn=acttype-4&OM.zpc=act-93" id="vl-button"></a></div>';
       jQuery('head').append(style);
       jQuery('body').append(html);
       var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if(iOS){
            var styleiOS = '<style>\
             #assistantCodeArea{width: 156px !important; bottom: 60px !important; right: 26px !important;padding: 0 !important;height: 24px !important;}\
             #assistantCodeArea input{width: 156px !important; font-size: 14px !important;text-align: left !important;height: 24px !important; bottom: 4px !important;}\
            </style>';
            jQuery('head').append(styleiOS);
            console.log("ios");
        }
       
       jQuery('#vl-overlay, #vl-close').click(function(){ 
            jQuery('#vl-container, #vl-overlay').remove();
        });
        document.getElementById('assistantCopyButton').addEventListener("click", function(){
            var copyText = document.getElementById("couponCode");
            copyText.select();
            document.execCommand("copy");
            alert("Kupon kodunuz kopyalanmıştır");
            try{VLSendClickFunc(campID, 4);}catch(e){};
        });
    }
        var j = document.createElement("script");
        j.setAttribute("src", "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js");
        j.onload = init;
        document.head.appendChild(j);
        
 })();