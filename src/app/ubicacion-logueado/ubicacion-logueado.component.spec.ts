import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionLogueadoComponent } from './ubicacion-logueado.component';

describe('UbicacionLogueadoComponent', () => {
  let component: UbicacionLogueadoComponent;
  let fixture: ComponentFixture<UbicacionLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionLogueadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
