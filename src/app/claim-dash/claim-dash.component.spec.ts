import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDashComponent } from './claim-dash.component';

describe('ClaimDashComponent', () => {
  let component: ClaimDashComponent;
  let fixture: ComponentFixture<ClaimDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimDashComponent]
    });
    fixture = TestBed.createComponent(ClaimDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
