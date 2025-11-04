import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Cart } from './pages/cart/cart';

const routes: Routes = [
	{ path: '', component: ProductsList },
	{ path: 'cart', component: Cart }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }