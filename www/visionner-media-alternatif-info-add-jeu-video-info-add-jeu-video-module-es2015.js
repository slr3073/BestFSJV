(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visionner-media-alternatif-info-add-jeu-video-info-add-jeu-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-padding-start\" color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"goBack()\">\r\n          <ion-icon size='large' slot='icon-only' name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>Ajouter un Jeu Vidéo</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content  padding>\r\n    <ion-grid class=\"ion-align-items-start\">\r\n     <ion-row>\r\n       <ion-col>\r\n         <ion-item>\r\n           <ion-label>\r\n              Nom : {{selectedJeuVideo.nom}}\r\n           </ion-label>\r\n         </ion-item>\r\n       </ion-col>\r\n     </ion-row>\r\n     <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Année de sortie : {{selectedJeuVideo.dateS}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label>\r\n               Editeur : {{selectedJeuVideo.editeur}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <div padding-bottom>\r\n                <ion-text>Plateformes : </ion-text>\r\n                <ion-text *ngFor=\"let g of selectedJeuVideo.plateformes\">\r\n                  {{g}}\r\n                  <ion-text *ngIf=\" selectedJeuVideo.plateformes.length > 2 && !(selectedJeuVideo.plateformes.indexOf(g) >= selectedJeuVideo.plateformes.length - 2) \">\r\n                    ,\r\n                  </ion-text>\r\n                  <ion-text *ngIf=\" selectedJeuVideo.plateformes.length > 2 && selectedJeuVideo.plateformes.indexOf(g) == selectedJeuVideo.plateformes.length - 2 \">\r\n                    et\r\n                  </ion-text>\r\n                </ion-text>\r\n              </div>\r\n          </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 1 : {{selectedJeuVideo.genre1}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>\r\n             Genre 2 : {{selectedJeuVideo.genre2}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label>Image (URL) : {{selectedJeuVideo.imageURL}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col padding-start padding-top>\r\n        <app-note-coeur (valeurChange)=\"passerNote($event)\"></app-note-coeur>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <form #f=\"ngForm\" (ngSubmit)=\"Valider(f)\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" >Commentaires : </ion-label>\r\n            <ion-textarea type=\"text\" name=\"commentaire\" maxlength=\"1000\" [(ngModel)]=\"selectedJeuVideo.commentaire\" rows=\"3\" cols=\"20\" ></ion-textarea> \r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n         <ion-col>\r\n           <ion-button type=\"submit\" float-right>Valider</ion-button>\r\n           <ion-button type=\"button\" float-right fill=\"outline\" color=\"danger\" (click)=\"goBack()\">Annuler</ion-button>.\r\n         </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InfoAddJeuVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddJeuVideoPageRoutingModule", function() { return InfoAddJeuVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_add_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-add-jeu-video.page */ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.ts");




const routes = [
    {
        path: '',
        component: _info_add_jeu_video_page__WEBPACK_IMPORTED_MODULE_3__["InfoAddJeuVideoPage"]
    }
];
let InfoAddJeuVideoPageRoutingModule = class InfoAddJeuVideoPageRoutingModule {
};
InfoAddJeuVideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoAddJeuVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.module.ts ***!
  \********************************************************************************************/
/*! exports provided: InfoAddJeuVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddJeuVideoPageModule", function() { return InfoAddJeuVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_add_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-add-jeu-video-routing.module */ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video-routing.module.ts");
/* harmony import */ var _info_add_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-add-jeu-video.page */ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.ts");
/* harmony import */ var src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/selection/note/note.module */ "./src/app/selection/note/note.module.ts");








let InfoAddJeuVideoPageModule = class InfoAddJeuVideoPageModule {
};
InfoAddJeuVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_add_jeu_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoAddJeuVideoPageRoutingModule"], src_app_selection_note_note_module__WEBPACK_IMPORTED_MODULE_7__["NoteModule"]],
        declarations: [_info_add_jeu_video_page__WEBPACK_IMPORTED_MODULE_6__["InfoAddJeuVideoPage"]]
    })
], InfoAddJeuVideoPageModule);



/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2lvbm5lci1tZWRpYS9hbHRlcm5hdGlmL2luZm8tYWRkLWpldS12aWRlby9pbmZvLWFkZC1qZXUtdmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.ts ***!
  \******************************************************************************************/
/*! exports provided: InfoAddJeuVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAddJeuVideoPage", function() { return InfoAddJeuVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-jeu-video.service */ "./src/app/services/data-jeu-video.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let InfoAddJeuVideoPage = class InfoAddJeuVideoPage {
    constructor(navCtrl, serviceJeuVideo, activatedRoute, authService) {
        this.navCtrl = navCtrl;
        this.serviceJeuVideo = serviceJeuVideo;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('idJeuVideo')) {
                this.navCtrl.navigateBack(['/selectionner-jeu-video']);
                return;
            }
            this.selectedJeuVideo = Object.assign({}, this.serviceJeuVideo.getInAllJeuVideo(paramMap.get('idJeuVideo')));
        });
        this.selectedJeuVideo.note = 2;
    }
    goBack() {
        this.navCtrl.navigateBack(['/selectionner-jeu-video']);
    }
    Valider() {
        this.serviceJeuVideo.addInMyJeuVideo(this.selectedJeuVideo, this.authService.userId);
        this.navCtrl.navigateBack(['/medias/jeux-video']);
    }
    passerNote(note) {
        this.selectedJeuVideo.note = note;
    }
};
InfoAddJeuVideoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__["DataJeuVideoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
InfoAddJeuVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-add-jeu-video',
        template: __webpack_require__(/*! raw-loader!./info-add-jeu-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.html"),
        styles: [__webpack_require__(/*! ./info-add-jeu-video.page.scss */ "./src/app/visionner-media/alternatif/info-add-jeu-video/info-add-jeu-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_data_jeu_video_service__WEBPACK_IMPORTED_MODULE_3__["DataJeuVideoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], InfoAddJeuVideoPage);



/***/ })

}]);
//# sourceMappingURL=visionner-media-alternatif-info-add-jeu-video-info-add-jeu-video-module-es2015.js.map