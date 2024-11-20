import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosPersonalComponent } from './editar-datos-personal.component';

describe('EditarDatosPersonalComponent', () => {
  let component: EditarDatosPersonalComponent;
  let fixture: ComponentFixture<EditarDatosPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDatosPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
