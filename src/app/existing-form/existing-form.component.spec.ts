import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingFormComponent } from './existing-form.component';

describe('ExistingFormComponent', () => {
  let component: ExistingFormComponent;
  let fixture: ComponentFixture<ExistingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingFormComponent]
    });
    fixture = TestBed.createComponent(ExistingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
