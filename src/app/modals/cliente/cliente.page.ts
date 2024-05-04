import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, IonItemSliding, IonSlides, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ClienteInterface } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  @ViewChild('slidePresentacion', { static: false }) slidePresentacion: IonSlides;
  @ViewChild('slidingItem', { static: false }) slidingItem: IonItemSliding;
  @ViewChild('ionContentido', { static: false }) ionContenido: IonContent;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    centeredSlides: true,
    spaceBetween: 20

  };
  public DniRuc:string='';
  public cliente:ClienteInterface ={
    Cliente:"",
    DniRuc:"",
    Direccion:"",
  }
  public clienteLista:any = []
  loaderToShow: HTMLIonLoadingElement;
  constructor(private modalController: ModalController, private clienteService:ClienteService,
    private loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public dataService:DataService) { }

  ngOnInit() {
  }


  
  async onConsultarDniRuc(){
    
    try {
      this.loaderToShow = await this.loadingController.create({
        message: 'Obteniendo información del cliente...',
        spinner: 'dots',
        backdropDismiss: false,
        mode: 'ios',
      });
      this.loaderToShow.present();
      let tipo = this.cliente.DniRuc.length > 8 ? 'RUC' : 'DNI';
      let result = await this.dataService.getClienteData(this.cliente.DniRuc);
      if(result.data.error=='Fuera de servicio' || result.data.data.success==false){
        this.cliente.Cliente = '';
        this.cliente.Direccion = '';
        const toast = await this.toastController.create({
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
        await toast.present();
      }else{
        if(tipo=='DNI'){
          this.cliente.Cliente = result.data.data.nombres + ' ' + result.data.data.apellidoPaterno + ' ' + result.data.data.apellidoMaterno;
        }else{
          this.cliente.Cliente =result.data.data.razonSocial;
          this.cliente.Direccion = result.data.data.direccion;
        }
      }

      this.slidingItem.close();
      this.loaderToShow.dismiss();
    } catch (error) {
      this.slidingItem.close();
      this.loaderToShow.dismiss();
    }
  }

  ionViewWillEnter(){
    this.cargarClientes();
  }

  async onBuscarCliente(){
    if(this.DniRuc.trim()==''){
      this.cargarClientes();
      return;
    }

    if(this.DniRuc.trim()=='' || this.DniRuc.trim().length<8){
      this.mostrarMensajeBottom('ERROR: Ingrese un DNI o RUC valido.',2500,'danger');
      return;
    }

    this.loaderToShow = await this.loadingController.create({
      message: 'Buscando cliente...',
      spinner: 'dots',
      backdropDismiss: false,
      mode: 'ios',
    });
    this.loaderToShow.present();
    this.onLista();
    try {
      let resultado = await this.dataService.getClientes(this.DniRuc);
      this.clienteLista = resultado.data;
      if(this.clienteLista.length == 0){
        this.mostrarMensajeBottom('No se encontro al cliente, por favor agregelo.',2000,'warning');
        this.cliente.DniRuc = this.DniRuc;
        this.onFormulario();
      }
      this.loaderToShow.dismiss();
    } catch (error) {
      this.loaderToShow.dismiss();
    }
  }


  async cargarClientes(){
    this.loaderToShow = await this.loadingController.create({
      message: 'Obteniendo clientes...',
      spinner: 'dots',
      backdropDismiss: false,
      mode: 'ios',
    });
    this.loaderToShow.present();
    try {
      let resultado = await this.dataService.getClientes('');
      this.clienteLista = resultado.data;
      this.loaderToShow.dismiss();
    } catch (error) {
      this.loaderToShow.dismiss();
    }
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


  ionViewDidEnter(){
    this.slidePresentacion.update();
    this.slidePresentacion.lockSwipes(true);
  }

  onLista() {
    this.slidePresentacion.lockSwipes(false);
    this.slidePresentacion.slidePrev(400);
    this.slidePresentacion.lockSwipes(true);
    this.limpiarCliente();
  }

  onFormulario(){
    this.ionContenido.scrollToTop(200);
    this.slidePresentacion.lockSwipes(false);
    this.slidePresentacion.slideNext(400);
    this.slidePresentacion.lockSwipes(true);
  }

  async onSeleccionarCliente(index:number) {
      this.cliente.IdCliente=this.clienteLista[index]['IdCliente'];
      this.cliente.Cliente=this.clienteLista[index]['Cliente'];
      this.cliente.DniRuc=this.clienteLista[index]['DniRuc'];
      this.cliente.Direccion=this.clienteLista[index]['Direccion'];
    await this.modalController.dismiss(this.cliente);
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }

  limpiarCliente(){
    this.cliente ={
      Cliente:"",
      DniRuc:"",
      Direccion:"",
    }
  }

  async onAgregar(){
    if(this.cliente.DniRuc.trim()=='' || this.cliente.DniRuc.trim().length<8){
      this.mostrarMensajeBottom('ERROR: Complete correctamente en DNI o RUC.',2500,'danger');
      return;
    }

    if(this.cliente.Cliente.trim()==''){
      this.mostrarMensajeBottom('ERROR: Complete correctamente el nombre del cliente.',2500,'danger');
      return;
    }
    this.loaderToShow = await this.loadingController.create({
      message: 'Agregando Cliente...',
      spinner: 'dots',
      backdropDismiss: false,
      mode: 'ios',
    });
    this.loaderToShow.present();  

    try {
      let respuesta = await this.dataService.postCliente(this.cliente.DniRuc,this.cliente.Cliente.toUpperCase(),this.cliente.Direccion)
      if(respuesta.data.success){
        this.mostrarMensajeBottom("Cliente  agregado correctamente.",2000,"success")
        this.cliente.IdCliente=respuesta.data.idCliente;
        await this.modalController.dismiss(this.cliente);
      }else{
        this.mostrarMensajeBottom("Ya existe el cliente ingresado.",2000,"danger")
      }
      this.loaderToShow.dismiss();
    } catch (error) {
      this.loaderToShow.dismiss();
    }

  }

  async onCancelar(){
    this.onLista();
    this.slidingItem.close();
    this.DniRuc='';
  }
}
