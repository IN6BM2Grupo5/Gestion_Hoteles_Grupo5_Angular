import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesGeneralesComponent } from './hoteles-generales.component';

describe('HotelesGeneralesComponent', () => {
  let component: HotelesGeneralesComponent;
  let fixture: ComponentFixture<HotelesGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
