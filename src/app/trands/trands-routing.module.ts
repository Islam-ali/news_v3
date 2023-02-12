import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrandsComponent } from './trands.component';

const routes: Routes = [
  { path: 'Trands/:slug', component: TrandsComponent },
  {
    path: '',
    loadChildren: () =>
      import('../trands/trands.module').then((m) => m.TrandsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrandsRoutingModule {}
