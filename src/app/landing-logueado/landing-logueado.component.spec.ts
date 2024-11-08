import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLogueadoComponent } from './landing-logueado.component';

describe('LandingLogueadoComponent', () => {
  let component: LandingLogueadoComponent;
  let fixture: ComponentFixture<LandingLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLogueadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
