<script>
    function rdPurchase() {
        var tid, pp, pu, exVid, puArray, pprArray;
        var fiyat = [];
        for (i = 0; i < dataLayer.reverse().length; i++) {
            if (dataLayer[i].VLPageType == "ProductPurchase") {
                tid = dataLayer[i].VLTransactionID;
                pp = dataLayer[i].VLProductsCode;
                pu = dataLayer[i].VLProductsQuantity;
                exVid = dataLayer[i].VLExVisitorID;
                puArray = dataLayer[i].VLProductsQuantity.split(";");
                pprArray = dataLayer[i].VLProductsPrice.split(";");
              for (j = 0; j < puArray.length; j++) {
            fiyat.push((parseFloat(pprArray[j].replace(",", ".")) * parseFloat(puArray[j])).toFixed(2).replace(".",","));
        }
                break;
            }
        }
    
        fiyat = fiyat.join(";");
        var VL = new Visilabs();
        VL.AddParameter("OM.tid", tid);
        VL.AddParameter("OM.pp", pp);
        VL.AddParameter("OM.pu", pu)
        VL.AddParameter("OM.ppr", fiyat);
        if(exVid !=""){
            VL.AddParameter("OM.exVisitorID", exVid);
        }
        VL.Collect();
        VL.SuggestActions();
    }
      
    setTimeout(rdPurchase,2500);
    </script>
    