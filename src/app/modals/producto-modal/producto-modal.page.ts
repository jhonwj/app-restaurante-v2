import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.page.html',
  styleUrls: ['./producto-modal.page.scss'],
})
export class ProductoModalPage implements OnInit {

  public categorias:any = []
  loaderToShow: any;
  public IdProductoCategoria:number = null
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false,
    spaceBetween: 20
  };

  public productos:any=[]
  public idMesa:number = null;
  public cargando:boolean = false;
  public urlEmpresa:string = '';
  @Input() public pedidos:any[];
  @Input() public IdPreOrden:number;
  @ViewChild('ionContentido', { static: false }) ionContenido: IonContent;
  constructor(public modalController: ModalController,
    public navController: NavController,
    public navigationService:NavigationService,
    public dataService:DataService,
    private loadingController: LoadingController,
    public alertController:AlertController,
    public toastController:ToastController,
    private usuarioService:UsuarioService) { }

  ngOnInit() {
    
  }

  async ionViewWillEnter(){
    this.cargarCategorias();
    this.idMesa = this.navigationService.getIdOrden();
    //this.pedidoMesa = this.pedidoService.getPedidoProductos(this.idMesa).pedidos;
    //this.dataService.getClientesApi();
    let respuestaUsuario = await this.usuarioService.getUsuario();
    if(respuestaUsuario.value!=null){
        this.urlEmpresa = JSON.parse(respuestaUsuario.value).dominio;
    }
  }

  verificarExistencia(IdProducto: string) {
    return this.pedidos.some((pedido => pedido.IdProducto == IdProducto));
  }

  async mostrarLoader(mensaje:string){
    this.loaderToShow = await this.loadingController.create({
      message: mensaje,
      spinner: 'circles',
      backdropDismiss: false,
      mode: 'ios',
    });
    this.loaderToShow.present();
  }

  ocultarLoader(){
    this.loaderToShow.dismiss();
  }

  async cargarProducto(idProductoCategoria:number,ProductoCategoria:string){
   setTimeout(async () => {
    this.cargando=false;
    this.productos = []
    this.IdProductoCategoria = idProductoCategoria;
    this.ionContenido.scrollToTop(200);
    try {
      let resultado = await this.dataService.getProductosCategoria(idProductoCategoria);
      this.productos = resultado.data
      this.productos.map((producto)=>{
        producto.Mostrar=false;
        producto.Cantidad=1;
        producto.Indicacion='';
      });
      this.cargando=true;
    } catch (error) {
      this.cargando=false;
      this.productos = []
    }
   }, 200);
  }

  async buscarEmpresa(e){
      if(e.detail.value==''){
        if(this.categorias.length!=0){
          this.IdProductoCategoria = this.categorias[0].IdProductoCategoria;
          this.cargarProducto(this.categorias[0].IdProductoCategoria,this.categorias[0].ProductoCategoria)
          return;
        }
      }

      try {
        this.cargando=false;
        this.productos = []
        let buscadorRespuesta = await this.dataService.getProductoBuscador(e.detail.value);
        this.productos = buscadorRespuesta.data
        this.productos.map((producto)=>{
          producto.Mostrar=false;
          producto.Cantidad=1;
          producto.Indicacion='';
        });
        this.cargando=true;
      } catch (error) {
        this.cargando=false;
        this.productos = []  
      }
  }

  async cargarCategorias(){
    this.cargando=false;
    try {
      let resultado = await this.dataService.getCategorias('');
      this.categorias = resultado.data
      if(this.categorias.length!=0){
        this.IdProductoCategoria = this.categorias[0].IdProductoCategoria;
        this.cargarProducto(this.categorias[0].IdProductoCategoria,this.categorias[0].ProductoCategoria)
      }
    } catch (error) {
    }
  }

  async onAgregarPedido(index:number){
    if(this.verificarExistencia(this.productos[index].IdProducto)){
      this.mostrarMensajeBottom("El producto ya ha sido agregado",2000,"danger")
      return;
    }
    if(this.IdPreOrden!=null){
      await this.mostrarLoader('Agregando...');
      try {
        this.productos[index].Indicacion = (''+this.productos[index].Indicacion).replace(new RegExp("'", 'g'), '');
        this.productos[index].Indicacion = (''+this.productos[index].Indicacion).replace(new RegExp('"', 'g'), '');
        this.productos[index].Indicacion = (''+this.productos[index].Indicacion).replace(new RegExp('\n', 'g'), '');
        this.productos[index].Indicacion = (''+this.productos[index].Indicacion).replace(new RegExp('\\'.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), '')
        this.productos[index].Indicacion = (''+this.productos[index].Indicacion).toUpperCase();
        let respuesta = await this.dataService.postDetallePreOrden(this.IdPreOrden,this.productos[index]);
        this.ocultarLoader();
        if(respuesta.data.success==true){
          this.productos[index].IdPreOrden=this.IdPreOrden
          this.productos[index].Precio=this.productos[index].PrecioContado;
          this.productos[index].IdPreOrdenDet=Number(respuesta.data.insertId);
          this.pedidos.push(this.productos[index])
          this.onCerrarProducto(index);
          this.mostrarMensajeBottom('¡'+this.productos[index].Producto+' AGREGADO!',1500,'success')
        }

      } catch (error) {
        this.mostrarMensajeBottom('Error: No se agrego el producto',1500,'danger')
        this.ocultarLoader();
      }
      

    }

  }

  onAbrirCantidad(index){
    if(this.verificarExistencia(this.productos[index].IdProducto)){
      return;
    }

    this.productos.map((producto)=>{
      if(producto.IdProducto!=this.productos[index].IdProducto){
        producto.Mostrar=false;
      }
    });

    this.productos[index].Mostrar=!this.productos[index].Mostrar;
    this.productos[index].Cantidad = 1;
    this.productos[index].Indicacion='';
  }

  async mostrarMensajeBottom(mensaje:string,duracion:number,color:string){
    const toast = await this.toastController.create({
      message: '<strong>'+mensaje+'</strong>',
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

  async mostrarOpciones(index:number){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INDICACIONES COMUNES',
      mode:'ios',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'PARA LLEVAR',
          value: 'PARA LLEVAR',
          handler: (alertData) => {

            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'SIN PICANTE',
          value: 'SIN PICANTE',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'SIN CEBOLLA',
          value: 'SIN CEBOLLA',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'SIN ENSALADA',
          value: 'SIN ENSALADA',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'SIN PAPAS',
          value: 'SIN PAPAS',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'SIN CREMAS',
          value: 'SIN CREMAS',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'PARTE:',
          value: 'PARTE:',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'MAS CREMAS',
          value: 'MAS CREMAS',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio7',
          type: 'radio',
          label: 'HELADA',
          value: 'HELADA',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
            alert.dismiss();
          }
        },
        {
          name: 'radio8',
          type: 'radio',
          label: 'SIN HELAR',
          value: 'SIN HELAR',
          handler: (alertData) => {
            this.productos[index].Indicacion=this.productos[index].Indicacion+" - "+alertData.value;
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

    await alert.present();
  }

  onMostrarProducto(index:number){
    this.productos.map((producto)=>{
      producto.Mostrar=false;
    });

    this.productos[index].Mostrar=true;
    this.productos[index].Cantidad = 1;
    this.productos[index].Indicacion='';
  }

  onAdicionarCantidad(index:number) {
    this.productos[index].Cantidad++;
  }
  onReducirCantidad(index:number) {
    if(this.productos[index].Cantidad<=1){
      this.productos[index].Cantidad = 1;
    }else{
      this.productos[index].Cantidad--;
    }

  }

  onCerrarProducto(index:number){
    this.productos[index].Mostrar=false;
  }


  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
