import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { ProductsList } from './pages/products-list/products-list';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';
import { OrderSuccess } from './pages/order-success/order-success';

@NgModule({
	declarations: [
		App,
		NavBar,
		Footer,
		ProductsList,
		ProductDetails,
		Cart,
		OrderSuccess,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule
	],
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch())
	],
	bootstrap: [App]
})
export class AppModule { }