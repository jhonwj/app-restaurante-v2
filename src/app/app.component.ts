import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private valor = 0;
  constructor(
    private platform: Platform,
    private navController: NavController,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private menuController: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  async initializeApp() {

    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: Style.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#E40033' });
      }

      //Boton atras listener
      document.addEventListener('backbutton', async () => {
        // close modal
        try {
          const element = await this.modalController.getTop();
          if (element && !this.router.isActive('/login', true) &&
            this.router.url !== '/login'
          ) {
            //element.dismiss(null);
            return;
          }
        } catch (error) {
          console.log(error);
        }
        //close side mnenu
        try {
          const element = await this.menuController.isOpen('first');
          if (element !== false) {
            this.menuController.toggle();
            return;
          }
        } catch (error) {}

        if (
          this.router.isActive('/login', true) &&
          this.router.url === '/login' &&
          this.valor == 0
        ) {
          this.valor = 1;
          const alert = await this.alertController.create({
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
                handler: async () => {
                  this.valor = 0;
                  navigator['app'].exitApp();
                },
              },
            ],
          });

          await alert.present();
        }
      });
      //fin backbutton
    } catch (error) {
      console.log('Navegador normal');
    }
  }
}