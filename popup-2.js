const demoX2 = document.querySelector('body');
let html2 = '<button id="startAN" class="mc4-btn mc4-btn--primary" aria-controls="modal-name-1" style="margin-top: 250px!important; left: 50%; transform: translate(-50%, -50%); visibility: visible; pointer-events: none; position: absolute; left: -9999px; transform: scale(0);">Show modal window</button> <div id="modal-name-1" style="z-index: 300;" class="modal modal--animate-scale mc4-flex mc4-flex-center mc4-bg-black mc4-bg-opacity-90% mc4-padding-md js-modal"> <div class="modal__content mc4-width-100% mc4-max-width-xs mc4-max-height-100% mc4-overflow-auto mc4-bg mc4-radius-md mc4-inner-glow mc4-shadow-md" role="alertdialog" aria-labelledby="modal-title-1" aria-describedby="modal-description-1"> <header class="mc4-bg-contrast-lower mc4-bg-opacity-50% mc4-padding-y-sm mc4-padding-x-md mc4-flex mc4-items-center mc4-justify-between"> <h1 id="modal-title-1" class="mc4-text-truncate mc4-text-md">ALERT</h1> <button class="modal__close-btn modal__close-btn--inner mc4-hide@md js-modal__close js-tab-focus"> <svg class="mc4-icon mc4-icon--xs" viewBox="0 0 16 16"> <title>Close modal window</title> <g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"> <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line> <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line> </g> </svg> </button> </header> <div class="mc4-padding-y-sm mc4-padding-x-md"> <div class="mc4-text-component"> <p id="modal-description-1">Please follow the on-screen steps to reach your destination link !</p> </div> </div> <footer class="mc4-padding-md"> <div class="mc4-flex mc4-justify-end mc4-gap-xs"> <button id="closeOX" class="mc4-btn mc4-btn--subtle js-modal__close">Cancel</button> <button id="closeXO" class="mc4-btn mc4-btn--primary">OK</button> </div> </footer> </div> <button id="closeAN" class="modal__close-btn modal__close-btn--outer mc4-display@md js-modal__close js-tab-focus"> <svg class="mc4-icon mc4-icon--sm" viewBox="0 0 24 24"> <title>Close modal window</title> <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="3" y1="3" x2="21" y2="21" /> <line x1="21" y1="3" x2="3" y2="21" /> </g> </svg> </button> </div>';
demoX2.insertAdjacentHTML("afterbegin", html2);

(function() {
var Modal = function(element) {
this.element = element;
this.triggers = document.querySelectorAll('[aria-controls="'+this.element.getAttribute('id')+'"]');
this.firstFocusable = null;
this.lastFocusable = null;
this.moveFocusEl = null; // focus will be moved to this element when modal is open
this.modalFocus = this.element.getAttribute('data-modal-first-focus') ? this.element.querySelector(this.element.getAttribute('data-modal-first-focus')) : null;
this.selectedTrigger = null;
this.preventScrollEl = this.getPreventScrollEl();
this.showClass = "modal--is-visible";
this.initModal();
};

Modal.prototype.getPreventScrollEl = function() {
var scrollEl = false;
var querySelector = this.element.getAttribute('data-modal-prevent-scroll');
if(querySelector) scrollEl = document.querySelector(querySelector);
return scrollEl;
};

Modal.prototype.initModal = function() {
var self = this;
//open modal when clicking on trigger buttons
if ( this.triggers ) {
for(var i = 0; i < this.triggers.length; i++) {
this.triggers[i].addEventListener('click', function(event) {
event.preventDefault();
if(self.element.classList.contains(self.showClass)) {
self.closeModal();
return;
}
self.selectedTrigger = event.currentTarget;
self.showModal();
self.initModalEvents();
});
}
}

// listen to the openModal event -> open modal without a trigger button
this.element.addEventListener('openModal', function(event){
if(event.detail) self.selectedTrigger = event.detail;
self.showModal();
self.initModalEvents();
});

// listen to the closeModal event -> close modal without a trigger button
this.element.addEventListener('closeModal', function(event){
if(event.detail) self.selectedTrigger = event.detail;
self.closeModal();
});

// if modal is open by default -> initialise modal events
if(this.element.classList.contains(this.showClass)) this.initModalEvents();
};

Modal.prototype.showModal = function() {
var self = this;
this.element.classList.add(this.showClass);;
this.getFocusableElements();
if(this.moveFocusEl) {
this.moveFocusEl.focus();
// wait for the end of transitions before moving focus
this.element.addEventListener("transitionend", function cb(event) {
self.moveFocusEl.focus();
self.element.removeEventListener("transitionend", cb);
});
}
this.emitModalEvents('modalIsOpen');
// change the overflow of the preventScrollEl
if(this.preventScrollEl) this.preventScrollEl.style.overflow = 'hidden';
};

Modal.prototype.closeModal = function() {
if(!this.element.classList.contains(this.showClass)) return;
this.element.classList.remove(this.showClass);
this.firstFocusable = null;
this.lastFocusable = null;
this.moveFocusEl = null;
if(this.selectedTrigger) this.selectedTrigger.focus();
//remove listeners
this.cancelModalEvents();
this.emitModalEvents('modalIsClose');
// change the overflow of the preventScrollEl
if(this.preventScrollEl) this.preventScrollEl.style.overflow = '';
};

Modal.prototype.initModalEvents = function() {
//add event listeners
this.element.addEventListener('keydown', this);
this.element.addEventListener('click', this);
};

Modal.prototype.cancelModalEvents = function() {
//remove event listeners
this.element.removeEventListener('keydown', this);
this.element.removeEventListener('click', this);
};

Modal.prototype.handleEvent = function (event) {
switch(event.type) {
case 'click': {
this.initClick(event);
}
case 'keydown': {
this.initKeyDown(event);
}
}
};

Modal.prototype.initKeyDown = function(event) {
if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
//trap focus inside modal
this.trapFocus(event);
} else if( (event.keyCode && event.keyCode == 13 || event.key && event.key == 'Enter') && event.target.closest('.js-modal__close')) {
event.preventDefault();
this.closeModal(); // close modal when pressing Enter on close button
}
};

Modal.prototype.initClick = function(event) {
//close modal when clicking on close button or modal bg layer
if( !event.target.closest('.js-modal__close') && !event.target.classList.contains('js-modal') ) return;
event.preventDefault();
this.closeModal();
};

Modal.prototype.trapFocus = function(event) {
if( this.firstFocusable == document.activeElement && event.shiftKey) {
//on Shift+Tab -> focus last focusable element when focus moves out of modal
event.preventDefault();
this.lastFocusable.focus();
}
if( this.lastFocusable == document.activeElement && !event.shiftKey) {
//on Tab -> focus first focusable element when focus moves out of modal
event.preventDefault();
this.firstFocusable.focus();
}
}

Modal.prototype.getFocusableElements = function() {
//get all focusable elements inside the modal
var allFocusable = this.element.querySelectorAll(focusableElString);
this.getFirstVisible(allFocusable);
this.getLastVisible(allFocusable);
this.getFirstFocusable();
};

Modal.prototype.getFirstVisible = function(elements) {
//get first visible focusable element inside the modal
for(var i = 0; i < elements.length; i++) {
if( isVisible(elements[i]) ) {
this.firstFocusable = elements[i];
break;
}
}
};

Modal.prototype.getLastVisible = function(elements) {
//get last visible focusable element inside the modal
for(var i = elements.length - 1; i >= 0; i--) {
if( isVisible(elements[i]) ) {
this.lastFocusable = elements[i];
break;
}
}
};

Modal.prototype.getFirstFocusable = function() {
if(!this.modalFocus || !Element.prototype.matches) {
this.moveFocusEl = this.firstFocusable;
return;
}
var containerIsFocusable = this.modalFocus.matches(focusableElString);
if(containerIsFocusable) {
this.moveFocusEl = this.modalFocus;
} else {
this.moveFocusEl = false;
var elements = this.modalFocus.querySelectorAll(focusableElString);
for(var i = 0; i < elements.length; i++) {
if( isVisible(elements[i]) ) {
this.moveFocusEl = elements[i];
break;
}
}
if(!this.moveFocusEl) this.moveFocusEl = this.firstFocusable;
}
};

Modal.prototype.emitModalEvents = function(eventName) {
var event = new CustomEvent(eventName, {detail: this.selectedTrigger});
this.element.dispatchEvent(event);
};

function isVisible(element) {
return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
};

window.Modal = Modal;

//initialize the Modal objects
var modals = document.getElementsByClassName('js-modal');
// generic focusable elements string selector
var focusableElString = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
if( modals.length > 0 ) {
var modalArrays = [];
for( var i = 0; i < modals.length; i++) {
(function(i){modalArrays.push(new Modal(modals[i]));})(i);
}

window.addEventListener('keydown', function(event){ //close modal window on esc
if(event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {
for( var i = 0; i < modalArrays.length; i++) {
(function(i){modalArrays[i].closeModal();})(i);
};
}
});
}
}());



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

history.pushState(null, null, document.URL); window.addEventListener('popstate', function () { history.pushState(null, null, document.URL); document.querySelector('#startAN').click(); setTimeout(function scroll() { window.scrollTo(0, 0); }, 200); }); ! function () { var t; try { for (t = 0; 10 > t; ++t) history.pushState({}, ""); onpopstate = function (t) { t.state && history.pushState(null, null, window.location.href); window.onpopstate = () => history.forward(); } } catch (o) {} }();

sessionStorage.setItem("click", 500);

};



document.querySelector("#closeXO").onclick = function remOO() {
document.querySelector(".mc4-btn").click();
};



if(sessionStorage["reload"]) { setTimeout(function() { window.onbeforeunload = null; },0); } else { };



var width = window.innerWidth;
if (width <= 520) {

addEventListener('touchstart', function(e) {
var myCN = e.target.className;
if(myCN!='orderX'){

sessionStorage.setItem("reload", 100);
var bust = 0; window.onbeforeunload = function() { if (bust === 0) { bust++; return 'Stay on this page !'; } }

} else {

window.onbeforeunload = null;

}
});

} else if (width <= 820) {

addEventListener('touchstart', function(e) {
var myCN = e.target.className;
if(myCN!='orderX'){

sessionStorage.setItem("reload", 100);
var bust = 0; window.onbeforeunload = function() { if (bust === 0) { bust++; return 'Stay on this page !'; } }

} else {

window.onbeforeunload = null;

}
});

} else { };



var mouseY = 0;
var topValue = 0;
window.addEventListener("mouseout",function(e){
mouseY = e.clientY;
if(mouseY<topValue) {

document.querySelector('#startAN').click(); setTimeout(function scroll() { window.scrollTo(0, 0); }, 200);

}
}, false);
