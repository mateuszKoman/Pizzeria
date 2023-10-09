import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { WelcomePageComponent } from 'src/app/pages/welcomePage/welcomePage.component';
import { ShoppingCartPageComponent } from 'src/app/pages/shoppingCartPage/shoppingCartPage.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ShoppingCartPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
