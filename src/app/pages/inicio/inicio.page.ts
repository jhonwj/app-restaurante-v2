import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loaderToShow: HTMLIonLoadingElement;
  titulo: string;

  constructor(public navCtrl: NavController,
    public alertController: AlertController,
    public dataService: DataService,
    public loadingController: LoadingController,
    public navController: NavController,
    public toastController:ToastController,
    private usuarioService:UsuarioService,) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){
    setTimeout(async () => {
      let repuestaUsuario = await this.usuarioService.getUsuario();
      if(repuestaUsuario.value!=null){
        this.mostrarLoader('Recuperando Sesión');
          let usuario = JSON.parse(repuestaUsuario.value).usuario;
          try {
            let respuesta = await this.dataService.getClientesValidate('','');
            this.ocultarLoader();
            this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
            this.mostrarMensajeBottom('¡Bienvenido denuevo '+usuario+"!",2500,'success');
          } catch (error) {
            this.mostrarMensajeBottom('ERROR: Sin conexion a internet',2000,'danger');
            this.ocultarLoader();
          }
  
      }else{
        this.navController.navigateRoot('/login', { animationDirection: 'forward' });
      }
    }, 1000);

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
}
