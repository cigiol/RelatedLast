var imgDesktop="https://img.visilabs.net/banner/uploaded_images/3_3_20210105091421848.jpg";
var imgMobil="https://img.visilabs.net/banner/uploaded_images/3_3_20210105091408988.jpg";
var title="HAFTANIN FIRSAT ÜRÜNLERİ";
var desc="Fırsatların Bitmesine";
var buttonText="ACELE ET";


var curr = new Date; 
var first = curr.getDate() - curr.getDay(); 
var last = first + 6;
var countDownDate = new Date(curr.setDate(last));
countDownDate.setDate(countDownDate.getDate() + 1);
countDownDate.setHours(23, 59, 59);

var style = document.createElement("style");
style.innerHTML = `
.vl-countbanner-countarea{
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #a80000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#vl-timer{
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 5px 0 5px 0;
}
.vl-time-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Open Sans';
    flex: 0.33;
}
.timeCounterSpan{
    padding: 3px 7px;
    background: #f4cf90;
    color: #a80000;
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    font-family: 'Open Sans';
}
.vl-countbanner-title{
    font-size: 20px;
    color: #f4cf90;
    font-weight: 600;
    margin-top: 5px;
    font-family: Avenir Next LT Pro Demi;
}
.vl-countbanner-desc{
    color: white;
    font-family: Avenir Next LT Pro Regular;
    margin: 5px 0 5px 0;
    font-size: 15px;
}
.vl-countbanner-button{
    bottom: 15px;
    position: absolute;
    background: white;
    color: #a80000;
    border: 2px solid #f4cf90;
    border-radius: 16px;
    padding: 5px 15px;
    font-size: 13px;
    font-weight: bold;
    width: 92px;
    left: calc(50% - 46px);
    cursor: pointer;
}
@media only screen and (max-width: 768px){
#vl-timer{
    margin:0;
}
.vl-time-area{
    font-size:11px;
}
.timeCounterSpan{
    font-size:18px;
}
.vl-countbanner-title{
    font-size:15px;
    margin:0;
}
.vl-countbanner-desc{
    font-size: 14px;
    margin:0;
}
}
`;
document.head.append(style);

var targetDiv = document.querySelector("div[data-slug=homepage-section-9] > .row > .col-sm-5 > .noface-section__item");
if (window.innerWidth > 768) {
    targetDiv.innerHTML = `
    <div class="vl-countbanner-countarea">
        <span class="vl-countbanner-title">${title}</span>
        <span class="vl-countbanner-desc">${desc}</span>
        <div id="vl-timer">
            <div id="vl-day" class="vl-time-area">
                <span class="days timeCounterSpan">00</span>
                GÜN
            </div>
            <div id="vl-hour" class="vl-time-area">
                <span class="hours timeCounterSpan">00</span>
                SAAT
            </div>
            <div id="vl-min" class="vl-time-area">
                <span class="minutes timeCounterSpan">00</span>
                DAKİKA
            </div>
            
        </div>
    </div>
    <img src="${imgDesktop}">
    `;
}
else {
    targetDiv.innerHTML = `
    <div class="vl-countbanner-countarea">
        <span class="vl-countbanner-title">${title}</span>
        <span class="vl-countbanner-desc">${desc}</span>
        <div id="vl-timer">
            <div id="vl-day" class="vl-time-area">
                <span class="days timeCounterSpan">00</span>
                GÜN
            </div>
            <div id="vl-hour" class="vl-time-area">
                <span class="hours timeCounterSpan">00</span>
                SAAT
            </div>
            <div id="vl-min" class="vl-time-area">
                <span class="minutes timeCounterSpan">00</span>
                DAKİKA
            </div>
            
        </div>
    </div>
    <img src="${imgMobil}">
    `;
}

var button = document.createElement("div");
button.setAttribute("class","vl-countbanner-button");
button.innerHTML=`
${buttonText}
`;
targetDiv.append(button);

button.addEventListener("click",function(){
    <%VLSendClickFunc%>;
    window.location.href="https://www.madamecoco.com/firsat-urunleri-1/";
});


var _interval = setInterval(function () {
    try {
        var now = new Date();
        var distance = countDownDate.getTime() - now.getTime();
        var days = Math.floor((distance / (1000*60*60*24)));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        jQuery("#vl-timer .days").text(days);
        jQuery("#vl-timer .hours").text(hours);
        jQuery("#vl-timer .minutes").text(minutes);
        if (distance < 0) clearInterval(_interval);
    } catch (ex) {
        clearInterval(_interval);
        return false;
    }
}, 1000);