import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PriceDetailComponent } from './product-list/price-detail/price-detail.component';
import { CartComponent } from './cart/cart.component';

import { CartService } from './cart/cart.service';
import { ProductListService } from './product-list/product-list.service';
import { OrderService } from './common/order.service';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ProductListComponent,
    PriceDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductListService,
    CartService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
