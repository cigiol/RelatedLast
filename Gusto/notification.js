(function(){
    var campID = 11;
var list = [
{href:"/",text:"Size En Yakın Mağaza",img:"http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/2.jpg"},
{href:"/",text:"Favori Elbiseler",img:"http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/3.jpg"},
{href:"/",text:"En Yeniler",img:"http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/4.jpg"},
{href:"/",text:"Gusto Blog",img:"http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/5.jpg"},
        {href:"/",text:"Online Katalog",img:"http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/6.jpg"}
];
    function exec(){
        var title = "<img src='http://img.euromsg.net/DBAA4DBF2C6A481EBB51DA7B8D3B7E4F/images/image0.jpeg'/>";
        var bubbleColor = "transparent";
    var css = '<style>\
            .vl-menu {position: fixed;background-color:'+bubbleColor+';text-align: center; width: 50px;height: 50px;border-radius: 5em;cursor: pointer;bottom:15px;left:10px;z-index: 9999999999999; transition: 1s all;}\
            .vl-menu .vl-menu-bar{transition: all 0.5s; opacity: 1; font-size:9px; font-weight: 700; color: white; text-shadow: 1px 1px 3px #000;}\
            .vl-menu-count{background-color: #f60;  color: #fff;  position: absolute;  right: 0;  border-radius: 50%; top: 0px;  font-size: 12px;  font-weight: bold;    width: 15px;height: 15px;text-align: center;line-height: 15px;}\
            .vl-list-closer{color: #395482;font-weight: 700;position: absolute;top: 8px;right: 8px;cursor: pointer;}\
            .vl-list-wrapper{transform: rotate(90deg);-webkit-box-shadow: 0px -1px 18px 0px rgb(50 50 50 / 50%);-moz-box-shadow: 0px -1px 18px 0px rgba(50, 50, 50, 0.5);box-shadow: 0px -1px 18px 0px rgb(50 50 50 / 50%);width: 300px; height: 320px;position: fixed; z-index: 99999999999999999999; left: -360px; transition: 1s all; bottom: 20px; opacity: 0;background-color: white;}\
            .vl-list-wrapper.vl-active {transform: rotate(0deg); bottom: 20px; opacity: 1; left: 70px}\
            .vl-list-title{padding: 10px;text-align: left; color: #395482; font-weight: 700;}\
            .vl-list{width: 300px; height: 275px;padding: 3px; overflow-y: scroll; background-color: white}\
            .vl-list::-webkit-scrollbar {width: 6px;}\
            .vl-list::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey; border-radius: 0px;}\
            .vl-list::-webkit-scrollbar-thumb {background-color: #395482; border-radius: 0px;}\
            .vl-list::-webkit-scrollbar-thumb:hover {background-color: #213350}\
            .vl_list_item{width: 100%; height: 60px; padding: 5px;margin: 5px 1px;}\
            .vl_list_item img{float: left; height: 50px;}\
            .vl_list_item .vl-label{float: left; width: 210px; height: 100%; margin-left: 7px; font-weight: 500; font-size: 14px; position: relative;}\
            .vl_list_item .vl-label .vl-label-inner{position: absolute;transform: translate(-50%, -50%);top: 50%;left: 50%;width: 90%; text-align: left;}\
            .vl-menu-bar img{width:50px;}\
            @media only screen and (max-width: 450px){.vl-menu{z-index: 1} .vl-list-wrapper{width:245px;z-index:1} .vl-list{width: 245px;} .vl_list_item .vl-label{width: 165px; font-size: 12px;}}\
            </style>\
          ';
        jQuery('head').append(css);
        var length = list.length;
        var html = '\
            <div class="vl-menu">\
            <span class="vl-menu-bar">'+title+'</span>\
            <span class="vl-menu-count">'+length+'</span></div>\
              <div class="vl-list-wrapper"><div class="vl-list-title">HABERLER</div><div class="vl-list-closer">X</div><div class="vl-list">';
        for(i=0;i<list.length;i++){
        html += '<div class="vl_list_item"><a href="'+list[i].href+'"><img src="'+list[i].img+'"/><div class="vl-label"><div class="vl-label-inner">'+list[i].text+'</div></div></a></div>';
        }
        html += '</div></div>';
        jQuery("body").append(html);
        jQuery(".vl-menu").click(function () {
        jQuery(".vl-list-wrapper").toggleClass("vl-active");
        });
        jQuery('.vl-list-closer').click(function(){
            jQuery(".vl-list-wrapper").removeClass("vl-active");
        });
        try{VLSendImpressionFunc(campID, 4);}catch(e){};
        jQuery('.vl_list_item a').click(function(){
            try{VLSendClickFunc(campID, 4);}catch(e){};
        });
    }
    if(window.location.pathname == "/") exec();
})();