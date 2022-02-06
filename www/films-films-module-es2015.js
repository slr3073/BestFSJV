(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["films-films-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medias/films/films.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medias/films/films.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mes Films</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goToAjouter()\">\n        <ion-icon name=\"add\" slot=\"icon-only\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n        <ion-searchbar placeholder=\"Rechercher\" [(ngModel)]=\"searchInput\" animated></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let f of mesFilm | filter:searchInput\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\"  >\n        <ion-card (click)=\"showInfo(f.id)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              {{f.dateS}}\n              <ion-icon class=\"ion-float-right\" name=\"information-circle\" size=\"large\"></ion-icon>\n            </ion-card-subtitle>\n            <ion-card-title>\n              {{f.nom}} <br/>\n              <ion-icon name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"f.note > 1\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"f.note > 2\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"f.note > 3\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"1 == f.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"2 > f.note || 2 == f.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"3 > f.note || 3 == f.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n            </ion-card-title>\n          </ion-card-header>\n          <img [src]=\"f.imageURL\"/>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recommandations/films/films.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recommandations/films/films.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Vous Aimerez Surement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let f of filmsRec\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\">\n        <ion-card (click)=\"supprimer(f)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon class=\"ion-float-right\" name=\"close\" size=\"large\" color=\"danger\"></ion-icon>\n              {{f.dateS}} | {{f.genre1}} ET {{f.genre2}}\n            </ion-card-subtitle>\n            <ion-card-title>{{f.nom}}</ion-card-title>\n          </ion-card-header>\n          <img [src]=\"f.imageURL\"/>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medias/films/films-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/medias/films/films-routing.module.ts ***!
  \******************************************************/
/*! exports provided: FilmsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageRoutingModule", function() { return FilmsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./films.page */ "./src/app/medias/films/films.page.ts");




const routes = [
    {
        path: '',
        component: _films_page__WEBPACK_IMPORTED_MODULE_3__["FilmsPage"]
    },
    {
        path: 'ajouter',
        redirectTo: '/selectionner-film',
        pathMatch: 'full'
    }
];
let FilmsPageRoutingModule = class FilmsPageRoutingModule {
};
FilmsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FilmsPageRoutingModule);



/***/ }),

/***/ "./src/app/medias/films/films.module.ts":
/*!**********************************************!*\
  !*** ./src/app/medias/films/films.module.ts ***!
  \**********************************************/
/*! exports provided: FilmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageModule", function() { return FilmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _films_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./films-routing.module */ "./src/app/medias/films/films-routing.module.ts");
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films.page */ "./src/app/medias/films/films.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








let FilmsPageModule = class FilmsPageModule {
};
FilmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _films_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilmsPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_films_page__WEBPACK_IMPORTED_MODULE_6__["FilmsPage"]]
    })
], FilmsPageModule);



/***/ }),

/***/ "./src/app/medias/films/films.page.scss":
/*!**********************************************!*\
  !*** ./src/app/medias/films/films.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhcy9maWxtcy9maWxtcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/medias/films/films.page.ts":
/*!********************************************!*\
  !*** ./src/app/medias/films/films.page.ts ***!
  \********************************************/
/*! exports provided: FilmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPage", function() { return FilmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-film.service */ "./src/app/services/data-film.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let FilmsPage = class FilmsPage {
    constructor(navCtrl, filmService) {
        this.navCtrl = navCtrl;
        this.filmService = filmService;
        this.mesFilm = [...filmService.myFilm];
    }
    ngOnInit() {
        this.filmSub = this.filmService.myFilmChanged.subscribe((film) => {
            this.mesFilm = film;
        });
    }
    ngOnDestroy() {
        this.filmSub.unsubscribe();
    }
    goToAjouter() {
        this.navCtrl.navigateForward(['/medias/films/ajouter']);
    }
    showInfo(id) {
        this.navCtrl.navigateForward(['/info-film/' + id]);
    }
};
FilmsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"] }
];
FilmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-films',
        template: __webpack_require__(/*! raw-loader!./films.page.html */ "./node_modules/raw-loader/index.js!./src/app/medias/films/films.page.html"),
        styles: [__webpack_require__(/*! ./films.page.scss */ "./src/app/medias/films/films.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"]])
], FilmsPage);



/***/ }),

/***/ "./src/app/recommandations/films/films-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/recommandations/films/films-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FilmsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageRoutingModule", function() { return FilmsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./films.page */ "./src/app/recommandations/films/films.page.ts");




const routes = [
    {
        path: '',
        component: _films_page__WEBPACK_IMPORTED_MODULE_3__["FilmsPage"]
    }
];
let FilmsPageRoutingModule = class FilmsPageRoutingModule {
};
FilmsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilmsPageRoutingModule);



/***/ }),

/***/ "./src/app/recommandations/films/films.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/recommandations/films/films.module.ts ***!
  \*******************************************************/
/*! exports provided: FilmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageModule", function() { return FilmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _films_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./films-routing.module */ "./src/app/recommandations/films/films-routing.module.ts");
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films.page */ "./src/app/recommandations/films/films.page.ts");







let FilmsPageModule = class FilmsPageModule {
};
FilmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _films_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilmsPageRoutingModule"]
        ],
        declarations: [_films_page__WEBPACK_IMPORTED_MODULE_6__["FilmsPage"]]
    })
], FilmsPageModule);



/***/ }),

/***/ "./src/app/recommandations/films/films.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/recommandations/films/films.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWFuZGF0aW9ucy9maWxtcy9maWxtcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recommandations/films/films.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/recommandations/films/films.page.ts ***!
  \*****************************************************/
/*! exports provided: FilmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPage", function() { return FilmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-film.service */ "./src/app/services/data-film.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let FilmsPage = class FilmsPage {
    constructor(filmService, alertCtrl) {
        this.filmService = filmService;
        this.alertCtrl = alertCtrl;
        this.filmsRec = [...this.filmService.recFilm];
        this.filmsRec = this.shuffle(this.filmsRec);
    }
    ngOnInit() {
        this.filmSub = this.filmService.recFilmChanged.subscribe((film) => {
            this.filmsRec = film;
        });
    }
    ngOnDestroy() {
        this.filmSub.unsubscribe();
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
    supprimer(f) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Suprimer un Film',
                message: 'Voulez vous vraiment supprimer ce film de vos recommandations ?',
                buttons: [
                    'Annuler',
                    {
                        text: 'Valider',
                        role: 'valider',
                        handler: () => {
                            var i = this.filmsRec.indexOf(f);
                            this.filmsRec.splice(i, 1);
                            this.filmService.delInRecFilm(f);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FilmsPage.ctorParameters = () => [
    { type: src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
FilmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-films',
        template: __webpack_require__(/*! raw-loader!./films.page.html */ "./node_modules/raw-loader/index.js!./src/app/recommandations/films/films.page.html"),
        styles: [__webpack_require__(/*! ./films.page.scss */ "./src/app/recommandations/films/films.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_2__["DataFilmService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], FilmsPage);



/***/ })

}]);
//# sourceMappingURL=films-films-module-es2015.js.map