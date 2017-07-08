import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductListService } from './product-list/product-list.service';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
