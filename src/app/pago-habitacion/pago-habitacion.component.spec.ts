import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoHabitacionComponent } from './pago-habitacion.component';

describe('PagoHabitacionComponent', () => {
  let component: PagoHabitacionComponent;
  let fixture: ComponentFixture<PagoHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoHabitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
