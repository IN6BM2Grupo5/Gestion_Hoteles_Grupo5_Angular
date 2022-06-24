import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesAdminAppComponent } from './hoteles-admin-app.component';

describe('HotelesAdminAppComponent', () => {
  let component: HotelesAdminAppComponent;
  let fixture: ComponentFixture<HotelesAdminAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelesAdminAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
