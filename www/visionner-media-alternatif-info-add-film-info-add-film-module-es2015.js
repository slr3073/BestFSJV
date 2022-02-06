(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visionner-media-alternatif-info-add-film-info-add-film-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>Ajouter un Film</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content  padding>\r\n    <ion-grid class=\"ion-align-items-start\">\r\n     <ion-row>\r\n       <ion-col>\r\n         <ion-item>\r\n           <ion-label>\r\n              Nom : {{selectedFilm.nom}}\r\n           </ion-label>\r\n         </ion-item>\r\n       </ion-col>\r\n     </ion-row>\r\n     <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Année de sortie : {{selectedFilm.dateS}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 1 : {{selectedFilm.genre1}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 2 : {{selectedFilm.genre2}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Image (URL) : {{selectedFilm.imageURL}}</ion-label>\r\n          <ion-input></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col padding-start padding-top>\r\n        <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\r\n      </ion-col>\r\n    </ion-row>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"Valider(f)\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Commentaires : </ion-label>\r\n            <ion-textarea name=\"commentaire\" type=\"text\" maxlength=\"1000\" [(ngModel)]=\"selectedFilm.commentaire\" rows=\"3\" cols=\"20\" ></ion-textarea> \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" float-right >Valider</ion-button>\r\n          <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-film/info-add-film-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-film/info-add-film-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: InfoAddFilmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddFilmPageRoutingModule", function() { return InfoAddFilmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_add_film_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-add-film.page */ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.ts");




const routes = [
    {
        path: '',
        component: _info_add_film_page__WEBPACK_IMPORTED_MODULE_3__["InfoAddFilmPage"]
    }
];
let InfoAddFilmPageRoutingModule = class InfoAddFilmPageRoutingModule {
};
InfoAddFilmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoAddFilmPageRoutingModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-film/info-add-film.module.ts ***!
  \**********************************************************************************/
/*! exports provided: InfoAddFilmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddFilmPageModule", function() { return InfoAddFilmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_add_film_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-add-film-routing.module */ "./src/app/visionner-media/alternatif/info-add-film/info-add-film-routing.module.ts");
/* harmony import */ var _info_add_film_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-add-film.page */ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.ts");
/* harmony import */ var src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/selection/note/note.module */ "./src/app/selection/note/note.module.ts");








let InfoAddFilmPageModule = class InfoAddFilmPageModule {
};
InfoAddFilmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_add_film_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoAddFilmPageRoutingModule"], src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
        declarations: [_info_add_film_page__WEBPACK_IMPORTED_MODULE_6__["InfoAddFilmPage"]]
    })
], InfoAddFilmPageModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaW9ubmVyLW1lZGlhL2FsdGVybmF0aWYvaW5mby1hZGQtZmlsbS9DOlxcVXNlcnNcXFJvbWFpblxcRG9jdW1lbnRzXFxQVFVUIFMzXFxCZXN0RlNKVi9zcmNcXGFwcFxcdmlzaW9ubmVyLW1lZGlhXFxhbHRlcm5hdGlmXFxpbmZvLWFkZC1maWxtXFxpbmZvLWFkZC1maWxtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlzaW9ubmVyLW1lZGlhL2FsdGVybmF0aWYvaW5mby1hZGQtZmlsbS9pbmZvLWFkZC1maWxtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC92aXNpb25uZXItbWVkaWEvYWx0ZXJuYXRpZi9pbmZvLWFkZC1maWxtL2luZm8tYWRkLWZpbG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuIiwiaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.ts ***!
  \********************************************************************************/
/*! exports provided: InfoAddFilmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddFilmPage", function() { return InfoAddFilmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-film.service */ "./src/app/services/data-film.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let InfoAddFilmPage = class InfoAddFilmPage {
    constructor(navCtrl, activatedRoute, serviceFilm, authService) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.serviceFilm = serviceFilm;
        this.authService = authService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('idFilm')) {
                this.navCtrl.navigateBack(['/selectionner-film']);
                return;
            }
            this.selectedFilm = Object.assign({}, this.serviceFilm.getInAllFilm(paramMap.get('idFilm')));
        });
        this.selectedFilm.note = 2;
    }
    goBack() {
        this.navCtrl.navigateBack(['/selectionner-film']);
    }
    Valider() {
        this.serviceFilm.addInMyFilm(this.selectedFilm, this.authService.userId);
        this.navCtrl.navigateBack(['/medias/films']);
    }
    passerNote(note) {
        this.selectedFilm.note = note;
    }
};
InfoAddFilmPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_3__["DataFilmService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
InfoAddFilmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-add-film',
        template: __webpack_require__(/*! raw-loader!./info-add-film.page.html */ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.html"),
        styles: [__webpack_require__(/*! ./info-add-film.page.scss */ "./src/app/visionner-media/alternatif/info-add-film/info-add-film.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_data_film_service__WEBPACK_IMPORTED_MODULE_3__["DataFilmService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], InfoAddFilmPage);



/***/ })

}]);
//# sourceMappingURL=visionner-media-alternatif-info-add-film-info-add-film-module-es2015.js.map