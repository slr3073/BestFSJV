(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-jeu-video-ajouter-jeu-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title >Insérer un Jeu Vidéo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding>\n    <ion-grid class=\"ion-align-items-start\">\n      <form #f=\"ngForm\" (ngSubmit)=\"Ajouter(f)\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label>* Nom :</ion-label>\n              <ion-input type=\"text\" name=\"nom\" required maxlength=\"255\" text-uppercase [(ngModel)]=\"jeuVideoEntered.nom\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label >* Année de sortie :</ion-label>\n              <ion-datetime name=\"dateS\" required displayFormat=\"YYYY\" value=\"\" min=\"1958\" cancel-text=\"Annuler\" done-text=\"Valider\" placeholder=\"2019\" [(ngModel)]=\"jeuVideoEntered.dateS\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>* Developpeur</ion-label>\n              <ion-select required name=\"dev\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"jeuVideoEntered.developpeur\">\n                <ion-select-option *ngFor=\"let g of developpeur\" value=\"{{g}}\">{{g}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>* Editeur</ion-label>\n              <ion-select required name=\"edi\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"jeuVideoEntered.editeur\">\n                <ion-select-option *ngFor=\"let g of editeur\" value=\"{{g}}\">{{g}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>* Plateformes</ion-label>\n              <ion-select required name=\"plat\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" multiple [(ngModel)]=\"jeuVideoEntered.plateformes\">\n                <ion-select-option *ngFor=\"let g of plateformes\" value=\"{{g}}\">{{g}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>* Genre 1</ion-label>\n              <ion-select required name=\"genre1\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"jeuVideoEntered.genre1\" (ionChange)=\"onChange1()\">\n                <ion-select-option *ngFor=\"let g of genreDispo1\" value=\"{{g}}\">{{g}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>* Genre 2</ion-label>\n              <ion-select required name=\"genre2\" cancelText=\"Annuler\" okText=\"Valider\" interface=\"alert\"  placeholder=\"Selectionner\" [(ngModel)]=\"jeuVideoEntered.genre2\" (ionChange)=\"onChange2()\">\n                <ion-select-option *ngFor=\"let g of genreDispo2\" value=\"{{g}}\">{{g}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col padding-start padding-top>\n            <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Commentaires : </ion-label>\n              <ion-textarea type=\"text\" name=\"com\" rows=\"3\" cols=\"20\" maxlength=\"1000\" [(ngModel)]=\"jeuVideoEntered.commentaire\"></ion-textarea> \n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Image (URL)</ion-label>\n              <ion-input name=\"url\" type=\"url\" maxlength=\"255\" [(ngModel)]=\"jeuVideoEntered.imageURL\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" [disabled]=\"!f.valid\" float-right>Valider</ion-button>\n            <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>.\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AjouterJeuVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterJeuVideoPageRoutingModule", function() { return AjouterJeuVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ajouter_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-jeu-video.page */ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.ts");




var routes = [
    {
        path: '',
        component: _ajouter_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__["AjouterJeuVideoPage"]
    }
];
var AjouterJeuVideoPageRoutingModule = /** @class */ (function () {
    function AjouterJeuVideoPageRoutingModule() {
    }
    AjouterJeuVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AjouterJeuVideoPageRoutingModule);
    return AjouterJeuVideoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.module.ts ***!
  \************************************************************************************************/
/*! exports provided: AjouterJeuVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterJeuVideoPageModule", function() { return AjouterJeuVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajouter_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajouter-jeu-video-routing.module */ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video-routing.module.ts");
/* harmony import */ var _ajouter_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajouter-jeu-video.page */ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.ts");
/* harmony import */ var _note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../note/note.module */ "./src/app/selection/note/note.module.ts");








var AjouterJeuVideoPageModule = /** @class */ (function () {
    function AjouterJeuVideoPageModule() {
    }
    AjouterJeuVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ajouter_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["AjouterJeuVideoPageRoutingModule"], _note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
            declarations: [_ajouter_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__["AjouterJeuVideoPage"]]
        })
    ], AjouterJeuVideoPageModule);
    return AjouterJeuVideoPageModule;
}());



/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGlvbi9zZWxlY3Rpb25uZXItamV1LXZpZGVvL2Fqb3V0ZXItamV1LXZpZGVvL2Fqb3V0ZXItamV1LXZpZGVvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: AjouterJeuVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterJeuVideoPage", function() { return AjouterJeuVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/editeur.service */ "./src/app/services/editeur.service.ts");
/* harmony import */ var src_app_services_developpeur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/developpeur.service */ "./src/app/services/developpeur.service.ts");
/* harmony import */ var src_app_services_plateforme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plateforme.service */ "./src/app/services/plateforme.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-jeu-video.service */ "./src/app/services/data-jeu-video.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");









var AjouterJeuVideoPage = /** @class */ (function () {
    function AjouterJeuVideoPage(genreService, editeurService, developpeurService, plateformeService, JeuVideoService, navCtrl, authService) {
        this.JeuVideoService = JeuVideoService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.genreSelected1 = null;
        this.genreSelected2 = null;
        this.oldGenreSelected1 = null;
        this.oldGenreSelected2 = null;
        this.jeuVideoEntered = {
            dateS: null,
            developpeur: null,
            editeur: null,
            genre1: null,
            genre2: null,
            id: null,
            nom: null,
            plateformes: null,
            commentaire: null,
            imageURL: null,
            note: 2,
            userID: 'slr3073'
        };
        this.genre = genreService.genre.slice();
        this.genreDispo1 = this.genre.slice();
        this.genreDispo2 = this.genre.slice();
        this.editeur = editeurService.editeur.slice();
        this.developpeur = developpeurService.developpeur.slice();
        this.plateformes = plateformeService.plateformes.slice();
    }
    AjouterJeuVideoPage.prototype.ngOnInit = function () { };
    AjouterJeuVideoPage.prototype.goBack = function () {
        this.navCtrl.navigateBack(['/selectionner-jeu-video']);
    };
    AjouterJeuVideoPage.prototype.onChange1 = function () {
        var _this = this;
        //changement sur le select 1
        if (this.oldGenreSelected1 !== null) {
            this.genreDispo2.push(this.oldGenreSelected1);
        }
        this.genreDispo2.splice(this.genreDispo2.findIndex(function (e) { return e == _this.jeuVideoEntered.genre1; }), 1);
        this.genreDispo2 = this.genreDispo2.sort();
        this.oldGenreSelected1 = this.jeuVideoEntered.genre1;
    };
    AjouterJeuVideoPage.prototype.onChange2 = function () {
        var _this = this;
        //changement sur le select 2
        if (this.oldGenreSelected2 !== null) {
            this.genreDispo1.push(this.oldGenreSelected2);
        }
        this.genreDispo1.splice(this.genreDispo1.findIndex(function (e) { return e == _this.jeuVideoEntered.genre2; }), 1);
        this.genreDispo1 = this.genreDispo1.sort();
        this.oldGenreSelected2 = this.jeuVideoEntered.genre2;
    };
    AjouterJeuVideoPage.prototype.Ajouter = function () {
        //traitements avant insertion
        this.jeuVideoEntered.nom = this.jeuVideoEntered.nom.toUpperCase();
        this.jeuVideoEntered.dateS = +this.jeuVideoEntered.dateS.toString().substring(0, 4);
        this.JeuVideoService.addInAllJeuVideo(this.jeuVideoEntered, this.authService.userId);
        this.navCtrl.navigateBack(['/medias/jeux-video']);
    };
    AjouterJeuVideoPage.prototype.passerNote = function (val) {
        this.jeuVideoEntered.note = val;
    };
    AjouterJeuVideoPage.ctorParameters = function () { return [
        { type: src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"] },
        { type: src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_3__["EditeurService"] },
        { type: src_app_services_developpeur_service__WEBPACK_IMPORTED_MODULE_4__["DeveloppeurService"] },
        { type: src_app_services_plateforme_service__WEBPACK_IMPORTED_MODULE_5__["PlateformeService"] },
        { type: src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_7__["DataJeuVideoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
    ]; };
    AjouterJeuVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajouter-jeu-video',
            template: __webpack_require__(/*! raw-loader!./ajouter-jeu-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.html"),
            styles: [__webpack_require__(/*! ./ajouter-jeu-video.page.scss */ "./src/app/selection/selectionner-jeu-video/ajouter-jeu-video/ajouter-jeu-video.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
            src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_3__["EditeurService"],
            src_app_services_developpeur_service__WEBPACK_IMPORTED_MODULE_4__["DeveloppeurService"],
            src_app_services_plateforme_service__WEBPACK_IMPORTED_MODULE_5__["PlateformeService"],
            src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_7__["DataJeuVideoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], AjouterJeuVideoPage);
    return AjouterJeuVideoPage;
}());



/***/ }),

/***/ "./src/app/services/developpeur.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/developpeur.service.ts ***!
  \*************************************************/
/*! exports provided: DeveloppeurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloppeurService", function() { return DeveloppeurService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeveloppeurService = /** @class */ (function () {
    function DeveloppeurService() {
        this.developpeur = [
            'Arkane Studios',
            'ATLUS',
            'BioWare Corp',
            'Bethesda Softworks',
            'Blizzard Entertainment',
            'Bungie Software',
            'CD Projekt RED',
            'CAPCOM',
            'From Software Inc.',
            'id Software',
            'KONAMI',
            'LucasArts',
            'Naughty Dog',
            'Nintendo EAD',
            'Rareware',
            'Rockstar Games',
            'SEGA',
            'SNK',
            'SQUARE ENIX',
            'Telltale Games',
            'Ubisoft Entertainment',
            'Valve'
        ];
    }
    DeveloppeurService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeveloppeurService);
    return DeveloppeurService;
}());



/***/ }),

/***/ "./src/app/services/editeur.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/editeur.service.ts ***!
  \*********************************************/
/*! exports provided: EditeurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeurService", function() { return EditeurService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditeurService = /** @class */ (function () {
    function EditeurService() {
        this.editeur = [
            '2K Games',
            'Activision-Blizzard',
            'Ankama',
            'Bandai-Namco',
            'Bethesda',
            'Electronics Arts',
            'Nintendo',
            'Sony',
            'Take Two',
            'Ubisoft',
            'Warner Interactive'
        ];
    }
    EditeurService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditeurService);
    return EditeurService;
}());



/***/ }),

/***/ "./src/app/services/plateforme.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/plateforme.service.ts ***!
  \************************************************/
/*! exports provided: PlateformeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateformeService", function() { return PlateformeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlateformeService = /** @class */ (function () {
    function PlateformeService() {
        this.plateformes = [
            'PC',
            'XBOX ONE',
            'XBOX 360',
            'XBOX',
            'PS4',
            'PS3',
            'PS2',
            'PS VITA',
            'NINTENDO DS',
            'NINTENDO SWITCH',
            'MOBILE',
            'WII U',
            'WII'
        ];
    }
    PlateformeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlateformeService);
    return PlateformeService;
}());



/***/ })

}]);
//# sourceMappingURL=ajouter-jeu-video-ajouter-jeu-video-module-es5.js.map