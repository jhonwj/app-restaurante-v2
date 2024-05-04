(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["src_app_pages_principal_impresoras_impresoras_module_ts"],{

/***/ 954:
/*!*************************************************************************!*\
  !*** ./src/app/pages/principal/impresoras/impresoras-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpresorasPageRoutingModule": () => (/* binding */ ImpresorasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _impresoras_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impresoras.page */ 4368);




const routes = [
    {
        path: '',
        component: _impresoras_page__WEBPACK_IMPORTED_MODULE_0__.ImpresorasPage
    }
];
let ImpresorasPageRoutingModule = class ImpresorasPageRoutingModule {
};
ImpresorasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImpresorasPageRoutingModule);



/***/ }),

/***/ 1352:
/*!*****************************************************************!*\
  !*** ./src/app/pages/principal/impresoras/impresoras.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpresorasPageModule": () => (/* binding */ ImpresorasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _impresoras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impresoras-routing.module */ 954);
/* harmony import */ var _impresoras_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impresoras.page */ 4368);







let ImpresorasPageModule = class ImpresorasPageModule {
};
ImpresorasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _impresoras_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpresorasPageRoutingModule
        ],
        declarations: [_impresoras_page__WEBPACK_IMPORTED_MODULE_1__.ImpresorasPage]
    })
], ImpresorasPageModule);



/***/ }),

/***/ 4368:
/*!***************************************************************!*\
  !*** ./src/app/pages/principal/impresoras/impresoras.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpresorasPage": () => (/* binding */ ImpresorasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_impresoras_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./impresoras.page.html */ 3870);
/* harmony import */ var _impresoras_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impresoras.page.scss */ 9658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_impresora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/impresora.service */ 5399);







let ImpresorasPage = class ImpresorasPage {
    constructor(navController, impresoraService, loadingController, alertController, dataService) {
        this.navController = navController;
        this.impresoraService = impresoraService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dataService = dataService;
        this.impresoras = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.onObtenerImpresoras();
    }
    mostrarLoader(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaderToShow = yield this.loadingController.create({
                message: mensaje,
                spinner: 'circles',
                backdropDismiss: false,
                mode: 'ios',
            });
            this.loaderToShow.present();
        });
    }
    ocultarLoader() {
        this.loaderToShow.dismiss();
    }
    onObtenerImpresoras() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.mostrarLoader('Cargando Impresoras...');
            try {
                let respuesta = yield this.dataService.getImpresoras();
                this.impresoras = respuesta.data;
                this.ocultarLoader();
            }
            catch (error) {
                this.ocultarLoader();
            }
        });
    }
    onTestImpresora(index) {
        this.impresoraService.testImpresora(this.impresoras[index]);
    }
    onIrMesas() {
        this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
    }
};
ImpresorasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_impresora_service__WEBPACK_IMPORTED_MODULE_3__.ImpresoraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ImpresorasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-impresoras',
        template: _raw_loader_impresoras_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_impresoras_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImpresorasPage);



/***/ }),

/***/ 9658:
/*!*****************************************************************!*\
  !*** ./src/app/pages/principal/impresoras/impresoras.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".toolbar {\n  --background: #E40033;\n}\n\nion-img {\n  width: 18vh;\n}\n\n.contenedor {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\n.centrar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n* {\n  font-family: Montserrat-Regular;\n}\n\n.titulo {\n  font-weight: bold;\n  margin-left: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHJlc29yYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJpbXByZXNvcmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFye1xuICAtLWJhY2tncm91bmQ6ICNFNDAwMzM7XG59XG5cbmlvbi1pbWcge1xuICAgIHdpZHRoOiAxOHZoO1xuICB9XG5cbi5jb250ZW5lZG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY3O1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY3O1xufVxuXG4uY2VudHJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2FyZHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG59XG5cbi50aXR1bG97XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59Il19 */");

/***/ }),

/***/ 3870:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/impresoras/impresoras.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n  <ion-toolbar class=\"toolbar\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button style=\"font-weight: bold; color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" style=\"font-weight: bold;\" (click)=\"onIrMesas()\" default-href=\"\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"titulo\">\n        Impresoras\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contenedor\">\n  <ion-grid fixed>\n    <br>\n    <ion-row>\n      <ion-col size=\"12\" class=\"centrar\">\n        <ion-img src=\"assets/images/impresora.png\" ></ion-img>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item-divider>\n          <ion-label>Lista de Impresoras:</ion-label>\n        </ion-item-divider>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card *ngFor=\"let impresora of impresoras; let i = index\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col class=\"centrar\" size=\"2\">\n                <ion-img  src=\"assets/images/impresora_termica.png\"></ion-img>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-label style=\"font-weight: bold; color: black; margin-bottom: 8px; text-transform: uppercase;\">\n                  {{impresora.NombreImpresora}}</ion-label>\n                <br>\n                <ion-label style=\"margin-bottom: 8px; text-transform: capitalize;\">\n                  IP: {{impresora.Ip}}\n                </ion-label>\n                <br>\n                <ion-label style=\"margin-bottom: 8px; text-transform: capitalize;\">\n                  Puerto: {{impresora.Puerto}}\n                </ion-label>\n              </ion-col>\n              <ion-col  size=\"4\">\n                <ion-row>\n                  <ion-col size=\"12\" class=\"centrar\">\n                    <ion-buttons>\n                      <ion-button color=\"primary\" (click)=\"onTestImpresora(i)\">\n                        <ion-icon slot=\"icon-only\" name=\"print\"></ion-icon>\n                      </ion-button>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"centrar\">\n                    <ion-label color=\"primary\">Test Impresora</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_principal_impresoras_impresoras_module_ts.js.map