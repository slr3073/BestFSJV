(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selection-selectionner-jeu-video-selectionner-jeu-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ajouter un Jeu Vidéo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-searchbar placeholder=\"Rechercher un jeu vidéo ...\" [(ngModel)]=\"searchInput\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-start\">\n      <ion-col>\n        <ion-list >\n          <ion-item *ngFor=\"let jv of jeuxVideo | filter:searchInput\" (click)=\"showInfo(jv.id)\">\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"jv.imageURL\"></ion-img>\n              </ion-avatar>\n            <ion-label>{{jv.nom}}</ion-label>\n            <ion-icon name=\"add-circle-outline\" slot='end' color=\"success\"></ion-icon>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" expand=\"block\"  color=\"primary\" (click)=\"goToAjouter()\">Votre jeu vidéo n'est pas disponible ?</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/selectionner-jeu-video-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SelectionnerJeuVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerJeuVideoPageRoutingModule", function() { return SelectionnerJeuVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selectionner_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectionner-jeu-video.page */ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.ts");




const routes = [
    {
        path: '',
        component: _selectionner_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__["SelectionnerJeuVideoPage"]
    },
    {
        path: 'ajouter-jeu-video',
        loadChildren: () => Promise.all(/*! import() | ajouter-jeu-video-ajouter-jeu-video-module */[__webpack_require__.e("common"), __webpack_require__.e("ajouter-jeu-video-ajouter-jeu-video-module")]).then(__webpack_require__.bind(null, /*! ./ajouter-jeu-video/ajouter-jeu-video.module */ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.module.ts")).then(m => m.AjouterJeuVideoPageModule)
    }
];
let SelectionnerJeuVideoPageRoutingModule = class SelectionnerJeuVideoPageRoutingModule {
};
SelectionnerJeuVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectionnerJeuVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectionnerJeuVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerJeuVideoPageModule", function() { return SelectionnerJeuVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectionner_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectionner-jeu-video-routing.module */ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video-routing.module.ts");
/* harmony import */ var _selectionner_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectionner-jeu-video.page */ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








let SelectionnerJeuVideoPageModule = class SelectionnerJeuVideoPageModule {
};
SelectionnerJeuVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _selectionner_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectionnerJeuVideoPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_selectionner_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__["SelectionnerJeuVideoPage"]]
    })
], SelectionnerJeuVideoPageModule);



/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItamV1LXZpZGVvL3NlbGVjdGlvbm5lci1qZXUtdmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectionnerJeuVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionnerJeuVideoPage", function() { return SelectionnerJeuVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-jeu-video.service */ "./src/app/services/data-jeu-video.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SelectionnerJeuVideoPage = class SelectionnerJeuVideoPage {
    constructor(jeuxVideoService, navCtrl) {
        this.jeuxVideoService = jeuxVideoService;
        this.navCtrl = navCtrl;
        this.jeuxVideo = [...jeuxVideoService.jeuVideoNonJoue];
    }
    ngOnInit() {
        this.JeuVideoSub = this.jeuxVideoService.jeuVideoNonJoueChanged.subscribe((jeuvideo) => {
            this.jeuxVideo = jeuvideo;
        });
    }
    ngOnDestroy() {
        this.JeuVideoSub.unsubscribe();
    }
    goBack() {
        this.navCtrl.navigateBack(['/medias/jeux-video']);
    }
    goToAjouter() {
        this.navCtrl.navigateForward(['/selectionner-jeu-video/ajouter-jeu-video']);
    }
    showInfo(id) {
        this.navCtrl.navigateForward(['/info-add-jeu-video/' + id]);
    }
};
SelectionnerJeuVideoPage.ctorParameters = () => [
    { type: src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__["DataJeuVideoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SelectionnerJeuVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectionner-jeu-video',
        template: __webpack_require__(/*! raw-loader!./selectionner-jeu-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.html"),
        styles: [__webpack_require__(/*! ./selectionner-jeu-video.page.scss */ "./src/app/selection/selectionner-jeu-video/selectionner-jeu-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_2__["DataJeuVideoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], SelectionnerJeuVideoPage);



/***/ })

}]);
//# sourceMappingURL=selection-selectionner-jeu-video-selectionner-jeu-video-module-es2015.js.map