import { Injectable } from '@angular/core';
import { ImpresoraInterface } from '../interfaces/impresora.interface';
import { Storage } from '@capacitor/storage';
import EscPosEncoder from '@mineminemine/esc-pos-encoder-ionic';
import { LoadingController } from '@ionic/angular';
import { ProductoInterface } from '../interfaces/producto.interface';
declare var Socket: any;
@Injectable({
  providedIn: 'root'
})
export class ImpresoraService {
  loaderToShow: any;

  constructor(private loadingController: LoadingController) { }

  testImpresora(impresora: any) {
    let date = new Date();
    let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
    let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let date_time = current_date + " " + current_time;
    const socket = new Socket();

    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .width(2)
      .height(2)
      .align('center')
      .newline()
      .bold(true)
      .width(2)
      .height(2)
      .line(date_time)
      .line('Prueba realizada con la impresora ' + impresora.NombreImpresora)
      .line('IP : ' + impresora.Ip)
      .line('Port : ' + impresora.Puerto)
      .bold(false)
      .text('Este es un mensaje de prueba', 40)
      .newline()
      .underline(true)
      .text('Subrayado')
      .underline(false)
      .newline()
      .text('This is ')
      .bold(true)
      .text('bold')
      .bold(false)
      .align('right')
      .width(2)
      .height(2)
      .line('This line is aligned to the right')
      .align('center')
      .width(2)
      .height(2)
      .line('This line is centered')
      .align('left')
      .line('This line is aligned to the left')
      .newline()
      .newline()
      .newline()
      .newline()
      .newline()
      .cut();

    const resultByte = result.encode();

    // send byte code into the printer
    socket.open(
      impresora.Ip,
      impresora.Puerto,
      () => {
        socket.write(resultByte, () => {
          socket.shutdownWrite();
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  imprimirComanda(opcComanda, idMesa, nombreMesa: string, mesero: string, cliente: string, productos: any[], NombreImpresora, IP: string, puerto: string) {
    let date = new Date();
    let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
    let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let date_time = current_date + " " + current_time;
    const socket = new Socket();
    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    result.align('right')
      .size('normal')
      .line('ID ORDEN: ' + idMesa)
      .align('center')
      .line(opcComanda != 3 ? date_time : '')
      .line(NombreImpresora)
      .bold(true);

    switch (opcComanda) {
      case 1:
        result
        .width(2)
        .height(2)
        .line("NUEVO PEDIDO A MESA: " + nombreMesa);
        break;

      case 2:
        result
        .width(2)
        .height(2)
        .line("AGREGAR PEDIDO A MESA: " + nombreMesa);
        break;

      case 3:
        result
        .width(2)
        .height(2)
        .line("REIMPRESO DEL PEDIDO DE LA MESA: " + nombreMesa);
        break;

      case 4:
        result
        .width(2)
        .height(2)
        .line("PEDIDO GENERAL DEL CLIENTE: " + nombreMesa);
        break;

      default:
        break;
    }

    result
      .width(2)
      .height(2)
      .line("CLIENTE: " + cliente)
      .line("ATENDIDO POR: " + mesero.toUpperCase())
      .bold(false)
      .newline()
      .bold(true)
      .line('-------------------------------------------------------')
      .bold(false)
    productos.map((pro) => {
      result
        .align('left')
        .text('PRODUCTO: ')
        .bold(true)
        .text(pro.Producto)
        .bold(false)
        .newline()
        .text('CANTIDAD: ')
        .bold(true)
        .text(pro.Cantidad.toString())
        .bold(false);

      if (!(('' + pro.Indicacion).trim() == '' || pro.Indicacion == null)) {
        result
        .newline()
        .width(2)
        .height(2)
        .line('INDICACIONES:')
        .bold(true)
        .line(pro.Indicacion)
        .bold(false)

      } else {
        result.newline();
      }
      result
        .align('center')
        .bold(true)
        .line('-------------------------------------------------------')
        .bold(false)

    })

    result.newline()
      .bold(true);
    if (opcComanda == 3) {
      result
      .width(2)
      .height(2)
      .line('ESTO ES UN REIMPRESO DE LOS PRODUCTOS SOLICITADOS POR LA MESA')
      .line('POR FAVOR VERIFICAR LOS PRODUCTOS Y EL CLIENTE');
    }
    result.bold(false)
      .newline()
      .newline()
      .newline()
      .newline()
      .cut();
    const resultByte = result.encode();

    // send byte code into the printer
    socket.open(
      IP,
      puerto,
      () => {
        socket.write(resultByte, () => {
          socket.shutdownWrite();
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }
  imprimirPreOrden(opcComanda, idMesa,
    nombreMesa: string, mesero: string,
    cliente: string, productos: any[],
    NombreImpresora, IP: string, puerto: string) {
    let date = new Date();
    let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
    let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let date_time = current_date + " " + current_time;
    let total = 0;
    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();
    //result.size(3).align('center').line('TRADICIONES HUANUQUENAS');
    result
    .align('right')
    .width(2)
    .height(2)
    .line(`ID ORDEN: ${idMesa} - Mesa: ${nombreMesa}`)
    .align('center')
    .line(opcComanda != 3 ? date_time : '')
    .line(NombreImpresora)
    .bold(true);

    result
    .width(2)
    .height(2)
    .line('CLIENTE: ' + cliente)
    .line('ATENDIDO POR' + mesero.toUpperCase())
    .bold(false)
    .newline()
    .bold(true)
    .line('-------------------------------------------------------')
    .bold(false);

    result
    .align('left')
    .line('Producto           ' + '  Cant  ' + '  PU  ' + '  Total  ')
    .bold(true);

    const maxProductoLength = 20;
    const maxCantidadLength = 6;
    const maxPrecioUnitarioLength = 2;
    const maxTotalLength = 8;

    productos.map((pro) => {
      total += pro.Cantidad * pro.Precio;

      const subT = (pro.Cantidad * pro.Precio).toFixed(2);
      const nombreProd = pro.Producto.length >
        maxProductoLength ? pro.Producto.substring(0, 20)
        : this.formatColumn(pro.Producto, maxProductoLength);
      const cantidad = pro.Cantidad.length > maxCantidadLength
        ? pro.Cantidad.substring(0, 20)
        : this.formatColumn(pro.Cantidad, maxCantidadLength);
      const precio = pro.Precio.length > maxPrecioUnitarioLength
        ? pro.Precio.substring(0, 20)
        : this.formatColumn(pro.Precio, maxPrecioUnitarioLength);

      const subTotal = subT.length > maxTotalLength
        ? subT.substring(0, 20)
        : this.formatColumn(subT, maxTotalLength);
      result
        .align('left').line(`${nombreProd}  ${cantidad}       ${precio}       ${subTotal}`);

      if (!!pro.Indicacion) {
        result.newline();
        result.align('center').line(`(Indicacaciones: ${pro.Indicacion})`);
      }
      result.newline();
    });
    //console.log(total);
    result
      .align('left')
      .width(2)
      .height(2)
      .line('                    TOTAL' + ' S/. ' + total.toFixed(2))
      .bold(true)
      .line("").bold(true)
      .line("").bold(true)
      .bold(true);

    result.newline()
      .bold(true);

    result.bold(false)
      .newline()
      .newline()
      .newline()
      .newline()
      .cut();
    const resultByte = result.encode();
    const socket = new Socket();
    // send byte code into the printer
    socket.open(
      IP,
      puerto,
      () => {
        socket.write(resultByte, () => {
          socket.shutdownWrite();
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  formatColumn(text, maxLength: number): string {
    const espacio = ' ';
    const vecesARellenar = maxLength - text.length;
    return text + espacio.repeat(vecesARellenar);
  }
}
