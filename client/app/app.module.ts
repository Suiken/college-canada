import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { PartnersModule } from './partners/partners.module';

import { PartnerService } from './partner.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		Ng2BootstrapModule,
		HttpModule,
		AppRoutingModule,
		AdminModule,
		HomeModule,
		PartnersModule
	],
	providers: [ PartnerService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }