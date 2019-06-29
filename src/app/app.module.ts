import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';
// import { ProductAddComponent } from './product-add/product-add.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  {
    path: 'currency',
    component: CurrencyComponent,
    data: { title: 'Currency' }
  },
  {
    path: 'weather',
    component: WeatherComponent,
    data: { title: 'Weather' }
  },
  // {
  //   path: 'products',
  //   component: ProductComponent,
  //   data: { title: 'Product List' }
  // },
  // {
  //   path: 'product-details/:id',
  //   component: ProductDetailComponent,
  //   data: { title: 'Product Details' }
  // },
  // {
  //   path: 'product-add',
  //   component: ProductAddComponent,
  //   data: { title: 'Product Add' }
  // },
  // {
  //   path: 'product-edit/:id',
  //   component: ProductEditComponent,
  //   data: { title: 'Product Edit' }
  // },
  { path: '',
    redirectTo: '/currency',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
   AppComponent,
  //  ProductComponent,
  //  ProductDetailComponent,
  //  ProductEditComponent,
  //  ProductAddComponent,
   CurrencyComponent,
  WeatherComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
