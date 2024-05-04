import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

import axios from 'axios';
import { InterceptorService } from '../interceptors/interceptor.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private servidorNetFactura = "http://app.factura.vip/api/client/";
  private servidorNet = "http://192.168.0.4/api/restapi.php/";
  private usuario = "admin";
  constructor(public interceptorService:InterceptorService,
    private usuarioService:UsuarioService,
    private alertController:AlertController) {

    }

    async getDominio(){
      let repuestaUsuario = await this.usuarioService.getUsuario();
      if(repuestaUsuario.value!=null){
        let dominio = JSON.parse(repuestaUsuario.value).dominio;
        this.usuario = JSON.parse(repuestaUsuario.value).usuario;
        this.servidorNet=dominio+"/api/restapi.php/";
      }else{
        const alert = await this.alertController.create({
          header: 'No se el dominio correctamente, por favor renicie la app',
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

  async validarToken(){
    let repuestaUsuario = await this.usuarioService.getUsuario();
    if(repuestaUsuario.value!=null){
      let token = JSON.parse(repuestaUsuario.value).token;
      axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
    }else{
      axios.defaults.headers.common['Authorization'] = '';
    }
    return
  }

  //Rutas Cliente
   async getClientes(campo:string){
    //await this.validarToken()
    await this.getDominio();
    let config={
        params:{
          dni: campo,
        }
      }
    const path = this.servidorNet+ "rest/cliente";
    return axios.get(path, config);
  }

  //Rutas Cliente Para Validar
  async getClientesValidate(busqueda:string,busquedaId:string){
    await this.validarToken()
    let parametroBusqueda = busqueda.trim()!=''?'&filter[where][DniRuc]='+busqueda:'';
    let parametroBusquedaId = busquedaId.trim()!=''?'&filter[where][IdCliente]='+busquedaId:'';
    const path = this.servidorNetFactura+ "clientes?filter[limit]=1"+parametroBusqueda+parametroBusquedaId+"&filter[order]=DniRuc%20ASC";
    return axios.get(path);
  }

  async postCliente(DniRuc:string,Cliente:string,Direccion:string){
    await this.getDominio();
    const path = this.servidorNet+ "rest/clientes";
    let data = {
      ruc:DniRuc,
      nombre:Cliente,
      direccion:Direccion
    }
    return axios.post(path,data)
  }

  async getClienteData(dniRuc:string) {
    await this.validarToken()
    const path = this.servidorNetFactura+ "consulta/dniruc/"+dniRuc;
    return axios.get(path);
  }


  async getCategorias(busqueda:string){
    await this.getDominio();
    const path = this.servidorNet+ "rest/categorias";
    return axios.get(path);
  }

  //Rutas Productos
  async getProductosCategoria(IdProductoCategoria:number){
    await this.getDominio();
    const path = this.servidorNet+ "rest/productos/categoria?IdProductoCategoria="+IdProductoCategoria;
    return axios.get(path);
  }

  async getProductoBuscador(Producto:string){
    await this.getDominio();
    const path = this.servidorNet+ "rest/productos/categoria?q="+encodeURIComponent(Producto);
    return axios.get(path);
  }

  //Rutas PreOrden
  async getPreordenes(){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preorden/all";
    return axios.get(path);
  }
  async getImpresoraPrincipal(){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preorden/principal";
    return axios.get(path);
  }

  async getPreorden(IdPreOrden:number){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preorden/"+IdPreOrden;
    return axios.get(path);
  }

  async getPreordenDet(IdPreOrden:number){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preordendet/"+IdPreOrden;
    return axios.get(path);
  }

  async postPreorden(idMesa:number,etiquetaMesa:string){
    await this.getDominio();
    let data = {
      IdMesa:idMesa,
      Usuario:this.usuario,
      EtiquetaMesa: etiquetaMesa
    }
    const path = this.servidorNet+ "rest/preorden";
    return axios.post(path,data);
  }

  //Rutas Impresoras
  async getImpresoras(){
    await this.getDominio();
    const path = this.servidorNet+ "rest/impresoras";
    return axios.get(path);
  }

  //Rutas Detalle Preorden
  async postDetallePreOrden(IdPreOrden:number, objPreOrden:any){
    await this.getDominio();
    let data = {
      Cantidad:objPreOrden.Cantidad,
      IdProducto:objPreOrden.IdProducto,
      IdPreOrden:IdPreOrden,
      Precio:objPreOrden.PrecioContado,
      Indicacion:objPreOrden.Indicacion || null,
      Enviado:0
    }
    const path = this.servidorNet+ "rest/preordendet";
    return axios.post(path,data);
  }

  async deleteDetallePreOrden(IdPreOrdenDet:number){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preordendet/delete/"+IdPreOrdenDet;
    return axios.delete(path);
  }

  async putCantidadAddDetPreOrd(IdPreOrdenDet:number){
    await this.getDominio();
    let data = {
      IdPreOrdenDet:IdPreOrdenDet
    }
    const path = this.servidorNet+ "rest/add/preordendet";
    return axios.put(path,data);
  }

  async putCantidadRmDetPreOrd(IdPreOrdenDet:number){
    await this.getDominio();
    let data = {
      IdPreOrdenDet:IdPreOrdenDet
    }
    const path = this.servidorNet+ "rest/rm/preordendet";
    return axios.put(path,data);
  }

  async putEstadoPreOrdenDet(IdPreOrden:number){
    await this.getDominio();
    const path = this.servidorNet+ "rest/preordendet/"+IdPreOrden;
    return axios.put(path);
  }

  async putCambiarMesa(IdPreOrden:number,Mesa:string){
    await this.getDominio();
    let data = {
      Mesa:Mesa
    }
    const path = this.servidorNet+ "rest/cambiarmesa/"+IdPreOrden;
    return axios.put(path,data);
  }

  async putRealizarOrdenCliente(IdPreOrden:number,IdCliente:string){
    await this.getDominio();
    let data={
      IdCliente:IdCliente
    }
    const path = this.servidorNet+ "rest/preorden/"+IdPreOrden;
    return axios.put(path, data);
  }

  async deleteLimpiarMesa(idMesa:number,idPreOrden:number){
    await this.getDominio();
    let data={
      IdMesa:idMesa,
      IdPreOrden:idPreOrden
    }
    const path = this.servidorNet+ "rest/preordendelete";
    return axios.post(path,data);
  }

  //Login
  postLogin(ruc:string,usuario:string,password:string){
    let data = {
      ruc:ruc,
      Usuario:usuario,
      Password:password
    }
    const path = this.servidorNetFactura+ "login";
    return axios.post(path,data);
  }

  //Empresas

  getEmpresas(){
    const path = this.servidorNetFactura+ "empresas";
    return axios.get(path);
  }

  postCambiarMesa(idMesa:number,idMesaNueva:number){
    let data = {
      IdMesa:idMesa,
      IdMesaNueva:idMesaNueva
    }
    const path = this.servidorNet+ "rest/cambiar/mesa";
    return axios.post(path,data);
  }


}
