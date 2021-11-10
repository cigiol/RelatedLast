$('.vl-price-link').click(function(){
    var dataId=$(this).attr("data-id");
    $.ajax({
        url: 'https://www.kitapkoala.com/?p=Cart&popup=1&no_common=1&add=391539',
        dataType:'json',
        type:'POST'
        
    })
    
    
    })