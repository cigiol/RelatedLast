var data=["Race Şort Tişört Takımı - SİYAH ÇİZGİLİ","Athletic Pijama Takımı  - YEŞİL","Naut Rules Pijama Takımı - BEYAZ","Sailing Pijama Takımı - BEYAZ","Sail Team Pijama Takımı - KIRMIZI","Ocean Racing Pijama Takımı - SİYAH","Terry Pijama Takımı - NAVY LINE","Terry Pijama Takımı - GREEN LINE","Tucker Pijama Takımı - GRİLİ","Groom Maskulen Pijama Takımı - GRİ","Groom Maskulen Pijama Takımı - LACİVERT","Bruce Pijama Seti - GRİLİ","Moses Şort Takım - KOYU GRİ","Moses Şort Takım - SİYAH","Moses Şort Takım - GRİLİ","Gustavo Pijama Takımı - GRİLİ","Martin Şort Set - KOYU LACİVERT","Frey Şort Takım - GRİLİ","Roberto Pijama Takımı - KOYU GRİ","Roberto Pijama Takımı - GRİLİ","Henry Şort Takım - GRİLİ","Ortega Şort Takım - GRİLİ","New Year Erkek Boxer  - SİYAH","New Year Erkek Boxer  - KIRMIZI","Erkek Compact Üst Atlet - BEYAZ","Erkek Compact V Yaka Üst  - BEYAZ","Erkek Slip Külot - SİYAH","Erkek Slip Külot - GRİLİ","Erkek Slip Külot - BEYAZ","Erkek Boxer - SİYAH","Erkek Boxer - BEYAZ","Erkek Tişört Atlet - SİYAH","Erkek Tişört Atlet - BEYAZ","Erkek Yarım Kollu Fanila Atlet - SİYAH","Erkek Yarım Kollu Fanila Atlet - GRİLİ","Erkek Yarım Kollu Fanila Atlet - BEYAZ","Erkek V Yaka Tişört Atlet - SİYAH","Erkek V Yaka Tişört Atlet - GRİLİ","Erkek V Yaka Tişört Atlet - BEYAZ","Suwen Man Kalın Askılı Erkek Atlet - SİYAH","Suwen Man Kalın Askılı Erkek Atlet - BEYAZ","Suwen Man Yarım Kollu Fanila Atlet - SİYAH","Suwen Man Yarım Kollu Fanila Atlet - BEYAZ","Suwen Man Boxer 2 li  - SİYAH/GRİ","Suwen Man Boxer 2 li  - BEYAZ","Man Premium Üst  - BEYAZ"];
var a = document.querySelectorAll(".product-box-container");

for(var i=0;i<a.length;i++){
    if(data.includes(a[i].querySelector(".productbox-name.mt-2").innerText)){
        console.log("eşleşti"+a[i].getAttribute("data-productid"));

    }
}


var data=["Race Şort Tişört Takımı - SİYAH ÇİZGİLİ","Athletic Pijama Takımı  - YEŞİL","Naut Rules Pijama Takımı - BEYAZ","Sailing Pijama Takımı - BEYAZ","Sail Team Pijama Takımı - KIRMIZI","Ocean Racing Pijama Takımı - SİYAH","Terry Pijama Takımı - NAVY LINE","Terry Pijama Takımı - GREEN LINE","Tucker Pijama Takımı - GRİLİ","Groom Maskulen Pijama Takımı - GRİ","Groom Maskulen Pijama Takımı - LACİVERT","Bruce Pijama Seti - GRİLİ","Moses Şort Takım - KOYU GRİ","Moses Şort Takım - SİYAH","Moses Şort Takım - GRİLİ","Gustavo Pijama Takımı - GRİLİ","Martin Şort Set - KOYU LACİVERT","Frey Şort Takım - GRİLİ","Roberto Pijama Takımı - KOYU GRİ","Roberto Pijama Takımı - GRİLİ","Henry Şort Takım - GRİLİ","Ortega Şort Takım - GRİLİ","New Year Erkek Boxer  - SİYAH","New Year Erkek Boxer  - KIRMIZI","Erkek Compact Üst Atlet - BEYAZ","Erkek Compact V Yaka Üst  - BEYAZ","Erkek Slip Külot - SİYAH","Erkek Slip Külot - GRİLİ","Erkek Slip Külot - BEYAZ","Erkek Boxer - SİYAH","Erkek Boxer - BEYAZ","Erkek Tişört Atlet - SİYAH","Erkek Tişört Atlet - BEYAZ","Erkek Yarım Kollu Fanila Atlet - SİYAH","Erkek Yarım Kollu Fanila Atlet - GRİLİ","Erkek Yarım Kollu Fanila Atlet - BEYAZ","Erkek V Yaka Tişört Atlet - SİYAH","Erkek V Yaka Tişört Atlet - GRİLİ","Erkek V Yaka Tişört Atlet - BEYAZ","Suwen Man Kalın Askılı Erkek Atlet - SİYAH","Suwen Man Kalın Askılı Erkek Atlet - BEYAZ","Suwen Man Yarım Kollu Fanila Atlet - SİYAH","Suwen Man Yarım Kollu Fanila Atlet - BEYAZ","Suwen Man Boxer 2 li  - SİYAH/GRİ","Suwen Man Boxer 2 li  - BEYAZ","Man Premium Üst  - BEYAZ"];
var a = document.querySelectorAll(".product-box-container");

for(var i=0;i<a.length;i++){
    if(data.includes(a[i].querySelector(".productbox-name.mt-2").innerText)){



        var h = document.createElement("H1");
        h.style="font-size: 14px;font-family: 'WorkSans-Medium'; margin-top: 5px;color: #ff8074; text-align:center;";
        var t = document.createTextNode("Sepette %50 indirim");
        h.appendChild(t); 
        a[i].appendChild(h);




    }
}