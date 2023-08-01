import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingLoginComponent } from './existing-login.component';

describe('ExistingLoginComponent', () => {
  let component: ExistingLoginComponent;
  let fixture: ComponentFixture<ExistingLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingLoginComponent]
    });
    fixture = TestBed.createComponent(ExistingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
