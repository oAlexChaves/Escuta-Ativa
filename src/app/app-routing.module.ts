import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'consultorios-proximos',
    loadChildren: () => import('./consultorios-proximos/consultorios-proximos.module').then( m => m.ConsultoriosProximosPageModule)
  },
  {
    path: 'procurar-consultas',
    loadChildren: () => import('./procurar-consultas/procurar-consultas.module').then( m => m.ProcurarConsultasPageModule)
  },
  {
    path: 'agenda-de-consultas',
    loadChildren: () => import('./agenda-de-consultas/agenda-de-consultas.module').then( m => m.AgendaDeConsultasPageModule)
  },
  {
    path: 'ficha-financeira',
    loadChildren: () => import('./ficha-financeira/ficha-financeira.module').then( m => m.FichaFinanceiraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }