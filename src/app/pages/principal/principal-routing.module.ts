import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  

{path:'', redirectTo:'mesas'},
{
  path: '',
  component: PrincipalPage, children:[
    {
      path: 'mesas',
      loadChildren: () => import('./mesas/mesas.module').then( m => m.MesasPageModule)
    },
    {
      path: 'impresoras',
      loadChildren: () => import('./impresoras/impresoras.module').then( m => m.ImpresorasPageModule)
    },
  ]
  
},
{
  path: 'mesa',
  loadChildren: () => import('./mesa/mesa.module').then( m => m.MesaPageModule)
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
