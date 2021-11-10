(function(){

    var coupon = "MSFRIENDS20";
 
    var campID = 93;
    var img = "https://img.visilabs.net/banner/uploaded_images/92_1136_20200422135844594.jpg";
    var img_mob= 'https://img.visilabs.net/banner/uploaded_images/92_1136_20200422135828123.jpg';
    function init(){
       var style = '<style>\
          #vl-overlay{z-index: 1001!important;position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0.7;}\
          #vl-container{z-index: 1000003!important;position: fixed;margin: auto;border-radius: 1px;width: 600px; height: 400px;left: 0;right: 0;top: 0;bottom: 0;background-image: url('+img+'); background-repeat: no-repeat;}\
          #vl-close{opacity: 0;position: absolute;height: 25px; width: 25px; right: 4px;top: 5px; font-size: 24px; cursor: pointer;z-index: 9999999999;text-align: center; border-radius: 50px; line-height: 23px;}\
          #vl-button{width: 177px;height: 30px;position: absolute;bottom: 18px;right: 62px;}\
          #assistantCodeArea{width: 176px;text-align: center;padding: 4px;position: absolute;bottom: 95px;right: 61px;}\
          #assistantCodeArea input{width: 176px;background-color: white;border: none;color: black;font-weight: bold;font-size: 25px;}\
            #assistantCopyButton{width: 148px;cursor: pointer;position: absolute;bottom: 69px;right: 76px;height:26px;}\
          @media only screen and (max-width: 768px){\
             #vl-container{background-image: url('+img_mob+'); width: 275px; height:229px; animation: none; background-size: contain;}\
             #vl-close{opacity: 0;right: 0px; top: 0px;}\
             #assistantCodeArea{width: 106px; bottom: 61px; right: 19px;padding: 0;height: 17px;}\
             #assistantCodeArea input{width: 96px; font-size: 11px;text-align: center;}\
             #vl-button{width: 94px;height: 16px;position: absolute;bottom: 17px;right: 25px;}\
             #assistantCopyButton{width: 80px; bottom: 43px; right: 32px;height: 15px;}\
          }\
       </style>';
       var html = '<div id="vl-overlay"/><div id="vl-container"><div id="vl-close"></div><div id="assistantCodeArea"><input type="text" value="'+coupon+'" id="couponCode" readonly/></div>\
                <div id="assistantCopyButton"></div><a href="https://www.marksandspencer.com.tr/yeni-sezon/?OM.zn=acttype-4&OM.zpc=act-93" id="vl-button"></a></div>';
       jQuery('head').append(style);
       jQuery('body').append(html);
       
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
    init();
 })();