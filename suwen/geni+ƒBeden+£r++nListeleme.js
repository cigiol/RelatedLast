var data=["Belis Maskulen Pijama Takımı - PEMBE BASKILI","Belis Mom Gecelik - PEMBE BASKILI","Belis Pijama Takımı - EKRU","Black Rose A Pijama Takımı - GÜL RENGİ","Black Rose Mom Gecelik - SİYAH BASKILI","Black Rose Pijama Takımı - SİYAH BASKILI","Elegance Maskulen Pijama Takımı - ÇİÇEK BASKILI","Elegance Pijama Takımı - ÇİÇEK BASKILI","Griss Maskulen Pijama Takımı - GRİ BASKILI","Penny Kapri Set - LACİVERT BASKILI","Penny Pijama Takımı - LACİVERT BASKILI","Pointy Kapri Takımı - EKRU","Rosemary Kapri Takım - PEMBE BASKILI","Rosemary Maskulen Pijama Takımı - PEMBE BASKILI","Rosven Kapri Takım - ROSE PRINT","Rosven Mom Gecelik - ROSE PRINT","Wild Mom Gecelik - SİYAH","Wild Pijama Takımı - SİYAH","Vera Mom Gecelik - VİZON BASKILI"];

var a = document.querySelectorAll(".product-box-container");

for(var i=0;i<a.length;i++){
    if(data.includes(a[i].querySelector(".productbox-name.mt-2").innerText)){



        var img = document.createElement("img");
        img.style.position="relative";
        img.style.bottom="87px";
        if(window.innerWidth<500){
            img.style.bottom="67px";
        }
        img.src="https://img.visilabs.net/banner/uploaded_images/286_1272_20200429154911564.png";   
        a[i].querySelector(".product-box-image-container").append(img);
    }
}
