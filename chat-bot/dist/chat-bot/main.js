(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* div {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 3em;\n} */\n.speech-bubble[_ngcontent-c0][_ngcontent-c0][_ngcontent-c0] {\n  position: relative;\n  display: grid;\n  left: -20%;\n  background: #00bb6f;\n  border-radius: 0.4em;\n  margin: 1em;\n  font-size: 2em;\n  max-width: 9em;\n  padding: 0.3em;\n}\n.speech-bubble-response[_ngcontent-c0][_ngcontent-c0][_ngcontent-c0] {\n  position: relative;\n  display: grid;\n  background: #00aabb;\n  border-radius: 0.4em;\n  right: -20%;\n\n  background: #00aabb;\n  border-radius: 0.4em;\n  margin: 1em;\n  font-size: 2em;\n  max-width: 9em;\n  padding: 0.3em;\n  /* margin-left: 80%; */\n}\n.speech-bubble-response[_ngcontent-c0][_ngcontent-c0]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 1em solid transparent;\n  border-left-color: #00aabb;\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-right: -20px;\n}\n.speech-bubble[_ngcontent-c0][_ngcontent-c0]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 0.4em solid transparent;\n  border-right-color: #00bb6f;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: 0em;\n  margin-left: -0.5em;\n}\n.bubble-text {\n  font-size: 0.5em;\n}\n.msg {\n  padding-bottom: 3em;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  font-size: 1em;\n  text-align: center;\n  display: grid;\n  /* background: url(\"https://i.pinimg.com/originals/a4/b8/6a/a4b86ac42c3bf5c017d79be64377fdf1.png\"); */\n}\n.wrapper {\n  margin-top: 12em;\n}\n.nav {\n  padding: 0.1em;\n  text-align: center;\n  margin-left: 3em;\n  margin-right: 3em;\n  bottom: 8em;\n  position: fixed;\n}\n.selection {\n  padding: 2em;\n  background: #0e0e0e;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0.5em, 1fr));\n  border-radius: 2em;\n  justify-items: center;\n  grid-gap: 0.5em;\n  width: -webkit-fill-available;\n  margin-left: 3em;\n  margin-right: 3em;\n  bottom: 2em;\n  position: fixed;\n}\n.btn {\n  border-radius: 4em;\n  width: 50%;\n  background: #d1e3afb8;\n  height: 100%;\n}\n/* h1 {\n  display: none;\n  font-size: none;\n  margin-block-start: none;\n  margin-block-end: none;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-weight: none;\n} */\n.chat {\n  display: grid;\n  justify-content: center;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n.whatever {\n  width: 30%;\n}\n.head {\n  color: whitesmoke;\n  text-align: center;\n  background: #060606;\n}\n/* iphone 6,7,8 media querry */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\n  .selection {\n    padding: 1em;\n    background: #0e0e0e;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(0.5em, 1fr));\n    border-radius: 2em;\n    justify-items: center;\n    grid-gap: 0.5em;\n    width: -webkit-fill-available;\n    margin-left: 3em;\n    margin-right: 3em;\n    bottom: 2em;\n    position: fixed;\n  }\n  .btn {\n    border-radius: 22em;\n    width: 99%;\n    background: #d1e3afb8;\n    font-size: xx-small;\n    height: 100%;\n  }\n  .nav {\n    padding: 0.1em;\n    text-align: center;\n    margin-left: 3em;\n    margin-right: 3em;\n    bottom: 0em;\n    visibility: hidden;\n    position: fixed;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJO0FBQ0o7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiw0QkFBb0I7RUFBcEIseUJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzR0FBc0c7Q0FDdkc7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLDREQUE0RDtFQUM1RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7QUFDRDs7Ozs7Ozs7SUFRSTtBQUNKO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0NBQ2pDO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0QsK0JBQStCO0FBQy9CO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw0REFBNEQ7SUFDNUQsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7R0FDZDtFQUNEO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGRpdiB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzZW07XG59ICovXG4uc3BlZWNoLWJ1YmJsZVtfbmdjb250ZW50LWMwXVtfbmdjb250ZW50LWMwXVtfbmdjb250ZW50LWMwXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbGVmdDogLTIwJTtcbiAgYmFja2dyb3VuZDogIzAwYmI2ZjtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIG1hcmdpbjogMWVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWF4LXdpZHRoOiA5ZW07XG4gIHBhZGRpbmc6IDAuM2VtO1xufVxuXG4uc3BlZWNoLWJ1YmJsZS1yZXNwb25zZVtfbmdjb250ZW50LWMwXVtfbmdjb250ZW50LWMwXVtfbmdjb250ZW50LWMwXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZDogIzAwYWFiYjtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIHJpZ2h0OiAtMjAlO1xuXG4gIGJhY2tncm91bmQ6ICMwMGFhYmI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICBtYXJnaW46IDFlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1heC13aWR0aDogOWVtO1xuICBwYWRkaW5nOiAwLjNlbTtcbiAgLyogbWFyZ2luLWxlZnQ6IDgwJTsgKi9cbn1cbi5zcGVlY2gtYnViYmxlLXJlc3BvbnNlW19uZ2NvbnRlbnQtYzBdW19uZ2NvbnRlbnQtYzBdOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwYWFiYjtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbn1cblxuLnNwZWVjaC1idWJibGVbX25nY29udGVudC1jMF1bX25nY29udGVudC1jMF06YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMGJiNmY7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG59XG5cbi5idWJibGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi5tc2cge1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYTQvYjgvNmEvYTRiODZhYzQyYzNiZjVjMDE3ZDc5YmU2NDM3N2ZkZjEucG5nXCIpOyAqL1xufVxuLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMmVtO1xufVxuLm5hdiB7XG4gIHBhZGRpbmc6IDAuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzZW07XG4gIG1hcmdpbi1yaWdodDogM2VtO1xuICBib3R0b206IDhlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgcGFkZGluZzogMmVtO1xuICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAuNWVtLCAxZnIpKTtcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1hcmdpbi1sZWZ0OiAzZW07XG4gIG1hcmdpbi1yaWdodDogM2VtO1xuICBib3R0b206IDJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZDFlM2FmYjg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi8qIGgxIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiBub25lO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IG5vbmU7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IG5vbmU7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgZm9udC13ZWlnaHQ6IG5vbmU7XG59ICovXG4uY2hhdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xufVxuLndoYXRldmVyIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5oZWFkIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzA2MDYwNjtcbn1cbi8qIGlwaG9uZSA2LDcsOCBtZWRpYSBxdWVycnkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSB7XG4gIC5zZWxlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMGUwZTBlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgwLjVlbSwgMWZyKSk7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogMC41ZW07XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbiAgICBib3R0b206IDJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgLmJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMjJlbTtcbiAgICB3aWR0aDogOTklO1xuICAgIGJhY2tncm91bmQ6ICNkMWUzYWZiODtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubmF2IHtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbiAgICBib3R0b206IDBlbTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n\n<div class=\"msg\">\n  <div class=\"head\">\n    <h1>{{ title }}!</h1>\n  </div>\n  <div class=\"chat\">\n    <div\n      *ngFor=\"let messagesAndResponse of messagesAndResponses\"\n      class=\"{{ messagesAndResponse.style }}\"\n    >\n      <h2 class=\"bubble-text\">{{ messagesAndResponse.data }}</h2>\n    </div>\n  </div>\n\n  <div class=\"wrapper\">\n    <div class=\"nav\"><h2>Available Options</h2></div>\n    <div class=\"selection\">\n      <button (click)=\"showOptions(btn)\" class=\"btn\" *ngFor=\"let btn of btns\">\n        {{ btn.option }}\n      </button>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = "chat-bot";
        this.messagesAndResponses = [];
        this.btns = [];
        this.getFirstOptions();
        this.ShowFirstOptions();
        // this.getOptions();
        // this.showOptions();
    }
    ;
    AppComponent.prototype.getFirstOptions = function () {
        return this.http.get('http://41.86.98.151:8080/tree?name=test', { observe: 'response' });
    };
    ;
    AppComponent.prototype.getOptions = function (nodeId) {
        return this.http.get('http://41.86.98.151:8080/tree?nodeid=' + nodeId, { observe: 'response' });
    };
    ;
    AppComponent.prototype.ShowFirstOptions = function () {
        var _this = this;
        this.getFirstOptions().subscribe(function (data) {
            _this.btns = data.body.node;
            _this.messagesAndResponses.push({ data: data.body.text, style: "speech-bubble" });
        }, function (err) { return console.error(err); });
        return this.btns;
    };
    AppComponent.prototype.showOptions = function (e) {
        var _this = this;
        this.messagesAndResponses.push({ data: e.option, style: "speech-bubble-response" });
        this.getOptions(e.nodeid).subscribe(function (data) {
            _this.btns = data.body.node;
            _this.messagesAndResponses.push({ data: data.body.text, style: "speech-bubble" });
        }, function (err) { return console.error(err); });
        return this.btns;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/montshepetsa/workspace/angular-chat-bot/Chat-bot/chat-bot/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map