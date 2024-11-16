import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonalComponent } from './listar-personal.component';

describe('ListarPersonalComponent', () => {
  let component: ListarPersonalComponent;
  let fixture: ComponentFixture<ListarPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
