import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionContrasenaComponent } from './confirmacion-contrasena.component';

describe('ConfirmacionContrasenaComponent', () => {
  let component: ConfirmacionContrasenaComponent;
  let fixture: ComponentFixture<ConfirmacionContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionContrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
