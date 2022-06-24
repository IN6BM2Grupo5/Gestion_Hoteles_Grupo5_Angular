import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaReporteHotelComponent } from './estadistica-reporte-hotel.component';

describe('EstadisticaReporteHotelComponent', () => {
  let component: EstadisticaReporteHotelComponent;
  let fixture: ComponentFixture<EstadisticaReporteHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaReporteHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaReporteHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
