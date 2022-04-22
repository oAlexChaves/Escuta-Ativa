import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurarConsultasPageRoutingModule } from './procurar-consultas-routing.module';

import { ProcurarConsultasPage } from './procurar-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurarConsultasPageRoutingModule
  ],
  declarations: [ProcurarConsultasPage]
})
export class ProcurarConsultasPageModule {}
