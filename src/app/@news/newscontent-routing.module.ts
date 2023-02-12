import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDateilsComponent } from './news-dateils/news-dateils.component';

const routes: Routes = [
  { path: 'News/:slug', component: NewsDateilsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewscontentRoutingModule { }
