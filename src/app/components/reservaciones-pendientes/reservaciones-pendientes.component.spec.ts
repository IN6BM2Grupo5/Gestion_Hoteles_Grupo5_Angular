import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesPendientesComponent } from './reservaciones-pendientes.component';

describe('ReservacionesPendientesComponent', () => {
  let component: ReservacionesPendientesComponent;
  let fixture: ComponentFixture<ReservacionesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionesPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
