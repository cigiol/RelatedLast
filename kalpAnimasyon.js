if(document.querySelectorAll('.icon-heart.not-active')[0] && document.querySelectorAll('.icon-heart.not-active')[1]){
    var button = document.querySelectorAll('.icon-heart.not-active')[1];

if(window.innerWidth<600){
    button = document.querySelectorAll('.icon-heart.not-active')[0];
}

if(button){
    button.parentElement.classList.add("vl-anime");
    
    var style=document.createElement("style");
    style.innerHTML=`@keyframes vl-super-anime {
      0% {
       transform:scale(1);
    border-radius:50px;
    }
    
      50% {
      transform: scale(1.5);
      border-radius:50px;}
    
      100%{
       transform:scale(1);
       border-radius:50px;
    }
    }
    .vl-anime{
    animation:vl-super-anime 2s infinite;
    }
    `;
    document.head.append(style);
    }
    button.parentElement.addEventListener("click",function(){
        
    });
}
