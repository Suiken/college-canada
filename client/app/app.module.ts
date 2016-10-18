import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadCarouselComponent } from './head-carousel.component';
import { HomeComponent } from './home.component';
import { PartnersComponent } from './partners.component';

import { PartnerService } from './partner.service';

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
		HttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'partners', component: PartnersComponent }
		])
	],
	providers: [ PartnerService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }