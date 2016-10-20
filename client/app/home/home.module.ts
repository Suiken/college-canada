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
          }
          // {
          //   path: 'services',
          //   component: ServicesComponent
          // },
          // {
          //   path: 'contacts',
          //   component: ContactsComponent
          // }
        ]
      }
    ])
  ],
  declarations: [
	  HomeComponent,
    HeadCarouselComponent,
    MenuComponent,
  ],
  providers: [
  ]
})
export class HomeModule {  }