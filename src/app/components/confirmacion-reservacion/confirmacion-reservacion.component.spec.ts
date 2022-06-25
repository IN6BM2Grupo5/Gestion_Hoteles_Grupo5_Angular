import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionReservacionComponent } from './confirmacion-reservacion.component';

describe('ConfirmacionReservacionComponent', () => {
  let component: ConfirmacionReservacionComponent;
  let fixture: ComponentFixture<ConfirmacionReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
