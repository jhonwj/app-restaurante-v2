import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import axios from 'axios';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private alertController:AlertController,
    public navController: NavController,
    private usuarioService:UsuarioService) {
    this.interceptar();
   }

  interceptar(){
    axios.interceptors.response.use(undefined,(err)=>{
      if(err.response.status===401 || err.response.data.message==='401 Unauthorized'){
        this.usuarioService.clearUsuario();
        this.navController.navigateRoot('/login', { animationDirection: 'back' });
        this.mostrarAlerta();
       }
      return Promise.reject(err);
    })
  }

  async mostrarAlerta(){
    const alert = await this.alertController.create({
      header: "SESION CADUCADA",
      subHeader: "Ingrese nuevamente",
      backdropDismiss: false,
      message:
        "<strong>El tiempo de la sesión caduco, por favor vuele a iniciar sesión.</strong>",
      mode: "ios",

      buttons: [
        {
          cssClass: "primarybtn",
          text: "Entendido",
        },
      ],
    });

    await alert.present();
  }

}
