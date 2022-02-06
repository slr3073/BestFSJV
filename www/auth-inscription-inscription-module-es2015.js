(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-inscription-inscription-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/inscription/inscription.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/inscription/inscription.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Inscription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n            <ion-label position=\"floating\">Prénom</ion-label>\n            <ion-input type=\"text\" required ngModel name=\"prenom\" required text></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n            <ion-label position=\"floating\">Nom</ion-label>\n            <ion-input type=\"text\" ngModel name=\"prenom\" required text></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Adresse e-mail</ion-label>\n            <ion-input type=\"email\" ngModel name=\"email\" required email #emailCtrl=\"ngModel\"></ion-input>\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          </ion-item>\n          <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n            <ion-label  color=\"danger\" >Email invalide</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Mot de passe</ion-label>\n            <ion-input type=\"password\" ngModel name=\"mdp\" required minlength=\"6\" maxlength=\"30\" #mdpCtrl=\"ngModel\"></ion-input>\n            <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n          </ion-item>\n          <ion-item *ngIf=\"!mdpCtrl.valid && mdpCtrl.touched\" lines=\"none\">\n            <ion-label  color=\"danger\" >Mdp invalide : 6 charactères minimum</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" text-center>\n          <ion-button (click)=\"goToConnexion()\" type=\"button\" color=\"danger\" fill=\"outline\" expand=\"block\">Annuler</ion-button>\n        </ion-col>\n        <ion-col size=\"6\"  text-center >\n          <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!f.valid\">S'inscrire</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/inscription/inscription-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/inscription/inscription-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageRoutingModule", function() { return InscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscription.page */ "./src/app/auth/inscription/inscription.page.ts");




const routes = [
    {
        path: '',
        component: _inscription_page__WEBPACK_IMPORTED_MODULE_3__["InscriptionPage"]
    }
];
let InscriptionPageRoutingModule = class InscriptionPageRoutingModule {
};
InscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InscriptionPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/inscription/inscription.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/inscription/inscription.module.ts ***!
  \********************************************************/
/*! exports provided: InscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function() { return InscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inscription-routing.module */ "./src/app/auth/inscription/inscription-routing.module.ts");
/* harmony import */ var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscription.page */ "./src/app/auth/inscription/inscription.page.ts");







let InscriptionPageModule = class InscriptionPageModule {
};
InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["InscriptionPageRoutingModule"]
        ],
        declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]]
    })
], InscriptionPageModule);



/***/ }),

/***/ "./src/app/auth/inscription/inscription.page.scss":
/*!********************************************************!*\
  !*** ./src/app/auth/inscription/inscription.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/inscription/inscription.page.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/inscription/inscription.page.ts ***!
  \******************************************************/
/*! exports provided: InscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionPage", function() { return InscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let InscriptionPage = class InscriptionPage {
    constructor(navCtrl, authSrv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authSrv = authSrv;
        this.alertCtrl = alertCtrl;
    }
    goToConnexion() {
        this.navCtrl.navigateBack(['connexion']);
    }
    goToMedias() {
        this.navCtrl.navigateRoot(['medias']);
    }
    ngOnInit() { }
    onSubmit(form) {
        const email = form.value.email;
        const mdp = form.value.mdp;
        this.authSrv.sinscrire(email, mdp).subscribe((resData) => {
            this.authSrv.loggin();
            this.navCtrl.navigateForward('/medias');
        }, (errorRes) => {
            const code = errorRes.error.error.message;
            var msg = 'Inscription impossible, veuillez réessayer.';
            if (code == 'EMAIL_EXISTS') {
                msg = 'Cet adresse mail est déjà utilisé.';
            }
            this.showError(msg);
        });
    }
    showError(msg) {
        this.alertCtrl.create({ header: 'Inscription impossible', message: msg, buttons: ['Ok'] }).then((alertEl) => {
            alertEl.present();
        });
    }
};
InscriptionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inscription',
        template: __webpack_require__(/*! raw-loader!./inscription.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/inscription/inscription.page.html"),
        styles: [__webpack_require__(/*! ./inscription.page.scss */ "./src/app/auth/inscription/inscription.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], InscriptionPage);



/***/ })

}]);
//# sourceMappingURL=auth-inscription-inscription-module-es2015.js.map