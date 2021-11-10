function getExvisitor() {
    var exVisitorId;
    for (var i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].exVisitorId) {
            if (dataLayer[i].exVisitorId == "") {
                console.log("notUser");
            }
            else {
                exVisitorId = dataLayer[i].exVisitorId;
                console.log("user");
            }
        }
    }
}