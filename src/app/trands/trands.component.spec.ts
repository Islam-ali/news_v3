import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandsComponent } from './trands.component';

describe('TrandsComponent', () => {
  let component: TrandsComponent;
  let fixture: ComponentFixture<TrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
