import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaFinanceiraPageRoutingModule } from './ficha-financeira-routing.module';

import { FichaFinanceiraPage } from './ficha-financeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaFinanceiraPageRoutingModule
  ],
  declarations: [FichaFinanceiraPage]
})
export class FichaFinanceiraPageModule {}
