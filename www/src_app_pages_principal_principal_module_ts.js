(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["src_app_pages_principal_principal_module_ts"],{

/***/ 5147:
/*!*************************************************************!*\
  !*** ./src/app/pages/principal/principal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageRoutingModule": () => (/* binding */ PrincipalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.page */ 209);




const routes = [
    { path: '', redirectTo: 'mesas' },
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_0__.PrincipalPage, children: [
            {
                path: 'mesas',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_principal_mesas_mesas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mesas/mesas.module */ 2675)).then(m => m.MesasPageModule)
            },
            {
                path: 'impresoras',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_impresora_service_ts"), __webpack_require__.e("src_app_pages_principal_impresoras_impresoras_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./impresoras/impresoras.module */ 1352)).then(m => m.ImpresorasPageModule)
            },
        ]
    },
    {
        path: 'mesa',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_impresora_service_ts"), __webpack_require__.e("default-src_app_modals_producto-modal_producto-modal_module_ts"), __webpack_require__.e("src_app_pages_principal_mesa_mesa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mesa/mesa.module */ 3007)).then(m => m.MesaPageModule)
    },
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ 5122:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageModule": () => (/* binding */ PrincipalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-routing.module */ 5147);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page */ 209);







let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalPageRoutingModule
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_1__.PrincipalPage]
    })
], PrincipalPageModule);



/***/ }),

/***/ 209:
/*!***************************************************!*\
  !*** ./src/app/pages/principal/principal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPage": () => (/* binding */ PrincipalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./principal.page.html */ 2017);
/* harmony import */ var _principal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page.scss */ 1838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modals_configuracion_configuracion_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/configuracion/configuracion.page */ 6591);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);







let PrincipalPage = class PrincipalPage {
    constructor(navController, modalController, usuarioService, toastController, loadingController) {
        this.navController = navController;
        this.modalController = modalController;
        this.usuarioService = usuarioService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.usuarioLogin = "";
        this.empresaLogin = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let repuestaUsuario = yield this.usuarioService.getUsuario();
            if (repuestaUsuario.value != null) {
                this.usuarioLogin = JSON.parse(repuestaUsuario.value).usuario;
                this.empresaLogin = JSON.parse(repuestaUsuario.value).empresa;
            }
        });
    }
    onIrSidemenu(accion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            switch (accion) {
                case "mesas": {
                    this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
                    break;
                }
                case "configuracion": {
                    //abrir modal
                    const modal = yield this.modalController.create({
                        component: src_app_modals_configuracion_configuracion_page__WEBPACK_IMPORTED_MODULE_2__.ConfiguracionPage,
                        componentProps: {
                            "paramID": 123,
                        }
                    });
                    modal.onDidDismiss().then((dataReturned) => {
                        if (dataReturned !== null) {
                            console.log('Modal Sent Data :' + dataReturned.data);
                        }
                    });
                    return yield modal.present();
                    //fin de modal
                    break;
                }
                case "impresoras": {
                    this.navController.navigateRoot('/principal/impresoras', { animationDirection: 'back' });
                    break;
                }
                case "cerrarsesion": {
                    this.mostrarLoader('Cerrando Sesión...');
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.usuarioService.clearUsuario();
                        this.navController.navigateRoot('/login', { animationDirection: 'back' });
                        this.ocultarLoader();
                        this.mostrarMensajeBottom('Sesión finalizada.', 2000, 'success');
                    }), 500);
                    break;
                }
            }
        });
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
    mostrarMensajeBottom(mensaje, duracion, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<strong>' + mensaje + '</strong>',
                duration: duracion,
                position: 'bottom',
                mode: "ios",
                color: color,
                buttons: [
                    {
                        icon: "close",
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield toast.present();
        });
    }
};
PrincipalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
PrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-principal',
        template: _raw_loader_principal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_principal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrincipalPage);



/***/ }),

/***/ 1838:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headerBackground {\n  --background: rgb(228, 0, 51, 0.8);\n  background-image: url('diagmonds.png');\n  min-height: 150px;\n}\n\n.menuAvatar {\n  margin-top: 10px;\n  margin-left: 20px;\n  min-height: 50px;\n  min-width: 50px;\n  width: 80px;\n  border-radius: 10px;\n}\n\n.usernameMenuItem {\n  --background: none;\n  margin-top: 30px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.usernameMenu {\n  color: #ECE9E6;\n  /* fallback for old browsers */\n  font-size: 1.3rem;\n  font-weight: bold;\n  font-style: italic;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQWlCLDhCQUFBO0VBQ2pCLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSiIsImZpbGUiOiJwcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjI4LCAwLCA1MSwgMC44KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi9kaWFnbW9uZHMucG5nXCIpO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuLm1lbnVBdmF0YXJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnVzZXJuYW1lTWVudUl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51c2VybmFtZU1lbnV7XG4gICAgY29sb3I6ICNFQ0U5RTY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2VudHJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxufSJdfQ== */");

/***/ }),

/***/ 2017:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/principal.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n  <ion-header>\n    <ion-toolbar class=\"headerBackground\">\n      <ion-row>\n        <ion-col size=\"5\">\n            <img class=\"menuAvatar\" src=\"assets/images/avatar.png\">\n        </ion-col>\n        <ion-col size=\"7\" class=\"centrar\">\n          <ion-label class=\"usernameMenu\"> {{usuarioLogin}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\"  class=\"ion-text-center\">\n          <ion-label class=\"usernameMenu\">{{empresaLogin}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"contenido\">\n    <ion-menu-toggle auto-hide=\"true\">\n      <ion-list style=\"margin-left: 10px;\" lines=\"none\">\n\n        <ion-item button=\"true\" (click)=\"onIrSidemenu('mesas')\">\n          <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n          <ion-label>Mesas</ion-label>\n\n        </ion-item>\n\n        <ion-item-divider>\n        </ion-item-divider>\n\n        <ion-item button=\"true\" (click)=\"onIrSidemenu('impresoras')\">\n          <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n          <ion-label>Impresoras</ion-label>\n        </ion-item>\n\n        <ion-item button=\"true\" (click)=\"onIrSidemenu('cerrarsesion')\">\n          <ion-icon slot=\"start\"  name=\"log-out\"></ion-icon>\n          <ion-label>Cerrar Sesión</ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-menu-toggle>\n  </ion-content>\n  <ion-footer>\n    <ion-menu-toggle auto-hide=\"true\">\n      <ion-list style=\"margin-left: 10px;\" lines=\"none\">\n\n        <ion-item button=\"true\">\n          <ion-icon slot=\"start\" name=\"share-social\"></ion-icon>\n          <ion-label>Compartir</ion-label>\n        </ion-item>\n\n        <ion-item button=\"true\">\n          <ion-icon slot=\"start\" name=\"help-circle\"></ion-icon>\n          <ion-label>Ayuda</ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-menu-toggle>\n  </ion-footer>\n</ion-menu>\n<ion-router-outlet id=\"content1\"></ion-router-outlet>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_principal_principal_module_ts.js.map