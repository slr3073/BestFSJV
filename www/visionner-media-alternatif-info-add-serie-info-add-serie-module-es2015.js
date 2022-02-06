(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visionner-media-alternatif-info-add-serie-info-add-serie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>Ajouter une Série</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content  padding>\r\n    <ion-grid class=\"ion-align-items-start\">\r\n     <ion-row>\r\n       <ion-col>\r\n         <ion-item>\r\n           <ion-label>\r\n              Nom : {{selectedSerie.nom}}\r\n           </ion-label>\r\n         </ion-item>\r\n       </ion-col>\r\n     </ion-row>\r\n     <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Année de sortie : {{selectedSerie.dateS}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item *ngIf=\"isFinished(selectedSerie)\">\r\n          <ion-label >Année de fin : {{selectedSerie.dateF}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 1 : {{selectedSerie.genre1}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 2 : {{selectedSerie.genre2}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Image (URL) : {{selectedSerie.imageURL}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"Valider(f)\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label padding-end>* Visionnage complet </ion-label>\r\n            <ion-checkbox name=\"vuEntierement\" checked=\"true\" [(ngModel)]=\"selectedSerie.vuEntierement\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col padding-start padding-top>\r\n          <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Commentaires : </ion-label>\r\n            <ion-textarea name=\"commentaire\" type=\"text\" rows=\"3\" cols=\"20\" maxlength=\"1000\" [(ngModel)]=\"selectedSerie.commentaire\"></ion-textarea> \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button type=\"submit\" float-right>Valider</ion-button>\r\n            <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>.\r\n          </ion-col>\r\n        </ion-row>\r\n    </form>\r\n    </ion-grid>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-serie/info-add-serie-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: InfoAddSeriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddSeriePageRoutingModule", function() { return InfoAddSeriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_add_serie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-add-serie.page */ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.ts");




const routes = [
    {
        path: '',
        component: _info_add_serie_page__WEBPACK_IMPORTED_MODULE_3__["InfoAddSeriePage"]
    }
];
let InfoAddSeriePageRoutingModule = class InfoAddSeriePageRoutingModule {
};
InfoAddSeriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoAddSeriePageRoutingModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.module.ts ***!
  \************************************************************************************/
/*! exports provided: InfoAddSeriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddSeriePageModule", function() { return InfoAddSeriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_add_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-add-serie-routing.module */ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie-routing.module.ts");
/* harmony import */ var _info_add_serie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-add-serie.page */ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.ts");
/* harmony import */ var src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/selection/note/note.module */ "./src/app/selection/note/note.module.ts");








let InfoAddSeriePageModule = class InfoAddSeriePageModule {
};
InfoAddSeriePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_add_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoAddSeriePageRoutingModule"], src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
        declarations: [_info_add_serie_page__WEBPACK_IMPORTED_MODULE_6__["InfoAddSeriePage"]]
    })
], InfoAddSeriePageModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2lvbm5lci1tZWRpYS9hbHRlcm5hdGlmL2luZm8tYWRkLXNlcmllL2luZm8tYWRkLXNlcmllLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.ts ***!
  \**********************************************************************************/
/*! exports provided: InfoAddSeriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddSeriePage", function() { return InfoAddSeriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-serie.service */ "./src/app/services/data-serie.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let InfoAddSeriePage = class InfoAddSeriePage {
    constructor(navCtrl, serviceSerie, authService, activatedRoute) {
        this.navCtrl = navCtrl;
        this.serviceSerie = serviceSerie;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('idSerie')) {
                this.navCtrl.navigateBack(['/selectionner-serie']);
                return;
            }
            this.selectedSerie = Object.assign({}, this.serviceSerie.getInAllSerie(paramMap.get('idSerie')));
        });
        this.selectedSerie.note = 2;
        this.selectedSerie.vuEntierement = true;
    }
    goBack() {
        this.navCtrl.navigateBack(['/selectionner-serie']);
    }
    isFinished(s) {
        return !(s.dateF === undefined);
    }
    Valider() {
        console.log(this.selectedSerie);
        this.serviceSerie.addInMySerie(this.selectedSerie, this.authService.userId);
        this.navCtrl.navigateBack(['/medias/series']);
    }
    passerNote(note) {
        this.selectedSerie.note = note;
    }
};
InfoAddSeriePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__["DataSerieService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
InfoAddSeriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-add-serie',
        template: __webpack_require__(/*! raw-loader!./info-add-serie.page.html */ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.html"),
        styles: [__webpack_require__(/*! ./info-add-serie.page.scss */ "./src/app/visionner-media/alternatif/info-add-serie/info-add-serie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_3__["DataSerieService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], InfoAddSeriePage);



/***/ })

}]);
//# sourceMappingURL=visionner-media-alternatif-info-add-serie-info-add-serie-module-es2015.js.map