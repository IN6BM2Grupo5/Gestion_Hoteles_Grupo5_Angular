import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesDisponiblesComponent } from './habitaciones-disponibles.component';

describe('HabitacionesDisponiblesComponent', () => {
  let component: HabitacionesDisponiblesComponent;
  let fixture: ComponentFixture<HabitacionesDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionesDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
