$('.vl-price-link').click(function(){
    var dataId=$(this).attr("data-id");
    $.ajax({
        url: 'https://www.etatpur.com.tr/baskets/basket/',
        dataType:'json',
        type:'POST',
        data:{
            product:dataId,
            quantity:1
        },
        success:function(data){
            console.log(data);
            location.reload();
        },
        error:function(err){
            console.log(err);
        }
    })
    
    
    })