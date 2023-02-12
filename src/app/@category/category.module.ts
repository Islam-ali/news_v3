import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { CategoryContentComponent } from './components/category-content/category-content.component';
import { TrandsModule } from '../trands/trands.module';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
  declarations: [CategoryContentComponent, ArticlesComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule, TrandsModule],
})
export class CategoryModule {}
