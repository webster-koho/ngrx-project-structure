import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavingsRoutingModule } from './savings-routing.module';
import { SavingsComponent } from './pages/savings/savings.component';
import { LoggerModule } from '../../modules/logger/logger.module';

@NgModule({
    declarations: [SavingsComponent],
    imports: [CommonModule, SavingsRoutingModule, LoggerModule],
})
export class SavingsModule {}
