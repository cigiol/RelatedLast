var imgDesktop="https://img.visilabs.net/banner/uploaded_images/3_3_20210211154839654.jpg";
var imgMobil="https://img.visilabs.net/banner/uploaded_images/3_3_20210211154830323.png";
var link="https://www.madamecoco.com/14subat-gece-firsati/";

var countDownDate = new Date("Feb 14 2021, 00:00:00");

var style = document.createElement("style");
style.innerHTML = `
#vl-count-header{
    cursor: pointer;
    position: relative;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 1170px;
    padding: 0 15px;
    margin-top:10px;
    height:65px;
}
.vl-countbanner-countarea{
    width: 25%;
    background-color: #a80000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#vl-count-header > img {
    width: 75%;
}
#vl-timer{
    display: flex;
    justify-content: center;
    width: 100%;
}
.vl-time-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Open Sans';
    flex: 0.33;
}
.timeCounterSpan{
    padding: 3px 7px;
    color: #ffffff;
    font-size: 28px;
    font-weight: bold;
    border-radius: 5px;
    font-family: 'Open Sans';
}
@media (min-width: 1200px){
#vl-count-header{
    width: 1170px;
}
}
@media (min-width: 992px) and (max-width: 1200px){
#vl-count-header{
    width: 970px;
}
}
@media (min-width: 768px) and (max-width: 992px){
    #vl-count-header{
        width: 750px;
    }
}
@media only screen and (max-width: 768px){
#vl-count-header{
    width: 750px;
}
#vl-timer{
    margin:0;
}
.vl-time-area{
    font-size:11px;
}
.timeCounterSpan{
    font-size:18px;
}
}
`;
document.head.append(style);

var div=document.createElement("div");
div.setAttribute("id","vl-count-header");
if (window.innerWidth > 768) {
    div.innerHTML = `
        <div class="vl-countbanner-countarea">
        <div id="vl-timer">
            <div id="vl-day" class="vl-time-area">
                <span class="days timeCounterSpan">00</span>
                Gün
            </div>
            <div id="vl-hour" class="vl-time-area">
                <span class="hours timeCounterSpan">00</span>
                Saat
            </div>
            <div id="vl-min" class="vl-time-area">
                <span class="minutes timeCounterSpan">00</span>
                Dakika
            </div>
            <div id="vl-sec" class="vl-time-area">
                <span class="seconds timeCounterSpan">00</span>
                Saniye
            </div>
            <div class="vl-header-triangle"></div>
        </div>
    </div>
    <img src="${imgDesktop}">
    `;
}
else {
    div.innerHTML = `
      <div class="vl-countbanner-countarea">
        <div id="vl-timer">
            <div id="vl-day" class="vl-time-area">
                <span class="days timeCounterSpan">00</span>
                Gün
            </div>
            <div id="vl-hour" class="vl-time-area">
                <span class="hours timeCounterSpan">00</span>
                Saat
            </div>
            <div id="vl-min" class="vl-time-area">
                <span class="minutes timeCounterSpan">00</span>
                Dakika
            </div>
            <div id="vl-sec" class="vl-time-area">
                <span class="seconds timeCounterSpan">00</span>
                Saniye
            </div>
            
        </div>
    </div>
    <img src="${imgMobil}">
    `;
}

document.querySelector(".header .container").after(div);


div.addEventListener("click",function(){
    <%VLSendClickFunc%>;
    window.location.href=link;
});


var _interval = setInterval(function () {
    try {
        var now = new Date();
        var distance = countDownDate.getTime() - now.getTime();
        var days = Math.floor((distance / (1000*60*60*24)));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        jQuery("#vl-timer .days").text(days);
        jQuery("#vl-timer .hours").text(hours);
        jQuery("#vl-timer .minutes").text(minutes);
        jQuery("#vl-sec .seconds").text(seconds);
        if (distance < 0) clearInterval(_interval);
    } catch (ex) {
        clearInterval(_interval);
        return false;
    }
}, 1000);