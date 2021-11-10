if(!document.querySelector("#vl-count-header")){
    var countDownDate = new Date("Apr 18 2021, 23:59:59");
    
    var style = document.createElement("style");
    style.innerHTML = `
    #vl-count-header{
        position: relative;
        text-align: center;
        margin: auto;
        display: flex;
        justify-content: space-around;
        max-width: 1170px;
        padding: 0 15px;
        font-size: 40px;
    }
    .vl-countbanner-countarea{
        width: 25%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
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
        color: #00496B;
        font-size: 12px;
        font-weight: bold;
        font-family: 'Open Sans';
        flex: 0.33;
    }
    .timeCounterSpan{
        padding: 3px 7px;
        color: #00496B;
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
    
    @media only screen and (max-width: 768px){
        .vl-countbanner-countarea{
            width: 35%;
        }
        .vl-countbanner-textarea{
            line-height: 50px;
            font-weight: bold;
        }
        #vl-count-header > img {
            width: 65%;
        }
    #vl-count-header{
        padding: 0;
        font-size:15px;
    }
    #vl-timer{
        margin:0;
    }
    .vl-time-area{
        font-size:9px;
    }
    .timeCounterSpan{
        font-size:25px;
    }
    }
    @media only screen and (max-width: 320px){
        .vl-time-area{
            font-size:8px;
        }
        .timeCounterSpan{
            font-size:19px;
        }
    }
    `;
    document.head.append(style);
    
    var div=document.createElement("div");
    div.setAttribute("id","vl-count-header");
    if (window.innerWidth > 768) {
        div.innerHTML = `
        <div class="vl-countbanner-textarea">Tüm Ürünlerde %15 İndirim!</div>
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
        `;
    }
    else {
        div.innerHTML = `
        <div class="vl-countbanner-textarea">Tüm Ürünlerde %15 İndirim!</div>
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
        `;
    }
    
    
    document.querySelector(".header__wrapper.header__wrapper--desktop").before(div);
    <%VLSendImpressionFunc%>;
    
    div.addEventListener("click",function(){
        
    });
    
    
    var _interval = setInterval(function () {
        try {
            var now = new Date();
            var distance = countDownDate.getTime() - now.getTime();
            var days = Math.floor(distance  / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            days = days < 10 ? '0' + days : days;
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            $("#vl-timer .days").text(days);
            $("#vl-timer .hours").text(hours);
            $("#vl-timer .minutes").text(minutes);
            $("#vl-sec .seconds").text(seconds);
            if (distance < 0){
                div.remove();
                clearInterval(_interval);
            }
        } catch (ex) {
            clearInterval(_interval);
            return false;
        }
    }, 1000);
    }