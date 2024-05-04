(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["src_app_pages_principal_mesa_mesa_module_ts"],{

/***/ 4253:
/*!*************************************************************!*\
  !*** ./src/app/pages/principal/mesa/mesa-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesaPageRoutingModule": () => (/* binding */ MesaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mesa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesa.page */ 8518);




const routes = [
    {
        path: '',
        component: _mesa_page__WEBPACK_IMPORTED_MODULE_0__.MesaPage
    }
];
let MesaPageRoutingModule = class MesaPageRoutingModule {
};
MesaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesaPageRoutingModule);



/***/ }),

/***/ 3007:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/mesa/mesa.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesaPageModule": () => (/* binding */ MesaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _mesa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesa-routing.module */ 4253);
/* harmony import */ var _mesa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesa.page */ 8518);
/* harmony import */ var src_app_modals_producto_modal_producto_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/producto-modal/producto-modal.module */ 6763);








let MesaPageModule = class MesaPageModule {
};
MesaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mesa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesaPageRoutingModule, src_app_modals_producto_modal_producto_modal_module__WEBPACK_IMPORTED_MODULE_2__.ProductoModalPageModule,
        ],
        declarations: [_mesa_page__WEBPACK_IMPORTED_MODULE_1__.MesaPage]
    })
], MesaPageModule);



/***/ }),

/***/ 8518:
/*!***************************************************!*\
  !*** ./src/app/pages/principal/mesa/mesa.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesaPage": () => (/* binding */ MesaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mesa.page.html */ 384);
/* harmony import */ var _mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesa.page.scss */ 6155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_modals_cliente_cliente_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/cliente/cliente.page */ 2589);
/* harmony import */ var src_app_modals_producto_modal_producto_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/producto-modal/producto-modal.page */ 4168);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var src_app_services_impresora_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/impresora.service */ 5399);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);











let MesaPage = class MesaPage {
    constructor(navController, modalController, navigationService, impresoraService, dataService, loadingController, toastController, alertController, usuarioService) {
        this.navController = navController;
        this.modalController = modalController;
        this.navigationService = navigationService;
        this.impresoraService = impresoraService;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.usuarioService = usuarioService;
        this.idPreOrden = null;
        this.pedidos = [];
        this.pedidosRealizados = [];
        this.clientePedido = {
            IdCliente: null,
            Cliente: "",
            DniRuc: "",
            Direccion: "",
        };
        this.ocupado = null;
        this.tituloMesa = '';
        this.processPedido = false;
        this.totalMonto = 0.00;
        this.accionEstado = 0;
        this.mesero = '';
        this.impresoras = [];
        this.impresoraComanderaGeneral = [];
        this.urlEmpresa = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let respuestaUsuario = yield this.usuarioService.getUsuario();
            if (respuestaUsuario.value != null) {
                this.urlEmpresa = JSON.parse(respuestaUsuario.value).dominio;
            }
            yield this.mostrarLoader('Cargando orden...');
            this.idPreOrden = this.navigationService.getIdOrden();
            if (this.idPreOrden == null) {
                this.ocultarLoader();
                this.mostrarMensajeBottom('Error en la obtencion de orden', 2000, 'danger');
                this.onIrMesas();
            }
            try {
                let respuestaImpresoras = yield this.dataService.getImpresoras();
                this.impresoras = respuestaImpresoras.data;
                this.impresoraComanderaGeneral = respuestaImpresoras.data.filter(item => item.escomandera === 1);
                this.impresoraComanderaGeneral = respuestaImpresoras.data.filter(item => item.escomandera === 1);
                let respuestaPreOrden = yield this.dataService.getPreordenDet(this.idPreOrden);
                let detallePreorden = respuestaPreOrden.data.VePreOrdenDet || [];
                this.tituloMesa = respuestaPreOrden.data.EtiquetaMesa;
                this.mesero = respuestaPreOrden.data.UsuarioReg;
                let IdCliente = respuestaPreOrden.data.IdCliente;
                this.ocupado = IdCliente;
                if (IdCliente != null) {
                    this.clientePedido.IdCliente = respuestaPreOrden.data.IdCliente;
                    this.clientePedido.Cliente = respuestaPreOrden.data.Cliente;
                    this.clientePedido.DniRuc = respuestaPreOrden.data.DniRuc;
                    this.clientePedido.Direccion = respuestaPreOrden.data.Direccion;
                }
                else {
                    this.clientePedido.IdCliente = '6378';
                    this.clientePedido.Cliente = 'CLIENTE VARIOS';
                }
                if (respuestaPreOrden.data.Estado == 1) {
                    this.mostrarMensajeBottom('La orden de la mesa seleccionada fue completada', 2500, 'warning');
                    this.ocultarLoader();
                    this.onIrMesas();
                    return;
                }
                detallePreorden.map((detPreOr) => {
                    if (detPreOr.Enviado == 0) {
                        detPreOr.estadoBtnAdd = false;
                        detPreOr.estadoBtnRm = false;
                        this.pedidos.push(detPreOr);
                    }
                    else if (detPreOr.Enviado == 1) {
                        this.accionEstado = 1;
                        this.pedidosRealizados.push(detPreOr);
                    }
                });
                this.ocultarLoader();
            }
            catch (error) {
                console.log(error);
                this.mostrarMensajeBottom('Error en la obtencion de orden', 2000, 'danger');
                this.onIrMesas();
                this.ocultarLoader();
            }
        });
    }
    mostrarLoader(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loaderToShow = yield this.loadingController.create({
                message: mensaje,
                spinner: 'circles',
                backdropDismiss: false,
                mode: 'ios',
                cssClass: "loaderMesa"
            });
            this.loaderToShow.present();
        });
    }
    ocultarLoader() {
        this.loaderToShow.dismiss();
    }
    onIrMesas() {
        this.navigationService.setIdOrden(null);
        this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
    }
    onModalCliente() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_cliente_cliente_page__WEBPACK_IMPORTED_MODULE_2__.ClientePage,
                componentProps: {},
                backdropDismiss: false
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data !== null) {
                    this.clientePedido = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    onRealizarPedido() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            this.processPedido = true;
            if (this.clientePedido.IdCliente == null) {
                this.mostrarMensajeBottom('Para realizar el pedido se necesita seleccionar el cliente.', 2500, 'warning');
                this.processPedido = false;
                return;
            }
            if (this.pedidos.length == 0) {
                this.mostrarMensajeBottom('No hay productos para el pedido.', 2500, 'warning');
                this.processPedido = false;
                return;
            }
            if (this.idPreOrden == null) {
                this.mostrarMensajeBottom('No hay orden ', 2500, 'warning');
                this.processPedido = false;
                return;
            }
            debugger;
            if (this.pedidosRealizados.length == 0 && this.pedidos.length != 0) {
                this.processPedido = true;
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'REALIZAR PEDIDO',
                    subHeader: '¿Está seguro?',
                    message: 'Se realizará pedido de productos con un monto total de: <strong>S/ ' + this.calcularTotalPedidos().toFixed(2) + '</strong>',
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondarybtn',
                            handler: () => {
                                this.processPedido = false;
                            }
                        },
                        {
                            text: 'Confirmar',
                            cssClass: 'primarybtn',
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                if (this.idPreOrden != null) {
                                    try {
                                        yield this.mostrarLoader('Realizando Orden...');
                                        let respuesta = yield this.dataService.putRealizarOrdenCliente(this.idPreOrden, this.clientePedido.IdCliente);
                                        if (respuesta.data != 0) {
                                            this.onIrMesas();
                                            this.processPedido = false;
                                            this.distribuirComanda(1, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                                            setTimeout(() => {
                                                this.distribuirComandaGeneral(4, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                                            }, 1000);
                                        }
                                        else {
                                            this.onIrMesas();
                                            this.processPedido = false;
                                            this.mostrarMensajeBottom('La orden la fue enviada por otro mesero', 2500, 'danger');
                                        }
                                        this.ocultarLoader();
                                    }
                                    catch (error) {
                                        this.ocultarLoader();
                                        this.mostrarMensajeBottom('ERROR: Se produjo un error intente nuevamente.', 2500, 'danger');
                                        //this.onIrMesas();
                                        this.processPedido = false;
                                    }
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            else if (this.pedidosRealizados.length != 0 && this.pedidos.length != 0) {
                this.processPedido = true;
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'AÑADIR PRODUCTOS AL PEDIDO',
                    subHeader: '¿Está seguro?',
                    message: 'Se añadirá productos con un monto total de: <strong>S/ ' + this.calcularTotalPedidos().toFixed(2) + '</strong>',
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondarybtn',
                            handler: () => {
                                this.processPedido = false;
                            }
                        },
                        {
                            text: 'Confirmar',
                            cssClass: 'primarybtn',
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                if (this.idPreOrden != null) {
                                    try {
                                        yield this.mostrarLoader('Añadiendo a la orden...');
                                        let respuestaEstado = yield this.dataService.putEstadoPreOrdenDet(this.idPreOrden);
                                        if (respuestaEstado.data != 0) {
                                            //Distribuir Comanda 2
                                            this.processPedido = false;
                                            this.onIrMesas();
                                            this.distribuirComanda(2, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                                            setTimeout(() => {
                                                this.distribuirComandaGeneral(4, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                                            }, 300);
                                        }
                                        this.ocultarLoader();
                                    }
                                    catch (error) {
                                        this.ocultarLoader();
                                        this.mostrarMensajeBottom('ERROR: Se produjo un error intente nuevamente.', 2500, 'danger');
                                        this.onIrMesas();
                                        this.processPedido = false;
                                    }
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    distribuirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let comanda = [];
                let pedidosComanda = [...pedidos];
                if (this.impresoras.length > 0) {
                    pedidosComanda.map((pe) => {
                        let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora);
                        if (impresora != undefined) {
                            let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora);
                            if (index === undefined) {
                                impresora.Productos = [];
                                comanda.push(impresora);
                            }
                        }
                    });
                    pedidosComanda.map((pe) => {
                        let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
                        if (index !== -1) {
                            comanda[index].Productos.push(pe);
                        }
                    });
                    let newcomanda = [...comanda];
                    //console.log("normal:", newcomanda);
                    newcomanda.map((c) => {
                        this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
                    });
                    this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
                }
            }
            catch (error) {
                console.log(error);
                this.mostrarMensajeBottom('ERROR: No se imprimioo la comanda de la mesa. ' + Mesa, 3000, 'danger');
            }
        });
    }
    distribuirComandaPrincipalPreOrden(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let comanda = [];
                let pedidosComanda = [...this.pedidosRealizados];
                pedidosComanda.map((pe) => {
                    let impresora = this.impresoras.find((impr) => impr.EsPrincipal == 1);
                    if (impresora != undefined) {
                        let index = comanda.find((c) => c.EsPrincipal == 1);
                        if (index === undefined) {
                            impresora.Productos = [];
                            comanda.push(impresora);
                        }
                    }
                });
                pedidosComanda.map((pe) => {
                    let index = comanda.findIndex((c) => c.EsPrincipal == 1);
                    if (index !== -1) {
                        comanda[index].Productos.push(pe);
                    }
                });
                let newcomanda = [...comanda];
                newcomanda.map((c) => {
                    this.impresoraService.imprimirPreOrden(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidosComanda, c.NombreImpresora, c.Ip, c.Puerto);
                });
                this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
            }
            catch (error) {
                console.log(error);
                this.mostrarMensajeBottom(`${error}` + Mesa, 3000, 'danger');
            }
        });
    }
    distribuirComandaGeneral(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let comanda = [];
                if (this.impresoras.length > 0) {
                    let idImpresoraCocina = this.impresoras.
                        filter(element => element.ImprimirComandGeneral == 1).
                        map(impresora => { return impresora.IdImpresora; });
                    console.log(idImpresoraCocina);
                    let newPedidos = [...pedidos.filter(v => idImpresoraCocina.includes(v.IdImpresora))];
                    newPedidos.map((pe) => {
                        let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora);
                        if (impresora != undefined) {
                            let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora);
                            if (index === undefined) {
                                impresora.Productos = [];
                                comanda.push(impresora);
                            }
                        }
                    });
                    newPedidos.map((pe) => {
                        let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
                        if (index !== -1) {
                            comanda[index].Productos.push(pe);
                        }
                    });
                    const impresoraComandera = this.impresoras.find(item => item.escomandera === 1);
                    const arrayModificado = comanda.map(objeto => {
                        objeto.IdImpresora = impresoraComandera.IdImpresora;
                        objeto.Ip = impresoraComandera.Ip;
                        objeto.NombreImpresora = impresoraComandera.NombreImpresora;
                        return objeto;
                    });
                    let newObjeto = [this.impresoras.find(item => item.escomandera === 1)];
                    const resultado = arrayModificado.flatMap(elemento => elemento.Productos);
                    newObjeto[0].Productos = resultado;
                    console.log("arrayModificado", newObjeto);
                    newObjeto.map((c) => {
                        this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
                    });
                    this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
                }
            }
            catch (error) {
                console.log(error);
                this.mostrarMensajeBottom('ERROR: No se imprimioc la comanda de la mesa. ' + Mesa, 3000, 'danger');
            }
        });
    }
    distribuirComandaPrincipal(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let comanda = [];
                let newPedidos = [...pedidos];
                newPedidos.map((pe) => {
                    let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora);
                    if (impresora != undefined) {
                        let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora);
                        if (index === undefined) {
                            impresora.Productos = [];
                            comanda.push(impresora);
                        }
                    }
                });
                newPedidos.map((pe) => {
                    let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
                    if (index !== -1) {
                        comanda[index].Productos.push(pe);
                    }
                });
                const impresoraComandera = this.impresoraComanderaGeneral.find(item => item.EsPrincipal === 1);
                const arrayModificado = comanda.map(objeto => {
                    objeto.IdImpresora = impresoraComandera.IdImpresora;
                    objeto.Ip = impresoraComandera.Ip;
                    objeto.NombreImpresora = impresoraComandera.NombreImpresora;
                    return objeto;
                });
                let newObjeto = [this.impresoraComanderaGeneral.find(item => item.EsPrincipal === 1)];
                const resultado = arrayModificado.flatMap(elemento => elemento.Productos);
                newObjeto[0].Productos = resultado;
                console.log("arrayModificado", newObjeto);
                newObjeto.map((c) => {
                    this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
                });
                this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
            }
            catch (error) {
                console.log(error);
                this.mostrarMensajeBottom(`${error}` + Mesa, 3000, 'danger');
            }
        });
    }
    mostrarMensajeBottom(mensaje, duracion, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    onAdicionarCantidad(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.idPreOrden != null) {
                this.pedidos[index].estadoBtnAdd = true;
                yield this.mostrarLoader('Aumentando...');
                try {
                    let respuesta = yield this.dataService.putCantidadAddDetPreOrd(this.pedidos[index].IdPreOrdenDet);
                    if (respuesta.data.Cantidad) {
                        this.pedidos[index].Cantidad = respuesta.data.Cantidad;
                    }
                    this.ocultarLoader();
                    this.pedidos[index].estadoBtnAdd = false;
                }
                catch (error) {
                    this.pedidos[index].estadoBtnAdd = false;
                    this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger');
                    this.ocultarLoader();
                }
            }
        });
    }
    onReducirCantidad(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.pedidos[index].Cantidad <= 1) {
                this.pedidos[index].Cantidad = 1;
            }
            else {
                if (this.idPreOrden != null) {
                    this.pedidos[index].estadoBtnRm = true;
                    yield this.mostrarLoader('Disminuyendo...');
                    try {
                        let respuesta = yield this.dataService.putCantidadRmDetPreOrd(this.pedidos[index].IdPreOrdenDet);
                        if (respuesta.data.Cantidad) {
                            this.pedidos[index].Cantidad = respuesta.data.Cantidad;
                        }
                        this.ocultarLoader();
                        this.pedidos[index].estadoBtnRm = false;
                    }
                    catch (error) {
                        this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger');
                        this.ocultarLoader();
                        this.pedidos[index].estadoBtnRm = false;
                    }
                }
            }
        });
    }
    calcularTotalRealizados() {
        let subtotal = this.pedidosRealizados.reduce((acc, pedido) => {
            return acc + (pedido.Cantidad * pedido.Precio);
        }, 0.00);
        return subtotal;
    }
    calcularTotalPedidos() {
        let subtotal = this.pedidos.reduce((acc, pedido) => {
            return acc + (pedido.Cantidad * pedido.Precio);
        }, 0.00);
        return subtotal;
    }
    onModalProducto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_modals_producto_modal_producto_modal_page__WEBPACK_IMPORTED_MODULE_3__.ProductoModalPage,
                componentProps: {
                    pedidos: this.pedidos,
                    IdPreOrden: this.idPreOrden
                },
                backdropDismiss: false
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    onRemoveProducto(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'QUITAR PRODUCTO',
                subHeader: 'Se quitará el producto: ' + this.pedidos[index].Producto,
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
                        text: 'Confirmar',
                        cssClass: 'primarybtn',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.idPreOrden != null) {
                                yield this.mostrarLoader('Quitando...');
                                try {
                                    let respuesta = yield this.dataService.deleteDetallePreOrden(this.pedidos[index].IdPreOrdenDet);
                                    console.log(respuesta);
                                    if (respuesta.data == true) {
                                        this.pedidos.splice(index, 1);
                                    }
                                    this.ocultarLoader();
                                }
                                catch (error) {
                                    this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger');
                                    this.ocultarLoader();
                                }
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    onReimprimirComanda() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'IMPRIMIR PRE CUENTA',
                subHeader: 'Se enviará una pre cuenta de los productos solicitados',
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
                        text: 'Confirmar',
                        cssClass: 'primarybtn',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.idPreOrden != null) {
                                yield this.mostrarLoader('Imprimiendo...');
                                try {
                                    this.distribuirComandaPrincipalPreOrden(3, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidosRealizados);
                                    setTimeout(() => {
                                        this.ocultarLoader();
                                    }, 100);
                                }
                                catch (error) {
                                    setTimeout(() => {
                                        this.ocultarLoader();
                                    }, 100);
                                }
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    onMostrarIndicacionesNuevos(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.pedidos[index].Producto,
                subHeader: 'INDICACIONES:',
                message: (this.pedidos[index].Indicacion == null || ('' + this.pedidos[index].Indicacion).trim() == '') ? 'No cuenta con indicaciones' : this.pedidos[index].Indicacion,
                mode: 'ios',
                buttons: [
                    {
                        cssClass: 'primarybtn',
                        text: 'Cerrar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    onMostrarIndicacionesSolicitados(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.pedidosRealizados[index].Producto,
                subHeader: 'INDICACIONES:',
                message: (this.pedidosRealizados[index].Indicacion == null || ('' + this.pedidosRealizados[index].Indicacion).trim() == '') ? 'No cuenta con indicaciones' : this.pedidosRealizados[index].Indicacion,
                mode: 'ios',
                buttons: [
                    {
                        cssClass: 'primarybtn',
                        text: 'Cerrar',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
};
MesaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavigationService },
    { type: src_app_services_impresora_service__WEBPACK_IMPORTED_MODULE_5__.ImpresoraService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__.UsuarioService }
];
MesaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-mesa',
        template: _raw_loader_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MesaPage);



/***/ }),

/***/ 6155:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/mesa/mesa.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".toolbar {\n  --background: #E40033;\n}\n\n.centrar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.centrarMonto {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.labelTitulo {\n  color: black;\n  font-weight: bold;\n}\n\n.labelDividerMonto {\n  color: #E40033;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n.rowPrecio {\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: #E40033;\n}\n\n.labelCantidad {\n  color: black;\n  font-size: 1.3rem;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n* {\n  font-family: Montserrat-Regular;\n}\n\n.botonCliente {\n  border: 1px solid #42d77d;\n  border-radius: 7px;\n  background-color: #42d77d;\n}\n\n.buttonCantidad {\n  color: #C1012A;\n}\n\n.buttonRemove {\n  color: #C1012A;\n}\n\n.fabButtonProducto {\n  margin-bottom: -60px !important;\n}\n\n.toolbarFooter {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\n.botonProducto {\n  border: 1px solid #ffc409;\n  border-radius: 7px;\n  background-color: #ffc409;\n  margin-left: 5px !important;\n}\n\n.inputCliente {\n  --background: #FCEFEB;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.icono {\n  color: black;\n  margin-left: 10px;\n  font-size: 1.7rem;\n}\n\n.descrip {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-height: 16px;\n  max-height: 32px;\n  -webkit-box-orient: vertical;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.contenedorImagen {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-left: -18px;\n}\n\n.expand-wrapper {\n  transition: max-height 5s ease-out;\n  overflow: hidden;\n  height: auto;\n  border-top: 2px solid #ffc409;\n  margin-top: 5px;\n}\n\n.botonBuscar {\n  border: 1px solid #3880ff;\n  border-radius: 7px;\n  background-color: #3880ff;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n\n.centrarMargin {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 18px;\n}\n\n.centroFlex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.no-ripple {\n  --ripple-color: white;\n}\n\n.imagenProducto {\n  border-radius: 10px;\n  overflow: hidden;\n  width: 100%;\n  height: 23vw;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.cardCategoria {\n  background: #E8F8EE;\n}\n\n.contenedor {\n  --background: #F5F5F7;\n  background: #F5F5F7;\n}\n\nion-title {\n  font-weight: bold;\n  margin-left: -20px;\n}\n\n.botonRealizar {\n  --background: #E40033;\n  font-weight: bold;\n  text-transform: none;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.imagen {\n  border-radius: 10px;\n  overflow: hidden;\n  height: 15vw;\n  width: 15vw;\n  object-fit: cover;\n  object-position: center center;\n}\n\nion-item-divider {\n  min-height: 3px;\n}\n\nion-row {\n  padding: 0px 10px;\n}\n\nion-col {\n  padding: 7px 0px;\n}\n\nion-label {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.txt-bold {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.txt-free {\n  font-size: 18px;\n  font-weight: bold;\n  color: #009688;\n}\n\n.txt-total {\n  font-size: 30px;\n  font-weight: bold;\n  color: #E40033;\n}\n\n.btn-end {\n  height: 50px;\n  --background: #009688;\n  --border-radius: 15px !important;\n}\n\n.btn-plus {\n  --background: #f7594d;\n  --border-radius: 0px 9px 9px 0px;\n}\n\n.btn-minus {\n  --background: #f7594d;\n  --border-radius: 9px 0px 0px 9px;\n}\n\n.txt-mp {\n  --background: #b6b8c3;\n  padding-right: 0px !important;\n  padding-bottom: 0px !important;\n  top: 3px;\n  border-radius: 0px;\n  width: 30px;\n  height: 36px;\n  margin-bottom: 20px;\n}\n\nion-item {\n  --border-style: none;\n  padding: 0px 0px;\n}\n\n.item-inner {\n  padding-inline-end: 0px !important;\n  padding-inline-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBRUksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0MsdUJBQUE7RUFDQSxvQkFBQTtFQUFzQixxQkFBQTtFQUN0QixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQiw0QkFBQTtBQUcxQzs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBQUE7RUFDQSx3QkFBQTtBQUdBOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0FBSEo7O0FBT0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBSko7O0FBT0U7RUFDRSxlQUFBO0FBSko7O0FBTUU7RUFDRSxpQkFBQTtBQUhKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBREU7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FBSUo7O0FBREU7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FBSUo7O0FBREU7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FBTUoiLCJmaWxlIjoibWVzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiAjRTQwMDMzO1xufVxuXG4uY2VudHJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNlbnRyYXJNb250b3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxhYmVsVGl0dWxve1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGFiZWxEaXZpZGVyTW9udG97XG4gIGNvbG9yOiAjRTQwMDMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5yb3dQcmVjaW97XG4gIGZvbnQtc2l6ZTogMS4xMHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRTQwMDMzO1xufVxuXG4ubGFiZWxDYW50aWRhZHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIH1cblxuLmJvdG9uQ2xpZW50ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyZDc3ZDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyZDc3ZDsgICAgXG4gICBcbn1cblxuLmJ1dHRvbkNhbnRpZGFke1xuICBjb2xvcjojQzEwMTJBXG59XG5cbi5idXR0b25SZW1vdmV7XG4gIGNvbG9yOiNDMTAxMkFcbn1cblxuLmZhYkJ1dHRvblByb2R1Y3Rve1xuICBtYXJnaW4tYm90dG9tOiAtNjBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhckZvb3RlcntcbiAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY3O1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY3O1xufVxuXG4uYm90b25Qcm9kdWN0byB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmM0MDk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzQwOTsgIFxuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7IFxufVxuXG4uaW5wdXRDbGllbnRle1xuICAgIC0tYmFja2dyb3VuZDogI0ZDRUZFQjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25ve1xuICAgIC8vY29sb3I6ICM4Qjg3N0U7XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uZGVzY3JpcHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG4gICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyBtYXgtaGVpZ2h0OiAzMnB4OyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsXG59XG5cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250ZW5lZG9ySW1hZ2Vue1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XG59XG5cbi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA1cyBlYXNlLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmYzQwOTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuLmJvdG9uQnVzY2FyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmOyAgICBcbn1cblxuLmNvbGxhcHNlZCB7XG5tYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50cmFyTWFyZ2lue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7IFxufVxuXG4uY2VudHJvRmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxufVxuXG4ubm8tcmlwcGxlIHtcbiAgICAtLXJpcHBsZS1jb2xvcjogd2hpdGU7XG4gIH1cblxuLmltYWdlblByb2R1Y3Rve1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIzdnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG5cbi5jYXJkQ2F0ZWdvcmlhe1xuICAgIGJhY2tncm91bmQ6ICNFOEY4RUU7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNUY1Rjc7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNztcbn1cblxuaW9uLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuXG4uYm90b25SZWFsaXphciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTQwMDMzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vL0NBUlRcbiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW1hZ2Vue1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDE1dnc7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG5cbiAgaW9uLWl0ZW0tZGl2aWRlcntcbiAgICBtaW4taGVpZ2h0OjNweDtcbiAgfVxuICBpb24tcm93e1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIGlvbi1jb2x7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgfVxuICBpb24tbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC50eHQtYm9sZHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnR4dC1mcmVle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwOTY4ODtcbiAgfVxuICAudHh0LXRvdGFse1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0U0MDAzMztcbiAgfVxuICAuYnRuLWVuZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzAwOTY4ODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAuYnRuLXBsdXN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjc1OTRkO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4IDlweCA5cHggMHB4O1xuICAgIFxuICB9XG4gIC5idG4tbWludXN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjc1OTRkO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOXB4IDBweCAwcHggOXB4O1xuICAgIFxuICB9XG4gIC50eHQtbXB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYjZiOGMzO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICB0b3A6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gIH1cbiAgLml0ZW0taW5uZXJ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIH0iXX0= */");

/***/ }),

/***/ 384:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal/mesa/mesa.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" (touchend)=\"onIrMesas()\" default-href=\"\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"light\">\n      Mesa {{tituloMesa}}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"pedidosRealizados.length!=0\">\n      <ion-button (click)=\"onReimprimirComanda()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"print\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-header>\n  <ion-toolbar class=\"toolbar\">\n  <ion-grid fixed >\n    <ion-row >\n      <ion-col size=\"10\" class=\"centrar\">\n        <ion-input [(ngModel)]=\"clientePedido.Cliente\" class=\"inputCliente\" readonly placeholder=\"Seleccione cliente\" type=\"text\">\n          <ion-icon class=\"icono\" slot=\"start\" name=\"person\"></ion-icon>\n        </ion-input>\n      </ion-col>\n      <ion-col size=\"2\" class=\"centrar\">\n        <ion-buttons>\n          <ion-button [disabled]=\"ocupado!=null\" (touchend)=\"onModalCliente()\" color=\"light\" class=\"botonCliente\">\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\"  class=\"ion-text-center\">\n        <ion-label class=\"labelTitulo\">\n          Productos de la orden \n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n      <ion-row *ngIf=\"pedidosRealizados.length>0\">\n        <ion-item-divider>\n          <ion-col size=\"8\" class=\"ion-text-left\">\n            <ion-label class=\"labelTitulo\">\n              Productos solictados: \n            </ion-label>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-text-right\" class=\"centrarMonto\">\n            <ion-label *ngIf=\"pedidosRealizados.length!=0\" class=\"labelDividerMonto\"> {{calcularTotalRealizados() |currency:'PEN':'S/ ':'1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item-divider>\n      </ion-row>\n      <ion-row *ngFor=\"let item of pedidosRealizados; let i = index\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-activatable ripple-parent centrar\">\n              <ion-img (click)=\"onMostrarIndicacionesSolicitados(i)\" class=\"imagen\" onerror=\"this.src='assets/images/iconproducto.png';\" src=\"{{item.Imagen!= null && item.Imagen!=''?urlEmpresa+'/resources/images/productos/'+item.Imagen:'assets/images/iconproducto.png'}}\"></ion-img>\n              <ion-ripple-effect></ion-ripple-effect>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row style=\"font-size: 0.8rem; margin-bottom: 5px;\">{{item.Producto}}</ion-row>\n              <ion-row class=\"rowPrecio\">{{item.Precio |currency:'PEN':'S/ ':'1.2-2'}}</ion-row>\n            </ion-col>\n            <ion-col size=\"4\" class=\"centrar\">\n                  <ion-label class=\"labelCantidad\">{{item.Cantidad}}</ion-label>  \n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-item-divider *ngIf=\"pedidos.length>0\">\n          <ion-col size=\"8\" class=\"ion-text-left\">\n            <ion-label class=\"labelTitulo\">\n              Productos que se añadirán: \n            </ion-label>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-text-right\" class=\"centrarMonto\">\n            <ion-label *ngIf=\"pedidos.length!=0\" class=\"labelDividerMonto\"> + {{calcularTotalPedidos() |currency:'PEN':'S/ ':'1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item-divider>\n      </ion-row>\n \n\n      <ion-row *ngFor=\"let item of pedidos; let i = index\">\n        <ion-col>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-activatable ripple-parent centrar\">\n              <ion-img (click)=\"onMostrarIndicacionesNuevos(i)\" class=\"imagen\" onerror=\"this.src='assets/images/iconproducto.png';\" src=\"{{item.Imagen!= null && item.Imagen!=''?urlEmpresa+'/resources/images/productos/'+item.Imagen:'assets/images/iconproducto.png'}}\"></ion-img>\n              <ion-ripple-effect></ion-ripple-effect>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row style=\"font-size: 0.8rem; margin-bottom: 5px;\">{{item.Producto}}</ion-row>\n              <ion-row class=\"rowPrecio\">{{item.Precio |currency:'PEN':'S/ ':'1.2-2'}}</ion-row>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-buttons >\n                  <ion-button class=\"no-ripple\" fill=\"clear\" (click)=\"onReducirCantidad(i)\" [disabled]=\"item.estadoBtnRm\">\n                    <ion-icon slot=\"icon-only\" class=\"buttonCantidad\" name=\"remove-circle\"></ion-icon>\n                  </ion-button>\n\n                  <ion-label class=\"labelCantidad\">{{item.Cantidad}}</ion-label>  \n\n                  <ion-button class=\"no-ripple\" fill=\"clear\"  (click)=\"onAdicionarCantidad(i)\" [disabled]=\"item.estadoBtnAdd\">\n                    <ion-icon slot=\"icon-only\" class=\"buttonCantidad\" name=\"add-circle\"></ion-icon>\n                  </ion-button>\n              </ion-buttons>\n            </ion-col>\n            <ion-col size=\"1\">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button class=\"no-ripple\" fill=\"clear\"  (click)=\"onRemoveProducto(i)\">\n            <ion-icon slot=\"icon-only\" class=\"buttonRemove\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row> \n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" class=\"fabButtonProducto\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onModalProducto()\" color=\"warning\" >\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>   \n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"toolbarFooter\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-start txt-total\">Total</ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center txt-total\">{{calcularTotalRealizados() + calcularTotalPedidos()| currency:'PEN':'S/ ':'1.2-2'}}</ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-button [disabled]=\"processPedido || pedidos.length==0 \" expand=\"full\" (click)=\"onRealizarPedido()\" class=\"botonRealizar\">\n      <ion-col><ion-icon size=\"large\" name=\"checkmark\"></ion-icon></ion-col>\n      <ion-col class=\"txt-bold\" *ngIf=\"pedidosRealizados.length==0\">Realizar Orden</ion-col>\n      <ion-col class=\"txt-bold\" *ngIf=\"pedidosRealizados.length!=0\">Agregar a la Orden </ion-col>\n      <ion-col class=\"txt-bold\" *ngIf=\"pedidosRealizados.length==0\">{{calcularTotalPedidos() | currency:'PEN':'S/ ':'1.2-2'}}</ion-col>\n      <ion-col class=\"txt-bold\" *ngIf=\"pedidosRealizados.length!=0\">+ {{calcularTotalPedidos() | currency:'PEN':'S/ ':'1.2-2'}}</ion-col>\n    </ion-button>\n  </ion-toolbar>  \n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_principal_mesa_mesa_module_ts.js.map