!function() {
    jQuery("head").append("<style>.cookiebox{position:fixed;background-color:#1946bb;bottom:50px;right:3%;z-index:2001;padding:17px 17px;width:320px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;color:#fff;text-align:left;display:none}.cookiebox p{margin:0 0 1em;color:#white}.cookiebox-mesaj{font-size:.75em;line-height:1.4em;font-style:normal;padding-bottom:18px}.cookiebox-baslik{font-size:.95em;line-height:1.5789474em;font-weight:700;font-style:normal;margin:0}.cookiebox-buton{position:absolute;top:8px;right:9px;line-height:17px;font-weight:700;background-color:transparent;color:#fff;padding:2px 5px;border:none;text-align:center;cursor:pointer}.cookiebox a{color:#ad002d;line-height:1.5em;text-decoration:underline}.cookiebox a:visited{color:#a41e36;line-height:1.5em;text-decoration:underline}.cookiebox-detay{float:left;font-size:.8em;line-height:1.3125em;font-style:normal;padding-top:9px;color:#fff}</style>"),
    jQuery("body").append('<div class="cookiebox"><input id="cookieboxKapat" type="button" class="cookiebox-buton" value="X"><p class="cookiebox-baslik">Bilgilendirme</p><p class="cookiebox-textmessage">Bu sayfada yer alan oteller ve otellerin aldıklarını belirttikleri Covid-19 önlemleri operatör datalarımız üzerinden oluşturulmuştur.  Sertifika süreci başlayana dek alınan tüm önlemler tesislerin inisiyatifinde olup operatör sayfalarından detayları incelenebilir. Tesislerin aldıkları önlemleri değiştirmesi veya sonlandırması konusunda neredekal.com sorumluluk kabul etmemektedir. Neredekal olarak bu tesislerde konaklama yapmadan önce şartlarını teyit etmenizi tavsiye ederiz.</p></div>'),
    setTimeout(function() {
        jQuery(".cookiebox").fadeIn(600)
    }
    , 5e3),
    jQuery("#cookieboxKapat").click(function() {
        jQuery(".cookiebox").remove()
        
    }
    );
    try {
        VLSendImpressionFunc(72, 4)
    }
    catch(e) {}
    jQuery(".cookielink").click(function() {
        try {
            VLSendClickFunc(72, 4)
        }
        catch(e) {}
    }
    )
}

();