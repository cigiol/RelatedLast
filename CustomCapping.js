var targetName = "vl-purchase";

function SetCookie(cookieName, hours) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 1 * 60 * 60 * 1000);
    document.cookie = cookieName + "=false;expires=" + date + ";path=/";
}

if (document.cookie.indexOf(targetName) === -1) {
    //DO SOMETHING
    SetCookie(targetName, 24);
}