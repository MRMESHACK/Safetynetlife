import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimInformationComponent } from './claim-information.component';

describe('ClaimInformationComponent', () => {
  let component: ClaimInformationComponent;
  let fixture: ComponentFixture<ClaimInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimInformationComponent]
    });
    fixture = TestBed.createComponent(ClaimInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
