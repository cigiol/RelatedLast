if (window.location.href.includes("erkek")) {
    var campName = "vl-lastproductviewmale";

    function getCookie(e) { for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) { for (var r = t[o]; " " == r.charAt(0);)r = r.substring(1); if (0 == r.indexOf(n)) return r.substring(n.length, r.length) } return "" }
    if (getCookie(campName)) {
        var count = parseInt(getCookie(campName));
        count++;
        document.cookie = campName + "=" + count + ";path=/;";
    }
    else {
        document.cookie = campName + "=1;path=/;";
    }
}


if (window.location.href.includes("kadin")) {
    var campName = "vl-lastproductviewfemale";

    function getCookie(e) { for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) { for (var r = t[o]; " " == r.charAt(0);)r = r.substring(1); if (0 == r.indexOf(n)) return r.substring(n.length, r.length) } return "" }
    if (getCookie(campName)) {
        var count = parseInt(getCookie(campName));
        count++;
        document.cookie = campName + "=" + count + ";path=/;";
    }
    else {
        document.cookie = campName + "=1;path=/;";
    }
}