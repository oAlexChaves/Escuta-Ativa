import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDeConsultasPage } from './agenda-de-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDeConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDeConsultasPageRoutingModule {}
