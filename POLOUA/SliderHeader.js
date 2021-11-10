
            if (document.querySelector("#vl-HeadBanner") != null) {
                console.log('İkinci kez çalıştı');
            }
            else {
                var style = document.createElement("style");
                style.innerHTML=`
                    #vl-HeadBanner{
                        top: 0px;
                        position: relative;
                        z-index: -5;
                        overflow: hidden;
                    }
                    #vl-HeadBanner div{
                        transition: all 0.5s;
                    }
                    #vl-HeadBanner img{
                        width:100%;
                    }
                `;
                document.head.append(style);

                var yenidiv = document.createElement('div');
                var slideDiv = document.createElement('div');
                var a = document.createElement('a');
                a.href = "https://tr.uspoloassn.com/sezon-finali/";
                var yeniimg = document.createElement('img');
                slideDiv.appendChild(a);
            
                yeniimg.setAttribute('src', 'https://img.visilabs.net/banner/uploaded_images/230_1216_20210218135718058.gif');

                var a2 = document.createElement('a');
                a2.href = "https://tr.uspoloassn.com/tum-urunler-burada/";
                var yeniimg2 = document.createElement('img');
                slideDiv.appendChild(a2);

                yeniimg2.setAttribute('src', 'https://imgvisilabsnet.azureedge.net/banner/uploaded_images/230_1216_20210402131046561.gif');
            
                yenidiv.setAttribute("id", "vl-HeadBanner");
            
                a.append(yeniimg);
                a2.append(yeniimg2);
                yenidiv.append(slideDiv);
                $('header').append(yenidiv);
                
                setTimeout(function () {
                    var h = yenidiv.offsetHeight;
                    document.querySelector("main").style = "padding-top:" + h + "px";
                    yenidiv.style.height=yeniimg.offsetHeight+"px";
                }, 500);
                var campName = "Haftasonu%10 D Slider Header";
                ga("create", "UA-2253042-20", { name: "RMC", cookieDomain: "auto" });
                ga('RMC.send', 'event', 'RMC', campName, "Impression", { nonInteraction: true });
                <%VLSendImpressionFunc%>;
                jQuery("#vl-HeadBanner").click(function () {
                    ga('RMC.send', 'event', 'RMC', campName, "Click", { nonInteraction: true });
                        <%VLSendClickFunc%>;
                });
               
                function slideIt(){
                    var up=true;
                    setInterval(() => {
                        if(up){
                            up = false;
                            document.querySelector("#vl-HeadBanner div").style.transform=`translateY(-${yeniimg.offsetHeight}px)`;
                        }
                        else{
                            up=true;
                            document.querySelector("#vl-HeadBanner div").style.transform="translateY(0px)";
                        }
                    }, 4000);
                }
                slideIt();
            }