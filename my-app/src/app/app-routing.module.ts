import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartServiceComponent } from './cart-service/cart-service.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
    { path: '', component: NavBarComponent},
    {path: 'cart-service', component: CartServiceComponent },
    {path :'product', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
