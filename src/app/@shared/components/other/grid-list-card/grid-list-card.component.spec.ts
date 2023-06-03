import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListCardComponent } from './grid-list-card.component';

describe('GridListCardComponent', () => {
  let component: GridListCardComponent;
  let fixture: ComponentFixture<GridListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
