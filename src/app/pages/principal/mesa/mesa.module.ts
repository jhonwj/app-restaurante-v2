import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaPageRoutingModule } from './mesa-routing.module';

import { MesaPage } from './mesa.page';
import { ProductoModalPageModule } from 'src/app/modals/producto-modal/producto-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    MesaPageRoutingModule,ProductoModalPageModule,
  ],
  declarations: [MesaPage]
})
export class MesaPageModule {}
