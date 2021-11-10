var style=document.createElement("style");
style.innerHTML=`
    #vl-lightbox-container{
        background: #094871;
        font-weight:600;
        font-size:20px;
        text-align:center;
        line-height: 25px;
    }
    #vl-form-container>div{
    }
    .vl-form-img{
        margin:20px 0;
    }
    .vl-title-p{
        color:#ff6630;
        font-weight:1000;
        font-size:25px;
    }
    .vl-form-submit-btn{
        font-weight: 1000;
        font-size: 20px;
        border-radius: 8px;
        border: none;
        padding: 5px 10px;
    }
    .vl-successMessage{
        display:none;
    }
    #vl-form-title{
        color:white;
    }
    #vl-form-desc{
        color:white;
    }
`;
document.head.append(style);


document.querySelector("#vl-form-title").innerHTML=`
27-30 KASIM <br><span class='vl-title-p'>EFSANE GÜNLER</span>'de
`;

document.querySelector("#vl-form-desc").innerHTML=`
ekstra <br>efsane kampanyalar
`;

var img=document.createElement("img");
img.setAttribute("class","vl-form-img");
img.src='https://img.visilabs.net/banner/uploaded_images/268_804_20201125092904546.png';
document.querySelector("#vl-form-desc").after(img);

document.querySelector(".vl-form-submit-btn").addEventListener("click",function(){
    img.src='https://img.visilabs.net/banner/uploaded_images/268_804_20201125092915436.png';
    document.querySelector(".vl-form-submit-btn").style.display="none";
    
});
$("#vl-form-container > div").bind('DOMSubtreeModified', function(e){
    
    if (document.querySelector("#vl_copy_input")) {
        $(this).unbind(e);
        var addAfter=document.querySelector(".vl-successMessage");

        
        var title = document.createElement("div");
        title.setAttribute("id","vl-form-title");
        title.innerHTML=`
        27-30 KASIM <br><span class='vl-title-p'>EFSANE GÜNLER</span>'de
        `;
        var desc=document.createElement("div");
        desc.setAttribute("id","vl-form-desc");
        desc.innerHTML=`
        ekstra <br>efsane kampanyalar
        `;
        var img=document.createElement("img");
        img.src='https://img.visilabs.net/banner/uploaded_images/268_804_20201125092930031.png';
        addAfter.after(desc);
        addAfter.after(title);
        title.after(img);
        
    }
});
