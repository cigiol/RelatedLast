ga("create", "UA-145137301-1", {name: "RMC", cookieDomain: "auto"});

var scenarioName="Story Direct";

ga('RMC.send', 'event', 'RMC', scenarioName, "Impression", {nonInteraction: true});
                


var stories = document.querySelectorAll(".flex-container > div");
stories.forEach(function(story){
    story.addEventListener("click",function(){
        ga('RMC.send', 'event', 'RMC', scenarioName, "Click", {nonInteraction: true});
    });
});
                //"UA-1225457-1" müşteri analytic id 


                GA'da Events > Top Events > RMC altında kurgu isimleri listelenecek.