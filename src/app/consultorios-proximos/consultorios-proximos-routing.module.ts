import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultoriosProximosPage } from './consultorios-proximos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultoriosProximosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultoriosProximosPageRoutingModule {}
