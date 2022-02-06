(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medias-medias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medias/medias.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medias/medias.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n  <ion-tabs> \n    <ion-tab-bar slot='bottom' color=\"primary\">\n        <ion-tab-button tab='films'>\n          <ion-icon name=\"videocam\" size=\"large\"></ion-icon>\n          <ion-label>FILMS</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab='series'>\n         <ion-icon name=\"play-circle\" size=\"large\"></ion-icon>\n         <ion-label>SERIES</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab='jeux-video'>\n          <ion-icon name=\"logo-game-controller-b\" size=\"large\"></ion-icon>\n          <ion-label>JEUX VIDEO</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medias/medias-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/medias/medias-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MediasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasPageRoutingModule", function() { return MediasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _medias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medias.page */ "./src/app/medias/medias.page.ts");




const routes = [
    {
        path: '',
        component: _medias_page__WEBPACK_IMPORTED_MODULE_3__["MediasPage"],
        children: [
            {
                path: 'films',
                loadChildren: () => Promise.all(/*! import() | films-films-module */[__webpack_require__.e("common"), __webpack_require__.e("films-films-module")]).then(__webpack_require__.bind(null, /*! ./films/films.module */ "./src/app/medias/films/films.module.ts")).then((m) => m.FilmsPageModule)
            },
            {
                path: 'series',
                loadChildren: () => Promise.all(/*! import() | series-series-module */[__webpack_require__.e("common"), __webpack_require__.e("series-series-module")]).then(__webpack_require__.bind(null, /*! ./series/series.module */ "./src/app/medias/series/series.module.ts")).then((m) => m.SeriesPageModule)
            },
            {
                path: 'jeux-video',
                loadChildren: () => Promise.all(/*! import() | jeux-video-jeux-video-module */[__webpack_require__.e("common"), __webpack_require__.e("jeux-video-jeux-video-module")]).then(__webpack_require__.bind(null, /*! ./jeux-video/jeux-video.module */ "./src/app/medias/jeux-video/jeux-video.module.ts")).then((m) => m.JeuxVideoPageModule)
            },
            {
                path: '',
                redirectTo: '/medias/films',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/medias/films',
        pathMatch: 'full'
    }
];
let MediasPageRoutingModule = class MediasPageRoutingModule {
};
MediasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MediasPageRoutingModule);



/***/ }),

/***/ "./src/app/medias/medias.module.ts":
/*!*****************************************!*\
  !*** ./src/app/medias/medias.module.ts ***!
  \*****************************************/
/*! exports provided: MediasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasPageModule", function() { return MediasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medias-routing.module */ "./src/app/medias/medias-routing.module.ts");
/* harmony import */ var _medias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medias.page */ "./src/app/medias/medias.page.ts");







let MediasPageModule = class MediasPageModule {
};
MediasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medias_routing_module__WEBPACK_IMPORTED_MODULE_5__["MediasPageRoutingModule"]
        ],
        declarations: [_medias_page__WEBPACK_IMPORTED_MODULE_6__["MediasPage"]]
    })
], MediasPageModule);



/***/ }),

/***/ "./src/app/medias/medias.page.scss":
/*!*****************************************!*\
  !*** ./src/app/medias/medias.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhcy9tZWRpYXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/medias/medias.page.ts":
/*!***************************************!*\
  !*** ./src/app/medias/medias.page.ts ***!
  \***************************************/
/*! exports provided: MediasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasPage", function() { return MediasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MediasPage = class MediasPage {
    constructor() { }
    ngOnInit() { }
};
MediasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medias',
        template: __webpack_require__(/*! raw-loader!./medias.page.html */ "./node_modules/raw-loader/index.js!./src/app/medias/medias.page.html"),
        styles: [__webpack_require__(/*! ./medias.page.scss */ "./src/app/medias/medias.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MediasPage);



/***/ })

}]);
//# sourceMappingURL=medias-medias-module-es2015.js.map