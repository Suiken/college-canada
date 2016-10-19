import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PartnersComponent } from './partners.component';

import { PartnerService } from '../partner.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    	{ path: '', component: PartnersComponent }
	])
  ],
  declarations: [
	  PartnersComponent
  ],
  providers: [
  	PartnerService
  ]
})
export class PartnersModule {}