
if(!document.querySelector("#vl-sidebanner")){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var div = document.createElement("div");
    div.setAttribute("id","vl-sidebanner");
    div.style.marginTop="10px";
    var img = document.createElement("img");
    img.setAttribute("id","vl-sidebanner-img");
    img.src="https://img.visilabs.net/banner/uploaded_images/92_1136_20200415103447781.jpg";
    div.append(img);
    document.querySelector(".product-add-basket > .btn-content").after(div);
}
else{
    var div = document.createElement("div");
    div.setAttribute("id","vl-sidebanner");
    var img = document.createElement("img");
    img.setAttribute("id","vl-sidebanner-img");
    img.src="https://img.visilabs.net/banner/uploaded_images/92_1136_20200415103504327.jpg";
    div.append(img);
    document.querySelector(".product-add-basket > .btn-content").after(div);
}
}
