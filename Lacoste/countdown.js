var vlCountdownStyle = document.createElement("style");
var config = {
  header : "Promocja kończy się za",
  day:"Dni",
  hour:"Godzin",
  minute:"Minut",
  second:"Sekund"
};
vlCountdownStyle.innerHTML =
  "#vl-cd-container{width:100%;display:block;height:65px;color:#fff;top:0;left:0;z-index: 99;margin: 63px 0;text-align: center;}\
  .vlSpanText{text-align:center;color:#105a33;font-family:Arial;font-size:23px;padding-right:10px}\
  .vlBackground{margin: 2px;float:left;background:#fff;padding:2px;border-radius:5px;display:block;min-width:40px;font-size:18px;text-align:center;margin-bottom:5px}\
  .vlCountdown{display:inline-block;padding:0 10px;font-family: Arial;}\
  #vl-days,#vl-hours,#vl-minutes,#vl-seconds{padding: 10px;font-size:28px!important;color:#fff!important;background-color:#105a33;text-align:center!important}\
  .vl-daysT,.vl-hoursT,.vl-minutesT,.vl-secondsT{color:#105a33!important;text-align:center}\
  .vlWrapper{}";
document.querySelector("head").appendChild(vlCountdownStyle);
var vlContainer = document.createElement("div");
vlContainer.id = "vl-cd-container";
vlContainer.innerHTML = vlContainer.innerHTML =
  "<div class='vlSpanText'></div>\
  <div class='vlWrapper'>\
    <div class='vlCountdown'><div><span id='vl-days' class='vlBackground'></span><span id='vl-days' class='vlBackground'></span></div><div class='vl-daysT'></div></div>\
    <div class='vlCountdown'><div><span id='vl-hours' class='vlBackground'></span><span id='vl-hours' class='vlBackground'></span></div><div class='vl-hoursT'></div></div>\
    <div class='vlCountdown'><div><span id='vl-minutes' class='vlBackground'></span><span id='vl-minutes' class='vlBackground'></span></div><div class='vl-minutesT'></div></div>\
    <div class='vlCountdown'><div><span id='vl-seconds' class='vlBackground'></span><span id='vl-seconds' class='vlBackground'></span></div><div class='vl-secondsT'></div></div>\
  </div>";

var countDownDate = new Date("Apr 26, 2020 23:59:59").getTime();
var x = setTimeout(function countDown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var day = days.toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.querySelectorAll("#vl-days")[0].innerHTML = day[0];
    document.querySelectorAll("#vl-days")[1].innerHTML = day[1];

  var hours = hours.toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.querySelectorAll("#vl-hours")[0].innerHTML = hours[0];
    document.querySelectorAll("#vl-hours")[1].innerHTML = hours[1];

  var minuts = minutes.toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.querySelectorAll("#vl-minutes")[0].innerHTML = minuts[0];
    document.querySelectorAll("#vl-minutes")[1].innerHTML = minuts[1];

  var scnds = seconds.toLocaleString(undefined, {minimumIntegerDigits: 2});
    document.querySelectorAll("#vl-seconds")[0].innerHTML = scnds[0];
    document.querySelectorAll("#vl-seconds")[1].innerHTML = scnds[1];
  
  if (distance < 0) {
    countDownDate = new Date("May 03, 2020 23:59:59").getTime();
    distance;
  }
  var headerDropDown = document.querySelectorAll("body > div.site-section.js-site-section > div.page-wrapper.cf > header > div.header__action > div > ul > li > div.header-dropdown");
  for (j = 0; j < headerDropDown.length; j++) {
    headerDropDown[j].style.top = "153px";
  }
  if (pageYOffset > 107) {

    let elem = document.querySelector('.page-wrapper__sidebar.is_stuck');
    elem.style.setProperty('top', '153px', 'important');
  }

  let sideMenu = document.querySelectorAll(".page-sidebar__dropdown.js-submenu.opened");
  for (u = 0; u < sideMenu.length; u++) {
    sideMenu[u].style.setProperty('top', '153px', 'important');
  }

  var expiredCheck = document.querySelector(".vlSpanText") ? document.querySelector(".vlSpanText").textContent : "";
  if (expiredCheck == "EXPIRED") {
    var forCountdown = document.querySelectorAll(".vlCountdown");
    for (i = 0; i < forCountdown.length; i++) {
      forCountdown[i].remove()
    }
    document.querySelector("#vl-cd-container").style.height = document.querySelector(".vlSpanText")
      .offsetHeight + "px";
    for (k = 0; k < headerDropDown.length; j++) {
      headerDropDown[k].style.top = "80px";
    }
    elem.style.setProperty('top', '88px', 'important');
    let siderMenu = document.querySelectorAll(".page-sidebar__dropdown.js-submenu.opened");
    for (c = 0; c < siderMenu.length; c++) {
      sideMenu[c].style.setProperty('top', '153px', 'important');
    }
  }
  setTimeout(countDown, 1000);
}, 1000);

function changedLang() {
  var lang = document.querySelector(".lang-list button.active").innerText;
  var daysEl = document.querySelector(".vl-daysT");
  var hoursEl = document.querySelector(".vl-hoursT");
  var minutesEl = document.querySelector(".vl-minutesT");
  var secondsEl = document.querySelector(".vl-secondsT");
  var header = document.querySelector(".vlSpanText");
  if (lang === "ENGLISH") {
    header.innerHTML="Promo ends at";
    daysEl.innerHTML = "Days";
    hoursEl.innerHTML = "Hours";
    minutesEl.innerHTML = "Minutes";
    secondsEl.innerHTML = "Seconds";
  } else if (lang === "POLISH") {
    header.innerHTML= config.header;
    daysEl.innerHTML = config.day;
    hoursEl.innerHTML = config.hour;
    minutesEl.innerHTML = config.minute;
    secondsEl.innerHTML = config.second;
  }
}
setTimeout(changedLang, 1200);

document.querySelector(".js-container").insertBefore(vlContainer, document.querySelector(".js-container .container-fluid"));