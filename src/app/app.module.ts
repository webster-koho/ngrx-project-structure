import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/components/app/app.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
