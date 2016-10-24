import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { PartnersComponent } from '../partners/partners.component';
import { HeadCarouselComponent } from './head-carousel.component';
import { UsComponent } from '../us/us.component';
import { ApplicationComponent } from '../application/application.component';
import { ServicesAdvantagesComponent } from '../services-advantages/services-advantages.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'home',
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
            loadChildren: 'app/partners/partners.module#PartnersModule'
          },
          {
            path: 'us',
            component: UsComponent
          },
          {
            path: 'application',
            component: ApplicationComponent
          },
          {
            path: 'services-advantages',
            component: ServicesAdvantagesComponent
          }
        ]
      }
    ])
  ],
  declarations: [
	  HomeComponent,
    HeadCarouselComponent,
    MenuComponent,
    UsComponent,
    ApplicationComponent,
    ServicesAdvantagesComponent
  ],
  providers: [
  ]
})
export class HomeModule {  }