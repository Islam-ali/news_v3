import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDateilsComponent } from './news-dateils.component';

describe('NewsDateilsComponent', () => {
  let component: NewsDateilsComponent;
  let fixture: ComponentFixture<NewsDateilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDateilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDateilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
