import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpendingRoutingModule } from './spending-routing.module';
import { SpendingComponent } from './pages/spending/spending.component';
import { AccountModule } from 'src/app/modules/account/account.module';

@NgModule({
    declarations: [SpendingComponent],
    imports: [CommonModule, SpendingRoutingModule, AccountModule],
})
export class SpendingModule {}
