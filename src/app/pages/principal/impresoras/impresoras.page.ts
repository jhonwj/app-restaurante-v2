import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ImpresoraInterface } from 'src/app/interfaces/impresora.interface';
import { DataService } from 'src/app/services/data.service';
import { ImpresoraService } from 'src/app/services/impresora.service';

@Component({
  selector: 'app-impresoras',
  templateUrl: './impresoras.page.html',
  styleUrls: ['./impresoras.page.scss'],
})
export class ImpresorasPage implements OnInit {
  public impresoras : any = [];
  loaderToShow: any;

  constructor(public navController: NavController,
    public impresoraService:ImpresoraService,
    private loadingController: LoadingController,
    public alertController: AlertController,
    public dataService:DataService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.onObtenerImpresoras();
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

  async onObtenerImpresoras(){
    this.mostrarLoader('Cargando Impresoras...');
    try { 
      let respuesta = await this.dataService.getImpresoras();
      this.impresoras = respuesta.data;
      this.ocultarLoader();
    } catch (error) {
      this.ocultarLoader();
    }
  }

  onTestImpresora(index:number){
    this.impresoraService.testImpresora(this.impresoras[index]);
  }

  onIrMesas() {
    this.navController.navigateRoot('/principal/mesas', { animationDirection: 'back' });
  }


}
