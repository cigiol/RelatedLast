function isPrivateMode(){return new Promise(function(e){var n,t,r=function(){e(!0)},o=function(){e(!1)};if(((n=/(?=.*(opera|chrome)).*/i.test(navigator.userAgent)&&navigator.storage&&navigator.storage.estimate)&&navigator.storage.estimate().then(function(e){return e.quota<1e9?r():o()}),!n)&&(!function(){var e="MozAppearance"in document.documentElement.style;if(e)if(null==indexedDB)r();else{var n=indexedDB.open("inPrivate");n.onsuccess=o,n.onerror=r}return e}()&&!function(){var e=navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);if(e){if(parseInt(e[1],10)<11)return function(){try{localStorage.length?o():(localStorage.setItem("inPrivate","0"),localStorage.removeItem("inPrivate"),o())}catch(e){navigator.cookieEnabled?r():o()}return!0}();try{window.openDatabase(null,null,null,null),o()}catch(e){r()}}return!!e}()&&((t=!window.indexedDB&&(window.PointerEvent||window.MSPointerEvent))&&r(),!t)))return o()})};
isPrivateMode().then(function(data){
if(!data){
    console.log("Normal Sekme");
}
else{
    console.log("Gizli Sekme");
}
});