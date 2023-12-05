/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  var content = document.getElementById('content');
  var pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  pageContent.setAttribute('id', 'page-content-contact');

  //Title

  var titleContact = document.createElement('h1');
  titleContact.setAttribute('id', 'title-contact');
  titleContact.textContent = 'Contact Us';
  pageContent.appendChild(titleContact);

  //Form

  var form = document.createElement('form');
  form.classList.add('contact-form');
  pageContent.appendChild(form);

  //Inputs and Labels
  var divInput1 = document.createElement('div');
  var label1 = document.createElement('label');
  var input1 = document.createElement('input');
  divInput1.setAttribute('id', 'divInput1');
  label1.textContent = 'Name';
  input1.placeholder = 'Jhon';
  input1.type = 'text';
  form.appendChild(divInput1);
  divInput1.appendChild(label1);
  divInput1.appendChild(input1);
  var divInput2 = document.createElement('div');
  var label2 = document.createElement('label');
  var input2 = document.createElement('input');
  divInput2.setAttribute('id', 'divInput2');
  label2.textContent = 'Surname';
  input2.placeholder = 'Doe';
  input2.type = 'text';
  form.appendChild(divInput2);
  divInput2.appendChild(label2);
  divInput2.appendChild(input2);
  var divInput3 = document.createElement('div');
  var label3 = document.createElement('label');
  var input3 = document.createElement('input');
  divInput3.setAttribute('id', 'divInput3');
  label3.textContent = 'Email';
  input3.placeholder = 'jhonDoe@gmail.com';
  input3.type = 'email';
  form.appendChild(divInput3);
  divInput3.appendChild(label3);
  divInput3.appendChild(input3);
  var divbtn = document.createElement('div');
  var btnSubmit = document.createElement('button');
  divbtn.setAttribute('id', 'submitContainer');
  btnSubmit.setAttribute('id', 'btnSumbit');
  btnSubmit.textContent = 'Submit';
  form.appendChild(divbtn);
  divbtn.appendChild(btnSubmit);
  content.appendChild(pageContent);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  var content = document.getElementById('content');
  var pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //pageContent
  pageContent.setAttribute('id', 'page-content-main');

  //Title of main
  var title = document.createElement('h1');
  title.setAttribute('id', 'title-main');
  title.textContent = 'Welcome To Our Restaurant';
  pageContent.appendChild(title);

  //parrot of main
  var parrot = document.createElement('p');
  parrot.setAttribute('id', 'parrot-main');
  parrot.textContent = "Welcome to our charming restaurant, where we embrace you with a fusion of delectable flavors and warm hospitality!";
  pageContent.appendChild(parrot);
  content.appendChild(pageContent);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  var content = document.getElementById('content');
  var pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //Page Content
  pageContent.setAttribute('id', 'page-content-menu');

  //Title
  var titleMenu = document.createElement('h1');
  titleMenu.setAttribute('id', 'title-menu');
  titleMenu.textContent = 'Menu';
  pageContent.appendChild(titleMenu);

  //gallery

  var gallery = document.createElement('div');
  gallery.setAttribute('id', 'gallery');
  pageContent.appendChild(gallery);

  //images of gallery

  var fig1 = document.createElement('figure');
  var img1 = document.createElement('img');
  var cap1 = document.createElement('caption');
  fig1.setAttribute('id', 'fig1');
  img1.setAttribute('id', 'img1');
  cap1.textContent = 'Burgers';
  gallery.appendChild(fig1);
  fig1.appendChild(img1);
  fig1.appendChild(cap1);
  var fig2 = document.createElement('figure');
  var img2 = document.createElement('img');
  var cap2 = document.createElement('caption');
  fig2.setAttribute('id', 'fig2');
  img2.setAttribute('id', 'img2');
  cap2.textContent = 'Pizzas';
  gallery.appendChild(fig2);
  fig2.appendChild(img2);
  fig2.appendChild(cap2);
  var fig3 = document.createElement('figure');
  var img3 = document.createElement('img');
  var cap3 = document.createElement('caption');
  fig3.setAttribute('id', 'fig3');
  img3.setAttribute('id', 'img3');
  cap3.textContent = 'Tacos';
  gallery.appendChild(fig3);
  fig3.appendChild(img3);
  fig3.appendChild(cap3);
  var fig4 = document.createElement('figure');
  var img4 = document.createElement('img');
  var cap4 = document.createElement('caption');
  fig4.setAttribute('id', 'fig4');
  img4.setAttribute('id', 'img4');
  cap4.textContent = 'Pastas';
  gallery.appendChild(fig4);
  fig4.appendChild(img4);
  fig4.appendChild(cap4);
  content.appendChild(pageContent);
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nav)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function nav() {
  var content = document.getElementById('content');
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  var div3 = document.createElement('div');
  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');
  div1.textContent = 'Home';
  div2.textContent = 'Menu';
  div3.textContent = 'Contact';
  div1.addEventListener('click', function () {
    clear();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  div2.addEventListener('click', function () {
    clear();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  div3.addEventListener('click', function () {
    clear();
    (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  //header
  var header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.appendChild(div1);
  header.appendChild(div2);
  header.appendChild(div3);
  content.appendChild(header);
}
function clear() {
  var content = document.getElementById('content');
  var pageContent = document.querySelector('.page-content');
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/img-bg.jpg */ "./src/assets/img-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/burger.jpg */ "./src/assets/burger.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/pizza.jpg */ "./src/assets/pizza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/tacos.jpg */ "./src/assets/tacos.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/pasta.jpg */ "./src/assets/pasta.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
}

#content{
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
}

#header{
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #151723;
}

.tab{
    padding: 10px;
    margin: 10px;
    color: #fff;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 10px;
}

.tab:hover{
    cursor: pointer;
    transition: 0.5s;
    background-color: orange;
}

/*styles of main page*/
#page-content-main{
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 87vh;
    justify-content: center;
    background: linear-gradient(
        0deg,
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
    ),url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

#title-main{
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: bold;
    color: rgb(244, 210, 72);
}

#parrot-main{
    font-size: 20px;
    color: #fff;
}

/* Menu page */

#page-content-menu{
    display: flex;
    flex-direction: column;
}

#title-menu{
    text-align: center;
    margin-bottom: 10px;
    padding: 10px;
}

#gallery{
    display: flex;
    height: 100%;
}

#fig1, #fig2, #fig3, #fig4{
    margin: 10px;
    padding: 10px;
    flex: 1;
    text-align: center;
}

#img1{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: 5px 5px 10px #616161;
}

#img1:hover{
    transition: 0.5s;
    transform: scale(1.1);
}

#img2{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: 5px 5px 10px #616161;
}

#img2:hover{
    transition: 0.5s;
    transform: scale(1.1);
}

#img3{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: 5px 5px 10px #616161;
}

#img3:hover{
    transition: 0.5s;
    transform: scale(1.1);
}

#img4{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: 5px 5px 10px #616161;
}

#img4:hover{
    transition: 0.5s;
    transform: scale(1.1);
}

caption{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 10px;
}

/*Contact*/

#page-content-contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title-contact{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.contact-form{
    display: flex;
    width: 350px;
    flex: 1;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #616161;
}

#divInput1, #divInput2, #divInput3{
    display: flex;
    flex-direction: column;
}

label{
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
}

input{
    margin-bottom: 10px;
    padding: 10px;
}

#submitContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

button{
    padding: 10px;
    width: 140px;
    color: #fff;
    font-size: 20px;
    background-color: rgb(0, 162, 0);
    border: none;
}

/*Responsive*/

@media only screen and (max-width: 400px) {
    #gallery{
        display: flex;
        flex-direction: column;
    }
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
    #gallery {
        display: flex;
        flex-direction: column;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB;;;;6CAIwB;IACxB,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,yDAAwC;IACxC,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,yDAAuC;IACvC,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,yDAAuC;IACvC,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,yDAAuC;IACvC,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,aAAa;AACjB;;AAEA,UAAU;;AAEV;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,OAAO;IACP,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gCAAgC;IAChC,YAAY;AAChB;;AAEA,aAAa;;AAEb;IACI;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n}\r\n\r\n#content{\r\n    font-family: 'Open Sans', sans-serif;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#header{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    background-color: #151723;\r\n}\r\n\r\n.tab{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    color: #fff;\r\n    border: 2px solid rgb(209, 209, 209);\r\n    border-radius: 10px;\r\n}\r\n\r\n.tab:hover{\r\n    cursor: pointer;\r\n    transition: 0.5s;\r\n    background-color: orange;\r\n}\r\n\r\n/*styles of main page*/\r\n#page-content-main{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    height: 87vh;\r\n    justify-content: center;\r\n    background: linear-gradient(\r\n        0deg,\r\n        rgba(0,0,0,0.5),\r\n        rgba(0,0,0,0.5)\r\n    ),url(assets/img-bg.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n#title-main{\r\n    font-size: 40px;\r\n    margin-bottom: 20px;\r\n    font-weight: bold;\r\n    color: rgb(244, 210, 72);\r\n}\r\n\r\n#parrot-main{\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n/* Menu page */\r\n\r\n#page-content-menu{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#title-menu{\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#gallery{\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n#fig1, #fig2, #fig3, #fig4{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    flex: 1;\r\n    text-align: center;\r\n}\r\n\r\n#img1{\r\n    background-image: url(assets/burger.jpg);\r\n    width: 100%;\r\n    height: 200px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    box-shadow: 5px 5px 10px #616161;\r\n}\r\n\r\n#img1:hover{\r\n    transition: 0.5s;\r\n    transform: scale(1.1);\r\n}\r\n\r\n#img2{\r\n    background-image: url(assets/pizza.jpg);\r\n    width: 100%;\r\n    height: 200px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    box-shadow: 5px 5px 10px #616161;\r\n}\r\n\r\n#img2:hover{\r\n    transition: 0.5s;\r\n    transform: scale(1.1);\r\n}\r\n\r\n#img3{\r\n    background-image: url(assets/tacos.jpg);\r\n    width: 100%;\r\n    height: 200px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    box-shadow: 5px 5px 10px #616161;\r\n}\r\n\r\n#img3:hover{\r\n    transition: 0.5s;\r\n    transform: scale(1.1);\r\n}\r\n\r\n#img4{\r\n    background-image: url(assets/pasta.jpg);\r\n    width: 100%;\r\n    height: 200px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    box-shadow: 5px 5px 10px #616161;\r\n}\r\n\r\n#img4:hover{\r\n    transition: 0.5s;\r\n    transform: scale(1.1);\r\n}\r\n\r\ncaption{\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n/*Contact*/\r\n\r\n#page-content-contact{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#title-contact{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-form{\r\n    display: flex;\r\n    width: 350px;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 10px #616161;\r\n}\r\n\r\n#divInput1, #divInput2, #divInput3{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nlabel{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\ninput{\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#submitContainer{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 10px;\r\n}\r\n\r\nbutton{\r\n    padding: 10px;\r\n    width: 140px;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    background-color: rgb(0, 162, 0);\r\n    border: none;\r\n}\r\n\r\n/*Responsive*/\r\n\r\n@media only screen and (max-width: 400px) {\r\n    #gallery{\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 401px) and (max-width: 960px) {\r\n    #gallery {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "burger.jpg";

/***/ }),

/***/ "./src/assets/img-bg.jpg":
/*!*******************************!*\
  !*** ./src/assets/img-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img-bg.jpg";

/***/ }),

/***/ "./src/assets/pasta.jpg":
/*!******************************!*\
  !*** ./src/assets/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pasta.jpg";

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza.jpg";

/***/ }),

/***/ "./src/assets/tacos.jpg":
/*!******************************!*\
  !*** ./src/assets/tacos.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tacos.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



function initialLoad() {
  (0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
initialLoad();
})();

/******/ })()
;
//# sourceMappingURL=bundle7d424db18fdb5b643f54.js.map