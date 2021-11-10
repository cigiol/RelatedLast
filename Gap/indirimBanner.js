
if(!document.querySelector("#vl-sidebanner")){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var div = document.createElement("div");
        div.setAttribute("id","vl-sidebanner");
        div.style.marginTop="-10px";
        div.style.marginBottom="10px";
        var img = document.createElement("img");
        img.setAttribute("id","vl-sidebanner-img");
        img.src="https://img.visilabs.net/banner/uploaded_images/92_729_20200415104418635.jpg";
        div.append(img);
        document.querySelector(".product-actions-container").after(div);
    }
    else{
        var div = document.createElement("div");
        div.setAttribute("id","vl-sidebanner");
        div.style.marginTop="10px";
        var img = document.createElement("img");
        img.setAttribute("id","vl-sidebanner-img");
        img.src="https://img.visilabs.net/banner/uploaded_images/92_729_20200415104457868.jpg";
        div.append(img);
        document.querySelector(".product-actions-container").after(div);
    }
    }
    