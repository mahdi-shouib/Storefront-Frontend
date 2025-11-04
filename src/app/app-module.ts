import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';

@NgModule({
	declarations: [
		App,
		NavBar,
		Footer
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule
	],
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideClientHydration(withEventReplay())
	],
	bootstrap: [App]
})
export class AppModule { }