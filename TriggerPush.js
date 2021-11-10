(function(){
    var pushSent = false;
    var tm;
    var timestamp = new Date().getTime();
    function setCookie(e,t,i){var o=new Date;o.setTime(o.getTime()+24*i*60*60*1e3);var n="expires="+o.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"};
    function activatePush(){
        var v = new Visilabs();
        v.AddParameter("OM.paymentPush", "true");
        v.Collect();
        v.SuggestActions();
        setCookie("OM.paymentPush", "true", 1);
        console.log("Push Fired");
        pushSent = true;
        clearTimeout(tm);
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
        clearTimeout(tm);
    };
    tabPassiveChange = function(){
        if(!pushSent){
            tm = setTimeout(activatePush, 15000);
            console.log("Push Triggered");
        }
    };
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
})();