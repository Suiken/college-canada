import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { PartnerService } from '../partner.service';

@NgModule({
  imports: [
    RouterModule.forChild([
    	{ path: '', component: AdminComponent }
	  ])
  ],
  declarations: [
	  AdminComponent
  ],
  providers: [
  	PartnerService
  ]
})
export class AdminModule {}