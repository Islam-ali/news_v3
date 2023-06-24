import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingComponent } from './infinite-scrolling.component';

describe('InfiniteScrollingComponent', () => {
  let component: InfiniteScrollingComponent;
  let fixture: ComponentFixture<InfiniteScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
