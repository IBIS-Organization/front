import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesLogueadoComponent } from './habitaciones-logueado.component';

describe('HabitacionesLogueadoComponent', () => {
  let component: HabitacionesLogueadoComponent;
  let fixture: ComponentFixture<HabitacionesLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionesLogueadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionesLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
