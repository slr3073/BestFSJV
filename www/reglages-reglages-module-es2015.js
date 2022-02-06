(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reglages-reglages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reglages/reglages.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reglages/reglages.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Réglages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <ion-label>Prochainement ...</ion-label>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reglages/reglages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/reglages/reglages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReglagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglagesPageRoutingModule", function() { return ReglagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reglages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reglages.page */ "./src/app/reglages/reglages.page.ts");




const routes = [
    {
        path: '',
        component: _reglages_page__WEBPACK_IMPORTED_MODULE_3__["ReglagesPage"]
    }
];
let ReglagesPageRoutingModule = class ReglagesPageRoutingModule {
};
ReglagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReglagesPageRoutingModule);



/***/ }),

/***/ "./src/app/reglages/reglages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/reglages/reglages.module.ts ***!
  \*********************************************/
/*! exports provided: ReglagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglagesPageModule", function() { return ReglagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reglages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reglages-routing.module */ "./src/app/reglages/reglages-routing.module.ts");
/* harmony import */ var _reglages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reglages.page */ "./src/app/reglages/reglages.page.ts");







let ReglagesPageModule = class ReglagesPageModule {
};
ReglagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reglages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReglagesPageRoutingModule"]
        ],
        declarations: [_reglages_page__WEBPACK_IMPORTED_MODULE_6__["ReglagesPage"]]
    })
], ReglagesPageModule);



/***/ }),

/***/ "./src/app/reglages/reglages.page.scss":
/*!*********************************************!*\
  !*** ./src/app/reglages/reglages.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2xhZ2VzL3JlZ2xhZ2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reglages/reglages.page.ts":
/*!*******************************************!*\
  !*** ./src/app/reglages/reglages.page.ts ***!
  \*******************************************/
/*! exports provided: ReglagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglagesPage", function() { return ReglagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReglagesPage = class ReglagesPage {
    constructor() { }
    ngOnInit() {
    }
};
ReglagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reglages',
        template: __webpack_require__(/*! raw-loader!./reglages.page.html */ "./node_modules/raw-loader/index.js!./src/app/reglages/reglages.page.html"),
        styles: [__webpack_require__(/*! ./reglages.page.scss */ "./src/app/reglages/reglages.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReglagesPage);



/***/ })

}]);
//# sourceMappingURL=reglages-reglages-module-es2015.js.map