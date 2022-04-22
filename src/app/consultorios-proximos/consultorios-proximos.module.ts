import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultoriosProximosPageRoutingModule } from './consultorios-proximos-routing.module';

import { ConsultoriosProximosPage } from './consultorios-proximos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultoriosProximosPageRoutingModule
  ],
  declarations: [ConsultoriosProximosPage]
})
export class ConsultoriosProximosPageModule {}
