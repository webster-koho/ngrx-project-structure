import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpendingComponent } from './pages/spending/spending.component';

const routes: Routes = [{ path: '', component: SpendingComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SpendingRoutingModule {}
