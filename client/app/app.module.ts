import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeadCarouselComponent } from './head-carousel.component';
import { HomeComponent } from './home.component';
import { PartnersComponent } from './partners.component';

@NgModule({
	declarations: [
		AppComponent, 
		HeadCarouselComponent, 
		HomeComponent, 
		PartnersComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		Ng2BootstrapModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'partners', component: PartnersComponent }
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }