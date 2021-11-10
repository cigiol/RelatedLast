var Input = document.querySelector(".search__input.js-search-input.ui-autocomplete-input");

if(Input){
    Input.placeholder="Anneler Günü Hediye Önerileri";
}
document.querySelector(".search__button").addEventListener("click",function(){

    if(Input.value==""){
        window.location.replace("https://www.marksandspencer.com.tr/anneler-gunu-hediye-rehberi/");
    }

});