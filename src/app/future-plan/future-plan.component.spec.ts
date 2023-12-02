import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePlanComponent } from './future-plan.component';

describe('FuturePlanComponent', () => {
  let component: FuturePlanComponent;
  let fixture: ComponentFixture<FuturePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuturePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
