import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesUsuarioComponent } from './habitaciones-usuario.component';

describe('HabitacionesUsuarioComponent', () => {
  let component: HabitacionesUsuarioComponent;
  let fixture: ComponentFixture<HabitacionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
