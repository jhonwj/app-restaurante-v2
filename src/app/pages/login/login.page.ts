import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loaderToShow: HTMLIonLoadingElement;
  username:string='';
  password:string='';
  public empresas:any=[];
  public rucEmpresa:string=null;
  constructor(private loadingController: LoadingController,
    public navController: NavController,
    private dataService:DataService,
    public toastController:ToastController,
    private usuarioService:UsuarioService,
    private alertController:AlertController) { }

  ngOnInit() {
  }

  async ionViewDidEnter(){
      await this.mostrarLoader('Cargando Empresas...');
      try {
        let respuestaEmpresas = await this.dataService.getEmpresas();
        if( respuestaEmpresas.data.data){
          respuestaEmpresas.data.data.map((emp)=> {
            if(emp.es_restaurante==1 && emp.dominio !='' && emp.dominio != null){
              this.empresas.push(emp);
            }
          })
          let respuestaEmpresa = await this.usuarioService.getEmpresaDefecto()
          if(respuestaEmpresa.value != null){
            let empresaDefecto = JSON.parse(respuestaEmpresa.value);
            let existe = false;
            this.empresas.map((emp)=>{
              if(emp.ruc==empresaDefecto.ruc){
                existe=true
              }
            });
            
            if(existe){
              this.rucEmpresa=empresaDefecto.ruc;
            }
          }
        }
        this.ocultarLoader();
      } catch (error) {
        this.ocultarLoader();
        const alert = await this.alertController.create({
          header: 'No se cargaron las empresas correctamente, por favor renicie la app',
          backdropDismiss: false,
          mode: 'ios',
          buttons: [
            {
              cssClass: 'primarybtn',
              text: 'Salir',
              handler: async () => {

                navigator['app'].exitApp();
              },
            },
          ],
        });
        await alert.present();
      }
  }

  async onIniciarSesion(){
    if(this.username.trim()==''){
      this.mostrarMensajeBottom('Por favor ingrese su usuario.',2000,'warning');
      return;
    }

    if(this.password.trim()==''){
      this.mostrarMensajeBottom('Por favor ingrese su contraseña.',2000,'warning');
      return;
    }

    if(this.rucEmpresa==null){
      this.mostrarMensajeBottom('Por favor seleccione su empresa.',2000,'warning');
      return;
    }

    await this.mostrarLoader('Iniciando Sesion')

    try {
      let respuesta = await this.dataService.postLogin(this.rucEmpresa,this.username,this.password);
      if(respuesta.data.token){
        await this.usuarioService.setUsuario(respuesta.data.token,this.username,this.empresas.find(element => element.ruc==this.rucEmpresa).nombre,this.empresas.find(element => element.ruc==this.rucEmpresa).dominio);
        await this.usuarioService.setEmpresaDefecto(this.empresas.find(element => element.ruc==this.rucEmpresa).nombre,this.rucEmpresa,this.empresas.find(element => element.ruc==this.rucEmpresa).dominio);
        this.navController.navigateRoot('/principal/mesas', { animationDirection: 'forward' });
        this.mostrarMensajeBottom('¡Bienvenido '+ this.username+"!",3000,'success');
      }
      this.ocultarLoader();
    } catch (error) {
      this.mostrarMensajeBottom('No existe usuario ingresado',2000,'danger')
      this.ocultarLoader();
      console.log(error);
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

  
  abrirEmpresas() {
    setTimeout(() => {
             // According to the class style "div.alert-radio-group button" to get html elements
      let buttonElements = document.querySelectorAll('div.action-sheet-group button');
 
             // Determine whether the obtained element is not null
      if (!this.empresas.length) {
                 // Empty, then get it again      
        //this.OpenLanguage();
      } else {
                 // If it is not empty, loop through the obtained html element (that is, the html element where the information of the AlertController list is traversed)
        for (let index = 0; index < this.empresas.length; index++) {
                     // According to the subscript to take the html element
          let buttonElement = buttonElements[index];
 
                     // Then take the information in the list according to the html element
          let optionLabelElement = buttonElement.querySelector('.action-sheet-button-inner');
          //let image = optionLabelElement.innerHTML.trim();
                     // Splice the picture name to display the picture, pay attention to the picture naming, must be consistent with the binding field, then add Image for this element   
          optionLabelElement.innerHTML = '<img  src="http://app.factura.vip/uploads/empresas/' + this.empresas[index].logo + '" style="width:45px;height:45px;float:right;margin-right: 15px;"/>' + optionLabelElement.innerHTML ;
        }
      }
    }, 100);

  }
}
