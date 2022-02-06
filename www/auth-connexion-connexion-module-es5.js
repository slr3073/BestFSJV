(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-connexion-connexion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/connexion/connexion.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/connexion/connexion.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Connexion</ion-title>\n  </ion-toolbar>\n</ion-header >\n\n<ion-content padding>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Adresse e-mail</ion-label>\n            <ion-input type=\"email\" ngModel name=\"email\" required email #emailCtrl=\"ngModel\"></ion-input>\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          </ion-item>\n          <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n            <ion-label  color=\"danger\" >Adresse e-mail invalide</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Mot de passe</ion-label>\n            <ion-input type=\"password\" ngModel name=\"mdp\" required minlength=\"6\" maxlength=\"30\" #mdpCtrl=\"ngModel\"></ion-input>\n            <ion-icon name=\"key\" slot=\"start\"></ion-icon>\n          </ion-item>\n          <ion-item *ngIf=\"!mdpCtrl.valid && mdpCtrl.touched\" lines=\"none\">\n            <ion-label  color=\"danger\" >Mdp invalide : 6 charactères minimum</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type='submit' expand = \"block\" [disabled]=\"!f.valid\">Se connecter</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <ion-button type='button' (click)=\"goToInscription()\" fill =\"outline\">S'inscrire</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/connexion/connexion-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/connexion/connexion-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ConnexionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageRoutingModule", function() { return ConnexionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion.page */ "./src/app/auth/connexion/connexion.page.ts");




var routes = [
    {
        path: '',
        component: _connexion_page__WEBPACK_IMPORTED_MODULE_3__["ConnexionPage"]
    }
];
var ConnexionPageRoutingModule = /** @class */ (function () {
    function ConnexionPageRoutingModule() {
    }
    ConnexionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConnexionPageRoutingModule);
    return ConnexionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/connexion/connexion.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/connexion/connexion.module.ts ***!
  \****************************************************/
/*! exports provided: ConnexionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageModule", function() { return ConnexionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connexion-routing.module */ "./src/app/auth/connexion/connexion-routing.module.ts");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connexion.page */ "./src/app/auth/connexion/connexion.page.ts");







var ConnexionPageModule = /** @class */ (function () {
    function ConnexionPageModule() {
    }
    ConnexionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnexionPageRoutingModule"]
            ],
            declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_6__["ConnexionPage"]]
        })
    ], ConnexionPageModule);
    return ConnexionPageModule;
}());



/***/ }),

/***/ "./src/app/auth/connexion/connexion.page.scss":
/*!****************************************************!*\
  !*** ./src/app/auth/connexion/connexion.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29ubmV4aW9uL2Nvbm5leGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/connexion/connexion.page.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/connexion/connexion.page.ts ***!
  \**************************************************/
/*! exports provided: ConnexionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPage", function() { return ConnexionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ConnexionPage = /** @class */ (function () {
    function ConnexionPage(navCtrl, authSrv, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authSrv = authSrv;
        this.alertCtrl = alertCtrl;
    }
    ConnexionPage.prototype.goToInscription = function () {
        this.navCtrl.navigateForward(['inscription']);
    };
    ConnexionPage.prototype.goToMedias = function () {
        this.navCtrl.navigateForward('/medias');
    };
    ConnexionPage.prototype.ngOnInit = function () { };
    ConnexionPage.prototype.onSubmit = function (form) {
        var _this = this;
        var email = form.value.email;
        var mdp = form.value.mdp;
        this.authSrv.connexion(email, mdp).subscribe(function (resData) {
            _this.authSrv.loggin();
            _this.navCtrl.navigateForward('/medias');
        }, function (errorRes) {
            var code = errorRes.error.error.message;
            var msg = 'Connexion impossible, veuillez réessayer.';
            if (code == 'EMAIL_NOT_FOUND') {
                msg = "Cet adresse mail n'a pas pu être trouvé.";
            }
            else if (code == 'INVALID_PASSWORD') {
                msg = 'Mot de passe invalide.';
            }
            _this.showError(msg);
        });
    };
    ConnexionPage.prototype.showError = function (msg) {
        this.alertCtrl.create({ header: 'Connexion impossible', message: msg, buttons: ['Ok'] }).then(function (alertEl) {
            alertEl.present();
        });
    };
    ConnexionPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ConnexionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connexion',
            template: __webpack_require__(/*! raw-loader!./connexion.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/connexion/connexion.page.html"),
            styles: [__webpack_require__(/*! ./connexion.page.scss */ "./src/app/auth/connexion/connexion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ConnexionPage);
    return ConnexionPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-connexion-connexion-module-es5.js.map