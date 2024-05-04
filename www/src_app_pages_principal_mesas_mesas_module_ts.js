(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["src_app_pages_principal_mesas_mesas_module_ts"],{

/***/ 6597:
/*!***************************************************************!*\
  !*** ./src/app/pages/principal/mesas/mesas-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesasPageRoutingModule": () => (/* binding */ MesasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mesas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesas.page */ 8795);




const routes = [
    {
        path: '',
        component: _mesas_page__WEBPACK_IMPORTED_MODULE_0__.MesasPage
    }
];
let MesasPageRoutingModule = class MesasPageRoutingModule {
};
MesasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesasPageRoutingModule);



/***/ }),

/***/ 2675:
/*!*******************************************************!*\
  !*** ./src/app/pages/principal/mesas/mesas.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesasPageModule": () => (/* binding */ MesasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _mesas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesas-routing.module */ 6597);
/* harmony import */ var _mesas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesas.page */ 8795);







let MesasPageModule = class MesasPageModule {
};
MesasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mesas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesasPageRoutingModule
        ],
        declarations: [_mesas_page__WEBPACK_IMPORTED_MODULE_1__.MesasPage]
    })
], MesasPageModule);



/***/ }),

/***/ 8795:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/mesas/mesas.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesasPage": () => (/* binding */ MesasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mesas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mesas.page.html */ 9487);
/* harmony import */ var _mesas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesas.page.scss */ 2519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);







let MesasPage = class MesasPage {
    constructor(modalController, navController, navigationService, dataService, loadingController, alertController, actionSheetController, toastController) {
        this.modalController = modalController;
        this.navController = navController;
        this.navigationService = navigationService;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.preordenes = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.cargarMesas();
    }
    onActualizar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.mostrarLoader('Actualizando...');
            try {
                let respuesta = yield this.dataService.getPreordenes();
                this.preordenes = respuesta.data;
                this.ocultarLoader();
            }
            catch (error) {
                this.ocultarLoader();
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
    cargarMesas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.mostrarLoader('Cargando ordenes...');
                try {
                    let respuesta = yield this.dataService.getPreordenes();
                    this.preordenes = respuesta.data;
                    this.ocultarLoader();
                }
                catch (error) {
                    this.ocultarLoader();
                }
            }), 150);
        });
    }
    onIrMesa(idPreOrden) {
        if (idPreOrden == null) {
            return;
        }
        this.navigationService.setIdOrden(idPreOrden);
        this.navController.navigateRoot('/principal/mesa', { animationDirection: 'forward' });
    }
    nuevaOrden(idMesa, etiquetaMesa) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Se creará una orden para la mesa: ' + etiquetaMesa,
                message: '¿Está seguro?',
                cssClass: 'alertNuevaOrden',
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondarybtn',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Sí, crear',
                        cssClass: 'primarybtn',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                this.mostrarLoader('Creando orden...');
                                let respuesta = yield this.dataService.postPreorden(idMesa, etiquetaMesa);
                                if (respuesta.data.success) {
                                    this.ocultarLoader();
                                    this.navigationService.setIdOrden(respuesta.data.IdPreOrden);
                                    this.navController.navigateRoot('/principal/mesa', { animationDirection: 'forward' });
                                }
                                else {
                                    this.cargarMesas();
                                    this.ocultarLoader();
                                    this.mostrarMensajeBottom('ERROR: Ya existe una orden para esa mesa.', 2000, 'danger');
                                }
                            }
                            catch (error) {
                                this.ocultarLoader();
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
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
    mostrarOpcionMesa(idMesa, idPreOrden, etiquetaMesa, idCliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let buttons = [];
            if (idPreOrden == null) {
                buttons.push({ text: 'Crear Orden', cssClass: 'botonOrdenar', icon: 'cart', role: 'destructive', handler: () => {
                        this.nuevaOrden(idMesa, etiquetaMesa);
                    } });
            }
            else {
                if (idCliente == null) {
                    buttons.push({ text: 'Limpiar Mesa', cssClass: 'botonLimpiar', icon: 'archive', role: 'destructive', handler: () => {
                            this.onLimpiarMesa(idMesa, etiquetaMesa, idPreOrden);
                        } });
                }
                buttons.push({ text: 'Cambiar de Mesa', cssClass: 'botonCambiar', icon: 'swap-horizontal', role: 'destructive', handler: () => {
                        this.onCambiarMesa(idMesa, etiquetaMesa);
                    } });
            }
            buttons.push({ text: 'Cerrar', role: 'cancel' });
            const actionSheet = yield this.actionSheetController.create({
                header: "Opciones para la mesa " + etiquetaMesa,
                mode: 'ios',
                cssClass: 'headerAction',
                buttons: buttons
            });
            yield actionSheet.present();
        });
    }
    onLimpiarMesa(idMesa, etiquetaMesa, idPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Se eliminarán los productos y la mesa ' + etiquetaMesa + ' quedará libre',
                message: '¿Está seguro?',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondarybtn',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Sí, limpiar',
                        cssClass: 'primarybtn',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.mostrarLoader('Limpiando...');
                                let respuestaLimpiar = yield this.dataService.deleteLimpiarMesa(idMesa, idPreOrden);
                                if (respuestaLimpiar.data.success) {
                                    this.ocultarLoader();
                                    this.mostrarMensajeBottom('La mesa limpiada.', 2000, 'success');
                                    this.cargarMesas();
                                }
                                else {
                                    this.ocultarLoader();
                                    this.mostrarMensajeBottom('La mesa tiene otro estado', 2000, 'danger');
                                    this.cargarMesas();
                                }
                            }
                            catch (error) {
                                this.ocultarLoader();
                                this.mostrarMensajeBottom('Ha ocurrido un error', 2000, 'danger');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    onCambiarMesa(idMesa, etiquetaMesa) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let buttons = [];
                let respuesta = yield this.dataService.getPreordenes();
                if (respuesta.data) {
                    respuesta.data.map((res) => {
                        if (res.IdPreOrden == null) {
                            buttons.push({ text: 'Mesa: ' + res.EtiquetaMesa, cssClass: 'botonLibre', icon: 'tablet-landscape-outline', handler: () => {
                                    this.accionCambiar(idMesa, res.IdMesa, etiquetaMesa, res.EtiquetaMesa);
                                } });
                        }
                    });
                    buttons.push({ text: 'Cerrar', role: 'cancel' });
                    const actionSheet = yield this.actionSheetController.create({
                        header: "Lista de mesas disponibles",
                        mode: 'ios',
                        cssClass: 'headerAction',
                        buttons: buttons
                    });
                    yield actionSheet.present();
                }
            }
            catch (error) {
            }
        });
    }
    accionCambiar(idMesa, idMesaNueva, etiquetaMesa, etiquetaMesaNueva) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¿Está seguro?',
                message: 'Se cambiará la orden de la mesa: <strong>' + etiquetaMesa + '</strong> a la mesa: <strong>' + etiquetaMesaNueva + '</strong>',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondarybtn',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Sí, cambiar',
                        cssClass: 'primarybtn',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.mostrarLoader('Cambiando de: ' + etiquetaMesa + ' a: ' + etiquetaMesaNueva);
                                let respuestaCambio = yield this.dataService.postCambiarMesa(idMesa, idMesaNueva);
                                if (respuestaCambio.data.success == true) {
                                    this.ocultarLoader();
                                    this.mostrarMensajeBottom(respuestaCambio.data.msg, 4000, 'success');
                                    this.cargarMesas();
                                }
                                else {
                                    this.ocultarLoader();
                                    this.mostrarMensajeBottom(respuestaCambio.data.msg + " Se actualizará", 4000, 'danger');
                                    this.cargarMesas();
                                }
                            }
                            catch (error) {
                                this.ocultarLoader();
                                this.mostrarMensajeBottom("hubo un error intente nuevamente", 3000, 'danger');
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MesasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
MesasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mesas',
        template: _raw_loader_mesas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mesas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MesasPage);



/***/ }),

/***/ 9565:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let NavigationService = class NavigationService {
    constructor() {
        this.IdOrden = null;
        this.IdProductoCategoria = null;
        this.ProductoCategoria = null;
    }
    getIdOrden() {
        return this.IdOrden;
    }
    setIdOrden(IdOrden) {
        this.IdOrden = IdOrden;
    }
};
NavigationService.ctorParameters = () => [];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NavigationService);



/***/ }),

/***/ 2519:
/*!*******************************************************!*\
  !*** ./src/app/pages/principal/mesas/mesas.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".contenedor {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\nion-card-subtitle {\n  color: black;\n  text-align: center;\n  font-weight: bold;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n* {\n  font-family: Montserrat-Regular;\n}\n\n.ocupado {\n  --background: #E40033;\n}\n\n.disponible {\n  --background: #3171e0;\n}\n\n.ordenando {\n  --background: #28a745;\n}\n\nion-card-subtitle {\n  color: white;\n}\n\n.alertNuevaOrden {\n  --background: green;\n}\n\nion-img {\n  width: 12vw;\n  height: 12vw;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJtZXNhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY3O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1Rjc7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIH1cblxuLm9jdXBhZG97XG4gICAgLS1iYWNrZ3JvdW5kOiAgI0U0MDAzMztcbn1cblxuLmRpc3BvbmlibGV7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMzE3MWUwO1xufVxuXG4ub3JkZW5hbmRve1xuICAgIC0tYmFja2dyb3VuZDogIzI4YTc0NTtcbn1cblxuXG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydE51ZXZhT3JkZW57XG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuaW9uLWltZ3tcbiAgICB3aWR0aDogMTJ2dztcbiAgICBoZWlnaHQ6IDEydnc7XG59XG5cbi5jZW50cmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG59Il19 */");

/***/ }),

/***/ 9487:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/mesas/mesas.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header #f7594d>\n  <ion-toolbar style=\"--background: #E40033;\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button style=\"font-weight: bold; color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onActualizar()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" color=\"light\" style=\"font-weight: bold;\">\n      <ion-label>\n        Restaurante Mesas\n      </ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contenedor\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-title style=\"color: black; font-weight: bold;\">Ordenes Activas</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" *ngFor=\"let preorden of preordenes; let i = index\">\n        <ion-card>\n          <ion-card-header\n            (click)=\"mostrarOpcionMesa(preorden.IdMesa,preorden.IdPreOrden,preorden.EtiquetaMesa,preorden.IdCliente)\"\n            [ngClass]=\"preorden.IdPreOrden==null?'disponible':(preorden.IdCliente==null?'ordenando':'ocupado')\">\n            <ion-card-subtitle\n              style=\"font-size: 0.85rem; margin-bottom: -10px; margin-top: -10px;\">{{preorden.EtiquetaMesa}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"ion-activatable ripple-parent centrar\" (click)=\"onIrMesa(preorden.IdPreOrden)\">\n            <ion-img src=\"assets/images/mesa.png\"></ion-img>\n            <ion-ripple-effect></ion-ripple-effect>\n          </ion-card-content>\n          <div *ngIf=\"!!preorden.UsuarioReg;\">\n            <span style=\"color: #000000; font-size: 0.8rem; font-weight: bold;\">\n              {{preorden.UsuarioReg}}\n            </span>\n          </div>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_principal_mesas_mesas_module_ts.js.map