var countDownDate = new Date("Nov 30 2021, 07:59:59"); // Geri sayım tarihi
var imgDesktop="https://img.visilabs.net/banner/uploaded_images/3_3_20210223121959641.jpg"; // Desktop görsel
var imgMobil="https://img.visilabs.net/banner/uploaded_images/3_3_20210223122016132.jpg"; //Mobil görsel
var link="https://www.madamecoco.com/firsat-urunleri-1/"; // Yönlenme linki
var title="HAFTANIN FIRSAT ÜRÜNLERİ"; // Başlık
var desc="Fırsatların Bitmesine"; // Metin
var buttonText="FIRSATLARI YAKALA"; // Buton Metni
var campaingTextColor = "#ffffff"; // Başlık ve Metin için yazı rengi
var countDownTextColor = "#ffffff"; // Sayaç metin rengi
var countDownBackgroundColor = "rgb(173, 107, 70 , 0.9)"; // Sayaç rakamların arka plan rengi
var countDownTextBackgroundColor = "rgb(122, 80, 59 , 0.9)"; // Sayaç gün,saat,dakika yazan yerin arka plan rengi
var buttonBackgroundColor = "#68442f"; // Buton arka plan rengi
var buttonTextColor = "#ffffff"; // Buton Metin rengi
var buttonBorderColor = "#ffffff"; // Buton dışındaki çizgi rengi

var style = document.createElement("style");
style.innerHTML = `
.vl-spe-countbanner-countarea{
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
#vl-spe-timer{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 5px 0 5px 0;
}
.vl-spe-counter-text{
    background: ${countDownTextBackgroundColor};
    width: 100%;
    text-align: center;
    border-radius: 0 0 3px 3px;
}
.vl-spe-time-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 0.95em;
    font-family: 'Open Sans';
}
.vltimeCounterSpan{
    padding: 0 7px;
    background: ${countDownBackgroundColor};
    color: ${countDownTextColor};
    font-size: 2.8em;
    border-radius: 3px 3px 0 0;
    font-family: 'Open Sans';
    width: 100%;
    text-align: center;
    font-weight: bold;
}
.vl-spe-countbanner-title{
    font-size: 1.6em;
    color: ${campaingTextColor};
    font-weight: 600;
    margin-top: 5px;
    font-family: 'Open Sans';
}
.vl-spe-countbanner-desc{
    color: ${campaingTextColor};
    font-family: 'Open Sans';
    margin: 5px 0 5px 0;
    font-size: 1.2em;
}
.vl-spe-countbanner-button{
    bottom: 15px;
    position: absolute;
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
    border: 1px solid ${buttonBorderColor};
    padding: 5px 15px;
    font-size: 1.2em;
    font-weight: bold;
    width: 200px;
    left: calc(50% - 100px);
    cursor: pointer;
    text-align: center;
}
@media only screen and (max-width: 992px){
.vl-spe-countbanner-title{
    font-size: 1.2em;
}
.vl-spe-time-area{
    font-size: 0.7em;
}
.vltimeCounterSpan{
    font-size: 2.5em;
}

}
@media only screen and (max-width: 768px){
.vl-spe-countbanner-countarea{
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}
#vl-spe-timer{
    margin: 0;
    width: 51%;
    margin-left: 10px;
    justify-content: space-between;
}
.vl-spe-time-area{
    font-size:9px;
}
.vltimeCounterSpan{
    font-size:19px;
}
.vl-spe-countbanner-title{
    font-size: 15px;
    margin-left: 10px;
}
.vl-spe-countbanner-desc{
    font-size: 14px;
    margin-left: 10px;
}
.vl-spe-countbanner-button{
    bottom: 15px;
    position: absolute;
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
    border: 1px solid ${buttonBorderColor};
    padding: 3px 15px;
    font-size: 0.8em;
    font-weight: bold;
    width: 146px;
    left: 10px;
    cursor: pointer;
    text-align: center;
}
}
`;
document.head.append(style);

var targetDiv = document.querySelector("div[data-slug=homepage-section-9] > .row > .col-sm-5 > .noface-section__item");
if (window.innerWidth > 768) {
    targetDiv.innerHTML = `
    <div class="vl-spe-countbanner-countarea">
        <span class="vl-spe-countbanner-title">${title}</span>
        <span class="vl-spe-countbanner-desc">${desc}</span>
        <div id="vl-spe-timer">
            <div id="vl-spe-day" class="vl-spe-time-area">
                <span class="days vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">GÜN</span>
            </div>
            <div id="vl-spe-hour" class="vl-spe-time-area">
                <span class="hours vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">SAAT</span>
            </div>
            <div id="vl-spe-min" class="vl-spe-time-area">
                <span class="minutes vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">DAKİKA</span>
            </div>
            <div id="vl-spe-sec" class="vl-spe-time-area">
                <span class="seconds vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">SANİYE</span>
            </div>
            
        </div>
    </div>
    <img src="${imgDesktop}">
    `;
}
else {
    targetDiv.innerHTML = `
    <div class="vl-spe-countbanner-countarea">
        <span class="vl-spe-countbanner-title">${title}</span>
        <span class="vl-spe-countbanner-desc">${desc}</span>
        <div id="vl-spe-timer">
            <div id="vl-spe-day" class="vl-spe-time-area">
                <span class="days vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">GÜN</span>
            </div>
            <div id="vl-spe-hour" class="vl-spe-time-area">
                <span class="hours vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">SAAT</span>
            </div>
            <div id="vl-spe-min" class="vl-spe-time-area">
                <span class="minutes vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">DAKİKA</span>
            </div>
            <div id="vl-spe-sec" class="vl-spe-time-area">
                <span class="seconds vltimeCounterSpan">00</span>
                <span class="vl-spe-counter-text">SANİYE</span>
            </div>
            
        </div>
    </div>
    <img src="${imgMobil}">
    `;
}

var button = document.createElement("div");
button.setAttribute("class","vl-spe-countbanner-button");
button.innerHTML=`
${buttonText}
`;
targetDiv.append(button);

button.addEventListener("click",function(){
    <%VLSendClickFunc%>;
    window.location.href=link;
});

targetDiv.style.cursor="pointer";

targetDiv.addEventListener("click",function(){
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
        var seconds = Math.floor((distance % (1000 * 60)) / (1000));
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        jQuery("#vl-spe-timer .days").text(days);
        jQuery("#vl-spe-timer .hours").text(hours);
        jQuery("#vl-spe-timer .minutes").text(minutes);
        jQuery("#vl-spe-timer .seconds").text(seconds);
        if (distance < 0) clearInterval(_interval);
    } catch (ex) {
        clearInterval(_interval);
        return false;
    }
}, 1000);

