var currentLink = window.location.href;
setInterval(() => {
    if(window.location.href!=currentLink){
        currentLink=window.location.href;
        setTimeout(() => {
            fireDiscount();
        }, 1000);
    }
}, 1000);