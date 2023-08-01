import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExisitingComponent } from './exisiting.component';

describe('ExisitingComponent', () => {
  let component: ExisitingComponent;
  let fixture: ComponentFixture<ExisitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExisitingComponent]
    });
    fixture = TestBed.createComponent(ExisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
