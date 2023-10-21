import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { ProductDetailsPageComponent } from './Pages/product-details-page/product-details-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HistoryComponent } from './Components/history/history.component';
import { BenefitsComponent } from './Components/benefits/benefits.component';
import { SpecialsComponent } from './Components/specials/specials.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { AboutComponent } from './Components/about/about.component';
import { MenuComponent } from './Components/menu/menu.component';
import { CartComponent } from './Components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    HeroComponent,
    HistoryComponent,
    BenefitsComponent,
    SpecialsComponent,
    FooterComponent,
    MenuPageComponent,
    CartPageComponent,
    AboutComponent,
    MenuComponent,
    CartComponent,
    DetailsComponent,
    ProductDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
