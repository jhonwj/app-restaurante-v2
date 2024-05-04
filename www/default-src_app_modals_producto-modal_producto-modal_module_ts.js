(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["default-src_app_modals_producto-modal_producto-modal_module_ts"],{

/***/ 9642:
/*!************************************************************************!*\
  !*** ./src/app/modals/producto-modal/producto-modal-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoModalPageRoutingModule": () => (/* binding */ ProductoModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _producto_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-modal.page */ 4168);




const routes = [
    {
        path: '',
        component: _producto_modal_page__WEBPACK_IMPORTED_MODULE_0__.ProductoModalPage
    }
];
let ProductoModalPageRoutingModule = class ProductoModalPageRoutingModule {
};
ProductoModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoModalPageRoutingModule);



/***/ }),

/***/ 6763:
/*!****************************************************************!*\
  !*** ./src/app/modals/producto-modal/producto-modal.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoModalPageModule": () => (/* binding */ ProductoModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _producto_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-modal-routing.module */ 9642);
/* harmony import */ var _producto_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-modal.page */ 4168);







let ProductoModalPageModule = class ProductoModalPageModule {
};
ProductoModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoModalPageRoutingModule
        ],
        declarations: [_producto_modal_page__WEBPACK_IMPORTED_MODULE_1__.ProductoModalPage]
    })
], ProductoModalPageModule);



/***/ }),

/***/ 4168:
/*!**************************************************************!*\
  !*** ./src/app/modals/producto-modal/producto-modal.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoModalPage": () => (/* binding */ ProductoModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_producto_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./producto-modal.page.html */ 9730);
/* harmony import */ var _producto_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-modal.page.scss */ 4907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);








let ProductoModalPage = class ProductoModalPage {
    constructor(modalController, navController, navigationService, dataService, loadingController, alertController, toastController, usuarioService) {
        this.modalController = modalController;
        this.navController = navController;
        this.navigationService = navigationService;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.usuarioService = usuarioService;
        this.categorias = [];
        this.IdProductoCategoria = null;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 4,
            autoplay: false,
            spaceBetween: 20
        };
        this.productos = [];
        this.idMesa = null;
        this.cargando = false;
        this.urlEmpresa = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cargarCategorias();
            this.idMesa = this.navigationService.getIdOrden();
            //this.pedidoMesa = this.pedidoService.getPedidoProductos(this.idMesa).pedidos;
            //this.dataService.getClientesApi();
            let respuestaUsuario = yield this.usuarioService.getUsuario();
            if (respuestaUsuario.value != null) {
                this.urlEmpresa = JSON.parse(respuestaUsuario.value).dominio;
            }
        });
    }
    verificarExistencia(IdProducto) {
        return this.pedidos.some((pedido => pedido.IdProducto == IdProducto));
    }
    mostrarLoader(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    cargarProducto(idProductoCategoria, ProductoCategoria) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.cargando = false;
                this.productos = [];
                this.IdProductoCategoria = idProductoCategoria;
                this.ionContenido.scrollToTop(200);
                try {
                    let resultado = yield this.dataService.getProductosCategoria(idProductoCategoria);
                    this.productos = resultado.data;
                    this.productos.map((producto) => {
                        producto.Mostrar = false;
                        producto.Cantidad = 1;
                        producto.Indicacion = '';
                    });
                    this.cargando = true;
                }
                catch (error) {
                    this.cargando = false;
                    this.productos = [];
                }
            }), 200);
        });
    }
    buscarEmpresa(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (e.detail.value == '') {
                if (this.categorias.length != 0) {
                    this.IdProductoCategoria = this.categorias[0].IdProductoCategoria;
                    this.cargarProducto(this.categorias[0].IdProductoCategoria, this.categorias[0].ProductoCategoria);
                    return;
                }
            }
            try {
                this.cargando = false;
                this.productos = [];
                let buscadorRespuesta = yield this.dataService.getProductoBuscador(e.detail.value);
                this.productos = buscadorRespuesta.data;
                this.productos.map((producto) => {
                    producto.Mostrar = false;
                    producto.Cantidad = 1;
                    producto.Indicacion = '';
                });
                this.cargando = true;
            }
            catch (error) {
                this.cargando = false;
                this.productos = [];
            }
        });
    }
    cargarCategorias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cargando = false;
            try {
                let resultado = yield this.dataService.getCategorias('');
                this.categorias = resultado.data;
                if (this.categorias.length != 0) {
                    this.IdProductoCategoria = this.categorias[0].IdProductoCategoria;
                    this.cargarProducto(this.categorias[0].IdProductoCategoria, this.categorias[0].ProductoCategoria);
                }
            }
            catch (error) {
            }
        });
    }
    onAgregarPedido(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.verificarExistencia(this.productos[index].IdProducto)) {
                this.mostrarMensajeBottom("El producto ya ha sido agregado", 2000, "danger");
                return;
            }
            if (this.IdPreOrden != null) {
                yield this.mostrarLoader('Agregando...');
                try {
                    this.productos[index].Indicacion = ('' + this.productos[index].Indicacion).replace(new RegExp("'", 'g'), '');
                    this.productos[index].Indicacion = ('' + this.productos[index].Indicacion).replace(new RegExp('"', 'g'), '');
                    this.productos[index].Indicacion = ('' + this.productos[index].Indicacion).replace(new RegExp('\n', 'g'), '');
                    this.productos[index].Indicacion = ('' + this.productos[index].Indicacion).replace(new RegExp('\\'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), '');
                    this.productos[index].Indicacion = ('' + this.productos[index].Indicacion).toUpperCase();
                    let respuesta = yield this.dataService.postDetallePreOrden(this.IdPreOrden, this.productos[index]);
                    this.ocultarLoader();
                    if (respuesta.data.success == true) {
                        this.productos[index].IdPreOrden = this.IdPreOrden;
                        this.productos[index].Precio = this.productos[index].PrecioContado;
                        this.productos[index].IdPreOrdenDet = Number(respuesta.data.insertId);
                        this.pedidos.push(this.productos[index]);
                        this.onCerrarProducto(index);
                        this.mostrarMensajeBottom('¡' + this.productos[index].Producto + ' AGREGADO!', 1500, 'success');
                    }
                }
                catch (error) {
                    this.mostrarMensajeBottom('Error: No se agrego el producto', 1500, 'danger');
                    this.ocultarLoader();
                }
            }
        });
    }
    onAbrirCantidad(index) {
        if (this.verificarExistencia(this.productos[index].IdProducto)) {
            return;
        }
        this.productos.map((producto) => {
            if (producto.IdProducto != this.productos[index].IdProducto) {
                producto.Mostrar = false;
            }
        });
        this.productos[index].Mostrar = !this.productos[index].Mostrar;
        this.productos[index].Cantidad = 1;
        this.productos[index].Indicacion = '';
    }
    mostrarMensajeBottom(mensaje, duracion, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    mostrarOpciones(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'INDICACIONES COMUNES',
                mode: 'ios',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'PARA LLEVAR',
                        value: 'PARA LLEVAR',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        },
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'SIN PICANTE',
                        value: 'SIN PICANTE',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'SIN CEBOLLA',
                        value: 'SIN CEBOLLA',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'SIN ENSALADA',
                        value: 'SIN ENSALADA',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'SIN PAPAS',
                        value: 'SIN PAPAS',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'SIN CREMAS',
                        value: 'SIN CREMAS',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'PARTE:',
                        value: 'PARTE:',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'MAS CREMAS',
                        value: 'MAS CREMAS',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio7',
                        type: 'radio',
                        label: 'HELADA',
                        value: 'HELADA',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    },
                    {
                        name: 'radio8',
                        type: 'radio',
                        label: 'SIN HELAR',
                        value: 'SIN HELAR',
                        handler: (alertData) => {
                            this.productos[index].Indicacion = this.productos[index].Indicacion + " - " + alertData.value;
                            alert.dismiss();
                        }
                    }
                ],
                buttons: [
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        cssClass: 'primarybtn',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onMostrarProducto(index) {
        this.productos.map((producto) => {
            producto.Mostrar = false;
        });
        this.productos[index].Mostrar = true;
        this.productos[index].Cantidad = 1;
        this.productos[index].Indicacion = '';
    }
    onAdicionarCantidad(index) {
        this.productos[index].Cantidad++;
    }
    onReducirCantidad(index) {
        if (this.productos[index].Cantidad <= 1) {
            this.productos[index].Cantidad = 1;
        }
        else {
            this.productos[index].Cantidad--;
        }
    }
    onCerrarProducto(index) {
        this.productos[index].Mostrar = false;
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
};
ProductoModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService }
];
ProductoModalPage.propDecorators = {
    pedidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    IdPreOrden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    ionContenido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['ionContentido', { static: false },] }]
};
ProductoModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-producto-modal',
        template: _raw_loader_producto_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_producto_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductoModalPage);



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

/***/ 4907:
/*!****************************************************************!*\
  !*** ./src/app/modals/producto-modal/producto-modal.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".toolbar {\n  --background: #E40033;\n}\n\n.buttonClose {\n  font-weight: bold;\n}\n\n.labelCategoria {\n  color: black;\n  font-weight: bold;\n}\n\n.titulo {\n  font-weight: bold;\n  margin-left: -20px;\n}\n\n.cardProducto {\n  border-left: 10px solid #E40033;\n  margin-bottom: 10px;\n}\n\n.cardContentProducto {\n  margin-top: -15px;\n  margin-bottom: -15px;\n  background-color: white;\n  --background: white;\n}\n\n.rowProducto {\n  margin-top: 5px;\n}\n\n.cardCategoria {\n  background: #E8F8EE;\n}\n\n.contenedor {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\n.imagenCat {\n  width: 100px;\n}\n\n.labelProducto {\n  color: black;\n  font-weight: bold;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n}\n\n.labelExiste {\n  color: #C1012A;\n  font-weight: bold;\n}\n\n.labelPrecio {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #E40033;\n}\n\n.buttonFlecha {\n  color: #E40033;\n}\n\n.itemIndicaciones {\n  border: 1px solid #E40033;\n  border-radius: 5px;\n}\n\n.textAreaIndicaciones {\n  padding: 2px;\n}\n\n.iconLista {\n  color: #E40033;\n}\n\n.labelOpcionLista {\n  color: black;\n  font-weight: bold;\n}\n\n* {\n  font-family: Montserrat-Regular;\n}\n\nion-segment::-webkit-scrollbar {\n  display: none;\n}\n\nion-segment-button {\n  --color-checked: var(--ion-color-danger-contrast);\n  --indicator-color: var(--ion-color-danger);\n}\n\n.expand-wrapper {\n  transition: max-height 5s ease-out;\n  overflow: hidden;\n  height: auto;\n  border-top: 2px solid #E40033;\n  margin-top: 0px;\n}\n\n.collapsed {\n  display: none !important;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.labelCantidadTitulo {\n  font-size: 1.2rem;\n  color: black;\n}\n\n.labelCantidad {\n  color: black;\n  font-size: 40px;\n}\n\n.buttonCantidad {\n  font-size: 40px;\n  color: #C1012A;\n}\n\n.imagenProducto {\n  border-radius: 10px;\n  overflow: hidden;\n  height: 20vw;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.buttonAgregar {\n  text-transform: none;\n  --background: #C1012A;\n  color: white;\n  font-weight: bold;\n}\n\n.centrarIzq {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.colorBlancoFondo {\n  background-color: white;\n  --background: white;\n}\n\n.colorGrisFondo {\n  background-color: #F5F5F7;\n  --background: #F5F5F7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksK0JBQUE7QUFESjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFLQTtFQUNJLGlEQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRkE7O0FBS0E7RUFDQSx3QkFBQTtBQUZBOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBRko7O0FBS0E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBRkoiLCJmaWxlIjoicHJvZHVjdG8tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTQwMDMzO1xufVxuXG4uYnV0dG9uQ2xvc2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYWJlbENhdGVnb3JpYXtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXR1bG97XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4uY2FyZFByb2R1Y3Rve1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNFNDAwMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmRDb250ZW50UHJvZHVjdG97XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnJvd1Byb2R1Y3Rve1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuXG4uY2FyZENhdGVnb3JpYXtcbiAgICBiYWNrZ3JvdW5kOiAjRThGOEVFO1xufVxuXG4uY29udGVuZWRvciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY3O1xuICAgIGJhY2tncm91bmQ6ICNGNUY1Rjc7XG59XG5cbi5pbWFnZW5DYXR7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubGFiZWxQcm9kdWN0b3tcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5sYWJlbEV4aXN0ZXtcbiAgICBjb2xvcjogI0MxMDEyQTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxhYmVsUHJlY2lve1xuICAgIGZvbnQtc2l6ZTogMS4xMHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0U0MDAzMztcbn1cblxuLmJ1dHRvbkZsZWNoYXtcbiAgICBjb2xvcjogI0U0MDAzMztcbn1cblxuXG4uaXRlbUluZGljYWNpb25lc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTQwMDMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG59XG5cbi50ZXh0QXJlYUluZGljYWNpb25lc3tcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi5pY29uTGlzdGF7XG4gICAgY29sb3I6ICNFNDAwMzM7XG59XG5cbi5sYWJlbE9wY2lvbkxpc3Rhe1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgfVxuICBcblxuaW9uLXNlZ21lbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbmlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QpO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgfVxuXG4uZXhwYW5kLXdyYXBwZXIge1xudHJhbnNpdGlvbjogbWF4LWhlaWdodCA1cyBlYXNlLW91dDtcbm92ZXJmbG93OiBoaWRkZW47XG5oZWlnaHQ6IGF1dG87XG5ib3JkZXItdG9wOiAycHggc29saWQgI0U0MDAzMztcbm1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNvbGxhcHNlZCB7XG5kaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50cmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxhYmVsQ2FudGlkYWRUaXR1bG97XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IGJsYWNrOyBcbn1cblxuLmxhYmVsQ2FudGlkYWR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmJ1dHRvbkNhbnRpZGFke1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjojQzEwMTJBXG59XG5cbi5pbWFnZW5Qcm9kdWN0b3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmJ1dHRvbkFncmVnYXJ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQzEwMTJBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlbnRyYXJJenF7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmNvbG9yQmxhbmNvRm9uZG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbG9yR3Jpc0ZvbmRve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1Rjc7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY3O1xufSJdfQ== */");

/***/ }),

/***/ 9730:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/producto-modal/producto-modal.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-button (touchend)=\"closeModal()\">\n        <ion-icon style=\"font-weight: bold; color: white;\" slot=\"icon-only\" name=\"close-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" class=\"titulo\">Añadir producto</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (touchend)=\"closeModal()\" style=\"color:white; font-weight: bold;\">\n        Cerrar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-header>\n<ion-grid fixed class=\"colorBlancoFondo\">\n  <ion-row class=\"colorBlancoFondo\">\n    <ion-col size=\"12\">\n      <ion-searchbar class=\"colorBlancoFondo\" placeholder=\"Buscar Producto\" debounce=\"800\" (ionChange)=\"buscarEmpresa($event)\"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"colorBlancoFondo\">\n    <ion-col size=\"12\">\n      <ion-segment scrollable value=\"{{IdProductoCategoria}}\">\n        <ion-segment-button (click)=\"cargarProducto(categoria.IdProductoCategoria,categoria.ProductoCategoria)\" *ngFor=\"let categoria of categorias\" value=\"{{categoria.IdProductoCategoria}}\">\n          <ion-label class=\"labelCategoria\">{{categoria.ProductoCategoria}}</ion-label>\n        </ion-segment-button>\n    </ion-segment> \n    </ion-col>   \n  </ion-row>\n</ion-grid>\n</ion-header>\n\n<ion-content class=\"contenedor\" #ionContentido>\n  <ion-grid fixed>\n    <ion-row *ngIf=\"!cargando\" style=\"margin-top: 40px;\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <img src=\"assets/images/loading.gif\" width=\"50px\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card *ngFor=\"let producto of productos; let i = index\" class=\"cardProducto\">\n          <ion-card-content class=\"cardContentProducto\">\n            <ion-row class=\"rowProducto\" (click)=\"onAbrirCantidad(i)\">\n              <ion-col size=\"3\">\n                <img class=\"imagenProducto\" onerror=\"this.src='assets/images/iconproducto.png';\" src=\"{{producto.Imagen!= null && producto.Imagen!=''?urlEmpresa+'/resources/images/productos/'+producto.Imagen:'assets/images/iconproducto.png'}}\">\n              </ion-col>\n              <ion-col size=\"5\" class=\"centrarIzq\">\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-label class=\"labelProducto\">\n                      {{producto.Producto}}\n                    </ion-label>\n                    <br>\n                    <ion-label *ngIf=\"verificarExistencia(producto.IdProducto)\" class=\"labelExiste\">¡Ya esta agregado!</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n\n              \n              <ion-col size=\"4\" class=\"centrar\">\n                <ion-label class=\"labelPrecio\">\n                  {{producto.PrecioContado | currency:'PEN':'S/ ':'1.2-2'}}\n                </ion-label>\n              </ion-col>\n\n              <!--<ion-col size=\"1\" class=\"centrar\">\n                <ion-buttons *ngIf=\"!producto.Mostrar\">\n                  <ion-button [disabled]=\"verificarExistencia(producto.IdProducto)\" (click)=\"onMostrarProducto(i)\" class=\"buttonFlecha\">\n                    <ion-icon slot=\"icon-only\" name=\"chevron-down-circle-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n                <ion-buttons *ngIf=\"producto.Mostrar\">\n                  <ion-button [disabled]=\"verificarExistencia(producto.IdProducto)\" (click)=\"onCerrarProducto(i)\" class=\"buttonFlecha\">\n                    <ion-icon slot=\"icon-only\" name=\"chevron-up-circle-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-col>-->\n\n            </ion-row>\n            <ion-row class='expand-wrapper' [class.collapsed]=\"!producto.Mostrar\">\n              <ion-col size=\"9\">\n                <ion-item lines=\"none\" class=\"itemIndicaciones\">\n                  <ion-label position=\"stacked\">Indicaciones especiales:</ion-label>\n                  <ion-textarea [(ngModel)]=\"producto.Indicacion\" rows=\"4\" class=\"textAreaIndicaciones\"  style=\"text-transform: uppercase;\" placeholder=\"Ejemplo: Sin Pimienta\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-row class=\"ion-text-center\">\n                  <ion-col size=\"12\" class=\"ion-text-center\">\n                      <ion-button fill=\"clear\" (click)=\"mostrarOpciones(i)\">\n                        <ion-icon class=\"iconLista\" slot=\"icon-only\" name=\"list\"></ion-icon>\n                      </ion-button>\n                    <ion-label class=\"labelOpcionLista\">Opción</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n    \n              <ion-col size=\"12\">\n                <ion-row>\n                  <ion-col size=\"3\">\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-row>\n                      <ion-col size=\"12\" class=\"centrar\">\n                        <ion-label class=\"labelCantidadTitulo\">Cantidad</ion-label>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"4\" class=\"centrar\">\n                        <ion-button class=\"no-ripple\" color=\"danger\" fill=\"clear\" [disabled]=\"producto.cantidad==1\" (touchend)=\"onReducirCantidad(i)\">\n                          <ion-icon slot=\"icon-only\" class=\"buttonCantidad\" name=\"remove-circle\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                      <ion-col size=\"4\" class=\"ion-text-center\">\n                        <ion-label class=\"labelCantidad\">{{producto.Cantidad}}</ion-label>  \n                      </ion-col>\n                      <ion-col size=\"4\" class=\"centrar\">\n                        <ion-button class=\"no-ripple\" color=\"danger\" fill=\"clear\" [disabled]=\"producto.cantidad==30\" (touchend)=\"onAdicionarCantidad(i)\">\n                          <ion-icon slot=\"icon-only\" class=\"buttonCantidad\"  name=\"add-circle\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                    </ion-row>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n    \n              <ion-col size=\"12\">\n                <ion-button class=\"buttonAgregar\" (click)=\"onAgregarPedido(i)\" expand=\"block\">\n                  Agregar\n                </ion-button>\n                <br>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_producto-modal_producto-modal_module_ts.js.map