import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismDescriptionComponent } from './tourism-description.component';

describe('TourismDescriptionComponent', () => {
  let component: TourismDescriptionComponent;
  let fixture: ComponentFixture<TourismDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
