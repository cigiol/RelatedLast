var style = document.createElement("style");
style.innerHTML = `
    #vl-add-custom{
        margin: auto;
        padding: 10px;
        height: 100%;
        width: fit-content;
        font-size: 11px;
        font-weight: 500;
        background: #FFCC00;
        color: black;
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
    }
    #vl-add-custom:hover{
        color: #FFCC00;
        background-color: black;
        border-color: #FFCC00;
    }
`;
document.head.append(style);

var div = document.createElement("div");
div.setAttribute("id", "vl-add-custom");
div.innerHTML = "Üçünü de Sepete Ekle";
document.querySelector("#ListPage").append(div);

jQuery(".btn.btn-block.pz-button__add-to-cart.js-add-to-cart.pz-button__action").remove();


var dataPks = ["600", "44", "38"];



<%VLSendImpressionFunc%>;
$('#vl-add-custom').click(function () {
    dataPks.forEach(element => {
        setTimeout(() => {
            $.ajax({
                url: 'https://shop.naosstars.com/baskets/basket/',
                dataType: 'json',
                type: 'POST',
                data: {
                    product: element,
                    quantity: 1
                },
                success: function (data) {
                    <%VLSendClickFunc%>;
                    console.log(data);
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }, 500);
        
    });
});