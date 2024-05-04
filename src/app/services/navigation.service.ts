import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public IdOrden:number = null
  public IdProductoCategoria:number = null
  public ProductoCategoria:string = null
  constructor() { }

  getIdOrden(){
    return this.IdOrden;
  }

  setIdOrden(IdOrden:number){
    this.IdOrden = IdOrden;
  }

}
