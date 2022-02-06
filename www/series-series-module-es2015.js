(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["series-series-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medias/series/series.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medias/series/series.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mes Séries</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goToAjouter()\">\n        <ion-icon name=\"add\" slot=\"icon-only\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col >\n        <ion-searchbar placeholder=\"Rechercher\" [(ngModel)]=\"searchInput\" animated></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let s of mesSeries | filter:searchInput\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\" >\n        <ion-card (click)=\"showInfo(s.id)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon class=\"ion-float-right\" name=\"information-circle\" size=\"large\"></ion-icon>\n              <ion-text *ngIf=\"isFinished(s)\">{{s.dateS}} - {{s.dateF}}</ion-text>\n              <ion-text *ngIf=\"!isFinished(s)\">Depuis {{s.dateS}}</ion-text>\n            </ion-card-subtitle>\n            <ion-card-title>\n              {{s.nom}} <br/>\n              <ion-icon name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"s.note > 1\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"s.note > 2\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"s.note > 3\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"1 == s.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"2 > s.note || 2 == s.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"3 > s.note || 3 == s.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n            </ion-card-title>\n          </ion-card-header>\n          <img [src]=\"s.imageURL\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recommandations/series/series.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recommandations/series/series.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Vous Aimerez Surement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let f of seriesRec\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\" >\n        <ion-card (click)=\"supprimer(f)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon class=\"ion-float-right\" name=\"close\" size=\"large\" color=\"danger\"></ion-icon>\n               <div padding-bottom>\n                {{f.dateS}}\n                <ion-text *ngIf=\"isFinished(f)\"> - {{f.dateF}}</ion-text>\n                <ion-text *ngIf=\"!isFinished(f)\"> - En cours</ion-text>\n                | {{f.genre1}} ET {{f.genre2}}\n               </div>\n               <div *ngIf=\"f.nbEpisode > 1\">\n                <ion-label>\n                   {{f.nbEpisode}} Episodes\n                </ion-label>\n              </div>\n              <div *ngIf=\"!(f.nbEpisode > 1)\">\n                <ion-label>\n                   {{f.nbEpisode}} Episode\n                </ion-label>\n              </div>\n              <div *ngIf=\"f.nbSaison > 1\">\n                <ion-label>\n                   {{f.nbSaison}} Saisons\n                </ion-label>\n              </div>\n              <div *ngIf=\"!(f.nbSaison > 1)\">\n                <ion-label>\n                   {{f.nbSaison}} Saison\n                </ion-label>\n              </div>\n            </ion-card-subtitle>\n            <ion-card-title>{{f.nom}}</ion-card-title>\n          </ion-card-header>\n          <img [src]=\"f.imageURL\"/>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medias/series/series-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/medias/series/series-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SeriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageRoutingModule", function() { return SeriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series.page */ "./src/app/medias/series/series.page.ts");




const routes = [
    {
        path: '',
        component: _series_page__WEBPACK_IMPORTED_MODULE_3__["SeriesPage"]
    },
    {
        path: 'ajouter',
        redirectTo: '/ajouter-serie',
        pathMatch: 'full'
    }
];
let SeriesPageRoutingModule = class SeriesPageRoutingModule {
};
SeriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SeriesPageRoutingModule);



/***/ }),

/***/ "./src/app/medias/series/series.module.ts":
/*!************************************************!*\
  !*** ./src/app/medias/series/series.module.ts ***!
  \************************************************/
/*! exports provided: SeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _series_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-routing.module */ "./src/app/medias/series/series-routing.module.ts");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.page */ "./src/app/medias/series/series.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








let SeriesPageModule = class SeriesPageModule {
};
SeriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]]
    })
], SeriesPageModule);



/***/ }),

/***/ "./src/app/medias/series/series.page.scss":
/*!************************************************!*\
  !*** ./src/app/medias/series/series.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhcy9zZXJpZXMvc2VyaWVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medias/series/series.page.ts":
/*!**********************************************!*\
  !*** ./src/app/medias/series/series.page.ts ***!
  \**********************************************/
/*! exports provided: SeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPage", function() { return SeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-serie.service */ "./src/app/services/data-serie.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SeriesPage = class SeriesPage {
    constructor(navCtrl, serieService) {
        this.navCtrl = navCtrl;
        this.serieService = serieService;
        this.searchInput = null;
        this.mesSeries = [...serieService.mySerie];
    }
    isFinished(s) {
        return !(s.dateF === undefined);
    }
    ngOnInit() {
        this.serieSub = this.serieService.mySerieChanged.subscribe((serie) => {
            this.mesSeries = serie;
        });
    }
    ngOnDestroy() {
        this.serieSub.unsubscribe();
    }
    goToAjouter() {
        this.navCtrl.navigateForward(['/selectionner-serie']);
    }
    showInfo(id) {
        this.navCtrl.navigateForward(['/info-serie/' + id]);
    }
};
SeriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__["DataSerieService"] }
];
SeriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series',
        template: __webpack_require__(/*! raw-loader!./series.page.html */ "./node_modules/raw-loader/index.js!./src/app/medias/series/series.page.html"),
        styles: [__webpack_require__(/*! ./series.page.scss */ "./src/app/medias/series/series.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_2__["DataSerieService"]])
], SeriesPage);



/***/ }),

/***/ "./src/app/recommandations/series/series-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/recommandations/series/series-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SeriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageRoutingModule", function() { return SeriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series.page */ "./src/app/recommandations/series/series.page.ts");




const routes = [
    {
        path: '',
        component: _series_page__WEBPACK_IMPORTED_MODULE_3__["SeriesPage"]
    }
];
let SeriesPageRoutingModule = class SeriesPageRoutingModule {
};
SeriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeriesPageRoutingModule);



/***/ }),

/***/ "./src/app/recommandations/series/series.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/recommandations/series/series.module.ts ***!
  \*********************************************************/
/*! exports provided: SeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _series_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-routing.module */ "./src/app/recommandations/series/series-routing.module.ts");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.page */ "./src/app/recommandations/series/series.page.ts");







let SeriesPageModule = class SeriesPageModule {
};
SeriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesPageRoutingModule"]
        ],
        declarations: [_series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]]
    })
], SeriesPageModule);



/***/ }),

/***/ "./src/app/recommandations/series/series.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/recommandations/series/series.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWFuZGF0aW9ucy9zZXJpZXMvc2VyaWVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recommandations/series/series.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/recommandations/series/series.page.ts ***!
  \*******************************************************/
/*! exports provided: SeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPage", function() { return SeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-serie.service */ "./src/app/services/data-serie.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SeriesPage = class SeriesPage {
    constructor(router, serieService, alertCtrl) {
        this.router = router;
        this.serieService = serieService;
        this.alertCtrl = alertCtrl;
        this.seriesRec = [...serieService.recSerie];
    }
    ngOnInit() {
        this.seriesRec = this.shuffle(this.seriesRec);
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    isFinished(s) {
        return !(s.dateF === undefined);
    }
    supprimer(s) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Suprimer une Série',
                message: 'Voulez vous vraiment supprimer cette série de vos recommandations ?',
                buttons: [
                    'Annuler',
                    {
                        text: 'Valider',
                        role: 'valider',
                        handler: () => {
                            var i = this.seriesRec.indexOf(s);
                            this.seriesRec.splice(i, 1);
                            this.serieService.delInRecSerie(s);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SeriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__["DataSerieService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SeriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series',
        template: __webpack_require__(/*! raw-loader!./series.page.html */ "./node_modules/raw-loader/index.js!./src/app/recommandations/series/series.page.html"),
        styles: [__webpack_require__(/*! ./series.page.scss */ "./src/app/recommandations/series/series.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__["DataSerieService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], SeriesPage);



/***/ })

}]);
//# sourceMappingURL=series-series-module-es2015.js.map