(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selectionner-film-selectionner-film-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-film/selectionner-film.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-film/selectionner-film.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot='start'>\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' name=\"arrow-back\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ajouter un Film</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar placeholder=\"Rechercher un film ...\" [(ngModel)]=\"searchInput\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col>\n        <ion-list >\n          <ion-item *ngFor=\"let f of films | filter:searchInput\" (click)=\"showInfo(f.id)\">\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"f.imageURL\"></ion-img>\n              </ion-avatar>\n            <ion-label>{{f.nom}}</ion-label>\n            <ion-icon name=\"add-circle-outline\" slot='end' color=\"success\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" expand=\"block\"  color=\"primary\" (click)=\"goToAjouter()\">Votre film n'est pas disponible ?</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selection/selectionner-film/selectionner-film-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/selectionner-film-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectionnerFilmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerFilmPageRoutingModule", function() { return SelectionnerFilmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selectionner_film_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectionner-film.page */ "./src/app/selection/selectionner-film/selectionner-film.page.ts");




var routes = [
    {
        path: '',
        component: _selectionner_film_page__WEBPACK_IMPORTED_MODULE_3__["SelectionnerFilmPage"]
    },
    {
        path: 'ajouter-film',
        loadChildren: function () { return Promise.all(/*! import() | ajouter-film-ajouter-film-module */[__webpack_require__.e("common"), __webpack_require__.e("ajouter-film-ajouter-film-module")]).then(__webpack_require__.bind(null, /*! ./ajouter-film/ajouter-film.module */ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.module.ts")).then(function (m) { return m.AjouterFilmPageModule; }); }
    }
];
var SelectionnerFilmPageRoutingModule = /** @class */ (function () {
    function SelectionnerFilmPageRoutingModule() {
    }
    SelectionnerFilmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SelectionnerFilmPageRoutingModule);
    return SelectionnerFilmPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-film/selectionner-film.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/selectionner-film.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionnerFilmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerFilmPageModule", function() { return SelectionnerFilmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectionner_film_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectionner-film-routing.module */ "./src/app/selection/selectionner-film/selectionner-film-routing.module.ts");
/* harmony import */ var _selectionner_film_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectionner-film.page */ "./src/app/selection/selectionner-film/selectionner-film.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");








var SelectionnerFilmPageModule = /** @class */ (function () {
    function SelectionnerFilmPageModule() {
    }
    SelectionnerFilmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selectionner_film_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionnerFilmPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
            declarations: [_selectionner_film_page__WEBPACK_IMPORTED_MODULE_6__["SelectionnerFilmPage"]]
        })
    ], SelectionnerFilmPageModule);
    return SelectionnerFilmPageModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-film/selectionner-film.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/selectionner-film.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItZmlsbS9zZWxlY3Rpb25uZXItZmlsbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/selection/selectionner-film/selectionner-film.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/selection/selectionner-film/selectionner-film.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectionnerFilmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerFilmPage", function() { return SelectionnerFilmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-film.service */ "./src/app/services/data-film.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SelectionnerFilmPage = /** @class */ (function () {
    function SelectionnerFilmPage(serviceFilm, navCtrl) {
        this.serviceFilm = serviceFilm;
        this.navCtrl = navCtrl;
        this.films = serviceFilm.filmNonVu.slice();
    }
    SelectionnerFilmPage.prototype.ngOnInit = function () {
        var _this = this;
        this.filmSub = this.serviceFilm.filmNonVuChanged.subscribe(function (film) {
            _this.films = film;
        });
    };
    SelectionnerFilmPage.prototype.ngOnDestroy = function () {
        this.filmSub.unsubscribe();
    };
    SelectionnerFilmPage.prototype.goToAjouter = function () {
        this.navCtrl.navigateForward(['/selectionner-film/ajouter-film']);
    };
    SelectionnerFilmPage.prototype.goBack = function () {
        this.navCtrl.navigateBack(['/medias/films']);
    };
    SelectionnerFilmPage.prototype.showInfo = function (id) {
        this.navCtrl.navigateForward(['/info-add-film/' + id]);
    };
    SelectionnerFilmPage.ctorParameters = function () { return [
        { type: src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SelectionnerFilmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selectionner-film',
            template: __webpack_require__(/*! raw-loader!./selectionner-film.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-film/selectionner-film.page.html"),
            styles: [__webpack_require__(/*! ./selectionner-film.page.scss */ "./src/app/selection/selectionner-film/selectionner-film.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], SelectionnerFilmPage);
    return SelectionnerFilmPage;
}());



/***/ })

}]);
//# sourceMappingURL=selection-selectionner-film-selectionner-film-module-es5.js.map