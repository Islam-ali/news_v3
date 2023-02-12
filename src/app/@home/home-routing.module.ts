import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent,
  children:[] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{}
// export const  HomeRoutingModule= RouterModule.forChild(routes);
