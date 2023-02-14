import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsNewsComponent } from './trends-news.component';

describe('TrendsNewsComponent', () => {
  let component: TrendsNewsComponent;
  let fixture: ComponentFixture<TrendsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
