import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { element } from 'protractor';
import { ClienteInterface } from 'src/app/interfaces/cliente.interface';
import { ProductoInterface } from 'src/app/interfaces/producto.interface';
import { ClientePage } from 'src/app/modals/cliente/cliente.page';
import { ProductoModalPage } from 'src/app/modals/producto-modal/producto-modal.page';
import { DataService } from 'src/app/services/data.service';
import { ImpresoraService } from 'src/app/services/impresora.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
})
export class MesaPage implements OnInit {
  public idPreOrden: number = null;
  public pedidos: any = [];
  public pedidosRealizados: any = [];
  public clientePedido: ClienteInterface = {
    IdCliente: null,
    Cliente: "",
    DniRuc: "",
    Direccion: "",
  }
  public impresoraComanderaPrincipal: any[]
  public ocupado = null;
  public tituloMesa: string = '';
  public processPedido: boolean = false;
  loaderToShow: any;
  public totalMonto: number = 0.00;
  public accionEstado: number = 0;
  public mesero: string = '';
  public impresoras: any = [];
  public impresoraComanderaGeneral: any = [];
  public urlEmpresa: string = '';
  constructor(public navController: NavController,
    public modalController: ModalController,
    public navigationService: NavigationService,
    public impresoraService: ImpresoraService,
    public dataService: DataService,
    private loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    private usuarioService: UsuarioService) { }
  ngOnInit() {
  }

  async ionViewWillEnter() {
    let respuestaUsuario = await this.usuarioService.getUsuario();
    if (respuestaUsuario.value != null) {
      this.urlEmpresa = JSON.parse(respuestaUsuario.value).dominio;
    }
    await this.mostrarLoader('Cargando orden...')
    this.idPreOrden = this.navigationService.getIdOrden();
    if (this.idPreOrden == null) {
      this.ocultarLoader();
      this.mostrarMensajeBottom('Error en la obtencion de orden', 2000, 'danger');
      this.onIrMesas()
    }
    try {
      let respuestaImpresoras = await this.dataService.getImpresoras();
      this.impresoras = respuestaImpresoras.data;
      this.impresoraComanderaGeneral = respuestaImpresoras.data.filter(item => item.escomandera === 1);
      this.impresoraComanderaGeneral = respuestaImpresoras.data.filter(item => item.escomandera === 1);

      let respuestaPreOrden = await this.dataService.getPreordenDet(this.idPreOrden);
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
      } else {
        this.clientePedido.IdCliente = '6378'
        this.clientePedido.Cliente = 'CLIENTE VARIOS'
      }

      if (respuestaPreOrden.data.Estado == 1) {
        this.mostrarMensajeBottom('La orden de la mesa seleccionada fue completada', 2500, 'warning')
        this.ocultarLoader();
        this.onIrMesas();
        return;
      }
      detallePreorden.map((detPreOr) => {
        if (detPreOr.Enviado == 0) {
          detPreOr.estadoBtnAdd = false
          detPreOr.estadoBtnRm = false
          this.pedidos.push(detPreOr);
        }
        else if (detPreOr.Enviado == 1) {
          this.accionEstado = 1;
          this.pedidosRealizados.push(detPreOr);
        }

      })

      this.ocultarLoader();
    } catch (error) {
      console.log(error);
      this.mostrarMensajeBottom('Error en la obtencion de orden', 2000, 'danger');
      this.onIrMesas()
      this.ocultarLoader();
    }
  }

  async mostrarLoader(mensaje: string) {
    this.loaderToShow = await this.loadingController.create({
      message: mensaje,
      spinner: 'circles',
      backdropDismiss: false,
      mode: 'ios',
      cssClass: "loaderMesa"
    });
    this.loaderToShow.present();
  }

  ocultarLoader() {
    this.loaderToShow.dismiss();
  }

  onIrMesas() {
    this.navigationService.setIdOrden(null);
    this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
  }

  async onModalCliente() {
    const modal = await this.modalController.create({
      component: ClientePage,
      componentProps: {
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null) {
        this.clientePedido = dataReturned.data
      }
    });

    return await modal.present();
  }


  async onRealizarPedido() {
    debugger
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

    debugger

    if (this.pedidosRealizados.length == 0 && this.pedidos.length != 0) {
      this.processPedido = true;
      const alert = await this.alertController.create({
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
          }, {
            text: 'Confirmar',
            cssClass: 'primarybtn',
            handler: async () => {
              if (this.idPreOrden != null) {
                try {
                  await this.mostrarLoader('Realizando Orden...');
                  let respuesta = await this.dataService.putRealizarOrdenCliente(this.idPreOrden, this.clientePedido.IdCliente);
                  if (respuesta.data != 0) {
                    this.onIrMesas();
                    this.processPedido = false;
                    this.distribuirComanda(1, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                    setTimeout(() => {
                      this.distribuirComandaGeneral(4, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidos);
                    }, 1000);
                  } else {
                    this.onIrMesas();
                    this.processPedido = false;
                    this.mostrarMensajeBottom('La orden la fue enviada por otro mesero', 2500, 'danger');
                  }

                  this.ocultarLoader();
                } catch (error) {
                  this.ocultarLoader();
                  this.mostrarMensajeBottom('ERROR: Se produjo un error intente nuevamente.', 2500, 'danger');
                  //this.onIrMesas();
                  this.processPedido = false;
                }
              }
            }
          }
        ]
      });
      await alert.present();


    } else if (this.pedidosRealizados.length != 0 && this.pedidos.length != 0) {
      this.processPedido = true;
      const alert = await this.alertController.create({
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
          }, {
            text: 'Confirmar',
            cssClass: 'primarybtn',
            handler: async () => {
              if (this.idPreOrden != null) {
                try {
                  await this.mostrarLoader('Añadiendo a la orden...');
                  let respuestaEstado = await this.dataService.putEstadoPreOrdenDet(this.idPreOrden);
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
                } catch (error) {
                  this.ocultarLoader();
                  this.mostrarMensajeBottom('ERROR: Se produjo un error intente nuevamente.', 2500, 'danger');
                  this.onIrMesas();
                  this.processPedido = false;

                }
              }
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async distribuirComanda(Opc: number, IdPreOrden: number, Mesa: string, Mesero: string, Cliente: string, pedidos: any[]) {
    try {
      let comanda = []
      let pedidosComanda = [...pedidos]
      if (this.impresoras.length > 0) {

        pedidosComanda.map((pe: any) => {
          let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora)
          if (impresora != undefined) {
            let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora)
            if (index === undefined) {
              impresora.Productos = [];
              comanda.push(impresora);
            }
          }
        });
        pedidosComanda.map((pe: any) => {
          let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
          if (index !== -1) {
            comanda[index].Productos.push(pe)
          }
        });
        let newcomanda = [...comanda]
        //console.log("normal:", newcomanda);
        newcomanda.map((c) => {
          this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
        });

        this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
      }
    } catch (error) {
      console.log(error);
      this.mostrarMensajeBottom('ERROR: No se imprimioo la comanda de la mesa. ' + Mesa, 3000, 'danger');
    }
  }
  async distribuirComandaPrincipalPreOrden(Opc: number, IdPreOrden: number, Mesa: string, Mesero: string, Cliente: string, pedidos: any[]) {
    try {
      let comanda = []
      let pedidosComanda = [...this.pedidosRealizados]
      pedidosComanda.map((pe: any) => {
        let impresora = this.impresoras.find((impr) => impr.EsPrincipal == 1);
        if (impresora != undefined) {
          let index = comanda.find((c) => c.EsPrincipal == 1);
          if (index === undefined) {
            impresora.Productos = [];
            comanda.push(impresora);
          }
        }
      });
      pedidosComanda.map((pe: any) => {
        let index = comanda.findIndex((c) => c.EsPrincipal == 1);
        if (index !== -1) {
          comanda[index].Productos.push(pe)
        }
      });
      let newcomanda = [...comanda]
      newcomanda.map((c) => {
        this.impresoraService.imprimirPreOrden(Opc, IdPreOrden, Mesa, Mesero, Cliente, pedidosComanda, c.NombreImpresora, c.Ip, c.Puerto);
      });

      this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
    } catch (error) {
      console.log(error);
      this.mostrarMensajeBottom(`${error}` + Mesa, 3000, 'danger');
    }
  }


  async distribuirComandaGeneral(Opc: number, IdPreOrden: number, Mesa: string, Mesero: string, Cliente: string, pedidos: any[]) {
    try {
      let comanda = []
      if (this.impresoras.length > 0) {


        let idImpresoraCocina = this.impresoras.
          filter(element => element.ImprimirComandGeneral == 1).
          map(impresora => { return impresora.IdImpresora });
        console.log(idImpresoraCocina)
        let newPedidos = [...pedidos.filter(v => idImpresoraCocina.includes(v.IdImpresora))]
        newPedidos.map((pe: any) => {
          let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora)
          if (impresora != undefined) {
            let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora)
            if (index === undefined) {
              impresora.Productos = [];
              comanda.push(impresora);
            }
          }
        });
        newPedidos.map((pe: any) => {
          let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
          if (index !== -1) {
            comanda[index].Productos.push(pe)
          }
        });
        const impresoraComandera = this.impresoras.find(item => item.escomandera === 1)
        const arrayModificado: any = comanda.map(objeto => {
          objeto.IdImpresora = impresoraComandera.IdImpresora;
          objeto.Ip = impresoraComandera.Ip;
          objeto.NombreImpresora = impresoraComandera.NombreImpresora;
          return objeto;
        });

        let newObjeto: any = [this.impresoras.find(item => item.escomandera === 1)]
        const resultado = arrayModificado.flatMap(elemento => elemento.Productos);
        newObjeto[0].Productos = resultado;
        console.log("arrayModificado", newObjeto);
        newObjeto.map((c) => {
          this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
        });

        this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
      }
    } catch (error) {
      console.log(error);
      this.mostrarMensajeBottom('ERROR: No se imprimioc la comanda de la mesa. ' + Mesa, 3000, 'danger');
    }

  }
  async distribuirComandaPrincipal(Opc: number, IdPreOrden: number, Mesa: string, Mesero: string, Cliente: string, pedidos: any[]) {
    try {
      let comanda = []
      let newPedidos = [...pedidos]
      newPedidos.map((pe: any) => {
        let impresora = this.impresoras.find((impr) => impr.IdImpresora == pe.IdImpresora)
        if (impresora != undefined) {
          let index = comanda.find((c) => c.IdImpresora == impresora.IdImpresora)
          if (index === undefined) {
            impresora.Productos = [];
            comanda.push(impresora);
          }
        }
      });
      newPedidos.map((pe: any) => {
        let index = comanda.findIndex((c) => c.IdImpresora == pe.IdImpresora);
        if (index !== -1) {
          comanda[index].Productos.push(pe)
        }
      });
      const impresoraComandera = this.impresoraComanderaGeneral.find(item => item.EsPrincipal === 1)
      const arrayModificado: any = comanda.map(objeto => {
        objeto.IdImpresora = impresoraComandera.IdImpresora;
        objeto.Ip = impresoraComandera.Ip;
        objeto.NombreImpresora = impresoraComandera.NombreImpresora;
        return objeto;
      });

      let newObjeto: any = [this.impresoraComanderaGeneral.find(item => item.EsPrincipal === 1)]
      const resultado = arrayModificado.flatMap(elemento => elemento.Productos);
      newObjeto[0].Productos = resultado;
      console.log("arrayModificado", newObjeto);
      newObjeto.map((c) => {
        this.impresoraService.imprimirComanda(Opc, IdPreOrden, Mesa, Mesero, Cliente, c.Productos, c.NombreImpresora, c.Ip, c.Puerto);
      });

      this.mostrarMensajeBottom('Comanda de la mesa ' + Mesa + ' enviada correctamente.', 3000, 'success');
    } catch (error) {
      console.log(error);
      this.mostrarMensajeBottom(`${error}` + Mesa, 3000, 'danger');
    }

  }

  async mostrarMensajeBottom(mensaje: string, duracion: number, color: string) {
    const toast = await this.toastController.create({
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

    await toast.present();
  }

  async onAdicionarCantidad(index: number) {

    if (this.idPreOrden != null) {
      this.pedidos[index].estadoBtnAdd = true;
      await this.mostrarLoader('Aumentando...');
      try {
        let respuesta = await this.dataService.putCantidadAddDetPreOrd(this.pedidos[index].IdPreOrdenDet);
        if (respuesta.data.Cantidad) {
          this.pedidos[index].Cantidad = respuesta.data.Cantidad;
        }
        this.ocultarLoader();
        this.pedidos[index].estadoBtnAdd = false;
      } catch (error) {
        this.pedidos[index].estadoBtnAdd = false;
        this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger')
        this.ocultarLoader();
      }
    }
  }
  async onReducirCantidad(index: number) {
    if (this.pedidos[index].Cantidad <= 1) {
      this.pedidos[index].Cantidad = 1;
    } else {
      if (this.idPreOrden != null) {
        this.pedidos[index].estadoBtnRm = true;
        await this.mostrarLoader('Disminuyendo...');
        try {
          let respuesta = await this.dataService.putCantidadRmDetPreOrd(this.pedidos[index].IdPreOrdenDet);
          if (respuesta.data.Cantidad) {
            this.pedidos[index].Cantidad = respuesta.data.Cantidad;
          }
          this.ocultarLoader();
          this.pedidos[index].estadoBtnRm = false;
        } catch (error) {
          this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger')
          this.ocultarLoader();
          this.pedidos[index].estadoBtnRm = false;
        }
      }
    }

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

  async onModalProducto() {
    const modal = await this.modalController.create({
      component: ProductoModalPage,
      componentProps: {
        pedidos: this.pedidos,
        IdPreOrden: this.idPreOrden
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((dataReturned) => {

    });

    return await modal.present();
  }

  async onRemoveProducto(index: number) {
    const alert = await this.alertController.create({
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
        }, {
          text: 'Confirmar',
          cssClass: 'primarybtn',
          handler: async () => {
            if (this.idPreOrden != null) {
              await this.mostrarLoader('Quitando...');
              try {
                let respuesta = await this.dataService.deleteDetallePreOrden(this.pedidos[index].IdPreOrdenDet)
                console.log(respuesta);
                if (respuesta.data == true) {
                  this.pedidos.splice(index, 1);
                }
                this.ocultarLoader()
              } catch (error) {
                this.mostrarMensajeBottom('ERROR: No hay conexion.', 1500, 'danger')
                this.ocultarLoader()
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async onReimprimirComanda() {
    const alert = await this.alertController.create({
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
        }, {
          text: 'Confirmar',
          cssClass: 'primarybtn',
          handler: async () => {
            if (this.idPreOrden != null) {
              await this.mostrarLoader('Imprimiendo...')
              try {
                this.distribuirComandaPrincipalPreOrden(3, this.idPreOrden, this.tituloMesa, this.mesero, this.clientePedido.Cliente, this.pedidosRealizados);
                setTimeout(() => {
                  this.ocultarLoader()
                }, 100);
              } catch (error) {
                setTimeout(() => {
                  this.ocultarLoader()
                }, 100);
              }

            }
          }
        }
      ]
    });
    await alert.present();
  }

  async onMostrarIndicacionesNuevos(index) {
    const alert = await this.alertController.create({
      header: this.pedidos[index].Producto,
      subHeader: 'INDICACIONES:',
      message: (this.pedidos[index].Indicacion == null || ('' + this.pedidos[index].Indicacion).trim() == '') ? 'No cuenta con indicaciones' : this.pedidos[index].Indicacion,
      mode: 'ios',
      buttons: [
        {
          cssClass: 'primarybtn',
          text: 'Cerrar',
          handler: async () => {

          },
        },
      ],
    });
    await alert.present();
  }

  async onMostrarIndicacionesSolicitados(index) {
    const alert = await this.alertController.create({
      header: this.pedidosRealizados[index].Producto,
      subHeader: 'INDICACIONES:',
      message: (this.pedidosRealizados[index].Indicacion == null || ('' + this.pedidosRealizados[index].Indicacion).trim() == '') ? 'No cuenta con indicaciones' : this.pedidosRealizados[index].Indicacion,
      mode: 'ios',
      buttons: [
        {
          cssClass: 'primarybtn',
          text: 'Cerrar',
          handler: async () => {

          },
        },
      ],
    });
    await alert.present();
  }
}
