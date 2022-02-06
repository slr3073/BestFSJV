(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selectionner-serie-selectionner-serie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-serie/selectionner-serie.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-serie/selectionner-serie.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ajouter une Série</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar placeholder=\"Rechercher une série ...\" [(ngModel)]=\"searchInput\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col>\n        <ion-list >\n          <ion-item *ngFor=\"let f of series | filter:searchInput\" (click)=\"showInfo(f.id)\">\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"f.imageURL\"></ion-img>\n              </ion-avatar>\n            <ion-label>{{f.nom}}</ion-label>\n            <ion-icon name=\"add-circle-outline\" slot='end' color=\"success\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" expand=\"block\"  color=\"primary\" (click)=\"goToAjouter()\">Votre série n'est pas disponible ?</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/selection/selectionner-serie/selectionner-serie-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/selectionner-serie-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectionnerSeriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerSeriePageRoutingModule", function() { return SelectionnerSeriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selectionner_serie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectionner-serie.page */ "./src/app/selection/selectionner-serie/selectionner-serie.page.ts");




var routes = [
    {
        path: '',
        component: _selectionner_serie_page__WEBPACK_IMPORTED_MODULE_3__["SelectionnerSeriePage"]
    },
    {
        path: 'ajouter-serie',
        loadChildren: function () { return Promise.all(/*! import() | ajouter-serie-ajouter-serie-module */[__webpack_require__.e("common"), __webpack_require__.e("ajouter-serie-ajouter-serie-module")]).then(__webpack_require__.bind(null, /*! ./ajouter-serie/ajouter-serie.module */ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.module.ts")).then(function (m) { return m.AjouterSeriePageModule; }); }
    }
];
var SelectionnerSeriePageRoutingModule = /** @class */ (function () {
    function SelectionnerSeriePageRoutingModule() {
    }
    SelectionnerSeriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SelectionnerSeriePageRoutingModule);
    return SelectionnerSeriePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-serie/selectionner-serie.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/selectionner-serie.module.ts ***!
  \***************************************************************************/
/*! exports provided: SelectionnerSeriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerSeriePageModule", function() { return SelectionnerSeriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectionner_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectionner-serie-routing.module */ "./src/app/selection/selectionner-serie/selectionner-serie-routing.module.ts");
/* harmony import */ var _selectionner_serie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectionner-serie.page */ "./src/app/selection/selectionner-serie/selectionner-serie.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");








var SelectionnerSeriePageModule = /** @class */ (function () {
    function SelectionnerSeriePageModule() {
    }
    SelectionnerSeriePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selectionner_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionnerSeriePageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
            declarations: [_selectionner_serie_page__WEBPACK_IMPORTED_MODULE_6__["SelectionnerSeriePage"]]
        })
    ], SelectionnerSeriePageModule);
    return SelectionnerSeriePageModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-serie/selectionner-serie.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/selectionner-serie.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItc2VyaWUvc2VsZWN0aW9ubmVyLXNlcmllLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selection/selectionner-serie/selectionner-serie.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/selectionner-serie.page.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionnerSeriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerSeriePage", function() { return SelectionnerSeriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-serie.service */ "./src/app/services/data-serie.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SelectionnerSeriePage = /** @class */ (function () {
    function SelectionnerSeriePage(seriesService, NavCtrl) {
        this.seriesService = seriesService;
        this.NavCtrl = NavCtrl;
        this.series = seriesService.serieNonVu.slice();
    }
    SelectionnerSeriePage.prototype.ngOnInit = function () {
        var _this = this;
        this.serieSub = this.seriesService.serieNonVuChanged.subscribe(function (serie) {
            _this.series = serie;
        });
    };
    SelectionnerSeriePage.prototype.ngOnDestroy = function () {
        this.serieSub.unsubscribe();
    };
    SelectionnerSeriePage.prototype.goToAjouter = function () {
        this.NavCtrl.navigateForward(['/selectionner-serie/ajouter-serie']);
    };
    SelectionnerSeriePage.prototype.goBack = function () {
        this.NavCtrl.navigateBack(['/medias/series']);
    };
    SelectionnerSeriePage.prototype.isFinished = function (s) {
        return !(s.dateF === undefined);
    };
    SelectionnerSeriePage.prototype.showInfo = function (id) {
        this.NavCtrl.navigateForward(['/info-add-serie/' + id]);
    };
    SelectionnerSeriePage.ctorParameters = function () { return [
        { type: src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__["DataSerieService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SelectionnerSeriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selectionner-serie',
            template: __webpack_require__(/*! raw-loader!./selectionner-serie.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-serie/selectionner-serie.page.html"),
            styles: [__webpack_require__(/*! ./selectionner-serie.page.scss */ "./src/app/selection/selectionner-serie/selectionner-serie.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__["DataSerieService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], SelectionnerSeriePage);
    return SelectionnerSeriePage;
}());



/***/ })

}]);
//# sourceMappingURL=selection-selectionner-serie-selectionner-serie-module-es5.js.map