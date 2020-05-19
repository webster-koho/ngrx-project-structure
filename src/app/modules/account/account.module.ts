import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './store/reducers';

@NgModule({
    declarations: [],
    imports: [CommonModule, StoreModule.forFeature('account', reducer)],
})
export class AccountModule {}
