import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: 'app/home/home.module#HomeModule' },
      { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}