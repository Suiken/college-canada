import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { PartnersComponent } from '../partners/partners.component';
import { HeadCarouselComponent } from './head-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    	{ 
        path: '', 
        component: MenuComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent,
          },
          {
            path: 'partners',
            component: PartnersComponent
          }
        ]
      }
    ])
  ],
  declarations: [
	  HomeComponent,
    HeadCarouselComponent
  ],
  providers: [
  ]
})
export class HomeModule {  }