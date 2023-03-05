import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { CategoryContentComponent } from './components/category-content/category-content.component';
import { TrandsModule } from '../trands/trands.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

@NgModule({
  declarations: [CategoryContentComponent, ArticlesComponent, ArticleDetailsComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule, TrandsModule],
})
export class CategoryModule {}
