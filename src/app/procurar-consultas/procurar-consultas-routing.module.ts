import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurarConsultasPage } from './procurar-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: ProcurarConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurarConsultasPageRoutingModule {}
