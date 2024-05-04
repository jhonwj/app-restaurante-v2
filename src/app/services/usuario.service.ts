import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  setUsuario(token:string,usuario:string,empresa:string,dominio:string){
    let data={
      token: token,
      usuario: usuario,
      empresa: empresa,
      dominio: dominio
    }
    return Storage.set({
      key: 'usuario',
      value: JSON.stringify(data),
    });
  }

  getUsuario() {
    return Storage.get({ key: 'usuario' });
  }

  clearUsuario(){
    return Storage.remove({
      key: 'usuario'
    });
  }

  setEmpresaDefecto(nombre:string,ruc:string,dominio:string){
    let data={
      nombre:nombre,
      ruc: ruc,
      dominio: dominio
    }
    return Storage.set({
      key: 'empresa',
      value: JSON.stringify(data),
    });
  }

  getEmpresaDefecto() {
    return Storage.get({ key: 'empresa' });
  }
}
