(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inicio/inicio.module */ 3633)).then(m => m.InicioPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'principal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_principal_principal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/principal/principal.module */ 5122)).then(m => m.PrincipalPageModule)
    },
    {
        path: 'cliente',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/cliente/cliente.module */ 9536)).then(m => m.ClientePageModule)
    },
    {
        path: 'producto-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_modals_producto-modal_producto-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/producto-modal/producto-modal.module */ 6763)).then(m => m.ProductoModalPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 4909);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 8592);








let AppComponent = class AppComponent {
    constructor(platform, navController, alertController, modalController, loadingController, menuController, router) {
        this.platform = platform;
        this.navController = navController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.menuController = menuController;
        this.router = router;
        this.valor = 0;
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide();
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light });
                if (this.platform.is('android')) {
                    _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({ color: '#E40033' });
                }
                //Boton atras listener
                document.addEventListener('backbutton', () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    // close modal
                    try {
                        const element = yield this.modalController.getTop();
                        if (element && !this.router.isActive('/login', true) &&
                            this.router.url !== '/login') {
                            //element.dismiss(null);
                            return;
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                    //close side mnenu
                    try {
                        const element = yield this.menuController.isOpen('first');
                        if (element !== false) {
                            this.menuController.toggle();
                            return;
                        }
                    }
                    catch (error) { }
                    if (this.router.isActive('/login', true) &&
                        this.router.url === '/login' &&
                        this.valor == 0) {
                        this.valor = 1;
                        const alert = yield this.alertController.create({
                            header: '¿Desea cerrar la App?',
                            backdropDismiss: false,
                            mode: 'ios',
                            buttons: [
                                {
                                    cssClass: 'secondarybtn',
                                    text: 'Cancelar',
                                    handler: () => {
                                        this.valor = 0;
                                    },
                                },
                                {
                                    cssClass: 'primarybtn',
                                    text: 'Salir',
                                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                        this.valor = 0;
                                        navigator['app'].exitApp();
                                    }),
                                },
                            ],
                        });
                        yield alert.present();
                    }
                }));
                //fin backbutton
            }
            catch (error) {
                console.log('Navegador normal');
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _modals_configuracion_configuracion_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/configuracion/configuracion.module */ 1481);
/* harmony import */ var _modals_cliente_cliente_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/cliente/cliente.module */ 9536);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _modals_configuracion_configuracion_module__WEBPACK_IMPORTED_MODULE_2__.ConfiguracionPageModule, _modals_cliente_cliente_module__WEBPACK_IMPORTED_MODULE_3__.ClientePageModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2309:
/*!*****************************************************!*\
  !*** ./src/app/interceptors/interceptor.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ 5763);





let InterceptorService = class InterceptorService {
    constructor(alertController, navController, usuarioService) {
        this.alertController = alertController;
        this.navController = navController;
        this.usuarioService = usuarioService;
        this.interceptar();
    }
    interceptar() {
        axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(undefined, (err) => {
            if (err.response.status === 401 || err.response.data.message === '401 Unauthorized') {
                this.usuarioService.clearUsuario();
                this.navController.navigateRoot('/login', { animationDirection: 'back' });
                this.mostrarAlerta();
            }
            return Promise.reject(err);
        });
    }
    mostrarAlerta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "SESION CADUCADA",
                subHeader: "Ingrese nuevamente",
                backdropDismiss: false,
                message: "<strong>El tiempo de la sesión caduco, por favor vuele a iniciar sesión.</strong>",
                mode: "ios",
                buttons: [
                    {
                        cssClass: "primarybtn",
                        text: "Entendido",
                    },
                ],
            });
            yield alert.present();
        });
    }
};
InterceptorService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService }
];
InterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ 723:
/*!**********************************************************!*\
  !*** ./src/app/modals/cliente/cliente-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageRoutingModule": () => (/* binding */ ClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.page */ 2589);




const routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_0__.ClientePage
    }
];
let ClientePageRoutingModule = class ClientePageRoutingModule {
};
ClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientePageRoutingModule);



/***/ }),

/***/ 9536:
/*!**************************************************!*\
  !*** ./src/app/modals/cliente/cliente.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePageModule": () => (/* binding */ ClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-routing.module */ 723);
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page */ 2589);







let ClientePageModule = class ClientePageModule {
};
ClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientePageRoutingModule
        ],
        declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_1__.ClientePage]
    })
], ClientePageModule);



/***/ }),

/***/ 2589:
/*!************************************************!*\
  !*** ./src/app/modals/cliente/cliente.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientePage": () => (/* binding */ ClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cliente.page.html */ 4027);
/* harmony import */ var _cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente.page.scss */ 9811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cliente.service */ 932);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 2468);







let ClientePage = class ClientePage {
    constructor(modalController, clienteService, loadingController, alertController, toastController, dataService) {
        this.modalController = modalController;
        this.clienteService = clienteService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.dataService = dataService;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false,
            centeredSlides: true,
            spaceBetween: 20
        };
        this.DniRuc = '';
        this.cliente = {
            Cliente: "",
            DniRuc: "",
            Direccion: "",
        };
        this.clienteLista = [];
    }
    ngOnInit() {
    }
    onConsultarDniRuc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loaderToShow = yield this.loadingController.create({
                    message: 'Obteniendo información del cliente...',
                    spinner: 'dots',
                    backdropDismiss: false,
                    mode: 'ios',
                });
                this.loaderToShow.present();
                let tipo = this.cliente.DniRuc.length > 8 ? 'RUC' : 'DNI';
                let result = yield this.dataService.getClienteData(this.cliente.DniRuc);
                if (result.data.error == 'Fuera de servicio' || result.data.data.success == false) {
                    this.cliente.Cliente = '';
                    this.cliente.Direccion = '';
                    const toast = yield this.toastController.create({
                        message: '<strong>No se encontro al cliente</strong>',
                        duration: 1000,
                        position: 'bottom',
                        mode: "ios",
                        color: "danger",
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
                }
                else {
                    if (tipo == 'DNI') {
                        this.cliente.Cliente = result.data.data.nombres + ' ' + result.data.data.apellidoPaterno + ' ' + result.data.data.apellidoMaterno;
                    }
                    else {
                        this.cliente.Cliente = result.data.data.razonSocial;
                        this.cliente.Direccion = result.data.data.direccion;
                    }
                }
                this.slidingItem.close();
                this.loaderToShow.dismiss();
            }
            catch (error) {
                this.slidingItem.close();
                this.loaderToShow.dismiss();
            }
        });
    }
    ionViewWillEnter() {
        this.cargarClientes();
    }
    onBuscarCliente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.DniRuc.trim() == '') {
                this.cargarClientes();
                return;
            }
            if (this.DniRuc.trim() == '' || this.DniRuc.trim().length < 8) {
                this.mostrarMensajeBottom('ERROR: Ingrese un DNI o RUC valido.', 2500, 'danger');
                return;
            }
            this.loaderToShow = yield this.loadingController.create({
                message: 'Buscando cliente...',
                spinner: 'dots',
                backdropDismiss: false,
                mode: 'ios',
            });
            this.loaderToShow.present();
            this.onLista();
            try {
                let resultado = yield this.dataService.getClientes(this.DniRuc);
                this.clienteLista = resultado.data;
                if (this.clienteLista.length == 0) {
                    this.mostrarMensajeBottom('No se encontro al cliente, por favor agregelo.', 2000, 'warning');
                    this.cliente.DniRuc = this.DniRuc;
                    this.onFormulario();
                }
                this.loaderToShow.dismiss();
            }
            catch (error) {
                this.loaderToShow.dismiss();
            }
        });
    }
    cargarClientes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loaderToShow = yield this.loadingController.create({
                message: 'Obteniendo clientes...',
                spinner: 'dots',
                backdropDismiss: false,
                mode: 'ios',
            });
            this.loaderToShow.present();
            try {
                let resultado = yield this.dataService.getClientes('');
                this.clienteLista = resultado.data;
                this.loaderToShow.dismiss();
            }
            catch (error) {
                this.loaderToShow.dismiss();
            }
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
    ionViewDidEnter() {
        this.slidePresentacion.update();
        this.slidePresentacion.lockSwipes(true);
    }
    onLista() {
        this.slidePresentacion.lockSwipes(false);
        this.slidePresentacion.slidePrev(400);
        this.slidePresentacion.lockSwipes(true);
        this.limpiarCliente();
    }
    onFormulario() {
        this.ionContenido.scrollToTop(200);
        this.slidePresentacion.lockSwipes(false);
        this.slidePresentacion.slideNext(400);
        this.slidePresentacion.lockSwipes(true);
    }
    onSeleccionarCliente(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.cliente.IdCliente = this.clienteLista[index]['IdCliente'];
            this.cliente.Cliente = this.clienteLista[index]['Cliente'];
            this.cliente.DniRuc = this.clienteLista[index]['DniRuc'];
            this.cliente.Direccion = this.clienteLista[index]['Direccion'];
            yield this.modalController.dismiss(this.cliente);
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
    limpiarCliente() {
        this.cliente = {
            Cliente: "",
            DniRuc: "",
            Direccion: "",
        };
    }
    onAgregar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cliente.DniRuc.trim() == '' || this.cliente.DniRuc.trim().length < 8) {
                this.mostrarMensajeBottom('ERROR: Complete correctamente en DNI o RUC.', 2500, 'danger');
                return;
            }
            if (this.cliente.Cliente.trim() == '') {
                this.mostrarMensajeBottom('ERROR: Complete correctamente el nombre del cliente.', 2500, 'danger');
                return;
            }
            this.loaderToShow = yield this.loadingController.create({
                message: 'Agregando Cliente...',
                spinner: 'dots',
                backdropDismiss: false,
                mode: 'ios',
            });
            this.loaderToShow.present();
            try {
                let respuesta = yield this.dataService.postCliente(this.cliente.DniRuc, this.cliente.Cliente.toUpperCase(), this.cliente.Direccion);
                if (respuesta.data.success) {
                    this.mostrarMensajeBottom("Cliente  agregado correctamente.", 2000, "success");
                    this.cliente.IdCliente = respuesta.data.idCliente;
                    yield this.modalController.dismiss(this.cliente);
                }
                else {
                    this.mostrarMensajeBottom("Ya existe el cliente ingresado.", 2000, "danger");
                }
                this.loaderToShow.dismiss();
            }
            catch (error) {
                this.loaderToShow.dismiss();
            }
        });
    }
    onCancelar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.onLista();
            this.slidingItem.close();
            this.DniRuc = '';
        });
    }
};
ClientePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__.ClienteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
ClientePage.propDecorators = {
    slidePresentacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slidePresentacion', { static: false },] }],
    slidingItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slidingItem', { static: false },] }],
    ionContenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['ionContentido', { static: false },] }]
};
ClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cliente',
        template: _raw_loader_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientePage);



/***/ }),

/***/ 8536:
/*!**********************************************************************!*\
  !*** ./src/app/modals/configuracion/configuracion-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPageRoutingModule": () => (/* binding */ ConfiguracionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion.page */ 6591);




const routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionPage
    }
];
let ConfiguracionPageRoutingModule = class ConfiguracionPageRoutingModule {
};
ConfiguracionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfiguracionPageRoutingModule);



/***/ }),

/***/ 1481:
/*!**************************************************************!*\
  !*** ./src/app/modals/configuracion/configuracion.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPageModule": () => (/* binding */ ConfiguracionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuracion-routing.module */ 8536);
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page */ 6591);







let ConfiguracionPageModule = class ConfiguracionPageModule {
};
ConfiguracionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionPageRoutingModule
        ],
        declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_1__.ConfiguracionPage]
    })
], ConfiguracionPageModule);



/***/ }),

/***/ 6591:
/*!************************************************************!*\
  !*** ./src/app/modals/configuracion/configuracion.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracionPage": () => (/* binding */ ConfiguracionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_configuracion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuracion.page.html */ 470);
/* harmony import */ var _configuracion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.page.scss */ 5845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let ConfiguracionPage = class ConfiguracionPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
ConfiguracionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ConfiguracionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-configuracion',
        template: _raw_loader_configuracion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuracion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfiguracionPage);



/***/ }),

/***/ 932:
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteService": () => (/* binding */ ClienteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let ClienteService = class ClienteService {
    constructor() {
        this.servidor = "http://192.168.0.5/";
    }
};
ClienteService.ctorParameters = () => [];
ClienteService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ClienteService);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interceptors_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interceptors/interceptor.service */ 2309);
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario.service */ 5763);






let DataService = class DataService {
    constructor(interceptorService, usuarioService, alertController) {
        this.interceptorService = interceptorService;
        this.usuarioService = usuarioService;
        this.alertController = alertController;
        this.servidorNetFactura = "http://app.factura.vip/api/client/";
        this.servidorNet = "http://192.168.0.4/api/restapi.php/";
        this.usuario = "admin";
    }
    getDominio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let repuestaUsuario = yield this.usuarioService.getUsuario();
            if (repuestaUsuario.value != null) {
                let dominio = JSON.parse(repuestaUsuario.value).dominio;
                this.usuario = JSON.parse(repuestaUsuario.value).usuario;
                this.servidorNet = dominio + "/api/restapi.php/";
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'No se el dominio correctamente, por favor renicie la app',
                    backdropDismiss: false,
                    mode: 'ios',
                    buttons: [
                        {
                            cssClass: 'primarybtn',
                            text: 'Salir',
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                                navigator['app'].exitApp();
                            }),
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    validarToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let repuestaUsuario = yield this.usuarioService.getUsuario();
            if (repuestaUsuario.value != null) {
                let token = JSON.parse(repuestaUsuario.value).token;
                (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = 'Bearer ' + token;
            }
            else {
                (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = '';
            }
            return;
        });
    }
    //Rutas Cliente
    getClientes(campo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //await this.validarToken()
            yield this.getDominio();
            let config = {
                params: {
                    dni: campo,
                }
            };
            const path = this.servidorNet + "rest/cliente";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path, config);
        });
    }
    //Rutas Cliente Para Validar
    getClientesValidate(busqueda, busquedaId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.validarToken();
            let parametroBusqueda = busqueda.trim() != '' ? '&filter[where][DniRuc]=' + busqueda : '';
            let parametroBusquedaId = busquedaId.trim() != '' ? '&filter[where][IdCliente]=' + busquedaId : '';
            const path = this.servidorNetFactura + "clientes?filter[limit]=1" + parametroBusqueda + parametroBusquedaId + "&filter[order]=DniRuc%20ASC";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    postCliente(DniRuc, Cliente, Direccion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/clientes";
            let data = {
                ruc: DniRuc,
                nombre: Cliente,
                direccion: Direccion
            };
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
        });
    }
    getClienteData(dniRuc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.validarToken();
            const path = this.servidorNetFactura + "consulta/dniruc/" + dniRuc;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    getCategorias(busqueda) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/categorias";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    //Rutas Productos
    getProductosCategoria(IdProductoCategoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/productos/categoria?IdProductoCategoria=" + IdProductoCategoria;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    getProductoBuscador(Producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/productos/categoria?q=" + encodeURIComponent(Producto);
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    //Rutas PreOrden
    getPreordenes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preorden/all";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    getImpresoraPrincipal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preorden/principal";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    getPreorden(IdPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preorden/" + IdPreOrden;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    getPreordenDet(IdPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preordendet/" + IdPreOrden;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    postPreorden(idMesa, etiquetaMesa) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                IdMesa: idMesa,
                Usuario: this.usuario,
                EtiquetaMesa: etiquetaMesa
            };
            const path = this.servidorNet + "rest/preorden";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
        });
    }
    //Rutas Impresoras
    getImpresoras() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/impresoras";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
        });
    }
    //Rutas Detalle Preorden
    postDetallePreOrden(IdPreOrden, objPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                Cantidad: objPreOrden.Cantidad,
                IdProducto: objPreOrden.IdProducto,
                IdPreOrden: IdPreOrden,
                Precio: objPreOrden.PrecioContado,
                Indicacion: objPreOrden.Indicacion || null,
                Enviado: 0
            };
            const path = this.servidorNet + "rest/preordendet";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
        });
    }
    deleteDetallePreOrden(IdPreOrdenDet) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preordendet/delete/" + IdPreOrdenDet;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().delete(path);
        });
    }
    putCantidadAddDetPreOrd(IdPreOrdenDet) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                IdPreOrdenDet: IdPreOrdenDet
            };
            const path = this.servidorNet + "rest/add/preordendet";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().put(path, data);
        });
    }
    putCantidadRmDetPreOrd(IdPreOrdenDet) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                IdPreOrdenDet: IdPreOrdenDet
            };
            const path = this.servidorNet + "rest/rm/preordendet";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().put(path, data);
        });
    }
    putEstadoPreOrdenDet(IdPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            const path = this.servidorNet + "rest/preordendet/" + IdPreOrden;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().put(path);
        });
    }
    putCambiarMesa(IdPreOrden, Mesa) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                Mesa: Mesa
            };
            const path = this.servidorNet + "rest/cambiarmesa/" + IdPreOrden;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().put(path, data);
        });
    }
    putRealizarOrdenCliente(IdPreOrden, IdCliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                IdCliente: IdCliente
            };
            const path = this.servidorNet + "rest/preorden/" + IdPreOrden;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().put(path, data);
        });
    }
    deleteLimpiarMesa(idMesa, idPreOrden) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getDominio();
            let data = {
                IdMesa: idMesa,
                IdPreOrden: idPreOrden
            };
            const path = this.servidorNet + "rest/preordendelete";
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
        });
    }
    //Login
    postLogin(ruc, usuario, password) {
        let data = {
            ruc: ruc,
            Usuario: usuario,
            Password: password
        };
        const path = this.servidorNetFactura + "login";
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
    }
    //Empresas
    getEmpresas() {
        const path = this.servidorNetFactura + "empresas";
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(path);
    }
    postCambiarMesa(idMesa, idMesaNueva) {
        let data = {
            IdMesa: idMesa,
            IdMesaNueva: idMesaNueva
        };
        const path = this.servidorNet + "rest/cambiar/mesa";
        return axios__WEBPACK_IMPORTED_MODULE_0___default().post(path, data);
    }
};
DataService.ctorParameters = () => [
    { type: _interceptors_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.InterceptorService },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 5763:
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 6628);



let UsuarioService = class UsuarioService {
    constructor() { }
    setUsuario(token, usuario, empresa, dominio) {
        let data = {
            token: token,
            usuario: usuario,
            empresa: empresa,
            dominio: dominio
        };
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
            key: 'usuario',
            value: JSON.stringify(data),
        });
    }
    getUsuario() {
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'usuario' });
    }
    clearUsuario() {
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({
            key: 'usuario'
        });
    }
    setEmpresaDefecto(nombre, ruc, dominio) {
        let data = {
            nombre: nombre,
            ruc: ruc,
            dominio: dominio
        };
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
            key: 'empresa',
            value: JSON.stringify(data),
        });
    }
    getEmpresaDefecto() {
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'empresa' });
    }
};
UsuarioService.ctorParameters = () => [];
UsuarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: Montserrat-Light;\n  font-style: normal;\n  src: url('Montserrat-Light.ttf');\n}\n@font-face {\n  font-family: Montserrat-Medium;\n  font-style: normal;\n  src: url('Montserrat-Medium.ttf');\n}\n@font-face {\n  font-family: Montserrat-Regular;\n  font-style: normal;\n  src: url('Montserrat-Regular.ttf');\n}\n@font-face {\n  font-family: Montserrat-Bold;\n  font-style: normal;\n  src: url('Montserrat-Bold.ttf');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBRUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFBSjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBREo7QUFJRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUZKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUxpZ2h0O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1MaWdodC50dGYpO1xuICB9XG4gIFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1NZWRpdW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LU1lZGl1bS50dGYpO1xuICB9XG4gIFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0Zik7XG4gIH1cbiAgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQudHRmKTtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 9811:
/*!**************************************************!*\
  !*** ./src/app/modals/cliente/cliente.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".toolbar {\n  --background: #42d77d;\n}\n\n.buttonClose {\n  font-weight: bold;\n}\n\n.buttonBuscar {\n  border: 1px solid #3880ff;\n  border-radius: 7px;\n  background-color: #3880ff;\n}\n\n.buttonAgregar {\n  border: 1px solid #ffc409;\n  border-radius: 7px;\n  background-color: #ffc409;\n}\n\n.cardCliente {\n  margin-bottom: 5px;\n}\n\n.labelDniRuc {\n  color: black;\n  font-weight: bold;\n}\n\n.centrar {\n  display: flex;\n  justify-content: center;\n}\n\n.centrarEnd {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.headerTitulo {\n  margin-left: -15px;\n  font-weight: bold;\n}\n\n* {\n  font-family: Montserrat-Regular;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.contenedor {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\nion-button {\n  text-transform: capitalize;\n}\n\n.inputBusqueda {\n  --background: #FCEFEB;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.icono {\n  color: black;\n  margin-left: 10px;\n  font-size: 1.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksMEJBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICM0MmQ3N2Q7XG59XG4uYnV0dG9uQ2xvc2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b25CdXNjYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODgwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7ICAgIFxufVxuXG4uYnV0dG9uQWdyZWdhcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNDA5O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDA5OyBcbn1cblxuLmNhcmRDbGllbnRle1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxhYmVsRG5pUnVje1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRyYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZW50cmFyRW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oZWFkZXJUaXR1bG97XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4qIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICB9XG5cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1Rjc7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNztcbn1cblxuaW9uLWJ1dHRvbntcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlucHV0QnVzcXVlZGF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkNFRkVCO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbm97XG4gICAgLy9jb2xvcjogIzhCODc3RTtcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59Il19 */");

/***/ }),

/***/ 5845:
/*!**************************************************************!*\
  !*** ./src/app/modals/configuracion/configuracion.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmFjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 4027:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/cliente/cliente.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"buttonClose\" (touchend)=\"closeModal()\">\n        <ion-icon color=\"light\" slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"headerTitulo\">Cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-header>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"8\" class=\"centrar\">\n        <ion-input [(ngModel)]=\"DniRuc\" class=\"inputBusqueda\" placeholder=\"Ingrese DNI de cliente\" type=\"text\">\n          <ion-icon class=\"icono\" slot=\"start\" name=\"person\"></ion-icon>\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"2\" class=\"centrarEnd\">\n        <ion-buttons>\n          <ion-button (click)=\"onBuscarCliente()\" color=\"light\" class=\"buttonBuscar\">\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"2\" class=\"centrar\">\n        <ion-buttons>\n          <ion-button (click)=\"onFormulario()\" class=\"buttonAgregar\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content class=\"contenedor\" #ionContentido>\n  <ion-grid fixed>\n     <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides lines=\"none\" [options]=\"slideOpts\" #slidePresentacion>\n          <ion-slide>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-card class=\"ion-activatable ripple-parent cardCliente\" (click)=\"onSeleccionarCliente(i)\" *ngFor=\"let cliente of clienteLista; let i = index\">\n                    <ion-card-content>\n                       <ion-label>{{ cliente.Cliente }}</ion-label>\n                       <br>\n                       <ion-label class=\"labelDniRuc\">{{ cliente.DniRuc }}</ion-label>\n                       <ion-ripple-effect></ion-ripple-effect>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-slide>\n\n          <ion-slide>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-card>\n                    <ion-card-header>\n                      <ion-card-title>Nuevo Cliente</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ion-item-sliding #slidingItem>\n                        <ion-item-options side=\"start\">\n                          <ion-item-option (click)=\"onConsultarDniRuc()\">Buscar</ion-item-option>\n                        </ion-item-options>\n                        <ion-item>\n                          <ion-label position=\"floating\">RUC / DNI</ion-label>\n                          <ion-input type=\"text\" [(ngModel)]=\"cliente.DniRuc\"></ion-input>\n                        </ion-item>\n                      </ion-item-sliding>\n    \n                      <ion-item>\n                        <ion-label position=\"floating\">Nombres</ion-label>\n                        <ion-input type=\"text\" [(ngModel)]=\"cliente.Cliente\"></ion-input>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label position=\"floating\">Dirección</ion-label>\n                        <ion-input type=\"text\" [(ngModel)]=\"cliente.Direccion\"></ion-input>\n                      </ion-item>\n                      <br>\n                      <ion-button  (click)=\"onAgregar()\" color=\"success\" >\n                        Agregar\n                      </ion-button>\n                      <ion-button (click)=\"onCancelar()\" color=\"danger\" >\n                        Cancelar\n                      </ion-button>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 470:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/configuracion/configuracion.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"--background: white;\">\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title style=\"margin-left: -15px;\">Configuracion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map