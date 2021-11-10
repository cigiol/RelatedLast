function getExvisitor() {
    var exVisitorId;
    for (var i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].hashedEmail) {
            if (dataLayer[i].hashedEmail == "") {
                console.log("notUser");
            }
            else {
                exVisitorId = dataLayer[i].hashedEmail;
                console.log("user");
            }
        }
    }
}