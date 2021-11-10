if(document.querySelector("#vl_HeadBanner") != null){
    console.log('İkinci kez çalıştı');
    }
    else
    { 
        var yenidiv=document.createElement('div');
        var a=document.createElement('a');
        a.href="https://tr.uspoloassn.com/babalar-gunu-sepette-25-indirim/";
        var yeniimg=document.createElement('img');
        yenidiv.appendChild(a); 
        
        yeniimg.setAttribute('src','https://img.visilabs.net/banner/uploaded_images/230_1216_20200603152809306.gif');
            
        yenidiv.setAttribute("id","vl_HeadBanner");
        yeniimg.style.width='100%';
        yenidiv.style.top='0';
        a.append(yeniimg);
        $('header').append(yenidiv);
    }