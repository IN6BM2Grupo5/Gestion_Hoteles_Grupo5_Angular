import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGeneralComponent } from './estadistica-general.component';

describe('EstadisticaGeneralComponent', () => {
  let component: EstadisticaGeneralComponent;
  let fixture: ComponentFixture<EstadisticaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
