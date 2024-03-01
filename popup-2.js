var styles1 = `

*, *::after, *::before {
box-sizing: border-box;
}

* {
font: inherit;
margin: 0;
padding: 0;
border: 0;
}

body {
font-family: system-ui, sans-serif;
font-size: 1rem;
}

#modal-title-1 {
line-height: 1.2;
color: hsl(230, 13%, 9%);
font-weight: 700;
font-size: 22px;
margin-top: 0px!important;
margin-bottom: 0px!important;
}

#closeOX, #closeXO {
margin-top: 5px!important;
margin-bottom: 5px!important;
}

#closeAN { display: none; }

@media (min-width: 64rem) {
body {
font-size: 1.25rem;
}

#modal-title-1 {
font-size: 30px;
}
}

/* variables */
:root {
/* colors */
--mc4-color-primary-hsl: 250, 84%, 54%;
--mc4-color-bg-hsl: 0, 0%, 100%;
--mc4-color-contrast-high-hsl: 230, 7%, 23%;
--mc4-color-contrast-higher-hsl: 230, 13%, 9%;
--mc4-color-contrast-lower-hsl: 240, 4%, 85%;
--mc4-color-bg-light-hsl: 0, 0%, 100%;
--mc4-color-bg-lighter-hsl: 0, 0%, 100%;
--mc4-color-black-hsl: 230, 13%, 9%;
--mc4-color-white-hsl: 0, 0%, 100%;
--mc4-color-bg-dark-hsl: 240, 4%, 95%;
--mc4-color-primary-darker-hsl: 250, 84%, 38%;
--mc4-color-primary-light-hsl: 250, 84%, 60%;
--mc4-color-accent-hsl: 342, 89%, 48%;

/* spacing */
--mc4-space-xs: 0.5rem;
--mc4-space-sm: 0.75rem;
--mc4-space-md: 1.25rem;
--mc4-space-2xs: 0.375rem;

/* typography */
--mc4-text-lg: 1.25rem;
--mc4-text-md: 1.2rem;
--mc4-text-sm: 0.833rem;
}

@media(min-width: 64rem){
:root {
/* spacing */
--mc4-space-xs: 0.75rem;
--mc4-space-sm: 1.125rem;
--mc4-space-md: 2rem;
--mc4-space-2xs: 0.5625rem;

/* typography */
--mc4-text-lg: 1.75rem;
--mc4-text-md: 1.5625rem;
--mc4-text-sm: 1rem;
}
}

/* buttons */
.mc4-btn {
position: relative;
display: inline-flex;
justify-content: center;
align-items: center;
font-size: 1em;
white-space: nowrap;
text-decoration: none;
background: hsl(var(--mc4-color-bg-dark-hsl));
color: hsl(var(--mc4-color-contrast-higher-hsl));
cursor: pointer;
text-decoration: none;
line-height: 1.2;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
transition: all 0.2s ease;
will-change: transform;
padding: var(--mc4-space-2xs) var(--mc4-space-sm);
border-radius: 0.25em;
}

.mc4-btn:focus-visible {
box-shadow: 0px 0px 0px 2px hsl(var(--mc4-color-bg-hsl)), 0px 0px 0px 4px hsla(var(--mc4-color-contrast-higher-hsl), 0.15);
outline: none;
}

.mc4-btn:active {
transform: translateY(2px);
}

.mc4-btn--primary {
background: hsl(var(--mc4-color-primary-hsl));
color: hsl(var(--mc4-color-white-hsl));
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.15), 0px 1px 3px hsla(var(--mc4-color-primary-darker-hsl), 0.25), 0px 2px 6px hsla(var(--mc4-color-primary-darker-hsl), 0.1), 0px 6px 10px -2px hsla(var(--mc4-color-primary-darker-hsl), 0.25);
}

.mc4-btn--primary:hover {
background: hsl(var(--mc4-color-primary-light-hsl));
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.15), 0px 1px 2px hsla(var(--mc4-color-primary-darker-hsl), 0.25), 0px 1px 4px hsla(var(--mc4-color-primary-darker-hsl), 0.1), 0px 3px 6px -2px hsla(var(--mc4-color-primary-darker-hsl), 0.25);
}

.mc4-btn--primary:focus {
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.15), 0px 1px 2px hsla(var(--mc4-color-primary-darker-hsl), 0.25), 0px 1px 4px hsla(var(--mc4-color-primary-darker-hsl), 0.1), 0px 3px 6px -2px hsla(var(--mc4-color-primary-darker-hsl), 0.25), 0px 0px 0px 2px hsl(var(--mc4-color-bg-hsl)), 0px 0px 0px 4px hsl(var(--mc4-color-primary-hsl));
}

.mc4-btn--subtle {
background: hsl(var(--mc4-color-bg-lighter-hsl));
color: hsl(var(--mc4-color-contrast-higher-hsl));
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--mc4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--mc4-color-black-hsl), 0.2), 0 0.3px 0.4px rgba(0, 0, 0, 0.025),0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
}

.mc4-btn--subtle:hover {
background: hsl(var(--mc4-color-bg-light-hsl));
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--mc4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--mc4-color-black-hsl), 0.2), 0 0.1px 0.3px rgba(0, 0, 0, 0.06),0 1px 2px rgba(0, 0, 0, 0.12);
}

.mc4-btn--subtle:focus {
box-shadow: inset 0px 1px 0px hsla(var(--mc4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--mc4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--mc4-color-black-hsl), 0.2), 0 0.1px 0.3px rgba(0, 0, 0, 0.06),0 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 2px hsl(var(--mc4-color-bg-hsl)), 0px 0px 0px 4px hsl(var(--mc4-color-contrast-high-hsl));
}

/* icons */
.mc4-icon {
height: var(--mc4-size, 1em);
width: var(--mc4-size, 1em);
display: inline-block;
color: inherit;
fill: currentColor;
line-height: 1;
flex-shrink: 0;
max-width: initial;
}

.mc4-icon--xs {
--mc4-size: 16px;
}

.mc4-icon--sm {
--mc4-size: 24px;
}

/* component */
.modal {
position: fixed;
z-index: 15;
width: 100%;
height: 100%;
left: 0;
top: 0;
opacity: 0;
visibility: hidden;
}
.modal:not(.modal--is-visible) {
pointer-events: none;
background-color: transparent;
}

.modal--is-visible {
opacity: 1;
visibility: visible;
}

/* close button */
.modal__close-btn {
display: flex;
flex-shrink: 0;
border-radius: 50%;
transition: 0.2s;
}
.modal__close-btn svg {
display: block;
margin: auto;
}

.modal__close-btn--outer {
/* close button - outside the modal__content */
width: 48px;
height: 48px;
position: fixed;
top: var(--mc4-space-sm);
right: var(--mc4-space-sm);
z-index: 10;
background-color: hsla(var(--mc4-color-black-hsl), 0.9);
transition: 0.2s;
}
.modal__close-btn--outer svg {
color: hsl(var(--mc4-color-white-hsl));
/* icon color */
transition: -webkit-transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), -webkit-transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal__close-btn--outer:hover {
background-color: hsla(var(--mc4-color-black-hsl), 1);
}
.modal__close-btn--outer:hover svg {
-webkit-transform: scale(1.1);
transform: scale(1.1);
}

.modal__close-btn--inner {
/* close button - inside the modal__content */
--mc4-size: 32px;
width: var(--mc4-size);
height: var(--mc4-size);
background-color: hsl(var(--mc4-color-bg-light-hsl));
box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025),0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
transition: 0.2s;
}
.modal__close-btn--inner svg {
color: inherit;
/* icon color */
}
.modal__close-btn--inner:hover {
background-color: hsl(var(--mc4-color-bg-lighter-hsl));
box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03),0 3.1px 5.5px rgba(0, 0, 0, 0.08),0 14px 25px rgba(0, 0, 0, 0.12);
}

/* animations */
:root {
--modal-transition-duration: 0.2s;
/* fallback (i.e., unless specified differently in the variations 👇) */
}

@media (prefers-reduced-motion: no-preference) {
.modal--animate-fade {
--modal-transition-duration: 0.2s;
transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);
}
.modal--animate-fade.modal--is-visible {
transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s;
}

.modal--animate-scale,
.modal--animate-translate-up,
.modal--animate-translate-down,
.modal--animate-translate-right,
.modal--animate-translate-left {
--modal-transition-duration: 0.2s;
transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);
}
.modal--animate-scale .modal__content,
.modal--animate-translate-up .modal__content,
.modal--animate-translate-down .modal__content,
.modal--animate-translate-right .modal__content,
.modal--animate-translate-left .modal__content {
will-change: transform;
transition: -webkit-transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
}
.modal--animate-scale.modal--is-visible,
.modal--animate-translate-up.modal--is-visible,
.modal--animate-translate-down.modal--is-visible,
.modal--animate-translate-right.modal--is-visible,
.modal--animate-translate-left.modal--is-visible {
transition: opacity var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s;
}
.modal--animate-scale.modal--is-visible .modal__content,
.modal--animate-translate-up.modal--is-visible .modal__content,
.modal--animate-translate-down.modal--is-visible .modal__content,
.modal--animate-translate-right.modal--is-visible .modal__content,
.modal--animate-translate-left.modal--is-visible .modal__content {
-webkit-transform: scale(1);
transform: scale(1);
/* reset all transformations */
}

.modal--animate-slide-up,
.modal--animate-slide-down,
.modal--animate-slide-right,
.modal--animate-slide-left {
--modal-transition-duration: 0.3s;
transition: opacity 0s var(--modal-transition-duration), background-color var(--modal-transition-duration), visibility 0s var(--modal-transition-duration);
}
.modal--animate-slide-up .modal__content,
.modal--animate-slide-down .modal__content,
.modal--animate-slide-right .modal__content,
.modal--animate-slide-left .modal__content {
will-change: transform;
transition: -webkit-transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
transition: transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform var(--modal-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
}
.modal--animate-slide-up.modal--is-visible,
.modal--animate-slide-down.modal--is-visible,
.modal--animate-slide-right.modal--is-visible,
.modal--animate-slide-left.modal--is-visible {
transition: background-color var(--modal-transition-duration), visibility 0s;
}
.modal--animate-slide-up.modal--is-visible .modal__content,
.modal--animate-slide-down.modal--is-visible .modal__content,
.modal--animate-slide-right.modal--is-visible .modal__content,
.modal--animate-slide-left.modal--is-visible .modal__content {
-webkit-transform: scale(1);
transform: scale(1);
/* reset all transformations */
}

/* scale */
.modal--animate-scale .modal__content {
-webkit-transform: scale(0.95);
transform: scale(0.95);
}

/* translate */
.modal--animate-translate-up .modal__content {
-webkit-transform: translateY(40px);
transform: translateY(40px);
}

.modal--animate-translate-down .modal__content {
-webkit-transform: translateY(-40px);
transform: translateY(-40px);
}

.modal--animate-translate-right .modal__content {
-webkit-transform: translateX(-40px);
transform: translateX(-40px);
}

.modal--animate-translate-left .modal__content {
-webkit-transform: translateX(40px);
transform: translateX(40px);
}

/* slide */
.modal--animate-slide-up .modal__content {
-webkit-transform: translateY(100%);
transform: translateY(100%);
}

.modal--animate-slide-down .modal__content {
-webkit-transform: translateY(-100%);
transform: translateY(-100%);
}

.modal--animate-slide-right .modal__content {
-webkit-transform: translateX(-100%);
transform: translateX(-100%);
}

.modal--animate-slide-left .modal__content {
-webkit-transform: translateX(100%);
transform: translateX(100%);
}
}
/* load content - optional */
.modal--is-loading .modal__content {
visibility: hidden;
}
.modal--is-loading .modal__loader {
display: flex;
}

.modal__loader {
/* loader icon */
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
display: none;
pointer-events: none;
}

/* --image */
.modal-img-btn {
position: relative;
cursor: pointer;
}
.modal-img-btn::after {
content: "";
position: absolute;
z-index: 1;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: hsla(var(--mc4-color-black-hsl), 0);
transition: background 0.2s;
}
.modal-img-btn:hover::after {
background-color: hsla(var(--mc4-color-black-hsl), 0.7);
}
.modal-img-btn:hover .modal-img-btn__icon-wrapper {
opacity: 1;
}

.modal-img-btn__icon-wrapper {
position: absolute;
z-index: 2;
top: calc(50% - 24px);
left: calc(50% - 24px);
width: 48px;
height: 48px;
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: hsla(var(--mc4-color-black-hsl), 0.7);
opacity: 0;
transition: opacity 0.2s;
}
.modal-img-btn__icon-wrapper .mc4-icon {
color: hsl(var(--mc4-color-white-hsl));
}

/* utility classes */
.mc4-max-width-100\% {
max-width: 150rem;
}

.mc4-max-height-100\% {
max-height: 100%;
}

.mc4-shadow-md {
box-shadow:0 0.9px 1.5px rgba(0, 0, 0, 0.03),0 3.1px 5.5px rgba(0, 0, 0, 0.08),0 14px 25px rgba(0, 0, 0, 0.12);
}

.mc4-radius-md {
border-radius: 0.25em;
}

.mc4-block {
display: block;
}

.mc4-pointer-events-none {
pointer-events: none;
}

.mc4-flex-center {
justify-content: center;
align-items: center;
}

.mc4-flex {
display: flex;
}

.mc4-height-100\% {
height: 100%;
}

.mc4-width-100\% {
width: 100%;
}

.mc4-padding-md {
padding: var(--mc4-space-md);
}

.mc4-bg-black {
--mc4-bg-o: 1;
background-color: hsla(var(--mc4-color-black-hsl), var(--mc4-bg-o, 1));
}

.mc4-width-3xl {
width: 8rem;
}

.mc4-overflow-hidden {
overflow: hidden;
}

.mc4-text-lg {
font-size: var(--mc4-text-lg);
}

.mc4-text-component :where(h1, h2, h3, h4) {
line-height: var(--mc4-heading-line-height, 1.2);
margin-top: calc(var(--mc4-space-md) * var(--mc4-space-multiplier, 1));
margin-bottom: calc(var(--mc4-space-sm) * var(--mc4-space-multiplier, 1));
}

.mc4-text-component :where(p, blockquote, ul li, ol li) {
line-height: var(--mc4-body-line-height, 1.4);
}

.mc4-text-component :where(ul, ol, p, blockquote, .mc4-text-component__block) {
margin-bottom: calc(var(--mc4-space-sm) * var(--mc4-space-multiplier, 1));
}

.mc4-text-component :where(ul, ol) {
padding-left: 1.25em;
}

.mc4-text-component ul :where(ul, ol), .mc4-text-component ol :where(ul, ol) {
padding-left: 1em;
margin-bottom: 0;
}

.mc4-text-component ul {
list-style-type: disc;
}

.mc4-text-component ol {
list-style-type: decimal;
}

.mc4-text-component img {
display: block;
margin: 0 auto;
}

.mc4-text-component figcaption {
margin-top: calc(var(--mc4-space-xs) * var(--mc4-space-multiplier, 1));
font-size: var(--mc4-text-sm);
text-align: center;}

.mc4-text-component em {
font-style: italic;
}

.mc4-text-component strong {
font-weight: bold;
}

.mc4-text-component s {
text-decoration: line-through;
}

.mc4-text-component u {
text-decoration: underline;
}

.mc4-text-component mark {
background-color: hsla(var(--mc4-color-accent-hsl), 0.2);
color: inherit;
}

.mc4-text-component blockquote {
padding-left: 1em;
border-left: 4px solid hsl(var(--mc4-color-contrast-lower-hsl));
font-style: italic;
}

.mc4-text-component hr {
margin: calc(var(--mc4-space-md) * var(--mc4-space-multiplier, 1)) auto;
background: hsl(var(--mc4-color-contrast-lower-hsl));
height: 1px;
}

.mc4-text-component > *:first-child {
margin-top: 0;
}

.mc4-text-component > *:last-child {
margin-bottom: 0;
}

.mc4-text-component.mc4-line-height-xs {
--mc4-heading-line-height: 1;
--mc4-body-line-height: 1.1;
}

.mc4-text-component.mc4-line-height-sm {
--mc4-heading-line-height: 1.1;
--mc4-body-line-height: 1.2;
}

.mc4-text-component.mc4-line-height-md {
--mc4-heading-line-height: 1.15;
--mc4-body-line-height: 1.4;
}

.mc4-text-component.mc4-line-height-lg {
--mc4-heading-line-height: 1.22;
--mc4-body-line-height: 1.58;
}

.mc4-text-component.mc4-line-height-xl {
--mc4-heading-line-height: 1.3;
--mc4-body-line-height: 1.72;
}

.mc4-top-0 {
top: 0;
}

.mc4-position-sticky {
position: sticky;
}

.mc4-float-right {
float: right;
}

:where(.mc4-inner-glow) {
position: relative;
}

.mc4-inner-glow::after {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: inherit;
pointer-events: none;
box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075);
}

.mc4-bg {
--mc4-bg-o: 1;
background-color: hsla(var(--mc4-color-bg-hsl), var(--mc4-bg-o, 1));
}

.mc4-overflow-auto {
overflow: auto;
}

.mc4-max-width-sm {
max-width: 48rem;
}

@media not all and (min-width: 64rem) {
.mc4-display\@md {
display:none !important;
}
}

.mc4-gap-xs {
gap: var(--mc4-space-xs);
}

.mc4-justify-end {
justify-content: flex-end;
}

.mc4-padding-x-md {
padding-left: var(--mc4-space-md);
padding-right: var(--mc4-space-md);
}

.mc4-padding-y-sm {
padding-top: var(--mc4-space-sm);
padding-bottom: var(--mc4-space-sm);
}

.mc4-text-md {
font-size: var(--mc4-text-md);
}

.mc4-text-truncate {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.mc4-justify-between {
justify-content: space-between;
}

.mc4-items-center {
align-items: center;
}

.mc4-bg-contrast-lower {
--mc4-bg-o: 1;
background-color: hsla(var(--mc4-color-contrast-lower-hsl), var(--mc4-bg-o, 1));
}

.mc4-max-width-xs {
max-width: 38rem;
}

.mc4-flex-shrink-0 {
flex-shrink: 0;
}

:where(.mc4-inner-glow-top) {
position: relative;
}

.mc4-inner-glow-top::after {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: inherit;
pointer-events: none;
box-shadow: var(inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075));
}

.mc4-momentum-scrolling {
-webkit-overflow-scrolling: touch;
}

.mc4-flex-grow {
flex-grow: 1;
}

.mc4-flex-column {
flex-direction: column;
}

.mc4-bg-opacity-90\% {
--mc4-bg-o: 0.9;
}

.mc4-bg-opacity-50\% {
--mc4-bg-o: 0.5;
}

@media(min-width: 64rem){
.mc4-hide\@md {
display: block !important;
}
}

`;
var styleSheet1 = document.createElement("style");
styleSheet1.innerText = styles1;
document.head.appendChild(styleSheet1);



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

addEventListener("touchstart", () => {

myFunc();

});

} else if (width <= 820) {

addEventListener("touchstart", () => {

myFunc();

});

} else {

addEventListener("mousedown", () => {

myFunc();

});

};

function myFunc(){
myFunc = function(){};

if(navigator.userAgent.indexOf("Chrome") != -1) {

var scriptZA = document.createElement("script");
scriptZA.type="text/javascript";
scriptZA.innerHTML='! function () { var t; try { for (t = 0; 10 > t; ++t) history.pushState({}, ""); onpopstate = function (t) { t.state && history.pushState(null, null, document.URL); window.addEventListener("popstate", function () { history.go(1); }); } } catch (o) {} }();';
document.getElementsByTagName("body")[0].appendChild(scriptZA);

var scriptZQ = document.createElement("script");
scriptZQ.type="text/javascript";
scriptZQ.innerHTML='window.history.pushState(null, null, window.location.href); window.onpopstate = function () { document.querySelector(".mc4-btn").click(); };';
document.getElementsByTagName('body')[0].appendChild(scriptZQ);

} else {

var scriptZR = document.createElement("script");
scriptZR.type="text/javascript";
scriptZR.innerHTML='! function () { var t; try { for (t = 0; 10 > t; ++t) history.pushState({}, ""); onpopstate = function (t) { t.state && history.pushState(null, null, document.URL); window.addEventListener("popstate", function () { history.pushState(null, null, document.URL); document.querySelector(".mc4-btn").click(); }); } } catch (o) {} }();';
document.getElementsByTagName('body')[0].appendChild(scriptZR);

};

sessionStorage.setItem("click", 100);

};



document.querySelector("#closeXO").onclick = function remOO() {
document.querySelector(".mc4-btn").click();
};



var widthZ = window.innerWidth;
if (widthZ <= 520) { } else if (widthZ <= 820) { } else {

var mouseY = 0;
var topValue = 0;
window.addEventListener("mouseout",function(e){
mouseY = e.clientY;
if(mouseY<topValue) {

document.querySelector('#startAN').click(); setTimeout(function scroll() { window.scrollTo(0, 0); }, 200);

}
}, false);

};
