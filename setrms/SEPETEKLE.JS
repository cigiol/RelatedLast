$('#vl-kazanc-div').click(function(){
    var dataId=$(this).attr("data-pk");
    console.log(dataId);
    $.ajax({
        url: 'https://www.setrms.com.tr/baskets/basket/',
        dataType:'json',
        type:'POST',
        data:{
            product:32063,
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