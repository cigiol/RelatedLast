(function(){
    var campID = 433;
    var campName = "Trigger Push (01.02-10.02)";
    var title = "Aşk En Güzel Hediye";
    var body = "Sevgililer Gününe Özel %70’e Varan İndirim ve Mobil Uyulamaya Özel Kargo Bedava";
    var link = "https://www.pierrecardin.com.tr/sevgililer-gunu/";
    var img = "https://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/val21_550x270.jpg";
    var icon = "https://img.euromsg.net/6F9A3B1D09E044F5B4E8477A92BFD3BE/images/pc_logo.png";
    var pushSent = false;
    var timestamp = new Date().getTime();
    function setCookie(e,t,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"};
    function sendPush(){
        var notification = new Notification(title, {
           icon: icon,
           body: body,
           image: img,
           requireInteraction: true
        });
        ga("create", "UA-5051374-2", {name: "RMC", cookieDomain: "auto"});
        ga('RMC.send', 'event', 'RMC', campName, "Impression", {nonInteraction: true});
        try{VLSendImpressionFunc(campID, 4);}catch(e){};
        notification.onclick = function() {
           window.open(link + '?utm_source=related&utm_medium=web_push&utm_campaign=tab_change_trigger_push');
           ga('RMC.send', 'event', 'RMC', campName, "Click", {nonInteraction: true});
           try{VLSendClickFunc(campID, 4);}catch(e){};
        };
        setCookie("OM.tabPush", "true", 1);
    }
    function setVisibilityStatus(status){
        localStorage.setItem('vl_visibility_status', JSON.stringify(status));
    };
    function statusListener(event){
        var eventKey = event.key;
        if(eventKey === "vl_visibility_status"){
            var message = event.newValue;
            if(!message) return;
            if(message === "1") tabActiveChange();
            else if(message === "0") tabPassiveChange();
        }
    };
    tabActiveChange = function(){
        console.log("Back to site");
    };
    tabPassiveChange = function(){
        if(!pushSent && document.cookie.indexOf("OM.tabPush") === -1){
            setTimeout(sendPush, 10000);
            console.log("Push Triggered");
            pushSent = true;
        }
    };
    try{
        if(parseInt(jQuery('.js-basket-quantity').text()) > 0){
            if(document.cookie.indexOf("OM.tabPush") === -1){
                window.addEventListener("storage", statusListener, true);
                setVisibilityStatus(1);
                //Tab değişimi yapılması
                document.addEventListener('visibilitychange', function(){
                    if(document.hidden){
                        setVisibilityStatus(0);
                        tabPassiveChange();
                    }
                }, false);

                //Back to Tab yapılması
                document.addEventListener('visibilitychange', function(){
                    if(!document.hidden){
                        setVisibilityStatus(1);
                        tabActiveChange();
                    }        
                }, false);
            }
        }
    }catch(e){};
})();