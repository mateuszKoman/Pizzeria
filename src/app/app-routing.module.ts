import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import komponentów, które chcesz użyć jako podstrony
import { WelcomePageComponent } from './pages/welcomePage/welcomePage.component';
import { ShoppingCartPageComponent } from './pages/shoppingCartPage/shoppingCartPage.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'cart', component: ShoppingCartPageComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
