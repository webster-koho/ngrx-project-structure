import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/components/app/app.component';
import { RootStoreModule } from './root/store/root-store/root-store.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, RootStoreModule, AccountModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
