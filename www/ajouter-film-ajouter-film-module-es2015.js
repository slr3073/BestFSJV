(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-film-ajouter-film-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Insérer un Film</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class=\"ion-align-items-start\">\n    <form #f=\"ngForm\" (ngSubmit)=\"Ajouter(f)\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label>* Nom :</ion-label>\n            <ion-input required name=\"nom\" type=\"text\" maxlength=\"255\" text-uppercase [(ngModel)]=\"filmEntered.nom\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label >* Année de sortie:</ion-label>\n            <ion-datetime required name=\"dateS\" displayFormat=\"YYYY\" value=\"\" cancel-text=\"Annuler\" done-text=\"Valider\" placeholder=\"2019\" [(ngModel)]=\"filmEntered.dateS\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Genre 1</ion-label>\n            <ion-select required name=\"genre1\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"filmEntered.genre1\" (ionChange)=\"onChange1()\">\n              <ion-select-option *ngFor=\"let g of genreDispo1\" value=\"{{g}}\">{{g}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>* Genre 2</ion-label>\n            <ion-select required name=\"genre2\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"filmEntered.genre2\" (ionChange)=\"onChange2()\">\n              <ion-select-option *ngFor=\"let g of genreDispo2\" value=\"{{g}}\">{{g}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col padding-start padding-top>\n          <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Commentaires : </ion-label>\n            <ion-textarea name=\"commentaire\" type=\"text\" rows=\"3\" cols=\"20\" maxlength=\"1000\" [(ngModel)]=\"filmEntered.commentaire\" ></ion-textarea> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Image (URL)</ion-label>\n            <ion-input name=\"url\" type=\"url\" maxlength=\"255\" [(ngModel)]=\"filmEntered.imageURL\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" [disabled]=\"!f.valid\" float-right>Valider</ion-button>\n          <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>.\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/ajouter-film/ajouter-film-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AjouterFilmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterFilmPageRoutingModule", function() { return AjouterFilmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ajouter_film_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-film.page */ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.ts");




const routes = [
    {
        path: '',
        component: _ajouter_film_page__WEBPACK_IMPORTED_MODULE_3__["AjouterFilmPage"]
    }
];
let AjouterFilmPageRoutingModule = class AjouterFilmPageRoutingModule {
};
AjouterFilmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AjouterFilmPageRoutingModule);



/***/ }),

/***/ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/ajouter-film/ajouter-film.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AjouterFilmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterFilmPageModule", function() { return AjouterFilmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajouter_film_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajouter-film-routing.module */ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film-routing.module.ts");
/* harmony import */ var _ajouter_film_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajouter-film.page */ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.ts");
/* harmony import */ var _note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../note/note.module */ "./src/app/selection/note/note.module.ts");








let AjouterFilmPageModule = class AjouterFilmPageModule {
};
AjouterFilmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ajouter_film_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjouterFilmPageRoutingModule"], _note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
        declarations: [_ajouter_film_page__WEBPACK_IMPORTED_MODULE_6__["AjouterFilmPage"]]
    })
], AjouterFilmPageModule);



/***/ }),

/***/ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItZmlsbS9ham91dGVyLWZpbG0vYWpvdXRlci1maWxtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AjouterFilmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterFilmPage", function() { return AjouterFilmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-film.service */ "./src/app/services/data-film.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let AjouterFilmPage = class AjouterFilmPage {
    constructor(genreService, navCtrl, FilmService, authService) {
        this.navCtrl = navCtrl;
        this.FilmService = FilmService;
        this.authService = authService;
        this.oldGenreSelected1 = null;
        this.oldGenreSelected2 = null;
        //Input
        this.filmEntered = {
            id: null,
            nom: null,
            dateS: null,
            genre1: null,
            genre2: null,
            note: 2,
            commentaire: null,
            imageURL: null,
            userID: 'slr3073'
        };
        this.genre = [...genreService.genre];
        this.genreDispo1 = [...this.genre];
        this.genreDispo2 = [...this.genre];
    }
    ngOnInit() { }
    goBack() {
        this.navCtrl.navigateBack(['/selectionner-film']);
    }
    Ajouter() {
        //traitements avant insertion
        this.filmEntered.nom = this.filmEntered.nom.toUpperCase();
        this.filmEntered.dateS = +this.filmEntered.dateS.toString().substring(0, 4);
        this.FilmService.addInAllFilm(this.filmEntered, this.authService.userId);
        //this.FilmService.addInMyFilm(this.filmEntered);
        this.navCtrl.navigateBack(['/medias/films']);
    }
    onChange1() {
        //changement sur le select 1
        if (this.oldGenreSelected1 !== null) {
            this.genreDispo2.push(this.oldGenreSelected1);
        }
        this.genreDispo2.splice(this.genreDispo2.findIndex((e) => e == this.filmEntered.genre1), 1);
        this.genreDispo2 = this.genreDispo2.sort();
        this.oldGenreSelected1 = this.filmEntered.genre1;
    }
    onChange2() {
        //changement sur le select 2
        if (this.oldGenreSelected2 !== null) {
            this.genreDispo1.push(this.oldGenreSelected2);
        }
        this.genreDispo1.splice(this.genreDispo1.findIndex((e) => e == this.filmEntered.genre2), 1);
        this.genreDispo1 = this.genreDispo1.sort();
        this.oldGenreSelected2 = this.filmEntered.genre2;
    }
    passerNote(note) {
        this.filmEntered.note = note;
    }
};
AjouterFilmPage.ctorParameters = () => [
    { type: src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_4__["DataFilmService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AjouterFilmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ajouter-film',
        template: __webpack_require__(/*! raw-loader!./ajouter-film.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.html"),
        styles: [__webpack_require__(/*! ./ajouter-film.page.scss */ "./src/app/selection/selectionner-film/ajouter-film/ajouter-film.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_4__["DataFilmService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AjouterFilmPage);



/***/ })

}]);
//# sourceMappingURL=ajouter-film-ajouter-film-module-es2015.js.map