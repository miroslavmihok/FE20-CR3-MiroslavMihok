import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { ProductDetailsPageComponent } from './Pages/product-details-page/product-details-page.component';

const routes: Routes = [{
  path:"",component: HomePageComponent
},{
  path:"about", component: AboutPageComponent
},{
  path:"menu", component: MenuPageComponent,
},{
  path:"cart", component: CartPageComponent
},{
  path: 'products/:productId', component: ProductDetailsPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
