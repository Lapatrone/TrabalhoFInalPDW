import { NovaDespesaComponent } from './nova-despesa/nova-despesa.component';
import { AllDespesasComponent } from './all-despesas/all-despesas.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'all-despesas', pathMatch: 'full' },
  { path: 'all-despesas', component: AllDespesasComponent },
  { path: 'nova-despesa', component: NovaDespesaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
