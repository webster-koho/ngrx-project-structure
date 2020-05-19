import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingsComponent } from './pages/savings/savings.component';

const routes: Routes = [{ path: '', component: SavingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
