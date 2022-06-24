import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHospedadosComponent } from './usuarios-hospedados.component';

describe('UsuariosHospedadosComponent', () => {
  let component: UsuariosHospedadosComponent;
  let fixture: ComponentFixture<UsuariosHospedadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosHospedadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosHospedadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
