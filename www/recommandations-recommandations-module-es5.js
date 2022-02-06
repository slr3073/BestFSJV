(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommandations-recommandations-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recommandations/recommandations.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recommandations/recommandations.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n  <ion-tabs> \n    <ion-tab-bar slot='bottom' color=\"primary\">\n        <ion-tab-button tab='films'>\n          <ion-icon name=\"videocam\" size=\"large\"></ion-icon>\n          <ion-label>FILMS</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab='series'>\n         <ion-icon name=\"play-circle\" size=\"large\"></ion-icon>\n         <ion-label>SERIES</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab='jeux-video' >\n          <ion-icon name=\"logo-game-controller-b\" size=\"large\"></ion-icon>\n          <ion-label>JEUX VIDEO</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recommandations/recommandations-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recommandations/recommandations-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecommandationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommandationsPageRoutingModule", function() { return RecommandationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recommandations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommandations.page */ "./src/app/recommandations/recommandations.page.ts");




var routes = [
    {
        path: '',
        component: _recommandations_page__WEBPACK_IMPORTED_MODULE_3__["RecommandationsPage"],
        children: [
            {
                path: 'films',
                loadChildren: function () { return Promise.all(/*! import() | films-films-module */[__webpack_require__.e("common"), __webpack_require__.e("films-films-module")]).then(__webpack_require__.bind(null, /*! ./films/films.module */ "./src/app/recommandations/films/films.module.ts")).then(function (m) { return m.FilmsPageModule; }); }
            },
            {
                path: 'series',
                loadChildren: function () { return Promise.all(/*! import() | series-series-module */[__webpack_require__.e("common"), __webpack_require__.e("series-series-module")]).then(__webpack_require__.bind(null, /*! ./series/series.module */ "./src/app/recommandations/series/series.module.ts")).then(function (m) { return m.SeriesPageModule; }); }
            },
            {
                path: 'jeux-video',
                loadChildren: function () { return Promise.all(/*! import() | jeux-video-jeux-video-module */[__webpack_require__.e("common"), __webpack_require__.e("jeux-video-jeux-video-module")]).then(__webpack_require__.bind(null, /*! ./jeux-video/jeux-video.module */ "./src/app/recommandations/jeux-video/jeux-video.module.ts")).then(function (m) { return m.JeuxVideoPageModule; }); }
            },
            {
                path: '',
                redirectTo: '/recommandations/films',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/recommandations/films',
        pathMatch: 'full'
    }
];
var RecommandationsPageRoutingModule = /** @class */ (function () {
    function RecommandationsPageRoutingModule() {
    }
    RecommandationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RecommandationsPageRoutingModule);
    return RecommandationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recommandations/recommandations.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/recommandations/recommandations.module.ts ***!
  \***********************************************************/
/*! exports provided: RecommandationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommandationsPageModule", function() { return RecommandationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recommandations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommandations-routing.module */ "./src/app/recommandations/recommandations-routing.module.ts");
/* harmony import */ var _recommandations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommandations.page */ "./src/app/recommandations/recommandations.page.ts");







var RecommandationsPageModule = /** @class */ (function () {
    function RecommandationsPageModule() {
    }
    RecommandationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recommandations_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecommandationsPageRoutingModule"]
            ],
            declarations: [_recommandations_page__WEBPACK_IMPORTED_MODULE_6__["RecommandationsPage"]]
        })
    ], RecommandationsPageModule);
    return RecommandationsPageModule;
}());



/***/ }),

/***/ "./src/app/recommandations/recommandations.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/recommandations/recommandations.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWFuZGF0aW9ucy9yZWNvbW1hbmRhdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recommandations/recommandations.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/recommandations/recommandations.page.ts ***!
  \*********************************************************/
/*! exports provided: RecommandationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommandationsPage", function() { return RecommandationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecommandationsPage = /** @class */ (function () {
    function RecommandationsPage() {
    }
    RecommandationsPage.prototype.ngOnInit = function () {
    };
    RecommandationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommandations',
            template: __webpack_require__(/*! raw-loader!./recommandations.page.html */ "./node_modules/raw-loader/index.js!./src/app/recommandations/recommandations.page.html"),
            styles: [__webpack_require__(/*! ./recommandations.page.scss */ "./src/app/recommandations/recommandations.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommandationsPage);
    return RecommandationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recommandations-recommandations-module-es5.js.map