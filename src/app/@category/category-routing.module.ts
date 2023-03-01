import { TrandsComponent } from './../trands/trands.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryContentComponent } from './components/category-content/category-content.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TrendsNewsComponent } from '../trands/trends-news/trends-news.component';
import { SearchComponent } from '../@home/components/search/search.component';

const routes: Routes = [
  { path: 'category/:slug', component: CategoryContentComponent },
  { path: 'trends', component: TrendsNewsComponent },

  { path: 'Trends/:slug/:id', component: TrandsComponent },
  { path: 'articles', component:ArticlesComponent },
  { path: 'search/:key', component:SearchComponent },
  {
    path: '',
    loadChildren: () =>
      import('../@news/newscontent.module').then((m) => m.NewscontentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
