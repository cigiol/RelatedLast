var div = document.createElement("div");
div.setAttribute("id","vl-bbbb");
div.style=`width:1000px;height:100px;background:black;`;
document.body.append(div);

var username="digital@aydinli-OCLG4N";
var password="94abf614-2490-4c7e-ad72-4925846983f9";
apiKey="fa046a08-e9dd-4589-beb0-00f3b71f8d44";

$('#vl-bbbb').click(function(){
    $.ajax({
        url: 'https://AYDBOOMIAPI.aydinligroup.com/ws/rest/yazilim/getKombinUrun/',
        dataType:'json',
        type:'POST',
        data: {
            'x-api-key' : apiKey,
            'csrfmiddlewaretoken' : 'FUNBiMTcMWqdOeSkHw7IdA2ryrgJCd3oBBru18kkZQpmJPQih188kTdtN5L7a1f2'
        },
        beforeSend: function (xhr){ 
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
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

    