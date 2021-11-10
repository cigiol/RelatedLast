var html;
if(window.innerWidth>500){
    html = "<p style='margin-bottom:0'><b>SUWEN’DE HER ANNEYE UYGUN BİR HEDİYE MUTLAKA VAR! </b></p> <p>Anneler Günü’nde sevgisiyle ve emeğiye bizi bugünlere getiren biricik annelerimizin tarzına ve zevkine uygun bir hediye seçmenin önemini çok iyi biliyoruz. Tarzı ne olursa olsun annenize en uygun ürünleri Suwen’in zengin ev giyim koleksiyonunda bulabilirsiniz. </p>";
}
else{
    html = "<p style='margin-bottom:0.2rem;font-size:13px;'><b>SUWEN’DE HER TARZ ANNEYE UYGUN BİR HEDİYE VAR! </b></p> <p style='font-size:13px;'>Her Annemizin tarzının, zevkinin farklı olduğunuzu biliyoruz. Farklı tarz ve yaş gruplarına göre tasarlanmış, zengin ev giyim koleksiyonumuzda, Anneler Günü’nde her Annemizi mutlu edebilecek bir hediye alternatifi bulabilirsiniz.</p>";
}



var div = document.createElement("div");
div.setAttribute("id","vl_text");
div.innerHTML=html;


document.querySelector(".d-lg-block.grid-item-container.clearfix > .d-inline-block").insertBefore(div,document.querySelector(".category-product-count"));

<%VLSendImpressionFunc%>;