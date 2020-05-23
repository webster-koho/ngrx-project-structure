import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
})
export class RootStoreModule {}
