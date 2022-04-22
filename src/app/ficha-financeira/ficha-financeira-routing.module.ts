import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaFinanceiraPage } from './ficha-financeira.page';

const routes: Routes = [
  {
    path: '',
    component: FichaFinanceiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaFinanceiraPageRoutingModule {}
