import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDeConsultasPageRoutingModule } from './agenda-de-consultas-routing.module';

import { AgendaDeConsultasPage } from './agenda-de-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDeConsultasPageRoutingModule
  ],
  declarations: [AgendaDeConsultasPage]
})
export class AgendaDeConsultasPageModule {}
