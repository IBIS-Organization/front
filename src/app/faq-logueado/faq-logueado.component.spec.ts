import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLogueadoComponent } from './faq-logueado.component';

describe('FaqLogueadoComponent', () => {
  let component: FaqLogueadoComponent;
  let fixture: ComponentFixture<FaqLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqLogueadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
