import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Partner } from './partner';
import { PartnerService } from './partner.service';

@Component({
  moduleId: module.id,
  selector: 'partners',
  templateUrl: 'partners.component.html'
})

export class PartnersComponent implements OnInit{
	private partners: Partner[];

	constructor(private partnerService: PartnerService) { }

	getPartners(): void {
		this.partnerService
			.getPartners()
			.then(partners => this.partners = partners);
			//.then(partners => this.partners = partners);
	}

	private handleError (error: any) {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
  	}

	ngOnInit(): void {
		this.getPartners();
	}
}