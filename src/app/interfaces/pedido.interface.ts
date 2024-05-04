export interface PedidoInterface {
    IdProducto: number;
    Producto: string;
    Descripcion:string;
    TiempoPreparar: string;
    Puntuacion:number;
    Precio:number;
    Mostrar?:boolean;
    cantidad?:number;
    UrlImagen?:string;
}