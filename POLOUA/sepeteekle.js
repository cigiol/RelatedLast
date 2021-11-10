$('.vl-add-basket').click(function(){
    var dataId=$(this).attr("data-pk");
    console.log(dataId);
    $.ajax({
        url: 'https://gap.com.tr/baskets/basket/',
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