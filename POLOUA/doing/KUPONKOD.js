if (!document.querySelector(".vl-coupon-area")) {
    const coupon = "US1890";
    const title = "İlk Alışverişine Özel 50 TL İndirim";
    const body = "Kampanya, internet mağazamız ve mobil uygulamamızdaki yapacağınız ilk alışverişe özeldir. 300 TL ve üzeri alışverişte sepetinizde US1890 kodunu uyguladıktan sonra 50 TL indirim sepet aşamasında gerçekleşecektir. Başka sepet kampanyaları ya da çek/indirim kodları ile birleşemez. U.S. Polo Assn. kampanyalarda değişiklik yapma ve kampanyayı sonlandırma hakkını saklı tutar.";
    const date = "Son Kullanma Tarihi : 12.08.2022";

    var style = document.createElement("style");
    style.innerHTML = `
    .vl-coupon-area{
        position: relative;
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;
        border-bottom: 2px solid #f4f4f4;
        padding-bottom: 30px;
    }
    .vl-coupon-code{
        background: #f4f4f4;
        border: dashed 2px #002b70;
        color: #002b70;
        font-family: OpenSans;
        font-size: 30px;
        padding: 20px 40px;
    }
    .vl-coupon-detail{
        max-width: 500px;
        display: flex;
        flex-direction: column;
    }
    .vl-coupon-title {
        font-size: 15px;
        color: #282828;
        margin-bottom: 10px;
        font-weight: 600;
    }
    .vl-coupon-body {
        font-size: 13px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
        position: relative;
        padding-right: 60px;
    }
    .vl-show{
        height:auto;
        padding-right:0 !important;
    }
    .vl-hide{
        display:none;
    }
    .vl-coupon-date {
        color: #282828;
        margin-top: 20px;
        font-weight: 600;
    }
    .vl-coupon-copy{
        background: #b70234;
        color: white;
        font-size:20px;
        font-family: OpenSans;
        padding: 10px 30px;
        border-radius: 20px;
        cursor:pointer;
    }
    .vl-coupon-hide{
        position: absolute;
        bottom: 5px;
        right: 0px;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }
    @media only screen and (max-width: 768px) {
        .vl-coupon-area{
            flex-direction: column;
        }
        .vl-coupon-code{
            width: 100%;
            text-align: center;
        }
        .vl-coupon-body{
            padding-right: 50px;
        }
        .vl-coupon-detail{
            margin: 20px 0;
        }
    }
        
    `;
    document.head.append(style);

    var div = document.createElement("div");
    div.setAttribute("class", "vl-coupon-area");
    div.innerHTML = `
       <div class="vl-coupon-code">${coupon}</div>
       <div class="vl-coupon-detail">
          <div class="vl-coupon-title">${title}</div> 
          <div class="vl-coupon-body">${body}<div class="vl-coupon-hide">devamı</div></div> 
          <div class="vl-coupon-date">${date}</div> 
       </div>
       <div class="vl-coupon-copy">Kopyala</div>
    `;


    document.querySelector('.discount-items').append(div);
    <%VLSendImpressionFunc%>;

    div.querySelector(".vl-coupon-hide").addEventListener("click", () => {
        document.querySelector(".vl-coupon-body").classList.add("vl-show");
        document.querySelector(".vl-coupon-hide").classList.add("vl-hide");
    });


    div.querySelector(".vl-coupon-copy").addEventListener("click", () => {
        <%VLSendClickFunc%>;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = coupon;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        document.querySelector(".vl-coupon-copy").innerHTML = "Kopyalandı";
        document.querySelector(".vl-coupon-copy").style.backgroundColor = "grey";
    });


}