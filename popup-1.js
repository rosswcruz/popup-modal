if(sessionStorage["click"]) { window.history.forward(); function preventBack() { window.history.forward(); } setTimeout("preventBack()", 0); } else { };



var width = window.innerWidth;
if (width <= 520) {

addEventListener("touchstart", (event) => {

myFunc();

});

} else if (width <= 820) {

addEventListener("touchstart", (event) => {

myFunc();

});

} else {

addEventListener("mousedown", (event) => {

myFunc();

});

};

function myFunc(){
myFunc = function(){};

history.pushState(null, null, document.URL); window.addEventListener('popstate', function () { history.pushState(null, null, document.URL); var x = document.querySelector(".modalOX"); if (window.getComputedStyle(x). visibility === "hidden") { x.style.visibility = "visible"; } else { x.style.visibility = "hidden"; }; setTimeout(function scroll() { window.scrollTo(0, 0); }, 200); }); ! function () { var t; try { for (t = 0; 10 > t; ++t) history.pushState({}, ""); onpopstate = function (t) { t.state && history.pushState(null, null, window.location.href); window.onpopstate = () => history.forward(); } } catch (o) {} }();

sessionStorage.setItem("click", 500);

};



if(sessionStorage["reload"]) { setTimeout(function() { window.onbeforeunload = null; },0); } else { };



if(navigator.userAgent.match(/MSIE|Trident/i)) { } else {

var width = window.innerWidth;
if (width <= 520) {

addEventListener("touchstart", (event) => {

myFunc2();

});

} else if (width <= 820) {

addEventListener("touchstart", (event) => {

myFunc2();

});

} else {

addEventListener("mousedown", (event) => {

});

};

};

function myFunc2(){
myFunc2 = function(){};

sessionStorage.setItem("reload", 100); var bust = 0; window.onbeforeunload = function() { if (bust === 0) { bust++; return 'Stay on this page !'; } }

};



document.querySelector("html").ontouchstart = function () {
if(navigator.userAgent.match(/MSIE|Trident/i)) { } else { window.onbeforeunload = null; };
return true;
};



var mouseY = 0;
var topValue = 0;
window.addEventListener("mouseout",function(e){
mouseY = e.clientY;
if(mouseY<topValue) {

document.querySelector('.modalOX').style.visibility = "visible"; setTimeout(function scroll() { window.scrollTo(0, 0); }, 200);

}
}, false);
