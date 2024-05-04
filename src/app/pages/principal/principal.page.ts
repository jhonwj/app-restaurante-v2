import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ConfiguracionPage } from 'src/app/modals/configuracion/configuracion.page';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public usuarioLogin:string = "";
  public empresaLogin:string = "";
  loaderToShow: any;
  constructor(public navController: NavController,
    public modalController: ModalController,
    private usuarioService:UsuarioService,
    private toastController:ToastController,
    private loadingController:LoadingController) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    let repuestaUsuario = await this.usuarioService.getUsuario();
    if(repuestaUsuario.value!=null){
      this.usuarioLogin = JSON.parse(repuestaUsuario.value).usuario
      this.empresaLogin = JSON.parse(repuestaUsuario.value).empresa
    }
  
  }

  async onIrSidemenu(accion: string) {
    switch (accion) {
      case "mesas": {

        this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
        break;
      }

      case "configuracion": {
        //abrir modal
        const modal = await this.modalController.create({
          component: ConfiguracionPage,
          componentProps: {
            "paramID": 123,
          }
        });

        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned !== null) {

            console.log('Modal Sent Data :' + dataReturned.data);
          }
        });

        return await modal.present();
        //fin de modal


        break;
      }

      case "impresoras": {
        this.navController.navigateRoot('/principal/impresoras', { animationDirection: 'back' });
        break;
      }

      case "cerrarsesion":{
        this.mostrarLoader('Cerrando Sesión...');
        setTimeout(async () => {
          await this.usuarioService.clearUsuario();
          this.navController.navigateRoot('/login', { animationDirection: 'back' });
          this.ocultarLoader();
          this.mostrarMensajeBottom('Sesión finalizada.',2000,'success')
        }, 500);
        break;
      }
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

}
