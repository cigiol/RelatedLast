function SettingsPopup() {
    var desktopWidth = "680px";
    var desktopHeight = "450px";
    var mobileWidth = "330px";
    var mobileHeight = "auto";
    var image = "https://img.visilabs.net/banner/uploaded_images/313_1312_20210122092757447.jpg";
    FirePopup(desktopWidth, desktopHeight, mobileWidth, mobileHeight, image);
}

SettingsPopup();
function FirePopup(width, height, mWidth, mHeight, img, link) {
    if (!document.querySelector(".vl-popup-container")) {
        var style = document.createElement("style");
        style.innerHTML = `
        .vl-popup-container{
            z-index: 1000000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup-overlay{
            z-index: 1000000;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
        }
        .vl-popup{
            position: absolute;
            z-index: 100000001;
            width: 680px;
            height: 450px;
            background: white;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            display: flex;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }

        .vl-popup-img {
            width:${width};
            height:${height};
            object-fit: cover;
        }

        .vl-popup-form{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 0.4;
            padding:0 50px;
        }

        .vl-popup-form-title{
            font-size:20px;
            color:white;
        }

        .vl-popup-form-input{
            background: #C4C4C4;
            height: 40px;
            padding-left:10px;
            color:black;
        }

        .vl-popup-form-button{
            height: 40px;
            background: white;
            cursor: pointer;
        }

        .vl-popup-img-container{
            flex: 0.6;
        }

        .vl-popup-close{
            position: absolute;
            right: 5px;
            top: 5px;
            border-radius: 50%;
            border: 2px solid white;
            color: white;
            cursor: pointer;
            z-index: 100002;
            font-size: 20px;
            line-height: 20px;
            font-weight: 600;
            padding: 2px;
        }

        #vl-warn{
            display:none;
            text-align: center;
        }
        @media only screen and (max-width: 768px) {
            .vl-popup {
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup-img{
                width:${mWidth};
                height:${mHeight};
            }
            .vl-popup-close{
                font-size: 15px;
                line-height: 15px;
            }
        }
    `;
        document.head.append(style);

        var div = document.createElement("div");
        div.setAttribute("class", "vl-popup-container");
        div.innerHTML = `
        <div class="vl-popup-overlay"></div> 
        <div class="vl-popup">
        <div class="vl-popup-close">X</div>
        <div class="vl-popup-img-container">
        <img class="vl-popup-img" src=${img}>
        </div>
        <div class="vl-popup-form">
        <span class="vl-popup-form-title">Contact us for more information and berth bookings in Dubai</span>
        <input id="vl-input-mail" class="vl-popup-form-input" placeholder="Email" type="email">
        <input id="vl-input-name" class="vl-popup-form-input" placeholder="Name" type="text">
        <input id="vl-input-surname" class="vl-popup-form-input" placeholder="Surname" type="text">
        <input id="vl-input-gsm" class="vl-popup-form-input" placeholder="Gsm" type="number">
        <input id="vl-mail-submit" class="vl-popup-form-button" type="submit">
        <span id="vl-warn">All inputs are required</span>
        </div>
        </div>
    `;
        document.body.append(div);
        <%VLSendImpressionFunc%>;
        document.querySelector(".vl-popup-overlay").addEventListener("click", closePopup);
        document.querySelector(".vl-popup-close").addEventListener("click", closePopup);

        function closePopup() {
            document.querySelector(".vl-popup-container").remove();
        }

        document.querySelector("#vl-mail-submit").addEventListener("click",function(){
            if(document.querySelector("#vl-input-mail").value!="" && document.querySelector("#vl-input-name").value!="" && document.querySelector("#vl-input-surname").value!="" && document.querySelector("#vl-input-gsm").value!=""){
                var mail=document.querySelector("#vl-input-mail").value;
                var name=document.querySelector("#vl-input-name").value;
                var surname=document.querySelector("#vl-input-surname").value;
                var gsm=document.querySelector("#vl-input-gsm").value;
                var vl = new Visilabs();
                vl.AddParameter("OM.mailform", "MailForm22January");
                vl.AddParameter("OM.formmail", mail);
                vl.AddParameter("OM.formname", name);
                vl.AddParameter("OM.formsurname", surname);
                vl.AddParameter("OM.formgsm", gsm);
                vl.Collect();
                closePopup();
                <%VLSendClickFunc%>;
            }
            else{
                document.querySelector("#vl-warn").style="display:block;color:red;";
                setTimeout(() => {
                    document.querySelector("#vl-warn").style="display:none;";
                }, 3000);
            }
        });

        
    }
}


