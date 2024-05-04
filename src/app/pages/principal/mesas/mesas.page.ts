import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { NavigationService } from 'src/app/services/navigation.service';




@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  public preordenes:any=[];
  loaderToShow: HTMLIonLoadingElement;
  constructor(public modalController: ModalController,
    public navController: NavController,
    public navigationService:NavigationService,
    public dataService:DataService,
    private loadingController: LoadingController,
    public alertController: AlertController,
    public actionSheetController:ActionSheetController,
    public toastController: ToastController) { }
    
  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.cargarMesas();
  }
  async onActualizar(){
   
        await this. mostrarLoader('Actualizando...');
        try {
          let respuesta = await this.dataService.getPreordenes();
          this.preordenes= respuesta.data
          this.ocultarLoader();
        } catch (error) {
          this.ocultarLoader();
        }
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

  async cargarMesas(){
    setTimeout(async () => {
      await this. mostrarLoader('Cargando ordenes...');
      try {
        let respuesta = await this.dataService.getPreordenes();
        this.preordenes= respuesta.data
        this.ocultarLoader();
      } catch (error) {
        this.ocultarLoader();
      }
    }, 150);
  }

  onIrMesa(idPreOrden:number){
    if(idPreOrden==null){
      return
    }
    this.navigationService.setIdOrden(idPreOrden);
    this.navController.navigateRoot('/principal/mesa',{ animationDirection: 'forward' });
  }

  async nuevaOrden(idMesa:number,etiquetaMesa:string){
    const alert = await this.alertController.create({
      header: 'Se creará una orden para la mesa: '+etiquetaMesa,
      message:'¿Está seguro?',
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
        }, {
          text: 'Sí, crear',
          cssClass: 'primarybtn',
          handler: async () => {
            try {
              this.mostrarLoader('Creando orden...');
              let respuesta = await this.dataService.postPreorden(idMesa,etiquetaMesa)
              if(respuesta.data.success){
                this.ocultarLoader()
                this.navigationService.setIdOrden(respuesta.data.IdPreOrden);
                this.navController.navigateRoot('/principal/mesa',{ animationDirection: 'forward' });
              }else{
                this.cargarMesas()
                this.ocultarLoader()
                this.mostrarMensajeBottom('ERROR: Ya existe una orden para esa mesa.',2000,'danger')
              }
            } catch (error) {
              this.ocultarLoader()
            }
          }
        }
      ]
    });

    await alert.present();
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

  async mostrarOpcionMesa(idMesa:number,idPreOrden:number,etiquetaMesa:string,idCliente:number){
    let buttons = []
    if(idPreOrden==null){
      buttons.push(
        { text: 'Crear Orden', cssClass: 'botonOrdenar', icon: 'cart', role:'destructive', handler: () => {
            this.nuevaOrden(idMesa,etiquetaMesa)
        }})
    }else{
      if(idCliente==null){
        buttons.push({ text: 'Limpiar Mesa', cssClass:'botonLimpiar', icon: 'archive', role:'destructive', handler: () => {
          this.onLimpiarMesa(idMesa,etiquetaMesa,idPreOrden)
        }})
      }
        buttons.push({ text: 'Cambiar de Mesa', cssClass:'botonCambiar', icon: 'swap-horizontal',  role:'destructive', handler: () => {
          this.onCambiarMesa(idMesa,etiquetaMesa)
        }})
    }
    buttons.push({ text: 'Cerrar', role: 'cancel' })

    const actionSheet = await this.actionSheetController.create({
      header: "Opciones para la mesa "+etiquetaMesa,
      mode:'ios',
      cssClass:'headerAction',
      buttons: buttons
    });

    await actionSheet.present();
  }

  async onLimpiarMesa(idMesa:number,etiquetaMesa:string,idPreOrden:number){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Se eliminarán los productos y la mesa '+etiquetaMesa+' quedará libre',
      message:'¿Está seguro?',
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
          text: 'Sí, limpiar',
          cssClass: 'primarybtn',
          handler: async () => {
            try {
              await this.mostrarLoader('Limpiando...')
              let respuestaLimpiar = await this.dataService.deleteLimpiarMesa(idMesa,idPreOrden)
              if(respuestaLimpiar.data.success){
                this.ocultarLoader();
                this.mostrarMensajeBottom('La mesa limpiada.',2000,'success')
                this.cargarMesas();
              }else{
                this.ocultarLoader();
                this.mostrarMensajeBottom('La mesa tiene otro estado',2000,'danger')
                this.cargarMesas();  
              }
            } catch (error) {
              this.ocultarLoader();
              this.mostrarMensajeBottom('Ha ocurrido un error',2000,'danger')
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async onCambiarMesa(idMesa:number,etiquetaMesa:string){
      try {
        let buttons = []
        let respuesta = await this.dataService.getPreordenes();
        if(respuesta.data){
          respuesta.data.map((res)=>{
            if(res.IdPreOrden==null){
              buttons.push(
                { text: 'Mesa: ' +res.EtiquetaMesa, cssClass: 'botonLibre', icon: 'tablet-landscape-outline', handler: () => {
                  this.accionCambiar(idMesa,res.IdMesa,etiquetaMesa,res.EtiquetaMesa)
                }})
            }
          })

          buttons.push({ text: 'Cerrar', role: 'cancel' })

          const actionSheet = await this.actionSheetController.create({
            header: "Lista de mesas disponibles",
            mode:'ios',
            cssClass:'headerAction',
            buttons: buttons
          });
          await actionSheet.present();
        }
  
      } catch (error) {
        
      }
  }

  async accionCambiar(idMesa:number,idMesaNueva:number,etiquetaMesa:string,etiquetaMesaNueva:string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Está seguro?',
      message:'Se cambiará la orden de la mesa: <strong>'+etiquetaMesa+'</strong> a la mesa: <strong>'+etiquetaMesaNueva+'</strong>',
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
          text: 'Sí, cambiar',
          cssClass: 'primarybtn',
          handler: async () => {
            try {
              await this.mostrarLoader('Cambiando de: '+etiquetaMesa+' a: '+etiquetaMesaNueva)
              let respuestaCambio = await this.dataService.postCambiarMesa(idMesa,idMesaNueva) 
              if(respuestaCambio.data.success==true){
                this.ocultarLoader()
                this.mostrarMensajeBottom(respuestaCambio.data.msg,4000,'success')
                this.cargarMesas()
              }else{
                this.ocultarLoader()
                this.mostrarMensajeBottom(respuestaCambio.data.msg + " Se actualizará",4000,'danger')
                this.cargarMesas()
              }
            } catch (error) {
              this.ocultarLoader()
              this.mostrarMensajeBottom("hubo un error intente nuevamente",3000,'danger')
            }
          }
        }
      ]
    });
    await alert.present();
  }
  
}
