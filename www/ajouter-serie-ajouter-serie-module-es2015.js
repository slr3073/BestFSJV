(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-serie-ajouter-serie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Insérer une Série</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding>\n  <form #f=\"ngForm\" (ngSubmit)=\"Valider(f)\">\n    <ion-grid class=\"ion-align-items-start\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Nom :</ion-label>\n            <ion-input name=\"nom\" maxlength=\"255\" text-uppercase [(ngModel)]=\"serieEntered.nom\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label >* Année de sortie :</ion-label>\n            <ion-datetime name=\"dateS\" required displayFormat=\"YYYY\" cancel-text=\"Annuler\" done-text=\"Valider\" placeholder=\"2019\" [(ngModel)]=\"serieEntered.dateS\" [max]=\"anneeMax\" (ionChange)=\"changeAnneeMin()\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Série Terminé</ion-label>\n            <ion-checkbox checked=\"false\" (click)=\"changeState()\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item *ngIf=\"estTermine\">\n            <ion-label >* Année de fin :</ion-label>\n            <ion-datetime required name=\"dateF\" displayFormat=\"YYYY\" cancel-text=\"Annuler\" done-text=\"Valider\" placeholder=\"2019\" [min]=\"anneeMin\" [(ngModel)]=\"serieEntered.dateF\" (ionChange)=\"changeAnneeMax()\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Nombre d'épisode :</ion-label>\n            <ion-input required name=\"nbep\" type=\"number\" pattern=\"\\d+\" step=\"1\" min=\"1\" onkeypress=\"return event.charCode >= 48\" placeholder=\"30\" [(ngModel)]=\"serieEntered.nbEpisode\" (ionChange)=\"verification(f)\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label >* Nombre de saison :</ion-label>\n            <ion-input required name=\"nbsa\" type=\"number\" pattern=\"\\d+\" step=\"1\" min=\"1\" onkeypress=\"return event.charCode >= 48\" placeholder=\"3\" [(ngModel)]=\"serieEntered.nbSaison\" (ionChange)=\"verification(f)\" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label >* Visionnage complet </ion-label>\n            <ion-checkbox required name=\"typeVisio\" checked=\"true\" [(ngModel)]=\"serieEntered.vuEntierement\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Genre 1</ion-label>\n            <ion-select required name=\"genre1\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"serieEntered.genre1\" (ionChange)=\"onChange1()\">\n              <ion-select-option *ngFor=\"let g of genreDispo1\" value=\"{{g}}\">{{g}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label>* Genre 2</ion-label>\n            <ion-select required name=\"genre2\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"serieEntered.genre2\"  (ionChange)=\"onChange2()\">\n              <ion-select-option *ngFor=\"let g of genreDispo2\" value=\"{{g}}\">{{g}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col padding-start padding-top>\n          <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Commentaires : </ion-label>\n            <ion-textarea name=\"com\" rows=\"3\" cols=\"20\" maxlength=\"1000\" [(ngModel)]=\"serieEntered.commentaire\"></ion-textarea> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Image (URL)</ion-label>\n            <ion-input type=\"url\" name=\"url\" maxlength=\"255\" [(ngModel)]=\"serieEntered.imageURL\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" [disabled]=\"!f.valid\" float-right >Valider</ion-button>\n          <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>.\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AjouterSeriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterSeriePageRoutingModule", function() { return AjouterSeriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ajouter_serie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-serie.page */ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.ts");




const routes = [
    {
        path: '',
        component: _ajouter_serie_page__WEBPACK_IMPORTED_MODULE_3__["AjouterSeriePage"]
    }
];
let AjouterSeriePageRoutingModule = class AjouterSeriePageRoutingModule {
};
AjouterSeriePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AjouterSeriePageRoutingModule);



/***/ }),

/***/ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.module.ts ***!
  \************************************************************************************/
/*! exports provided: AjouterSeriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterSeriePageModule", function() { return AjouterSeriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajouter_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajouter-serie-routing.module */ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie-routing.module.ts");
/* harmony import */ var _ajouter_serie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajouter-serie.page */ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.ts");
/* harmony import */ var _note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../note/note.module */ "./src/app/selection/note/note.module.ts");








let AjouterSeriePageModule = class AjouterSeriePageModule {
};
AjouterSeriePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ajouter_serie_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjouterSeriePageRoutingModule"], _note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
        declarations: [_ajouter_serie_page__WEBPACK_IMPORTED_MODULE_6__["AjouterSeriePage"]]
    })
], AjouterSeriePageModule);



/***/ }),

/***/ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItc2VyaWUvYWpvdXRlci1zZXJpZS9ham91dGVyLXNlcmllLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.ts ***!
  \**********************************************************************************/
/*! exports provided: AjouterSeriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterSeriePage", function() { return AjouterSeriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-serie.service */ "./src/app/services/data-serie.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let AjouterSeriePage = class AjouterSeriePage {
    constructor(navCtrl, genreService, serviceSerie, authService) {
        this.navCtrl = navCtrl;
        this.serviceSerie = serviceSerie;
        this.authService = authService;
        this.oldGenreSelected1 = null;
        this.oldGenreSelected2 = null;
        this.anneeMin = '1919';
        this.anneeMax = new Date().getFullYear().toString();
        this.serieEntered = {
            id: null,
            nom: null,
            dateS: null,
            nbEpisode: null,
            nbSaison: null,
            vuEntierement: true,
            genre1: null,
            genre2: null,
            note: 2,
            userID: 'slr3073'
        };
        this.estTermine = false;
        this.genre = [...genreService.genre];
        this.genreDispo1 = [...this.genre];
        this.genreDispo2 = [...this.genre];
    }
    ngOnInit() { }
    goBack() {
        this.navCtrl.navigateBack(['/selectionner-serie']);
    }
    changeAnneeMin() {
        this.anneeMin = this.serieEntered.dateS.toString().substring(0, 4);
    }
    changeAnneeMax() {
        if (!(this.serieEntered.dateF == null)) {
            this.anneeMax = this.serieEntered.dateF.toString().substring(0, 4);
        }
    }
    verification(form) {
        if (form.form.controls['nbep'].value == 0) {
            form.form.controls['nbep'].setValue('');
        }
        if (form.form.controls['nbsa'].value == 0) {
            form.form.controls['nbsa'].setValue('');
            return;
        }
        if (form.form.controls['nbep'].value < form.form.controls['nbsa'].value) {
            form.form.controls['nbep'].setErrors({ incorrect: true });
            form.form.controls['nbsa'].setErrors({ incorrect: true });
            form.form.controls['nbep'].markAsUntouched;
            form.form.controls['nbsa'].markAsUntouched;
            form.form.controls['nbep'].setValue('');
            form.form.controls['nbsa'].setValue('');
            return;
        }
    }
    Valider(form) {
        //traitements avant insertion
        this.serieEntered.nom = this.serieEntered.nom.toUpperCase();
        this.serieEntered.dateS = +this.serieEntered.dateS.toString().substring(0, 4);
        if (!this.estTermine) {
            this.serieEntered.dateF = undefined;
        }
        else {
            this.serieEntered.dateF = +this.serieEntered.dateF.toString().substring(0, 4);
        }
        this.serviceSerie.addInAllSerie(this.serieEntered, this.authService.userId);
        this.navCtrl.navigateBack(['/medias/series']);
    }
    changeState() {
        this.estTermine = !this.estTermine;
        if (!this.estTermine) {
            this.anneeMax = new Date().getFullYear().toString();
        }
        this.serieEntered.dateF = undefined;
    }
    onChange1() {
        //changement sur le select 1
        if (this.oldGenreSelected1 !== null) {
            this.genreDispo2.push(this.oldGenreSelected1);
        }
        this.genreDispo2.splice(this.genreDispo2.findIndex((e) => e == this.serieEntered.genre1), 1);
        this.genreDispo2 = this.genreDispo2.sort();
        this.oldGenreSelected1 = this.serieEntered.genre1;
    }
    onChange2() {
        //changement sur le select 2
        if (this.oldGenreSelected2 !== null) {
            this.genreDispo1.push(this.oldGenreSelected2);
        }
        this.genreDispo1.splice(this.genreDispo1.findIndex((e) => e == this.serieEntered.genre2), 1);
        this.genreDispo1 = this.genreDispo1.sort();
        this.oldGenreSelected2 = this.serieEntered.genre2;
    }
    passerNote(note) {
        this.serieEntered.note = note;
    }
};
AjouterSeriePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"] },
    { type: src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_4__["DataSerieService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AjouterSeriePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-serie',
        template: __webpack_require__(/*! raw-loader!./ajouter-serie.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.html"),
        styles: [__webpack_require__(/*! ./ajouter-serie.page.scss */ "./src/app/selection/selectionner-serie/ajouter-serie/ajouter-serie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
        src_app_services_data_serie_service__WEBPACK_IMPORTED_MODULE_4__["DataSerieService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AjouterSeriePage);



/***/ })

}]);
//# sourceMappingURL=ajouter-serie-ajouter-serie-module-es2015.js.map