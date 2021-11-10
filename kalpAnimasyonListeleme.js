if($(".icon-heart.not-active:visible").length > 0){

   $(".icon-heart.not-active:visible").parent().addClass("vl-anime");

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
   $(".icon-heart.not-active:visible").parent().on("click",function(){
      console.log("adsa");
   });
}

