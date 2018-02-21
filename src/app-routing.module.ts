import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './app/product/product.component';
import { BasketComponent } from './app/basket/basket.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ProductComponent, data : Array},
  { path: 'basket', component: BasketComponent, data : Array }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}