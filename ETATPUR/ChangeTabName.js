var oldTitle = document.title;
var newTitle = "Beni Unutma!";
var change = 0;
var newInterval;

$(window).focus(function() {
    document.title=oldTitle;
    clearInterval(newInterval);
    <%VLSendImpressionFunc%>;
});

$(window).blur(function() {
    setTimeout(() => {
        document.title=newTitle;
        newInterval = setInterval(() => {
            if(change == 0){
                document.title=oldTitle;
                change = 1;
            }
            else{
                document.title=newTitle;
                change = 0;
            }
            
        }, 5000);    
    }, 1000);
});