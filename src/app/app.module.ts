import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { WelcomePageComponent } from 'src/app/pages/welcomePage/welcomePage.component';
import { ShoppingCartPageComponent } from 'src/app/pages/shoppingCartPage/shoppingCartPage.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/input/input.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ShoppingCartPageComponent,
    HeaderComponent,
    InputComponent,
    FooterComponent
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
