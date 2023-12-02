import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInquiryComponent } from './business-inquiry.component';

describe('BusinessInquiryComponent', () => {
  let component: BusinessInquiryComponent;
  let fixture: ComponentFixture<BusinessInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
