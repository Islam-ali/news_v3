import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideVerticalComponent } from './slide-vertical.component';

describe('SlideVerticalComponent', () => {
  let component: SlideVerticalComponent;
  let fixture: ComponentFixture<SlideVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
