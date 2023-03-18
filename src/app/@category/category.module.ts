import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { CategoryContentComponent } from './components/category-content/category-content.component';
import { TrandsModule } from '../trands/trands.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { TourismComponent } from './components/tourism/tourism.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TourismDescriptionComponent } from './components/tourism-description/tourism-description.component';
@NgModule({
  declarations: [CategoryContentComponent, ArticlesComponent, ArticleDetailsComponent, TourismComponent, TourismDescriptionComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedModule, TrandsModule,NgbPaginationModule],
})
export class CategoryModule {}
