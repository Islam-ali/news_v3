import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './@home/home.module';
import { Error404Component } from './@core/errors/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./@home/home.module').then((m)=>m.HomeModule)
  },
  {
    path: '**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'top'
})],
  exports: [RouterModule,HomeModule]
})
export class AppRoutingModule { }
