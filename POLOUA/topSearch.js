if(!document.querySelector("#vl-topSearchDiv")){
var div=document.createElement("div");
div.style="margin-top:2px;";
div.setAttribute("id","vl-topSearchDiv");
div.innerHTML="<h7 style='display: inline-block;'><b>En Çok Arananlar:</b></h7><a style='color:#002b70; margin-left:6%; text-decoration: underline;' href='https://tr.uspoloassn.com/top-search-tshirt-all/?OM.zn=acttype-4&OM.zpc=act-10'>Tshirt</a><a style='color:#002b70; margin-left:6%; text-decoration: underline;' href='https://tr.uspoloassn.com/top-search-gomlek-all/?OM.zn=acttype-4&OM.zpc=act-10'>Gömlek</a><a style='color:#002b70; margin-left:6%; text-decoration: underline;' href='https://tr.uspoloassn.com/top-search-canta-all/?OM.zn=acttype-4&OM.zpc=act-10'>Çanta</a>";
document.querySelector(".row > .col-lg-6.col-md-6.col-sm-6:nth-child(2)").append(div);
}
