(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jeux-video-jeux-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medias/jeux-video/jeux-video.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medias/jeux-video/jeux-video.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mes Jeux Vidéo</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"goToAjouter()\">\n        <ion-icon name=\"add\" slot=\"icon-only\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header >\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n        <ion-searchbar placeholder=\"Rechercher\" [(ngModel)]=\"searchInput\" animated></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let jv of mesJeuxVideo | filter:searchInput\"size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\">\n        <ion-card (click)=\"showInfo(jv.id)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              {{jv.dateS}}\n              <ion-icon class=\"ion-float-right\" name=\"information-circle\" size=\"large\"></ion-icon>\n            </ion-card-subtitle>\n            <ion-card-title>\n              {{jv.nom}} <br/>\n              <ion-icon name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"jv.note > 1\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"jv.note > 2\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"jv.note > 3\" name=\"heart\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"1 == jv.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"2 > jv.note || 2 == jv.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n              <ion-icon *ngIf=\"3 > jv.note || 3 == jv.note\" name=\"heart-empty\" size=\"large\" color=\"danger\"></ion-icon>\n            </ion-card-title>\n          </ion-card-header>\n          <img [src]=\"jv.imageURL\" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recommandations/jeux-video/jeux-video.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recommandations/jeux-video/jeux-video.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Vous Aimerez Surement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col *ngFor=\"let f of jeuxVideoRec\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\" >\n        <ion-card (click)=\"supprimer(f)\" button>\n          <ion-card-header>\n            <ion-card-subtitle>\n              <ion-icon class=\"ion-float-right\" name=\"close\" size=\"large\" color=\"danger\"></ion-icon>\n              <div padding-bottom>\n                {{f.dateS}} | {{f.genre1}} ET {{f.genre2}}\n              </div>\n              Développé par {{f.developpeur}} <br/>\n              Edité par {{f.editeur}}\n            </ion-card-subtitle>\n            <ion-card-title>{{f.nom}}</ion-card-title>\n          </ion-card-header>\n          <img [src]=\"f.imageURL\"/>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/medias/jeux-video/jeux-video-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/medias/jeux-video/jeux-video-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: JeuxVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPageRoutingModule", function() { return JeuxVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jeux_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jeux-video.page */ "./src/app/medias/jeux-video/jeux-video.page.ts");




const routes = [
    {
        path: '',
        component: _jeux_video_page__WEBPACK_IMPORTED_MODULE_3__["JeuxVideoPage"]
    },
    {
        path: 'ajouter',
        redirectTo: '/ajouter-jeu-video',
        pathMatch: 'full'
    }
];
let JeuxVideoPageRoutingModule = class JeuxVideoPageRoutingModule {
};
JeuxVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JeuxVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/medias/jeux-video/jeux-video.module.ts":
/*!********************************************************!*\
  !*** ./src/app/medias/jeux-video/jeux-video.module.ts ***!
  \********************************************************/
/*! exports provided: JeuxVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPageModule", function() { return JeuxVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jeux_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jeux-video-routing.module */ "./src/app/medias/jeux-video/jeux-video-routing.module.ts");
/* harmony import */ var _jeux_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jeux-video.page */ "./src/app/medias/jeux-video/jeux-video.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








let JeuxVideoPageModule = class JeuxVideoPageModule {
};
JeuxVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jeux_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["JeuxVideoPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_jeux_video_page__WEBPACK_IMPORTED_MODULE_6__["JeuxVideoPage"]]
    })
], JeuxVideoPageModule);



/***/ }),

/***/ "./src/app/medias/jeux-video/jeux-video.page.scss":
/*!********************************************************!*\
  !*** ./src/app/medias/jeux-video/jeux-video.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhcy9qZXV4LXZpZGVvL2pldXgtdmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/medias/jeux-video/jeux-video.page.ts":
/*!******************************************************!*\
  !*** ./src/app/medias/jeux-video/jeux-video.page.ts ***!
  \******************************************************/
/*! exports provided: JeuxVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPage", function() { return JeuxVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-jeu-video.service */ "./src/app/services/data-jeu-video.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let JeuxVideoPage = class JeuxVideoPage {
    constructor(navCtrl, jeuVideoService) {
        this.navCtrl = navCtrl;
        this.jeuVideoService = jeuVideoService;
        this.mesJeuxVideo = [...jeuVideoService.myJeuVideo];
    }
    ngOnInit() {
        this.jeuVideoSub = this.jeuVideoService.myJeuVideoChanged.subscribe((jv) => {
            this.mesJeuxVideo = jv;
        });
    }
    ngOnDestroy() {
        this.jeuVideoSub.unsubscribe();
    }
    goToAjouter() {
        this.navCtrl.navigateForward(['selectionner-jeu-video']);
    }
    showInfo(id) {
        this.navCtrl.navigateForward(['/info-jeu-video/' + id]);
    }
};
JeuxVideoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__["DataJeuVideoService"] }
];
JeuxVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jeux-video',
        template: __webpack_require__(/*! raw-loader!./jeux-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/medias/jeux-video/jeux-video.page.html"),
        styles: [__webpack_require__(/*! ./jeux-video.page.scss */ "./src/app/medias/jeux-video/jeux-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__["DataJeuVideoService"]])
], JeuxVideoPage);



/***/ }),

/***/ "./src/app/recommandations/jeux-video/jeux-video-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/recommandations/jeux-video/jeux-video-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: JeuxVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPageRoutingModule", function() { return JeuxVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jeux_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jeux-video.page */ "./src/app/recommandations/jeux-video/jeux-video.page.ts");




const routes = [
    {
        path: '',
        component: _jeux_video_page__WEBPACK_IMPORTED_MODULE_3__["JeuxVideoPage"]
    }
];
let JeuxVideoPageRoutingModule = class JeuxVideoPageRoutingModule {
};
JeuxVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JeuxVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/recommandations/jeux-video/jeux-video.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/recommandations/jeux-video/jeux-video.module.ts ***!
  \*****************************************************************/
/*! exports provided: JeuxVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPageModule", function() { return JeuxVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jeux_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jeux-video-routing.module */ "./src/app/recommandations/jeux-video/jeux-video-routing.module.ts");
/* harmony import */ var _jeux_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jeux-video.page */ "./src/app/recommandations/jeux-video/jeux-video.page.ts");







let JeuxVideoPageModule = class JeuxVideoPageModule {
};
JeuxVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jeux_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["JeuxVideoPageRoutingModule"]
        ],
        declarations: [_jeux_video_page__WEBPACK_IMPORTED_MODULE_6__["JeuxVideoPage"]]
    })
], JeuxVideoPageModule);



/***/ }),

/***/ "./src/app/recommandations/jeux-video/jeux-video.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/recommandations/jeux-video/jeux-video.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWFuZGF0aW9ucy9qZXV4LXZpZGVvL2pldXgtdmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recommandations/jeux-video/jeux-video.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/recommandations/jeux-video/jeux-video.page.ts ***!
  \***************************************************************/
/*! exports provided: JeuxVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxVideoPage", function() { return JeuxVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-jeu-video.service */ "./src/app/services/data-jeu-video.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let JeuxVideoPage = class JeuxVideoPage {
    constructor(router, jeuVideoService, alertCtrl) {
        this.router = router;
        this.jeuVideoService = jeuVideoService;
        this.alertCtrl = alertCtrl;
        this.jeuxVideoRec = [...jeuVideoService.recJeuVideo];
    }
    ngOnInit() {
        this.jeuxVideoRec = this.shuffle(this.jeuxVideoRec);
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
    supprimer(jv) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Suprimer un Jeu Vidéo',
                message: 'Voulez vous vraiment supprimer ce jeu vidéo de vos recommandations ?',
                buttons: [
                    'Annuler',
                    {
                        text: 'Valider',
                        role: 'valider',
                        handler: () => {
                            var i = this.jeuxVideoRec.indexOf(jv);
                            this.jeuxVideoRec.splice(i, 1);
                            this.jeuVideoService.delInRecJeuVideo(jv);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
JeuxVideoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__["DataJeuVideoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
JeuxVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jeux-video',
        template: __webpack_require__(/*! raw-loader!./jeux-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/recommandations/jeux-video/jeux-video.page.html"),
        styles: [__webpack_require__(/*! ./jeux-video.page.scss */ "./src/app/recommandations/jeux-video/jeux-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__["DataJeuVideoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], JeuxVideoPage);



/***/ })

}]);
//# sourceMappingURL=jeux-video-jeux-video-module-es2015.js.map